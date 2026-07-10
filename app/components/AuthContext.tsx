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

type StoredUser = User & { password: string };

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  register: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  }) => { success: boolean; error?: string };
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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
    } catch {
      // corrupted storage — ignore
    }
    setLoading(false);
  }, []);

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
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      password: data.password,
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
    localStorage.removeItem("dentin_session");
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
