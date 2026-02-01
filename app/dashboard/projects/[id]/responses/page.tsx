'use client';

import { use } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

// Dummy responses data
const responses = [
    { id: 1, name: 'Ahmad Rizki', email: 'ahmad@email.com', age: 21, satisfaction: 9, date: '2026-01-31 10:30' },
    { id: 2, name: 'Siti Nurhaliza', email: 'siti@email.com', age: 20, satisfaction: 10, date: '2026-01-31 09:15' },
    { id: 3, name: 'Budi Santoso', email: 'budi@email.com', age: 22, satisfaction: 8, date: '2026-01-30 16:45' },
    { id: 4, name: 'Dewi Lestari', email: 'dewi@email.com', age: 19, satisfaction: 9, date: '2026-01-30 14:20' },
    { id: 5, name: 'Eko Prasetyo', email: 'eko@email.com', age: 23, satisfaction: 7, date: '2026-01-30 11:00' },
];

export default function ResponsesPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return (
        <DashboardLayout projectId={id}>
            <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                                Data Responden
                            </h1>
                            <p className="text-neutral-600">
                                Lihat dan kelola semua respons yang masuk dari survei Anda
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline">
                                Filter
                            </Button>
                            <Button variant="primary" icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            }>
                                Ekspor Data
                            </Button>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-4 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <p className="text-2xl font-bold text-blue-900">{responses.length}</p>
                            <p className="text-sm text-blue-700">Total Respons</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <p className="text-2xl font-bold text-green-900">15</p>
                            <p className="text-sm text-green-700">Hari Ini</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                            <p className="text-2xl font-bold text-purple-900">87%</p>
                            <p className="text-sm text-purple-700">Tingkat Penyelesaian</p>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                            <p className="text-2xl font-bold text-yellow-900">8.6</p>
                            <p className="text-sm text-yellow-700">Rata-rata Kepuasan</p>
                        </div>
                    </div>
                </div>

                {/* Data Table */}
                <Card>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-neutral-200">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">
                                        <input type="checkbox" className="w-4 h-4 rounded border-neutral-300" />
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">#</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Nama</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Email</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Usia</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Kepuasan</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Tanggal</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {responses.map((response) => (
                                    <tr key={response.id} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                                        <td className="px-4 py-3">
                                            <input type="checkbox" className="w-4 h-4 rounded border-neutral-300" />
                                        </td>
                                        <td className="px-4 py-3 text-sm text-neutral-600">#{response.id}</td>
                                        <td className="px-4 py-3">
                                            <span className="font-medium text-neutral-900">{response.name}</span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-neutral-600">{response.email}</td>
                                        <td className="px-4 py-3 text-sm text-neutral-600">{response.age}</td>
                                        <td className="px-4 py-3">
                                            <Badge variant={response.satisfaction >= 8 ? 'success' : response.satisfaction >= 6 ? 'warning' : 'danger'}>
                                                {response.satisfaction}/10
                                            </Badge>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-neutral-600">{response.date}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex gap-2">
                                                <button className="text-blue-600 hover:text-blue-700" title="Lihat Detail">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </button>
                                                <button className="text-red-600 hover:text-red-700" title="Hapus">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-neutral-200">
                        <p className="text-sm text-neutral-600">
                            Menampilkan {responses.length} dari 245 respons
                        </p>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 rounded border border-neutral-300 hover:bg-neutral-50 text-sm disabled:opacity-50" disabled>
                                Sebelumnya
                            </button>
                            <button className="px-3 py-1 rounded bg-blue-600 text-white text-sm">
                                1
                            </button>
                            <button className="px-3 py-1 rounded border border-neutral-300 hover:bg-neutral-50 text-sm">
                                2
                            </button>
                            <button className="px-3 py-1 rounded border border-neutral-300 hover:bg-neutral-50 text-sm">
                                3
                            </button>
                            <button className="px-3 py-1 rounded border border-neutral-300 hover:bg-neutral-50 text-sm">
                                Selanjutnya
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
}
