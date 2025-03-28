/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import api from './api';

interface User {
  is_staff: User | null;
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
}

interface AuthTokens {
  access: string;
  refresh: string;
}

interface AuthContextType {
  user: User | null;
  login: (tokens: AuthTokens, userData: User) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const access = localStorage.getItem('access');
      if (access) {
        try {
          const response = await api.get('/user/me');
          setUser(response.data);
        } catch (error) {
          console.error('Auth check failed:', error);
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (tokens: AuthTokens, userData: User): Promise<void> => {
    try {
      localStorage.setItem('access', tokens.access);
      localStorage.setItem('refresh', tokens.refresh);
      setUser(userData);
    } catch (error) {
      console.error('Login error:', error);
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      setUser(null);
      throw error;
    }
  };

  const logout = (): void => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};