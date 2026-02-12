'use client';

import { use, useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Input, TextArea } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function PublicFormPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [project, setProject] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formValues, setFormValues] = useState<Record<string, string>>({});
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`/api/projects/${id}`);
                const data = await response.json();

                if (response.ok) {
                    setProject(data);
                } else {
                    setError(data.error || "Proyek tidak ditemukan");
                }
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Gagal memuat formulir");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulasi submit respon (karena tabel Respon belum kita buat)
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error || !project) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <Card className="max-w-md text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-2">Error 😕</h1>
                    <p className="text-neutral-600 mb-6">{error || "Proyek tidak ditemukan"}</p>
                    <Link href="/">
                        <Button variant="primary">Kembali ke Beranda</Button>
                    </Link>
                </Card>
            </div>
        );
    }

    // Karena saat ini Project hanya punya Title dan Description di DB, 
    // Kita buat field default untuk pendaftaran (untuk belajar)
    const defaultFields = [
        { id: 1, type: 'text', label: 'Nama Lengkap', required: true },
        { id: 2, type: 'email', label: 'Email', required: true },
        { id: 6, type: 'textarea', label: 'Pesan / Masukan', required: false },
    ];

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
                        Respons Anda untuk proyek <strong>"{project.title}"</strong> telah berhasil tersimpan.
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
                        {project.title}
                    </h1>
                    {project.description && (
                        <p className="text-neutral-600">
                            {project.description}
                        </p>
                    )}
                </div>

                <Card>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {defaultFields.map((field) => (
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

                <p className="text-center text-sm text-neutral-500 mt-6">
                    Powered by <span className="font-semibold gradient-text">SPSS Next</span>
                </p>
            </div>
        </div>
    );
}
