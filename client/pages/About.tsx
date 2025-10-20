import { MapPin, Users, Zap, TrendingUp } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: MapPin,
      title: "Pengelolaan Data Lokasi",
      description:
        "Sistem menyimpan dan menampilkan daftar titik taman serta sumber air dengan akurat.",
    },
    {
      icon: Zap,
      title: "Optimasi Rute Kendaraan",
      description:
        "Menghitung rute optimal untuk armada mobil tangki dengan mempertimbangkan berbagai faktor.",
    },
    {
      icon: Users,
      title: "Penentuan Armada",
      description:
        "Memberikan rekomendasi jumlah kendaraan yang dibutuhkan untuk menyelesaikan tugas penyiraman.",
    },
    {
      icon: TrendingUp,
      title: "Visualisasi Interaktif",
      description:
        "Menampilkan hasil perhitungan rute pada peta interaktif yang mudah dipahami.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-9 xl:px-[37px]">
          <h1 className="text-[32px] xl:text-[40px] font-bold text-[#0F172A] mb-4">
            Tentang Watering Route Planner
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Sistem optimasi rute penyiraman taman kota Surabaya yang dirancang
            untuk meningkatkan efisiensi operasional dan mengurangi biaya.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-9 xl:px-[37px] py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl xl:text-3xl font-bold text-[#0F172A] mb-4">
              Latar Belakang
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Watering Route Planner merupakan produk baru yang berdiri sendiri,
              dirancang untuk membantu pengelolaan operasional penyiraman taman
              kota. Sistem ini memiliki keterkaitan dengan penelitian akademik
              sebelumnya tetapi memperluas implementasi dengan pendekatan yang
              lebih komprehensif.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sebelum sistem ini ada, proses penentuan rute dilakukan secara
              manual atau berdasarkan penelitian akademik tanpa implementasi
              operasional yang nyata. Kini, dengan teknologi dan algoritma
              optimasi terkini, kami menghadirkan solusi yang praktis dan
              efisien.
            </p>
          </div>
          <div className="rounded-lg border border-[#E5E7EB] bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
            <h3 className="text-xl font-bold text-[#0F172A] mb-6">Inovasi Kami</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-xl font-bold text-blue-600 mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Aplikasi Web Modern</p>
                  <p className="text-sm text-gray-600">
                    Interface yang user-friendly dan responsif
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-xl font-bold text-blue-600 mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Algoritma Metaheuristik
                  </p>
                  <p className="text-sm text-gray-600">
                    Optimasi rute berbasis teknologi terkini
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-xl font-bold text-blue-600 mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Visualisasi Interaktif
                  </p>
                  <p className="text-sm text-gray-600">
                    Peta dan laporan digital yang komprehensif
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl xl:text-3xl font-bold text-[#0F172A] mb-8 text-center">
            Fitur Utama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg border border-[#E5E7EB] bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12">
          <h2 className="text-2xl xl:text-3xl font-bold text-[#0F172A] mb-4">
            Visi & Misi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Visi</h3>
              <p className="text-gray-700">
                Menjadi sistem terdepan dalam mengoptimalkan operasional
                penyiraman taman kota dengan teknologi yang inovatif dan
                berkelanjutan.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Misi</h3>
              <p className="text-gray-700">
                Meningkatkan efisiensi operasional, mengurangi biaya operasional,
                dan berkontribusi pada pengelolaan taman kota yang lebih baik di
                Surabaya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
