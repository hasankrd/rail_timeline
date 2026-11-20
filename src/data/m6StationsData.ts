import { StationDetail } from './m1StationsData';

export const M6_STATIONS_DATA: Record<string, StationDetail> = {
  'levent': {
    id: 'levent-m6',
    name: 'Levent Station (M6)',
    cleanName: 'Levent',
    turkishName: 'Levent Metro İstasyonu (M6)',
    lineCode: 'M6',
    lineName: 'M6 Levent – Boğaziçi Üniversitesi/Hisarüstü Metro Hattı',
    district: 'Beşiktaş / Şişli (Levent)',
    structureType: 'Yeraltı (Tünel İstasyon / M2 ile Ortak Aktarma Kompleksi)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Nisan 2015',
    openedDateFormatted: '04-2015',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Levent istasyonu M6 mini metro peronları ve turnike alanı',
    description: 'Levent istasyonu, M6 mini metro hattının batı başlangıç terminalidir. M2 Yenikapı - Hacıosman metro hattı ile doğrudan ortak yer altı bilet holü ve aktarma tüneline sahiptir. Büyükdere Caddesi finans merkezinde Kanyon, ÖzdilekPark ve Metrocity AVM doğrudan yeraltı bağlantıları sunar.',
    historicalContext: '19 Nisan 2015 tarihinde Ulaştırma Bakanlığı ve İBB ortaklığıyla tamamlanarak M6 hattının ilk seferiyle hizmete açılmıştır.',
    features: ['M2 Metro Hattına Doğrudan Yeraltı Aktarması', 'Kanyon, ÖzdilekPark, Metrocity AVM Bağlantıları', 'Büyükdere Caddesi ve Levent Çarşı Çıkışları', 'Engelli Asansörleri ve Yürüyen Merdivenler'],
    interchanges: [
      {
        lineCode: 'M2',
        lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
        type: 'metro',
        color: '#059A4D',
        stationName: 'Levent İstasyonu',
        transferType: 'Ortak İstasyon Kompleksi / Yeraltı Aktarma Tüneli',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'M2 Yenikapı - Hacıosman metrosuna turnike bölgesinden doğrudan kesintisiz aktarma.'
      }
    ]
  },
  'nispetiye': {
    id: 'nispetiye-m6',
    name: 'Nispetiye Station',
    cleanName: 'Nispetiye',
    turkishName: 'Nispetiye Metro İstasyonu',
    lineCode: 'M6',
    lineName: 'M6 Levent – Boğaziçi Üniversitesi/Hisarüstü Metro Hattı',
    district: 'Beşiktaş (Nispetiye / Levent)',
    structureType: 'Yeraltı (Derin Delme Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Nisan 2015',
    openedDateFormatted: '04-2015',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Nispetiye istasyon girişi ve bilet holü',
    description: 'Beşiktaş ilçesi Nispetiye Mahallesi’nde, Nispetiye Caddesi ve Akmerkez Alışveriş Merkezi yakınında konumlanmış derin tünel istasyonudur.',
    historicalContext: '19 Nisan 2015’te M6 hattının açılışı ile yolcu kabulüne başlamıştır.',
    features: ['Akmerkez AVM ve Nispetiye Caddesi Yakınlığı', 'Etiler ve Levent Arası Hızlı Bağlantı', 'Engelli Asansörü ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'etiler': {
    id: 'etiler-m6',
    name: 'Etiler Station',
    cleanName: 'Etiler',
    turkishName: 'Etiler Metro İstasyonu',
    lineCode: 'M6',
    lineName: 'M6 Levent – Boğaziçi Üniversitesi/Hisarüstü Metro Hattı',
    district: 'Beşiktaş (Etiler)',
    structureType: 'Yeraltı (Derin Delme Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Nisan 2015',
    openedDateFormatted: '04-2015',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Etiler istasyonu cadde girişi ve turnike katı',
    description: 'Etiler semtinin kalbinde, Nispetiye Caddesi üzerinde yer alan istasyon, bölgedeki konut, iş merkezleri ve üniversite öğrencilerine konforlu raylı ulaşım sağlar.',
    historicalContext: '19 Nisan 2015 tarihinde hizmete açılmıştır.',
    features: ['Nispetiye Caddesi ve Etiler Girişleri', 'Yoğun Sosyal ve Ticari Alan Erişimi', 'Tam Engelli Erişilebilir Asansör Sistemi'],
    interchanges: []
  },
  'boğaziçi üniversitesi/hisarüstü': {
    id: 'bogazici-hisarustu-m6',
    name: 'Boğaziçi Üniversitesi/Hisarüstü Station',
    cleanName: 'Boğaziçi Üniversitesi/Hisarüstü',
    turkishName: 'Boğaziçi Üniversitesi / Hisarüstü Metro İstasyonu',
    lineCode: 'M6',
    lineName: 'M6 Levent – Boğaziçi Üniversitesi/Hisarüstü Metro Hattı',
    district: 'Sarıyer / Beşiktaş (Rumeli Hisarüstü)',
    structureType: 'Yeraltı (Derin Delme Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Nisan 2015',
    openedDateFormatted: '04-2015',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Boğaziçi Üniversitesi / Hisarüstü istasyonu peron ve bilet holü',
    description: 'M6 hattının doğu nihai terminali olan istasyon, Boğaziçi Üniversitesi Güney ve Kuzey kampüslerine, Rumeli Hisarüstü mahallesine ve daha sonra açılan F4 Aşiyan füniküleri ile İstanbul Boğazı kıyısına bağlanmaktadır.',
    historicalContext: '19 Nisan 2015 tarihinde açılan istasyon, Boğaziçi Üniversitesi öğrenci ve akademisyenlerinin toplu taşımadaki en kritik erişim noktasıdır.',
    features: ['Boğaziçi Üniversitesi Kampüs Doğrudan Çıkışı', 'Rumeli Hisarüstü Meydan Çıkışı', 'F4 Aşiyan Füniküleri Aktarması', 'Panoramik Boğaz ve Rumeli Hisarı Yürüyüş Yolu'],
    interchanges: [
      {
        lineCode: 'F4',
        lineName: 'F4 Boğaziçi Üni./Hisarüstü – Aşiyan Füniküleri',
        type: 'funicular',
        color: '#7A745A',
        stationName: 'Boğaziçi Üniversitesi/Hisarüstü İstasyonu',
        transferType: 'Yeraltı Tünel Aktarması (2022)',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'Boğaz sahilindeki Aşiyan İskelesi ve şehir hatları vapurlarına doğrudan füniküler bağlantısı.'
      }
    ]
  },
  'bogazici universitesi': {
    id: 'bogazici-hisarustu-m6-alias',
    name: 'Boğaziçi Üniversitesi/Hisarüstü Station',
    cleanName: 'Boğaziçi Üniversitesi',
    turkishName: 'Boğaziçi Üniversitesi / Hisarüstü Metro İstasyonu',
    lineCode: 'M6',
    lineName: 'M6 Levent – Boğaziçi Üniversitesi/Hisarüstü Metro Hattı',
    district: 'Sarıyer / Beşiktaş (Rumeli Hisarüstü)',
    structureType: 'Yeraltı (Derin Delme Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Nisan 2015',
    openedDateFormatted: '04-2015',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Boğaziçi Üniversitesi / Hisarüstü istasyonu peron ve bilet holü',
    description: 'M6 hattının doğu nihai terminali olan istasyon, Boğaziçi Üniversitesi Güney ve Kuzey kampüslerine hizmet verir.',
    historicalContext: '19 Nisan 2015 tarihinde açılmıştır.',
    features: ['Boğaziçi Üniversitesi Kampüs Doğrudan Çıkışı', 'Rumeli Hisarüstü Meydan Çıkışı', 'F4 Aşiyan Füniküleri Aktarması'],
    interchanges: []
  },
  'hisarüstü': {
    id: 'bogazici-hisarustu-m6-alias2',
    name: 'Boğaziçi Üniversitesi/Hisarüstü Station',
    cleanName: 'Hisarüstü',
    turkishName: 'Boğaziçi Üniversitesi / Hisarüstü Metro İstasyonu',
    lineCode: 'M6',
    lineName: 'M6 Levent – Boğaziçi Üniversitesi/Hisarüstü Metro Hattı',
    district: 'Sarıyer / Beşiktaş (Rumeli Hisarüstü)',
    structureType: 'Yeraltı (Derin Delme Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Nisan 2015',
    openedDateFormatted: '04-2015',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Boğaziçi Üniversitesi / Hisarüstü istasyonu peron ve bilet holü',
    description: 'M6 hattının doğu nihai terminali olan istasyon, Boğaziçi Üniversitesi Güney ve Kuzey kampüslerine hizmet verir.',
    historicalContext: '19 Nisan 2015 tarihinde açılmıştır.',
    features: ['Boğaziçi Üniversitesi Kampüs Doğrudan Çıkışı', 'Rumeli Hisarüstü Meydan Çıkışı', 'F4 Aşiyan Füniküleri Aktarması'],
    interchanges: []
  }
};

export function getM6StationDetail(name: string): StationDetail | null {
  if (!name) return null;
  const clean = name
    .replace(/\s+Station$/i, '')
    .replace(/\s+İstasyonu$/i, '')
    .replace(/\s*\([A-Za-z0-9]+\)$/i, '')
    .trim()
    .toLowerCase();

  for (const [key, detail] of Object.entries(M6_STATIONS_DATA)) {
    if (clean === key || clean.includes(key) || key.includes(clean)) {
      return detail;
    }
  }

  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/i̇/g, 'i')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ç/g, 'c')
      .replace(/ğ/g, 'g');

  const normalizedClean = normalize(clean);

  for (const [key, val] of Object.entries(M6_STATIONS_DATA)) {
    const normalizedKey = normalize(key);
    if (
      normalizedClean === normalizedKey ||
      normalizedClean.includes(normalizedKey) ||
      normalizedKey.includes(normalizedClean)
    ) {
      return val;
    }
  }

  return null;
}
