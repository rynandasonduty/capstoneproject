import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

export default function Error500() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="rounded-lg border border-[#E5E7EB] dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-950 mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>

          <h1 className="text-4xl font-bold mb-2 text-[#0F172A] dark:text-white">
            500
          </h1>
          <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Server Error
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Maaf, terjadi kesalahan di server kami. Tim kami sudah diberitahu
            dan akan segera memperbaikinya.
          </p>

          <div className="space-y-3">
            <Button
              onClick={() => navigate("/")}
              className="w-full h-12 rounded-md bg-[#0F172A] dark:bg-slate-700 text-white font-medium hover:bg-[#0F172A]/90 dark:hover:bg-slate-600"
            >
              Kembali ke Beranda
            </Button>
            <Button
              onClick={() => navigate("/help")}
              variant="outline"
              className="w-full h-12 rounded-md border border-[#E5E7EB] dark:border-slate-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-slate-800 font-medium"
            >
              Hubungi Dukungan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
