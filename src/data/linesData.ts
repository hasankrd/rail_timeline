import { getOfficialMetroColor } from './metroColors';

export interface LineVehicleInfo {
  model: string;
  manufacturer: string;
  formation: string;
  fleetSize: string;
  maxSpeed: string;
  powerSupply: string;
  automationLevel: string;
  features: string[];
  description: string;
  imageUrl?: string;
}

export interface LineMilestone {
  date: string;
  year: number;
  month: number;
  title: string;
  description: string;
  lengthKm?: number;
}

export interface LineStationItem {
  name: string;
  district?: string;
  isInterchange?: boolean;
  transfers?: string[];
}

export interface LineDetail {
  id: string;
  code: string; // e.g. "M1A", "M2", "B1", "T1", "F1"
  name: string; // e.g. "M1A Yenikapı – Atatürk Havalimanı Metro Hattı"
  shortName: string; // e.g. "Yenikapı – Atatürk Havalimanı"
  type: 'metro' | 'tram' | 'rail' | 'funicular';
  color: string;
  openingDate: string; // e.g. "3 Eylül 1989"
  openingDateFormatted: string; // e.g. "09-1989"
  lengthKm: number; // e.g. 26.8
  stationCount: number; // e.g. 18
  authority: 'İBB' | 'UAB';
  authorityFullName: string;
  status: 'active' | 'construction' | 'planned';
  vehiclesUsed: LineVehicleInfo;
  operatingSpecs: {
    travelTime: string;
    headway: string;
    operatingHours: string;
    dailyRidership?: string;
  };
  stations: LineStationItem[];
  milestones: LineMilestone[];
  description: string;
  historicalContext: string;
  imageUrl?: string;
  imageCaption?: string;
}

export const ISTANBUL_LINES_DATA: Record<string, LineDetail> = {
  'M1A': {
    id: 'm1a',
    code: 'M1A',
    name: 'M1A Yenikapı – Atatürk Havalimanı Metro Hattı',
    shortName: 'Yenikapı – Atatürk Havalimanı',
    type: 'metro',
    color: '#EE2229',
    openingDate: '3 Eylül 1989',
    openingDateFormatted: '09-1989',
    lengthKm: 26.8,
    stationCount: 18,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M1A hattı viyadük kesitinde seyreden metro aracı',
    vehiclesUsed: {
      model: 'ABB Traction & Hunslet / Hyundai Rotem',
      manufacturer: 'ABB (İsviçre / İsveç) & Hyundai Rotem (Güney Kore / Türkiye)',
      formation: "4'lü Dizi (4 Vagon)",
      fleetSize: '105 Vagon',
      maxSpeed: '80 km/h',
      powerSupply: '750V DC Rijit ve Havai Katener',
      automationLevel: 'GoA2 (Yarı Otomatik, Sürücülü)',
      features: [
        'Tam Klimalı Yolcu Kompartımanı',
        'Dinamik Yolcu Bilgilendirme Ekranları',
        'Rejeneratif Frenleme ve Enerji Geri Kazanımı',
        'Engelli ve Bebek Arabası Alanları',
        'Acil Durum İletişim İnterkomları',
      ],
      description:
        "M1 hattında açılışından itibaren İsviçreli ABB Traction tarafından üretilen tarihi hafif metro araçları hizmet vermektedir. 2008 yılından itibaren hatta ilave edilen modern Hyundai Rotem araçlarıyla filo takviye edilmiş olup vagonlar 4'lü dizi halinde işletilmektedir.",
    },
    operatingSpecs: {
      travelTime: '35 Dakika',
      headway: '4 Dakika (Yoğun Saatlerde)',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi 24 Saat Gece Metrosu)',
      dailyRidership: '~400.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Yenikapı', isInterchange: true, transfers: ['M2', 'B1', 'İDO'] },
      { name: 'Aksaray', isInterchange: true, transfers: ['T1'] },
      { name: 'Emniyet - Fatih' },
      { name: 'Topkapı - Ulubatlı', isInterchange: true, transfers: ['T4'] },
      { name: 'Bayrampaşa - Maltepe' },
      { name: 'Sağmalcılar' },
      { name: 'Kocatepe' },
      { name: 'Otogar' },
      { name: 'Terazidere' },
      { name: 'Davutpaşa - YTÜ' },
      { name: 'Merter', isInterchange: true, transfers: ['Metrobüs'] },
      { name: 'Zeytinburnu', isInterchange: true, transfers: ['T1', 'Metrobüs'] },
      { name: 'Bakırköy - İncirli' },
      { name: 'Bahçelievler', isInterchange: true, transfers: ['Metrobüs'] },
      { name: 'Ataköy - Şirinevler', isInterchange: true, transfers: ['Metrobüs'] },
      { name: 'Yenibosna', isInterchange: true, transfers: ['M9'] },
      { name: 'DTM - İstanbul Fuar Merkezi' },
      { name: 'Atatürk Havalimanı' },
    ],
    milestones: [
      { date: '3 Eylül 1989', year: 1989, month: 9, title: 'İlk Etap Açılışı', description: 'Aksaray – Kocatepe arası Türkiye’nin ilk modern metro hattı olarak hizmete girdi.', lengthKm: 8.5 },
      { date: '18 Aralık 1989', year: 1989, month: 12, title: 'Esenler Uzatması', description: 'Kocatepe – Esenler kesimi açıldı.' },
      { date: '31 Ocak 1994', year: 1994, month: 1, title: 'Otogar Bağlantısı', description: 'Büyük İstanbul Otogarı istasyonu işletmeye alındı.' },
      { date: '20 Aralık 2002', year: 2002, month: 12, title: 'Atatürk Havalimanı Açılışı', description: 'Hat Atatürk Havalimanı’na kadar uzatılarak raylı sistem havalimanı entegrasyonu sağlandı.', lengthKm: 17.5 },
      { date: '9 Kasım 2014', year: 2014, month: 11, title: 'Yenikapı Entegrasyonu', description: 'Aksaray – Yenikapı tüneli tamamlanarak M2 ve Marmaray ile doğrudan bağlantı kuruldu.', lengthKm: 0.7 },
    ],
    description:
      'M1A Yenikapı – Atatürk Havalimanı Metro Hattı, İstanbul’un ve Türkiye’nin ilk modern metro hattıdır. 3 Eylül 1989’da Aksaray – Kocatepe arasında açılan hat, zamanla batıda Atatürk Havalimanı’na, doğuda ise Yenikapı Aktarma Merkezi’ne uzatılarak kentin en kritik doğu-batı ulaşım omurgalarından birine dönüşmüştür.',
    historicalContext:
      'Cumhuriyet döneminin ilk modern raylı toplu taşıma sistemi olan hat, İstanbul Büyükşehir Belediyesi tarafından yerli ve uluslararası mühendislik işbirliğiyle inşa edilmiştir. 2014 yılında Yenikapı istasyonunun hizmete girmesiyle Marmaray ve M2 Hacıosman hattına doğrudan aktarma imkanı sağlanmıştır.',
  },

  'M1B': {
    id: 'm1b',
    code: 'M1B',
    name: 'M1B Yenikapı – Kirazlı Metro Hattı',
    shortName: 'Yenikapı – Kirazlı',
    type: 'metro',
    color: '#EE2229',
    openingDate: '14 Haziran 2013',
    openingDateFormatted: '06-2013',
    lengthKm: 15.6,
    stationCount: 13,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1519074069444-1ba4eae16e16?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M1B Kirazlı İstasyonu peron alanı',
    vehiclesUsed: {
      model: 'ABB Traction & Hunslet / Hyundai Rotem',
      manufacturer: 'ABB & Hyundai Rotem',
      formation: "4'lü Dizi (4 Vagon)",
      fleetSize: '105 Vagon Ortak Filo',
      maxSpeed: '80 km/h',
      powerSupply: '750V DC Rijit ve Havai Katener',
      automationLevel: 'GoA2 (Yarı Otomatik, Sürücülü)',
      features: [
        'Tam Klimalı Kompartımanlar',
        'Yolcu Bilgilendirme Ekranları',
        'Otogar Sonrası Ayrışan Çatal Hat İşletmesi',
      ],
      description:
        "M1A hattıyla ortak araç havuzunu kullanan M1B hattında ABB ve Hyundai Rotem vagonları 4'lü dizi halinde işletilmektedir.",
    },
    operatingSpecs: {
      travelTime: '25 Dakika',
      headway: '4 Dakika',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi 24 Saat Gece Metrosu)',
      dailyRidership: '~300.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Yenikapı', isInterchange: true, transfers: ['M2', 'B1', 'İDO'] },
      { name: 'Aksaray', isInterchange: true, transfers: ['T1'] },
      { name: 'Emniyet - Fatih' },
      { name: 'Topkapı - Ulubatlı', isInterchange: true, transfers: ['T4'] },
      { name: 'Bayrampaşa - Maltepe' },
      { name: 'Sağmalcılar' },
      { name: 'Kocatepe' },
      { name: 'Otogar' },
      { name: 'Esenler' },
      { name: 'Menderes' },
      { name: 'Üçyüzlü' },
      { name: 'Bağcılar Meydan', isInterchange: true, transfers: ['T1'] },
      { name: 'Kirazlı', isInterchange: true, transfers: ['M3'] },
    ],
    milestones: [
      { date: '14 Haziran 2013', year: 2013, month: 6, title: 'Kirazlı Etabı Açılışı', description: 'Otogar – Kirazlı arası tamamlanarak M3 hattına aktarma sağlandı.', lengthKm: 5.8 },
      { date: '9 Kasım 2014', year: 2014, month: 11, title: 'Yenikapı Entegrasyonu', description: 'Yenikapı istasyonunun açılmasıyla Marmaray ve M2 bağlantısı kuruldu.' },
    ],
    description:
      'M1B Yenikapı – Kirazlı Metro Hattı, Otogar istasyonundan ayrılarak Esenler ve Bağcılar ilçelerini kentin kalbine bağlar. Kirazlı istasyonunda M3 Bakırköy Sahil – Kayaşehir Merkez hattına doğrudan aktarma sunar.',
    historicalContext:
      'Yoğun nüfusa sahip Bağcılar ve Esenler bölgelerinin trafik yükünü hafifletmek amacıyla 2013 yılında hizmete alınmıştır. Hattın Kirazlı’dan Halkalı’ya uzatılması inşaatı devam etmektedir.',
  },

  'M2': {
    id: 'm2',
    code: 'M2',
    name: 'M2 Yenikapı – Hacıosman Metro Hattı',
    shortName: 'Yenikapı – Hacıosman',
    type: 'metro',
    color: '#059A4D',
    openingDate: '16 Eylül 2000',
    openingDateFormatted: '09-2000',
    lengthKm: 23.5,
    stationCount: 16,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M2 Haliç Metro Köprüsü üzerinde seyreden Alstom / Hyundai Rotem aracı',
    vehiclesUsed: {
      model: 'Alstom Metropolis & Hyundai Rotem',
      manufacturer: 'Alstom Transport (Fransa) & Hyundai Rotem (Güney Kore / Türkiye)',
      formation: "4'lü ve 8'li Dizi (8 Vagon)",
      fleetSize: '124 Vagon (32 Alstom + 92 Hyundai Rotem)',
      maxSpeed: '80 km/h',
      powerSupply: '750V DC 3. Ray (Alt Besleme)',
      automationLevel: 'GoA2 (Yarı Otomatik ATC / ATP Sinyalizasyon)',
      features: [
        "8'li Uzun Tren Dizilimi Kapasitesi",
        'Geniş Körük Ara Geçişleri (Gangway)',
        'Haliç Metro Köprüsü Açık Alan İklimlendirmesi',
        'Rejeneratif Elektrodinamik Frenleme',
        'Akıllı LED Yolcu Bilgilendirme ve Güvenlik Kameraları',
      ],
      description:
        "M2 hattında ilk etapta 2000 yılında Fransa üretimi 32 adet Alstom Metropolis vagonu hizmete girmiştir. Hattın kuzey ve güney etaplarının genişlemesiyle 2008-2010 yıllarında 92 adet Hyundai Rotem aracı filoya katılmıştır. Yoğun saatlerde trenler 8 vagonlu dizi olarak çalıştırılmaktadır.",
    },
    operatingSpecs: {
      travelTime: '32 Dakika',
      headway: '2.5 - 3 Dakika (Pik Saatte)',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi 24 Saat Gece Metrosu)',
      dailyRidership: '~600.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Yenikapı', isInterchange: true, transfers: ['M1A', 'M1B', 'B1', 'İDO'] },
      { name: 'Vezneciler - İstanbul Üniv.', isInterchange: true, transfers: ['T1'] },
      { name: 'Haliç', isInterchange: true, transfers: ['T5'] },
      { name: 'Şişhane', isInterchange: true, transfers: ['F2', 'T2'] },
      { name: 'Taksim', isInterchange: true, transfers: ['F1', 'T2'] },
      { name: 'Osmanbey' },
      { name: 'Şişli - Mecidiyeköy', isInterchange: true, transfers: ['M7', 'Metrobüs'] },
      { name: 'Gayrettepe', isInterchange: true, transfers: ['M11', 'Metrobüs'] },
      { name: 'Levent', isInterchange: true, transfers: ['M6'] },
      { name: '4. Levent' },
      { name: 'Sanayi Mahallesi', isInterchange: true, transfers: ['M2 Seyrantepe'] },
      { name: 'İTÜ - Ayazağa' },
      { name: 'Atatürk Oto Sanayi' },
      { name: 'Darüşşafaka' },
      { name: 'Hacıosman' },
      { name: 'Seyrantepe (Şube Hattı)', isInterchange: true, transfers: ['F3', 'Ali Sami Yen Spor Kompleksi'] },
    ],
    milestones: [
      { date: '16 Eylül 2000', year: 2000, month: 9, title: 'Taksim – 4. Levent Açılışı', description: 'Hattın ilk etabı 6 istasyonla Taksim ile 4. Levent arasında hizmete açıldı.', lengthKm: 8.5 },
      { date: '30 Ocak 2009', year: 2009, month: 1, title: 'Şişhane ve Atatürk Oto Sanayi', description: 'Kuzeyde Atatürk Oto Sanayi, güneyde Şişhane istasyonları açıldı.', lengthKm: 5.6 },
      { date: '11 Kasım 2010', year: 2010, month: 11, title: 'Seyrantepe Şubesi', description: 'Sanayi Mahallesi – Seyrantepe şube hattı hizmete girdi.', lengthKm: 1.5 },
      { date: '22 Mayıs 2011', year: 2011, month: 5, title: 'Hacıosman Açılışı', description: 'Hat Sarıyer Hacıosman terminaline ulaştı.', lengthKm: 1.3 },
      { date: '15 Şubat 2014', year: 2014, month: 2, title: 'Haliç Metro Köprüsü & Yenikapı', description: 'Haliç Köprüsü üzerinden geçerek Vezneciler ve Yenikapı Aktarma Merkezine bağlandı.', lengthKm: 3.5 },
    ],
    description:
      'M2 Yenikapı – Hacıosman Metro Hattı, İstanbul’un iş, kültür ve finans merkezlerini birbirine bağlayan en yoğun ve en prestijli raylı sistem hattıdır. Tarihi Yarımada’dan başlayarak Haliç Metro Geçiş Köprüsü üzerinden Beyoğlu, Şişli, Levent ve Sarıyer’e kadar uzanır.',
    historicalContext:
      'İlk temeli 1992 yılında atılan hat, zengin arkeolojik buluntular (Theodosius Limanı kalıntıları) nedeniyle titiz bir çalışmayla inşa edilmiştir. Haliç üzerindeki kablo askılı döner köprüsüyle kentin silüetine ikonik bir yapı kazandırmıştır.',
  },

  'M3': {
    id: 'm3',
    code: 'M3',
    name: 'M3 Bakırköy Sahil – Kayaşehir Merkez Metro Hattı',
    shortName: 'Bakırköy Sahil – Kayaşehir Merkez',
    type: 'metro',
    color: '#0CA6DF',
    openingDate: '14 Haziran 2013',
    openingDateFormatted: '06-2013',
    lengthKm: 26.7,
    stationCount: 19,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB) & UAB',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M3 hattı Kayaşehir istasyonu peronu',
    vehiclesUsed: {
      model: 'Alstom Metropolis & Hyundai Rotem',
      manufacturer: 'Alstom Transport & Hyundai Rotem',
      formation: "4'lü ve 8'li Dizi",
      fleetSize: '80 Vagon',
      maxSpeed: '80 km/h',
      powerSupply: '750V DC 3. Ray',
      automationLevel: 'GoA2 (Yarı Otomatik, Sürücülü)',
      features: [
        'Kayaşehir Şehir Hastanesi Özel Geniş Asansör Kapasitesi',
        'Klimalı Ferah Vagonlar',
        'Gelişmiş Yolcu Bilgilendirme Sistemi',
      ],
      description:
        "M3 hattında Alstom Metropolis ve Rotem vagonları 4'lü ve 8'li diziler halinde işletilmekte olup hat kuzey-güney aksında yüksek yolcu talebini karşılamaktadır.",
    },
    operatingSpecs: {
      travelTime: '39 Dakika',
      headway: '5 Dakika',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi 24 Saat Gece Metrosu)',
      dailyRidership: '~250.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Bakırköy İDO', isInterchange: true, transfers: ['İDO', 'B1'] },
      { name: 'Özgürlük Meydanı', isInterchange: true, transfers: ['B1'] },
      { name: 'İncirli', isInterchange: true, transfers: ['M1A', 'Metrobüs'] },
      { name: 'Haznedar' },
      { name: 'İlkyuva' },
      { name: 'Yıldıztepe' },
      { name: 'Molla Gürani' },
      { name: 'Kirazlı', isInterchange: true, transfers: ['M1B'] },
      { name: 'Yenimahalle' },
      { name: 'Mahmutbey', isInterchange: true, transfers: ['M7'] },
      { name: 'İSTOÇ' },
      { name: 'İkitelli Sanayi', isInterchange: true, transfers: ['M9'] },
      { name: 'Ziya Gökalp Mahallesi' },
      { name: 'Olimpiyat', isInterchange: true, transfers: ['M9'] },
      { name: 'Başak Konutları' },
      { name: 'Metrokent' },
      { name: 'Onurkent' },
      { name: 'Şehir Hastanesi' },
      { name: 'Kayaşehir Merkez', isInterchange: true, transfers: ['M11'] },
    ],
    milestones: [
      { date: '14 Haziran 2013', year: 2013, month: 6, title: 'Kirazlı – Metrokent Açılışı', description: 'Hattın ilk etabı 11 istasyonla açıldı.', lengthKm: 15.9 },
      { date: '8 Nisan 2023', year: 2023, month: 4, title: 'Kayaşehir Uzatması (UAB)', description: 'Metrokent – Kayaşehir Merkez etabı ve Başakşehir Çam ve Sakura Şehir Hastanesi bağlantısı açıldı.', lengthKm: 6.2 },
      { date: '10 Mart 2024', year: 2024, month: 3, title: 'Bakırköy Sahil Etabı (UAB)', description: 'Kirazlı – Bakırköy İDO sahil uzatması tamamlanarak hat Marmaray’a bağlandı.', lengthKm: 8.4 },
    ],
    description:
      'M3 Bakırköy Sahil – Kayaşehir Merkez Metro Hattı, Marmara Denizi kıyısından başlayıp İncirli, Kirazlı, Mahmutbey ve İkitelli üzerinden Başakşehir Çam ve Sakura Şehir Hastanesi ile Kayaşehir’e kadar uzanan devasa bir kuzey-güney omurgasıdır.',
    historicalContext:
      'Başakşehir’in gelişimine paralel olarak planlanan hat, 2023 ve 2024 yıllarında Ulaştırma ve Altyapı Bakanlığı tarafından tamamlanan etaplarla Marmaray ve Şehir Hastanesi ile entegre edilmiştir.',
  },

  'M4': {
    id: 'm4',
    code: 'M4',
    name: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    shortName: 'Kadıköy – Sabiha Gökçen Havalimanı',
    type: 'metro',
    color: '#E81E77',
    openingDate: '17 Ağustos 2012',
    openingDateFormatted: '08-2012',
    lengthKm: 33.5,
    stationCount: 23,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB) & UAB',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M4 Kadıköy peronunda CAF üretimi tren dizisi',
    vehiclesUsed: {
      model: 'CAF (Construcciones y Auxiliar de Ferrocarriles)',
      manufacturer: 'CAF (İspanya)',
      formation: "4'lü ve 8'li Dizi (8 Vagon)",
      fleetSize: '144 Vagon',
      maxSpeed: '80 km/h',
      powerSupply: '1500V DC Rijit Katener',
      automationLevel: 'GoA2 (Yarı Otomatik ATC/ATO)',
      features: [
        'Anadolu Yakası’nın En Geniş Araç Filosu',
        'Dizi İçi Kesintisiz Yürüyüş Koridoru (Walk-through)',
        '1500V Rijit Katener ile Yüksek Enerji Verimliliği',
        'Havalimanı Yolcuları İçin Geniş Bagaj Rafları',
        'Rejeneratif Frenleme ve LED Aydınlatma',
      ],
      description:
        "M4 hattında İspanyol CAF firması tarafından özel olarak üretilen 144 adet vagon hizmet vermektedir. Araçlar 4'lü ve 8'li dizi olarak çalışabilmekte, 8'li diziler tek seferde 2.000'den fazla yolcu taşıyabilmektedir.",
    },
    operatingSpecs: {
      travelTime: '52 Dakika',
      headway: '3.5 - 4 Dakika',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi 24 Saat Gece Metrosu)',
      dailyRidership: '~380.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Kadıköy', isInterchange: true, transfers: ['T3', 'Şehir Hatları', 'İDO'] },
      { name: 'Ayrılık Çeşmesi', isInterchange: true, transfers: ['B1'] },
      { name: 'Acıbadem' },
      { name: 'Ünalan', isInterchange: true, transfers: ['Metrobüs'] },
      { name: 'Göztepe' },
      { name: 'Yenisahra', isInterchange: true, transfers: ['M12'] },
      { name: 'Kozyatağı', isInterchange: true, transfers: ['M8'] },
      { name: 'Bostancı' },
      { name: 'Küçükyalı' },
      { name: 'Maltepe' },
      { name: 'Huzurevi' },
      { name: 'Gülsuyu' },
      { name: 'Esenkent' },
      { name: 'Hastane - Adliye' },
      { name: 'Soğanlık' },
      { name: 'Kartal' },
      { name: 'Yakacık - Adnan Kahveci' },
      { name: 'Pendik' },
      { name: 'Tavşantepe' },
      { name: 'Fevzi Çakmak - Hastane', isInterchange: true, transfers: ['M10'] },
      { name: 'Yayalar - Şeyhli' },
      { name: 'Kurtköy' },
      { name: 'Sabiha Gökçen Havalimanı' },
    ],
    milestones: [
      { date: '17 Ağustos 2012', year: 2012, month: 8, title: 'Kadıköy – Kartal Açılışı', description: 'Anadolu Yakası’nın ilk metrosu olarak 16 istasyonla açıldı.', lengthKm: 21.7 },
      { date: '29 Ekim 2013', year: 2013, month: 10, title: 'Ayrılık Çeşmesi Marmaray Bağlantısı', description: 'Marmaray tüp geçişiyle doğrudan aktarma sağlandı.' },
      { date: '10 Ekim 2016', year: 2016, month: 10, title: 'Tavşantepe Uzatması', description: 'Kartal – Tavşantepe kesimi açıldı.', lengthKm: 4.4 },
      { date: '2 Ekim 2022', year: 2022, month: 10, title: 'Sabiha Gökçen Havalimanı Etabı (UAB)', description: 'Tavşantepe – Sabiha Gökçen Havalimanı uzatması hizmete girdi.', lengthKm: 7.4 },
    ],
    description:
      'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı, Anadolu Yakası’nın en uzun ve en yoğun raylı sistem hattıdır. D100 (E-5) Karayolu aksı boyunca ilerleyerek Kadıköy sahilini Sabiha Gökçen Uluslararası Havalimanı’na bağlar.',
    historicalContext:
      'Anadolu Yakası’nın ilk metro hattı olarak 2012 yılında açılmıştır. 2022’de tamamlanan Sabiha Gökçen Havalimanı etabı ile kentin ikinci uluslararası havalimanına kesintisiz raylı sistem erişimi sağlanmıştır.',
  },

  'M5': {
    id: 'm5',
    code: 'M5',
    name: 'M5 Üsküdar – Samandıra Merkez Metro Hattı',
    shortName: 'Üsküdar – Samandıra Merkez',
    type: 'metro',
    color: '#683166',
    openingDate: '15 Aralık 2017',
    openingDateFormatted: '12-2017',
    lengthKm: 26.5,
    stationCount: 20,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M5 hattı Peron Ayırıcı Kapı Sistemi (PAKS) ve sürücüsüz Mitsubishi aracı',
    vehiclesUsed: {
      model: 'Mitsubishi Heavy Industries & CAF',
      manufacturer: 'Mitsubishi (Japonya / İspanya konsorsiyumu)',
      formation: "6'lı Dizi (6 Vagon)",
      fleetSize: '126 Vagon (21 Tren Seti)',
      maxSpeed: '90 km/h',
      powerSupply: '750V DC 3. Ray',
      automationLevel: 'GoA4 (Tam Otomasyon, Sürücüsüz Metro)',
      features: [
        'Türkiye’nin İlk Tam Sürücüsüz GoA4 Metrosu',
        'Tüm İstasyonlarda Tam Boy Peron Ayırıcı Kapı Sistemi (PAKS)',
        'Gelişmiş CBTC Telsiz Tabanlı Tren Kontrolü',
        '6 Vagonlu Genişletilmiş Dizi Tasarımı (1.620 Yolcu / Dizi)',
        'Engelsiz Düz Ayak Peron-Tren Biniş Seviyesi',
      ],
      description:
        "M5 hattında Türkiye'nin ilk sürücüsüz metro trenleri olan Japon Mitsubishi Heavy Industries yapımı vagonlar hizmet vermektedir. Sürücü kabini bulunmayan araçların ön camından tünel seyredilebilmektedir. Tam otomatik peron kapıları sayesinde üst düzey emniyet sağlanır.",
    },
    operatingSpecs: {
      travelTime: '42 Dakika',
      headway: '4.5 - 5 Dakika',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi 24 Saat Gece Metrosu)',
      dailyRidership: '~320.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Üsküdar', isInterchange: true, transfers: ['B1', 'Şehir Hatları'] },
      { name: 'Fıstıkağacı' },
      { name: 'Bağlarbaşı' },
      { name: 'Altunizade', isInterchange: true, transfers: ['Metrobüs'] },
      { name: 'Kısıklı' },
      { name: 'Bulgurlu' },
      { name: 'Ümraniye' },
      { name: 'Çarşı', isInterchange: true, transfers: ['M12'] },
      { name: 'Yamanevler' },
      { name: 'Çakmak' },
      { name: 'Ihlamurkuyu' },
      { name: 'Altınşehir' },
      { name: 'İmam Hatip Lisesi' },
      { name: 'Dudullu', isInterchange: true, transfers: ['M8'] },
      { name: 'Necip Fazıl' },
      { name: 'Çekmeköy' },
      { name: 'Meclis' },
      { name: 'Sarıgazi' },
      { name: 'Sancaktepe Şehir Hastanesi' },
      { name: 'Sancaktepe' },
      { name: 'Samandıra Merkez' },
    ],
    milestones: [
      { date: '15 Aralık 2017', year: 2017, month: 12, title: 'Üsküdar – Yamanevler Açılışı', description: 'Türkiye’nin ilk sürücüsüz metrosu olarak 9 istasyonla hizmete girdi.', lengthKm: 10.5 },
      { date: '21 Ekim 2018', year: 2018, month: 10, title: 'Yamanevler – Çekmeköy Açılışı', description: 'Hat Çekmeköy’e ulaştı.', lengthKm: 9.5 },
      { date: '16 Mart 2024', year: 2024, month: 3, title: 'Çekmeköy – Samandıra Merkez Etabı', description: 'Sancaktepe ve Samandıra Merkez uzatması hizmete alındı.', lengthKm: 6.5 },
    ],
    description:
      'M5 Üsküdar – Samandıra Merkez Metro Hattı, Türkiye’nin ilk tam otomatik sürücüsüz metro hattıdır. Boğaziçi kıyısındaki Üsküdar’dan başlayarak Ümraniye, Çekmeköy ve Sancaktepe ilçelerini Samandıra’ya bağlar.',
    historicalContext:
      'Yüksek teknolojik altyapısıyla Türkiye raylı sistemler tarihinde çığır açan hat, sürücüsüz işletme kabiliyeti ve peron ayırıcı kapı sistemleriyle uluslararası güvenlik standartlarını İstanbul’a taşımıştır.',
  },

  'M6': {
    id: 'm6',
    code: 'M6',
    name: 'M6 Levent – Boğaziçi Üniversitesi/Hisarüstü Metro Hattı',
    shortName: 'Levent – Boğaziçi Üniv./Hisarüstü',
    type: 'metro',
    color: '#C9AA79',
    openingDate: '19 Nisan 2015',
    openingDateFormatted: '04-2015',
    lengthKm: 3.3,
    stationCount: 4,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB) & UAB',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M6 Hisarüstü İstasyonu derin tünel mimarisi',
    vehiclesUsed: {
      model: 'Alstom Metropolis',
      manufacturer: 'Alstom Transport (Fransa)',
      formation: "4'lü Dizi (4 Vagon)",
      fleetSize: '12 Vagon',
      maxSpeed: '80 km/h',
      powerSupply: '750V DC 3. Ray',
      automationLevel: 'GoA2 (Yarı Otomatik, Sürücülü)',
      features: [
        'Kompakt Mini Metro İşletmesi',
        'Boğaziçi Üniversitesi Kampüsüne Doğrudan Tünel Erişimi',
        'F4 Aşiyan Füniküleri ile Entegre Aktarma',
      ],
      description:
        "M6 hattında Alstom Metropolis araçları 4'lü dizi halinde işletilmekte ve tek hat mekik işletmesi prensibiyle çalışmaktadır.",
    },
    operatingSpecs: {
      travelTime: '7 Dakika',
      headway: '5 - 6 Dakika',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi 24 Saat Gece Metrosu)',
      dailyRidership: '~45.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Levent', isInterchange: true, transfers: ['M2'] },
      { name: 'Nispetiye' },
      { name: 'Etiler' },
      { name: 'Boğaziçi Üniversitesi - Hisarüstü', isInterchange: true, transfers: ['F4'] },
    ],
    milestones: [
      { date: '19 Nisan 2015', year: 2015, month: 4, title: 'Hattın Tamamının Açılışı', description: 'Levent ile Hisarüstü arasındaki 3.3 km’lik mini metro hattı hizmete girdi.', lengthKm: 3.3 },
      { date: '28 Ekim 2022', year: 2022, month: 10, title: 'F4 Aşiyan Bağlantısı', description: 'Hisarüstü istasyonundan F4 Füniküleri ile Boğaz sahiline bağlantı sağlandı.' },
    ],
    description:
      'M6 Levent – Boğaziçi Üniversitesi/Hisarüstü Metro Hattı (Mini Metro), Levent finans merkezinden Etiler ve Boğaziçi Üniversitesi kampüsüne erişim sağlayan hafif tünel metrosudur.',
    historicalContext:
      'Tek tünel Yeni Avusturya Tünel Açma Metodu (NATM) ile inşa edilen hat, düşük eğimli ve kompakt yapısıyla üniversite öğrencileri ve semt sakinleri için vazgeçilmez bir ulaşım hattıdır.',
  },

  'M7': {
    id: 'm7',
    code: 'M7',
    name: 'M7 Yıldız – Mahmutbey Metro Hattı',
    shortName: 'Yıldız – Mahmutbey',
    type: 'metro',
    color: '#F490B3',
    openingDate: '28 Ekim 2020',
    openingDateFormatted: '10-2020',
    lengthKm: 20.0,
    stationCount: 17,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M7 Yıldız İstasyonu fütüristik derin tünel mimarisi',
    vehiclesUsed: {
      model: 'Hyundai Rotem (Eurotem)',
      manufacturer: 'Hyundai Rotem (Adapazarı Eurotem Fabrikası)',
      formation: "4'lü ve 8'li Dizi (8 Vagonlu İşletmeye Uygun)",
      fleetSize: '80 Vagon (20 Dizi)',
      maxSpeed: '80 km/h',
      powerSupply: '1500V DC Rijit Katener',
      automationLevel: 'GoA4 (Tam Otomasyon, Sürücüsüz Metro)',
      features: [
        'Avrupa Yakası’nın İlk Tam Sürücüsüz Metrosu',
        'Yerli Üretim Payı Yüksek Eurotem Montajlı Vagonlar',
        'Tüm Peronlarda Tam Boy Emniyet Kapıları (PAKS)',
        '1500V Rijit Katener Sistemi ile Kesintisiz Güç',
        'Geniş Gangway ve Panoramik Ön Seyir Camı',
      ],
      description:
        "M7 hattında Adapazarı Eurotem tesislerinde üretilen Hyundai Rotem yapımı tam sürücüsüz vagonlar çalışmaktadır. Vagonlar 4'lü ve 8'li dizi olarak çalışabilmektedir. Kabinsiz ön cam sayesinde yolcular tünel yolculuğunu canlı izleyebilmektedir.",
    },
    operatingSpecs: {
      travelTime: '32 Dakika',
      headway: '4.5 Dakika',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi 24 Saat Gece Metrosu)',
      dailyRidership: '~350.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Yıldız', isInterchange: false },
      { name: 'Fulya' },
      { name: 'Mecidiyeköy', isInterchange: true, transfers: ['M2', 'Metrobüs'] },
      { name: 'Çağlayan' },
      { name: 'Kâğıthane', isInterchange: true, transfers: ['M11'] },
      { name: 'Nurtepe' },
      { name: 'Alibeyköy', isInterchange: true, transfers: ['T5'] },
      { name: 'Çırçır' },
      { name: 'Veysel Karani - Akşemsettin' },
      { name: 'Yeşilpınar' },
      { name: 'Kâzım Karabekir' },
      { name: 'Yenimahalle' },
      { name: 'Karadeniz Mahallesi', isInterchange: true, transfers: ['T4'] },
      { name: 'Tekstilkent - Giyimkent' },
      { name: 'Oruç Reis' },
      { name: 'Göztepe Mahallesi' },
      { name: 'Mahmutbey', isInterchange: true, transfers: ['M3'] },
    ],
    milestones: [
      { date: '28 Ekim 2020', year: 2020, month: 10, title: 'Mecidiyeköy – Mahmutbey Açılışı', description: 'Hattın ilk etabı 15 istasyonla hizmete girdi.', lengthKm: 18.0 },
      { date: '2 Ocak 2023', year: 2023, month: 1, title: 'Yıldız ve Fulya İstasyonları Açılışı', description: 'Beşiktaş Yıldız uzatması açıldı.', lengthKm: 2.0 },
    ],
    description:
      'M7 Yıldız – Mahmutbey Metro Hattı, Avrupa Yakası’nın ilk tam otomatik sürücüsüz metrosudur. Beşiktaş Yıldız’dan başlayıp Mecidiyeköy, Kâğıthane, Alibeyköy ve Gaziosmanpaşa üzerinden Mahmutbey’e kadar uzanarak kentin en yoğun ilçelerini birbirine bağlar.',
    historicalContext:
      'Kabataş’tan Esenyurt’a kadar uzanacak devasa hattın omurgası olan Yıldız – Mahmutbey etabı, yüksek aktarma kapasitesiyle metrobüs ve diğer metro hatlarının yükünü hafifletmektedir.',
  },

  'M8': {
    id: 'm8',
    code: 'M8',
    name: 'M8 Bostancı – Parseller Metro Hattı',
    shortName: 'Bostancı – Parseller',
    type: 'metro',
    color: '#487ABF',
    openingDate: '6 Ocak 2023',
    openingDateFormatted: '01-2023',
    lengthKm: 14.3,
    stationCount: 13,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M8 Bostancı sahil aktarma istasyonu',
    vehiclesUsed: {
      model: 'Hyundai Rotem (Eurotem)',
      manufacturer: 'Hyundai Rotem (Türkiye)',
      formation: "4'lü Dizi (4 Vagon)",
      fleetSize: '40 Vagon (10 Dizi)',
      maxSpeed: '80 km/h',
      powerSupply: '1500V DC Rijit Katener',
      automationLevel: 'GoA4 (Tam Otomasyon, Sürücüsüz Metro)',
      features: [
        'Tam Otomatik Sürücüsüz GoA4 İşletim',
        'Tüm İstasyonlarda PAKS Peron Ayırıcı Emniyet Kapıları',
        'Bostancı İDO Feribot ve YHT Entegrasyonu',
        'Geniş Panoramik Ön ve Arka Camlar',
      ],
      description:
        "M8 hattında Hyundai Rotem üretimi tam sürücüsüz trenler 4'lü dizi halinde işletilmektedir. Marmara Denizi kıyısını Çekmeköy tepelerine bağlayan hat modern teknik donanıma sahiptir.",
    },
    operatingSpecs: {
      travelTime: '25 Dakika',
      headway: '5.5 Dakika',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi 24 Saat Gece Metrosu)',
      dailyRidership: '~120.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Bostancı', isInterchange: true, transfers: ['B1', 'YHT', 'İDO'] },
      { name: 'Emin Ali Paşa' },
      { name: 'Ayşekadın' },
      { name: 'Kozyatağı', isInterchange: true, transfers: ['M4'] },
      { name: 'Küçükbakkalköy' },
      { name: 'İçerenköy' },
      { name: 'Kayışdağı' },
      { name: 'Mevlana' },
      { name: 'İMES' },
      { name: 'MODOKO - KEYAP' },
      { name: 'Dudullu', isInterchange: true, transfers: ['M5'] },
      { name: 'Huzur' },
      { name: 'Parseller' },
    ],
    milestones: [
      { date: '6 Ocak 2023', year: 2023, month: 1, title: 'Hattın Tamamının Açılışı', description: 'Bostancı ile Parseller arasındaki 14.3 km’lik sürücüsüz hat hizmete girdi.', lengthKm: 14.3 },
    ],
    description:
      'M8 Bostancı – Parseller Metro Hattı, Anadolu Yakası’nı sahil kesiminden sanayi ve konut merkezlerine bağlayan dikey bir kuzey-güney aksıdır. Bostancı sahilinde Marmaray, YHT ve İDO deniz otobüsleriyle buluşur.',
    historicalContext:
      'Kadıköy, Maltepe, Ataşehir ve Ümraniye ilçelerini birbirine bağlayan hat, Dudullu ve Kozyatağı istasyonlarında M5 ve M4 hatlarına doğrudan aktarma olanağı sunar.',
  },

  'M9': {
    id: 'm9',
    code: 'M9',
    name: 'M9 Ataköy – Olimpiyat Metro Hattı',
    shortName: 'Ataköy – Olimpiyat',
    type: 'metro',
    color: '#FCD10D',
    openingDate: '29 Mayıs 2021',
    openingDateFormatted: '05-2021',
    lengthKm: 17.2,
    stationCount: 14,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M9 Ataköy istasyonu mermer peron salonu',
    vehiclesUsed: {
      model: 'Alstom Metropolis & Hyundai Rotem',
      manufacturer: 'Alstom Transport & Hyundai Rotem',
      formation: "4'lü Dizi (4 Vagon)",
      fleetSize: '48 Vagon',
      maxSpeed: '80 km/h',
      powerSupply: '750V DC 3. Ray',
      automationLevel: 'GoA2 (Yarı Otomatik, Sürücülü)',
      features: [
        'Ataköy Sahilinden Olimpiyat Stadyumuna Doğrudan Erişim',
        'Marmaray, Metrobüs, M1A ve M7 Aktarma Bağlantıları',
        'Geniş İklimlendirmeli Vagonlar',
      ],
      description:
        "M9 hattında Alstom ve Hyundai Rotem vagonları 4'lü dizi olarak çalışmaktadır. Hat kuzey-güney aksında İkitelli Sanayi bölgesinden Marmara Denizi sahiline kesintisiz ulaşım sağlar.",
    },
    operatingSpecs: {
      travelTime: '28 Dakika',
      headway: '5 Dakika',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi 24 Saat Gece Metrosu)',
      dailyRidership: '~180.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Ataköy', isInterchange: true, transfers: ['B1'] },
      { name: 'Yenibosna', isInterchange: true, transfers: ['M1A', 'Metrobüs'] },
      { name: 'Çobançeşme' },
      { name: '29 Ekim Cumhuriyet' },
      { name: 'Doğu Sanayi' },
      { name: 'Mimar Sinan' },
      { name: '15 Temmuz' },
      { name: 'Halkalı Caddesi' },
      { name: 'Atatürk Mahallesi', isInterchange: true, transfers: ['M7'] },
      { name: 'Bahariye' },
      { name: 'MASKO' },
      { name: 'İkitelli Sanayi', isInterchange: true, transfers: ['M3'] },
      { name: 'Ziya Gökalp Mahallesi' },
      { name: 'Olimpiyat', isInterchange: true, transfers: ['M3'] },
    ],
    milestones: [
      { date: '29 Mayıs 2021', year: 2021, month: 5, title: 'İkitelli Sanayi – Bahariye Açılışı', description: 'Hattın ilk etabı hizmete girdi.', lengthKm: 2.1 },
      { date: '18 Mart 2024', year: 2024, month: 3, title: 'Ataköy – Bahariye Etabı Açılışı', description: 'Ataköy sahiline kadar uzatılan hat Marmaray ve M1A ile birleşti.', lengthKm: 13.4 },
    ],
    description:
      'M9 Ataköy – Olimpiyat Metro Hattı, Bakırköy Ataköy sahilinden başlayıp Bahçelievler, Küçükçekmece ve Başakşehir ilçelerini birbirine bağlayan stratejik bir kuzey-güney transfer omurgasıdır.',
    historicalContext:
      'Önceden M3 şube hattı olarak çalışan İkitelli – Olimpiyat kesimi, güneye doğru inşa edilen tünellerle Ataköy’e bağlanarak bağımsız bir hat haline getirilmiştir.',
  },

  'M11': {
    id: 'm11',
    code: 'M11',
    name: 'M11 Gayrettepe – İstanbul Havalimanı – Arnavutköy Hastane Metro Hattı',
    shortName: 'Gayrettepe – Arnavutköy Hastane',
    type: 'metro',
    color: '#A1609B',
    openingDate: '22 Ocak 2023',
    openingDateFormatted: '01-2023',
    lengthKm: 51.5,
    stationCount: 10,
    authority: 'UAB',
    authorityFullName: 'Ulaştırma ve Altyapı Bakanlığı (TCDD Taşımacılık)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: '120 km/h hız yapabilen CRRC Zhuzhou M11 hızlı metro treni',
    vehiclesUsed: {
      model: 'CRRC Zhuzhou Locomotive EMU',
      manufacturer: 'CRRC Zhuzhou (Çin) & Türkiye Yerli Sanayi Ortaklığı',
      formation: "4'lü Dizi EMU Hızlı Metro Seti",
      fleetSize: '176 Vagon',
      maxSpeed: '120 km/h (Türkiye’nin En Hızlı Metrosu)',
      powerSupply: '25 kV AC 50 Hz Katener',
      automationLevel: 'GoA4 (Tam Otomasyon, Sürücüsüz Hızlı Metro)',
      features: [
        '120 km/h Maksimum Hız Kapasitesi',
        'Genişletilmiş Aerodinamik Burun Tasarımı',
        'Uçak Kabini Konforunda Ergonomik Koltuklar ve Geniş Bagaj Bölmeleri',
        'Tüm İstasyonlarda Tam Boy Peron Ayırıcı Kapı Sistemi (PAKS)',
        'Aselsan Yerli Sinyalizasyon Altyapısı',
      ],
      description:
        "M11 hattında Türkiye'nin en hızlı metrosu olan 120 km/h işletme hızına sahip CRRC Zhuzhou yapımı tren setleri hizmet vermektedir. Trenler 25 kV AC demiryolu gerilimiyle çalışmakta ve tam otomatik GoA4 sürücüsüz teknolojiye sahiptir.",
    },
    operatingSpecs: {
      travelTime: '30 Dakika (Gayrettepe - Havalimanı)',
      headway: '8 Dakika',
      operatingHours: '06:00 – 00:30',
      dailyRidership: '~150.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Gayrettepe', isInterchange: true, transfers: ['M2', 'Metrobüs'] },
      { name: 'Kâğıthane', isInterchange: true, transfers: ['M7'] },
      { name: 'Hasdal' },
      { name: 'Kemerburgaz' },
      { name: 'Göktürk' },
      { name: 'İhsaniye' },
      { name: 'İstanbul Havalimanı', isInterchange: true, transfers: ['YHT'] },
      { name: 'Kargo Terminali' },
      { name: 'Taşoluk' },
      { name: 'Arnavutköy Hastane' },
    ],
    milestones: [
      { date: '22 Ocak 2023', year: 2023, month: 1, title: 'Kâğıthane – Kargo Terminali Açılışı', description: 'Hattın ilk etabı 34 km olarak açıldı.', lengthKm: 34.0 },
      { date: '29 Ocak 2024', year: 2024, month: 1, title: 'Gayrettepe Uzatması', description: 'Gayrettepe istasyonu açılarak M2 ve Metrobüs entegrasyonu sağlandı.', lengthKm: 3.5 },
      { date: '19 Mart 2024', year: 2024, month: 3, title: 'Arnavutköy Hastane Etabı', description: 'Havalimanından Arnavutköy Hastane istasyonuna kadar olan kesim açıldı.', lengthKm: 14.0 },
    ],
    description:
      'M11 Gayrettepe – İstanbul Havalimanı – Arnavutköy Hastane Metro Hattı, Türkiye’nin en hızlı ve en uzun havalimanı metrosudur. Kent merkezini dünyanın en büyük aktarma merkezlerinden İstanbul Havalimanı’na sadece 30 dakikada bağlar.',
    historicalContext:
      'Ulaştırma ve Altyapı Bakanlığı tarafından inşa edilen hat, yüksek hızlı metro standartları, 120 km/h azami hızı ve Aselsan yerli sinyalizasyon altyapısıyla Türk mühendisliğinin simge projelerindendir.',
  },

  'B1': {
    id: 'b1',
    code: 'B1',
    name: 'Marmaray (B1) Halkalı – Gebze Banliyö Tren Hattı',
    shortName: 'Halkalı – Gebze (Marmaray)',
    type: 'rail',
    color: '#65656A',
    openingDate: '29 Ekim 2013',
    openingDateFormatted: '10-2013',
    lengthKm: 76.6,
    stationCount: 43,
    authority: 'UAB',
    authorityFullName: 'TCDD Taşımacılık / Ulaştırma ve Altyapı Bakanlığı',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Marmaray Boğaz Tüp Tüneli ve E32000 10 vagonlu tren seti',
    vehiclesUsed: {
      model: 'Hyundai Rotem TCDD E32000 Serisi EMU',
      manufacturer: 'Hyundai Rotem (Güney Kore / Adapazarı Eurotem)',
      formation: "10'lu ve 5'li Dizi (10 Vagon)",
      fleetSize: '440 Vagon (34 adet 10’lu dizi + 20 adet 5’li dizi)',
      maxSpeed: '100 km/h (Tüp Geçişte 80 km/h)',
      powerSupply: '25 kV AC 50 Hz Katener',
      automationLevel: 'GoA2 (CBTC & ERTMS Seviye 1 Yarı Otomatik)',
      features: [
        "10 Vagonlu Mega Dizi Boyutu (3.050 Yolcu / Tren)",
        'Su Altı Batırma Tüp Tünel Güvenlik Donanımı',
        'Yüksek Yolcu Konforu, Geniş Geçiş Alanları ve Klimalı Salonlar',
        'Yüksek Hızlı Tren (YHT) ve Uluslararası Yük Trenleri ile Ortak Hat Altyapısı',
      ],
      description:
        "Marmaray projesi için Hyundai Rotem tarafından üretilen E32000 elektrikli tren setleri Türkiye'nin en yüksek yolcu kapasiteli banliyö dizileridir. 10 vagonlu bir set tek seferde 3.050 yolcu taşıyabilmektedir.",
    },
    operatingSpecs: {
      travelTime: '115 Dakika (Halkalı - Gebze)',
      headway: '7.5 Dakika (Merkezde) / 15 Dakika (Uçlarda)',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi Gece Seferleri)',
      dailyRidership: '~650.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Halkalı', isInterchange: true, transfers: ['YHT', 'M11'] },
      { name: 'Mustafa Kemal' },
      { name: 'Küçükçekmece', isInterchange: true, transfers: ['Metrobüs'] },
      { name: 'Florya' },
      { name: 'Florya Akvaryum' },
      { name: 'Yeşilköy' },
      { name: 'Yeşilyurt' },
      { name: 'Ataköy', isInterchange: true, transfers: ['M9'] },
      { name: 'Bakırköy', isInterchange: true, transfers: ['M3', 'İDO', 'YHT'] },
      { name: 'Yenimahalle' },
      { name: 'Zeytinburnu' },
      { name: 'Kazlıçeşme', isInterchange: true, transfers: ['T6'] },
      { name: 'Yenikapı', isInterchange: true, transfers: ['M1A', 'M1B', 'M2', 'İDO'] },
      { name: 'Sirkeci', isInterchange: true, transfers: ['T1', 'T6', 'Şehir Hatları'] },
      { name: 'Üsküdar', isInterchange: true, transfers: ['M5', 'Şehir Hatları'] },
      { name: 'Ayrılık Çeşmesi', isInterchange: true, transfers: ['M4'] },
      { name: 'Söğütlüçeşme', isInterchange: true, transfers: ['Metrobüs', 'YHT'] },
      { name: 'Feneryolu' },
      { name: 'Göztepe' },
      { name: 'Erenköy' },
      { name: 'Suadiye' },
      { name: 'Bostancı', isInterchange: true, transfers: ['M8', 'YHT', 'İDO'] },
      { name: 'Küçükyalı' },
      { name: 'İdealtepe' },
      { name: 'Süreyya Plajı' },
      { name: 'Maltepe' },
      { name: 'Cevizli' },
      { name: 'Atalar' },
      { name: 'Başak' },
      { name: 'Kartal' },
      { name: 'Yunus' },
      { name: 'Pendik', isInterchange: true, transfers: ['YHT', 'İDO'] },
      { name: 'Kaynarca' },
      { name: 'Tersane' },
      { name: 'Güzelyalı' },
      { name: 'Aydıntepe' },
      { name: 'İçmeler', isInterchange: true, transfers: ['M4'] },
      { name: 'Tuzla' },
      { name: 'Çayırova' },
      { name: 'Fatih - Gebze Teknik Üniv.' },
      { name: 'Osmangazi' },
      { name: 'Darıca' },
      { name: 'Gebze', isInterchange: true, transfers: ['YHT'] },
    ],
    milestones: [
      { date: '29 Ekim 2013', year: 2013, month: 10, title: 'Boğaz Tüp Tüneli Açılışı (Yüzyılın Projesi)', description: 'Kazlıçeşme – Ayrılık Çeşmesi arasındaki batırma tüp tünel açıldı.', lengthKm: 13.6 },
      { date: '12 Mart 2019', year: 2019, month: 3, title: 'Halkalı – Gebze Kesintisiz Açılışı', description: 'Tüm yüzey banliyö hatları modernize edilerek kesintisiz 76.6 km açıldı.', lengthKm: 63.0 },
    ],
    description:
      'Marmaray (B1), Asya ile Avrupa kıtalarını İstanbul Boğazı’nın altından geçen batırma tüp tünelle birbirine bağlayan dünyanın en derin su altı demiryolu projesidir. Halkalı’dan Gebze’ye 76.6 kilometrelik güzergahta kesintisiz banliyö, YHT ve uluslararası yük taşımacılığı sunar.',
    historicalContext:
      'Tarihi temelleri 1860 yılında Sultan Abdülmecid’in "Tünel-i Bahri" fikrine dayanan proje, 2013 yılında Cumhuriyetin 90. yılında hizmete girerek kıtaları demir ağlarla birleştirmiştir.',
  },

  'T1': {
    id: 't1',
    code: 'T1',
    name: 'T1 Kabataş – Bağcılar Tramvay Hattı',
    shortName: 'Kabataş – Bağcılar',
    type: 'tram',
    color: '#004B86',
    openingDate: '13 Haziran 1992',
    openingDateFormatted: '06-1992',
    lengthKm: 19.3,
    stationCount: 31,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Sultanahmet Meydanı’nda seyreden Alstom Citadis T1 tramvayı',
    vehiclesUsed: {
      model: 'Alstom Citadis 301 & Bombardier Flexity Swift A32',
      manufacturer: 'Alstom (Fransa) & Bombardier Transportation (Kanada / Almanya)',
      formation: "%100 Alçak Tabanlı Çiftli Dizi Tramvay",
      fleetSize: '92 Tramvay (37 Alstom Citadis + 55 Bombardier Flexity)',
      maxSpeed: '70 km/h (Cadde Paylaşımlı Kesimde 30-50 km/h)',
      powerSupply: '750V DC Havai Katener',
      automationLevel: 'Cadde Üstü Sürücülü Görerek Sürüş',
      features: [
        '%100 Alçak Tabanlı Düz Ayak Hızlı Yolcu İniş-Binişi',
        'Tarihi Yarımada Kültürel Mirasına Uyumlu Tasarım',
        'Tam Klimalı Çiftli Dizi (Coupled) Yüksek Kapasite',
        'Geniş Panoramik Şehir Seyir Pencereleri',
      ],
      description:
        "T1 hattında yüksek yolcu talebini karşılamak üzere çiftli dizi olarak birbirine bağlı Bombardier Flexity Swift ve Alstom Citadis tramvayları hizmet vermektedir. Alçak tabanlı araçlar tarihi yarımadada hızlı yolcu sirkülasyonu sağlar.",
    },
    operatingSpecs: {
      travelTime: '65 Dakika',
      headway: '2 - 2.5 Dakika (Pik Saatte)',
      operatingHours: '06:00 – 00:00',
      dailyRidership: '~450.000 Yolcu / Gün (Dünyanın En Yoğun Tramvayı)',
    },
    stations: [
      { name: 'Kabataş', isInterchange: true, transfers: ['F1', 'Şehir Hatları', 'İDO'] },
      { name: 'Fındıklı - Mimar Sinan Üniv.' },
      { name: 'Tophane' },
      { name: 'Karaköy', isInterchange: true, transfers: ['F2', 'Şehir Hatları'] },
      { name: 'Eminönü', isInterchange: true, transfers: ['T5', 'Şehir Hatları'] },
      { name: 'Sirkeci', isInterchange: true, transfers: ['B1', 'T6'] },
      { name: 'Gülhane' },
      { name: 'Sultanahmet' },
      { name: 'Çemberlitaş' },
      { name: 'Beyazıt - Kapalıçarşı' },
      { name: 'Laleli - İstanbul Üniv.', isInterchange: true, transfers: ['M2'] },
      { name: 'Aksaray', isInterchange: true, transfers: ['M1A', 'M1B'] },
      { name: 'Yusufpaşa' },
      { name: 'Haseki' },
      { name: 'Fındıkzade' },
      { name: 'Çapa - Şehremini' },
      { name: 'Pazartekke' },
      { name: 'Topkapı', isInterchange: true, transfers: ['T4', 'Metrobüs'] },
      { name: 'Cevizlibağ', isInterchange: true, transfers: ['Metrobüs'] },
      { name: 'Merkez Efendi' },
      { name: 'Seyitnizam - Akşemsettin' },
      { name: 'Mithatpaşa' },
      { name: 'Zeytinburnu', isInterchange: true, transfers: ['M1A', 'Metrobüs'] },
      { name: 'Mehmet Akif' },
      { name: 'Merter Tekstil Merkezi' },
      { name: 'Güngören' },
      { name: 'Akıncılar' },
      { name: 'Soğanlı' },
      { name: 'Yavuz Selim' },
      { name: 'Güneştepe' },
      { name: 'Bağcılar Meydan', isInterchange: true, transfers: ['M1B'] },
    ],
    milestones: [
      { date: '13 Haziran 1992', year: 1992, month: 6, title: 'Beyazıt – Yusufpaşa Açılışı', description: 'T1 modern tramvayının ilk etabı açıldı.', lengthKm: 3.5 },
      { date: '10 Temmuz 1992', year: 1992, month: 7, title: 'Sirkeci ve Topkapı Uzatmaları', description: 'Hat Sirkeci ve Topkapı’ya ulaştı.' },
      { date: '29 Haziran 2006', year: 2006, month: 6, title: 'Kabataş Bağlantısı', description: 'Galata Köprüsü üzerinden Kabataş ve F1 Fünikülerine bağlandı.' },
      { date: '3 Şubat 2011', year: 2011, month: 2, title: 'Zeytinburnu – Bağcılar Birleşmesi', description: 'T2 tramvayı T1 hattıyla birleştirilerek kesintisiz Kabataş – Bağcılar hattı oldu.', lengthKm: 19.3 },
    ],
    description:
      'T1 Kabataş – Bağcılar Tramvay Hattı, Tarihi Yarımada’nın kalbinden geçen, günlük 450.000’i aşan yolcu sayısıyla dünyanın en yoğun modern tramvay hatlarından biridir. Sultanahmet, Ayasofya, Kapalıçarşı ve Galata Köprüsü gibi turistik ve tarihi sembolleri bağlar.',
    historicalContext:
      '1960’larda sökülen eski tramvayların ardından 1992’de modern teknolojiyle yeniden hayat bulan hat, tarihi dokuya zarar vermeden yüksek kapasiteli kentsel ulaşım sağlamanın dünyadaki en başarılı örneklerindendir.',
  },

  'T4': {
    id: 't4',
    code: 'T4',
    name: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    shortName: 'Topkapı – Mescid-i Selam',
    type: 'tram',
    color: '#FF7E42',
    openingDate: '17 Eylül 2007',
    openingDateFormatted: '09-2007',
    lengthKm: 15.3,
    stationCount: 22,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'T4 yerli tramvay aracı (RTE) Topkapı peronunda',
    vehiclesUsed: {
      model: 'Hyundai Rotem & Duewag & Yerli Tramvay (RTE)',
      manufacturer: 'Hyundai Rotem, Duewag (Almanya) & Metro İstanbul (RTE)',
      formation: "3'lü Yüksek Tabanlı Dizi (3 Vagon)",
      fleetSize: '83 Vagon',
      maxSpeed: '80 km/h',
      powerSupply: '750V DC Havai Katener',
      automationLevel: 'Cadde / Tünel Korumalı Sürücülü İşletme',
      features: [
        'Metro İstanbul Mühendislerince Üretilen Yerli Tramvay (RTE)',
        'Yarı Metro (Stadtbahn / Hafif Raylı Sistem) Standartları',
        '7 Adet Yeraltı Tünel İstasyonu',
      ],
      description:
        "T4 hattında yüksek tabanlı hafif metro araçları hizmet vermektedir. Filoda Hyundai Rotem, modernize Duewag vagonları ve İstanbul Büyükşehir Belediyesi'nin kendi atölyelerinde tasarlayıp ürettiği yerli tramvay (RTE) araçları yer almaktadır.",
    },
    operatingSpecs: {
      travelTime: '45 Dakika',
      headway: '3 Dakika',
      operatingHours: '06:00 – 00:00',
      dailyRidership: '~220.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Topkapı', isInterchange: true, transfers: ['T1', 'Metrobüs'] },
      { name: 'Fetihkapı' },
      { name: 'Vatan', isInterchange: true, transfers: ['M1A', 'M1B'] },
      { name: 'Edirnekapı', isInterchange: true, transfers: ['Metrobüs'] },
      { name: 'Şehitlik' },
      { name: 'Demirkapı' },
      { name: 'Topçular' },
      { name: 'Rami' },
      { name: 'Uluyol - Bereç' },
      { name: 'Sağmalcılar Lisesi' },
      { name: 'Ali Fuat Başgil' },
      { name: 'Taşköprü' },
      { name: 'Karadeniz Mahallesi', isInterchange: true, transfers: ['M7'] },
      { name: 'Kiptaş - Venedik' },
      { name: 'Cumhuriyet Mahallesi' },
      { name: '50. Yıl - Baştabya' },
      { name: 'Hacı Şükrü' },
      { name: 'Yeni Mahalle' },
      { name: 'Sultançiftliği' },
      { name: 'Cebeci' },
      { name: 'Sultangazi' },
      { name: 'Mescid-i Selam' },
    ],
    milestones: [
      { date: '17 Eylül 2007', year: 2007, month: 9, title: 'Edirnekapı – Mescid-i Selam Açılışı', description: 'Hattın ilk etabı açıldı.', lengthKm: 12.4 },
      { date: '18 Mart 2009', year: 2009, month: 3, title: 'Topkapı Uzatması', description: 'Edirnekapı – Topkapı kesimi tamamlandı.', lengthKm: 2.9 },
    ],
    description:
      'T4 Topkapı – Mescid-i Selam Tramvay Hattı, Sultangazi, Gaziosmanpaşa ve Bayrampaşa ilçelerini D100 (Topkapı) ve Vatan Caddesi’ne bağlayan yüksek kapasiteli bir hafif raylı sistem omurgasıdır.',
    historicalContext:
      'Yolunun önemli bir kısmı yer altı tünellerinden geçen hat, cadde trafiğinden tamamen izole koridoruyla tipik bir hafif metro (Stadtbahn) niteliğindedir.',
  },

  'T5': {
    id: 't5',
    code: 'T5',
    name: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    shortName: 'Eminönü – Alibeyköy Cep Otogarı',
    type: 'tram',
    color: '#7B72B2',
    openingDate: '1 Ocak 2021',
    openingDateFormatted: '01-2021',
    lengthKm: 10.1,
    stationCount: 14,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Haliç kıyısında katanersiz seyreden Durmazlar Panorama tramvayı',
    vehiclesUsed: {
      model: 'Durmazlar Panorama (Yerli Üretim)',
      manufacturer: 'Durmazlar Raylı Sistemler (Bursa / Türkiye)',
      formation: "%100 Alçak Tabanlı Çift Yönlü Tramvay",
      fleetSize: '30 Tramvay',
      maxSpeed: '70 km/h',
      powerSupply: '750V DC APS (Kataraksız Zeminden Besleme)',
      automationLevel: 'Cadde / Park İçi Sürücülü',
      features: [
        'Türkiye’nin İlk Kataraksız (Kablo Direksiz) Tramvayı',
        'Zeminden İndüksiyonlu Kesintisiz Enerji (Alstom APS Sistemi)',
        'Haliç Silüetini Bozmayan Görsel Çevre Dostu Tasarım',
        'Bursa Üretimi %100 Alçak Tabanlı Yerli Gövde',
      ],
      description:
        "T5 hattında Bursa'da Durmazlar firması tarafından üretilen yerli Panorama tramvayları çalışmaktadır. Haliç'in tarihi manzarasını kablo direkleriyle bozmamak için Türkiye'de ilk kez yerden gömülü 3. ray üzerinden APS enerji besleme teknolojisi kullanılmıştır.",
    },
    operatingSpecs: {
      travelTime: '35 Dakika',
      headway: '5 Dakika',
      operatingHours: '06:00 – 00:00',
      dailyRidership: '~75.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Eminönü', isInterchange: true, transfers: ['T1', 'Şehir Hatları'] },
      { name: 'Küçükpazar', isInterchange: true, transfers: ['M2'] },
      { name: 'Cibali' },
      { name: 'Fener' },
      { name: 'Balat' },
      { name: 'Ayvansaray', isInterchange: true, transfers: ['Metrobüs'] },
      { name: 'Feshane' },
      { name: 'Eyüpsultan Teleferik', isInterchange: true, transfers: ['TF2'] },
      { name: 'Eyüpsultan Devlet Hastanesi' },
      { name: 'Silahtarağa Mahallesi' },
      { name: 'Üniversite (Bezmiâlem)' },
      { name: 'Alibeyköy Merkez' },
      { name: 'Alibeyköy Metro', isInterchange: true, transfers: ['M7'] },
      { name: 'Alibeyköy Cep Otogarı' },
    ],
    milestones: [
      { date: '1 Ocak 2021', year: 2021, month: 1, title: 'Cibali – Alibeyköy Cep Otogarı Açılışı', description: 'Hattın ilk etabı 12 istasyonla hizmete girdi.', lengthKm: 8.8 },
      { date: '30 Ağustos 2023', year: 2023, month: 8, title: 'Eminönü Uzatması Açılışı', description: 'Eminönü Meydanı ve Küçükpazar istasyonları açılarak M2 ve T1 aktarması tamamlandı.', lengthKm: 1.3 },
    ],
    description:
      'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı, Haliç’in tarihi kıyı şeridi boyunca yeşil çim hat üzerinden süzülen çevre dostu bir tramvaydır. Fener, Balat, Eyüpsultan gibi tarihi ve turistik merkezleri birbirine bağlar.',
    historicalContext:
      'Haliç zeminindeki sıvılaşma riskine karşı 100 metreyi aşan çakma kazıklar üzerine inşa edilen hat, üstten elektrik teli bulunmayan estetik APS sistemiyle modern şehircilik ödülleri kazanmıştır.',
  },

  'T6': {
    id: 't6',
    code: 'T6',
    name: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem ve Yaya Odaklı Ulaşım Hattı',
    shortName: 'Sirkeci – Kazlıçeşme',
    type: 'rail',
    color: '#E77C7C',
    openingDate: '26 Şubat 2024',
    openingDateFormatted: '02-2024',
    lengthKm: 8.3,
    stationCount: 8,
    authority: 'UAB',
    authorityFullName: 'TCDD Taşımacılık / Ulaştırma ve Altyapı Bakanlığı',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Sirkeci Garı peronunda T6 elektrikli banliyö treni',
    vehiclesUsed: {
      model: 'TCDD Modernize E8000 / E14000 Serisi Elektrikli Tren Seti',
      manufacturer: 'TÜVASAŞ / TCDD Modernizasyon',
      formation: "3'lü Dizi Elektrikli Banliyö Treni",
      fleetSize: '18 Vagon',
      maxSpeed: '80 km/h',
      powerSupply: '25 kV AC 50 Hz Katener',
      automationLevel: 'Makinist Denetimli Konvansiyonel Banliyö',
      features: [
        'Tarihi Sirkeci Garı ile Yedikule Sur Kapıları Arasında Nostaljik Sahil Seyri',
        'Bisiklet ve Yaya Yolu ile Bütünleşik Yeşil Hat Konsepti',
        'Klimalı ve Modernize Edilmiş Ferah Yolcu Bölümleri',
      ],
      description:
        "T6 hattında TCDD tarafından kapsamlı şekilde modernize edilen elektrikli banliyö tren setleri hizmet vermektedir. Hat boyunca tren yoluyla yan yana uzanan bisiklet ve yürüyüş yolları yer almaktadır.",
    },
    operatingSpecs: {
      travelTime: '20 Dakika',
      headway: '20 Dakika',
      operatingHours: '06:00 – 23:00',
      dailyRidership: '~30.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Sirkeci', isInterchange: true, transfers: ['B1', 'T1', 'Şehir Hatları'] },
      { name: 'Cankurtaran' },
      { name: 'Kumkapı' },
      { name: 'Yenikapı', isInterchange: true, transfers: ['M1A', 'M1B', 'M2', 'B1', 'İDO'] },
      { name: 'Cerrahpaşa' },
      { name: 'Kocamustafapaşa' },
      { name: 'Yedikule' },
      { name: 'Kazlıçeşme', isInterchange: true, transfers: ['B1'] },
    ],
    milestones: [
      { date: '26 Şubat 2024', year: 2024, month: 2, title: 'Hattın Açılışı', description: 'Tarihi banliyö demiryolu koridoru modernize edilerek 8.3 km olarak yeniden hizmete girdi.', lengthKm: 8.3 },
    ],
    description:
      'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı, Tarihi Sirkeci Garı’ndan başlayarak Marmara Denizi surları boyunca Kazlıçeşme’ye uzanan tarihi banliyö hattının yeniden hayat bulmuş halidir.',
    historicalContext:
      '1870’li yıllarda Rumeli Demiryolu’nun parçası olarak açılan ve Marmaray inşaatıyla kapanan tarihi hat, 2024 yılında Ulaştırma Bakanlığı tarafından raylı sistem, bisiklet ve tematik yürüyüş yolu olarak restore edilmiştir.',
  },

  'F1': {
    id: 'f1',
    code: 'F1',
    name: 'F1 Taksim – Kabataş Füniküler Hattı',
    shortName: 'Taksim – Kabataş',
    type: 'funicular',
    color: '#7A745A',
    openingDate: '29 Haziran 2006',
    openingDateFormatted: '06-2006',
    lengthKm: 0.6,
    stationCount: 2,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'F1 Taksim Füniküler peronu ve Doppelmayr çekme halatlı vagonları',
    vehiclesUsed: {
      model: 'Doppelmayr Çekme Halatlı Çift Yönlü Karşılıklı Füniküler',
      manufacturer: 'Doppelmayr / Garaventa (Avusturya / İsviçre)',
      formation: "2 Vagonlu Dizi (Karşılaşmalı 2 Tren)",
      fleetSize: '4 Vagon (2 Dizi)',
      maxSpeed: '36 km/h (10 m/s)',
      powerSupply: 'Sabit Çekme Motoru (750 kW Elektrik Motoru)',
      automationLevel: 'Tam Otomatik Halat Çekişli Sistem',
      features: [
        'Eğim: %22.1 Maksimum Dik Eğim',
        'Tek Seferde 375 Yolcu Taşıma Kapasitesi',
        '2.5 Dakikada Denizden Tepeye Kesintisiz Ulaşım',
      ],
      description:
        "F1 hattında Avusturyalı Doppelmayr firması tarafından üretilen çekme halatlı füniküler sistemi çalışmaktadır. Karşılıklı iki tren eğimli tünelde birbirini dengeleyerek tek rayda hareket eder, ortadaki karşılaşma makasında kesişir.",
    },
    operatingSpecs: {
      travelTime: '2.5 Dakika',
      headway: '3 Dakika',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi Gece Seferleri)',
      dailyRidership: '~60.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Taksim', isInterchange: true, transfers: ['M2', 'T2'] },
      { name: 'Kabataş', isInterchange: true, transfers: ['T1', 'Şehir Hatları', 'İDO'] },
    ],
    milestones: [
      { date: '29 Haziran 2006', year: 2006, month: 6, title: 'Hattın Açılışı', description: 'Taksim Meydanı ile Kabataş İskelesi arasında yer altı füniküleri hizmete girdi.', lengthKm: 0.6 },
    ],
    description:
      'F1 Taksim – Kabataş Füniküler Hattı, Boğaziçi sahilindeki Kabataş vapur ve tramvay istasyonunu İstanbul’un kalbi Taksim Meydanı’na 2.5 dakikada bağlayan dik eğimli bir yer altı füniküleridir.',
    historicalContext:
      'Kabataş ile Taksim arasındaki 73 metrelik kot farkını aşmak için inşa edilen modern füniküler, deniz ulaşımıyla metro ağını mükemmel şekilde entegre etmiştir.',
  },

  'F2': {
    id: 'f2',
    code: 'F2',
    name: 'F2 Karaköy – Beyoğlu Tarihi Tünel Füniküler Hattı',
    shortName: 'Karaköy – Beyoğlu (Tarihi Tünel)',
    type: 'funicular',
    color: '#7A745A',
    openingDate: '17 Ocak 1875',
    openingDateFormatted: '01-1875',
    lengthKm: 0.57,
    stationCount: 2,
    authority: 'İBB',
    authorityFullName: 'İETT (İstanbul Elektrik Tramvay ve Tünel İşletmeleri)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&auto=format&fit=crop&q=80',
    imageCaption: '1875 yapımı Tarihi Tünel vagonu ve ahşap nostaljik peronu',
    vehiclesUsed: {
      model: 'Schneider Electric / Voith Tahrikli Lastik Tekerlekli Vagon',
      manufacturer: 'Tarihi Fransız Gavand Tasarımı / Modernize Elektrikli Tahrik',
      formation: 'Tek Vagonlu Karşılıklı Çift Tren',
      fleetSize: '2 Vagon',
      maxSpeed: '25 km/h',
      powerSupply: 'Elektrik Motorlu Çekme Çelik Halat (Tarihte Buhar Makinesi)',
      automationLevel: 'Operatör Kontrollü Otomatik Halat Çekişi',
      features: [
        'Dünyanın En Eski 2. Yeraltı Toplu Taşıma Sistemi',
        'Kıta Avrupası’nın İlk Yeraltı Metrosu',
        'Eğim: %15 Dik Eğim, 90 Saniyede Seyahat',
      ],
      description:
        "Tarihi Tünel vagonları lastik tekerlekler üzerinde çelik halat çekişiyle çalışır. 1875 yılında buhar gücüyle çalışan sistem 1971 yılında elektrikli sisteme dönüştürülmüş ve modern güvenlik sistemleriyle donatılmıştır.",
    },
    operatingSpecs: {
      travelTime: '90 Saniye (1.5 Dakika)',
      headway: '3.5 Dakika',
      operatingHours: '07:00 – 22:45',
      dailyRidership: '~15.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Karaköy', isInterchange: true, transfers: ['T1', 'Şehir Hatları'] },
      { name: 'Beyoğlu', isInterchange: true, transfers: ['M2', 'T2'] },
    ],
    milestones: [
      { date: '17 Ocak 1875', year: 1875, month: 1, title: 'Tarihi Tünel Açılışı', description: 'Londra’dan sonra dünyanın 2. yeraltı demiryolu olarak Osmanlı İmparatorluğu döneminde açıldı.', lengthKm: 0.57 },
      { date: '1971', year: 1971, month: 1, title: 'Elektrikli Sisteme Geçiş', description: 'Buharlı sistemden modern elektrikli tahrikli çelik halat sistemine dönüştürüldü.' },
    ],
    description:
      'F2 Karaköy – Beyoğlu Tarihi Tünel Hattı, 17 Ocak 1875’te açılan, Londra Metrosu’ndan sonra dünyanın en eski ikinci yeraltı toplu taşıma sistemi ve Kıta Avrupası’nın ilk metrosudur. Karaköy ile İstiklal Caddesi arasındaki dik yokuşu 90 saniyede aşar.',
    historicalContext:
      'Fransız mühendis Eugène-Henri Gavand’ın projesiyle Sultan Abdülaziz döneminde inşa edilen Tünel, kentin 150 yıllık canlı ulaşım mirasıdır.',
  },

  'F3': {
    id: 'f3',
    code: 'F3',
    name: 'F3 Seyrantepe – Vadistanbul Füniküler Hattı (Havaray)',
    shortName: 'Seyrantepe – Vadistanbul',
    type: 'funicular',
    color: '#7A745A',
    openingDate: '29 Ekim 2017',
    openingDateFormatted: '10-2017',
    lengthKm: 0.75,
    stationCount: 2,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB) & Vadistanbul Ortaklığı',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Viyadük üzerinde seyreden F3 Cable Liner havaray aracı',
    vehiclesUsed: {
      model: 'Doppelmayr Cable Liner Shuttle',
      manufacturer: 'Doppelmayr Cable Car (Avusturya)',
      formation: "2 Vagonlu Dizi (Çift Kabin)",
      fleetSize: '2 Vagon (1 Set)',
      maxSpeed: '45 km/h',
      powerSupply: 'Sabit Çekme Halatı ve Doğru Akım Motoru',
      automationLevel: 'GoA4 Tam Otomasyon, Sürücüsüz',
      features: [
        'Türkiye’nin İlk Özel Sektör Yatırımlı Raylı Sistemi',
        'Viyadük Üzerinde Çelik Kiriş Hattında Havaray Seyri',
        'Seyrantepe M2 Metrosuna Doğrudan Bağlantı',
      ],
      description:
        "F3 hattında Avusturyalı Doppelmayr firması tarafından üretilen Cable Liner vagonları hizmet verir. Viyadük üzerindeki çelik hat üzerinde çekme halatıyla sürücüsüz olarak hareket eder.",
    },
    operatingSpecs: {
      travelTime: '2.6 Dakika',
      headway: '7 Dakika',
      operatingHours: '06:00 – 00:00',
      dailyRidership: '~25.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Seyrantepe', isInterchange: true, transfers: ['M2'] },
      { name: 'Vadistanbul', isInterchange: false },
    ],
    milestones: [
      { date: '29 Ekim 2017', year: 2017, month: 10, title: 'Hattın Açılışı', description: 'Seyrantepe ile Vadistanbul Alışveriş Merkezi arasında viyadüklü füniküler açıldı.', lengthKm: 0.75 },
    ],
    description:
      'F3 Seyrantepe – Vadistanbul Füniküler Hattı (Havaray), Seyrantepe metro istasyonunu Cendere Vadisi’ndeki Vadistanbul Alışveriş ve Yaşam Merkezi’ne bağlayan viyadük tipi füniküler hattıdır.',
    historicalContext:
      'Kamu-özel sektör işbirliğiyle inşa edilen hat, tamamlandıktan sonra işletmesi Metro İstanbul’a devredilerek İstanbul kart entegrasyonuna dahil edilmiştir.',
  },

  'F4': {
    id: 'f4',
    code: 'F4',
    name: 'F4 Boğaziçi Üniversitesi/Hisarüstü – Aşiyan Füniküler Hattı',
    shortName: 'Boğaziçi Üniv./Hisarüstü – Aşiyan',
    type: 'funicular',
    color: '#7A745A',
    openingDate: '28 Ekim 2022',
    openingDateFormatted: '10-2022',
    lengthKm: 0.8,
    stationCount: 2,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'F4 Aşiyan sahil istasyonu ve füniküler vagonu',
    vehiclesUsed: {
      model: 'Garaventa / Doppelmayr Çekme Halatlı Füniküler',
      manufacturer: 'Garaventa (İsviçre) / Doppelmayr (Avusturya)',
      formation: 'Tek Hat Karşılaşmalı 2 Vagon',
      fleetSize: '2 Vagon',
      maxSpeed: '36 km/h (10 m/s)',
      powerSupply: 'Sabit Çekme Motoru',
      automationLevel: 'Tam Otomatik Halat Çekişli Sürücüsüz Sistem',
      features: [
        'Eğim: %13 Eğimli Yeraltı Tüneli',
        '200 Yolcu Kapasiteli Geniş Panoramik Vagonlar',
        'Boğaz Vapurları ile Entegre Aşiyan Sahil İskelesi',
      ],
      description:
        "F4 hattında İsviçreli Garaventa / Doppelmayr yapımı çekme halatlı vagonlar hizmet verir. Eğimli tünelde karşılıklı iki vagon ortadaki makas bölgesinde karşılaşarak hareket eder.",
    },
    operatingSpecs: {
      travelTime: '2.5 Dakika',
      headway: '5 Dakika',
      operatingHours: '06:00 – 00:00 (Cuma & Cumartesi Gece Seferleri)',
      dailyRidership: '~30.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Boğaziçi Üniversitesi - Hisarüstü', isInterchange: true, transfers: ['M6'] },
      { name: 'Aşiyan', isInterchange: true, transfers: ['Şehir Hatları'] },
    ],
    milestones: [
      { date: '28 Ekim 2022', year: 2022, month: 10, title: 'Hattın Açılışı', description: 'Hisarüstü ile Aşiyan Sahili arasındaki yeraltı füniküleri açıldı.', lengthKm: 0.8 },
    ],
    description:
      'F4 Boğaziçi Üniversitesi/Hisarüstü – Aşiyan Füniküler Hattı, Hisarüstü tepesindeki M6 metro terminalini Boğaziçi kıyısındaki Aşiyan Parkı ve vapur iskelesine bağlayan konforlu bir yeraltı füniküleridir.',
    historicalContext:
      'Boğaz sahilindeki Aşiyan ile tepeyi birbirine bağlayarak Asya Yakası’na geçecek yolcular için vapur-metro entegrasyonunu sağlamıştır.',
  },

  'T2': {
    id: 't2',
    code: 'T2',
    name: 'T2 Taksim – Tünel Nostaljik Tramvay Hattı',
    shortName: 'Taksim – Tünel (Nostaljik)',
    type: 'tram',
    color: '#90ABA0',
    openingDate: '29 Aralık 1990',
    openingDateFormatted: '12-1990',
    lengthKm: 1.6,
    stationCount: 5,
    authority: 'İBB',
    authorityFullName: 'İETT (İstanbul Elektrik Tramvay ve Tünel İşletmeleri)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İstiklal Caddesi üzerinde seyreden kırmızı T2 nostaljik tramvayı',
    vehiclesUsed: {
      model: 'İETT Tarihi Nostaljik Tramvay Vagonu (AEG / Siemens)',
      manufacturer: 'AEG & Siemens (1914 / 1928 orijinal elektrikli vagonlar)',
      formation: 'Tekli Motorlu Vagon + Römork Vagon',
      fleetSize: '5 Vagon',
      maxSpeed: '25 km/h',
      powerSupply: '600V DC Havai Katener',
      automationLevel: 'Vatmanlı Manuel Sürüş',
      features: [
        '1000 mm (Metrik Hat) Dar Demiryolu Hat Aralığı',
        'Tarihi Ahşap İç Tasarım ve Pirinç Detaylar',
        'İstiklal Caddesi Yayalaştırılmış Yolu Üzerinde Seyir',
      ],
      description:
        "T2 hattında 1914 ve 1928 yıllarında İstanbul'da hizmete girmiş orijinal elektrikli tramvay vagonları modernize edilerek çalıştırılmaktadır. Karakteristik kırmızı-beyaz rengi ve çan sesiyle İstanbul'un en bilinen simgelerindendir.",
    },
    operatingSpecs: {
      travelTime: '15 Dakika',
      headway: '10 - 15 Dakika',
      operatingHours: '07:00 – 22:30',
      dailyRidership: '~10.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Taksim Meydanı', isInterchange: true, transfers: ['M2', 'F1'] },
      { name: 'Hüseyin Ağa Camii' },
      { name: 'Galatasaray Lisesi' },
      { name: 'Odakule' },
      { name: 'Tünel Meydanı', isInterchange: true, transfers: ['M2', 'F2'] },
    ],
    milestones: [
      { date: '29 Aralık 1990', year: 1990, month: 12, title: 'Hattın Yeniden Açılışı', description: '1961’de kapatılan tramvay İstiklal Caddesi’nde nostaljik olarak yeniden canlandırıldı.', lengthKm: 1.6 },
    ],
    description:
      'T2 Taksim – Tünel Nostaljik Tramvayı, Taksim Meydanı’ndan Tünel Meydanı’na kadar İstiklal Caddesi boyunca uzanan, dünyanın en fotoğraflanan tarihi tramvay hatlarından biridir.',
    historicalContext:
      '1961 yılında kaldırılan tramvayların ardından 1990’da caddenin yayalaştırılmasıyla sembolik olarak yeniden hizmete alınmış ve büyük beğeni kazanmıştır.',
  },

  'T3': {
    id: 't3',
    code: 'T3',
    name: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    shortName: 'Kadıköy – Moda (Nostaljik)',
    type: 'tram',
    color: '#99562F',
    openingDate: '1 Kasım 2003',
    openingDateFormatted: '11-2003',
    lengthKm: 2.6,
    stationCount: 10,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'active',
    imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Moda Caddesi’nde seyreden T3 dairesel nostaljik tramvayı',
    vehiclesUsed: {
      model: 'Gothawagen T57 & Rekowagen',
      manufacturer: 'Gothaer Waggonfabrik (Almanya)',
      formation: 'Tekli Motorlu Tramvay Vagonu',
      fleetSize: '8 Vagon',
      maxSpeed: '25 km/h',
      powerSupply: '600V DC Havai Katener',
      automationLevel: 'Vatmanlı Manuel Sürüş',
      features: [
        'Dairesel Tek Yönlü Ring İşletme',
        '1000 mm (Metrik Hat) Dar Hat Altyapısı',
        'Moda Burnu Tarihi Sokakları Boyunca Turistik Seyir',
      ],
      description:
        "T3 hattında Almanya'dan temin edilen ve restore edilen tarihi Gothawagen T57 ve Rekowagen tramvay vagonları hizmet verir.",
    },
    operatingSpecs: {
      travelTime: '20 Dakika',
      headway: '10 Dakika',
      operatingHours: '07:00 – 21:00',
      dailyRidership: '~8.000 Yolcu / Gün',
    },
    stations: [
      { name: 'İskele Camii', isInterchange: true, transfers: ['M4', 'Şehir Hatları'] },
      { name: 'Çarşı' },
      { name: 'Altıyol' },
      { name: 'Bahariye' },
      { name: 'Kilise' },
      { name: 'Moda İlkokulu' },
      { name: 'Moda Caddesi' },
      { name: 'Rıza Paşa' },
      { name: 'Mühürdar' },
      { name: 'Damga Sokak' },
    ],
    milestones: [
      { date: '1 Kasım 2003', year: 2003, month: 11, title: 'Hattın Açılışı', description: 'Kadıköy – Moda arasında tek yönlü dairesel tramvay ringi açıldı.', lengthKm: 2.6 },
    ],
    description:
      'T3 Kadıköy – Moda Tramvay Hattı, Kadıköy Meydanı’ndan başlayarak Bahariye Caddesi ve Moda Caddesi üzerinden dairesel bir rotada çalışan nostaljik tramvaydır.',
    historicalContext:
      'Kadıköy’ün köklü tramvay geleneğini yaşatmak amacıyla 2003 yılında hizmete açılmıştır.',
  },
  'M12': {
    id: 'm12',
    code: 'M12',
    name: 'M12 60. Yıl Parkı – Kazım Karabekir Metro Hattı',
    shortName: 'Göztepe – Ataşehir – Kazım Karabekir',
    type: 'metro',
    color: '#CAD300',
    openingDate: '19 Aralık 2026 (Hedef)',
    openingDateFormatted: '12-2026',
    lengthKm: 13.0,
    stationCount: 11,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'construction',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M12 hattı tam otomatik sürücüsüz metro tren seti',
    vehiclesUsed: {
      model: 'Hyundai Rotem Sürücüsüz Metro Trenleri',
      manufacturer: 'Hyundai Rotem (Güney Kore / Türkiye)',
      formation: "4'lü Dizi (4 Vagon)",
      fleetSize: '40 Vagon (10 Dizi)',
      maxSpeed: '80 km/h',
      powerSupply: '1500V DC Rijit Katener',
      automationLevel: 'GoA4 (Tam Otomasyon, Sürücüsüz)',
      features: [
        'Tam Otomatik Sürücüsüz (GoA4) İşletim',
        'Tam Boy Peron Ayırıcı Kapı Sistemi (PAKS) Uyumlu',
        'Rejeneratif Frenleme ile Yüksek Enerji Tasarrufu',
        'Genişletilmiş Engelli ve Bisiklet Alanları',
        'Akıllı Yolcu Sayma ve Dinamik Bilgilendirme Ekranları',
      ],
      description:
        "M12 hattında Hyundai Rotem tarafından üretilen tam otomatik sürücüsüz (GoA4) metro trenleri hizmet verecektir. Araçlar 4'lü dizi halinde çalışacak ve İstanbul Finans Merkezi'nin yoğun yolcu trafiğini taşıyacaktır.",
    },
    operatingSpecs: {
      travelTime: '21 Dakika',
      headway: '3.5 Dakika',
      operatingHours: '06:00 – 00:00 (Hafta sonu Gece Metrosu Planlanmaktadır)',
      dailyRidership: '~400.000 Yolcu / Gün (Hedeflenen)',
    },
    stations: [
      { name: '60. Yıl Parkı' },
      { name: 'Tütüncü Mehmet Efendi', isInterchange: true, transfers: ['B1'] },
      { name: 'Sahrayıcedid' },
      { name: 'Yenisahra', isInterchange: true, transfers: ['M4'] },
      { name: 'Ataşehir' },
      { name: 'Finans Merkezi' },
      { name: 'Site' },
      { name: 'Atakent' },
      { name: 'Çarşı', isInterchange: true, transfers: ['M5'] },
      { name: 'SBÜ Hastanesi' },
      { name: 'Kazım Karabekir' },
    ],
    milestones: [
      { date: '19 Aralık 2026', year: 2026, month: 12, title: 'Hattın Açılışı (Hedef)', description: '60. Yıl Parkı ile Kazım Karabekir arasındaki 13 km ve 11 istasyonluk hat hizmete açılacaktır.', lengthKm: 13.0 },
    ],
    description:
      'M12 Göztepe – Ataşehir – Kazım Karabekir Metro Hattı, Kadıköy sahilini Finans Merkezi üzerinden Ümraniye’ye bağlayan 13 km uzunluğunda tam otomatik sürücüsüz metro hattıdır.',
    historicalContext:
      'İnşaatına başlandıktan sonra finansman sorunları nedeniyle duran hat, 2019 yılında sağlanan dış finansmanla yeniden başlatılmış ve %94’ün üzerinde fiziksel gerçekleşmeye ulaşmıştır.',
  },
  'M10': {
    id: 'm10',
    code: 'M10',
    name: 'M10 Pendik Merkez – Fevzi Çakmak – Sabiha Gökçen Havalimanı Metro Hattı',
    shortName: 'Pendik Merkez – Sabiha Gökçen Havalimanı',
    type: 'metro',
    color: '#00A651',
    openingDate: '2026 (Hedef)',
    openingDateFormatted: '2026',
    lengthKm: 9.6,
    stationCount: 6,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'construction',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M10 Pendik Merkez metro araçları',
    vehiclesUsed: {
      model: 'Bozankaya / CRRC Sürücüsüz Metro Trenleri',
      manufacturer: 'Bozankaya & CRRC Ortaklığı',
      formation: "4'lü Dizi (4 Vagon)",
      fleetSize: '40 Vagon',
      maxSpeed: '80 km/h',
      powerSupply: '750V DC Rijit Katener',
      automationLevel: 'GoA4 (Tam Otomasyon, Sürücüsüz)',
      features: [
        'Tam Otomatik Sürücüsüz İşletme (GoA4)',
        'Havalimanı Yolcuları İçin Geniş Bagaj Rafları',
        'Peron Ayırıcı Kapı Sistemleri (PAKS) Entegrasyonu',
        'Akıllı İklimlendirme ve Enerji Geri Kazanımı',
      ],
      description:
        "M10 hattı, Pendik sahil ve YHT garından Sabiha Gökçen Havalimanı'na doğrudan aktarmasız erişim sağlayacak modern ve tam otomatik sürücüsüz metro trenleriyle işletilecektir.",
    },
    operatingSpecs: {
      travelTime: '15 Dakika',
      headway: '4 Dakika',
      operatingHours: '06:00 – 00:00',
      dailyRidership: '~250.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Pendik Merkez', isInterchange: true, transfers: ['B1', 'YHT', 'İDO'] },
      { name: 'Kaynarca Merkez', isInterchange: true, transfers: ['M4'] },
      { name: 'Fevzi Çakmak - Hastane', isInterchange: true, transfers: ['M4'] },
      { name: 'Yayalar - Şeyhli', isInterchange: true, transfers: ['M4'] },
      { name: 'Kurtköy', isInterchange: true, transfers: ['M4'] },
      { name: 'Sabiha Gökçen Havalimanı', isInterchange: true, transfers: ['M4'] },
    ],
    milestones: [
      { date: '2026', year: 2026, month: 12, title: 'Hattın Açılışı', description: 'Pendik sahil ve YHT istasyonunu Sabiha Gökçen Havalimanı ile buluşturan kesim açılacaktır.', lengthKm: 9.6 },
    ],
    description:
      'M10 Pendik Merkez – Sabiha Gökçen Havalimanı Metro Hattı, Marmaray, YHT ve İDO hatlarını havalimanına doğrudan bağlayan kilit bir transfer omurgasıdır.',
    historicalContext:
      'Fevzi Çakmak ile Sabiha Gökçen arasındaki ortak kesim 2022 yılında açılmış olup, Pendik Merkez – Kaynarca etabının yapımı sürmektedir.',
  },
  'M13': {
    id: 'm13',
    code: 'M13',
    name: 'M13 Söğütlüçeşme – Emek – Yenidoğan Metro Hattı',
    shortName: 'Emek – Yenidoğan',
    type: 'metro',
    color: '#8F3985',
    openingDate: '2028 (Hedef)',
    openingDateFormatted: '2028',
    lengthKm: 21.8,
    stationCount: 14,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'construction',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M13 sürücüsüz metro treni',
    vehiclesUsed: {
      model: 'Tam Otomatik Sürücüsüz Metro Araçları',
      manufacturer: 'Metro İstanbul Şartnamesine Uygun Konsorsiyum',
      formation: "4'lü Dizi",
      fleetSize: '48 Vagon',
      maxSpeed: '80 km/h',
      powerSupply: '1500V DC Rijit Katener',
      automationLevel: 'GoA4 (Tam Otomasyon, Sürücüsüz)',
      features: [
        'Tam Otomatik Sürücüsüz (GoA4) İşletim',
        'PAKS Peron Ayırıcı Kapı Uyumluluğu',
        'Modern Yolcu Bilgilendirme ve Güvenlik Sistemleri',
      ],
      description:
        "M13 hattında 4'lü dizi tam otomatik sürücüsüz araçlar hizmet verecektir. 1. etapta Emek ile Yenidoğan arasındaki 6 istasyon açılacaktır.",
    },
    operatingSpecs: {
      travelTime: '14 Dakika (1. Etap)',
      headway: '5 Dakika',
      operatingHours: '06:00 – 00:00',
      dailyRidership: '~150.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Emek' },
      { name: 'Sarıgazi', isInterchange: true, transfers: ['M5'] },
      { name: 'Aydınlar' },
      { name: 'Cumhuriyet' },
      { name: 'Soğukpınar' },
      { name: 'Yenidoğan' },
    ],
    milestones: [
      { date: '2028', year: 2028, month: 12, title: '1. Etap Açılışı', description: 'Emek – Yenidoğan kesimi (6.9 km) hizmete açılacaktır.', lengthKm: 6.9 },
    ],
    description:
      'M13 hattı, Sancaktepe, Çekmeköy ve Ümraniye ilçelerinden geçerek Kadıköy Söğütlüçeşme’ye kadar uzanacak önemli bir doğu-batı bağlantısıdır.',
    historicalContext:
      'Önceden iptal edilen hat projesi güncellenerek Emek – Yenidoğan etabında inşaat çalışmalarına yeniden başlanmıştır.',
  },
  'T7': {
    id: 't7',
    code: 'T7',
    name: 'T7 Feshane – Bayrampaşa Tramvay Hattı',
    shortName: 'Feshane – Bayrampaşa',
    type: 'tram',
    color: '#E67E22',
    openingDate: '2026 (Hedef)',
    openingDateFormatted: '2026',
    lengthKm: 3.2,
    stationCount: 5,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'construction',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'T7 modern alçak tabanlı tramvay aracı',
    vehiclesUsed: {
      model: 'Alçak Tabanlı Modern Tramvay Araçları',
      manufacturer: 'Bozankaya / Alstom',
      formation: 'Modüler Mafsallı Tramvay Dizisi',
      fleetSize: '16 Vagon',
      maxSpeed: '70 km/h',
      powerSupply: '750V DC Katener / Havai Hat',
      automationLevel: 'GoA1 (Sürücülü İşletme)',
      features: [
        '%100 Alçak Tabanlı Engelsiz Biniş',
        'Geniş Panoramik Camlar ve Tam Klimalı Kompartıman',
        'Yaya ve Bisiklet Dostu Tasarım',
      ],
      description:
        'T7 hattında modern %100 alçak tabanlı tramvay araçları hizmet verecek olup Haliç kıyısındaki T5 tramvayı ile entegre olacaktır.',
    },
    operatingSpecs: {
      travelTime: '10 Dakika',
      headway: '5 Dakika',
      operatingHours: '06:00 – 00:00',
      dailyRidership: '~60.000 Yolcu / Gün',
    },
    stations: [
      { name: 'Feshane', isInterchange: true, transfers: ['T5'] },
      { name: 'Eyüpsultan' },
      { name: 'Demirkapı' },
      { name: 'Bayrampaşa Meydan' },
      { name: 'Bayrampaşa - Maltepe', isInterchange: true, transfers: ['M1A', 'M1B'] },
    ],
    milestones: [
      { date: '2026', year: 2026, month: 12, title: 'Hattın Açılışı', description: 'Feshane ile Bayrampaşa arasındaki 3.2 km tramvay güzergahı açılacaktır.', lengthKm: 3.2 },
    ],
    description:
      'T7 Feshane – Bayrampaşa Tramvay Hattı, Haliç sahilindeki T5 hattını Eyüpsultan ve Bayrampaşa merkezine bağlayarak M1 metrosuyla entegrasyon sağlar.',
    historicalContext:
      'Haliç ile Bayrampaşa arasındaki tarihi aksı modern raylı sistemle buluşturmak amacıyla projelendirilmiş ve inşaatına başlanmıştır.',
  },
  'M34': {
    id: 'm34',
    code: 'M34',
    name: 'M34 (HIZRAY) Beylikdüzü – Mecidiyeköy – Sabiha Gökçen Ekspres Metrosu',
    shortName: 'HIZRAY Ekspres Metrosu',
    type: 'metro',
    color: '#E74C3C',
    openingDate: '2030+ (Proje)',
    openingDateFormatted: '2030',
    lengthKm: 74.5,
    stationCount: 13,
    authority: 'İBB',
    authorityFullName: 'Metro İstanbul (İBB)',
    status: 'planned',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'HIZRAY 160 km/h yüksek hızlı metro treni',
    vehiclesUsed: {
      model: '160 km/h Hızlı Ekspres Metro Tren Seti (EMU)',
      manufacturer: 'Yüksek Hızlı Demiryolu Konsorsiyumu',
      formation: "8'li Dizi (8 Vagon)",
      fleetSize: '160 Vagon',
      maxSpeed: '160 km/h',
      powerSupply: '25 kV 50 Hz AC Havai Katener',
      automationLevel: 'GoA4 (Tam Otomasyon, Sürücüsüz Yüksek Hızlı İşletme)',
      features: [
        '160 km/s Tasarım ve İşletme Hızı',
        'Aerodinamik Basınç Sızdırmaz Boji ve Gövde',
        'Tam Otomatik Sürücüsüz (GoA4) Yüksek Hızlı Sinyalizasyon',
        'Havalimanı ve Şehirlerarası Yolcular İçin Geniş Konfor Alanları',
      ],
      description:
        'HIZRAY trenleri İstanbul’un doğusu ile batısını 50 dakikada birbirine bağlamak üzere 160 km/s hız yapabilen yüksek teknolojili ekspres metro dizilerinden oluşacaktır.',
    },
    operatingSpecs: {
      travelTime: '50 Dakika (Tüm Hat)',
      headway: '4 Dakika',
      operatingHours: '05:30 – 00:30',
      dailyRidership: '~1.500.000 Yolcu / Gün (Hedef)',
    },
    stations: [
      { name: 'Beylikdüzü', isInterchange: true, transfers: ['M20', 'Metrobüs'] },
      { name: 'Nazım Hikmet' },
      { name: 'Esenyurt Meydan' },
      { name: 'Halkalı', isInterchange: true, transfers: ['B1', 'M1B', 'M11', 'YHT'] },
      { name: 'Kirazlı', isInterchange: true, transfers: ['M1B', 'M3'] },
      { name: 'Otogar', isInterchange: true, transfers: ['M1A', 'M1B'] },
      { name: 'Kağıthane', isInterchange: true, transfers: ['M7', 'M11'] },
      { name: '4. Levent', isInterchange: true, transfers: ['M2'] },
      { name: 'Ümraniye', isInterchange: true, transfers: ['M5'] },
      { name: 'Finans Merkezi', isInterchange: true, transfers: ['M12'] },
      { name: 'Mevlana' },
      { name: 'Sancaktepe', isInterchange: true, transfers: ['M5'] },
      { name: 'Sabiha Gökçen Havalimanı', isInterchange: true, transfers: ['M4', 'M10'] },
    ],
    milestones: [
      { date: '2030+', year: 2030, month: 1, title: 'Proje Hedefi', description: 'İstanbul’u 12 raylı sistem hattıyla kesen 74.5 km ekspres omurga.', lengthKm: 74.5 },
    ],
    description:
      'HIZRAY, Beylikdüzü’nden Sabiha Gökçen Havalimanı’na kadar 13 istasyonla 12 ayrı raylı sistem hattına doğrudan aktarma sağlayan İstanbul’un en büyük vizyon projesidir.',
    historicalContext:
      'İstanbul Büyükşehir Belediyesi tarafından fizibilite ve avan projeleri tamamlanmış, uluslararası finansman görüşmeleri devam etmektedir.',
  },
};

/**
 * Searches and returns the curated LineDetail matching a given code, name, category, or ID.
 */
export function getLineDetail(identifier: string | undefined | null): LineDetail | null {
  if (!identifier) return null;
  const raw = identifier.trim();
  const upper = raw.toUpperCase();

  // 1. Direct code lookup
  for (const [key, line] of Object.entries(ISTANBUL_LINES_DATA)) {
    if (upper === key || upper === line.code.toUpperCase()) {
      return line;
    }
  }

  // 2. Specific multi-character matches first
  if (upper.includes('HIZRAY') || upper.includes('M34')) return ISTANBUL_LINES_DATA['M34'];
  if (upper.includes('M12')) return ISTANBUL_LINES_DATA['M12'];
  if (upper.includes('M10')) return ISTANBUL_LINES_DATA['M10'];
  if (upper.includes('M13')) return ISTANBUL_LINES_DATA['M13'];
  if (upper.includes('M11')) return ISTANBUL_LINES_DATA['M11'];
  if (upper.includes('M1A')) return ISTANBUL_LINES_DATA['M1A'];
  if (upper.includes('M1B')) return ISTANBUL_LINES_DATA['M1B'];
  if (upper.includes('M1') && !upper.includes('M11') && !upper.includes('M12') && !upper.includes('M13') && !upper.includes('M10')) {
    return ISTANBUL_LINES_DATA['M1A'];
  }
  if (upper.includes('M2')) return ISTANBUL_LINES_DATA['M2'];
  if (upper.includes('M3')) return ISTANBUL_LINES_DATA['M3'];
  if (upper.includes('M4')) return ISTANBUL_LINES_DATA['M4'];
  if (upper.includes('M5')) return ISTANBUL_LINES_DATA['M5'];
  if (upper.includes('M6')) return ISTANBUL_LINES_DATA['M6'];
  if (upper.includes('M7')) return ISTANBUL_LINES_DATA['M7'];
  if (upper.includes('M8')) return ISTANBUL_LINES_DATA['M8'];
  if (upper.includes('M9')) return ISTANBUL_LINES_DATA['M9'];
  if (upper.includes('MARMARAY') || upper.includes('B1')) return ISTANBUL_LINES_DATA['B1'];
  if (upper.includes('T7')) return ISTANBUL_LINES_DATA['T7'];
  if (upper.includes('T6')) return ISTANBUL_LINES_DATA['T6'];
  if (upper.includes('T5')) return ISTANBUL_LINES_DATA['T5'];
  if (upper.includes('T4')) return ISTANBUL_LINES_DATA['T4'];
  if (upper.includes('T3')) return ISTANBUL_LINES_DATA['T3'];
  if (upper.includes('T2')) return ISTANBUL_LINES_DATA['T2'];
  if (upper.includes('T1')) return ISTANBUL_LINES_DATA['T1'];
  if (upper.includes('F4')) return ISTANBUL_LINES_DATA['F4'];
  if (upper.includes('F3')) return ISTANBUL_LINES_DATA['F3'];
  if (upper.includes('F2') || upper.includes('TÜNEL')) return ISTANBUL_LINES_DATA['F2'];
  if (upper.includes('F1')) return ISTANBUL_LINES_DATA['F1'];

  // 3. Name or substring match
  for (const line of Object.values(ISTANBUL_LINES_DATA)) {
    if (
      upper.includes(line.name.toUpperCase()) ||
      upper.includes(line.shortName.toUpperCase()) ||
      raw.toLowerCase().includes(line.id.toLowerCase())
    ) {
      return line;
    }
  }

  return null;
}

