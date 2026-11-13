export interface SystemItem {
  id: string;
  indexLabel: string;
  name: string;
  category: string;
  url: string;
  shortDesc: string;
  audience: string;
  capabilities: string[];
  integrationRole: string;
}

export interface PortalConfig {
  brandName: string;
  pageTitle: string;
  pageSubtitle: string;
  backgroundImage: string;
  contactEmail: string;
  systems: [SystemItem, SystemItem, SystemItem];
}

export const DEFAULT_PORTAL_CONFIG: PortalConfig = {
  brandName: 'GMCC Portal',
  pageTitle: 'Tiga Sistem Terintegrasi GMCC',
  pageSubtitle:
    'Pilih aplikasi operasional GMCC Golo Mori sesuai kebutuhan kerja Anda.',
  backgroundImage: './assets/aistudio/IMG__5__f5e6d58a.jpg',
  contactEmail: 'gmccgolomori@gmail.com',
  systems: [
    {
      id: 'system-1',
      indexLabel: '01',
      name: 'GMCC Procurement ERP',
      category: 'Pengadaan & ERP',
      url: 'https://gmccgolomori-sys.github.io/gmcc-procurement-erp/',
      shortDesc:
        'Sistem perencanaan dan pengadaan barang, pengelolaan pemasok, serta pencatatan transaksi operasional GMCC secara terpusat.',
      audience: 'Tim Procurement, Logistik, Keuangan, dan Operasional',
      capabilities: [
        'Pengelolaan permintaan pembelian (PR), purchase order (PO), dan persetujuan pengadaan',
        'Pemantauan daftar pemasok, penerimaan barang, dan alur pengadaan unit kerja',
        'Pelacakan status pengadaan yang terstruktur dan siap diaudit',
      ],
      integrationRole:
        'Menjadi pusat transaksi pengadaan dan logistik yang terhubung dengan struktur divisi di GMCC HCS3 serta pelaporan Apps Script.',
    },
    {
      id: 'system-2',
      indexLabel: '02',
      name: 'GMCC HCS3',
      category: 'Human Capital System',
      url: 'https://gmccgolomori-sys.github.io/gmcc-hcs3/',
      shortDesc:
        'Sistem manajemen sumber daya manusia GMCC untuk pengelolaan data personel, struktur organisasi, dan administrasi kepegawaian.',
      audience: 'Tim HR / Human Capital, Kepala Divisi, dan Karyawan',
      capabilities: [
        'Direktori data karyawan, penempatan divisi, dan struktur pelaporan organisasi',
        'Pengelolaan administrasi kepegawaian dan penjadwalan tim operasional',
        'Referensi data penanggung jawab untuk alur kerja lintas aplikasi GMCC',
      ],
      integrationRole:
        'Menyediakan referensi struktur tim dan otorisasi personel bagi kebutuhan pengadaan dan pelaporan operasional.',
    },
    {
      id: 'system-3',
      indexLabel: '03',
      name: 'GMCC Aging System',
      category: 'Aging & Pelaporan',
      url: 'https://script.google.com/macros/s/AKfycbyesSAFGEqkxBucrFf4oldmc8o7Y4PEHfz2cYYEpbLmfyb8kGJ2QrIEyxhUoZmYTzmK9A/exec',
      shortDesc:
        'Sistem pemantauan aging schedule, jatuh tempo dokumen maupun tagihan, dan rekapitulasi pelaporan berbasis Google Workspace GMCC.',
      audience: 'Tim Keuangan, Akuntansi, Administrasi, dan Manajemen',
      capabilities: [
        'Pemantauan umur tagihan, piutang, dan status jatuh tempo secara terstruktur',
        'Pengelompokan periode aging dan prioritas tindak lanjut harian',
        'Sinkronisasi otomatis data pelaporan dengan Google Sheets GMCC',
      ],
      integrationRole:
        'Melengkapi GMCC Procurement ERP dan GMCC HCS3 dengan pemantauan status aging serta laporan jatuh tempo secara cepat.',
    },
  ],
};
