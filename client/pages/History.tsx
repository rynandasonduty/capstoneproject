import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, FileDownload, Eye } from "lucide-react";

interface HistoryRecord {
  id: string;
  date: string;
  points: number;
  fleet: number;
  totalDistance: number;
  status: "completed" | "pending";
}

export default function History() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const historyRecords: HistoryRecord[] = [
    {
      id: "1",
      date: "Jumat, 17 Oktober 2025",
      points: 24,
      fleet: 3,
      totalDistance: 156.5,
      status: "completed",
    },
    {
      id: "2",
      date: "Senin, 13 Oktober 2025",
      points: 20,
      fleet: 3,
      totalDistance: 142.3,
      status: "completed",
    },
    {
      id: "3",
      date: "Kamis, 9 Oktober 2025",
      points: 18,
      fleet: 2,
      totalDistance: 128.7,
      status: "completed",
    },
    {
      id: "4",
      date: "Selasa, 7 Oktober 2025",
      points: 22,
      fleet: 3,
      totalDistance: 151.2,
      status: "completed",
    },
    {
      id: "5",
      date: "Jumat, 3 Oktober 2025",
      points: 19,
      fleet: 2,
      totalDistance: 135.9,
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-6 lg:p-9 xl:p-[37px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8">
          <h1 className="text-[32px] xl:text-[40px] font-bold text-[#0F172A]">
            Riwayat Optimasi
          </h1>
          <p className="text-gray-600 mt-2">
            Lihat semua optimasi rute yang telah dilakukan sebelumnya
          </p>
        </div>

        <div className="rounded-lg border border-[#E5E7EB] bg-white shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-gray-50 border-b border-[#E5E7EB] font-semibold text-gray-900 text-sm">
            <div className="col-span-4">Tanggal</div>
            <div className="col-span-2">Titik</div>
            <div className="col-span-2">Armada</div>
            <div className="col-span-2">Jarak Total</div>
            <div className="col-span-2">Aksi</div>
          </div>

          <div className="divide-y divide-[#E5E7EB]">
            {historyRecords.map((record) => (
              <div key={record.id}>
                <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 hover:bg-gray-50 transition-colors">
                  <div className="md:col-span-4">
                    <p className="md:hidden text-xs font-semibold text-gray-600 mb-1">
                      Tanggal
                    </p>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0 hidden md:block" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm md:text-base">
                          {record.date}
                        </p>
                        <p className="text-xs text-gray-500 md:hidden">
                          Status: Selesai
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="md:hidden text-xs font-semibold text-gray-600 mb-1">
                      Titik
                    </p>
                    <div className="flex items-center gap-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
                        {record.points}
                      </span>
                      <span className="text-gray-600 text-sm">titik</span>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="md:hidden text-xs font-semibold text-gray-600 mb-1">
                      Armada
                    </p>
                    <div className="flex items-center gap-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 font-semibold text-sm">
                        {record.fleet}
                      </span>
                      <span className="text-gray-600 text-sm">armada</span>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="md:hidden text-xs font-semibold text-gray-600 mb-1">
                      Jarak
                    </p>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">
                      {record.totalDistance} km
                    </p>
                  </div>

                  <div className="md:col-span-2 flex items-center gap-2">
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === record.id ? null : record.id)
                      }
                      className="flex-1 md:flex-none px-3 py-2 rounded-md border border-[#E5E7EB] bg-white text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-1 text-sm font-medium"
                      title="View details"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="hidden md:inline">Lihat</span>
                    </button>
                    <button
                      onClick={() => console.log("Export", record.id)}
                      className="flex-1 md:flex-none px-3 py-2 rounded-md bg-[#0F172A] text-white hover:bg-[#0F172A]/90 transition-colors flex items-center justify-center gap-1 text-sm font-medium"
                      title="Export data"
                    >
                      <FileDownload className="w-4 h-4" />
                      <span className="hidden md:inline">Ekspor</span>
                    </button>
                  </div>
                </div>

                {expandedId === record.id && (
                  <div className="px-4 md:px-6 py-4 bg-gray-50 border-t border-[#E5E7EB]">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Detail Optimasi
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">
                          Tanggal
                        </p>
                        <p className="font-medium text-gray-900 text-sm">
                          {record.date}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">
                          Titik Taman
                        </p>
                        <p className="font-medium text-gray-900 text-sm">
                          {record.points} titik
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">
                          Armada
                        </p>
                        <p className="font-medium text-gray-900 text-sm">
                          {record.fleet} kendaraan
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">
                          Total Jarak
                        </p>
                        <p className="font-medium text-gray-900 text-sm">
                          {record.totalDistance} km
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                      <div className="flex gap-2">
                        <Button className="flex-1 h-10 rounded-md bg-[#0F172A] text-white font-medium hover:bg-[#0F172A]/90 flex items-center justify-center gap-2">
                          <Eye className="w-4 h-4" />
                          Lihat Detail Rute
                        </Button>
                        <Button className="flex-1 h-10 rounded-md bg-[#0F172A] text-white font-medium hover:bg-[#0F172A]/90 flex items-center justify-center gap-2">
                          <FileDownload className="w-4 h-4" />
                          Ekspor PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-[#E5E7EB] bg-blue-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-2">💡 Tips</h3>
          <p className="text-sm text-gray-700">
            Klik tombol "Lihat" untuk melihat detail lengkap dari setiap optimasi,
            termasuk rute spesifik untuk setiap armada. Gunakan tombol "Ekspor"
            untuk mengunduh laporan dalam format PDF untuk referensi dan
            dokumentasi.
          </p>
        </div>
      </div>
    </div>
  );
}
