'use client';

import { use } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ExportPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return (
        <DashboardLayout projectId={id}>
            <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                        Ekspor & Laporan
                    </h1>
                    <p className="text-neutral-600">
                        Download data dan buat laporan dalam berbagai format
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Data Export */}
                    <Card>
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">Ekspor Data</h2>
                        <p className="text-sm text-neutral-600 mb-6">
                            Download semua data respons dalam format yang Anda butuhkan
                        </p>

                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-neutral-200 hover:border-green-400 hover:bg-green-50 transition-all group">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-neutral-900">Excel (.xlsx)</p>
                                        <p className="text-sm text-neutral-600">Kompatibel dengan Microsoft Excel</p>
                                    </div>
                                </div>
                                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </button>

                            <button className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-neutral-200 hover:border-blue-400 hover:bg-blue-50 transition-all group">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-neutral-900">CSV (.csv)</p>
                                        <p className="text-sm text-neutral-600">Format universal untuk data</p>
                                    </div>
                                </div>
                                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </button>

                            <button className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-neutral-200 hover:border-purple-400 hover:bg-purple-50 transition-all group">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-neutral-900">JSON (.json)</p>
                                        <p className="text-sm text-neutral-600">Untuk integrasi API</p>
                                    </div>
                                </div>
                                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </button>
                        </div>
                    </Card>

                    {/* Report Generation */}
                    <Card>
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">Buat Laporan</h2>
                        <p className="text-sm text-neutral-600 mb-6">
                            Generate laporan lengkap dengan statistik dan visualisasi
                        </p>

                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-neutral-200 hover:border-red-400 hover:bg-red-50 transition-all group">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-neutral-900">Laporan PDF Lengkap</p>
                                        <p className="text-sm text-neutral-600">Termasuk grafik & statistik</p>
                                    </div>
                                </div>
                                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </button>

                            <button className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-neutral-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all group">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-neutral-900">Laporan Ringkas</p>
                                        <p className="text-sm text-neutral-600">Hanya statistik utama</p>
                                    </div>
                                </div>
                                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm text-blue-900">
                                <strong>💡 Tips:</strong> Laporan PDF otomatis menyertakan grafik, tabel data, dan interpretasi statistik dalam Bahasa Indonesia.
                            </p>
                        </div>
                    </Card>

                    {/* Export Settings */}
                    <Card className="md:col-span-2">
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">Pengaturan Ekspor</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">
                                    Rentang Tanggal
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <input
                                        type="date"
                                        className="px-4 py-2 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    />
                                    <input
                                        type="date"
                                        className="px-4 py-2 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">
                                    Field yang Disertakan
                                </label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-neutral-300 text-blue-600" />
                                        <span className="text-sm">Semua Field</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-neutral-300 text-blue-600" />
                                        <span className="text-sm">Timestamp</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <Button variant="primary">
                                Terapkan Pengaturan
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
