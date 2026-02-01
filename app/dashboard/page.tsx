'use client';

export default function DashboardPage() {
    // Redirect langsung ke projects
    if (typeof window !== 'undefined') {
        window.location.href = '/dashboard/projects';
    }

    return null;
}
