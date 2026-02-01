'use client';

import React from 'react';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
    projectId?: string;
}

export function DashboardLayout({ children, projectId }: DashboardLayoutProps) {
    return (
        <div className="flex min-h-screen bg-neutral-50">
            <Sidebar projectId={projectId} />
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    );
}
