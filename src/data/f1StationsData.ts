import { StationDetail } from './m1StationsData';

export const F1_STATIONS_DATA: Record<string, StationDetail> = {
  'taksim': {
    id: 'taksim-f1',
    name: 'Taksim Station (F1)',
    cleanName: 'Taksim',
    turkishName: 'Taksim Füniküler İstasyonu',
    lineCode: 'F1',
    lineName: 'F1 Taksim – Kabataş Füniküler Hattı',
    district: 'Beyoğlu (Taksim Meydanı / Gümüşsuyu)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat / 3 İniş-Biniş Peronu)',
    openedDate: '29 Haziran 2006',
    openedDateFormatted: '06-2006',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taksim_F%C3%BCnik%C3%BCler_%C4%B0stasyonu.jpg?width=1000',
    imageCaption: 'Taksim Meydanı altındaki F1 Füniküler İstasyonu ve M2 metro aktarma holü',
    description: 'Taksim Meydanı ile Kabataş sahilini yeraltından 2.5 dakikada birbirine bağlayan 594 metrelik modern yeraltı çekme halatlı füniküler sisteminin tepe terminalidir.',
    historicalContext: '29 Haziran 2006 tarihinde hizmete girmiştir. Tarihi Tünel’den (F2) sonra İstanbul’un ikinci füniküleri olan F1, Boğaziçi deniz ulaşımı ile M2 Yenikapı–Hacıosman metro omurgasını doğrudan entegre etmiştir.',
    features: ['M2 Metro Hattına Doğrudan Yeraltı Turnike Geçişi', 'Taksim Gezi Parkı & Meydan Çıkışları', 'Otomatik Peron Ayırıcı Kapılar (PAKS)', 'Engelli Asansörleri & Yürüyen Merdivenler'],
    interchanges: [
      {
        lineCode: 'M2',
        lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
        type: 'metro',
        color: '#059A4D',
        stationName: 'Taksim Metro İstasyonu',
        transferType: 'Doğrudan Yeraltı Bağlantı Tüneli',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'Ortak yeraltı bilet holü üzerinden hiçbir şekilde caddeye çıkmadan M2 Yenikapı–Hacıosman metrosuna anında aktarma imkanı.'
      },
      {
        lineCode: 'T2',
        lineName: 'T2 Taksim – Tünel Nostaljik Tramvayı',
        type: 'tram',
        color: '#90ABA0',
        stationName: 'Taksim Meydanı Durağı',
        transferType: 'Meydan Yüzey Çıkışı',
        distance: '60m',
        walkingTime: '~1 dk yürüme',
        description: 'Meydan çıkışından İstiklal Caddesi girişinde bekleyen tarihi nostaljik tramvay durağına bağlantı.'
      }
    ]
  },
  'kabataş': {
    id: 'kabatas-f1',
    name: 'Kabataş Station (F1)',
    cleanName: 'Kabataş',
    turkishName: 'Kabataş Füniküler İstasyonu',
    lineCode: 'F1',
    lineName: 'F1 Taksim – Kabataş Füniküler Hattı',
    district: 'Beyoğlu (Kabataş Sahili / Meclis-i Mebusan Caddesi)',
    structureType: 'Yeraltı (Sahil Aktarma Terminali)',
    platforms: '1 Ada Peron (2 Hat / 3 İniş-Biniş Peronu)',
    openedDate: '29 Haziran 2006',
    openedDateFormatted: '06-2006',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kabata%C5%9F_F%C3%BCnik%C3%BCler_%C4%B0stasyonu.jpg?width=1000',
    imageCaption: 'Kabataş sahilindeki F1 Füniküler İstasyonu ve T1/Vapur aktarma merkezi',
    description: 'Boğaziçi sahilinde yer alan, Taksim’den gelen yolcuları T1 tramvayı ve deniz otobüsü/vapur iskelelerine aktaran çok modlu stratejik aktarma merkezidir.',
    historicalContext: '29 Haziran 2006’da açılan istasyon, 73 metrelik kot farkını aşarak deniz ulaşımını Taksim ve Beyoğlu tepesine bağlamış, günde on binlerce yolcunun 2.5 dakikada Taksim’e tırmanmasını sağlamıştır.',
    features: ['T1 Tramvay Hattına Doğrudan Geçiş', 'Şehir Hatları Vapur İskeleleri Karşısı', 'İDO & Dentur İskeleleri Entegrasyonu', 'Otomatik Peron Kapıları'],
    interchanges: [
      {
        lineCode: 'T1',
        lineName: 'T1 Kabataş – Bağcılar Tramvay Hattı',
        type: 'tram',
        color: '#004B86',
        stationName: 'Kabataş Tramvay Terminali',
        transferType: 'Doğrudan Çıkış / Peron',
        distance: '30m',
        walkingTime: '~1 dk yürüme',
        description: 'İstasyon çıkışından Tarihi Yarımada yönüne (Karaköy, Eminönü, Sultanahmet, Beyazıt) giden T1 tramvayına doğrudan hemzemin geçiş.'
      },
      {
        lineCode: 'Ferry',
        lineName: 'Şehir Hatları & İDO Vapur Hatları (Kadıköy, Üsküdar, Adalar)',
        type: 'rail',
        color: '#0284c7',
        stationName: 'Kabataş Vapur İskelesi',
        transferType: 'Yaya Geçidi / İskele',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'Meclis-i Mebusan Caddesi alt geçidi üzerinden doğrudan Boğaz ve Adalar vapur iskelelerine bağlantı.'
      }
    ]
  }
};

export function getF1StationDetail(stationName: string): StationDetail | null {
  if (!stationName) return null;
  const normalized = stationName
    .toLowerCase()
    .replace(/\s+station$/i, '')
    .replace(/\s+istasyonu$/i, '')
    .replace(/\s*\([^\)]*\)/g, '')
    .replace(/[–—]/g, '-')
    .trim();

  for (const [key, detail] of Object.entries(F1_STATIONS_DATA)) {
    if (normalized === key || normalized.includes(key) || key.includes(normalized)) {
      return detail;
    }
  }

  return null;
}
