import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Mail } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="rounded-lg border border-[#E5E7EB] bg-white p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>

            <h1 className="text-3xl font-bold mb-2 text-[#0F172A]">
              Email Terkirim
            </h1>
            <p className="text-gray-600 mb-6">
              Kami telah mengirimkan link untuk mereset password ke{" "}
              <strong>{email}</strong>
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
              <p className="text-sm text-blue-800">
                Periksa email Anda dan ikuti instruksi untuk mereset password.
                Link berlaku selama 24 jam.
              </p>
            </div>

            <Button
              onClick={() => navigate("/login")}
              className="w-full h-12 rounded-md bg-[#0F172A] text-white font-medium hover:bg-[#0F172A]/90"
            >
              Kembali ke Login
            </Button>

            <button
              onClick={() => {
                setSubmitted(false);
                setEmail("");
              }}
              className="mt-4 text-[#0F172A] font-medium hover:underline"
            >
              Ubah email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg border border-[#E5E7EB] bg-white p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-[#0F172A] font-medium mb-6 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>

          <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-[#0F172A] mx-auto mb-6">
            <Mail className="text-white text-2xl" />
          </div>

          <h1 className="text-3xl font-bold text-center mb-2 text-[#0F172A]">
            Lupa Password?
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Masukkan email Anda dan kami akan mengirimkan link untuk mereset
            password
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-colors"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 rounded-md bg-[#0F172A] text-white font-medium hover:bg-[#0F172A]/90 disabled:opacity-50"
            >
              {isLoading ? "Sedang mengirim..." : "Kirim Link Reset"}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5E7EB]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Atau</span>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm">
            Ingat password Anda?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-[#0F172A] font-semibold hover:underline"
            >
              Masuk
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
