'use client';

import { AuthProvider } from '@/components/auth/AuthContext';

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AuthProvider>{children}</AuthProvider>;
}
