# BagusMusik

Platform web untuk jasa servis & reparasi alat musik (PWA) — Next.js 15, TypeScript, Tailwind CSS, Prisma ORM (SQLite dev / PostgreSQL produksi).

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Frontend | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS |
| Backend | Next.js API Routes, Server Actions |
| Database | Prisma ORM, SQLite (dev), PostgreSQL (produksi) |
| Auth | JWT (jose) + Refresh Token, bcrypt, RBAC |
| PWA | Web App Manifest, Service Worker, Install Prompt |
| Validasi | Zod |
| Icon | SVG internal (`src/components/icons.tsx`) |
| Styling | Tailwind CSS, custom design system (ink/brass palette) |

## Struktur Folder

```
bagusmusik/
├── prisma/
│   ├── schema.prisma    # Skema database (18 model)
│   ├── seed.ts          # Seeder data demo
│   └── dev.db           # Database SQLite (dev)
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── (public)     # Halaman publik (landing, booking, cek-status, layanan, invoice, login)
│   │   ├── admin/       # Dashboard admin (perlu login + RBAC)
│   │   ├── tech/        # Dashboard teknisi (perlu login + RBAC)
│   │   └── api/         # REST API routes (auth, users, customers, services, bookings, service-orders, sales, payments, inventory, suppliers, reports, qr, upload, settings, expenses, technicians)
│   ├── components/      # UI komponen (admin shell, booking wizard, toast, modal, dll)
│   └── lib/             # Utilitas (auth, session, permissions, db, validators, settings, audit, utils, status)
├── .env.example         # Contoh variabel environment
├── next.config.ts       # Konfigurasi Next.js
├── tailwind.config.ts   # Konfigurasi Tailwind
├── tsconfig.json        # Konfigurasi TypeScript
├── package.json         # Dependensi & scripts
└── BAGUSMUSIK-BLUEPRINT-v2.md  # Blueprint lengkap aplikasi (1.991 baris)
```

## Fitur yang Tersedia

### Publik (tanpa login)
- **Landing page** (`/`) — Informasi bengkel, katalog layanan, testimoni, QR booking, WhatsApp
- **Katalog layanan** (`/layanan`) — Daftar servis dengan harga, durasi, kategori
- **Booking servis** (`/booking`) — Form 3 langkah, unggah foto kamera/galeri, nomor booking
- **Cek status servis** (`/cek-status`) — Cari nomor `SO-...` atau `BK-...`, timeline progres, WhatsApp
- **Invoice** (`/invoice/[number]`) — Detail invoice
- **Login** (`/login`) — Halaman masuk staf

### Admin / Staff (perlu login & RBAC)
Role: `OWNER`, `ADMIN`, `KASIR`, `TEKNISI`

| Halaman | Path | Permission |
|---------|------|------------|
| Dashboard | `/admin` | `BOOKING_VIEW` |
| Booking | `/admin/bookings` | `BOOKING_VIEW` |
| Detail Booking | `/admin/bookings/[id]` | `BOOKING_VIEW` |
| Work Order | `/admin/work-orders` | `WORKORDER_VIEW` |
| Detail WO | `/admin/work-orders/[id]` | `WORKORDER_VIEW` |
| Pelanggan | `/admin/customers` | `CUSTOMER_VIEW` |
| Detail Pelanggan | `/admin/customers/[id]` | `CUSTOMER_VIEW` |
| Inventaris | `/admin/inventory` | `INVENTORY_VIEW` |
| Supplier | `/admin/suppliers` | `SUPPLIER_VIEW` |
| Layanan | `/admin/services` | `SERVICE_VIEW` |
| Pengguna | `/admin/users` | `USER_MANAGE` |
| Audit Log | `/admin/audit` | `AUDIT_VIEW` |
| Pengaturan | `/admin/settings` | `SETTING_MANAGE` |
| QR Code | `/admin/qr` | `BOOKING_VIEW` |
| Laporan | `/admin/reports` | `REPORT_VIEW` |
| POS / Kasir | `/admin/pos` | `POS_VIEW` / `POS_CREATE` / `POS_PAYMENT` |

### Teknisi
| Halaman | Path | Permission |
|---------|------|------------|
| Dashboard Teknisi | `/tech` | `WORKORDER_VIEW` |

## Cara Menjalankan

### 1. Install dependensi
```powershell
npm install
```

### 2. Siapkan environment
Salin `.env.example` ke `.env`:
```powershell
copy .env.example .env
```
Edit `.env` sesuai kebutuhan (default menggunakan SQLite untuk development).

### 3. Inisialisasi database
```powershell
npx prisma db push
```
Untuk data demo (opsional, **akan mereset database**):
```powershell
npm run db:seed
```

### 4. Jalankan development server
```powershell
npm run dev
```
Buka: `http://localhost:3000`

### 5. Uji di HP (PWA / kamera / webhook)
Pastikan laptop dan HP sama WiFi, lalu buka `http://<IP-laptop>:3000` di HP. Fitur PWA/kamera butuh HTTPS — gunakan `cloudflared tunnel` atau `ngrok`.

## Scripts

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Server development (port 3000) |
| `npm run build` | `prisma generate` + `next build` |
| `npm run start` | Server produksi |
| `npm run typecheck` | TypeScript `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run db:push` | Sinkronkan skema Prisma ke database |
| `npm run db:seed` | Isi data demo |
| `npm run db:studio` | Prisma Studio (lihat DB visually) |

## Akun Demo (setelah seed)

| Role | Email | Password |
|------|-------|----------|
| Owner | owner@bagusmusik.id | owner123 |
| Admin | admin@bagusmusik.id | admin123 |
| Kasir | kasir@bagusmusik.id | kasir123 |
| Teknisi | teknisi@bagusmusik.id | teknisi123 |

## Kontak Admin (terbaru)

- **WhatsApp:** 085888058830
- **Alamat:** Kab. Pekalongan Kec. Kajen Ds. Tambakroto Dk. Kelapasawit

## Keamanan

- Password di-hash dengan bcrypt
- JWT session + refresh token (httpOnly cookie)
- Rate limiting pada login dan booking
- RBAC (Role-Based Access Control) pada semua route admin/tech
- Audit log untuk semua aksi penting
- Validasi input dengan Zod (klien & server)
- Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy)

## Pengembangan Selanjutnya

Lihat `BAGUSMUSIK-BLUEPRINT-v2.md` untuk blueprint lengkap, termasuk state machine servis, API specification, role & permission, arsitektur PWA, dan panduan mobile.

## Lisensi

Private — BagusMusik.