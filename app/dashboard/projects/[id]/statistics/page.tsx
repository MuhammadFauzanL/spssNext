'use client';

import { use } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';

// Dummy statistics data
const statsData = {
    kepuasan: {
        name: 'Tingkat Kepuasan (Skala 1-10)',
        mean: 8.76,
        median: 9,
        mode: 10,
        stdDev: 1.24,
        variance: 1.54,
        min: 5,
        max: 10,
        range: 5,
        q1: 8,
        q3: 10,
        iqr: 2,
        count: 245,
    },
    usia: {
        name: 'Usia Responden (tahun)',
        mean: 21.3,
        median: 21,
        mode: 20,
        stdDev: 2.1,
        variance: 4.41,
        min: 18,
        max: 28,
        range: 10,
        q1: 20,
        q3: 23,
        iqr: 3,
        count: 240,
    },
};

export default function StatisticsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return (
        <DashboardLayout projectId={id}>
            <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                        Statistik Deskriptif
                    </h1>
                    <p className="text-neutral-600">
                        Ringkasan statistik untuk memahami distribusi dan karakteristik data Anda
                    </p>
                </div>

                {/* Statistics for each variable */}
                <div className="space-y-6">
                    {Object.values(statsData).map((stat) => (
                        <Card key={stat.name}>
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-neutral-900 mb-1">{stat.name}</h2>
                                <p className="text-sm text-neutral-600">
                                    Jumlah data: <span className="font-semibold">{stat.count} responden</span>
                                </p>
                            </div>

                            {/* Central Tendency */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-3">
                                    Tendensi Sentral
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-3xl font-bold text-blue-900">{stat.mean}</span>
                                            <span className="text-sm text-blue-700">Mean</span>
                                        </div>
                                        <p className="text-xs text-blue-600">Rata-rata</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-3xl font-bold text-purple-900">{stat.median}</span>
                                            <span className="text-sm text-purple-700">Median</span>
                                        </div>
                                        <p className="text-xs text-purple-600">Nilai tengah</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-3xl font-bold text-green-900">{stat.mode}</span>
                                            <span className="text-sm text-green-700">Modus</span>
                                        </div>
                                        <p className="text-xs text-green-600">Nilai paling sering</p>
                                    </div>
                                </div>
                            </div>

                            {/* Dispersion */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-3">
                                    Sebaran Data
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                                        <p className="text-2xl font-bold text-neutral-900 mb-1">{stat.stdDev}</p>
                                        <p className="text-xs text-neutral-600">Standar Deviasi</p>
                                    </div>

                                    <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                                        <p className="text-2xl font-bold text-neutral-900 mb-1">{stat.variance}</p>
                                        <p className="text-xs text-neutral-600">Varians</p>
                                    </div>

                                    <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                                        <p className="text-2xl font-bold text-neutral-900 mb-1">{stat.range}</p>
                                        <p className="text-xs text-neutral-600">Range</p>
                                    </div>

                                    <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                                        <p className="text-2xl font-bold text-neutral-900 mb-1">{stat.iqr}</p>
                                        <p className="text-xs text-neutral-600">IQR (Q3-Q1)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Min/Max */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-3">
                                    Nilai Ekstrem
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-3xl font-bold text-red-900">{stat.min}</span>
                                            <span className="text-sm text-red-700">Minimum</span>
                                        </div>
                                        <p className="text-xs text-red-600">Nilai terendah</p>
                                    </div>

                                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-3xl font-bold text-green-900">{stat.max}</span>
                                            <span className="text-sm text-green-700">Maximum</span>
                                        </div>
                                        <p className="text-xs text-green-600">Nilai tertinggi</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quartiles */}
                            <div>
                                <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-3">
                                    Kuartil
                                </h3>
                                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="text-center">
                                            <p className="text-xs text-neutral-600 mb-1">Q1</p>
                                            <p className="text-lg font-bold text-neutral-900">{stat.q1}</p>
                                        </div>
                                        <div className="flex-1 mx-4">
                                            <div className="relative h-2 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 rounded-full">
                                                <div className="absolute -top-1 left-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full"></div>
                                                <div className="absolute -top-1 right-0 w-4 h-4 bg-green-600 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs text-neutral-600 mb-1">Q2 (Median)</p>
                                            <p className="text-lg font-bold text-neutral-900">{stat.median}</p>
                                        </div>
                                        <div className="flex-1 mx-4">
                                            <div className="h-2"></div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs text-neutral-600 mb-1">Q3</p>
                                            <p className="text-lg font-bold text-neutral-900">{stat.q3}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Interpretation */}
                            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="text-sm text-blue-900">
                                    <strong>💡 Interpretasi:</strong> Data menunjukkan distribusi yang cukup konsisten dengan standar deviasi {stat.stdDev}.
                                    Nilai mean ({stat.mean}) dan median ({stat.median}) yang berdekatan mengindikasikan distribusi yang relatif simetris.
                                </p>
                            </div>
                        </Card>
                    ))}

                    {/* Export Options */}
                    <Card>
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">Ekspor Hasil Statistik</h2>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Excel
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                Download PDF
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
