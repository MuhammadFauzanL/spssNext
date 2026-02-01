'use client';

import { use } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

// Dummy health check data
const healthData = {
    overallScore: 85,
    missingValues: {
        count: 12,
        percentage: 4.9,
        fields: [
            { name: 'Usia', missing: 5, total: 245 },
            { name: 'No. Telepon', missing: 7, total: 245 },
        ],
    },
    outliers: {
        count: 8,
        fields: [
            { name: 'Kepuasan (1-10)', outliers: [{ value: 0, respondent: 'Responden #42' }] },
            { name: 'Lama Kuliah (tahun)', outliers: [{ value: 15, respondent: 'Responden #128' }] },
        ],
    },
    dataQuality: {
        complete: 233,
        incomplete: 12,
        duplicates: 0,
    },
};

export default function HealthCheckPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-green-600 bg-green-50';
        if (score >= 60) return 'text-yellow-600 bg-yellow-50';
        return 'text-red-600 bg-red-50';
    };

    const getScoreLabel = (score: number) => {
        if (score >= 80) return 'Sangat Baik';
        if (score >= 60) return 'Cukup Baik';
        return 'Perlu Perbaikan';
    };

    return (
        <DashboardLayout projectId={id}>
            <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                        Cek Kesehatan Data
                    </h1>
                    <p className="text-neutral-600">
                        Analisis kualitas data Anda secara otomatis dan temukan potensi masalah
                    </p>
                </div>

                {/* Overall Score */}
                <Card className="mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-neutral-600 font-medium mb-1">Skor Kesehatan Data</p>
                            <p className="text-5xl font-bold text-neutral-900">{healthData.overallScore}</p>
                            <Badge variant={healthData.overallScore >= 80 ? 'success' : 'warning'} className="mt-2">
                                {getScoreLabel(healthData.overallScore)}
                            </Badge>
                        </div>
                        <div className={`w-32 h-32 rounded-full flex items-center justify-center ${getScoreColor(healthData.overallScore)}`}>
                            <div className="text-center">
                                <p className="text-3xl font-bold">{healthData.overallScore}</p>
                                <p className="text-xs font-medium">dari 100</p>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Missing Values */}
                    <Card>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-neutral-900">Missing Values</h2>
                            <Badge variant={healthData.missingValues.count > 0 ? 'warning' : 'success'}>
                                {healthData.missingValues.count} ditemukan
                            </Badge>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-yellow-900 mb-1">
                                        {healthData.missingValues.percentage}% data tidak lengkap
                                    </p>
                                    <p className="text-sm text-yellow-700">
                                        Beberapa responden tidak mengisi semua field
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {healthData.missingValues.fields.map((field) => (
                                <div key={field.name} className="border border-neutral-200 rounded-lg p-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium text-neutral-900">{field.name}</span>
                                        <span className="text-sm text-neutral-600">
                                            {field.missing} dari {field.total}
                                        </span>
                                    </div>
                                    <div className="w-full bg-neutral-200 rounded-full h-2">
                                        <div
                                            className="bg-yellow-500 h-2 rounded-full"
                                            style={{ width: `${(field.missing / field.total) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm text-blue-800">
                                <strong>💡 Rekomendasi:</strong> Pertimbangkan untuk menghubungi responden yang belum melengkapi data, atau tandai field sebagai opsional.
                            </p>
                        </div>
                    </Card>

                    {/* Outliers */}
                    <Card>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-neutral-900">Outlier & Anomali</h2>
                            <Badge variant={healthData.outliers.count > 0 ? 'danger' : 'success'}>
                                {healthData.outliers.count} ditemukan
                            </Badge>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <p className="font-semibold text-red-900 mb-1">
                                        Data abnormal terdeteksi
                                    </p>
                                    <p className="text-sm text-red-700">
                                        Beberapa nilai berada jauh di luar range normal
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {healthData.outliers.fields.map((field) => (
                                <div key={field.name} className="border border-neutral-200 rounded-lg p-3">
                                    <p className="font-medium text-neutral-900 mb-2">{field.name}</p>
                                    {field.outliers.map((outlier, idx) => (
                                        <div key={idx} className="flex items-center justify-between text-sm bg-red-50 rounded px-3 py-2 mb-1">
                                            <span className="text-neutral-700">{outlier.respondent}</span>
                                            <span className="font-semibold text-red-600">
                                                Nilai: {outlier.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm text-blue-800">
                                <strong>💡 Rekomendasi:</strong> Verifikasi apakah nilai ini adalah kesalahan input atau data yang valid namun ekstrem.
                            </p>
                        </div>
                    </Card>

                    {/* Data Quality Summary */}
                    <Card className="md:col-span-2">
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">Ringkasan Kualitas</h2>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                                <p className="text-3xl font-bold text-green-600 mb-1">
                                    {healthData.dataQuality.complete}
                                </p>
                                <p className="text-sm text-green-700 font-medium">Data Lengkap</p>
                            </div>
                            <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <p className="text-3xl font-bold text-yellow-600 mb-1">
                                    {healthData.dataQuality.incomplete}
                                </p>
                                <p className="text-sm text-yellow-700 font-medium">Data Tidak Lengkap</p>
                            </div>
                            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <p className="text-3xl font-bold text-blue-600 mb-1">
                                    {healthData.dataQuality.duplicates}
                                </p>
                                <p className="text-sm text-blue-700 font-medium">Duplikat</p>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <p className="font-bold text-neutral-900 mb-1">
                                        Kualitas data Anda secara keseluruhan sangat baik!
                                    </p>
                                    <p className="text-sm text-neutral-700">
                                        Anda bisa melanjutkan ke analisis statistik dan visualisasi dengan percaya diri.
                                        Pertimbangkan untuk memperbaiki missing values jika diperlukan untuk hasil yang lebih akurat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
