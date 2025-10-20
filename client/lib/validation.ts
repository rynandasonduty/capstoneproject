import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email harus diisi").email("Email tidak valid"),
  password: z
    .string()
    .min(1, "Password harus diisi")
    .min(6, "Password minimal 6 karakter"),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "Nama lengkap harus diisi")
      .min(2, "Nama minimal 2 karakter")
      .max(50, "Nama maksimal 50 karakter"),
    email: z.string().min(1, "Email harus diisi").email("Email tidak valid"),
    password: z
      .string()
      .min(1, "Password harus diisi")
      .min(6, "Password minimal 6 karakter")
      .regex(/[A-Z]/, "Password harus mengandung 1 huruf besar (A-Z)")
      .regex(/[0-9]/, "Password harus mengandung 1 angka (0-9)"),
    confirmPassword: z.string().min(1, "Konfirmasi password harus diisi"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak cocok",
    path: ["confirmPassword"],
  });

export const profileSchema = z.object({
  name: z
    .string()
    .min(1, "Nama lengkap harus diisi")
    .min(2, "Nama minimal 2 karakter")
    .max(50, "Nama maksimal 50 karakter"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email harus diisi").email("Email tidak valid"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
