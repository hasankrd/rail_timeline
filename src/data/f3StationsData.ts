import { StationDetail } from './m1StationsData';

export const F3_STATIONS_DATA: Record<string, StationDetail> = {
  'seyrantepe': {
    id: 'seyrantepe-f3',
    name: 'Seyrantepe Station (F3)',
    cleanName: 'Seyrantepe',
    turkishName: 'Seyrantepe Füniküler İstasyonu (F3)',
    lineCode: 'F3',
    lineName: 'F3 Seyrantepe – Vadistanbul Füniküler Hattı',
    district: 'Sarıyer (Huzur / Seyrantepe / Rams Park)',
    structureType: 'Viyadük (Yükseltilmiş Kapalı İstasyon)',
    platforms: '1 Ada Peron (2 Hat / Otomatik Peron Kapıları)',
    openedDate: '29 Ekim 2017',
    openedDateFormatted: '10-2017',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul_asv2021-11_img49_Vadistanbul_Havaray.jpg?width=1000',
    imageCaption: 'Seyrantepe F3 Füniküler viyadük istasyonu ve M2 metro aktarma bağlantısı',
    description: '29 Ekim 2017 Cumhuriyet Bayramı\'nda açılan F3 Seyrantepe–Vadistanbul Füniküler (Havaray) hattının doğu terminalidir. M2 Yenikapı–Hacıosman metrosunun Seyrantepe şubesi ve Rams Park (Ali Sami Yen Spor Kompleksi) ile doğrudan kapalı yaya köprüsüyle entegredir.',
    historicalContext: 'Türkiye\'de kamu-özel sektör işbirliğiyle (İBB ve Vadistanbul ortaklığı) hayata geçirilen ilk füniküler/havaray projesidir. Seyrantepe tepesinden Cendere Vadisi\'ne inen dik yamaçta viyadük üzerinde kesintisiz ve çevre dostu raylı erişim sağlar.',
    features: [
      'M2 Seyrantepe Metro İstasyonuna Doğrudan Kapalı Geçiş',
      'Rams Park (Stadyum) Yürüme Mesafesi',
      'Tam Otomatik Sürücüsüz Halatlı Sistem (Cable Liner)',
      'Otomatik Peron Ayırıcı Kapılar (PAKS)',
      'Viyadük Üstü Panoramik Manzara'
    ],
    interchanges: [
      {
        lineCode: 'M2',
        lineName: 'M2 Yenikapı – Hacıosman Metro Hattı (Seyrantepe Şubesi)',
        type: 'metro',
        color: '#059A4D',
        stationName: 'Seyrantepe Metro İstasyonu',
        transferType: 'Doğrudan Kapalı Bağlantı Köprüsü',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'İstasyon içinden hiçbir dış ortama çıkmadan M2 Seyrantepe metro istasyonuna ve maç günleri stadyum tüneline doğrudan geçiş.'
      }
    ]
  },
  'vadistanbul': {
    id: 'vadistanbul-f3',
    name: 'Vadistanbul Station (F3)',
    cleanName: 'Vadistanbul',
    turkishName: 'Vadistanbul Füniküler İstasyonu (F3)',
    lineCode: 'F3',
    lineName: 'F3 Seyrantepe – Vadistanbul Füniküler Hattı',
    district: 'Sarıyer (Ayazağa / Cendere Vadisi / Vadistanbul)',
    structureType: 'Viyadük / AVM 2. Katı Entegre İstasyon',
    platforms: '1 Ada Peron (2 Hat / Otomatik Peron Kapıları)',
    openedDate: '29 Ekim 2017',
    openedDateFormatted: '10-2017',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vadistanbul-Havaray.jpg?width=1000',
    imageCaption: 'Vadistanbul AVM teras katına doğrudan bağlanan fütüristik cam istasyon viyadüğü',
    description: 'Cendere Vadisi\'ndeki Vadistanbul Alışveriş ve Yaşam Merkezi\'nin 2. katına doğrudan viyadükle giren batı terminalidir. Cendere Caddesi, Ayazağa ofis kuleleri ve yaşam merkezine hizmet verir.',
    historicalContext: '29 Ekim 2017\'de hizmete giren istasyon, mimari açıdan alışveriş merkezinin açık meydan ve yemek katına havadan giren özel viyadük tüneliyle Türkiye\'de bir ilktir. Cendere Vadisi\'ni tepedeki M2 metro omurgasına 2.6 dakikada bağlar.',
    features: [
      'Vadistanbul AVM 2. Katına Doğrudan İç Mekan Girişi',
      'Cendere Vadisi & Belgrad Ormanı Manzaralı Cam Köprü',
      'Doppelmayr Cable Liner Özel Kabin Teknolojisi',
      'Engelli Asansörleri & Yürüyen Merdivenler',
      'İstanbulkart Geçerli Toplu Taşıma Sistemi'
    ],
    interchanges: [
      {
        lineCode: 'İETT',
        lineName: 'Cendere Caddesi & Ayazağa İETT Otobüs Hatları',
        type: 'rail',
        color: '#7A745A',
        stationName: 'Vadistanbul Otobüs Durağı',
        transferType: 'Cadde / Meydan Çıkışı',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'AVM alt meydanından Maslak, Levent ve Kağıthane yönüne giden otobüs ve minibüslere aktarma.'
      }
    ]
  }
};

export function getF3StationDetail(stationName: string): StationDetail | null {
  if (!stationName) return null;
  const normalized = stationName
    .toLowerCase()
    .replace(/\s+station$/i, '')
    .replace(/\s+istasyonu$/i, '')
    .replace(/\s*\([^\)]*\)/g, '')
    .replace(/[–—]/g, '-')
    .trim();

  for (const [key, detail] of Object.entries(F3_STATIONS_DATA)) {
    if (normalized === key || normalized.includes(key) || key.includes(normalized)) {
      return detail;
    }
  }

  if (normalized.includes('seyrantepe')) {
    return F3_STATIONS_DATA['seyrantepe'];
  }
  if (normalized.includes('vadistanbul') || normalized.includes('vadi istanbul') || normalized.includes('vadi')) {
    return F3_STATIONS_DATA['vadistanbul'];
  }

  return null;
}
