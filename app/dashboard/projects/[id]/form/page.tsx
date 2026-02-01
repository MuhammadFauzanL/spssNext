'use client';

import { use } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';

export default function FormBuilderPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    const formFields = [
        { id: 1, type: 'text', label: 'Nama Lengkap', required: true },
        { id: 2, type: 'email', label: 'Email', required: true },
        { id: 3, type: 'number', label: 'Usia', required: false },
        { id: 4, type: 'radio', label: 'Tingkat Kepuasan (1-10)', required: true, options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] },
        { id: 5, type: 'textarea', label: 'Saran & Kritik', required: false },
    ];

    const fieldTypes = [
        { id: 'text', name: 'Teks Pendek', icon: '📝' },
        { id: 'textarea', name: 'Teks Panjang', icon: '📄' },
        { id: 'number', name: 'Angka', icon: '🔢' },
        { id: 'email', name: 'Email', icon: '✉️' },
        { id: 'radio', name: 'Pilihan Ganda', icon: '⚪' },
        { id: 'checkbox', name: 'Checkbox', icon: '☑️' },
        { id: 'date', name: 'Tanggal', icon: '📅' },
    ];

    return (
        <DashboardLayout projectId={id}>
            <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                                Form Builder
                            </h1>
                            <p className="text-neutral-600">
                                Desain form survei Anda dengan mudah menggunakan drag & drop
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline">
                                Preview
                            </Button>
                            <Button variant="primary">
                                Simpan & Publikasikan
                            </Button>
                        </div>
                    </div>

                    {/* Form Link */}
                    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-neutral-700 mb-1">Link Form Publik</p>
                                <div className="flex items-center gap-2">
                                    <code className="text-sm bg-white px-3 py-1.5 rounded border border-neutral-200 text-blue-600">
                                        https://spssnext.com/form/{id}
                                    </code>
                                    <Button variant="ghost" size="sm">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                    {/* Field Types Palette */}
                    <div className="lg:col-span-1">
                        <Card>
                            <h3 className="font-bold text-neutral-900 mb-4">Tipe Field</h3>
                            <div className="space-y-2">
                                {fieldTypes.map((type) => (
                                    <button
                                        key={type.id}
                                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg border border-neutral-200 hover:border-blue-400 hover:bg-blue-50 transition-all cursor-grab active:cursor-grabbing"
                                    >
                                        <span className="text-xl">{type.icon}</span>
                                        <span className="text-sm font-medium">{type.name}</span>
                                    </button>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Form Preview */}
                    <div className="lg:col-span-3">
                        <Card>
                            <h3 className="text-xl font-bold text-neutral-900 mb-6">Preview Form</h3>

                            <div className="space-y-6">
                                {formFields.map((field, index) => (
                                    <div key={field.id} className="group relative p-4 rounded-lg border-2 border-dashed border-neutral-200 hover:border-blue-400 bg-neutral-50 transition-all">
                                        {/* Field Controls */}
                                        <div className="absolute -top-3 -right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </button>
                                            <button className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg hover:bg-red-700">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Field Label */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-sm font-medium text-neutral-500">#{index + 1}</span>
                                            <label className="font-semibold text-neutral-900">
                                                {field.label}
                                                {field.required && <span className="text-red-600 ml-1">*</span>}
                                            </label>
                                            <Badge variant="neutral" size="sm">{field.type}</Badge>
                                        </div>

                                        {/* Field Input Preview */}
                                        {field.type === 'text' && (
                                            <input
                                                type="text"
                                                placeholder="Contoh: John Doe"
                                                className="w-full px-4 py-2 rounded-lg border border-neutral-300 bg-white"
                                                disabled
                                            />
                                        )}

                                        {field.type === 'email' && (
                                            <input
                                                type="email"
                                                placeholder="Contoh: john@email.com"
                                                className="w-full px-4 py-2 rounded-lg border border-neutral-300 bg-white"
                                                disabled
                                            />
                                        )}

                                        {field.type === 'number' && (
                                            <input
                                                type="number"
                                                placeholder="Contoh: 25"
                                                className="w-full px-4 py-2 rounded-lg border border-neutral-300 bg-white"
                                                disabled
                                            />
                                        )}

                                        {field.type === 'radio' && field.options && (
                                            <div className="grid grid-cols-5 gap-2">
                                                {field.options.map((option) => (
                                                    <label key={option} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-neutral-300">
                                                        <input type="radio" name={`field-${field.id}`} disabled />
                                                        <span className="text-sm">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}

                                        {field.type === 'textarea' && (
                                            <textarea
                                                placeholder="Masukkan jawaban Anda..."
                                                rows={4}
                                                className="w-full px-4 py-2 rounded-lg border border-neutral-300 bg-white resize-none"
                                                disabled
                                            />
                                        )}
                                    </div>
                                ))}

                                {/* Add Field Button */}
                                <button className="w-full py-4 border-2 border-dashed border-neutral-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-neutral-600 hover:text-blue-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    <span className="font-medium">Tambah Pertanyaan</span>
                                </button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
