'use client';

import { use, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input, TextArea } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

// Dummy form data
const formData = {
    title: 'Survey Kepuasan Mahasiswa 2026',
    description: 'Bantu kami meningkatkan kualitas kampus dengan mengisi survei ini. Terima kasih!',
    fields: [
        { id: 1, type: 'text', label: 'Nama Lengkap', required: true },
        { id: 2, type: 'email', label: 'Email', required: true },
        { id: 3, type: 'number', label: 'Usia', required: false },
        { id: 4, type: 'select', label: 'Fakultas', required: true, options: ['FT', 'FEB', 'FKIP', 'FK', 'FH'] },
        { id: 5, type: 'radio', label: 'Tingkat Kepuasan Fasilitas (1-10)', required: true, options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] },
        { id: 6, type: 'textarea', label: 'Saran & Kritik', required: false },
    ],
};

export default function PublicFormPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formValues, setFormValues] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
                <Card className="max-w-md text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                        Terima Kasih! 🎉
                    </h1>
                    <p className="text-neutral-600 mb-6">
                        Respons Anda telah berhasil tersimpan. Kami sangat menghargai partisipasi Anda!
                    </p>
                    <Link href="/">
                        <Button variant="primary">
                            Kembali ke Beranda
                        </Button>
                    </Link>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 group mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                            S
                        </div>
                        <span className="text-2xl font-bold gradient-text">
                            SPSS Next
                        </span>
                    </Link>
                    <h1 className="text-3xl font-bold text-neutral-900 mt-6 mb-2">
                        {formData.title}
                    </h1>
                    <p className="text-neutral-600">
                        {formData.description}
                    </p>
                </div>

                {/* Form */}
                <Card>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {formData.fields.map((field) => (
                            <div key={field.id}>
                                {field.type === 'text' && (
                                    <Input
                                        label={field.label}
                                        required={field.required}
                                        placeholder={`Masukkan ${field.label.toLowerCase()}`}
                                        value={formValues[field.id.toString()] || ''}
                                        onChange={(e) => setFormValues({ ...formValues, [field.id]: e.target.value })}
                                    />
                                )}

                                {field.type === 'email' && (
                                    <Input
                                        type="email"
                                        label={field.label}
                                        required={field.required}
                                        placeholder="nama@email.com"
                                        value={formValues[field.id.toString()] || ''}
                                        onChange={(e) => setFormValues({ ...formValues, [field.id]: e.target.value })}
                                    />
                                )}

                                {field.type === 'number' && (
                                    <Input
                                        type="number"
                                        label={field.label}
                                        required={field.required}
                                        placeholder="Contoh: 20"
                                        value={formValues[field.id.toString()] || ''}
                                        onChange={(e) => setFormValues({ ...formValues, [field.id]: e.target.value })}
                                    />
                                )}

                                {field.type === 'select' && field.options && (
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                                            {field.label}
                                            {field.required && <span className="text-red-600 ml-1">*</span>}
                                        </label>
                                        <select
                                            required={field.required}
                                            value={formValues[field.id.toString()] || ''}
                                            onChange={(e) => setFormValues({ ...formValues, [field.id]: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-blue-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                                        >
                                            <option value="">Pilih {field.label}</option>
                                            {field.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                {field.type === 'radio' && field.options && (
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-3">
                                            {field.label}
                                            {field.required && <span className="text-red-600 ml-1">*</span>}
                                        </label>
                                        <div className="grid grid-cols-5 gap-2">
                                            {field.options.map((option) => (
                                                <label
                                                    key={option}
                                                    className={`flex items-center justify-center gap-2 px-3 py-3 rounded-lg border-2 cursor-pointer transition-all ${formValues[field.id.toString()] === option
                                                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                                                            : 'border-neutral-300 hover:border-neutral-400 bg-white'
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name={`field-${field.id}`}
                                                        value={option}
                                                        required={field.required}
                                                        checked={formValues[field.id.toString()] === option}
                                                        onChange={(e) => setFormValues({ ...formValues, [field.id]: e.target.value })}
                                                        className="sr-only"
                                                    />
                                                    <span className="font-semibold">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {field.type === 'textarea' && (
                                    <TextArea
                                        label={field.label}
                                        required={field.required}
                                        placeholder="Tuliskan pendapat Anda..."
                                        rows={4}
                                        value={formValues[field.id.toString()] || ''}
                                        onChange={(e) => setFormValues({ ...formValues, [field.id]: e.target.value })}
                                    />
                                )}
                            </div>
                        ))}

                        <div className="pt-4 border-t border-neutral-200">
                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full"
                                size="lg"
                                isLoading={isSubmitting}
                            >
                                Kirim Respons
                            </Button>
                        </div>
                    </form>
                </Card>

                {/* Footer */}
                <p className="text-center text-sm text-neutral-500 mt-6">
                    Powered by <span className="font-semibold gradient-text">SPSS Next</span> - Platform Analisis Data Berbahasa Indonesia
                </p>
            </div>
        </div>
    );
}
