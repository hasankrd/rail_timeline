import { StationDetail } from './m1StationsData';

export const F4_STATIONS_DATA: Record<string, StationDetail> = {
  'bogazici universitesi': {
    id: 'bogazici-f4',
    name: 'Boğaziçi Üniversitesi/Hisarüstü Station (F4)',
    cleanName: 'Boğaziçi Üniversitesi/Hisarüstü',
    turkishName: 'Boğaziçi Üniversitesi / Hisarüstü Füniküler İstasyonu',
    lineCode: 'F4',
    lineName: 'F4 Boğaziçi Üniversitesi/Hisarüstü – Aşiyan Füniküler Hattı',
    district: 'Sarıyer (Rumeli Hisarüstü)',
    structureType: 'Yeraltı (M6 Entegre Tünel İstasyonu / 65m Derinlik)',
    platforms: '2 Kenar Peron (1 Hat / İspanyol Çözümü)',
    openedDate: '28 Ekim 2022',
    openedDateFormatted: '10-2022',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Boğaziçi Üniversitesi / Hisarüstü F4 füniküler istasyonu ve M6 aktarma tüneli',
    description: 'Boğaziçi Üniversitesi Güney ve Kuzey kampüsleri ile Rumeli Hisarüstü yerleşiminin merkezinde yer alır. M6 metro istasyonuna doğrudan yeraltı transfer koridoruyla entegredir.',
    historicalContext: '28 Ekim 2022 tarihinde İBB tarafından hizmete açılmıştır.',
    features: ['M6 Metro Hattına Doğrudan Yeraltı Koridoru', 'Boğaziçi Üniversitesi Kampüs Çıkışları', 'Yüksek Eğimli Füniküler Teknolojisi', 'Asansör ve Yürüyen Merdivenler'],
    interchanges: [
      {
        lineCode: 'M6',
        lineName: 'M6 Levent – Boğaziçi Üniversitesi/Hisarüstü Metro Hattı',
        type: 'metro',
        color: '#C9AA79',
        stationName: 'Boğaziçi Üniversitesi İstasyonu',
        transferType: 'Yeraltı Aktarma Tüneli',
        distance: '30m',
        walkingTime: '~1 dk yürüme',
        description: 'Levent yönüne mini metro aktarması.'
      }
    ]
  },
  'hisarustu': {
    id: 'hisarustu-f4-alias',
    name: 'Boğaziçi Üniversitesi/Hisarüstü Station (F4)',
    cleanName: 'Boğaziçi Üniversitesi/Hisarüstü',
    turkishName: 'Boğaziçi Üniversitesi / Hisarüstü Füniküler İstasyonu',
    lineCode: 'F4',
    lineName: 'F4 Boğaziçi Üniversitesi/Hisarüstü – Aşiyan Füniküler Hattı',
    district: 'Sarıyer (Rumeli Hisarüstü)',
    structureType: 'Yeraltı (M6 Entegre İstasyon)',
    platforms: '2 Kenar Peron (1 Hat)',
    openedDate: '28 Ekim 2022',
    openedDateFormatted: '10-2022',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Hisarüstü Füniküler İstasyonu',
    description: 'Hisarüstü füniküler istasyonudur.',
    historicalContext: '28 Ekim 2022 tarihinde açılmıştır.',
    features: ['M6 Metro Aktarması', 'Boğaziçi Üniversitesi Kampüs Erişimi'],
    interchanges: []
  },
  'asiyan': {
    id: 'asiyan-f4',
    name: 'Aşiyan Station',
    cleanName: 'Aşiyan',
    turkishName: 'Aşiyan Füniküler İstasyonu',
    lineCode: 'F4',
    lineName: 'F4 Boğaziçi Üniversitesi/Hisarüstü – Aşiyan Füniküler Hattı',
    district: 'Beşiktaş / Sarıyer (Bebek / Aşiyan Sahili)',
    structureType: 'Yeraltı (Boğaz Kıyısı Tünel İstasyonu / Deniz Seviyesi)',
    platforms: '2 Kenar Peron (1 Hat)',
    openedDate: '28 Ekim 2022',
    openedDateFormatted: '10-2022',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Aşiyan Sahili ve Füniküler İstasyonu çıkışı',
    description: 'İstanbul Boğazı kıyısında, Bebek ile Rumeli Hisarı arasındaki Aşiyan sahilinde yer alır. Şehir Hatları Aşiyan Vapur İskelesi’nin hemen karşısındadır; Üsküdar, Kadıköy ve Anadolu Hisarı yönüne boğaz deniz ulaşımı ile entegre olur.',
    historicalContext: '28 Ekim 2022 tarihinde açılan istasyon, Hisarüstü tepesinden Boğaz kıyısına 2,5 dakikada inilmesini sağlayarak devrim niteliğinde bir bağlantı oluşturmuştur.',
    features: ['Aşiyan Vapur İskelesi Karşısı Doğrudan Çıkış', 'Aşiyan Müzesi ve Tevfik Fikret Evi Erişimi', 'Bebek Sahili ve Boğaz Yürüyüş Yolu', 'Engelli Rampaları ve Asansörler'],
    interchanges: [
      {
        lineCode: 'Vapur',
        lineName: 'Şehir Hatları Boğaz Hatları Vapurları',
        type: 'rail',
        color: '#7A745A',
        stationName: 'Aşiyan İskelesi',
        transferType: 'Cadde / Sahil Çıkışı',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'Üsküdar ve Anadolu Hisarı yönüne Şehir Hatları vapur seferleri.'
      }
    ]
  }
};

export function getF4StationDetail(name: string): StationDetail | null {
  if (!name) return null;
  const clean = name
    .toLowerCase()
    .replace(/\s+station(\s*\([a-z0-9]+\))?$/i, '')
    .replace(/\s*\([a-z0-9]+\)$/i, '')
    .replace(/\s+füniküler$/i, '')
    .replace(/\s+istasyonu$/i, '')
    .replace(/i̇/g, 'i')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .trim();

  for (const [key, detail] of Object.entries(F4_STATIONS_DATA)) {
    if (clean === key || clean.includes(key) || key.includes(clean)) {
      return detail;
    }
  }

  if (clean.includes('asiyan') || clean.includes('aşiyan')) return F4_STATIONS_DATA['asiyan'];
  if (clean.includes('bogazici') || clean.includes('hisarustu') || clean.includes('hisarüstü')) return F4_STATIONS_DATA['bogazici universitesi'];

  return null;
}
