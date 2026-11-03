# Safari Dakwah Ar-Risalah

Aplikasi web pencatat roadshow dai untuk **Yayasan Peduli Kemanusiaan Arrisalah**.
Mengikuti Instrumen Evaluasi Dai dan Pemetaan Potensi Pengembangan Masyarakat (bagian A–H).

## Fitur
- Formulir 8 langkah, pilihan berupa tombol sentuh, nyaman di HP
- Daftar kunjungan, pencarian, ubah, hapus
- Laporan per kunjungan, bisa dicetak atau disimpan sebagai PDF
- Halaman **Rekap**: grafik, tabel rapi, cetak, ekspor CSV (Excel)
- Bisa dipasang di layar utama HP dan jalan tanpa internet

## Cara memasang di GitHub Pages
1. Buat repository baru di GitHub (mis. `safari-dakwah`), set **Public**.
2. Unggah **semua file** di folder ini ke root repository (Add file → Upload files).
3. Buka **Settings → Pages**. Pada *Build and deployment*, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
4. Tunggu 1–2 menit. Alamat aplikasi: `https://NAMA-AKUN.github.io/safari-dakwah/`

## Catatan data
Data tersimpan di peramban perangkat masing-masing (localStorage), bukan di server.
Untuk menggabungkan data beberapa petugas: tiap petugas tekan **Cadangan data** (file .json) dan kirim ke admin, lalu admin memakai **Pulihkan data** untuk menambahkannya. Data yang sama tidak akan terduplikasi.

## Daftar file
`index.html`, `style.css`, `app.js` (aplikasi) · `logo-horizontal.png`, `logo-vertikal.png`, `icon-192.png`, `icon-512.png` (logo) · `manifest.webmanifest`, `sw.js` (pemasangan di HP dan mode offline)
