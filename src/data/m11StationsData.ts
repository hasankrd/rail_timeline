import { StationDetail } from './m1StationsData';

export const M11_STATIONS_DATA: Record<string, StationDetail> = {
  'gayrettepe': {
    id: 'gayrettepe-m11',
    name: 'Gayrettepe Station (M11)',
    cleanName: 'Gayrettepe',
    turkishName: 'Gayrettepe Metro İstasyonu (M11)',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Şişli / Beşiktaş (Büyükdere Caddesi / Zincirlikuyu)',
    structureType: 'Ultra Derin Yeraltı İstasyonu (72m Derinlik - Türkiye\'nin En Derin İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '29 Ocak 2024',
    openedDateFormatted: '01-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Gayrettepe M11 İstasyonu 72 metre derinlikteki modern peron tüneli',
    description: 'M11 İstanbul Havalimanı metrosunun güneydoğu başlangıç terminalidir. 72 metre derinliğiyle Türkiye\'nin en derin metro istasyonudur. M2 Yenikapı–Hacıosman metrosu Gayrettepe istasyonuna ve Zincirlikuyu Metrobüs aktarma merkezine doğrudan yeraltı tünelleri ve yürüyen bantlar ile entegredir.',
    historicalContext: '29 Ocak 2024 tarihinde hizmete girmiştir. Şehir merkezinden (Zincirlikuyu/Levent) İstanbul Havalimanı\'na kesintisiz ve tek aktarmasız hızlı raylı ulaşımı sağlamıştır.',
    features: ['72 Metre ile Türkiye\'nin En Derin İstasyonu', 'M2 Yenikapı–Hacıosman Metrosuna Doğrudan Yeraltı Aktarması', 'Zincirlikuyu Metrobüs Aktarma Merkezi Erişimi', 'Zorlu Center ve Büyükdere Caddesi Bağlantısı'],
    interchanges: [
      {
        lineCode: 'M2',
        lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
        type: 'metro',
        color: '#059A4D',
        stationName: 'Gayrettepe M2 İstasyonu',
        transferType: 'Yeraltı Bağlantı Tüneli',
        distance: '150m',
        walkingTime: '~2 dk yürüme',
        description: 'M2 Yenikapı–Hacıosman metrosuna doğrudan yeraltı tüneli ve yürüyen bantlar ile kolay aktarma.'
      },
      {
        lineCode: 'Metrobüs',
        lineName: 'Metrobüs (Söğütlüçeşme – Beylikdüzü)',
        type: 'rail',
        color: '#FCD10D',
        stationName: 'Zincirlikuyu Metrobüs Durağı',
        transferType: 'Doğrudan Yeraltı Tüneli',
        distance: '200m',
        walkingTime: '~3 dk yürüme',
        description: 'Zincirlikuyu Metrobüs aktarma meydanına doğrudan yeraltı alt geçit bağlantısı.'
      }
    ]
  },
  'kağıthane': {
    id: 'kagithane-m11',
    name: 'Kağıthane Station (M11)',
    cleanName: 'Kağıthane',
    turkishName: 'Kâğıthane Metro İstasyonu (M11)',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Kağıthane (Merkez / Cendere Caddesi)',
    structureType: 'Viyadük & Yeraltı Entegre İstasyon',
    platforms: '1 Ada Peron (2 Hat - Hızlı Metro Standardı)',
    openedDate: '22 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kağıthane M11 hızlı metro peronları ve bilet holü',
    description: 'M11 İstanbul Havalimanı metrosunun 22 Ocak 2023 tarihinde açılan ilk etabının şehir merkezi başlangıç istasyonudur. M7 Yıldız–Mahmutbey metro hattı Kağıthane istasyonuna yaya viyadüğü ve meydan üzerinden doğrudan aktarma imkanı sunar.',
    historicalContext: '22 Ocak 2023 tarihinde Cumhurbaşkanlığı ve Ulaştırma Bakanlığı töreniyle hizmete girmiştir. Türkiye\'nin en hızlı metrosu unvanına sahiptir.',
    features: ['M7 Mecidiyeköy–Mahmutbey Metrosuna Aktarma', 'Cendere Vadisi ve Kağıthane Deresi Yanı', '120 km/s Hızlı Tren Seferleri', 'Engelsiz Modern Turnikeler ve Asansörler'],
    interchanges: [
      {
        lineCode: 'M7',
        lineName: 'M7 Yıldız – Mahmutbey Metro Hattı',
        type: 'metro',
        color: '#F490B3',
        stationName: 'Kağıthane M7 İstasyonu',
        transferType: 'Cadde / Üst Viyadük Bağlantısı',
        distance: '180m',
        walkingTime: '~3 dk yürüme',
        description: 'Kağıthane Meydanı ve yaya üstgeçidi üzerinden M7 viyadük istasyonuna aktarma.'
      }
    ]
  },
  'kagithane': {
    id: 'kagithane-ascii-alias',
    name: 'Kağıthane Station (M11)',
    cleanName: 'Kağıthane',
    turkishName: 'Kağıthane Metro İstasyonu (M11)',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Kağıthane',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '22 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kağıthane İstasyonu',
    description: 'Kağıthane M11 havalimanı metrosu istasyonudur.',
    historicalContext: '22 Ocak 2023 tarihinde açılmıştır.',
    features: ['M7 Metrosu Aktarması', 'Havalimanı Hızlı Treni'],
    interchanges: []
  },
  'üniversite - hasdal': {
    id: 'universite-hasdal-m11',
    name: 'Üniversite - Hasdal Station',
    cleanName: 'Üniversite - Hasdal',
    turkishName: 'Üniversite - Hasdal Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Eyüpsultan (Hasdal Kışlası / İÜ Hasdal Yerleşkesi)',
    structureType: 'Derin Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '22 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Hasdal M11 İstasyonu modern fütüristik peron tüneli',
    description: 'İstanbul Üniversitesi Hasdal Yerleşkesi, Hasdal Askeri Kışlası ve O-2 (TEM) Otoyolu Hasdal Kavşağı yakınında yer alır.',
    historicalContext: '22 Ocak 2023 tarihinde hizmete açılmıştır.',
    features: ['İstanbul Üniversitesi Hasdal Kampüsü', 'TEM Otoyolu Bağlantısı', 'P+R Otopark Alanı'],
    interchanges: []
  },
  'hasdal': {
    id: 'hasdal-alias',
    name: 'Üniversite - Hasdal Station',
    cleanName: 'Üniversite - Hasdal',
    turkishName: 'Hasdal Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Eyüpsultan (Hasdal)',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '22 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Hasdal İstasyonu',
    description: 'Hasdal M11 istasyonudur.',
    historicalContext: '22 Ocak 2023 tarihinde açılmıştır.',
    features: ['Üniversite Kampüsü'],
    interchanges: []
  },
  'kemerburgaz': {
    id: 'kemerburgaz-m11',
    name: 'Kemerburgaz Station',
    cleanName: 'Kemerburgaz',
    turkishName: 'Kemerburgaz Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Eyüpsultan (Kemerburgaz / Mithatpaşa)',
    structureType: 'Derin Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '22 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kemerburgaz M11 istasyon girişi ve orman manzarası',
    description: 'Tarihi Kemerburgaz semtine ve Belgrad Ormanı doğu kapısına hizmet veren istasyondur. Tarihi su kemerleri siluetine atıfta bulunan mimari detaylara sahiptir.',
    historicalContext: '22 Ocak 2023 tarihinde hizmete girmiştir.',
    features: ['Kemerburgaz Kent Ormanı Yakınlığı', 'Tarihi Su Kemerleri Bölgesi', 'Geniş Otopark'],
    interchanges: []
  },
  'göktürk': {
    id: 'gokturk-m11',
    name: 'Göktürk Station',
    cleanName: 'Göktürk',
    turkishName: 'Göktürk Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Eyüpsultan (Göktürk Merkez Mahallesi)',
    structureType: 'Derin Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '22 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Göktürk M11 İstasyonu modern yeraltı turnike holü',
    description: 'Göktürk yerleşim bölgesi merkezinde, İstanbul Caddesi üzerinde yer alan istasyondur. Yoğun nüfuslu Göktürk semtini doğrudan havalimanı ve şehir merkezine bağlar.',
    historicalContext: '22 Ocak 2023 tarihinde hizmete alınmıştır.',
    features: ['Göktürk Şehir Merkezi', 'İstanbul Caddesi Çıkışı', 'Engelsiz Yürüyen Merdivenler'],
    interchanges: []
  },
  'gokturk': {
    id: 'gokturk-ascii-alias',
    name: 'Göktürk Station',
    cleanName: 'Göktürk',
    turkishName: 'Göktürk Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Eyüpsultan (Göktürk)',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '22 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Göktürk İstasyonu',
    description: 'Göktürk M11 istasyonudur.',
    historicalContext: '22 Ocak 2023 tarihinde açılmıştır.',
    features: ['Göktürk Semt Merkezi'],
    interchanges: []
  },
  'ihsaniye': {
    id: 'ihsaniye-m11',
    name: 'İhsaniye Station',
    cleanName: 'İhsaniye',
    turkishName: 'İhsaniye Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Eyüpsultan (İhsaniye Köyü / Işıklar)',
    structureType: 'Derin Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '22 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İhsaniye M11 peronları',
    description: 'Kuzey Marmara Otoyolu İhsaniye kavşağı ve Işıklar köyü bölgesinde yer alır.',
    historicalContext: '22 Ocak 2023 tarihinde açılmıştır.',
    features: ['Kuzey Marmara Otoyolu Bağlantısı', 'Doğa ve Köy Erişimi'],
    interchanges: []
  },
  'i̇hsaniye': {
    id: 'ihsaniye-dotted-alias',
    name: 'İhsaniye Station',
    cleanName: 'İhsaniye',
    turkishName: 'İhsaniye Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Eyüpsultan (İhsaniye)',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron',
    openedDate: '22 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İhsaniye İstasyonu',
    description: 'İhsaniye M11 istasyonudur.',
    historicalContext: '22 Ocak 2023 tarihinde açılmıştır.',
    features: ['Kuzey Marmara Otoyolu'],
    interchanges: []
  },
  'istanbul havalimanı': {
    id: 'istanbul-havalimani-m11',
    name: 'İstanbul Havalimanı Station',
    cleanName: 'İstanbul Havalimanı',
    turkishName: 'İstanbul Havalimanı Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Arnavutköy (İstanbul Havalimanı Ana Terminali / Dış Hatlar & İç Hatlar)',
    structureType: 'Büyük Havalimanı Çok Katlı Yeraltı Terminal Kompleksi',
    platforms: '2 Ada Peron (3 Hat - Hızlı Havalimanı Ekspres Standardı)',
    openedDate: '22 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İstanbul Havalimanı Ana Yolcu Terminali altındaki M11 metro istasyonu',
    description: 'Dünyanın en büyük havalimanlarından İstanbul Havalimanı\'nın ana terminal binası karşısında yer alır. Uçak yolcularına bavul taşıma kolaylığı sunan geniş yürüyen bantlar, akıllı biniş ekranları ve 120 km/s hızla rekor sürede şehir merkezine kesintisiz erişim sağlar.',
    historicalContext: '22 Ocak 2023 tarihinde hizmete girmiştir. Türkiye\'nin en hızlı ve en teknolojik havalimanı metrosudur.',
    features: ['İstanbul Havalimanı Ana Terminaline Doğrudan Yürüyen Bant Geçişi', 'Uçuş Bilgi Ekranları (FIDS)', 'Bavul Rampaları ve Geniş Engelsiz Asansörler', '120 km/s Saatte Hızlı Seferler'],
    interchanges: [
      {
        lineCode: 'Havalimanı',
        lineName: 'İstanbul Havalimanı (IST) Uçuş Terminalleri (İç & Dış Hatlar)',
        type: 'rail',
        color: '#A1609B',
        stationName: 'İstanbul Havalimanı Ana Terminali',
        transferType: 'Doğrudan Yeraltı Yürüyen Bant Tüneli',
        distance: '150m',
        walkingTime: '~2 dk yürüme',
        description: 'İstasyon çıkışından yürüyen bantlar eşliğinde doğrudan havalimanı gidiş ve geliş katına erişim.'
      }
    ]
  },
  'istanbul havalimani': {
    id: 'istanbul-havalimani-ascii-alias',
    name: 'İstanbul Havalimanı Station',
    cleanName: 'İstanbul Havalimanı',
    turkishName: 'İstanbul Havalimanı Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Arnavutköy (Havalimanı)',
    structureType: 'Havalimanı Terminal İstasyonu',
    platforms: '2 Ada Peron',
    openedDate: '22 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İstanbul Havalimanı İstasyonu',
    description: 'İstanbul Havalimanı M11 istasyonudur.',
    historicalContext: '22 Ocak 2023 tarihinde açılmıştır.',
    features: ['Ana Terminal Bağlantısı'],
    interchanges: []
  },
  'kargo terminali': {
    id: 'kargo-terminali-m11',
    name: 'Kargo Terminali Station',
    cleanName: 'Kargo Terminali',
    turkishName: 'Kargo Terminali Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Arnavutköy (İstanbul Havalimanı Kargo Şehri / THY Cargo / Gümrük Bölgesi)',
    structureType: 'Yeraltı İstasyonu (1. Etap Kuzeybatı Terminali)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '22 Ocak 2023',
    openedDateFormatted: '01-2023',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kargo Terminali İstasyonu peronları',
    description: 'İstanbul Havalimanı Kargo Şehri, Turkish Cargo tesisleri, gümrük müdürlüğü ve lojistik merkezine hizmet verir. 22 Ocak 2023 açılış etabının kuzeybatı başlangıç ve bitiş istasyonudur.',
    historicalContext: '22 Ocak 2023 tarihinde ilk etabın son istasyonu olarak açılmıştır.',
    features: ['Havalimanı Kargo Şehri', 'THY Cargo Tesisleri', 'Gümrük Müdürlüğü'],
    interchanges: []
  },
  'taşoluk': {
    id: 'tasoluk-m11',
    name: 'Taşoluk Station',
    cleanName: 'Taşoluk',
    turkishName: 'Taşoluk Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Arnavutköy (Mareşal Fevzi Çakmak Mahallesi / Atatürk Caddesi)',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Taşoluk M11 İstasyonu modern peron holü',
    description: 'M11 hızlı metro hattının Kargo Terminali ile Arnavutköy Hastane arasındaki istasyonudur. Taşoluk ve Mareşal Fevzi Çakmak mahalleleri sakinlerine ve İstanbul Havalimanı çalışanlarına hızlı raylı ulaşım sağlar.',
    historicalContext: '19 Mart 2024 tarihinde Kargo Terminali – Arnavutköy Hastane etabıyla beraber hizmete alınmıştır.',
    features: ['M11 Hızlı Metro Erişimi (120 km/s)', 'Ada Peron Tasarımı', 'Arnavutköy Konut Bölgeleri Bağlantısı', 'İETT Otobüs Hatları Entegrasyonu'],
    interchanges: [
      {
        lineCode: 'İETT',
        lineName: 'İETT Otobüs Hatları',
        type: 'tram',
        color: '#A1609B',
        stationName: 'Taşoluk Metro Otobüs Durağı',
        transferType: 'Cadde / Zemin Seviyesi',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'Taşoluk, Hadımköy ve Arnavutköy mahallelerine hizmet veren İETT besleme otobüs hatları aktarması.'
      }
    ]
  },
  'tasoluk': {
    id: 'tasoluk-ascii-alias',
    name: 'Taşoluk Station',
    cleanName: 'Taşoluk',
    turkishName: 'Taşoluk Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Arnavutköy',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Taşoluk M11 İstasyonu',
    description: 'Taşoluk M11 metro istasyonu.',
    historicalContext: '19 Mart 2024 tarihinde açılmıştır.',
    features: ['Hızlı Metro', 'Taşoluk Bağlantısı'],
    interchanges: []
  },
  'arnavutköy hastane': {
    id: 'arnavutkoy-hastane-m11',
    name: 'Arnavutköy Hastane Station',
    cleanName: 'Arnavutköy Hastane',
    turkishName: 'Arnavutköy Hastane Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Arnavutköy (Anadolu Mahallesi / Eski Edirne Caddesi)',
    structureType: 'Yeraltı İstasyonu (Geçici Güneybatı Terminali)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Arnavutköy Hastane M11 İstasyonu ve Devlet Hastanesi Yerleşkesi',
    description: 'Arnavutköy ilçe merkezinde yer alan kritik metro istasyonudur. Arnavutköy Devlet Hastanesi, Arnavutköy Şehir Parkı ve Eski Edirne Asfaltı bağlantısıyla bölgenin ana sağlık ve ulaşım omurgasını oluşturur.',
    historicalContext: '19 Mart 2024 tarihinde hizmete girmiştir. Hattın 14 km’lik Kargo Terminali – Arnavutköy Hastane kesiminin terminali olarak faaliyete başlamıştır.',
    features: ['Arnavutköy Devlet Hastanesine Doğrudan Erişim', 'Arnavutköy Şehir Parkı & Meydan', 'Büyük İETT Otobüs Peronları Aktarma Alanı', 'Gelecekteki Halkalı Entegrasyonu'],
    interchanges: [
      {
        lineCode: 'İETT',
        lineName: 'Arnavutköy İETT Otobüs Peronları',
        type: 'tram',
        color: '#A1609B',
        stationName: 'Arnavutköy Peronları',
        transferType: 'Cadde / Zemin Seviyesi',
        distance: '60m',
        walkingTime: '~1 dk yürüme',
        description: 'Sultangazi, Gaziosmanpaşa, Hadımköy ve çevre ilçelere bağlantı sağlayan geniş İETT otobüs hatları peronu.'
      }
    ]
  },
  'arnavutkoy hastane': {
    id: 'arnavutkoy-hastane-ascii-alias',
    name: 'Arnavutköy Hastane Station',
    cleanName: 'Arnavutköy Hastane',
    turkishName: 'Arnavutköy Hastane Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Arnavutköy',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Arnavutköy Hastane İstasyonu',
    description: 'Arnavutköy Hastane M11 metro istasyonu.',
    historicalContext: '19 Mart 2024 tarihinde açılmıştır.',
    features: ['Hastane Erişimi', 'Hızlı Metro'],
    interchanges: []
  },
  'arnavutköy': {
    id: 'arnavutkoy-alias',
    name: 'Arnavutköy Hastane Station',
    cleanName: 'Arnavutköy Hastane',
    turkishName: 'Arnavutköy Hastane Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Arnavutköy',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Arnavutköy Hastane İstasyonu',
    description: 'Arnavutköy Hastane M11 metro istasyonu.',
    historicalContext: '19 Mart 2024 tarihinde açılmıştır.',
    features: ['Hastane Erişimi', 'Hızlı Metro'],
    interchanges: []
  },
  'i̇bn haldun üniversitesi': {
    id: 'ibn-haldun-universitesi-m11',
    name: 'İbn Haldun Üniversitesi Station',
    cleanName: 'İbn Haldun Üniversitesi',
    turkishName: 'İbn Haldun Üniversitesi Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Başakşehir (Fenertepe / İbn Haldun Üniversitesi Yerleşkesi)',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Haziran 2026',
    openedDateFormatted: '06-2026',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İbn Haldun Üniversitesi M11 Metro İstasyonu',
    description: 'İbn Haldun Üniversitesi ana kampüsü ve Fenertepe bölgesine doğrudan hızlı metro bağlantısı sağlar.',
    historicalContext: '19 Haziran 2026 tarihinde Arnavutköy Hastane – Halkalı etabı ile birlikte açılmıştır.',
    features: ['Üniversite Kampüsüne Doğrudan Erişim', 'Fenertepe Konut Alanları Entegrasyonu', 'Hızlı Metro (120 km/s)'],
    interchanges: [
      {
        lineCode: 'İETT',
        lineName: 'İETT Otobüs Hatları',
        type: 'tram',
        color: '#A1609B',
        stationName: 'İbn Haldun Üniversitesi Otobüs Durağı',
        transferType: 'Cadde / Zemin Seviyesi',
        distance: '60m',
        walkingTime: '~1 dk yürüme',
        description: 'Fenertepe ve Başakşehir yönüne giden İETT otobüs hatları aktarması.'
      }
    ]
  },
  'ibn haldun üniversitesi': {
    id: 'ibn-haldun-universitesi-ascii-alias',
    name: 'İbn Haldun Üniversitesi Station',
    cleanName: 'İbn Haldun Üniversitesi',
    turkishName: 'İbn Haldun Üniversitesi Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Başakşehir',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Haziran 2026',
    openedDateFormatted: '06-2026',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İbn Haldun Üniversitesi İstasyonu',
    description: 'İbn Haldun Üniversitesi M11 metro istasyonu.',
    historicalContext: '19 Haziran 2026 tarihinde açılmıştır.',
    features: ['Üniversite Erişimi'],
    interchanges: []
  },
  'kayaşehir': {
    id: 'kayasehir-m11',
    name: 'Kayaşehir Station (M11)',
    cleanName: 'Kayaşehir',
    turkishName: 'Kayaşehir Metro İstasyonu (M11)',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Başakşehir (Kayaşehir Merkez / Başakşehir Millet Bahçesi)',
    structureType: 'Yeraltı Entegre Aktarma İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Haziran 2026',
    openedDateFormatted: '06-2026',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kayaşehir M11 İstasyonu ve M3 aktarma merkezi',
    description: 'Kayaşehir bölgesinin ana raylı ulaşım merkezidir. M3 Bakırköy Sahil – Kayaşehir Merkez metro hattı ile doğrudan yeraltı bağlantısı kurarak havalimanı ve güney metro koridorunu birbirine bağlar.',
    historicalContext: '19 Haziran 2026’da M11’in Halkalı etabıyla açılmıştır. M3 Kayaşehir Merkez istasyonuna yer altı turnike ve tünel bağlantısı sağlanmıştır.',
    features: ['M3 Metro Hattına Doğrudan Yeraltı Aktarması', 'Kayaşehir Merkez ve Başakşehir Millet Bahçesi', 'Geniş Turnike Holü'],
    interchanges: [
      {
        lineCode: 'M3',
        lineName: 'M3 Bakırköy Sahil – Kayaşehir Merkez Metro Hattı',
        type: 'metro',
        color: '#0CA6DF',
        stationName: 'Kayaşehir Merkez M3 İstasyonu',
        transferType: 'Ortak Yeraltı Turnike Holü',
        distance: '90m',
        walkingTime: '~1.5 dk yürüme',
        description: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir metrosuna doğrudan ortak yeraltı holü üzerinden aktarma.'
      }
    ]
  },
  'kayasehir': {
    id: 'kayasehir-ascii-alias',
    name: 'Kayaşehir Station (M11)',
    cleanName: 'Kayaşehir',
    turkishName: 'Kayaşehir Metro İstasyonu (M11)',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Başakşehir',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Haziran 2026',
    openedDateFormatted: '06-2026',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kayaşehir M11 İstasyonu',
    description: 'Kayaşehir M11 metro istasyonu.',
    historicalContext: '19 Haziran 2026 tarihinde açılmıştır.',
    features: ['M3 Aktarması'],
    interchanges: []
  },
  'olimpiyatköy': {
    id: 'olimpiyatkoy-m11',
    name: 'Olimpiyatköy Station (M11)',
    cleanName: 'Olimpiyatköy',
    turkishName: 'Olimpiyatköy Metro İstasyonu (M11)',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Başakşehir (Ziya Gökalp / Atatürk Olimpiyat Stadyumu)',
    structureType: 'Yeraltı Entegre Aktarma İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Haziran 2026',
    openedDateFormatted: '06-2026',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Olimpiyatköy M11 İstasyonu ve Atatürk Olimpiyat Stadyumu',
    description: 'Atatürk Olimpiyat Stadyumu ve Olimpiyat yerleşkesine hizmet veren devasa spor ve ulaşım merkezidir. M9 Ataköy – Olimpiyat metro hattı ile doğrudan yeraltı bağlantısı sunar.',
    historicalContext: '19 Haziran 2026 tarihinde hizmete girmiştir. M9 metrosunun Olimpiyat istasyonuna doğrudan yeraltı entegrasyonu tamamlanmıştır.',
    features: ['M9 Ataköy–Olimpiyat Metrosuna Aktarma', 'Atatürk Olimpiyat Stadyumu', 'Devasa Otopark ve Spor Kompleksi'],
    interchanges: [
      {
        lineCode: 'M9',
        lineName: 'M9 Ataköy – Olimpiyat Metro Hattı',
        type: 'metro',
        color: '#FCD10D',
        stationName: 'Olimpiyat M9 İstasyonu',
        transferType: 'Yeraltı Bağlantı Tüneli',
        distance: '100m',
        walkingTime: '~2 dk yürüme',
        description: 'M9 Ataköy – İkitelli Sanayi – Olimpiyat metrosuna doğrudan yeraltı tüneliyle kolay aktarma.'
      }
    ]
  },
  'olimpiyatkoy': {
    id: 'olimpiyatkoy-ascii-alias',
    name: 'Olimpiyatköy Station (M11)',
    cleanName: 'Olimpiyatköy',
    turkishName: 'Olimpiyatköy Metro İstasyonu (M11)',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Başakşehir',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Haziran 2026',
    openedDateFormatted: '06-2026',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Olimpiyatköy M11 İstasyonu',
    description: 'Olimpiyatköy M11 metro istasyonu.',
    historicalContext: '19 Haziran 2026 tarihinde açılmıştır.',
    features: ['M9 Aktarması'],
    interchanges: []
  },
  'halkalı stadı': {
    id: 'halkali-stadi-m11',
    name: 'Halkalı Stadı Station',
    cleanName: 'Halkalı Stadı',
    turkishName: 'Halkalı Stadı Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Küçükçekmece (Atakent Mahallesi / Tema World / İBB Halkalı Stadı)',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Haziran 2026',
    openedDateFormatted: '06-2026',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Halkalı Stadı M11 İstasyonu',
    description: 'Atakent Mahallesi, Tema World eğlence merkezi, Tema İstanbul konutları ve İBB Halkalı Futbol Stadı spor tesislerine hizmet verir. Gelecekteki M7 Atakent Mahallesi istasyonuna aktarma imkanı planlanmıştır.',
    historicalContext: '19 Haziran 2026 tarihinde hizmete girmiştir.',
    features: ['Tema World & Tema İstanbul Erişimi', 'İBB Halkalı Futbol Stadı', 'Gelecekteki M7 Uzatması Entegrasyonu'],
    interchanges: [
      {
        lineCode: 'M7',
        lineName: 'M7 Kabataş – Mahmutbey – Esenyurt Metro Hattı (İnşaat/Planlanan)',
        type: 'metro',
        color: '#F490B3',
        stationName: 'Atakent Mahallesi M7 İstasyonu',
        transferType: 'Yeraltı Bağlantı Tüneli',
        distance: '120m',
        walkingTime: '~2 dk yürüme',
        description: 'M7 Kabataş–Esenyurt metro uzatmasına planlanan yeraltı aktarması.'
      }
    ]
  },
  'halkali stadi': {
    id: 'halkali-stadi-ascii-alias',
    name: 'Halkalı Stadı Station',
    cleanName: 'Halkalı Stadı',
    turkishName: 'Halkalı Stadı Metro İstasyonu',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Küçükçekmece',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Haziran 2026',
    openedDateFormatted: '06-2026',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Halkalı Stadı İstasyonu',
    description: 'Halkalı Stadı M11 metro istasyonu.',
    historicalContext: '19 Haziran 2026 tarihinde açılmıştır.',
    features: ['Tema World Bağlantısı'],
    interchanges: []
  },
  'halkalı': {
    id: 'halkali-m11',
    name: 'Halkalı Station (M11)',
    cleanName: 'Halkalı',
    turkishName: 'Halkalı Metro İstasyonu (M11)',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Küçükçekmece (İstasyon Mahallesi / Halkalı Gar Meydanı)',
    structureType: 'Yeraltı Terminal İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Haziran 2026',
    openedDateFormatted: '06-2026',
    imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Halkalı M11 Terminal İstasyonu ve Marmaray / YHT Gar Meydanı',
    description: 'M11 hattının güneybatı ana terminal istasyonudur. Marmaray (B1) banliyö hattı, YHT Yüksek Hızlı Tren garı, TCDD Taşımacılık bölgesel trenleri ve gelecekteki M1B Kirazlı–Halkalı metro hattı ile devasa bir ulusal ve kentsel aktarma merkezi oluşturur.',
    historicalContext: '19 Haziran 2026 tarihinde hizmete girerek M11 İstanbul Havalimanı metrosunun güneybatı ayağını tamamlamış ve Halkalı–Gayrettepe hattını bir ring omurgasına kavuşturmuştur.',
    features: ['Marmaray (B1) Banliyö Hattına Doğrudan Aktarma', 'YHT Yüksek Hızlı Tren Garı Erişimi', 'Bölgesel ve Uluslararası Tren Bağlantısı', 'Gelecekteki M1B Metro Hattı Entegrasyonu'],
    interchanges: [
      {
        lineCode: 'B1',
        lineName: 'Marmaray (Halkalı – Gebze)',
        type: 'rail',
        color: '#65656A',
        stationName: 'Halkalı Marmaray İstasyonu',
        transferType: 'Ortak İstasyon Meydanı & Yeraltı Tüneli',
        distance: '100m',
        walkingTime: '~2 dk yürüme',
        description: 'Halkalı–Gebze Marmaray banliyö hattına zemin ve yeraltı holü üzerinden aktarma.'
      },
      {
        lineCode: 'YHT',
        lineName: 'Yüksek Hızlı Tren & TCDD Taşımacılık',
        type: 'rail',
        color: '#004B86',
        stationName: 'Halkalı YHT Garı',
        transferType: 'Doğrudan Gar Binası Bağlantısı',
        distance: '80m',
        walkingTime: '~1 dk yürüme',
        description: 'Ankara, Eskişehir, Konya, Karaman ve Sivas yönüne giden YHT seferlerine doğrudan erişim.'
      },
      {
        lineCode: 'M1B',
        lineName: 'M1B Yenikapı – Kirazlı – Halkalı Metro Hattı (İnşa Halinde)',
        type: 'metro',
        color: '#EE2229',
        stationName: 'Halkalı M1B İstasyonu',
        transferType: 'Yeraltı Turnike Holü',
        distance: '110m',
        walkingTime: '~2 dk yürüme',
        description: 'İnşa halindeki M1B Kirazlı–Halkalı uzatmasına doğrudan yeraltı holü aktarması.'
      }
    ]
  },
  'halkali': {
    id: 'halkali-ascii-alias',
    name: 'Halkalı Station (M11)',
    cleanName: 'Halkalı',
    turkishName: 'Halkalı Metro İstasyonu (M11)',
    lineCode: 'M11',
    lineName: 'M11 Gayrettepe – İstanbul Havalimanı – Halkalı Metro Hattı',
    district: 'Küçükçekmece',
    structureType: 'Yeraltı İstasyonu',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '19 Haziran 2026',
    openedDateFormatted: '06-2026',
    imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Halkalı M11 İstasyonu',
    description: 'Halkalı M11 metro terminali.',
    historicalContext: '19 Haziran 2026 tarihinde açılmıştır.',
    features: ['Marmaray & YHT Aktarması'],
    interchanges: []
  }
};

export function getM11StationDetail(rawName: string): StationDetail | null {
  if (!rawName) return null;
  const clean = rawName
    .replace(/\s+Station(\s*\([A-Za-z0-9]+\))?$/i, '')
    .replace(/\s+İstasyonu(\s*\([A-Za-z0-9]+\))?$/i, '')
    .replace(/\s*\([A-Za-z0-9]+\)$/i, '')
    .trim()
    .toLowerCase();

  if (M11_STATIONS_DATA[clean]) {
    return M11_STATIONS_DATA[clean];
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

  for (const [key, val] of Object.entries(M11_STATIONS_DATA)) {
    const normalizedKey = normalize(key);
    if (
      normalizedClean === normalizedKey ||
      normalizedClean.includes(normalizedKey) ||
      normalizedKey.includes(normalizedClean)
    ) {
      return val;
    }
  }

  if (normalizedClean.includes('gayrettepe')) return M11_STATIONS_DATA['gayrettepe'];
  if (normalizedClean.includes('kagithane') || normalizedClean.includes('kağıthane')) return M11_STATIONS_DATA['kağıthane'];
  if (normalizedClean.includes('hasdal')) return M11_STATIONS_DATA['üniversite - hasdal'];
  if (normalizedClean.includes('kemerburgaz')) return M11_STATIONS_DATA['kemerburgaz'];
  if (normalizedClean.includes('gokturk') || normalizedClean.includes('göktürk')) return M11_STATIONS_DATA['göktürk'];
  if (normalizedClean.includes('ihsaniye') || normalizedClean.includes('ihsaniye')) return M11_STATIONS_DATA['ihsaniye'];
  if (normalizedClean.includes('havalimani') || normalizedClean.includes('havalimanı') || normalizedClean.includes('airport')) return M11_STATIONS_DATA['istanbul havalimanı'];
  if (normalizedClean.includes('kargo')) return M11_STATIONS_DATA['kargo terminali'];
  if (normalizedClean.includes('tasoluk') || normalizedClean.includes('taşoluk')) return M11_STATIONS_DATA['taşoluk'];
  if (normalizedClean.includes('arnavutkoy') || normalizedClean.includes('arnavutköy')) return M11_STATIONS_DATA['arnavutköy hastane'];
  if (normalizedClean.includes('ibn haldun') || normalizedClean.includes('fenertepe')) return M11_STATIONS_DATA['i̇bn haldun üniversitesi'];
  if (normalizedClean.includes('kayasehir') || normalizedClean.includes('kayaşehir')) return M11_STATIONS_DATA['kayaşehir'];
  if (normalizedClean.includes('olimpiyat')) return M11_STATIONS_DATA['olimpiyatköy'];
  if (normalizedClean.includes('stadi') || normalizedClean.includes('stadı') || normalizedClean.includes('tema')) return M11_STATIONS_DATA['halkalı stadı'];
  if (normalizedClean.includes('halkali') || normalizedClean.includes('halkalı')) return M11_STATIONS_DATA['halkalı'];

  return null;
}
