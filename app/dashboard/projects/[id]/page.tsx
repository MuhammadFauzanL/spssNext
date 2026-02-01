'use client';

import { use } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

// Dummy project data
const projectData = {
    id: 1,
    title: 'Survey Kepuasan Mahasiswa 2026',
    description: 'Mengukur tingkat kepuasan mahasiswa terhadap fasilitas kampus',
    status: 'active',
    responses: 245,
    formFields: 12,
    completionRate: 87,
    lastResponse: '15 menit yang lalu',
};

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return (
        <DashboardLayout projectId={id}>
            <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold text-neutral-900">
                                    {projectData.title}
                                </h1>
                                <Badge variant={projectData.status === 'active' ? 'success' : 'neutral'}>
                                    {projectData.status === 'active' ? 'Aktif' : 'Draft'}
                                </Badge>
                            </div>
                            <p className="text-neutral-600">{projectData.description}</p>
                        </div>
                        <Link href={`/dashboard/projects/${id}/settings`}>
                            <Button variant="outline">
                                Pengaturan
                            </Button>
                        </Link>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <StatCard
                            title="Total Responden"
                            value={projectData.responses}
                            color="blue"
                            trend="up"
                            trendValue="+15 hari ini"
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            }
                        />
                        <StatCard
                            title="Pertanyaan"
                            value={projectData.formFields}
                            subtitle="dalam form"
                            color="purple"
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            }
                        />
                        <StatCard
                            title="Tingkat Penyelesaian"
                            value={`${projectData.completionRate}%`}
                            color="green"
                            trend="up"
                            trendValue="+5%"
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                        />
                        <StatCard
                            title="Respons Terakhir"
                            value={projectData.lastResponse}
                            color="red"
                            icon={
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                        />
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link href={`/dashboard/projects/${id}/form`} className="group">
                        <div className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-1">Edit Form</h3>
                            <p className="text-sm text-neutral-600">Kelola pertanyaan survei</p>
                        </div>
                    </Link>

                    <Link href={`/dashboard/projects/${id}/responses`} className="group">
                        <div className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-1">Lihat Data</h3>
                            <p className="text-sm text-neutral-600">Tabel respons lengkap</p>
                        </div>
                    </Link>

                    <Link href={`/dashboard/projects/${id}/health`} className="group">
                        <div className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-1">Cek Kesehatan</h3>
                            <p className="text-sm text-neutral-600">Kualitas data Anda</p>
                        </div>
                    </Link>

                    <Link href={`/dashboard/projects/${id}/visualize`} className="group">
                        <div className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-1">Visualisasi</h3>
                            <p className="text-sm text-neutral-600">Grafik dan diagram</p>
                        </div>
                    </Link>
                </div>
            </div>
        </DashboardLayout>
    );
}
