"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
};

export type Appointment = {
  id: string;
  userId: string;
  service: string;
  date: string;   // YYYY-MM-DD
  time: string;   // "9:00 AM"
  notes: string;
  status: "upcoming" | "completed" | "cancelled";
  bookedAt: string;
};

type StoredUser = User & { password: string };

type AuthContextType = {
  user: User | null;
  loading: boolean;
  appointments: Appointment[];
  login: (email: string, password: string) => { success: boolean; error?: string };
  register: (data: {
    firstName: string; lastName: string; email: string; phone: string; password: string;
  }) => { success: boolean; error?: string };
  logout: () => void;
  bookAppointment: (data: Pick<Appointment, "service" | "date" | "time" | "notes">) => Appointment;
  cancelAppointment: (id: string) => void;
  updateProfile: (data: { firstName?: string; lastName?: string; phone?: string }) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser]               = useState<User | null>(null);
  const [loading, setLoading]         = useState(true);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Restore session on mount
  useEffect(() => {
    try {
      const sessionId = localStorage.getItem("dentin_session");
      if (sessionId) {
        const users: StoredUser[] = JSON.parse(localStorage.getItem("dentin_users") || "[]");
        const found = users.find((u) => u.id === sessionId);
        if (found) {
          const { password: _, ...safeUser } = found;
          setUser(safeUser);
        }
      }
    } catch { /* corrupted storage */ }
    setLoading(false);
  }, []);

  // Load this user's appointments whenever user changes
  useEffect(() => {
    if (!user) { setAppointments([]); return; }
    try {
      const all: Appointment[] = JSON.parse(localStorage.getItem("dentin_appointments") || "[]");
      // Mark past-dated upcoming appointments as completed
      const now = new Date();
      const resolved = all.map((a) => {
        if (a.status === "upcoming" && a.userId === user.id) {
          const apptDate = new Date(`${a.date}T${convertTo24(a.time)}`);
          if (apptDate < now) return { ...a, status: "completed" as const };
        }
        return a;
      });
      if (JSON.stringify(resolved) !== JSON.stringify(all)) {
        localStorage.setItem("dentin_appointments", JSON.stringify(resolved));
      }
      setAppointments(resolved.filter((a) => a.userId === user.id));
    } catch { setAppointments([]); }
  }, [user]);

  function login(email: string, password: string) {
    const users: StoredUser[] = JSON.parse(localStorage.getItem("dentin_users") || "[]");
    const match = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!match) return { success: false, error: "Invalid email or password." };
    const { password: _, ...safeUser } = match;
    setUser(safeUser);
    localStorage.setItem("dentin_session", match.id);
    return { success: true };
  }

  function register(data: { firstName: string; lastName: string; email: string; phone: string; password: string }) {
    const users: StoredUser[] = JSON.parse(localStorage.getItem("dentin_users") || "[]");
    if (users.some((u) => u.email.toLowerCase() === data.email.toLowerCase())) {
      return { success: false, error: "An account with this email already exists." };
    }
    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      ...data,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    localStorage.setItem("dentin_users", JSON.stringify(users));
    const { password: _, ...safeUser } = newUser;
    setUser(safeUser);
    localStorage.setItem("dentin_session", newUser.id);
    return { success: true };
  }

  function logout() {
    setUser(null);
    setAppointments([]);
    localStorage.removeItem("dentin_session");
  }

  function bookAppointment(data: Pick<Appointment, "service" | "date" | "time" | "notes">): Appointment {
    const newAppt: Appointment = {
      id: crypto.randomUUID(),
      userId: user!.id,
      ...data,
      status: "upcoming",
      bookedAt: new Date().toISOString(),
    };
    const all: Appointment[] = JSON.parse(localStorage.getItem("dentin_appointments") || "[]");
    all.push(newAppt);
    localStorage.setItem("dentin_appointments", JSON.stringify(all));
    setAppointments((prev) => [...prev, newAppt]);
    return newAppt;
  }

  function cancelAppointment(id: string) {
    const all: Appointment[] = JSON.parse(localStorage.getItem("dentin_appointments") || "[]");
    const updated = all.map((a) => a.id === id ? { ...a, status: "cancelled" as const } : a);
    localStorage.setItem("dentin_appointments", JSON.stringify(updated));
    setAppointments((prev) => prev.map((a) => a.id === id ? { ...a, status: "cancelled" } : a));
  }

  function updateProfile(data: { firstName?: string; lastName?: string; phone?: string }) {
    if (!user) return;
    const users: StoredUser[] = JSON.parse(localStorage.getItem("dentin_users") || "[]");
    const updated = users.map((u) => u.id === user.id ? { ...u, ...data } : u);
    localStorage.setItem("dentin_users", JSON.stringify(updated));
    setUser((prev) => prev ? { ...prev, ...data } : null);
  }

  return (
    <AuthContext.Provider value={{
      user, loading, appointments,
      login, register, logout,
      bookAppointment, cancelAppointment, updateProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

// "9:00 AM" → "09:00"
function convertTo24(time: string): string {
  const [t, meridiem] = time.split(" ");
  let [h, m] = t.split(":").map(Number);
  if (meridiem === "PM" && h !== 12) h += 12;
  if (meridiem === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
