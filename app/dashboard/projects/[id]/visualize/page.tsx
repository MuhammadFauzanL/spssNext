'use client';

import { use, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function VisualizationPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [selectedChart, setSelectedChart] = useState('bar');
    const [selectedVariable, setSelectedVariable] = useState('kepuasan');

    const chartTypes = [
        { id: 'bar', name: 'Bar Chart', icon: '📊' },
        { id: 'pie', name: 'Pie Chart', icon: '🥧' },
        { id: 'line', name: 'Line Chart', icon: '📈' },
        { id: 'scatter', name: 'Scatter Plot', icon: '⚫' },
    ];

    const variables = [
        { id: 'kepuasan', name: 'Tingkat Kepuasan' },
        { id: 'usia', name: 'Usia Responden' },
        { id: 'fakultas', name: 'Fakultas' },
        { id: 'semester', name: 'Semester' },
    ];

    return (
        <DashboardLayout projectId={id}>
            <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                        Visualisasi Data
                    </h1>
                    <p className="text-neutral-600">
                        Buat grafik dan diagram interaktif untuk memahami data Anda
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                    {/* Sidebar Controls */}
                    <div className="lg:col-span-1 space-y-4">
                        <Card>
                            <h3 className="font-bold text-neutral-900 mb-3">Jenis Grafik</h3>
                            <div className="space-y-2">
                                {chartTypes.map((chart) => (
                                    <button
                                        key={chart.id}
                                        onClick={() => setSelectedChart(chart.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all ${selectedChart === chart.id
                                                ? 'border-blue-600 bg-blue-50'
                                                : 'border-neutral-200 hover:border-neutral-300'
                                            }`}
                                    >
                                        <span className="text-2xl">{chart.icon}</span>
                                        <span className="font-medium">{chart.name}</span>
                                    </button>
                                ))}
                            </div>
                        </Card>

                        <Card>
                            <h3 className="font-bold text-neutral-900 mb-3">Variabel</h3>
                            <div className="space-y-2">
                                {variables.map((variable) => (
                                    <button
                                        key={variable.id}
                                        onClick={() => setSelectedVariable(variable.id)}
                                        className={`w-full text-left px-4 py-2 rounded-lg border transition-all ${selectedVariable === variable.id
                                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                                : 'border-neutral-200 hover:border-neutral-300'
                                            }`}
                                    >
                                        {variable.name}
                                    </button>
                                ))}
                            </div>
                        </Card>

                        <Button variant="outline" className="w-full">
                            Ekspor Grafik
                        </Button>
                    </div>

                    {/* Main Chart Area */}
                    <div className="lg:col-span-3">
                        <Card>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-neutral-900">
                                    {chartTypes.find(c => c.id === selectedChart)?.name} - {variables.find(v => v.id === selectedVariable)?.name}
                                </h2>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="sm">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </Button>
                                </div>
                            </div>

                            {/* Chart Placeholder */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 min-h-96 flex items-center justify-center border border-neutral-200">
                                <div className="text-center">
                                    {/* Simple dummy visualization */}
                                    {selectedChart === 'bar' && (
                                        <div className="flex items-end justify-center gap-4 h-64">
                                            {[85, 92, 78, 95, 88].map((value, idx) => (
                                                <div key={idx} className="flex flex-col items-center gap-2">
                                                    <div
                                                        className="w-16 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-lg transition-all hover:opacity-80"
                                                        style={{ height: `${value}%` }}
                                                    ></div>
                                                    <span className="text-xs text-neutral-600 font-medium">{value}%</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {selectedChart === 'pie' && (
                                        <div className="relative w-64 h-64 mx-auto">
                                            <svg viewBox="0 0 200 200" className="transform -rotate-90">
                                                <circle cx="100" cy="100" r="80" fill="#3b82f6" />
                                                <circle cx="100" cy="100" r="80" fill="#a855f7" strokeDasharray="251 502" strokeDashoffset="0" stroke="#a855f7" />
                                                <circle cx="100" cy="100" r="80" fill="#10b981" strokeDasharray="126 502" strokeDashoffset="0" stroke="#10b981" />
                                            </svg>
                                        </div>
                                    )}

                                    {(selectedChart === 'line' || selectedChart === 'scatter') && (
                                        <div className="w-full h-64 flex items-end justify-center">
                                            <svg viewBox="0 0 400 200" className="w-full h-full">
                                                <polyline
                                                    points="20,150 80,120 140,140 200,80 260,100 320,60 380,90"
                                                    fill="none"
                                                    stroke="url(#gradient)"
                                                    strokeWidth="3"
                                                />
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#3b82f6" />
                                                        <stop offset="100%" stopColor="#a855f7" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    )}

                                    <p className="text-sm text-neutral-600 mt-4">
                                        📊 Grafik akan muncul di sini menggunakan Chart.js
                                    </p>
                                    <p className="text-xs text-neutral-500 mt-1">
                                        (Saat ini menampilkan contoh visual)
                                    </p>
                                </div>
                            </div>

                            {/* Chart Insights */}
                            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <p className="text-sm text-blue-900">
                                    <strong>💡 Insight:</strong> Rata-rata tingkat kepuasan adalah 87.6% dengan mayoritas responden memberikan rating 9-10. Ini menunjukkan tingkat kepuasan yang sangat tinggi.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
