'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { Input, TextArea } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export default function NewProjectPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'survey',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            router.push('/dashboard/projects/1');
        }, 1000);
    };

    return (
        <DashboardLayout>
            <div className="p-8 max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900">Buat Proyek Baru</h1>
                    <p className="text-neutral-600 mt-1">
                        Mulai proyek survei dan analisis data baru dalam beberapa langkah mudah
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center gap-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-600'}`}>
                            1
                        </div>
                        <div className={`w-24 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-neutral-200'}`}></div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-600'}`}>
                            2
                        </div>
                        <div className={`w-24 h-1 ${step >= 3 ? 'bg-blue-600' : 'bg-neutral-200'}`}></div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-600'}`}>
                            3
                        </div>
                    </div>
                </div>

                {/* Form */}
                <Card>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {step === 1 && (
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold text-neutral-900 mb-4">
                                    Informasi Dasar
                                </h2>

                                <Input
                                    label="Judul Proyek"
                                    placeholder="Contoh: Survey Kepuasan Pelanggan 2026"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                    helperText="Berikan judul yang deskriptif dan mudah diingat"
                                />

                                <TextArea
                                    label="Deskripsi"
                                    placeholder="Jelaskan tujuan dan ruang lingkup proyek Anda..."
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows={5}
                                    helperText="Deskripsi akan membantu Anda mengingat konteks proyek"
                                />

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Kategori
                                    </label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { value: 'survey', label: 'Survei', icon: '📋' },
                                            { value: 'research', label: 'Penelitian', icon: '🔬' },
                                            { value: 'evaluation', label: 'Evaluasi', icon: '📊' },
                                        ].map((cat) => (
                                            <button
                                                key={cat.value}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, category: cat.value })}
                                                className={`p-4 rounded-lg border-2 text-center transition-all ${formData.category === cat.value
                                                        ? 'border-blue-600 bg-blue-50'
                                                        : 'border-neutral-200 hover:border-neutral-300'
                                                    }`}
                                            >
                                                <div className="text-3xl mb-2">{cat.icon}</div>
                                                <div className="font-medium">{cat.label}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-4 text-center py-8">
                                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-neutral-900">
                                    Informasi Tersimpan!
                                </h2>
                                <p className="text-neutral-600">
                                    Proyek Anda telah dibuat. Selanjutnya, Anda bisa mulai membuat form survei.
                                </p>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() => {
                                    if (step > 1) setStep(step - 1);
                                    else router.back();
                                }}
                            >
                                {step === 1 ? 'Batal' : 'Kembali'}
                            </Button>

                            {step < 2 ? (
                                <Button
                                    type="button"
                                    variant="primary"
                                    onClick={() => setStep(step + 1)}
                                    disabled={!formData.title || !formData.description}
                                >
                                    Lanjutkan
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    variant="primary"
                                    isLoading={isLoading}
                                >
                                    Buat Form Survei
                                </Button>
                            )}
                        </div>
                    </form>
                </Card>
            </div>
        </DashboardLayout>
    );
}
