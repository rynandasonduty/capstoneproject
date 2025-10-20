# Sistem Optimasi Rute Mobil Penyiram Taman Kota Surabaya

Proyek ini adalah aplikasi web full-stack yang dikembangkan sebagai bagian dari Proyek Capstone. Aplikasi ini bertujuan untuk mengoptimalkan rute harian mobil penyiram taman di Kota Surabaya, menggantikan proses manual yang ada dengan solusi digital yang efisien dan interaktif.

## 📋 Fitur Utama

- **Pengelolaan Data**: Mengelola data lokasi taman dan sumber air
- **Perencanaan Rute**: Memungkinkan operator untuk memilih taman yang akan disiram dan menentukan jumlah armada
- **Optimasi Rute**: Menghitung rute paling efisien berdasarkan algoritma metaheuristik
- **Visualisasi Peta**: Menampilkan rute yang dihasilkan pada peta interaktif menggunakan Leaflet
- **Manajemen Pengguna**: Sistem multi-peran dengan hak akses berbeda untuk Administrator, Operator/Dispatcher, dan Pengemudi
- **Ekspor Laporan**: Kemampuan untuk mengekspor hasil optimasi rute ke dalam format dokumen

## 🛠️ Tech Stack & Tools

Proyek ini dibangun menggunakan tumpukan teknologi modern untuk memastikan skalabilitas, kemudahan pengembangan, dan kualitas kode yang tinggi.

### Frontend

- **Framework**: React 18
- **Build Tool**: Vite
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Routing**: React Router 6
- **State Management (Client)**: Zustand
- **State Management (Server & Cache)**: TanStack Query (React Query)
- **Peta**: Leaflet & React Leaflet
- **Form**: React Hook Form & Zod
- **Ikon**: Lucide React

### Backend

- **Runtime**: Node.js
- **Framework**: Express
- **Bahasa**: TypeScript
- **Autentikasi**: JSON Web Token (JWT)

### Kualitas Kode & Tooling

- **Package Manager**: pnpm
- **Linter**: ESLint
- **Formatter**: Prettier
- **Git Hooks**: Husky & lint-staged
- **Testing**: Vitest

## 📁 Struktur Proyek

```
/
├── client/          # Kode sumber untuk frontend (React SPA)
│   ├── components/  # Komponen UI yang dapat digunakan kembali
│   ├── context/     # React Context (e.g., AuthContext)
│   ├── hooks/       # Custom hooks
│   ├── lib/         # Utilitas dan validasi
│   ├── pages/       # Komponen halaman untuk setiap rute
│   ├── store/       # State management global (Zustand)
│   └── App.tsx      # Entry point aplikasi dan konfigurasi routing
│
├── public/          # Aset statis (ikon, gambar)
│
├── server/          # Kode sumber untuk backend (Express API)
│   ├── routes/      # Handler untuk setiap endpoint API
│   └── index.ts     # Konfigurasi utama server Express
│
├── shared/          # Tipe data TypeScript yang digunakan bersama oleh client & server
│
└── .husky/          # Konfigurasi Git hooks untuk pre-commit
```

## 🚀 Panduan Memulai

### Prasyarat

- **Node.js**: Versi 18 atau lebih tinggi
- **pnpm**: Pastikan Anda telah menginstal pnpm secara global (`npm install -g pnpm`)

### Instalasi & Menjalankan Proyek

1. **Clone Repository**

   Salin repositori ini ke mesin lokal Anda menggunakan Git.

```bash
   git clone [URL_REPOSITORY_ANDA]
   cd [NAMA_FOLDER_PROYEK]
```

2. **Install Dependencies**

   Gunakan pnpm untuk menginstal semua dependensi yang dibutuhkan oleh proyek.

```bash
   pnpm install
```

3. **Setup Environment Variables**

   Salin file `.env.example` (jika ada) menjadi `.env` dan isi variabel yang dibutuhkan, seperti `JWT_SECRET`.

```bash
   cp .env.example .env
```

4. **Jalankan Development Server**

   Perintah ini akan menjalankan server Vite (frontend) dan server Express (backend) secara bersamaan.

```bash
   pnpm dev
```

Aplikasi akan tersedia di `http://localhost:8080`.

## 📜 Skrip yang Tersedia

- `pnpm dev`: Menjalankan aplikasi dalam mode development
- `pnpm build`: Membuat build produksi untuk frontend dan backend
- `pnpm start`: Menjalankan aplikasi dari build produksi
- `pnpm test`: Menjalankan unit test menggunakan Vitest
- `pnpm typecheck`: Memeriksa kesalahan tipe data dengan TypeScript

## 🔄 Alur Kerja Git

Proyek ini menggunakan Husky untuk memastikan kualitas kode sebelum di-commit.

### 1. Pull (Menarik Perubahan)

Sebelum mulai bekerja, selalu tarik perubahan terbaru dari remote repository.

```bash
git pull origin [NAMA_BRANCH]
```

### 2. Commit (Menyimpan Perubahan)

Setelah melakukan perubahan, tambahkan file dan buat commit.

```bash
git add .
git commit -m "feat: Menambahkan fitur X"
```

**Pada tahap ini, Husky akan secara otomatis:**

- Menjalankan **Prettier** untuk memformat kode Anda
- Menjalankan **ESLint** untuk memeriksa kualitas kode
- Jika ada error dari ESLint, commit akan gagal

### 3. Push (Mengirim Perubahan)

Kirim perubahan Anda ke remote repository.

```bash
git push origin [NAMA_BRANCH]
```

## 📝 Konvensi Commit

Proyek ini menggunakan konvensi commit message untuk menjaga konsistensi. Format yang digunakan:

```
<type>: <description>

[optional body]

[optional footer]
```

### Tipe Commit

- `feat`: Menambahkan fitur baru
- `fix`: Memperbaiki bug
- `docs`: Perubahan dokumentasi
- `style`: Perubahan yang tidak mempengaruhi arti kode (whitespace, formatting, dll)
- `refactor`: Perubahan kode yang tidak memperbaiki bug atau menambahkan fitur
- `perf`: Perubahan kode yang meningkatkan performa
- `test`: Menambahkan atau memperbaiki test
- `chore`: Perubahan pada build process atau auxiliary tools

### Contoh

```bash
git commit -m "feat: Menambahkan fitur visualisasi rute pada peta"
git commit -m "fix: Memperbaiki bug pada perhitungan jarak"
git commit -m "docs: Memperbarui README dengan panduan instalasi"
```

## 👥 Kontributor

Jason Ho - 5026221005
Ravarel Harsha A - 5026221048
M. Ariq Alwin - 5026221177
Andiar Rinanda Agastya - 5026221219
Thariq Kemal Hassan - 5026221174

## 📄 Lisensi

Kelompok Jason, Kemal, Ariq, Andiar, Rava; Capstone C
