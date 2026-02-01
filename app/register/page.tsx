'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/components/auth/AuthContext';

export default function RegisterPage() {
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Kata sandi tidak cocok!');
            return;
        }

        setIsLoading(true);

        try {
            const success = await register(formData.username, formData.email, formData.password);
            if (!success) {
                setError('Pendaftaran gagal. Silakan coba lagi.');
            }
        } catch (err) {
            setError('Terjadi kesalahan. Silakan coba lagi.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all">
                            S
                        </div>
                        <span className="text-2xl font-bold gradient-text">
                            SPSS Next
                        </span>
                    </Link>
                    <p className="text-neutral-600 mt-2">Buat akun baru gratis</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8">
                    <form onSubmit={handleRegister} className="space-y-4">
                        <Input
                            type="text"
                            label="Username"
                            placeholder="Masukkan username"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            required
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            }
                        />

                        <Input
                            type="email"
                            label="Email"
                            placeholder="nama@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            }
                        />

                        <Input
                            type="password"
                            label="Kata Sandi"
                            placeholder="Minimal 8 karakter"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                            helperText="Gunakan kombinasi huruf, angka, dan simbol"
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            }
                        />

                        <Input
                            type="password"
                            label="Konfirmasi Kata Sandi"
                            placeholder="Ulangi kata sandi"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            required
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                        />

                        {error && (
                            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                                {error}
                            </div>
                        )}

                        <div className="text-sm text-neutral-600">
                            Dengan mendaftar, Anda menyetujui{' '}
                            <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                                Syarat & Ketentuan
                            </Link>{' '}
                            dan{' '}
                            <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                                Kebijakan Privasi
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full"
                            size="lg"
                            isLoading={isLoading}
                        >
                            Daftar Sekarang
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-neutral-600">
                            Sudah punya akun?{' '}
                            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                                Masuk di sini
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <Link href="/" className="text-neutral-600 hover:text-neutral-900 text-sm inline-flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Kembali ke beranda
                    </Link>
                </div>
            </div>
        </div>
    );
}
