'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface User {
    email: string;
    username: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    register: (username: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const savedUser = localStorage.getItem('user');

        if (savedUser && savedUser !== "undefined") {
            try {
                setUser(JSON.parse(savedUser));
            } catch (error) {
                console.error("Gagal membaca data user dari storage:", error);
                localStorage.removeItem('user');
            }
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            const isAuthPage = pathname === '/login' || pathname === '/register';
            const isDashboardPage = pathname?.startsWith('/dashboard');

            if (isDashboardPage && !user) {
                router.push('/login');
            } else if (isAuthPage && user) {
                router.push('/dashboard/projects');
            }
        }
    }, [user, pathname, isLoading, router]);

    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Gagal login");
            }

            setUser(data.user);

            if (typeof window !== 'undefined') {
                localStorage.setItem('user', JSON.stringify(data.user));
            }

            router.push('/dashboard');
            return true;
        } catch (error: any) {
            console.error("Login Error:", error.message);
            return false;
        }
    };

    const register = async (username: string, email: string, password: string): Promise<boolean> => {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Gagal mendaftar");
            }

            setUser(data.user);

            if (typeof window !== 'undefined') {
                localStorage.setItem('user', JSON.stringify(data.user));
            }

            router.push('/dashboard');
            return true;
        } catch (error: any) {
            console.error("Registration Error:", error.message);
            return false;
        }
    };

    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('user');
        }
        setUser(null);
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
