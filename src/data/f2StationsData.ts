import { StationDetail } from './m1StationsData';

export const F2_STATIONS_DATA: Record<string, StationDetail> = {
  'karaköy': {
    id: 'karakoy-f2',
    name: 'Karaköy Station (F2)',
    cleanName: 'Karaköy',
    turkishName: 'Karaköy Tarihi Tünel İstasyonu (F2)',
    lineCode: 'F2',
    lineName: 'F2 Karaköy – Beyoğlu Tarihi Tünel Füniküler Hattı',
    district: 'Beyoğlu (Karaköy / Kemeraltı / Tersane Caddesi)',
    structureType: 'Tarihi Yeraltı / Gar Binası İçi Alt Terminal İstasyonu',
    platforms: '2 Yan Peron (1 Hat / İspanyol Çözümü İniş-Biniş)',
    openedDate: '17 Ocak 1875',
    openedDateFormatted: '01-1875',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul_asv2020-02_img01_T%C3%BCnel_Karak%C3%B6y_station.jpg?width=1000',
    imageCaption: 'Tarihi Tünel Karaköy alt istasyonu ve ahşap oymalı peron salonu',
    description: '17 Ocak 1875 tarihinde hizmete giren dünyanın en eski ikinci, Kıta Avrupası ve Türkiye\'nin ise ilk yeraltı raylı sisteminin sahil terminalidir. Tersane Caddesi üzerindeki tarihi Tünel binasından Beyoğlu Tünel Meydanı\'na 90 saniyede ulaşım sağlar.',
    historicalContext: 'Fransız mühendis Eugène-Henri Gavand tarafından projelendirilen ve Sultan Abdülaziz fermanıyla inşa edilen hat, Galata Limanı ile Pera tepesi arasındaki dik Yüksekkaldırım Yokuşu\'nu aşmak için yapılmıştır. 1910\'da millileştirilmiş, 1939\'da İETT\'ye devredilmiş ve 1971\'de tamamen elektrikli modern sistemle yenilenmiştir.',
    features: [
      'Dünyanın En Eski 2. Yeraltı Metrosu (1875)',
      'T1 Kabataş – Bağcılar Tramvayına Aktarma',
      'Karaköy Vapur İskelelerine Doğrudan Yürüme',
      'Galata Köprüsü & Bankalar Caddesi Erişimi',
      'Tarihi Neoklasik Gar Binası Mimarisi'
    ],
    interchanges: [
      {
        lineCode: 'T1',
        lineName: 'T1 Kabataş – Bağcılar Tramvay Hattı',
        type: 'tram',
        color: '#004B86',
        stationName: 'Karaköy Tramvay İstasyonu',
        transferType: 'Cadde / Meydan Çıkışı',
        distance: '60m',
        walkingTime: '~1 dk yürüme',
        description: 'Meydandan Galata Köprüsü ayağındaki T1 Karaköy durağına Tarihi Yarımada ve Kabataş yönlü tramvay aktarması.'
      },
      {
        lineCode: 'Ferry',
        lineName: 'Şehir Hatları & Turyol / Dentur Vapurları (Kadıköy, Üsküdar)',
        type: 'rail',
        color: '#0284c7',
        stationName: 'Karaköy Vapur İskelesi',
        transferType: 'Yaya Geçidi / İskele',
        distance: '120m',
        walkingTime: '~2 dk yürüme',
        description: 'Tersane Caddesi karşısındaki Karaköy iskelesinden Kadıköy ve Üsküdar vapur seferlerine doğrudan deniz aktarması.'
      }
    ]
  },
  'beyoğlu': {
    id: 'beyoglu-f2',
    name: 'Beyoğlu Station (F2)',
    cleanName: 'Beyoğlu',
    turkishName: 'Beyoğlu Tarihi Tünel İstasyonu (F2)',
    lineCode: 'F2',
    lineName: 'F2 Karaköy – Beyoğlu Tarihi Tünel Füniküler Hattı',
    district: 'Beyoğlu (Tünel Meydanı / İstiklal Caddesi / Asmalı Mescit)',
    structureType: 'Tarihi Yeraltı / Metrohan Yanı Üst Terminal İstasyonu',
    platforms: '2 Yan Peron (1 Hat / İspanyol Çözümü İniş-Biniş)',
    openedDate: '17 Ocak 1875',
    openedDateFormatted: '01-1875',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Beyoglu_T%C3%BCnel_station.jpg?width=1000',
    imageCaption: 'Tünel Meydanı tarihi Beyoğlu üst istasyonu ve tarihi İETT vagonu',
    description: 'Tarihi Tünel\'in Pera / Beyoğlu tepe terminalidir. İstiklal Caddesi\'nin güney başlangıcı olan Tünel Meydanı\'nda yer alır. T2 Nostaljik Tramvayı ve M2 Şişhane metro istasyonuna doğrudan entegredir.',
    historicalContext: '1875 yılında "Metropolitan Railway of Constantinople from Galata to Pera" unvanıyla açılan istasyon, Beyoğlu\'nun kalbinde yer alır. İstasyonun hemen üstünde İETT\'nin tarihi genel müdürlük binası olan tarihi Metrohan bulunmaktadır.',
    features: [
      'T2 Taksim – Tünel Nostaljik Tramvay Aktarması',
      'M2 Şişhane Metro İstasyonu Bağlantısı',
      'İstiklal Caddesi & Galata Kulesi Yürüyüş Yolu',
      'Tarihi Metrohan Binası Yanı',
      'Tarihi Çini ve Fotoğraf Sergileri'
    ],
    interchanges: [
      {
        lineCode: 'T2',
        lineName: 'T2 Taksim – Tünel Nostaljik Tramvayı',
        type: 'tram',
        color: '#90ABA0',
        stationName: 'Tünel Meydanı Tramvay Durağı',
        transferType: 'Doğrudan Meydan Çıkışı',
        distance: '20m',
        walkingTime: '~1 dk yürüme',
        description: 'İstasyon kapısından Tünel Meydanı\'na çıkıldığında İstiklal Caddesi boyunca Taksim\'e giden nostaljik tramvay başlangıcı.'
      },
      {
        lineCode: 'M2',
        lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
        type: 'metro',
        color: '#059A4D',
        stationName: 'Şişhane Metro İstasyonu',
        transferType: 'Cadde / Yeraltı Çıkışı',
        distance: '100m',
        walkingTime: '~1.5 dk yürüme',
        description: 'Tünel Meydanı\'ndan M2 Şişhane istasyonunun İstiklal Caddesi girişine doğrudan hızlı geçiş.'
      }
    ]
  }
};

export function getF2StationDetail(stationName: string): StationDetail | null {
  if (!stationName) return null;
  const normalized = stationName
    .toLowerCase()
    .replace(/\s+station$/i, '')
    .replace(/\s+istasyonu$/i, '')
    .replace(/\s*\([^\)]*\)/g, '')
    .replace(/[–—]/g, '-')
    .trim();

  for (const [key, detail] of Object.entries(F2_STATIONS_DATA)) {
    if (normalized === key || normalized.includes(key) || key.includes(normalized)) {
      return detail;
    }
  }

  if (normalized.includes('karakoy') || normalized.includes('karaköy')) {
    return F2_STATIONS_DATA['karaköy'];
  }
  if (normalized.includes('beyoglu') || normalized.includes('beyoğlu') || normalized.includes('tunel') || normalized.includes('tünel')) {
    return F2_STATIONS_DATA['beyoğlu'];
  }

  return null;
}
