// ============================================================
//  PORTFOLIO DATA — Hadi Prasetiyo
// ============================================================

export const personalInfo = {
  name: 'Hadi Prasetiyo',
  role: 'Full-Stack Web Developer',
  tagline: 'Fresh Graduate Sistem Informasi',
  email: 'hadiprasetiyo.dev@gmail.com',
  phone: '+62 85128030906',
  location: 'Samarinda, Kalimantan Timur',
  github: 'https://github.com/hadiprasetiyo',
  linkedin: 'https://linkedin.com/in/hadiprasetiyo',
  description:
    'Full Stack Web Developer yang berfokus pada pengembangan aplikasi web modern dan responsif. Berpengalaman menggunakan Laravel, PHP, dan MySQL serta terbiasa bekerja secara terstruktur dan kolaboratif.',
  shortBio:
    'Fresh Graduate Sistem Informasi Universitas Mulawarman dengan IPK 3.82. Memiliki minat yang kuat dalam pengembangan web modern dan pengalaman membangun aplikasi dari tahap perancangan hingga implementasi. Berkomitmen untuk terus belajar, beradaptasi dengan teknologi baru, dan menciptakan solusi digital.',
  careerGoal:
    'Mengembangkan karier sebagai Full Stack Developer di lingkungan yang mendorong inovasi, kolaborasi, dan pertumbuhan profesional. Berkontribusi dalam membangun produk digital yang berkualitas, scalable, dan mampu memberikan dampak positif bagi pengguna maupun bisnis.',
}

export const education = {
  university: 'Universitas Mulawarman',
  faculty: 'Fakultas Teknik',
  major: 'Sistem Informasi',
  degree: 'S1 (Sarjana)',
  gpa: '3.82 / 4.00',
  year: '2021 – 2026',
  location: 'Samarinda, Kalimantan Timur',
}

// ============================================================
//  SKILLS
// ============================================================

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'SiReact', color: '#61DAFB' },
      { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'HTML5', icon: 'SiHtml5', color: '#E34F26' },
      { name: 'CSS3', icon: 'SiCss3', color: '#1572B6' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
      { name: 'Bootstrap', icon: 'SiBootstrap', color: '#7952B3' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'PHP', icon: 'SiPhp', color: '#777BB4' },
      { name: 'Laravel', icon: 'SiLaravel', color: '#FF2D20' },
      { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Others',
    skills: [
      { name: 'Git', icon: 'SiGit', color: '#F05032' },
      { name: 'GitHub', icon: 'SiGithub', color: '#FFFFFF' },
      { name: 'VS Code', icon: 'SiVisualstudiocode', color: '#007ACC' },
      { name: 'Postman', icon: 'SiPostman', color: '#FF6C37' },
      { name: 'Figma', icon: 'SiFigma', color: '#F24E1E' },
      { name: 'MySQL Workbench', icon: 'SiMysql', color: '#4479A1' },
    ],
  },
]

// ============================================================
//  EXPERIENCE
// ============================================================

export const experiences = [
  {
    id: 1,
    batch: 'MSIB Batch 5',
    role: 'Full-Stack Web Developer',
    company: 'PT Nurul Fikri Cipta Inovasi',
    program: 'Full-Stack Web Developer',
    period: 'Agustus – Desember 2023',
    type: 'Magang',
    location: 'Remote / Hybrid',
    description:
      'Mengikuti program Magang Studi Independen Bersertifikat (MSIB) Batch 5 dengan fokus pada penguasaan full stack web development. Memperdalam kemampuan dalam membangun aplikasi web end-to-end menggunakan stack modern.',
    highlights: [
      'Menguasai konsep dan praktik Full Stack Development secara menyeluruh',
      'Membangun project dengan teknologi React.js dan Laravel',
      'Kolaborasi tim menggunakan Git, GitHub, dan metodologi Agile',
      'Mengintegrasikan REST API dengan antarmuka pengguna yang responsif',
    ],
    tech: ['PHP', 'React.js', 'Laravel', 'MySQL', 'Git', 'REST API'],
  },
  {
    id: 2,
    batch: 'MSIB Batch 6',
    role: 'Full-Stack Web Developer',
    company: 'PT Yunta Mandiri Group',
    program: 'Mastering Full-Stack Development',
    period: 'Februari – Juni 2024',
    type: 'Magang',
    location: 'Remote / Hybrid',
    description:
      'Berpartisipasi dalam program MSIB Batch 6 sebagai Full Stack Web Developer. Mendapatkan pengalaman hands-on dalam pengembangan aplikasi web dari tahap perencanaan hingga deployment.',
    highlights: [
      'Mengembangkan fitur-fitur aplikasi web skala menengah',
      'Implementasi autentikasi, otorisasi, dan manajemen database',
      'Belajar best practice dalam penulisan kode yang bersih dan maintainable',
      'Presentasi dan demo hasil proyek kepada stakeholder',
    ],
    tech: ['PHP', 'Laravel', 'JavaScript', 'Bootstrap', 'MySQL'],
  },
  {
    id: 3,
    batch: 'PKL',
    type: 'Praktik Kerja Lapangan',
    role: 'Information Technology Intern',
    company: 'Dinas Kependudukan dan Pencatatan Sipil Kota Samarinda',
    program: 'Praktik Kerja Lapangan (PKL)',
    period: 'Februari – April 2024',
    location: 'Samarinda, Kalimantan Timur',

    description:
      'Melaksanakan Praktik Kerja Lapangan pada bidang teknologi informasi dengan membantu operasional sistem, pemeliharaan perangkat, serta mendukung pengelolaan aplikasi dan data yang digunakan dalam pelayanan administrasi kependudukan.',

    highlights: [
      'Memberikan dukungan teknis terhadap perangkat komputer dan aplikasi operasional',
      'Membantu pemeliharaan serta pengelolaan sistem informasi internal',
      'Mendukung pengelolaan data dan penyusunan dokumentasi teknis'
    ],

    tech: [
      'Aplikasi SIAK',
      'Microsoft Office'
    ]
  }
]

// ============================================================
//  PROJECTS
// ============================================================

export const projects = [
  {
    id: 1,
    title: 'Sistem Informasi Booking Online Barbershop',
    description:
      'Aplikasi web booking barbershop berbasis Laravel 12 yang memungkinkan pelanggan melakukan reservasi secara online. Dilengkapi dengan panel admin menggunakan Filament untuk manajemen jadwal, layanan, dan laporan.',
    longDescription:
      'Sistem lengkap untuk pengelolaan barbershop modern. Pelanggan dapat melihat jadwal tersedia, memilih layanan, dan melakukan booking secara real-time. Admin memiliki dashboard komprehensif untuk memantau dan mengelola semua aspek operasional.',
    tech: ['Laravel 12', 'Filament', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
    category: 'Full Stack',
    github: 'https://github.com/hadiprasetiyo/skybarbershop',
    live: null,
    featured: false,
    gradient: 'from-amber-500/20 to-orange-500/10',
    accentColor: '#F59E0B',
    image: '/images/project-barbershop.png',  // ← Taruh gambar cover di public/images/
    highlights: ['Online booking sistem', 'Admin dashboard (Filament)', 'Manajemen jadwal & layanan', 'Laporan transaksi'],
  },
  {
    id: 2,
    title: 'Sistem Pengaduan Fasilitas Masyarakat',
    description:
      'Platform web untuk memfasilitasi masyarakat dalam melaporkan kerusakan atau masalah fasilitas publik kepada pihak berwenang. Sistem dilengkapi dengan tracking status pengaduan secara real-time.',
    longDescription:
      'Aplikasi citizen reporting yang mempermudah masyarakat dalam menyampaikan keluhan terkait fasilitas umum. Petugas dapat mengelola dan menindaklanjuti setiap laporan dengan sistem manajemen yang terstruktur.',
    tech: ['Laravel', 'Bootstrap', 'MySQL', 'JavaScript', 'PHP'],
    category: 'Full Stack',
    github: 'https://github.com/hadiprasetiyo/CivicPulse',
    live: null,
    featured: false,
    gradient: 'from-blue-500/20 to-cyan-500/10',
    accentColor: '#3B82F6',
    image: '/images/project-civicpulse.png',  // ← Taruh gambar cover di public/images/
    highlights: ['Sistem pelaporan publik', 'Tracking status real-time', 'Panel manajemen petugas', 'Notifikasi update'],
  },
  {
    id: 3,
    title: 'Sistem Informasi Manajemen Karyawan',
    description:
      'Aplikasi berbasis web untuk mengelola data karyawan, kehadiran, cuti, jabatan, dan penggajian dalam satu platform terintegrasi. Dilengkapi dashboard analitik untuk membantu proses administrasi dan monitoring sumber daya manusia.',

    longDescription:
      'Sistem manajemen karyawan yang dirancang untuk mendigitalisasi proses administrasi SDM. Aplikasi menyediakan fitur pengelolaan data pegawai, absensi, cuti, jabatan, dan penggajian, serta dashboard visual untuk memantau informasi penting secara real-time. Dengan sistem yang terpusat, pengelolaan data menjadi lebih efisien, terstruktur, dan mudah diakses.',

    tech: [
      'PHP',
      'MySQL',
      'Bootstrap',
      'JavaScript',
      'Chart.js'
    ],

    category: 'Full Stack',

    github: 'https://github.com/website-sistem-karyawan-yunta/website-karyawan',
    live: null,

    featured: false,

    gradient: 'from-emerald-500/20 to-green-500/10',
    accentColor: '#10B981',

    image: '/images/project-sistemkaryawan.png',

    highlights: [
      'Dashboard analitik karyawan',
      'Manajemen data pegawai',
      'Sistem absensi & kehadiran',
      'Pengelolaan cuti dan penggajian'
    ],
  },
  {
    id: 4,

    title: 'SneaksAvenue - Sneaker E-Commerce Platform',

    description:
      'Platform e-commerce berbasis Laravel yang dikembangkan untuk menjual berbagai koleksi sepatu dari brand internasional. Saat ini berfokus pada pengelolaan katalog produk, brand, dan inventori melalui dashboard administrasi.',

    longDescription:
      'SneaksAvenue merupakan proyek pengembangan platform e-commerce sepatu yang terinspirasi dari marketplace sneaker modern. Sistem dibangun menggunakan Laravel 11 dan MySQL dengan arsitektur MVC yang terstruktur. Fitur yang telah tersedia meliputi manajemen produk, brand, harga, gambar produk, serta dashboard administrasi untuk pengelolaan katalog. Proyek ini masih dalam tahap pengembangan dengan rencana penambahan fitur autentikasi pengguna, keranjang belanja, checkout, transaksi, dan manajemen pesanan.',

    tech: [
      'Laravel 11',
      'MySQL',
      'Bootstrap',
      'JavaScript',
      'PHP'
    ],

    category: 'Full Stack',

    github: 'https://github.com/hadiprasetiyo/SneaksAvenue',
    live: null,

    featured: false,

    gradient: 'from-violet-500/20 to-purple-500/10',
    accentColor: '#8B5CF6',

    image: '/images/project-sneaksavenue.png',

    highlights: [
      'Product catalog management',
      'Brand & variant management',
      'Image upload system',
      'Admin dashboard',
      'Laravel MVC architecture',
      'E-commerce platform development'
    ],
  }
]

// ============================================================
//  CERTIFICATES
// ============================================================

export const certificates = [
  {
    id: 1,
    title: 'Oracle Academy Database Programming with SQL',
    issuer: 'Oracle Academy',
    year: '2023',
    category: 'Database',
    description: 'Sertifikasi resmi dari Oracle Academy dalam pemrograman database menggunakan SQL.',
    credentialUrl: null,
    image: '/images/cert-oracle.png',  // ← Taruh gambar sertifikat di public/images/
    icon: 'HiDatabase',
    color: '#F80000',
  },
  {
    id: 2,
    title: 'MSIB Batch 5 Certificate',
    issuer: 'Kemendikbudristek & PT Nurul Fikri Cipta Inovasi',
    year: '2023',
    category: 'Internship',
    description: 'Sertifikat penyelesaian program Magang Studi Independen Bersertifikat Batch 5.',
    credentialUrl: null,
    image: '/images/cert-msib5.png',
    icon: 'HiAcademicCap',
    color: '#3B82F6',
  },
  {
    id: 3,
    title: 'MSIB Batch 6 Certificate',
    issuer: 'Kemendikbudristek & PT Yunta Mandiri Group',
    year: '2024',
    category: 'Internship',
    description: 'Sertifikat penyelesaian program Magang Studi Independen Bersertifikat Batch 6.',
    credentialUrl: null,
    image: '/images/cert-msib6.png',
    icon: 'HiAcademicCap',
    color: '#F59E0B',
  },
  {
    id: 4,
    title: 'Progate Command Line Course',
    issuer: 'Progate',
    year: '2022',
    category: 'Tools & DevOps',
    description: 'Penyelesaian kursus Command Line pada platform pembelajaran Progate.',
    credentialUrl: null,
    image: '/images/cert-progate.png',
    icon: 'BsTerminalFill',
    color: '#22D3EE',
  },
  {
    id: 5,
    title: 'Praktik Kerja Lapangan (PKL)',
    issuer: 'Dinas Kependudukan dan Pencatatan Sipil Kota Samarinda',
    year: '2024',
    category: 'Internship',
    description:
      'Sertifikat penyelesaian Praktik Kerja Lapangan sebagai bagian dari program akademik, dengan pengalaman dalam mendukung operasional teknologi informasi dan sistem informasi instansi pemerintahan.',
    credentialUrl: null,
    image: '/images/cert-pkl-disdukcapil.png',
    icon: 'HiOfficeBuilding',
    color: '#10B981',
  },
]

// ============================================================
//  NAVIGATION
// ============================================================

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]
