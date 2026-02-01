'use client';

import { use } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, TextArea } from '@/components/ui/Input';

export default function SettingsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return (
        <DashboardLayout projectId={id}>
            <div className="p-8 max-w-4xl">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                        Pengaturan Proyek
                    </h1>
                    <p className="text-neutral-600">
                        Kelola informasi dan pengaturan proyek Anda
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Basic Info */}
                    <Card>
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">Informasi Dasar</h2>

                        <div className="space-y-4">
                            <Input
                                label="Judul Proyek"
                                defaultValue="Survey Kepuasan Mahasiswa 2026"
                            />

                            <TextArea
                                label="Deskripsi"
                                defaultValue="Mengukur tingkat kepuasan mahasiswa terhadap fasilitas kampus"
                                rows={4}
                            />

                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">
                                    Status Proyek
                                </label>
                                <select className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                                    <option value="active">Aktif</option>
                                    <option value="paused">Dijeda</option>
                                    <option value="closed">Ditutup</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <Button variant="primary">
                                Simpan Perubahan
                            </Button>
                        </div>
                    </Card>

                    {/* Form Settings */}
                    <Card>
                        <h2 className="text-xl font-bold text-neutral-900 mb-4">Pengaturan Form</h2>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-neutral-900">Terima Respons Baru</p>
                                    <p className="text-sm text-neutral-600">Form akan tetap menerima jawaban baru</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-neutral-900">Email Notifikasi</p>
                                    <p className="text-sm text-neutral-600">Kirim email saat ada respons baru</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-neutral-900">Batasi Satu Respons Per Email</p>
                                    <p className="text-sm text-neutral-600">Cegah duplikasi dari email yang sama</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                    </Card>

                    {/* Danger Zone */}
                    <Card className="border-red-200 bg-red-50">
                        <h2 className="text-xl font-bold text-red-900 mb-4">Zona Berbahaya</h2>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-red-200">
                                <div>
                                    <p className="font-medium text-neutral-900">Arsipkan Proyek</p>
                                    <p className="text-sm text-neutral-600">Proyek tidak akan muncul di daftar utama</p>
                                </div>
                                <Button variant="outline">
                                    Arsipkan
                                </Button>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-red-200">
                                <div>
                                    <p className="font-medium text-red-900">Hapus Proyek</p>
                                    <p className="text-sm text-red-600">Semua data akan dihapus permanen</p>
                                </div>
                                <Button variant="danger">
                                    Hapus Proyek
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
