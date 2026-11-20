import { StationDetail } from './m1StationsData';

export const T6_STATIONS_DATA: Record<string, StationDetail> = {
  'sirkeci': {
    id: 'sirkeci-t6',
    name: 'Sirkeci Station (T6)',
    cleanName: 'Sirkeci',
    turkishName: 'Sirkeci Garı Tramvay İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Fatih (Sirkeci / Cağaloğlu / Eminönü)',
    structureType: 'Hemzemin (Tarihi Gar Peronu)',
    platforms: 'Yan Peron (T6 Özel Hattı)',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Tarihi Sirkeci Garı T6 peronu ve nostaljik tren atmosferi',
    description: 'Tarihi Sirkeci Garı bünyesinde yer alan başlangıç terminalidir. Marmaray Sirkeci yer altı istasyonu, T1 Kabataş–Bağcılar tramvayı ve Eminönü/Sirkeci vapur iskelelerine yürüme mesafesinde doğrudan aktarma sağlar.',
    historicalContext: 'Tarihi Orient Express ve Rumeli Demiryolu’nun son durağı olan Sirkeci Garı, 26 Şubat 2024’te kentsel ulaşım ve rekreasyon odaklı T6 raylı sistemiyle yeniden canlandırılmıştır.',
    features: ['Tarihi Gar Mimarisi', 'Marmaray (B1) Aktarması', 'T1 Tramvay Aktarması', 'İstanbul Demiryolu Müzesi', 'Eminönü İskeleleri Bağlantısı'],
    interchanges: [
      {
        lineCode: 'B1',
        lineName: 'Marmaray (Halkalı – Gebze)',
        type: 'rail',
        color: '#65656A',
        stationName: 'Sirkeci Marmaray İstasyonu',
        transferType: 'Yeraltı Turnike Holü & Gar Çıkışı',
        distance: '90m',
        walkingTime: '~1.5 dk yürüme',
        description: 'Marmaray Boğaz Tüp Geçişi Sirkeci yeraltı istasyonuna gar binası içinden kolay aktarma.'
      },
      {
        lineCode: 'T1',
        lineName: 'T1 Kabataş – Bağcılar Tramvay Hattı',
        type: 'tram',
        color: '#004B86',
        stationName: 'Sirkeci T1 İstasyonu',
        transferType: 'Cadde Seviyesi',
        distance: '80m',
        walkingTime: '~1 dk yürüme',
        description: 'Ankara Caddesi üzerindeki Sirkeci T1 tramvay durağına zemin seviyesinde kolay geçiş.'
      }
    ]
  },
  'cankurtaran': {
    id: 'cankurtaran-t6',
    name: 'Cankurtaran Station',
    cleanName: 'Cankurtaran',
    turkishName: 'Cankurtaran Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Fatih (Cankurtaran / Ahırkapı / Sarayburnu)',
    structureType: 'Hemzemin İstasyon',
    platforms: '1 Yan Peron (1 Hat)',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Cankurtaran İstasyonu ve Marmara Denizi sahil yürüyüş yolu',
    description: 'Tarihi yarımadanın Marmara sahil surları boyunca uzanan istasyondur. Sarayburnu, Topkapı Sarayı etekleri, Ahırkapı Feneri ve Cankurtaran sosyal tesislerine doğrudan hizmet verir.',
    historicalContext: 'Eski banliyö hattının tarihi Cankurtaran durağı, modern sahil yürüyüş ve bisiklet yoluyla entegre edilerek 26 Şubat 2024’te yeniden açılmıştır.',
    features: ['Sarayburnu Sahil Parkı', 'Ahırkapı Feneri', 'Bisiklet ve Yaya Yolu Entegrasyonu', 'Tarihi Surlar'],
    interchanges: [
      {
        lineCode: 'Yaya',
        lineName: 'Sahil Yolu & Bisiklet Yolu',
        type: 'funicular',
        color: '#E77C7C',
        stationName: 'Cankurtaran Sahil Koridoru',
        transferType: 'Doğrudan Çıkış',
        distance: '20m',
        walkingTime: '~1 dk yürüme',
        description: 'Kesintisiz 8.5 km’lik bisiklet ve yaya rekreasyon parkuruna doğrudan erişim.'
      }
    ]
  },
  'kumkapı': {
    id: 'kumkapi-t6',
    name: 'Kumkapı Station',
    cleanName: 'Kumkapı',
    turkishName: 'Kumkapı Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Fatih (Kumkapı / Muhsine Hatun)',
    structureType: 'Hemzemin İstasyon',
    platforms: '1 Yan Peron (1 Hat)',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kumkapı T6 İstasyonu ve tarihi balıkçılar çarşısı',
    description: 'Tarihi Kumkapı balıkçı limanı, restoranlar bölgesi, Ermeni Patrikhanesi ve Fatih sahil kesimine hizmet veren istasyondur.',
    historicalContext: '19. yüzyıldan beri var olan Kumkapı banliyö istasyonu, yeni nesil rekreasyon ve tramvay konseptiyle modernize edilmiştir.',
    features: ['Kumkapı Balıkçılar Çarşısı', 'Ermeni Patrikhanesi ve Tarihi Kiliseler', 'Kennedy Caddesi Sahil Erişimi'],
    interchanges: []
  },
  'kumkapi': {
    id: 'kumkapi-ascii-alias',
    name: 'Kumkapı Station',
    cleanName: 'Kumkapı',
    turkishName: 'Kumkapı Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Fatih',
    structureType: 'Hemzemin',
    platforms: '1 Yan Peron',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kumkapı İstasyonu',
    description: 'Kumkapı T6 istasyonu.',
    historicalContext: '26 Şubat 2024 tarihinde hizmete girmiştir.',
    features: ['Balıkçılar Çarşısı', 'Sahil Erişimi'],
    interchanges: []
  },
  'yenikapı': {
    id: 'yenikapi-t6',
    name: 'Yenikapı Station (T6)',
    cleanName: 'Yenikapı',
    turkishName: 'Yenikapı Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Fatih (Yenikapı / Aksaray Sahili)',
    structureType: 'Viyadük / Hemzemin İstasyon',
    platforms: '1 Yan Peron (1 Hat)',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yenikapı T6 İstasyonu ve dev aktarma merkezi',
    description: 'Yenikapı Aktarma Merkezi bölgesinde yer alır. Marmaray, M1A, M1B ve M2 metro hatları ile İDO Yenikapı Deniz Otobüsü terminaline doğrudan aktarma imkanı tanır.',
    historicalContext: 'Tarihi Theodosius Limanı kazılarının merkezinde yer alan Yenikapı viyadük istasyonu, 26 Şubat 2024’te T6 hattıyla yeniden açılmıştır.',
    features: ['Marmaray (B1) Aktarması', 'M1A & M1B Metro Aktarması', 'M2 Metro Aktarması', 'İDO Deniz Otobüsleri', 'Yenikapı Etkinlik Alanı'],
    interchanges: [
      {
        lineCode: 'B1',
        lineName: 'Marmaray (Halkalı – Gebze)',
        type: 'rail',
        color: '#65656A',
        stationName: 'Yenikapı Marmaray İstasyonu',
        transferType: 'Yeraltı Turnike Holü & Üstgeçit',
        distance: '150m',
        walkingTime: '~2 dk yürüme',
        description: 'Marmaray peronlarına doğrudan yaya yolu ve turnike holü bağlantısı.'
      },
      {
        lineCode: 'M1',
        lineName: 'M1A / M1B Metro Hatları',
        type: 'metro',
        color: '#EE2229',
        stationName: 'Yenikapı M1 İstasyonu',
        transferType: 'Yeraltı Aktarma Holü',
        distance: '200m',
        walkingTime: '~3 dk yürüme',
        description: 'M1A Atatürk Havalimanı ve M1B Kirazlı metro hatlarına aktarma.'
      },
      {
        lineCode: 'M2',
        lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
        type: 'metro',
        color: '#059A4D',
        stationName: 'Yenikapı M2 İstasyonu',
        transferType: 'Yeraltı Aktarma Holü',
        distance: '220m',
        walkingTime: '~3 dk yürüme',
        description: 'M2 Yenikapı–Taksim–Hacıosman metrosuna doğrudan geçiş.'
      }
    ]
  },
  'yenikapi': {
    id: 'yenikapi-ascii-alias-t6',
    name: 'Yenikapı Station (T6)',
    cleanName: 'Yenikapı',
    turkishName: 'Yenikapı Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Fatih',
    structureType: 'Hemzemin',
    platforms: '1 Yan Peron',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yenikapı İstasyonu',
    description: 'Yenikapı T6 istasyonu.',
    historicalContext: '26 Şubat 2024 tarihinde hizmete girmiştir.',
    features: ['Metro & Marmaray Aktarması'],
    interchanges: []
  },
  'cerrahpaşa': {
    id: 'cerrahpasa-t6',
    name: 'Cerrahpaşa Station',
    cleanName: 'Cerrahpaşa',
    turkishName: 'Cerrahpaşa Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Fatih (Cerrahpaşa / Samatya Sahili)',
    structureType: 'Hemzemin Yeni Nesil İstasyon',
    platforms: '1 Yan Peron (1 Hat)',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Cerrahpaşa T6 İstasyonu ve İstanbul EAH / Cerrahpaşa Tıp bağlantısı',
    description: 'Proje kapsamında sıfırdan inşa edilen yeni istasyondur. Cerrahpaşa Tıp Fakültesi Hastanesi, İstanbul Eğitim ve Araştırma Hastanesi (Samatya) ve Samatya sahil parkına doğrudan yaya üstgeçidi ile bağlanır.',
    historicalContext: '26 Şubat 2024 tarihinde bölgedeki sağlık kuruluşlarına erişimi kolaylaştırmak amacıyla yeni inşa edilmiş olarak hizmete alınmıştır.',
    features: ['Yeni İnşa Edilen İstasyon', 'İstanbul Eğitim ve Araştırma Hastanesi Erişimi', 'Cerrahpaşa Tıp Fakültesi Bağlantısı', 'Engelsiz Yaya Üstgeçidi'],
    interchanges: [
      {
        lineCode: 'Hastane',
        lineName: 'İstanbul Eğitim ve Araştırma Hastanesi (Samatya)',
        type: 'funicular',
        color: '#E77C7C',
        stationName: 'Samatya Hastane Bağlantısı',
        transferType: 'Yaya Üstgeçidi',
        distance: '100m',
        walkingTime: '~1.5 dk yürüme',
        description: 'Samatya Hastanesi poliklinik ve acil servislerine doğrudan asansörlü yaya üstgeçidi.'
      }
    ]
  },
  'cerrahpasa': {
    id: 'cerrahpasa-ascii-alias',
    name: 'Cerrahpaşa Station',
    cleanName: 'Cerrahpaşa',
    turkishName: 'Cerrahpaşa Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Fatih',
    structureType: 'Hemzemin',
    platforms: '1 Yan Peron',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Cerrahpaşa İstasyonu',
    description: 'Cerrahpaşa T6 istasyonu.',
    historicalContext: '26 Şubat 2024 tarihinde hizmete girmiştir.',
    features: ['Hastane Erişimi'],
    interchanges: []
  },
  'kocamustafapaşa': {
    id: 'kocamustafapasa-t6',
    name: 'Kocamustafapaşa Station',
    cleanName: 'Kocamustafapaşa',
    turkishName: 'Kocamustafapaşa Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Fatih (Kocamustafapaşa / Samatya Meydanı)',
    structureType: 'Hemzemin İstasyon',
    platforms: '1 Yan Peron (1 Hat)',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kocamustafapaşa T6 İstasyonu ve tarihi Samatya meydanı',
    description: 'Tarihi Samatya meydanı, balıkçılar çarşısı, Surp Kevork Kilisesi ve Kocamustafapaşa mahallesine hizmet veren istasyondur.',
    historicalContext: 'Tarihi Samatya/Kocamustafapaşa durağı restore edilerek 26 Şubat 2024’te yeniden tren seferlerine başlamıştır.',
    features: ['Tarihi Samatya Meydanı', 'Balıkçılar Çarşısı', 'Samatya Sahil Parkı ve Sosyal Tesisler'],
    interchanges: []
  },
  'kocamustafapasa': {
    id: 'kocamustafapasa-ascii-alias',
    name: 'Kocamustafapaşa Station',
    cleanName: 'Kocamustafapaşa',
    turkishName: 'Kocamustafapaşa Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Fatih',
    structureType: 'Hemzemin',
    platforms: '1 Yan Peron',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kocamustafapaşa İstasyonu',
    description: 'Kocamustafapaşa T6 istasyonu.',
    historicalContext: '26 Şubat 2024 tarihinde açılmıştır.',
    features: ['Samatya Erişimi'],
    interchanges: []
  },
  'samatya': {
    id: 'samatya-alias',
    name: 'Kocamustafapaşa Station',
    cleanName: 'Kocamustafapaşa',
    turkishName: 'Kocamustafapaşa Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Fatih',
    structureType: 'Hemzemin',
    platforms: '1 Yan Peron',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Samatya İstasyonu',
    description: 'Kocamustafapaşa (Samatya) T6 istasyonu.',
    historicalContext: '26 Şubat 2024 tarihinde açılmıştır.',
    features: ['Samatya Erişimi'],
    interchanges: []
  },
  'yedikule': {
    id: 'yedikule-t6',
    name: 'Yedikule Station',
    cleanName: 'Yedikule',
    turkishName: 'Yedikule Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Fatih (Yedikule / Tarihi Sur İçi)',
    structureType: 'Hemzemin İstasyon',
    platforms: '1 Yan Peron (1 Hat)',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yedikule T6 İstasyonu ve Yedikule Hisarı surları',
    description: 'Tarihi Yedikule Zindanları (Hisarı Müzesi), Yedikule Gazhanesi kültür merkezi ve tarihi bostanlar bölgesine hizmet veren istasyondur.',
    historicalContext: 'Restore edilen tarihi Yedikule Gar binası ve peronları 26 Şubat 2024’te yeniden hizmete sunulmuştur.',
    features: ['Yedikule Zindanları & Hisarı Müzesi', 'Yedikule Gazhanesi Kültür Merkezi', 'Tarihi İstanbul Kara Surları', 'Tarihi Yedikule Bostanları'],
    interchanges: []
  },
  'kazlıçeşme': {
    id: 'kazlicesme-t6',
    name: 'Kazlıçeşme Station (T6)',
    cleanName: 'Kazlıçeşme',
    turkishName: 'Kazlıçeşme Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Zeytinburnu (Kazlıçeşme / Sahil Yolu)',
    structureType: 'Viyadük / Hemzemin Terminal İstasyonu',
    platforms: 'Özel T6 Terminal Peronu',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kazlıçeşme T6 peronu ve Marmaray aktarma meydanı',
    description: 'Hattın batı başlangıç ve bitiş terminalidir. Marmaray Kazlıçeşme istasyonuna doğrudan ortak peron ve meydan üzerinden entegredir. Olivium Outlet Center ve Kazlıçeşme İETT otobüs peronlarına kolay erişim sağlar.',
    historicalContext: '26 Şubat 2024 tarihinde Marmaray Kazlıçeşme istasyonunun yanına inşa edilen özel T6 terminal peronuyla faaliyete geçmiştir.',
    features: ['Marmaray (B1) Aktarması', 'Kazlıçeşme İETT Otobüs Peronları', 'Olivium Outlet Center Erişimi', 'Basketbol Gelişim Merkezi'],
    interchanges: [
      {
        lineCode: 'B1',
        lineName: 'Marmaray (Halkalı – Gebze)',
        type: 'rail',
        color: '#65656A',
        stationName: 'Kazlıçeşme Marmaray İstasyonu',
        transferType: 'Doğrudan Ortak Peron & İstasyon Meydanı',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'Marmaray Halkalı–Gebze banliyö hattına zemin seviyesinde kolay geçiş.'
      }
    ]
  },
  'kazlicesme': {
    id: 'kazlicesme-ascii-alias-t6',
    name: 'Kazlıçeşme Station (T6)',
    cleanName: 'Kazlıçeşme',
    turkishName: 'Kazlıçeşme Tren İstasyonu (T6)',
    lineCode: 'T6',
    lineName: 'T6 Sirkeci – Kazlıçeşme Raylı Sistem Hattı',
    district: 'Zeytinburnu',
    structureType: 'Hemzemin',
    platforms: 'Özel T6 Peronu',
    openedDate: '26 Şubat 2024',
    openedDateFormatted: '02-2024',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kazlıçeşme İstasyonu',
    description: 'Kazlıçeşme T6 istasyonu.',
    historicalContext: '26 Şubat 2024 tarihinde açılmıştır.',
    features: ['Marmaray Aktarması'],
    interchanges: []
  }
};

export function getT6StationDetail(rawName: string): StationDetail | null {
  if (!rawName) return null;
  const clean = rawName
    .replace(/\s+Station(\s*\([A-Za-z0-9]+\))?$/i, '')
    .replace(/\s+İstasyonu(\s*\([A-Za-z0-9]+\))?$/i, '')
    .replace(/\s*\([A-Za-z0-9]+\)$/i, '')
    .trim()
    .toLowerCase();

  if (T6_STATIONS_DATA[clean]) {
    return T6_STATIONS_DATA[clean];
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

  for (const [key, val] of Object.entries(T6_STATIONS_DATA)) {
    const normalizedKey = normalize(key);
    if (
      normalizedClean === normalizedKey ||
      normalizedClean.includes(normalizedKey) ||
      normalizedKey.includes(normalizedClean)
    ) {
      return val;
    }
  }

  if (normalizedClean.includes('sirkeci')) return T6_STATIONS_DATA['sirkeci'];
  if (normalizedClean.includes('cankurtaran')) return T6_STATIONS_DATA['cankurtaran'];
  if (normalizedClean.includes('kumkapi') || normalizedClean.includes('kumkapı')) return T6_STATIONS_DATA['kumkapı'];
  if (normalizedClean.includes('yenikapi') || normalizedClean.includes('yenikapı')) return T6_STATIONS_DATA['yenikapı'];
  if (normalizedClean.includes('cerrahpasa') || normalizedClean.includes('cerrahpaşa')) return T6_STATIONS_DATA['cerrahpaşa'];
  if (normalizedClean.includes('kocamustafa') || normalizedClean.includes('samatya')) return T6_STATIONS_DATA['kocamustafapaşa'];
  if (normalizedClean.includes('yedikule')) return T6_STATIONS_DATA['yedikule'];
  if (normalizedClean.includes('kazlicesme') || normalizedClean.includes('kazlıçeşme')) return T6_STATIONS_DATA['kazlıçeşme'];

  return null;
}
