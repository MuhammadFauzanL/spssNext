'use client';

import { AuthProvider } from '@/components/auth/AuthContext';

export default function DashboardRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AuthProvider>{children}</AuthProvider>;
}
