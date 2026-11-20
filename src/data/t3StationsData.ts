import { StationDetail } from './m1StationsData';

export const T3_STATIONS_DATA: Record<string, StationDetail> = {
  'iskele': {
    id: 't3-iskele',
    name: 'İskele Station',
    cleanName: 'İskele (Kadıköy Meydanı)',
    turkishName: 'İskele Tramvay İstasyonu',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Rıhtım / Meydan)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Tek Kenar Peron (Dairesel Hat Başlangıç/Bitiş)',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kad%C4%B1k%C3%B6y_%C4%B0skele_Tramvay_%C4%B0stasyonu_T3.jpg?width=1000',
    imageCaption: 'Kadıköy Rıhtım İskele Meydanı’ndaki T3 Nostaljik Tramvay durağı',
    description: 'Kadıköy Rıhtımı ve tarihi vapur iskelelerinin tam karşısında yer alan, T3 ring tramvayının ana hareket ve son varış durağıdır.',
    historicalContext: '1 Kasım 2003 tarihinde hizmete girmiştir. 1966 yılında kaldırılan tarihi Kadıköy tramvaylarının anısını yaşatmak ve bölge içi ulaşımı sağlamak amacıyla dairesel hat olarak yeniden inşa edilmiştir.',
    features: ['M4 Metrosuna Doğrudan Meydan Geçişi', 'Şehir Hatları & İDO İskeleleri Karşısı', 'Rıhtım Otobüs Peronları', 'Tarihi Nostaljik Tramvay Araçları'],
    interchanges: [
      {
        lineCode: 'M4',
        lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
        type: 'metro',
        color: '#E81E77',
        stationName: 'Kadıköy M4 İstasyonu',
        transferType: 'Cadde / Meydan Çıkışı',
        distance: '60m',
        walkingTime: '~1 dk yürüme',
        description: 'Meydandan doğrudan Kadıköy M4 metro istasyonunun yeraltı turnike holüne geçiş.'
      }
    ]
  },
  'iskele camii': {
    id: 't3-iskele-camii',
    name: 'İskele Camii Station',
    cleanName: 'İskele Camii',
    turkishName: 'İskele Camii Tramvay Durağı',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Osmanağa / Albay Faik Sözdener Cad.)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Hemzemin Kaldırım Durağı',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/T3_Kad%C4%B1k%C3%B6y-Moda_tramway_in_Istanbul.jpg?width=1000',
    imageCaption: 'T3 Nostaljik Tramvayı İskele Camii önünden geçerken',
    description: 'Tarihi Sultan III. Mustafa (İskele) Camii’nin hemen önünde yer alan, çarşı girişine hizmet veren duraktır.',
    historicalContext: '1 Kasım 2003’te açılan hatla birlikte tarihi dokuya saygılı kaldırım durağı olarak işletmeye alınmıştır.',
    features: ['Tarihi İskele Camii Yanı', 'Kadıköy Çarşı Girişi', 'Engelsiz Düşük Tabanlı Kaldırım'],
    interchanges: []
  },
  'çarşı': {
    id: 't3-carsi',
    name: 'Çarşı Station',
    cleanName: 'Çarşı (Kadıköy)',
    turkishName: 'Çarşı Tramvay Durağı',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Tarihi Balık Pazarı / Damga Sokak)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Hemzemin Kaldırım Durağı',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kad%C4%B1k%C3%B6y_Moda_Tramvay%C4%B1_%C3%87ar%C5%9F%C4%B1.jpg?width=1000',
    imageCaption: 'Kadıköy Tarihi Çarşısı içinden geçen T3 Tramvayı',
    description: 'Kadıköy Tarihi Balık Pazarı, baharatçılar ve kafelerin bulunduğu canlı yaya bölgesinin kalbinde yer alır.',
    historicalContext: '1 Kasım 2003 tarihinde açılmıştır. Kadıköy esnafının ve yayaların en yoğun kullandığı duraklardan biridir.',
    features: ['Tarihi Kadıköy Çarşısı', 'Balık Pazarı ve Restoranlar', 'Yayalaştırılmış Bölge'],
    interchanges: []
  },
  'altıyol': {
    id: 't3-altiyol',
    name: 'Altıyol Station',
    cleanName: 'Altıyol (Boğa Heykeli)',
    turkishName: 'Altıyol Tramvay Durağı',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Altıyol Meydanı)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Hemzemin Kaldırım Durağı',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alt%C4%B1yol_Bo%C4%9Fa_Heykeli_ve_T3_Tramvay%C4%B1.jpg?width=1000',
    imageCaption: 'Kadıköy simgesi Tarihi Boğa Heykeli ve Altıyol T3 durağı',
    description: 'Kadıköy’ün dünyaca ünlü Boğa Heykeli’nin bulunduğu Altıyol Meydanı’nda yer alan simge aktarma ve buluşma noktasıdır.',
    historicalContext: '1 Kasım 2003 tarihinde açılmıştır. Altı caddenin kesiştiği meydana adını veren en önemli arterdir.',
    features: ['Tarihi Kadıköy Boğa Heykeli', 'Bahariye Caddesi Girişi', 'Söğütlüçeşme Aksı'],
    interchanges: []
  },
  'bahariye': {
    id: 't3-bahariye',
    name: 'Bahariye Station',
    cleanName: 'Bahariye',
    turkishName: 'Bahariye Tramvay Durağı',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Bahariye Caddesi / Süreyya Operası)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Hemzemin Yayalaştırılmış Cadde Durağı',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/S%C3%BCreyya_Operas%C4%B1_ve_T3_Tramvay%C4%B1.jpg?width=1000',
    imageCaption: 'Tarihi Süreyya Operası önündeki Bahariye durağı',
    description: 'Yayalaştırılmış Bahariye Caddesi üzerinde, tarihi Süreyya Opera Binası’nın tam önünde yer alan kültür ve sanat durağıdır.',
    historicalContext: '1 Kasım 2003’te hizmete girmiştir. Bahariye Caddesi’nin nostaljik atmosferinin en belirleyici unsurudur.',
    features: ['Süreyya Operası Doğrudan Girişi', 'Yayalaştırılmış Alışveriş Caddesi', 'Kültür & Sanat Merkezleri'],
    interchanges: []
  },
  'kilise': {
    id: 't3-kilise',
    name: 'Kilise Station',
    cleanName: 'Kilise',
    turkishName: 'Kilise Tramvay Durağı',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Caferağa / Ayia Efimia)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Hemzemin Cadde Durağı',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/T3_tram_at_Bahariye.jpg?width=1000',
    imageCaption: 'Bahariye güzergahında tarihi kiliseler mevkii',
    description: 'Tarihi Ayia Efimia Rum Ortodoks Kilisesi ve Fransız Katolik Kilisesi yakınında konumlanan ara duraktır.',
    historicalContext: '1 Kasım 2003 tarihinde açılmıştır. Çok kültürlü Kadıköy mirasının merkezindedir.',
    features: ['Tarihi Kiliseler Bölgesi', 'Sakin Konut & Atölye Alanları', 'Dar Sokaklar'],
    interchanges: []
  },
  'moda ilkokulu': {
    id: 't3-moda-ilkokulu',
    name: 'Moda İlkokulu Station',
    cleanName: 'Moda İlkokulu',
    turkishName: 'Moda İlkokulu Tramvay Durağı',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Moda / Şair Nefi Sokak)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Hemzemin Cadde Durağı',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul_Moda_tram.jpg?width=1000',
    imageCaption: 'Tarihi Moda semtinin ağaçlıklı sokaklarında T3',
    description: 'Tarihi Moda İlkokulu ve Barış Manço Müzesi’ne yakın mesafede yer alan huzurlu semt durağıdır.',
    historicalContext: '1 Kasım 2003’te hizmete girdi. Moda yerleşiminin iç kesimlerine raylı ulaşım sağlar.',
    features: ['Tarihi Moda İlkokulu', 'Barış Manço Evi / Müzesi Erişimi', 'Asırlık Çınarlar Altında'],
    interchanges: []
  },
  'moda caddesi': {
    id: 't3-moda-caddesi',
    name: 'Moda Caddesi Station',
    cleanName: 'Moda Caddesi (Moda Burnu)',
    turkishName: 'Moda Caddesi Tramvay Durağı',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Moda Sahili / Parkı)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Hemzemin Cadde Durağı',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Moda_Caddesi_T3_Tramvay%C4%B1.jpg?width=1000',
    imageCaption: 'Moda Caddesi boyunca ilerleyen nostaljik vagon',
    description: 'Tarihi Moda İskelesi, Moda Parkı ve çay bahçelerine inen Moda Caddesi’nin güney ucundaki duraktır.',
    historicalContext: '1 Kasım 2003’te açılmıştır. Hattın güneydeki en uç noktası olup Moda Burnu’na en yakın duraktır.',
    features: ['Tarihi Moda İskelesi & Sahil Parkı', 'Moda Çay Bahçeleri', 'Deniz Manzaralı Yürüyüş Yolu'],
    interchanges: []
  },
  'rıza paşa': {
    id: 't3-riza-pasa',
    name: 'Rıza Paşa Station',
    cleanName: 'Rıza Paşa',
    turkishName: 'Rıza Paşa Tramvay Durağı',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Caferağa / Rıza Paşa Sokak)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Hemzemin Cadde Durağı',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kad%C4%B1k%C3%B6y_Moda_Heritage_Tram.jpg?width=1000',
    imageCaption: 'Rıza Paşa sokağında nostaljik tramvay seferi',
    description: 'Moda ile Mühürdar arasındaki tarihi köşkler ve konutların bulunduğu sakin sokakta yer alır.',
    historicalContext: '1 Kasım 2003’te hizmete açılmıştır.',
    features: ['Tarihi Moda Köşkleri', 'Sakin Mahalle Dokusu'],
    interchanges: []
  },
  'mühürdar': {
    id: 't3-muhurdar',
    name: 'Mühürdar Station',
    cleanName: 'Mühürdar',
    turkishName: 'Mühürdar Tramvay Durağı',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Mühürdar Caddesi)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Hemzemin Cadde Durağı',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/M%C3%BCh%C3%BCrdar_T3_Tramvay%C4%B1.jpg?width=1000',
    imageCaption: 'Mühürdar Caddesi’nden Rıhtım’a inen T3 tramvayı',
    description: 'Moda’dan Kadıköy İskelesi’ne iniş güzergahında tarihi Mühürdar Caddesi üzerinde yer alan duraktır.',
    historicalContext: '1 Kasım 2003 tarihinde açılmıştır. Özel Aramyan Uncuyan Lisesi ve Mühürdar yokuşuna hizmet verir.',
    features: ['Mühürdar Sahili Yakınlığı', 'Özel Aramyan Uncuyan Lisesi', 'Kafeler ve Kitapçılar'],
    interchanges: []
  },
  'damga sokak': {
    id: 't3-damga-sokak',
    name: 'Damga Sokak Station',
    cleanName: 'Damga Sokak',
    turkishName: 'Damga Sokak Tramvay Durağı',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Caferağa / Damga Sokak / İSKİ)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Hemzemin Cadde Durağı (Bakım Deposu Yanı)',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Damga Sokak T3 tramvay durağı ve nostaljik tramvay deposu',
    description: 'Hatta çalışan nostaljik tramvayların ringi tamamlayıp Kadıköy İskele başlangıç durağına dönmeden önce geçtikleri 11. ve son duraktır. İSKİ Kadıköy Şube Müdürlüğü ve T3 tramvay bakım-onarım deposu hemen yanı başında yer alır.',
    historicalContext: '1 Kasım 2003 tarihinde açılmıştır. Tramvayların ring tamamlama ve atölye/depo giriş-çıkış noktasıdır.',
    features: ['İSKİ Kadıköy Şube Müdürlüğü', 'T3 Nostaljik Tramvay Bakım ve Konaklama Deposu', 'Kadıköy Rıhtım İnişi'],
    interchanges: []
  },
  'damga': {
    id: 't3-damga-alias',
    name: 'Damga Sokak Station',
    cleanName: 'Damga Sokak',
    turkishName: 'Damga Sokak Tramvay Durağı',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Damga Sokak)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Hemzemin Cadde Durağı',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Damga Sokak Durağı',
    description: 'Damga Sokak tramvay durağıdır.',
    historicalContext: '1 Kasım 2003 tarihinde açılmıştır.',
    features: ['İSKİ Yanı', 'Tramvay Deposu'],
    interchanges: []
  },
  'iskele cami': {
    id: 't3-iskele-cami-alias',
    name: 'İskele Camii Station',
    cleanName: 'İskele Camii',
    turkishName: 'İskele Camii Tramvay Durağı',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Osmanağa)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Hemzemin Kaldırım Durağı',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/T3_Kad%C4%B1k%C3%B6y-Moda_tramway_in_Istanbul.jpg?width=1000',
    imageCaption: 'T3 Nostaljik Tramvayı İskele Camii önünde',
    description: 'Tarihi İskele Camii tramvay durağıdır.',
    historicalContext: '1 Kasım 2003 tarihinde açılmıştır.',
    features: ['Tarihi İskele Camii Yanı', 'Çarşı Girişi'],
    interchanges: []
  },
  'kadıköy': {
    id: 't3-kadikoy-alias',
    name: 'İskele Station',
    cleanName: 'İskele (Kadıköy Meydanı)',
    turkishName: 'İskele Tramvay İstasyonu',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Rıhtım / Meydan)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Tek Kenar Peron',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kad%C4%B1k%C3%B6y_%C4%B0skele_Tramvay_%C4%B0stasyonu_T3.jpg?width=1000',
    imageCaption: 'Kadıköy Rıhtım İskele Meydanı',
    description: 'Kadıköy İDO ve vapur iskeleleri önündeki ana T3 durağıdır.',
    historicalContext: '1 Kasım 2003 tarihinde açılmıştır.',
    features: ['M4 Metrosu Aktarması', 'Şehir Hatları & İDO'],
    interchanges: []
  },
  'kadikoy': {
    id: 't3-kadikoy-ascii-alias',
    name: 'İskele Station',
    cleanName: 'İskele (Kadıköy Meydanı)',
    turkishName: 'İskele Tramvay İstasyonu',
    lineCode: 'T3',
    lineName: 'T3 Kadıköy – Moda Nostaljik Tramvay Hattı',
    district: 'Kadıköy (Rıhtım / Meydan)',
    structureType: 'Hemzemin (Cadde Tramvayı)',
    platforms: 'Tek Kenar Peron',
    openedDate: '1 Kasım 2003',
    openedDateFormatted: '11-2003',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kad%C4%B1k%C3%B6y_%C4%B0skele_Tramvay_%C4%B0stasyonu_T3.jpg?width=1000',
    imageCaption: 'Kadıköy Rıhtım İskele Meydanı',
    description: 'Kadıköy İDO ve vapur iskeleleri önündeki ana T3 durağıdır.',
    historicalContext: '1 Kasım 2003 tarihinde açılmıştır.',
    features: ['M4 Metrosu Aktarması', 'Şehir Hatları & İDO'],
    interchanges: []
  }
};

/**
 * Normalizes station name to lookup in T3 station database.
 */
export function getT3StationDetail(rawName: string): StationDetail | null {
  if (!rawName) return null;
  const clean = rawName
    .replace(/\s+Station$/i, '')
    .replace(/\s+Durağı$/i, '')
    .replace(/\s+İstasyonu$/i, '')
    .replace(/\s*\(T3\)$/i, '')
    .replace(/\s*\(M4\)$/i, '')
    .trim()
    .toLowerCase();

  if (T3_STATIONS_DATA[clean]) {
    return T3_STATIONS_DATA[clean];
  }

  const normalize = (s: string) =>
    s
      .replace(/i̇/g, 'i')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ç/g, 'c')
      .replace(/ğ/g, 'g');

  const normalizedClean = normalize(clean);

  for (const [key, val] of Object.entries(T3_STATIONS_DATA)) {
    const normalizedKey = normalize(key);
    if (
      normalizedClean === normalizedKey ||
      normalizedClean.includes(normalizedKey) ||
      normalizedKey.includes(normalizedClean)
    ) {
      return val;
    }
  }

  if (normalizedClean.includes('damga')) return T3_STATIONS_DATA['damga sokak'];
  if (normalizedClean.includes('muhurdar')) return T3_STATIONS_DATA['mühürdar'];
  if (normalizedClean.includes('riza') || normalizedClean.includes('rıza')) return T3_STATIONS_DATA['rıza paşa'];
  if (normalizedClean.includes('moda caddesi') || normalizedClean.includes('moda burnu')) return T3_STATIONS_DATA['moda caddesi'];
  if (normalizedClean.includes('moda ilkokul')) return T3_STATIONS_DATA['moda ilkokulu'];
  if (normalizedClean.includes('kilise')) return T3_STATIONS_DATA['kilise'];
  if (normalizedClean.includes('bahariye')) return T3_STATIONS_DATA['bahariye'];
  if (normalizedClean.includes('altiyol') || normalizedClean.includes('altıyol')) return T3_STATIONS_DATA['altıyol'];
  if (normalizedClean.includes('carsi') || normalizedClean.includes('çarşı')) return T3_STATIONS_DATA['çarşı'];
  if (normalizedClean.includes('iskele cami')) return T3_STATIONS_DATA['iskele camii'];
  if (normalizedClean.includes('iskele') || normalizedClean.includes('kadikoy') || normalizedClean.includes('kadıköy')) return T3_STATIONS_DATA['iskele'];

  return null;
}
