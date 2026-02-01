'use client';

import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { Card, StatCard } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

// Dummy data
const projects = [
    {
        id: 1,
        title: 'Survey Kepuasan Mahasiswa 2026',
        description: 'Mengukur tingkat kepuasan mahasiswa terhadap fasilitas kampus',
        responses: 245,
        status: 'active',
        lastUpdated: '2 jam yang lalu',
    },
    {
        id: 2,
        title: 'Penelitian Perilaku Konsumen',
        description: 'Analisis pola pembelian produk online generasi Z',
        responses: 189,
        status: 'active',
        lastUpdated: '1 hari yang lalu',
    },
    {
        id: 3,
        title: 'Evaluasi Program Pelatihan',
        description: 'Evaluasi efektivitas program pelatihan karyawan',
        responses: 56,
        status: 'draft',
        lastUpdated: '3 hari yang lalu',
    },
];

export default function ProjectsPage() {
    return (
        <DashboardLayout>
            <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-3xl font-bold text-neutral-900">Proyek Saya</h1>
                            <p className="text-neutral-600 mt-1">
                                Kelola semua proyek survei dan analisis data Anda
                            </p>
                        </div>
                        <Link href="/dashboard/projects/new">
                            <Button variant="primary" size="lg" icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            }>
                                Buat Proyek Baru
                            </Button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <StatCard
                            title="Total Proyek"
                            value="3"
                            color="blue"
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            }
                        />
                        <StatCard
                            title="Total Responden"
                            value="490"
                            color="green"
                            trend="up"
                            trendValue="+12%"
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            }
                        />
                        <StatCard
                            title="Proyek Aktif"
                            value="2"
                            color="purple"
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            }
                        />
                        <StatCard
                            title="Rata-rata Responden"
                            value="163"
                            subtitle="per proyek"
                            color="red"
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            }
                        />
                    </div>
                </div>

                {/* Projects List */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Link key={project.id} href={`/dashboard/projects/${project.id}`}>
                            <Card className="h-full">
                                <div className="flex items-start justify-between mb-3">
                                    <Badge variant={project.status === 'active' ? 'success' : 'neutral'}>
                                        {project.status === 'active' ? 'Aktif' : 'Draft'}
                                    </Badge>
                                    <button className="text-neutral-400 hover:text-neutral-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                    </button>
                                </div>

                                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between text-sm border-t border-neutral-100 pt-4 mt-4">
                                    <div className="flex items-center gap-2 text-neutral-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="font-semibold text-neutral-900">{project.responses}</span>
                                        <span>responden</span>
                                    </div>
                                    <span className="text-neutral-500">{project.lastUpdated}</span>
                                </div>
                            </Card>
                        </Link>
                    ))}

                    {/* Empty State / Add New Card */}
                    <Link href="/dashboard/projects/new">
                        <Card className="h-full border-dashed border-2 border-neutral-300 bg-neutral-50 hover:border-blue-400 hover:bg-blue-50 transition-all">
                            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-neutral-700 mb-1">
                                    Buat Proyek Baru
                                </h3>
                                <p className="text-sm text-neutral-500">
                                    Mulai survei dan analisis data baru
                                </p>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
        </DashboardLayout>
    );
}
