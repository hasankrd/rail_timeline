/**
 * Istanbul Rail Transit: Under Construction & Planned Projects Data
 * (İnşaatı Devam Eden ve Proje Aşamasındaki Raylı Sistem Hatları)
 */

export interface FutureProjectLine {
  id: string;
  code: string;
  name: string;
  shortName: string;
  category: 'construction' | 'project';
  color: string;
  statusText: string;
  progressPercent?: number; // e.g. 85 for 85%
  targetYear?: string; // e.g. "2025" or "2026"
  authority: 'İBB' | 'UAB';
  authorityFullName: string;
  lengthKm: number;
  stationCount: number;
  description: string;
  coordinates: [number, number][]; // [lng, lat] for line polyline
  stations: {
    name: string;
    coordinates: [number, number]; // [lng, lat]
    isTransfer?: boolean;
    transfers?: string[];
  }[];
}

export const UNDER_CONSTRUCTION_LINES: FutureProjectLine[] = [
  {
    id: 'const-m12-goztepe-atasehir-kazim-karabekir',
    code: 'M12',
    name: 'Göztepe - Ataşehir - Kazım Karabekir',
    shortName: 'Göztepe - Kazım Karabekir',
    category: 'construction',
    color: '#CAD300',
    statusText: 'İnşaatı Devam Ediyor',
    progressPercent: 94.7,
    targetYear: '19.Ara.26',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 13,
    stationCount: 11,
    description: 'Anadolu Yakası\'nda 60. Yıl Parkı ile Kazım Karabekir arasını bağlayan, Finans Merkezi altından geçen 13 km uzunluğundaki tam otomatik sürücüsüz metro hattı.',
    coordinates: [
      [29.0558, 40.9702], // 60. Yıl Parkı
      [29.0682, 40.9791], // Tütüncü Mehmet Efendi
      [29.0801, 40.9882], // Sahrayıcedid
      [29.0945, 40.9934], // Yenisahra
      [29.1085, 40.9972], // Ataşehir
      [29.1192, 41.0041], // Finans Merkezi
      [29.1221, 41.0118], // Site
      [29.1205, 41.0205], // Atakent
      [29.1142, 41.0268], // Çarşı
      [29.1089, 41.0362], // SBÜ Hastanesi
      [29.1012, 41.0451], // Kazım Karabekir
    ],
    stations: [
      { name: '60. Yıl Parkı', coordinates: [29.0558, 40.9702] },
      { name: 'Tütüncü Mehmet Efendi', coordinates: [29.0682, 40.9791], isTransfer: true, transfers: ['B1 Marmaray'] },
      { name: 'Sahrayıcedid', coordinates: [29.0801, 40.9882] },
      { name: 'Yenisahra', coordinates: [29.0945, 40.9934], isTransfer: true, transfers: ['M4'] },
      { name: 'Ataşehir', coordinates: [29.1085, 40.9972] },
      { name: 'Finans Merkezi', coordinates: [29.1192, 41.0041] },
      { name: 'Site', coordinates: [29.1221, 41.0118] },
      { name: 'Atakent', coordinates: [29.1205, 41.0205] },
      { name: 'Çarşı', coordinates: [29.1142, 41.0268], isTransfer: true, transfers: ['M5'] },
      { name: 'SBÜ Hastanesi', coordinates: [29.1089, 41.0362] },
      { name: 'Kazım Karabekir', coordinates: [29.1012, 41.0451] },
    ],
  },
  {
    id: 'const-m7-mahmutbey-kanuni-sultan-suleyman',
    code: 'M7',
    name: 'Mahmutbey - Kanuni Sultan Süleyman Hastanesi Uzatması',
    shortName: 'Mahmutbey - KSS Hastanesi',
    category: 'construction',
    color: '#F490B3',
    statusText: 'İnşaatı Devam Ediyor',
    progressPercent: 54.4,
    targetYear: '2028',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 6.8,
    stationCount: 5,
    description: 'Mahmutbey istasyonundan batıya uzanan Bölge Parkı, Atatürk Mahallesi, Toplu Konutlar, Tema Park ve Kanuni Sultan Süleyman Hastanesi istasyonlarını içeren 6.8 km\'lik metro uzatması.',
    coordinates: [
      [28.831071, 41.055151], // Mahmutbey bağlantısı (M3 & M7 aktarma terminali)
      [28.828520, 41.055380],
      [28.825100, 41.055720],
      [28.821300, 41.056050],
      [28.817450, 41.056220],
      [28.813565, 41.056292], // Bölge Parkı İstasyonu (Mahmutbey Mah., İkitelli Cad.)
      [28.809800, 41.055950],
      [28.805500, 41.054700],
      [28.801200, 41.053150],
      [28.797101, 41.051866], // Atatürk Mahallesi İstasyonu (M9 aktarması, ArenaPark)
      [28.793800, 41.052600],
      [28.790100, 41.053750],
      [28.786777, 41.054744], // Toplu Konutlar İstasyonu (Atakent 1. Etap, Turgut Özal Bulvarı)
      [28.782800, 41.055480],
      [28.778600, 41.056120],
      [28.774511, 41.056562], // Tema Park İstasyonu (M11 aktarması, Halkalı Stadı / Tema World)
      [28.770500, 41.056420],
      [28.766200, 41.056180],
      [28.763100, 41.055980],
      [28.760410, 41.055872], // Kanuni Sultan Süleyman Hastanesi İstasyonu (Hastane ana girişi & Turgut Özal Bulvarı)
    ],
    stations: [
      { name: 'Bölge Parkı', coordinates: [28.813565, 41.056292] },
      { name: 'Atatürk Mahallesi', coordinates: [28.797101, 41.051866], isTransfer: true, transfers: ['M9'] },
      { name: 'Toplu Konutlar', coordinates: [28.786777, 41.054744] },
      { name: 'Tema Park', coordinates: [28.774511, 41.056562], isTransfer: true, transfers: ['M11'] },
      { name: 'Kanuni Sultan Süleyman Hastanesi', coordinates: [28.760410, 41.055872] },
    ],
  },
  {
    id: 'const-m7-yildiz-kabatas',
    code: 'M7',
    name: 'Yıldız - Kabataş Uzatması',
    shortName: 'Yıldız - Kabataş',
    category: 'construction',
    color: '#F490B3',
    statusText: 'İnşaatı Devam Ediyor',
    progressPercent: 68.1,
    targetYear: '2027',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 4.5,
    stationCount: 2,
    description: 'M7 Yıldız istasyonundan Beşiktaş ve Kabataş transfer merkezine uzanan 4.5 km uzunluğundaki 2 istasyonlu etap.',
    coordinates: [
      [29.0065, 41.0538], // Yıldız
      [29.0062, 41.0428], // Beşiktaş
      [28.9935, 41.0352], // Kabataş
    ],
    stations: [
      { name: 'Beşiktaş', coordinates: [29.0062, 41.0428], isTransfer: true, transfers: ['Vapur'] },
      { name: 'Kabataş', coordinates: [28.9935, 41.0352], isTransfer: true, transfers: ['T1', 'F1', 'Vapur'] },
    ],
  },
  {
    id: 'const-m10-pendik-kaynarca',
    code: 'M10',
    name: 'Pendik - Kaynarca',
    shortName: 'Pendik - Kaynarca',
    category: 'construction',
    color: '#4CAA3C',
    statusText: 'İnşaatı Devam Ediyor',
    progressPercent: 89,
    targetYear: 'May.27',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 6,
    stationCount: 2,
    description: 'Pendik Merkez YHT/Marmaray istasyonundan Kaynarca Merkez istasyonuna bağlanan 6 km uzunluğundaki metro hattı.',
    coordinates: [
      [29.2325, 40.8785], // Pendik Merkez
      [29.2450, 40.8760],
      [29.2580, 40.8740],
      [29.2685, 40.8722], // Kaynarca Merkez
    ],
    stations: [
      { name: 'Pendik Merkez', coordinates: [29.2325, 40.8785], isTransfer: true, transfers: ['B1 Marmaray', 'YHT'] },
      { name: 'Kaynarca Merkez', coordinates: [29.2685, 40.8722], isTransfer: true, transfers: ['M4'] },
    ],
  },
  {
    id: 'const-m4-tavsantepe-kaynarca',
    code: 'M4',
    name: 'Tavşantepe - Kaynarca',
    shortName: 'Tavşantepe - Kaynarca',
    category: 'construction',
    color: '#E81E77',
    statusText: 'İnşaatı Devam Ediyor',
    progressPercent: 89,
    targetYear: 'May.27',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 0.9,
    stationCount: 1,
    description: 'M4 hattını Tavşantepe istasyonundan Kaynarca Merkez transfer istasyonuna uzatan 0.9 km\'lik bağlantı etabı.',
    coordinates: [
      [29.2558, 40.8752], // Tavşantepe
      [29.2620, 40.8735],
      [29.2685, 40.8722], // Kaynarca Merkez
    ],
    stations: [
      { name: 'Kaynarca Merkez', coordinates: [29.2685, 40.8722], isTransfer: true, transfers: ['M10'] },
    ],
  },
  {
    id: 'const-m1b-kirazli-halkali-universite',
    code: 'M1B',
    name: 'Kirazlı - Halkalı Üniversite Uzatması',
    shortName: 'Kirazlı - Halkalı Üniversite',
    category: 'construction',
    color: '#EE2229',
    statusText: 'İnşaatı Devam Ediyor',
    progressPercent: 24,
    targetYear: '2028',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 6.2,
    stationCount: 5,
    description: 'M1B hattını Kirazlı\'dan batıya doğru uzatarak Barbaros, Malazgirt, Mimar Sinan, Fatih ve Halkalı Üniversite istasyonlarına bağlayan 6.2 km\'lik metro etabı.',
    coordinates: [
      [28.8423, 41.0331], // Kirazlı
      [28.8285, 41.0372], // Barbaros
      [28.8142, 41.0415], // Malazgirt
      [28.7995, 41.0468], // Mimar Sinan
      [28.7885, 41.0435], // Fatih
      [28.7812, 41.0362], // Halkalı Üniversite
    ],
    stations: [
      { name: 'Barbaros', coordinates: [28.8285, 41.0372] },
      { name: 'Malazgirt', coordinates: [28.8142, 41.0415] },
      { name: 'Mimar Sinan', coordinates: [28.7995, 41.0468], isTransfer: true, transfers: ['M9'] },
      { name: 'Fatih', coordinates: [28.7885, 41.0435] },
      { name: 'Halkalı Üniversite', coordinates: [28.7812, 41.0362] },
    ],
  },
  {
    id: 'const-m13-emek-yenidogan',
    code: 'M13',
    name: 'Emek - Yenidoğan',
    shortName: 'Emek - Yenidoğan',
    category: 'construction',
    color: '#FF4B58',
    statusText: 'İnşaatı Devam Ediyor',
    progressPercent: 8,
    targetYear: 'Belirsiz',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 6.7,
    stationCount: 5,
    description: 'Sancaktepe ve Çekmeköy aksında Emek, Sarıgazi, Aydınlar, Cumhuriyet ve Yenidoğan istasyonlarını bağlayan 6.7 km uzunluğundaki metro etabı.',
    coordinates: [
      [29.2215, 41.0185], // Emek
      [29.2312, 41.0252], // Sarıgazi
      [29.2415, 41.0325], // Aydınlar
      [29.2492, 41.0392], // Cumhuriyet
      [29.2558, 41.0458], // Yenidoğan
    ],
    stations: [
      { name: 'Emek', coordinates: [29.2215, 41.0185] },
      { name: 'Sarıgazi', coordinates: [29.2312, 41.0252], isTransfer: true, transfers: ['M5'] },
      { name: 'Aydınlar', coordinates: [29.2415, 41.0325] },
      { name: 'Cumhuriyet', coordinates: [29.2492, 41.0392] },
      { name: 'Yenidoğan', coordinates: [29.2558, 41.0458] },
    ],
  },
  {
    id: 'const-t7-feshane-bayrampasa',
    code: 'T7',
    name: 'Feshane - Bayrampaşa',
    shortName: 'Feshane - Bayrampaşa Tramvayı',
    category: 'construction',
    color: '#7B72B2',
    statusText: 'İnşaatı Devam Ediyor',
    progressPercent: 38,
    targetYear: '2027',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 3.2,
    stationCount: 5,
    description: 'Eyüpsultan Feshane T5 tramvay hattından başlayıp Eyüpsultan, Demirkapı ve Bayrampaşa Meydan üzerinden Maltepe istasyonuna bağlanan 3.2 km uzunluğundaki tramvay hattı.',
    coordinates: [
      [28.9385, 41.0425], // Feshane
      [28.9312, 41.0475], // Eyüpsultan
      [28.9185, 41.0452], // Demirkapı
      [28.9052, 41.0418], // Bayrampaşa Meydan
      [28.8985, 41.0365], // Maltepe
    ],
    stations: [
      { name: 'Feshane', coordinates: [28.9385, 41.0425], isTransfer: true, transfers: ['T5'] },
      { name: 'Eyüpsultan', coordinates: [28.9312, 41.0475] },
      { name: 'Demirkapı', coordinates: [28.9185, 41.0452] },
      { name: 'Bayrampaşa Meydan', coordinates: [28.9052, 41.0418] },
      { name: 'Maltepe', coordinates: [28.8985, 41.0365], isTransfer: true, transfers: ['M1A', 'M1B'] },
    ],
  },
];

export const PLANNED_PROJECT_LINES: FutureProjectLine[] = [
  {
    id: 'proj-m34-hizray',
    code: 'M34',
    name: 'M34 (HIZRAY) Beylikdüzü – Mecidiyeköy – Sabiha Gökçen Ekspres Metrosu',
    shortName: 'HIZRAY Ekspres',
    category: 'project',
    color: '#008080',
    statusText: 'Uygulama Projesi & ÇED Tamamlandı',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 74.5,
    stationCount: 13,
    description: 'İstanbul\'un batı ucu Beylikdüzü ile doğu ucu Sabiha Gökçen Havalimanı arasını 160 km/s işletme hızıyla yalnızca 50 dakikada kat edecek, 12 farklı raylı sistem hattına doğrudan aktarma veren Cumhuriyet tarihinin en büyük şehir içi ekspres raylı sistem projesi.',
    coordinates: [
      [28.6425, 41.0152], // Beylikdüzü
      [28.6912, 41.0265], // Nazım Hikmet
      [28.7425, 41.0345], // Saadetdere
      [28.8258, 41.0452], // Kirazlı
      [28.8912, 41.0525], // Otogar
      [28.9485, 41.0692], // Alibeyköy Cep Otogarı
      [28.9958, 41.0665], // Mecidiyeköy
      [29.0112, 41.0825], // 4. Levent
      [29.1125, 41.0268], // Ümraniye Çarşı
      [29.1192, 41.0041], // Finans Merkezi
      [29.1558, 40.9882], // Mevlana
      [29.2458, 40.9612], // Sultanbeyli
      [29.3095, 40.9052], // Sabiha Gökçen Havalimanı
    ],
    stations: [
      { name: 'Beylikdüzü TÜYAP', coordinates: [28.6425, 41.0152], isTransfer: true, transfers: ['Metrobüs', 'M20'] },
      { name: 'Nazım Hikmet', coordinates: [28.6912, 41.0265] },
      { name: 'Saadetdere', coordinates: [28.7425, 41.0345] },
      { name: 'Kirazlı', coordinates: [28.8258, 41.0452], isTransfer: true, transfers: ['M1B', 'M3'] },
      { name: 'Otogar', coordinates: [28.8912, 41.0525], isTransfer: true, transfers: ['M1A', 'M1B'] },
      { name: 'Alibeyköy Cep Otogarı', coordinates: [28.9485, 41.0692], isTransfer: true, transfers: ['T5', 'M7'] },
      { name: 'Mecidiyeköy', coordinates: [28.9958, 41.0665], isTransfer: true, transfers: ['M2', 'M7', 'Metrobüs'] },
      { name: '4. Levent', coordinates: [29.0112, 41.0825], isTransfer: true, transfers: ['M2'] },
      { name: 'Ümraniye', coordinates: [29.1125, 41.0268], isTransfer: true, transfers: ['M5', 'M12'] },
      { name: 'Finans Merkezi', coordinates: [29.1192, 41.0041], isTransfer: true, transfers: ['M12', 'M13'] },
      { name: 'Mevlana', coordinates: [29.1558, 40.9882], isTransfer: true, transfers: ['M8'] },
      { name: 'Sultanbeyli', coordinates: [29.2458, 40.9612], isTransfer: true, transfers: ['M5'] },
      { name: 'Sabiha Gökçen Havalimanı', coordinates: [29.3095, 40.9052], isTransfer: true, transfers: ['M4', 'M10'] },
    ],
  },
  {
    id: 'proj-m20-sefakoy-beylikduzu',
    code: 'M20',
    name: 'M20 İncirli – Sefaköy – Avcılar – Beylikdüzü – TÜYAP Metrosu',
    shortName: 'M20 Beylikdüzü Metrosu',
    category: 'project',
    color: '#E056FD',
    statusText: 'Uluslararası Finansman & Onay Aşamasında',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 18.0,
    stationCount: 10,
    description: 'İstanbul\'un batısında yaklaşık 3.5 milyon nüfusun yaşadığı E-5 koridorunda metrobüsün aşırı yolcu yoğunluğunu raylı sisteme aktaracak 18 km uzunluğundaki stratejik metro projesi.',
    coordinates: [
      [28.8715, 40.9995], // İncirli
      [28.8412, 40.9935], // Çobançeşme
      [28.7985, 40.9902], // Sefaköy
      [28.7758, 40.9865], // Cennet
      [28.7512, 40.9835], // Küçükçekmece
      [28.7325, 40.9805], // Reşitpaşa
      [28.7185, 40.9782], // Avcılar Merkez
      [28.6945, 40.9885], // Cihangir
      [28.6758, 41.0012], // Saadetdere
      [28.6485, 41.0118], // Beylikdüzü
      [28.6325, 41.0185], // TÜYAP
    ],
    stations: [
      { name: 'İncirli', coordinates: [28.8715, 40.9995], isTransfer: true, transfers: ['M1A', 'M3', 'Metrobüs'] },
      { name: 'Çobançeşme', coordinates: [28.8412, 40.9935], isTransfer: true, transfers: ['M9'] },
      { name: 'Sefaköy', coordinates: [28.7985, 40.9902], isTransfer: true, transfers: ['Metrobüs'] },
      { name: 'Cennet', coordinates: [28.7758, 40.9865] },
      { name: 'Küçükçekmece', coordinates: [28.7512, 40.9835], isTransfer: true, transfers: ['B1 Marmaray'] },
      { name: 'Reşitpaşa', coordinates: [28.7325, 40.9805] },
      { name: 'Avcılar Merkez', coordinates: [28.7185, 40.9782] },
      { name: 'Cihangir', coordinates: [28.6945, 40.9885] },
      { name: 'Saadetdere', coordinates: [28.6758, 41.0012] },
      { name: 'Beylikdüzü Meydan', coordinates: [28.6485, 41.0118] },
      { name: 'TÜYAP', coordinates: [28.6325, 41.0185], isTransfer: true, transfers: ['Metrobüs'] },
    ],
  },
  {
    id: 'proj-m13-sogutlucesme-yenidogan',
    code: 'M13',
    name: 'M13 Söğütlüçeşme – Finans Merkezi – Dudullu – Yenidoğan Metrosu',
    shortName: 'M13 Söğütlüçeşme–Yenidoğan',
    category: 'project',
    color: '#FF4B58',
    statusText: 'Uygulama Projesi Revizyonunda',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 21.3,
    stationCount: 14,
    description: 'Kadıköy Söğütlüçeşme YHT/Marmaray/Metrobüs merkezinden başlayıp Şehir Hastanesi, Libadiye, Finans Merkezi, İMES ve Dudullu üzerinden Yenidoğan\'a bağlanan 21.3 km\'lik kritik aktarma omurgası.',
    coordinates: [
      [29.0385, 40.9912], // Söğütlüçeşme
      [29.0525, 40.9968], // Şehir Hastanesi
      [29.0692, 41.0042], // Göztepe Park
      [29.0858, 41.0098], // Libadiye
      [29.1025, 41.0145], // Çamlıca
      [29.1192, 41.0041], // Finans Merkezi
      [29.1315, 41.0012], // Ataşehir
      [29.1458, 41.0058], // Şerifali
      [29.1592, 41.0112], // İmes
      [29.1685, 41.0175], // Dudullu
      [29.1912, 41.0258], // Soğukpınar
      [29.2158, 41.0325], // Cumhuriyet
      [29.2385, 41.0392], // Emek
      [29.2558, 41.0458], // Yenidoğan
    ],
    stations: [
      { name: 'Söğütlüçeşme', coordinates: [29.0385, 40.9912], isTransfer: true, transfers: ['B1 Marmaray', 'Metrobüs', 'YHT'] },
      { name: 'Şehir Hastanesi', coordinates: [29.0525, 40.9968] },
      { name: 'Göztepe', coordinates: [29.0692, 41.0042] },
      { name: 'Libadiye', coordinates: [29.0858, 41.0098] },
      { name: 'Finans Merkezi', coordinates: [29.1192, 41.0041], isTransfer: true, transfers: ['M12'] },
      { name: 'İmes', coordinates: [29.1592, 41.0112], isTransfer: true, transfers: ['M8'] },
      { name: 'Dudullu', coordinates: [29.1685, 41.0175], isTransfer: true, transfers: ['M5', 'M8'] },
      { name: 'Emek', coordinates: [29.2385, 41.0392] },
      { name: 'Yenidoğan', coordinates: [29.2558, 41.0458] },
    ],
  },
  {
    id: 'proj-f5-itu-istinye',
    code: 'F5',
    name: 'F5 İTÜ Ayazağa – Reşitpaşa – İstinye Sahil Füniküleri',
    shortName: 'F5 İTÜ–İstinye Füniküleri',
    category: 'project',
    color: '#7A745A',
    statusText: 'Uygulama Projesi Onaylandı',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 2.65,
    stationCount: 3,
    description: 'M2 İTÜ Ayazağa metro istasyonu ile İstinye vapur iskelesi sahilini dik yamaçları aşarak birbirine bağlayacak olan yeraltı füniküler hattı.',
    coordinates: [
      [29.0235, 41.1075], // İTÜ Ayazağa
      [29.0395, 41.1118], // Reşitpaşa
      [29.0558, 41.1142], // İstinye İskele
    ],
    stations: [
      { name: 'İTÜ Ayazağa', coordinates: [29.0235, 41.1075], isTransfer: true, transfers: ['M2'] },
      { name: 'Reşitpaşa', coordinates: [29.0395, 41.1118] },
      { name: 'İstinye İskele', coordinates: [29.0558, 41.1142], isTransfer: true, transfers: ['Vapur', 'Deniz Hattı'] },
    ],
  },
  {
    id: 'proj-anadolu-tram',
    code: 'T7',
    name: 'AnadoluTRAM (Üsküdar – Kadıköy – Maltepe Sahil Tramvayı)',
    shortName: 'AnadoluTRAM',
    category: 'project',
    color: '#20BF6B',
    statusText: 'Fizibilite & Güzergah Onaylandı',
    authority: 'İBB',
    authorityFullName: 'İstanbul Büyükşehir Belediyesi',
    lengthKm: 21.3,
    stationCount: 33,
    description: 'Anadolu Yakası kıyı şeridinde Üsküdar Meydanı, Kadıköy Rıhtım, Moda, Caddebostan, Bostancı ve Maltepe sahilini birbirine bağlayan modern çevre dostu cadde tramvayı projesi.',
    coordinates: [
      [29.0152, 41.0268], // Üsküdar
      [29.0112, 41.0118], // Harem
      [29.0215, 40.9912], // Kadıköy Rıhtım
      [29.0315, 40.9852], // Moda
      [29.0485, 40.9785], // Fenerbahçe
      [29.0682, 40.9695], // Caddebostan
      [29.0958, 40.9582], // Bostancı Sahil
      [29.1192, 40.9465], // Küçükyalı
      [29.1385, 40.9325], // Maltepe Meydan
    ],
    stations: [
      { name: 'Üsküdar Meydan', coordinates: [29.0152, 41.0268], isTransfer: true, transfers: ['M5', 'B1 Marmaray', 'Vapur'] },
      { name: 'Harem', coordinates: [29.0112, 41.0118], isTransfer: true, transfers: ['Feribot'] },
      { name: 'Kadıköy Rıhtım', coordinates: [29.0215, 40.9912], isTransfer: true, transfers: ['M4', 'T3', 'Vapur'] },
      { name: 'Moda', coordinates: [29.0315, 40.9852], isTransfer: true, transfers: ['T3'] },
      { name: 'Caddebostan', coordinates: [29.0682, 40.9695] },
      { name: 'Bostancı İskele', coordinates: [29.0958, 40.9582], isTransfer: true, transfers: ['M8', 'B1 Marmaray', 'İDO'] },
      { name: 'Maltepe Meydan', coordinates: [29.1385, 40.9325], isTransfer: true, transfers: ['B1 Marmaray'] },
    ],
  },
];
