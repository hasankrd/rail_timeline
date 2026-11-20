import { StationDetail } from './m1StationsData';

export const M8_STATIONS_DATA: Record<string, StationDetail> = {
  'bostancı': {
    id: 'bostanci-m8',
    name: 'Bostancı Station (M8)',
    cleanName: 'Bostancı',
    turkishName: 'Bostancı Metro İstasyonu (M8)',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Kadıköy (Bostancı Sahili / Bağdat Caddesi)',
    structureType: 'Yeraltı (Deniz Seviyesi / Marmaray & YHT Aktarma Kompleksi / 22m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Bostancı M8 İstasyonu bilet holü ve sahil aktarma meydanı',
    description: 'M8 hattının güney başlangıç terminalidir. Marmara Denizi sahilinde Marmaray banliyö trenleri, TCDD YHT yüksek hızlı trenleri ve Şehir Hatları / İDO Bostancı iskeleleri ile entegre çok modlu bir aktarma merkezidir.',
    historicalContext: '6 Ocak 2023 tarihinde CHP Genel Başkanı Kemal Kılıçdaroğlu, İYİ Parti Genel Başkanı Meral Akşener ve İBB Başkanı Ekrem İmamoğlu tarafından açılmıştır.',
    features: ['Marmaray ve YHT Garına Doğrudan Yeraltı Geçidi', 'Şehir Hatları ve İDO İskelesi Çıkışları', 'Bağdat Caddesi ve Bostancı Sahil Parkı Erişimi', 'PAKS Tam Boy Peron Ayırıcı Kapıları'],
    interchanges: [
      {
        lineCode: 'Marmaray',
        lineName: 'Marmaray (Halkalı – Gebze Banliyö Hattı)',
        type: 'rail',
        color: '#65656A',
        stationName: 'Bostancı Tren İstasyonu',
        transferType: 'Yeraltı Bağlantı Tüneli',
        distance: '60m',
        walkingTime: '~1 dk yürüme',
        description: 'Gebze, Pendik, Yenikapı ve Halkalı yönüne banliyö tren aktarması.'
      },
      {
        lineCode: 'YHT',
        lineName: 'TCDD Yüksek Hızlı Tren',
        type: 'rail',
        color: '#dc2626',
        stationName: 'Bostancı YHT Garı',
        transferType: 'Ortak İstasyon Meydanı',
        distance: '70m',
        walkingTime: '~1 dk yürüme',
        description: 'Ankara, Eskişehir ve Konya yönüne yüksek hızlı tren seferleri.'
      },
      {
        lineCode: 'Vapur',
        lineName: 'Şehir Hatları & İDO Deniz Otobüsleri',
        type: 'rail',
        color: '#0284c7',
        stationName: 'Bostancı İskelesi',
        transferType: 'Sahil Çıkışı',
        distance: '120m',
        walkingTime: '~2 dk yürüme',
        description: 'Adalar, Kadıköy ve Bakırköy yönüne deniz ulaşımı.'
      }
    ]
  },
  'emin ali paşa': {
    id: 'emin-ali-pasa-m8',
    name: 'Emin Ali Paşa Station',
    cleanName: 'Emin Ali Paşa',
    turkishName: 'Emin Ali Paşa Metro İstasyonu',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Kadıköy (Suadiye / Bostancı)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / 28m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Emin Ali Paşa Caddesi girişi ve peron alanı',
    description: 'Emin Ali Paşa Caddesi altında yer alır. Kadıköy’ün Suadiye ve Bostancı mahalleleri arasındaki yoğun yerleşim bölgesine hizmet verir.',
    historicalContext: '6 Ocak 2023 tarihinde hizmete açılmıştır.',
    features: ['Emin Ali Paşa Caddesi Çıkışları', 'Suadiye ve Bostancı Konut Alanları Erişimi', 'Engelli Asansörleri ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'ayşekadın': {
    id: 'aysekadin-m8',
    name: 'Ayşekadın Station',
    cleanName: 'Ayşekadın',
    turkishName: 'Ayşekadın Metro İstasyonu',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Kadıköy (19 Mayıs / Kozyatağı)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / 30m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Ayşekadın M8 İstasyonu peron holü',
    description: 'Şemsettin Günaltay Caddesi (Minibüs Caddesi) yakınında yer alır. Kadıköy 19 Mayıs Mahallesi ve Ayşekadın bölgesine raylı sistem erişimi sunar.',
    historicalContext: '6 Ocak 2023 tarihinde M8 hattının açılışıyla hizmete girmiştir.',
    features: ['Şemsettin Günaltay Caddesi Çıkışları', 'Kazasker ve Ethem Efendi Erişimi', 'PAKS Peron Kapıları'],
    interchanges: []
  },
  'kozyatağı': {
    id: 'kozyatagi-m8',
    name: 'Kozyatağı Station (M8)',
    cleanName: 'Kozyatağı',
    turkishName: 'Kozyatağı Metro İstasyonu (M8)',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Kadıköy / Ataşehir (Kozyatağı)',
    structureType: 'Yeraltı (M4 ile Entegre Çok Katlı Aktarma Düğümü / 32m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kozyatağı M4 ve M8 ortak aktarma istasyonu tünelleri',
    description: 'Anadolu Yakası’nın iki ana omurgası olan M4 Kadıköy–Sabiha Gökçen ve M8 Bostancı–Dudullu hatlarını birleştiren devasa yer altı aktarma merkezidir. City’s Kozyatağı AVM ve iş kuleleri bölgesine doğrudan yeraltı çıkışı sunar.',
    historicalContext: '6 Ocak 2023 tarihinde M8 etabının açılmasıyla iki hat arasında kesintisiz turnike içi aktarma başlamıştır.',
    features: ['M4 Metro Hattına Doğrudan Kesintisiz Yeraltı Aktarması', 'City’s Kozyatağı AVM Çıkışı', 'D.100 Karayolu Çift Yönlü Yeraltı Çıkışları', 'Genişletilmiş Turnike Holleri'],
    interchanges: [
      {
        lineCode: 'M4',
        lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
        type: 'metro',
        color: '#E81E77',
        stationName: 'Kozyatağı İstasyonu (M4)',
        transferType: 'Doğrudan Yeraltı Aktarma Tüneli',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'Kadıköy, Ayrılık Çeşmesi ve Sabiha Gökçen Havalimanı yönüne kesintisiz aktarma.'
      }
    ]
  },
  'küçükbakkalköy': {
    id: 'kucukbakkalkoy-m8',
    name: 'Küçükbakkalköy Station',
    cleanName: 'Küçükbakkalköy',
    turkishName: 'Küçükbakkalköy Metro İstasyonu',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Ataşehir (Küçükbakkalköy)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / 26m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Küçükbakkalköy İstasyonu giriş meydanı',
    description: 'Acıbadem Üniversitesi Kerem Aydınlar Kampüsü ve Küçükbakkalköy merkezine yürüme mesafesinde yer alır. Öğrenciler ve mahalle sakinleri için ana ulaşım noktasıdır.',
    historicalContext: '6 Ocak 2023 tarihinde açılmıştır.',
    features: ['Acıbadem Üniversitesi Doğrudan Yakınlığı', 'Küçükbakkalköy Çarşı Çıkışı', 'Engelli Asansörleri'],
    interchanges: []
  },
  'içerenköy': {
    id: 'icerenkoy-m8',
    name: 'İçerenköy Station',
    cleanName: 'İçerenköy',
    turkishName: 'İçerenköy Metro İstasyonu',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Ataşehir (İçerenköy)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / 28m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İçerenköy M8 İstasyonu bilet holü',
    description: 'Ataşehir İçerenköy Mahallesi yerleşimlerinin kalbinde yer alır. Bölgedeki sağlık merkezlerine ve konut sitelerine hizmet sağlar.',
    historicalContext: '6 Ocak 2023 tarihinde hizmete açılmıştır.',
    features: ['İçerenköy Merkez Çıkışı', 'PAKS Tam Boy Peron Ayırıcı Kapıları', 'Engelli Erişimi'],
    interchanges: []
  },
  'kayışdağı': {
    id: 'kayisdagi-m8',
    name: 'Kayışdağı Station',
    cleanName: 'Kayışdağı',
    turkishName: 'Kayışdağı Metro İstasyonu',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Ataşehir (Kayışdağı / İnönü)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / 34m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kayışdağı Metro İstasyonu turnike holü',
    description: 'Kayışdağı Caddesi üzerinde yer alır. Yeditepe Üniversitesi kampüsüne otobüs ve minibüslerle kolay aktarma imkanı tanır.',
    historicalContext: '6 Ocak 2023 tarihinde açılmıştır.',
    features: ['Kayışdağı Caddesi Çıkışları', 'Yeditepe Üniversitesi Aktarma Noktası', 'Engelli Asansörleri'],
    interchanges: []
  },
  'mevlana': {
    id: 'mevlana-m8',
    name: 'Mevlana Station',
    cleanName: 'Mevlana',
    turkishName: 'Mevlana Metro İstasyonu',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Ataşehir (Mevlana / Yeni Çamlıca)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / 30m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Mevlana M8 İstasyonu peron sahası',
    description: 'Ataşehir Mevlana Mahallesi ve Yeni Çamlıca bölgesinde yer alır. Necip Fazıl Bulvarı çıkışları ile çevre mahallelere raylı sistem bağlantısı sunar.',
    historicalContext: '6 Ocak 2023 tarihinde açılmıştır.',
    features: ['Necip Fazıl Bulvarı Çıkışı', 'Mevlana ve Yeni Çamlıca Erişimi', 'PAKS Peron Kapıları'],
    interchanges: []
  },
  'imes': {
    id: 'imes-m8',
    name: 'İMES Station',
    cleanName: 'İMES',
    turkishName: 'İMES Metro İstasyonu',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Ümraniye (İMES Organize Sanayi Bölgesi / DES)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / 28m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İMES Organize Sanayi Bölgesi metro çıkışı',
    description: 'İstanbul Madeni Eşya Sanatkarları Sanayi Sitesi (İMES) ve DES Sanayi Sitesi merkezinde yer alır. On binlerce sanayi ve üretim çalışanına doğrudan erişim sağlar.',
    historicalContext: '6 Ocak 2023 tarihinde açılmıştır.',
    features: ['İMES Sanayi Sitesi Doğrudan Çıkışı', 'DES ve KADOSAN Sanayi Siteleri Bağlantısı', 'Geniş Yürüyen Merdivenler'],
    interchanges: []
  },
  'modoko - keyap': {
    id: 'modoko-keyap-m8',
    name: 'MODOKO - KEYAP Station',
    cleanName: 'MODOKO - KEYAP',
    turkishName: 'MODOKO - KEYAP Metro İstasyonu',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Ümraniye (Modoko / KEYAP Ticaret Merkezi)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / 25m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Modoko Mobilyacılar Çarşısı önündeki M8 metro istasyonu',
    description: 'Türkiye’nin en köklü mobilya merkezi olan MODOKO Mobilyacılar Sitesi ve KEYAP Ticaret Merkezi önünde konumlanmıştır.',
    historicalContext: '6 Ocak 2023 tarihinde açılmıştır.',
    features: ['MODOKO Mobilya Sitesi Doğrudan Çıkışı', 'KEYAP Ticaret Merkezi Çıkışı', 'Engelli Erişimi'],
    interchanges: []
  },
  'dudullu': {
    id: 'dudullu-m8',
    name: 'Dudullu Station (M8)',
    cleanName: 'Dudullu',
    turkishName: 'Dudullu Metro İstasyonu (M8)',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Ümraniye (Dudullu Meydanı)',
    structureType: 'Yeraltı (M5 ile Entegre Çapraz Aktarma İstasyonu / 30m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Dudullu Meydanı M5 ve M8 ortak aktarma istasyonu',
    description: 'Anadolu Yakası’nın doğu-batı omurgası M5 Üsküdar–Çekmeköy ile kuzey-güney omurgası M8 Bostancı–Parseller hatlarının kesişim merkezidir. Turnike terk etmeden doğrudan yeraltı tüneliyle iki hat arasında aktarma sunar.',
    historicalContext: '6 Ocak 2023 tarihinde M8 peronlarının açılmasıyla tam kapasite aktarma merkezi haline gelmiştir.',
    features: ['M5 Üsküdar–Çekmeköy Hattına Kesintisiz Yeraltı Aktarması', 'Dudullu Meydan Çıkışı', 'İETT Otobüs ve Minibüs Aktarma Meydanı', 'Genişletilmiş Turnike Holü'],
    interchanges: [
      {
        lineCode: 'M5',
        lineName: 'M5 Üsküdar – Samandıra Merkez Metro Hattı',
        type: 'metro',
        color: '#683166',
        stationName: 'Dudullu İstasyonu (M5)',
        transferType: 'Doğrudan Yeraltı Aktarma Tüneli',
        distance: '35m',
        walkingTime: '~1 dk yürüme',
        description: 'Üsküdar, Altunizade ve Çekmeköy / Samandıra yönüne metro aktarması.'
      }
    ]
  },
  'huzur': {
    id: 'huzur-m8',
    name: 'Huzur Station',
    cleanName: 'Huzur',
    turkishName: 'Huzur Metro İstasyonu',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Ümraniye (Huzur Mahallesi / Adem Yavuz)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / 26m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Huzur M8 Metro İstasyonu peron holü',
    description: 'Ümraniye Huzur Mahallesi ve Adem Yavuz Caddesi yerleşimlerine hizmet verir. Şile Otoyolu’na yakın konumdadır.',
    historicalContext: '6 Ocak 2023 tarihinde hizmete açılmıştır.',
    features: ['Huzur Mahallesi Çıkışı', 'PAKS Tam Boy Peron Ayırıcı Kapıları', 'Engelli Erişimi'],
    interchanges: []
  },
  'parseller': {
    id: 'parseller-m8',
    name: 'Parseller Station',
    cleanName: 'Parseller',
    turkishName: 'Parseller Metro İstasyonu',
    lineCode: 'M8',
    lineName: 'M8 Bostancı – Dudullu – Parseller Metro Hattı',
    district: 'Ümraniye (Parseller / Kuran Kursu Caddesi)',
    structureType: 'Yeraltı (Kuzey Nihai Terminal & Depo Girişi / 24m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '6 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Parseller M8 nihai terminal istasyonu ve bilet gişeleri',
    description: 'M8 hattının kuzey nihai terminalidir. M8 depo sahası ve tren bakım atölyesi bağlantısına ev sahipliği yapar. Ümraniye Parseller Mahallesi sakinlerinin ana toplu taşıma merkezidir.',
    historicalContext: '6 Ocak 2023 tarihinde M8 hattının kuzey terminali olarak açılmıştır.',
    features: ['M8 Depo ve Bakım Sahası Bağlantısı', 'Kuran Kursu Caddesi Çıkışları', 'Geniş Peron Yapısı', 'Engelli Asansörleri ve Yürüyen Merdivenler'],
    interchanges: []
  }
};

export function getM8StationDetail(name: string): StationDetail | null {
  if (!name) return null;
  const clean = name
    .toLowerCase()
    .replace(/\s+station(\s*\([a-z0-9]+\))?$/i, '')
    .replace(/\s*\([a-z0-9]+\)$/i, '')
    .replace(/\s+istasyonu$/i, '')
    .replace(/i̇/g, 'i')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/[–—]/g, '-')
    .trim();

  for (const [key, detail] of Object.entries(M8_STATIONS_DATA)) {
    const normKey = key
      .toLowerCase()
      .replace(/i̇/g, 'i')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ç/g, 'c')
      .replace(/ğ/g, 'g')
      .replace(/[–—]/g, '-')
      .trim();

    if (clean === normKey || clean.includes(normKey) || normKey.includes(clean)) {
      return detail;
    }
  }

  if (clean.includes('bostanci')) return M8_STATIONS_DATA['bostancı'];
  if (clean.includes('emin ali') || clean.includes('eminalipasa')) return M8_STATIONS_DATA['emin ali paşa'];
  if (clean.includes('aysekadin')) return M8_STATIONS_DATA['ayşekadın'];
  if (clean.includes('kozyatagi')) return M8_STATIONS_DATA['kozyatağı'];
  if (clean.includes('kucukbakkalkoy') || clean.includes('küçükbakkalköy')) return M8_STATIONS_DATA['küçükbakkalköy'];
  if (clean.includes('icerenkoy') || clean.includes('içerenköy')) return M8_STATIONS_DATA['içerenköy'];
  if (clean.includes('kayisdagi') || clean.includes('kayışdağı')) return M8_STATIONS_DATA['kayışdağı'];
  if (clean.includes('mevlana')) return M8_STATIONS_DATA['mevlana'];
  if (clean.includes('imes')) return M8_STATIONS_DATA['imes'];
  if (clean.includes('modoko') || clean.includes('keyap')) return M8_STATIONS_DATA['modoko - keyap'];
  if (clean.includes('dudullu')) return M8_STATIONS_DATA['dudullu'];
  if (clean.includes('huzur')) return M8_STATIONS_DATA['huzur'];
  if (clean.includes('parseller')) return M8_STATIONS_DATA['parseller'];

  return null;
}
