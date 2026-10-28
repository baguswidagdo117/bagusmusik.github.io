# BAGUSMUSIK — BLUEPRINT APLIKASI WEB JASA SERVIS & REPARASI ALAT MUSIK JADI BAGUS

## Instruksi Utama

Bertindaklah sebagai **Enterprise Software Architect dan Full-Stack Web Developer berpengalaman 15 tahun**. Bangun aplikasi **BagusMusik**, yaitu platform web untuk jasa layanan servis dan reparasi alat musik.

Tujuan sistem adalah menyediakan alur digital terpadu:

**Pelanggan → Booking → Work Order → Diagnosis → Servis → Spare Part → Pembayaran → Invoice → Laporan**

Sistem harus:

- Tidak over-engineering.
- Scalable tetapi tetap sederhana untuk MVP.
- Aman.
- Responsive.
- Mobile-first.
- Mendukung PWA.
- Mudah dikembangkan.
- Cocok untuk bisnis jasa servis alat musik skala kecil hingga menengah.

---

# 1. KONSEP APLIKASI

Nama aplikasi: **BagusMusik**

Jenis aplikasi:

- Website pelanggan.
- Admin Dashboard.
- Kasir / Point of Sale (POS).
- Booking/reservasi.
- Work Order servis.
- Manajemen teknisi.
- Manajemen stok spare part.
- Supplier.
- CRM pelanggan.
- Laporan keuangan.
- Progressive Web App (PWA).

Aktor:

1. Customer
2. Admin
3. Kasir
4. Teknisi
5. Owner

---

# 2. MODUL UTAMA

## 2.1 QR Code / Barcode

Pelanggan dapat melakukan scan QR Code untuk membuka:

- Website utama.
- Katalog layanan.
- Booking servis.
- Cek status servis.

QR dapat ditempel pada:

- Toko.
- Meja Penerimaan Alat.
- Nota.
- Kartu servis.
- Media promosi.

QR bukan inti transaksi, tetapi menjadi pintu masuk cepat ke sistem.

---

## 2.2 Booking / Reservasi

Form booking:

- Nama pelanggan.
- Nomor WhatsApp.
- Jenis alat musik.
- Merek.
- Model.
- Nomor seri jika ada.
- Keluhan/kerusakan.
- Jenis layanan.
- Foto alat/kerusakan.
- Tanggal booking.
- Jam booking.
- Catatan.

Alur:

**Customer → Form Booking → Nomor Booking → Admin → Konfirmasi → Alat Diterima → Work Order**

Status:

- MENUNGGU
- DIKONFIRMASI
- MENUNGGU_PEMBAYARAN
- DP_DIBAYAR
- DIJADWALKAN
- ALAT_DITERIMA
- DIAGNOSIS
- MENUNGGU_PERSETUJUAN
- DALAM_PENGERJAAN
- SELESAI
- SIAP_DIAMBIL
- LUNAS
- DIBATALKAN

Admin dapat mengatur:

- Booking gratis.
- DP persentase.
- DP nominal tetap.
- Minimal pembayaran.
- Batas waktu pembayaran.
- Kebijakan pembatalan/refund.

---

# 3. WORK ORDER / SERVICE ORDER

Setiap booking yang diterima dapat dibuat menjadi Work Order.

Format contoh:

`SO-2026-00001`

Data:

- Nomor servis.
- Pelanggan.
- Alat musik.
- Merek.
- Model.
- Nomor seri.
- Kondisi awal.
- Keluhan.
- Diagnosis.
- Teknisi.
- Spare part.
- Biaya jasa.
- Estimasi biaya.
- Estimasi selesai.
- Status.
- Catatan teknisi.
- Foto sebelum servis.
- Foto setelah servis.

Work Order adalah pusat proses operasional servis.

---

# 4. MODUL TEKNISI

Teknisi dapat:

- Melihat pekerjaan.
- Melihat detail alat.
- Melihat keluhan.
- Melakukan diagnosis.
- Mengubah status.
- Menambahkan catatan.
- Menambahkan spare part.
- Mengunggah foto.
- Mengisi estimasi penyelesaian.

Teknisi tidak boleh mengakses:

- Laporan keuangan.
- Pengaturan sistem.
- Data sensitif admin.

Gunakan RBAC.

---

# 5. POS / KASIR

POS harus cocok untuk bisnis jasa, bukan POS restoran.

Komponen transaksi:

- Jasa servis.
- Spare part.
- Biaya tambahan.
- Diskon.
- DP.
- Pelunasan.
- Refund jika diperlukan.

Contoh:

Jasa servis: Rp150.000
Spare part: Rp200.000
Total: Rp350.000
DP: Rp150.000
Sisa: Rp200.000

Metode pembayaran:

- Cash.
- Transfer.
- QRIS.
- E-wallet.
- Payment gateway.

Fitur:

- Buat transaksi.
- Pilih customer.
- Pilih Work Order.
- Tambahkan jasa.
- Tambahkan spare part.
- Hitung total.
- Catat DP.
- Catat pelunasan.
- Invoice.
- Nota.
- Riwayat transaksi.

---

# 6. INVENTORY / STOK

Contoh item:

- Senar gitar.
- Jack input.
- Potensio.
- Kabel.
- Pick.
- Bridge.
- Nut.
- Baut.
- Stik Drum.
- Komponen elektronik.
- Mika Drum.
- Jack XLR.
- Cleaner.
- Lubricant.
- Spare part lainnya.

Fitur:

- Tambah barang.
- Edit barang.
- Kategori.
- Supplier.
- Harga beli.
- Harga jual.
- Stok masuk.
- Stok keluar.
- Stok minimum.
- Stock opname.
- Riwayat stok.
- Notifikasi stok minimum.

Spare part yang digunakan pada Work Order harus mengurangi stok secara otomatis.

Gunakan FIFO jika sesuai kebutuhan bisnis.

---

# 7. SUPPLIER

Data:

- Nama.
- Kontak.
- Nomor telepon.
- Email.
- Alamat.

Fitur:

- Purchase Order.
- Pembelian.
- Penerimaan barang.
- Retur.
- Riwayat pembelian.
- Hutang supplier jika diperlukan.

---

# 8. CRM / CUSTOMER

Data:

- ID pelanggan.
- Nama.
- WhatsApp.
- Email.
- Alamat.
- Riwayat servis.
- Riwayat transaksi.
- Total transaksi.

Fitur:

- Cari pelanggan.
- Lihat riwayat servis.
- Lihat transaksi.
- Lihat invoice.
- Lihat status booking.

Customer portal penuh ditandai sebagai **fase berikutnya**, bukan kewajiban MVP.

---

# 9. CEK STATUS SERVIS

Pelanggan dapat memasukkan:

`SO-2026-00125`

Sistem menampilkan timeline:

- Booking diterima.
- Alat diterima.
- Diagnosis.
- Menunggu persetujuan.
- Sedang dikerjakan.
- Selesai.
- Siap diambil.

Fitur ini menjadi salah satu fitur penting MusikFix.

---

# 10. DASHBOARD ADMIN / OWNER

Tampilkan:

- Booking hari ini.
- Booking menunggu.
- Servis aktif.
- Servis selesai.
- Pendapatan hari ini.
- Pendapatan bulan ini.
- Pengeluaran.
- Laba/rugi sederhana.
- Jumlah pelanggan.
- Stok menipis.
- Transaksi terbaru.

Grafik:

- Pendapatan.
- Jumlah servis.
- Jenis alat paling banyak diservis.
- Layanan paling populer.
- Pemakaian spare part.

---

# 11. LAPORAN KEUANGAN

## MVP

Minimal:

- Pendapatan.
- Pengeluaran.
- Kas masuk.
- Kas keluar.
- Laba sederhana.

## Fase Berikutnya

Tambahkan:

- Chart of Accounts.
- Jurnal.
- Buku besar.
- Neraca saldo.
- Laba rugi.
- Neraca.
- Arus kas.
- Piutang.
- Hutang.

Gunakan double-entry bookkeeping pada fase lanjutan.

**DISCLAIMER:** Sistem tidak boleh diklaim sebagai sistem akuntansi yang sepenuhnya memenuhi standar akuntansi profesional sebelum struktur dan implementasinya divalidasi oleh akuntan/profesional terkait.

---

# 12. ARSITEKTUR SISTEM

Arsitektur dasar:

**Frontend → API → Backend → Database**

MVP:

```text
Customer
   ↓
Next.js PWA
   ↓
API
   ↓
Prisma ORM
   ↓
PostgreSQL
```

Arsitektur pengembangan:

```text
                    BAGUSMUSIK
                       |
          +------------+------------+
          |                         |
      CUSTOMER                    ADMIN
          |                         |
      PWA/WEB                   DASHBOARD
          |                         |
          +------------+------------+
                       |
                      API
                       |
       +---------------+---------------+
       |               |               |
    Booking           POS           Servis
       |               |               |
       +---------------+---------------+
                       |
                  Inventory
                       |
                   Accounting
                       |
                  PostgreSQL
```

Redis, event bus, microservices, multi-cabang, dan customer portal penuh hanya digunakan jika kebutuhan sudah meningkat.

---

# 13. TECH STACK

## Frontend

- Next.js.
- TypeScript.
- Tailwind CSS.
- PWA.
- Responsive/mobile-first.

## Backend MVP

- Next.js API atau NestJS.
- TypeScript.
- REST API.

Rekomendasi:

- Untuk proyek kecil/MVP: Next.js full-stack.
- Untuk sistem yang semakin besar: Next.js + NestJS.

## Database

- PostgreSQL.
- Prisma ORM.

## Authentication

- JWT.
- Refresh Token.
- RBAC.
- Password hashing.

## Storage

Object Storage untuk:

- Foto alat.
- Foto kerusakan.
- Foto sebelum/sesudah servis.
- Dokumen/invoice jika diperlukan.

## Infrastruktur

- Docker.
- Git.
- GitHub.
- CI/CD.
- Environment Variables.

## Integrasi

- Payment Gateway modular.
- Email.
- WhatsApp melalui provider/API resmi.
- Push notification jika diperlukan.

---

# 14. STRUKTUR MONOREPO

Gunakan Turborepo jika kebutuhan pengembangan sudah memerlukan monorepo.

Contoh:

```text
bagusmusik/
├── apps/
│   ├── web/
│   ├── api/
│   └── admin/
├── packages/
│   ├── ui/
│   ├── database/
│   ├── auth/
│   ├── config/
│   └── types/
├── docs/
│   └── blueprint/
├── docker/
├── .env.example
├── turbo.json
├── package.json
└── README.md
```

Untuk MVP sederhana, admin dapat terlebih dahulu berada dalam aplikasi web yang sama agar tidak over-engineering.

---

# 15. DATABASE MVP

Tabel utama:

```text
users
roles
customers
technicians
instruments
services
bookings
service_orders
service_items
inventory
inventory_transactions
suppliers
sales
sale_items
payments
invoices
expenses
notifications
settings
audit_logs
```

Fase lanjutan:

```text
accounts
journal_entries
journal_entry_lines
purchase_orders
purchase_order_items
stock_opnames
```

---

# 16. RELATIONSHIP DATABASE

```text
Customer
  |
  +--- Booking
  |
  +--- ServiceOrder
  |
  +--- Sales
  |
  +--- Payments

Booking
  |
  +--- ServiceOrder

ServiceOrder
  |
  +--- Technician
  |
  +--- ServiceItems
  |
  +--- Payments
  |
  +--- Invoice

ServiceItem
  |
  +--- Inventory

Inventory
  |
  +--- Supplier
  |
  +--- InventoryTransactions

Sale
  |
  +--- SaleItems
  |
  +--- Payments
  |
  +--- Invoice
```

---

# 17. UML

Semua diagram menggunakan Mermaid atau PlantUML dan harus dapat dirender di GitHub/VSCode.

## 17.1 Use Case Diagram

Aktor:

- Customer.
- Admin.
- Kasir.
- Teknisi.
- Owner.

Use case:

- Registrasi/login.
- Scan QR.
- Melihat layanan.
- Booking.
- Pembayaran.
- Cek status servis.
- Mengelola customer.
- Mengelola booking.
- Mengelola Work Order.
- Mengelola stok.
- POS.
- Supplier.
- Teknisi.
- Laporan.
- Pengaturan.

## 17.2 Class Diagram

Class:

- User.
- Role.
- Customer.
- Technician.
- Instrument.
- Service.
- Booking.
- Payment.
- ServiceOrder.
- Inventory.
- Supplier.
- Sale.
- Invoice.
- Expense.
- Account.
- JournalEntry.

Lengkapi:

- Attribute.
- Method.
- Relationship.
- Cardinality.
- Inheritance jika diperlukan.

## 17.3 Activity Diagram

Buat diagram:

1. Booking pelanggan.
2. Pembayaran booking.
3. Proses servis.
4. Transaksi POS.
5. Penggunaan spare part.
6. Pembelian stok.
7. Laporan keuangan.

## 17.4 Sequence Diagram

Buat diagram:

1. Customer booking.
2. Customer membayar.
3. Admin menerima booking.
4. Teknisi diagnosis.
5. Teknisi menyelesaikan servis.
6. Customer melakukan pelunasan.
7. Sistem membuat invoice.
8. Sistem mengurangi stok.

## 17.5 Component Diagram

Komponen:

```text
Customer
   ↓
PWA/Web
   ↓
API
   ↓
Authentication
Booking Service
POS Service
Service Management
Inventory Service
Payment Service
Notification Service
Accounting Service
   ↓
PostgreSQL
Redis (optional)
Object Storage
```

## 17.6 Deployment Diagram

```text
User Device
   ↓
Browser/PWA
   ↓
CDN/Web Server
   ↓
Backend/API
   ↓
PostgreSQL

Backend → Object Storage
Backend → Payment Gateway
Backend → Email Provider
Backend → WhatsApp Provider
```

---

# 18. API REST

Buat REST API terstruktur.

Contoh endpoint:

## Auth

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh
POST /api/auth/logout
GET  /api/auth/me
```

## Customers

```text
GET    /api/customers
POST   /api/customers
GET    /api/customers/:id
PATCH  /api/customers/:id
DELETE /api/customers/:id
```

## Services

```text
GET    /api/services
POST   /api/services
GET    /api/services/:id
PATCH  /api/services/:id
DELETE /api/services/:id
```

## Bookings

```text
GET    /api/bookings
POST   /api/bookings
GET    /api/bookings/:id
PATCH  /api/bookings/:id
POST   /api/bookings/:id/confirm
POST   /api/bookings/:id/cancel
```

## Work Orders

```text
GET    /api/service-orders
POST   /api/service-orders
GET    /api/service-orders/:id
PATCH  /api/service-orders/:id
POST   /api/service-orders/:id/diagnosis
POST   /api/service-orders/:id/approve
POST   /api/service-orders/:id/complete
```

## POS

```text
GET  /api/sales
POST /api/sales
GET  /api/sales/:id
POST /api/sales/:id/payment
```

## Inventory

```text
GET  /api/inventory
POST /api/inventory
PATCH /api/inventory/:id
POST /api/inventory/:id/stock-in
POST /api/inventory/:id/stock-out
GET  /api/inventory/low-stock
```

## Payments

```text
POST /api/payments
GET  /api/payments/:id
POST /api/payments/webhook
```

## Reports

```text
GET /api/reports/sales
GET /api/reports/revenue
GET /api/reports/expenses
GET /api/reports/profit-loss
GET /api/reports/cash-flow
GET /api/reports/inventory
```

API harus menggunakan:

- Validation.
- Authentication.
- Authorization.
- Pagination.
- Filtering.
- Sorting.
- Consistent response format.
- Error handling.
- Logging.

---

# 19. ROLE & PERMISSION

## Customer

Boleh:

- Melihat layanan.
- Membuat booking.
- Melihat booking.
- Membayar.
- Mengecek status servis.

## Kasir

Boleh:

- Customer.
- Booking.
- POS.
- Pembayaran.
- Invoice.

Tidak boleh:

- Pengaturan sistem.
- Laporan sensitif owner.

## Teknisi

Boleh:

- Melihat Work Order yang ditugaskan.
- Diagnosis.
- Status servis.
- Spare part.
- Catatan servis.
- Foto servis.

Tidak boleh:

- Keuangan.
- Pengaturan sistem.

## Admin

Boleh:

- Booking.
- Customer.
- Work Order.
- Inventory.
- Supplier.
- Teknisi.
- POS.
- Pengaturan operasional.

## Owner

Boleh:

- Semua laporan.
- Dashboard.
- Pengaturan bisnis.
- Data pengguna.
- Audit log.

Gunakan permission code seperti:

```text
BOOKING_VIEW
BOOKING_CREATE
BOOKING_UPDATE
BOOKING_CANCEL

SERVICE_VIEW
SERVICE_CREATE
SERVICE_UPDATE

WORKORDER_VIEW
WORKORDER_CREATE
WORKORDER_UPDATE
WORKORDER_COMPLETE

POS_VIEW
POS_CREATE
POS_PAYMENT

INVENTORY_VIEW
INVENTORY_CREATE
INVENTORY_UPDATE
INVENTORY_STOCK_IN
INVENTORY_STOCK_OUT

REPORT_VIEW
FINANCE_VIEW
USER_MANAGE
SETTING_MANAGE
AUDIT_VIEW
```

---

# 20. SECURITY

Gunakan 6 lapisan keamanan:

1. Network Security.
2. Application Security.
3. Authentication.
4. Authorization.
5. Data Security.
6. Monitoring/Audit.

Implementasi:

- HTTPS.
- Password hashing.
- JWT + refresh token.
- RBAC.
- Input validation.
- Rate limiting.
- CORS.
- CSRF protection jika relevan.
- SQL injection prevention melalui ORM/parameterized query.
- XSS prevention.
- Secure headers.
- Token expiration.
- Audit log.
- Database backup.
- File upload validation.
- File size limit.
- Secret melalui environment variable.

Jangan menyimpan:

- Password plaintext.
- API key di frontend.
- Secret payment gateway di source code.

---

# 21. PWA

PWA harus:

- Responsive.
- Installable.
- Mobile-first.
- Memiliki manifest.
- Menggunakan service worker.
- Memiliki caching yang aman.
- Dapat memberikan push notification jika provider mendukung.

Jangan membuat offline mode kompleks pada MVP.

Prioritaskan:

- Booking.
- Cek status.
- Dashboard ringan.

---

# 22. PAYMENT ARCHITECTURE

Gunakan abstraction/interface agar payment provider mudah diganti.

```text
Booking
   ↓
Payment Service
   ↓
Payment Provider Interface
   ↓
Provider A / Provider B
   ↓
Webhook
   ↓
Payment Service
   ↓
Database
```

Admin dapat mengatur:

- Booking gratis.
- DP nominal.
- DP persentase.
- Batas waktu.
- Pembatalan/refund.

Jangan percaya status pembayaran hanya dari frontend. Validasi pembayaran dari webhook/provider.

---

# 23. NOTIFICATION

Channel:

- Email.
- WhatsApp melalui provider/API resmi.
- In-app notification.
- Push notification jika diperlukan.

Event:

- Booking dibuat.
- Booking dikonfirmasi.
- Pembayaran berhasil.
- Servis dimulai.
- Persetujuan biaya.
- Servis selesai.
- Alat siap diambil.
- Pembayaran jatuh tempo.

---

# 24. ACCOUNTING ARCHITECTURE

MVP:

```text
Sales
Expenses
Payments
   ↓
Revenue / Expense
   ↓
Simple Financial Report
```

Fase lanjutan:

```text
Transaction
   ↓
Journal
   ↓
Journal Lines
   ↓
General Ledger
   ↓
Trial Balance
   ↓
Financial Reports
```

**DISCLAIMER:** Modul akuntansi harus divalidasi oleh akuntan/profesional sebelum digunakan sebagai laporan akuntansi formal.

---

# 25. DATA FLOW

## Booking

```text
Customer
 ↓
Web/PWA
 ↓
Booking API
 ↓
Validation
 ↓
Database
 ↓
Notification
 ↓
Admin
```

## Servis

```text
Booking
 ↓
Work Order
 ↓
Diagnosis
 ↓
Approval
 ↓
Technician
 ↓
Inventory
 ↓
Service Complete
 ↓
Invoice
```

## Pembayaran

```text
Customer
 ↓
Payment
 ↓
Payment Gateway
 ↓
Webhook
 ↓
Backend
 ↓
Payment Record
 ↓
Invoice
```

## Inventory

```text
Purchase
 ↓
Stock In
 ↓
Inventory
 ↓
Work Order
 ↓
Stock Out
 ↓
Inventory Transaction
```

---

# 26. UI WIREFRAME

## Landing Page

```text
+--------------------------------+
| BAGUSMUSIK          Booking    |
+--------------------------------+
| Servis & Reparasi Alat Musik   |
|                                |
| [ BOOKING SERVIS ]             |
| [ CEK STATUS ]                 |
+--------------------------------+
| Layanan                        |
| Gitar | Bass | Keyboard        |
| Drum  | Amp   | Microphone     |
+--------------------------------+
```

## Booking

```text
+-----------------------------+
| BOOKING SERVIS              |
+-----------------------------+
| Nama:       [             ] |
| WhatsApp:   [             ] |
| Alat:       [             ] |
| Merek:      [             ] |
| Keluhan:    [             ] |
| Tanggal:    [             ] |
| Jam:        [             ] |
| Foto:       [ Upload ]      |
|                             |
|       [ KIRIM BOOKING ]     |
+-----------------------------+
```

## Cek Status

```text
+-----------------------------+
| CEK STATUS SERVIS           |
+-----------------------------+
| Nomor Servis:               |
| [ SO-2026-00125 ]           |
|                             |
| [ CEK STATUS ]              |
+-----------------------------+
```

## Dashboard

```text
+------------------------------------------------+
| DASHBOARD BAGUSMUSIK                           |
+------------------------------------------------+
| Booking | Servis | Pendapatan | Stok Menipis   |
+------------------------------------------------+
| Grafik Pendapatan                              |
+------------------------------------------------+
| Booking Terbaru                                |
+------------------------------------------------+
| Servis Aktif                                   |
+------------------------------------------------+
```

## POS

```text
+------------------------------------------------+
| POS BAGUSMUSIK                                 |
+------------------------------------------------+
| Customer: [ Sutesno ]                          |
| Work Order: [ SO-2026-00125 ]                  |
+------------------------------------------------+
| Jasa Servis             Rp150.000              |
| Senar                   Rp200.000              |
+------------------------------------------------+
| TOTAL                   Rp350.000              |
| DP                      Rp150.000              |
| SISA                    Rp200.000              |
+------------------------------------------------+
| [ BAYAR ] [ CETAK INVOICE ]                    |
+------------------------------------------------+
```

---

# 27. BUSINESS PROCESS

Alur utama:

```text
Customer
 ↓
Scan QR / Website
 ↓
Lihat Layanan
 ↓
Booking
 ↓
Pembayaran DP (opsional)
 ↓
Admin Konfirmasi
 ↓
Alat Diterima
 ↓
Work Order
 ↓
Diagnosis
 ↓
Estimasi Biaya
 ↓
Persetujuan Customer
 ↓
Servis
 ↓
Penggunaan Spare Part
 ↓
Servis Selesai
 ↓
Invoice
 ↓
Pelunasan
 ↓
Alat Diambil/Dikirim
 ↓
Laporan
```

---

# 28. CANCELLATION & REFUND

Aturan dapat dikonfigurasi admin.

Contoh:

- Booking gratis → dapat dibatalkan.
- DP belum dibayar → booking dapat expired.
- DP dibayar → mengikuti kebijakan refund.
- Servis sedang dikerjakan → pembatalan memerlukan persetujuan admin.
- Refund harus dicatat sebagai transaksi.

Semua perubahan penting dicatat pada audit log.

---

# 29. STATE MACHINE SERVICE ORDER

```text
DRAFT
  ↓
RECEIVED
  ↓
DIAGNOSING
  ↓
WAITING_APPROVAL
  ↓
IN_PROGRESS
  ↓
COMPLETED
  ↓
READY_FOR_PICKUP
  ↓
PAID
  ↓
CLOSED
```

Exception:

```text
WAITING_APPROVAL → CANCELLED
IN_PROGRESS → CANCELLED
```

Perubahan status harus divalidasi oleh backend berdasarkan role dan status sebelumnya.

---

# 30. ROADMAP

## FASE 0 — Foundation

- Repository.
- Database.
- Authentication.
- RBAC.
- UI foundation.
- Environment.
- CI/CD dasar.

## FASE 1 — MVP

Fokus:

- Landing page.
- Katalog layanan.
- Booking.
- Customer.
- Work Order.
- Teknisi.
- Cek status.
- Invoice.
- Dashboard dasar.

## FASE 2 — Operasional

- POS.
- Payment gateway.
- QRIS.
- Inventory.
- Supplier.
- Notification.
- Stock transaction.

## FASE 3 — Advanced

- Double-entry accounting.
- Redis.
- Event bus.
- Customer portal penuh.
- Multi-cabang.
- Advanced analytics.
- Automation.
- Integrasi lebih banyak.

---

# 31. MVP MINIMUM

MVP wajib memiliki:

```text
1. Landing Page
2. Daftar Layanan
3. Booking
4. Customer
5. Work Order
6. Teknisi
7. Cek Status
8. Invoice
9. Dashboard
10. Authentication & RBAC
```

Jangan memasukkan:

- Microservices.
- Event bus.
- Redis.
- Multi-cabang.
- Double-entry accounting.
- Customer portal kompleks.

ke MVP kecuali ada kebutuhan nyata.

---

# 32. METRIK KEBERHASILAN

Pantau:

- Jumlah booking.
- Booking berhasil.
- Booking dibatalkan.
- Waktu respon booking.
- Waktu rata-rata servis.
- Jumlah Work Order selesai.
- Pendapatan.
- Penggunaan spare part.
- Stok habis.
- Repeat customer.
- Persentase pembayaran berhasil.

---

# 33. RISIKO

Risiko utama:

- Scope terlalu besar.
- Database terlalu kompleks.
- Pembayaran gagal/webhook tidak masuk.
- Stok tidak sinkron.
- Kesalahan perubahan status servis.
- Kebocoran data pelanggan.
- Upload file berbahaya.
- Laporan keuangan tidak akurat.
- Ketergantungan pada provider pihak ketiga.

Mitigasi:

- Mulai dari MVP.
- Gunakan validation.
- Gunakan database transaction.
- Audit log.
- Backup.
- Role permission.
- Webhook verification.
- Testing.

---

# 34. KEPUTUSAN ARSITEKTUR / ADR

## ADR-001: Next.js

Dipilih untuk menggabungkan frontend dan kebutuhan server-side sederhana pada MVP.

## ADR-002: TypeScript

Dipilih untuk type safety dan mengurangi error.

## ADR-003: PostgreSQL

Dipilih karena relational database cocok untuk booking, transaksi, stok, dan laporan.

## ADR-004: Prisma

Dipilih untuk produktivitas pengembangan dan type-safe database access.

## ADR-005: REST API

Dipilih karena sederhana, umum, dan mudah diintegrasikan.

## ADR-006: RBAC

Dipilih karena setiap aktor memiliki akses berbeda.

## ADR-007: Modular Payment

Payment dibuat melalui abstraction agar provider dapat diganti.

## ADR-008: PWA

Dipilih agar website dapat digunakan seperti aplikasi mobile.

## ADR-009: Modular Architecture

Modul dipisahkan berdasarkan domain bisnis agar mudah dikembangkan.

## ADR-010: MVP First

Fitur kompleks ditunda sampai ada kebutuhan nyata agar tidak over-engineering.

---

# 35. STRUKTUR FINAL YANG DIHARAPKAN

Blueprint lengkap harus menghasilkan:

```text
BAGUSMUSIK
│
├── Customer Web/PWA
│
├── Booking
│
├── QR Access
│
├── Work Order
│
├── Technician
│
├── POS
│
├── Inventory
│
├── Supplier
│
├── CRM
│
├── Payment
│
├── Notification
│
├── Dashboard
│
├── Financial Report
│
├── Authentication
│
├── RBAC
│
├── Audit Log
│
└── PostgreSQL
```

---

# 36. PANDUAN MENJALANKAN DI WEBSITE HP (MOBILE WEB & PWA)

> Bagian ini adalah **tambahan** terhadap blueprint. Seluruh bagian 1–35 tidak diubah dan tetap berlaku. Bagian ini memperjelas poin "Responsive", "Mobile-first", dan "PWA" pada Instruksi Utama, Bagian 13, dan Bagian 21.

## 36.1 Prinsip Mobile-First

- Desain dan kode dimulai dari layar HP (lebar 360px), baru diperluas ke tablet dan desktop.
- Semua fitur MVP (Landing, Layanan, Booking, Cek Status, Dashboard ringan) harus dapat dipakai penuh hanya dengan HP.
- Pelanggan dianggap 90% mengakses dari HP lewat QR Code (Bagian 2.1) atau tautan WhatsApp.
- Teknisi dan kasir sering memakai HP/tablet di bengkel, sehingga halaman Teknisi dan POS wajib nyaman dipakai satu tangan.
- Gunakan satu codebase yang sama untuk HP, tablet, dan desktop. Tidak perlu aplikasi native pada MVP.

## 36.2 Breakpoint dan Layout

Gunakan breakpoint bawaan Tailwind CSS (mobile-first, tulis gaya dasar untuk HP lalu tambahkan prefix untuk layar lebih besar).

| Perangkat             | Lebar          | Prefix Tailwind | Layout                     |
| --------------------- | -------------- | --------------- | -------------------------- |
| HP                    | 320–639px      | (default)       | 1 kolom, bottom navigation |
| HP besar/tablet kecil | 640–767px      | `sm:`           | 1–2 kolom                  |
| Tablet                | 768–1023px     | `md:`           | 2 kolom, sidebar ringkas   |
| Laptop                | 1024px ke atas | `lg:`           | Sidebar penuh, tabel lebar |

Aturan layout:

- Jangan ada scroll horizontal pada halaman (kecuali tabel yang dibungkus container scroll).
- Gutter samping minimal 16px.
- Tabel pada HP diubah menjadi **kartu (card list)**, bukan tabel lebar.
- Navigasi pelanggan: header sederhana + tombol utama besar.
- Navigasi admin/kasir/teknisi di HP: **bottom navigation bar** (maksimal 5 menu) dan menu lain di "Lainnya".
- Modal besar pada HP diganti **bottom sheet** atau halaman penuh.
- Gunakan satuan relatif (`rem`, `%`, `dvh`), hindari lebar tetap dalam piksel.

## 36.3 Aturan UI Sentuh (Touch)

- Ukuran target sentuh minimal 44×44px, jarak antar tombol minimal 8px.
- Tombol aksi utama (Kirim Booking, Cek Status, Bayar) selebar penuh dan diletakkan di bagian bawah layar yang mudah dijangkau ibu jari.
- Ukuran font isi minimal 16px. Ukuran lebih kecil membuat iOS Safari memperbesar layar otomatis saat input difokuskan.
- Tidak mengandalkan hover. Semua informasi dan aksi harus dapat diakses lewat tap.
- Berikan umpan balik instan (loading state, disabled state, toast) karena jaringan seluler bisa lambat.
- Gunakan tipe input yang tepat agar keyboard HP sesuai:

```text
Nama           → type="text"   autocomplete="name"
WhatsApp       → type="tel"    inputmode="tel"      autocomplete="tel"
Email          → type="email"  inputmode="email"    autocomplete="email"
Nomor Servis   → type="text"   autocapitalize="characters"  (contoh SO-2026-00125)
Nominal (Rp)   → inputmode="numeric"
Tanggal/Jam    → type="date" / type="time" (picker bawaan HP)
```

## 36.4 Konfigurasi Teknis Wajib

### Viewport

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, viewport-fit=cover"
/>
<meta name="theme-color" content="#111827" />
```

Pada Next.js (App Router) gunakan export `viewport` di `app/layout.tsx`.

### Safe Area (HP berponi/notch)

```css
body {
  padding-bottom: env(safe-area-inset-bottom);
}
.bottom-nav {
  padding-bottom: calc(env(safe-area-inset-bottom) + 8px);
}
```

Gunakan unit `100dvh`, bukan `100vh`, agar tidak terpotong oleh address bar HP.

### Web App Manifest (PWA)

Contoh `app/manifest.ts` pada Next.js:

```ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BagusMusik",
    short_name: "BagusMusik",
    description: "Servis & Reparasi Alat Musik",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#111827",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
```

Untuk iOS tambahkan juga `apple-touch-icon` (180×180) dan metadata `appleWebApp`.

### Service Worker (sederhana untuk MVP)

- Cache aset statis (CSS, JS, ikon, font).
- Halaman Booking dan Cek Status memakai strategi **network-first** agar data selalu terbaru.
- Jangan meng-cache respons API yang berisi data pelanggan, token, atau data keuangan.
- Sediakan halaman `/offline` sederhana berisi pesan "Tidak ada koneksi" dan tombol coba lagi.
- Sesuai Bagian 21, tidak membuat mode offline yang kompleks pada MVP.

## 36.5 Fitur Perangkat HP

### Upload Foto dari Kamera

Pada form Booking dan Teknisi, buka kamera langsung dari HP:

```html
<input type="file" accept="image/*" capture="environment" />
```

Sediakan juga opsi memilih dari galeri (input tanpa atribut `capture`).

Aturan upload:

- Kompres gambar di sisi klien sebelum dikirim (target sekitar 1–1,5MB, sisi terpanjang sekitar 1600px) agar hemat kuota dan cepat di jaringan seluler.
- Validasi tipe dan ukuran file di klien dan wajib divalidasi ulang di server (sesuai Bagian 20).
- Tampilkan preview dan progress upload.
- Batasi jumlah foto per booking (contoh maksimal 5).

### QR Code

- QR hanya berisi URL biasa (contoh `https://domain-anda.com/booking` atau `https://domain-anda.com/cek-status`), sehingga bisa dibuka oleh kamera bawaan HP tanpa aplikasi tambahan.
- Tambahkan parameter sumber untuk analitik, contoh `?src=qr-toko`, `?src=qr-nota`.
- QR pada nota dapat memuat nomor servis agar halaman Cek Status terisi otomatis, contoh `/cek-status?no=SO-2026-00125`.
- Cetak QR minimal 3×3 cm dengan kontras tinggi.

### Tautan WhatsApp

- Tombol "Hubungi via WhatsApp" menggunakan tautan `https://wa.me/<nomor>?text=<pesan>` agar langsung membuka aplikasi WhatsApp di HP.
- Notifikasi status servis dapat menyertakan tautan Cek Status.

### Notifikasi Push

- Push pada Android Chrome tersedia setelah PWA diizinkan.
- Push pada iOS hanya tersedia jika PWA sudah ditambahkan ke Layar Utama (iOS 16.4 ke atas).
- Karena itu, WhatsApp dan email tetap menjadi kanal notifikasi utama (Bagian 23), push hanya pelengkap.

## 36.6 Wireframe Versi HP

### Landing Page (HP)

```text
+------------------------+
| ☰  BAGUSMUSIK          |
+------------------------+
| Servis & Reparasi      |
| Alat Musik             |
|                        |
| [   BOOKING SERVIS   ] |
| [    CEK STATUS      ] |
+------------------------+
| Layanan                |
| [Gitar]   [Bass]       |
| [Keyboard][Drum]       |
| [Amp]     [Mic]        |
+------------------------+
| [ Hubungi via WA ]     |
+------------------------+
```

### Booking (HP, form bertahap)

Pada HP, form panjang dipecah menjadi langkah-langkah agar tidak melelahkan.

```text
Langkah 1/3  Data Anda        → Nama, WhatsApp, Email
Langkah 2/3  Data Alat        → Jenis, Merek, Model, No. Seri, Keluhan, Foto
Langkah 3/3  Jadwal & Kirim   → Tanggal, Jam, Catatan, Ringkasan

+------------------------+
| ← Booking Servis  1/3  |
+------------------------+
| Nama                   |
| [                    ] |
| WhatsApp               |
| [                    ] |
| Email                  |
| [                    ] |
|                        |
| [      LANJUT        ] |
+------------------------+
```

Data langkah sebelumnya disimpan sementara (state/draft) agar tidak hilang jika layar tertutup atau berpindah aplikasi.

### Cek Status (HP, timeline vertikal)

```text
+------------------------+
| SO-2026-00125          |
| Gitar Yamaha F310      |
+------------------------+
| ● Booking diterima     |
| │                      |
| ● Alat diterima        |
| │                      |
| ● Diagnosis            |
| │                      |
| ◉ Sedang dikerjakan    |
| │                      |
| ○ Selesai              |
| │                      |
| ○ Siap diambil         |
+------------------------+
| Estimasi selesai: ...  |
| [ Hubungi via WA ]     |
+------------------------+
```

### Dashboard Admin/Owner (HP)

```text
+------------------------+
| Dashboard      🔔      |
+------------------------+
| [Booking] [Servis]     |
| [Pendapatan][Stok]     |
+------------------------+
| Grafik Pendapatan      |
| (geser ke samping)     |
+------------------------+
| Booking Terbaru        |
| ▸ kartu 1              |
| ▸ kartu 2              |
+------------------------+
| 🏠   📋   🔧   📦   ⋯  |
+------------------------+
```

### Teknisi (HP)

```text
+------------------------+
| Pekerjaan Saya         |
+------------------------+
| SO-2026-00125  [Diag.] |
| Gitar Yamaha           |
| Keluhan: bunyi dengung |
| [ BUKA ]               |
+------------------------+
Detail: Diagnosis | Spare Part | Foto | Catatan | Ubah Status
Tombol kamera besar untuk foto sebelum/sesudah.
```

### POS (HP/Tablet)

```text
+------------------------+
| POS                    |
+------------------------+
| Customer  [ Sutesno ]  |
| Work Order[SO-2026-125]|
+------------------------+
| Jasa Servis  Rp150.000 |
| Senar        Rp200.000 |
| [ + Tambah Item ]      |
+------------------------+
| (bar tetap di bawah)   |
| Total Rp350.000        |
| [      BAYAR       ]   |
+------------------------+
```

## 36.7 Cara Menjalankan dan Menguji di HP Saat Pengembangan

### Opsi A: Satu WiFi (paling mudah)

1. Hubungkan laptop dan HP ke jaringan WiFi yang sama.
2. Jalankan dev server agar bisa diakses dari jaringan lokal:

```bash
npm run dev -- -H 0.0.0.0
```

3. Cari IP laptop (contoh `192.168.1.10`):
   - Windows: `ipconfig`
   - macOS/Linux: `ifconfig` atau `ip a`
4. Buka di browser HP: `http://192.168.1.10:3000`.
5. Jika tidak bisa dibuka, izinkan port 3000 pada firewall laptop dan pastikan WiFi tidak mengaktifkan "AP isolation".
6. Bila memakai Next.js versi terbaru dan muncul peringatan cross-origin dari IP lokal, tambahkan IP tersebut pada opsi `allowedDevOrigins` di `next.config`.

### Opsi B: Tunnel HTTPS (untuk uji PWA, kamera, dan webhook)

Fitur seperti service worker, instalasi PWA, kamera, dan push notification membutuhkan **HTTPS** (kecuali `localhost`). Karena akses via IP lokal bukan HTTPS, gunakan tunnel:

```bash
# salah satu
cloudflared tunnel --url http://localhost:3000
ngrok http 3000
```

Buka URL HTTPS yang diberikan di HP. Tunnel juga berguna untuk menguji webhook payment gateway (Bagian 22) selama pengembangan.

### Opsi C: Debug dari laptop

- Chrome DevTools → Toggle Device Toolbar untuk simulasi ukuran layar.
- Android: aktifkan USB debugging, buka `chrome://inspect` di laptop untuk melihat dan men-debug halaman yang terbuka di HP.
- iOS: Safari di Mac → menu Develop → pilih perangkat iPhone.
- Simulasi jaringan lambat (Slow 4G) pada tab Network/Lighthouse.

### Opsi D: Uji versi produksi

Jalankan `npm run build && npm run start`, lalu akses lewat tunnel/HTTPS. Service worker dan PWA sebaiknya diuji pada build produksi, bukan mode dev.

## 36.8 Cara Pelanggan Memasang PWA di HP

**Android (Chrome):** buka website → tap menu ⋮ → "Instal aplikasi" / "Tambahkan ke layar utama". Sistem juga dapat menampilkan banner instal otomatis.

**iPhone (Safari):** buka website di Safari → tap ikon Bagikan → "Tambah ke Layar Utama".

Sediakan tombol/ajakan "Pasang Aplikasi" di website dengan instruksi singkat sesuai perangkat. Untuk Android gunakan event `beforeinstallprompt`; untuk iOS tampilkan petunjuk manual karena tidak ada prompt otomatis.

## 36.9 Deployment agar Dapat Diakses dari HP

- Gunakan domain dengan **HTTPS** (wajib untuk PWA, kamera, push, dan payment).
- Opsi MVP: platform hosting Next.js (contoh Vercel) atau VPS dengan Docker + reverse proxy (Nginx/Caddy) + sertifikat Let's Encrypt.
- Atur environment variable pada server, bukan di kode (sesuai Bagian 20).
- Pastikan URL publik dipakai pada: QR Code, manifest `start_url`, tautan notifikasi, dan callback/webhook payment.
- Aktifkan kompresi (gzip/brotli) dan CDN untuk aset statis.
- Siapkan backup database dan monitoring error sebelum QR dicetak dan dibagikan ke pelanggan.

## 36.10 Target Performa untuk Jaringan Seluler

- Target Lighthouse (mobile): Performance ≥ 85, Accessibility ≥ 90, PWA/Best Practices lulus.
- Target LCP ≤ 2,5 detik pada jaringan 4G.
- Ukuran JavaScript halaman pelanggan sekecil mungkin. Gunakan code splitting dan muat modul admin (grafik, POS) hanya untuk halaman admin.
- Gunakan `next/image` dengan format modern (WebP/AVIF), ukuran responsif, dan lazy loading.
- Gunakan font sistem atau maksimal 1–2 font web dengan `display: swap`.
- Gunakan pagination atau infinite scroll pada daftar panjang (sesuai Bagian 18).
- Grafik dashboard dimuat belakangan (lazy) dan disederhanakan pada layar kecil.

## 36.11 Keterbatasan Platform yang Perlu Diperhatikan

| Hal                    | Android (Chrome)   | iPhone (Safari)                                           |
| ---------------------- | ------------------ | --------------------------------------------------------- |
| Instal PWA             | Banner/menu instal | Manual lewat menu Bagikan                                 |
| Push notification      | Didukung           | Hanya jika sudah ditambah ke Layar Utama (iOS 16.4+)      |
| Kamera via input file  | Didukung           | Didukung                                                  |
| Service worker         | Didukung           | Didukung, dengan batas penyimpanan cache yang lebih ketat |
| Prompt instal otomatis | Ada                | Tidak ada                                                 |

Karena perbedaan ini, fitur penting (booking, cek status, notifikasi WhatsApp/email) tidak boleh bergantung pada push notification atau instalasi PWA.

## 36.12 Checklist Pengujian di HP

Uji di minimal: 1 HP Android kecil (±360px), 1 HP Android besar, 1 iPhone (Safari), dan 1 tablet.

- [ ] Tidak ada scroll horizontal pada semua halaman.
- [ ] Semua tombol dan tautan mudah ditekan (≥ 44px).
- [ ] Teks terbaca tanpa zoom, input tidak memicu zoom otomatis di iOS.
- [ ] Keyboard sesuai jenis input (angka untuk WhatsApp dan nominal).
- [ ] Form Booking dapat diselesaikan sampai mendapat nomor booking.
- [ ] Upload foto dari kamera dan galeri berhasil, ukuran terkompres.
- [ ] Cek Status berfungsi, termasuk dari tautan/QR dengan nomor terisi otomatis.
- [ ] Rotasi layar (portrait/landscape) tidak merusak tampilan.
- [ ] Bottom navigation tidak tertutup notch/gesture bar (safe area).
- [ ] Tampilan dark/light mode tetap terbaca (jika didukung).
- [ ] PWA dapat dipasang dan dibuka dalam mode standalone.
- [ ] Halaman offline tampil saat koneksi terputus.
- [ ] Login, logout, dan refresh token berjalan di HP.
- [ ] Dashboard, Teknisi, dan POS dapat dipakai di HP/tablet.
- [ ] Kecepatan memadai pada simulasi Slow 4G.
- [ ] QR Code dapat dipindai kamera bawaan dan membuka halaman yang benar.

## 36.13 Tambahan pada Roadmap dan MVP (Aspek Mobile)

Tambahan berikut melengkapi Bagian 30 dan 31 tanpa mengubah isinya:

- **Fase 0:** siapkan viewport, Tailwind mobile-first, manifest, ikon PWA, dan tunnel HTTPS untuk uji HP.
- **Fase 1 (MVP):** Landing, Layanan, Booking (form bertahap), Cek Status (timeline), dan Dashboard ringan harus lulus checklist 36.12.
- **Fase 2:** POS dan Teknisi dioptimalkan untuk HP/tablet, upload foto kamera, push notification sebagai pelengkap.
- **Fase 3:** pertimbangkan aplikasi native hanya jika ada kebutuhan nyata yang tidak bisa dipenuhi PWA.

Tambahkan pada **Risiko (Bagian 33):**

- Tampilan rusak pada HP tertentu.
- Upload foto gagal atau lambat di jaringan seluler.
- Perbedaan perilaku PWA di iOS dan Android.

Mitigasi: uji di perangkat nyata, kompresi gambar, dan tidak bergantung pada push notification.

## ADR-011: Satu Codebase Mobile-First

Website responsif + PWA dipilih dibanding aplikasi native pada MVP karena biaya lebih rendah, tanpa proses review app store, dan pembaruan langsung tersedia untuk semua pengguna.

---
