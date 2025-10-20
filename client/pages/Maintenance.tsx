import { Wrench } from "lucide-react";

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="rounded-lg border border-[#E5E7EB] dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950 mx-auto mb-6">
            <Wrench className="w-8 h-8 text-amber-600 dark:text-amber-400 animate-bounce" />
          </div>

          <h1 className="text-3xl font-bold mb-2 text-[#0F172A] dark:text-white">
            Sedang Dalam Perbaikan
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Kami sedang melakukan pemeliharaan untuk meningkatkan layanan kami. Silakan kembali lagi dalam beberapa saat.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-md p-4">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Estimasi waktu:</strong> 30-60 menit
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[#E5E7EB] dark:border-slate-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Butuh bantuan? Hubungi kami di{" "}
              <a
                href="mailto:support@wateringplanner.id"
                className="text-[#0F172A] dark:text-blue-400 font-semibold hover:underline"
              >
                support@wateringplanner.id
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
