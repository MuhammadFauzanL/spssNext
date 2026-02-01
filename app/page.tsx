import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Analisis Data Survei
            <span className="block gradient-text mt-2">Lebih Mudah & Modern</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Platform analisis statistik berbahasa Indonesia yang dirancang untuk peneliti, mahasiswa, dan profesional.
            Dari pengumpulan data hingga visualisasi, semua dalam satu tempat.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/register">
              <Button variant="primary" size="lg">
                Mulai Gratis Sekarang
              </Button>
            </Link>
            <Link href="#fitur">
              <Button variant="outline" size="lg">
                Pelajari Lebih Lanjut
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <p className="text-4xl font-bold gradient-text">100%</p>
              <p className="text-sm text-neutral-600 mt-1">Bahasa Indonesia</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text">Gratis</p>
              <p className="text-sm text-neutral-600 mt-1">Tanpa Biaya</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text">Mudah</p>
              <p className="text-sm text-neutral-600 mt-1">Tidak Ribet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="container mx-auto px-4 lg:px-8 py-20 bg-white/50 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Semua yang Anda butuhkan untuk mengumpulkan, menganalisis, dan memvisualisasikan data survei Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Form Builder Mudah</h3>
              <p className="text-neutral-600">
                Buat survei dengan drag & drop. Tidak perlu coding, semua visual dan intuitif.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cek Kesehatan Data</h3>
              <p className="text-neutral-600">
                Deteksi otomatis missing values, outlier, dan anomali. Jaga kualitas data Anda.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Visualisasi Interaktif</h3>
              <p className="text-neutral-600">
                Grafik batang, line, pie, dan scatter yang cantik dan mudah dipahami.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Statistik Deskriptif</h3>
              <p className="text-neutral-600">
                Mean, median, modus, standar deviasi, dan banyak lagi. Semua otomatis.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ekspor Fleksibel</h3>
              <p className="text-neutral-600">
                Download data dalam format CSV, Excel, atau PDF. Siap untuk laporan.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">100% Bahasa Indonesia</h3>
              <p className="text-neutral-600">
                Semua istilah statistik diterjemahkan dengan benar. Mudah dipahami.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Siap Mulai Analisis Data?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Daftar gratis dan buat proyek pertama Anda dalam hitungan menit
          </p>
          <Link href="/register">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-neutral-100"
            >
              Daftar Gratis Sekarang
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-neutral-600">
            <p>&copy; 2026 SPSS Next. Platform Analisis Data Berbahasa Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
