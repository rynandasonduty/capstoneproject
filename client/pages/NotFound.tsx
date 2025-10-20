import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="rounded-lg border border-[#E5E7EB] dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-950 mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>

          <h1 className="text-4xl font-bold mb-2 text-[#0F172A] dark:text-white">
            404
          </h1>
          <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Halaman Tidak Ditemukan
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="w-full h-12 rounded-md bg-[#0F172A] dark:bg-slate-700 text-white font-medium hover:bg-[#0F172A]/90 dark:hover:bg-slate-600"
          >
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </div>
  );
}
