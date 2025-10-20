import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNotification } from "@/hooks/use-notification";
import { forgotPasswordSchema } from "@/lib/validation";
import { ArrowLeft, CheckCircle, Mail } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { success } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      forgotPasswordSchema.parse({ email });
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      success("Email reset berhasil dikirim!");
      setSubmitted(true);
    } catch (err: any) {
      if (err.errors) {
        setError(err.errors[0].message);
      } else {
        setError(err instanceof Error ? err.message : "Gagal mengirim email");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="rounded-lg border border-[#E5E7EB] dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-950 mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>

            <h1 className="text-3xl font-bold mb-2 text-[#0F172A] dark:text-white">
              Email Terkirim
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Kami telah mengirimkan link untuk mereset password ke{" "}
              <strong>{email}</strong>
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-md p-4 mb-6">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Periksa email Anda dan ikuti instruksi untuk mereset password.
                Link berlaku selama 24 jam.
              </p>
            </div>

            <Button
              onClick={() => navigate("/login")}
              className="w-full h-12 rounded-md bg-[#0F172A] dark:bg-blue-600 text-white font-medium hover:bg-[#0F172A]/90 dark:hover:bg-blue-700"
            >
              Kembali ke Login
            </Button>

            <button
              onClick={() => {
                setSubmitted(false);
                setEmail("");
              }}
              className="mt-4 text-[#0F172A] dark:text-blue-400 font-medium hover:underline"
            >
              Ubah email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg border border-[#E5E7EB] dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-[#0F172A] dark:text-blue-400 font-medium mb-6 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>

          <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-[#0F172A] dark:bg-slate-700 mx-auto mb-6">
            <Mail className="text-white text-2xl" />
          </div>

          <h1 className="text-3xl font-bold text-center mb-2 text-[#0F172A] dark:text-white">
            Lupa Password?
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Masukkan email Anda dan kami akan mengirimkan link untuk mereset
            password
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 rounded-md bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                <p className="text-sm font-medium text-red-800 dark:text-red-200">
                  {error}
                </p>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F172A] dark:focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 rounded-md bg-[#0F172A] dark:bg-blue-600 text-white font-medium hover:bg-[#0F172A]/90 dark:hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? "Sedang mengirim..." : "Kirim Link Reset"}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5E7EB] dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400">
                Atau
              </span>
            </div>
          </div>

          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            Ingat password Anda?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-[#0F172A] dark:text-blue-400 font-semibold hover:underline"
            >
              Masuk
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
