'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:shadow-lg transition-all">
                            S
                        </div>
                        <span className="text-xl font-bold gradient-text">
                            SPSS Next
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#fitur" className="text-neutral-700 hover:text-blue-600 transition-colors font-medium">
                            Fitur
                        </Link>
                        <Link href="#tentang" className="text-neutral-700 hover:text-blue-600 transition-colors font-medium">
                            Tentang
                        </Link>
                        <Link href="#harga" className="text-neutral-700 hover:text-blue-600 transition-colors font-medium">
                            Harga
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <Link href="/login">
                            <Button variant="ghost" size="md">
                                Masuk
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button variant="primary" size="md">
                                Daftar Gratis
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
