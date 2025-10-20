import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="rounded-md border border-[#E5E7EB] bg-white p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
          <h1 className="text-[40px] font-bold mb-4">404</h1>
          <p className="text-xl font-semibold mb-2">Halaman Tidak Ditemukan</p>
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="w-full h-12 rounded-md bg-[#0F172A] text-white font-inter text-sm font-medium hover:bg-[#0F172A]/90"
          >
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </div>
  );
}
