import { useState } from "react";
import { ChevronDown, Search, Mail, Phone } from "lucide-react";

const faqs = [
  {
    question: "Bagaimana cara memulai optimasi rute?",
    answer:
      "Masuk ke dashboard, pilih taman yang perlu disiram, tentukan jumlah armada, lalu klik 'Mulai Optimasi'. Sistem akan menghitung rute optimal untuk Anda.",
  },
  {
    question: "Berapa biaya untuk menggunakan sistem ini?",
    answer:
      "Watering Route Planner tersedia secara gratis untuk semua pengguna terdaftar di Kota Surabaya. Tidak ada biaya tambahan untuk optimasi rute.",
  },
  {
    question: "Bagaimana cara mengekspor hasil optimasi?",
    answer:
      "Setelah optimasi selesai, Anda dapat melihat riwayat optimasi dan mengklik tombol 'Ekspor' untuk mengunduh laporan dalam format PDF.",
  },
  {
    question: "Apa itu Riwayat Optimasi?",
    answer:
      "Riwayat Optimasi menyimpan semua hasil optimasi yang telah dilakukan. Anda dapat melihat tanggal, jumlah titik, jumlah armada, dan mengekspor laporan untuk referensi masa depan.",
  },
  {
    question: "Berapa lama proses optimasi memakan waktu?",
    answer:
      "Waktu optimasi tergantung pada jumlah titik yang dipilih. Biasanya berkisar antara beberapa detik hingga beberapa menit untuk rute yang kompleks.",
  },
  {
    question: "Bagaimana cara menghubungi tim dukungan?",
    answer:
      "Anda dapat menghubungi tim dukungan melalui email support@wateringplanner.id atau telepon +62 31 xxxx xxxx. Kami siap membantu dari Senin-Jumat jam 09:00-17:00.",
  },
];

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-9 xl:px-[37px]">
          <h1 className="text-[32px] xl:text-[40px] font-bold text-[#0F172A] mb-4">
            Pusat Bantuan
          </h1>
          <p className="text-lg text-gray-600">
            Temukan jawaban atas pertanyaan yang sering diajukan
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-9 xl:px-[37px] py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari pertanyaan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-md border border-[#E5E7EB] bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-[#E5E7EB] bg-white shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                    >
                      <h3 className="font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`flex-shrink-0 w-5 h-5 text-gray-400 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-6 py-4 border-t border-[#E5E7EB] bg-gray-50">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    Tidak ada pertanyaan yang sesuai dengan pencarian Anda.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
              <h2 className="text-xl font-bold text-[#0F172A] mb-6">
                Hubungi Kami
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                  </div>
                  <p className="text-sm text-gray-600 ml-13">
                    support@wateringplanner.id
                  </p>
                  <button className="text-sm text-[#0F172A] font-medium hover:underline mt-2">
                    Kirim Email
                  </button>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-100">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Telepon</h3>
                  </div>
                  <p className="text-sm text-gray-600 ml-13">
                    +62 31 xxxx xxxx
                  </p>
                  <p className="text-xs text-gray-500 ml-13 mt-1">
                    Senin-Jumat, 09:00-17:00
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Informasi Penting
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Waktu respons: 1-2 hari kerja</li>
                  <li>• Tersedia dalam Bahasa Indonesia</li>
                  <li>• Chat support dalam pengembangan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
