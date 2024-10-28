import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (data: { email: string; password: string }) => boolean;
  register: (data: { email: string; password: string; name: string }) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_STORAGE_KEY = 'asiamart_users';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load users from localStorage on initial mount
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const getUsers = (): Record<string, { password: string; name: string }> => {
    const users = localStorage.getItem(USERS_STORAGE_KEY);
    return users ? JSON.parse(users) : {};
  };

  const login = (data: { email: string; password: string }): boolean => {
    const users = getUsers();
    const userRecord = users[data.email];

    if (userRecord && userRecord.password === data.password) {
      const userData = { email: data.email, name: userRecord.name };
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const register = (data: { email: string; password: string; name: string }): boolean => {
    const users = getUsers();
    
    // Check if user already exists
    if (users[data.email]) {
      return false;
    }

    // Store new user
    users[data.email] = {
      password: data.password,
      name: data.name
    };
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

    // Auto login after registration
    const userData = { email: data.email, name: data.name };
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};