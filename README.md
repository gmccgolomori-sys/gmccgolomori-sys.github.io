# GMCC Portal

Portal satu halaman untuk mengakses tiga sistem operasional GMCC Golo Mori:

1. **01. GMCC Procurement ERP** — `https://gmccgolomori-sys.github.io/gmcc-procurement-erp/`
2. **02. GMCC HCS3** — `https://gmccgolomori-sys.github.io/gmcc-hcs3/`
3. **03. GMCC Aging System** — Google Apps Script Web App

## Cara Publikasi ke GitHub Pages (`gmccgolomori-sys`)

Proyek ini sudah dilengkapi workflow otomatis di `.github/workflows/deploy.yml` dan konfigurasi `base: './'` di `vite.config.ts`.

### Langkah 1: Buat Repository di GitHub
1. Masuk ke akun GitHub **gmccgolomori-sys**.
2. Buat repository baru:
   - Gunakan nama **`gmccgolomori-sys.github.io`** jika ingin tampil di alamat utama `https://gmccgolomori-sys.github.io/`
   - Atau gunakan nama lain seperti **`gmcc-portal`** jika ingin tampil di `https://gmccgolomori-sys.github.io/gmcc-portal/`

### Langkah 2: Unggah / Push Kode ke Branch `main`
Jalankan perintah berikut dari folder proyek hasil unduhan:

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit GMCC Portal"
git remote add origin https://github.com/gmccgolomori-sys/gmccgolomori-sys.github.io.git
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Pages
1. Buka repository di GitHub lalu masuk ke **Settings** > **Pages**.
2. Pada bagian **Build and deployment > Source**, pilih **GitHub Actions**.
3. Tunggu sekitar 1 menit hingga workflow **Deploy GMCC Portal ke GitHub Pages** selesai berjalan, lalu situs langsung aktif.
