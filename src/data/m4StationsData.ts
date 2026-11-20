import { StationDetail } from './m1StationsData';

export const M4_STATIONS_DATA: Record<string, StationDetail> = {
  'kadıköy': {
    id: 'kadikoy-m4',
    name: 'Kadıköy Station',
    cleanName: 'Kadıköy',
    turkishName: 'Kadıköy Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Kadıköy (Rıhtım / Meydan / İskeleler)',
    structureType: 'Yeraltı (Denizaltı Tabanlı Derin İstasyon)',
    platforms: '1 Ada Peron (2 Hat - Çift Dönüş Makasları)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kad%C4%B1k%C3%B6y_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Kadıköy Meydanı altındaki M4 Metro İstasyonu ve vapur aktarma meydanı',
    description: 'Anadolu Yakası’nın en büyük deniz ve kara aktarma merkezi olan Kadıköy Rıhtım Meydanı altında yer alan, M4 metrosunun batı başlangıç ve bitiş terminalidir.',
    historicalContext: '17 Ağustos 2012 tarihinde Anadolu Yakası’nın ilk metro hattı olarak açılan M4 Kadıköy–Kartal etabının batı terminali olarak açılmıştır.',
    features: ['Şehir Hatları Kadıköy Vapur İskeleleri Karşısı', 'T3 Kadıköy-Moda Nostaljik Tramvayı Aktarması', 'İDO Hızlı Feribot İskelesi Entegrasyonu', 'Rıhtım İETT Otobüs Peronları'],
    interchanges: [
      {
        lineCode: 'T3',
        lineName: 'T3 Kadıköy – Moda Nostaljik Ring Tramvayı',
        type: 'tram',
        color: '#99562F',
        stationName: 'İskele Meydanı Durağı',
        transferType: 'Meydan / Rıhtım Çıkışı',
        distance: '60m',
        walkingTime: '~1 dk yürüme',
        description: 'Meydan çıkışından doğrudan Tarihi Moda nostaljik tramvay durağına geçiş.'
      },
      {
        lineCode: 'Vapur',
        lineName: 'Şehir Hatları Vapurları (Eminönü, Karaköy, Beşiktaş, Kabataş, Adalar)',
        type: 'rail',
        color: '#0284c7',
        stationName: 'Kadıköy Vapur İskeleleri',
        transferType: 'Meydan / İskele Çıkışı',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'Doğrudan Avrupa Yakası’na sefer yapan tarihi Boğaziçi vapurlarına aktarma.'
      }
    ]
  },
  'ayrılık çeşmesi': {
    id: 'ayrilik-cesmesi-m4',
    name: 'Ayrılık Çeşmesi Station',
    cleanName: 'Ayrılık Çeşmesi',
    turkishName: 'Ayrılık Çeşmesi Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Kadıköy (Rasimpaşa / Tepe Nautilus)',
    structureType: 'Yeraltı (Çok Katlı Entegre İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '29 Ekim 2013',
    openedDateFormatted: '10-2013',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ayr%C4%B1l%C4%B1k_%C3%87e%C5%9Fmesi_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Marmaray ve M4 ortak bilet holü ve aktarma koridorları',
    description: 'Tepe Nautilus AVM yanında yer alan, M4 metrosunu Boğaz altından geçen Marmaray banliyö hattına bağlayan kıtalararası stratejik aktarma merkezidir.',
    historicalContext: 'M4 hattının Kadıköy–Kartal etabı 17 Ağustos 2012’de hizmete girmiş; ancak Ayrılık Çeşmesi istasyonu Marmaray entegre istasyon yapısının tamamlanmasıyla 29 Ekim 2013 (10-2013) tarihinde hizmete alınmıştır.',
    features: ['Marmaray Boğaz Geçişine Doğrudan Yeraltı Turnike Aktarması', 'Tepe Nautilus AVM Doğrudan Bağlantısı', 'Tarihi Ayrılık Çeşmesi Parkı'],
    interchanges: [
      {
        lineCode: 'Marmaray',
        lineName: 'Marmaray (Halkalı – Gebze Banliyö Treni)',
        type: 'rail',
        color: '#65656A',
        stationName: 'Ayrılık Çeşmesi Tren İstasyonu',
        transferType: 'Doğrudan Yeraltı Bağlantı Tüneli',
        distance: '30m',
        walkingTime: '~1 dk yürüme',
        description: 'Ortak bilet holünden doğrudan Boğaz altından tüp tünelle Avrupa Yakası’na geçen Marmaray trenlerine anında aktarma.'
      }
    ]
  },
  'acıbadem': {
    id: 'acibadem-m4',
    name: 'Acıbadem Station',
    cleanName: 'Acıbadem',
    turkishName: 'Acıbadem Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Kadıköy (Acıbadem / D.100 Karayolu)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ac%C4%B1badem_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Acıbadem M4 İstasyonu D.100 altgeçit çıkışları',
    description: 'D.100 Karayolu altında Acıbadem Caddesi ve Koşuyolu bölgesine hizmet sunan yeraltı metro istasyonudur.',
    historicalContext: '17 Ağustos 2012 tarihinde M4 açılışıyla hizmete girmiştir.',
    features: ['D.100 Çift Taraflı Altgeçit Çıkışları', 'Engelli Asansörleri', 'Yürüyen Merdivenler'],
    interchanges: []
  },
  'ünalan': {
    id: 'unalan-m4',
    name: 'Ünalan Station',
    cleanName: 'Ünalan',
    turkishName: 'Ünalan Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Üsküdar / Kadıköy (Uzunçayır / Ünalan)',
    structureType: 'Yeraltı (Entegre Aktarma İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/%C3%9Cnalan_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Uzunçayır Metrobüs ve M4 Ünalan yer altı aktarma tüneli',
    description: 'Metrobüs Uzunçayır istasyonu, Akasya AVM ve Ünalan/Fikirtepe mahallelerini birbirine bağlayan Anadolu Yakası’nın en işlek aktarma merkezidir.',
    historicalContext: '17 Ağustos 2012 tarihinde açılmıştır. D.100 altındaki uzun yürüyen bantlı tünelleriyle Metrobüs’e kesintisiz kapalı aktarma sağlar.',
    features: ['Uzunçayır Metrobüs İstasyonuna Kapalı Yürüyen Bantlı Tünel', 'Akasya AVM Doğrudan Bağlantısı', 'Uzunçayır İETT Otobüs Peronları'],
    interchanges: [
      {
        lineCode: 'Metrobüs',
        lineName: 'Metrobüs (Söğütlüçeşme – Beylikdüzü)',
        type: 'rail',
        color: '#E81E77',
        stationName: 'Uzunçayır Metrobüs İstasyonu',
        transferType: 'Kapalı Yürüyen Bantlı Tünel',
        distance: '80m',
        walkingTime: '~1.5 dk yürüme',
        description: 'Klimalı yeraltı tüneli üzerinden 15 Temmuz Şehitler Köprüsü yönüne giden Metrobüs durağına doğrudan geçiş.'
      }
    ]
  },
  'göztepe': {
    id: 'goztepe-m4',
    name: 'Göztepe Station (M4)',
    cleanName: 'Göztepe',
    turkishName: 'Göztepe Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Kadıköy (Göztepe / D.100 Köprüsü)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%B6ztepe_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Göztepe M4 Metro İstasyonu peron holü',
    description: 'D.100 Karayolu Göztepe Köprüsü altında yer alan, Medeniyet Üniversitesi ve Göztepe Şehir Hastanesi çevre aksına hizmet veren istasyondur.',
    historicalContext: '17 Ağustos 2012 tarihinde M4 1. etabıyla hizmete açılmıştır.',
    features: ['İstanbul Medeniyet Üniversitesi Çıkışı', 'D.100 Karayolu Otobüs Durakları Entegrasyonu', 'Engelli Erişimi'],
    interchanges: []
  },
  'yenisahra': {
    id: 'yenisahra-m4',
    name: 'Yenisahra Station',
    cleanName: 'Yenisahra',
    turkishName: 'Yenisahra Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Ataşehir / Kadıköy (Yenisahra / Kozyatağı)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yenisahra_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Yenisahra M4 Metro İstasyonu peronları',
    description: 'Ataşehir ve Kadıköy sınırında yer alan, Palladium AVM, Optimum AVM ve çevresindeki finans/ofis alanlarına hizmet veren derin istasyondur.',
    historicalContext: '17 Ağustos 2012’de açılmıştır. İleride açılacak M12 Göztepe–Ümraniye metrosuna aktarma sağlayacak şekilde tasarlanmıştır.',
    features: ['Optimum ve Palladium AVM Erişimi', 'Ataşehir Otobüs ve Minibüs Hatları', 'Geniş Yeraltı Bilet Holü'],
    interchanges: []
  },
  'kozyatağı': {
    id: 'kozyatagi-m4',
    name: 'Kozyatağı Station',
    cleanName: 'Kozyatağı',
    turkishName: 'Kozyatağı Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Ataşehir / Kadıköy (Kozyatağı İş Merkezleri)',
    structureType: 'Yeraltı (Çok Katlı Entegre İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kozyata%C4%9F%C4%B1_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Kozyatağı M4 ve M8 ortak aktarma istasyonu',
    description: 'Kozyatağı plazalar ve iş merkezleri bölgesi altında yer alan, City’s Kozyatağı AVM ve daha sonra M8 Bostancı–Parseller metrosu ile birleşen büyük aktarma merkezidir.',
    historicalContext: '17 Ağustos 2012 tarihinde açılmıştır. 2023 yılında M8 sürücüsüz metro hattının açılmasıyla aktarma istasyonu kimliği güçlenmiştir.',
    features: ['City’s Kozyatağı AVM Doğrudan Girişi', 'M8 Bostancı–Dudullu Metrosu Yeraltı Aktarması', 'İş Kuleleri Bölgesi Çıkışları'],
    interchanges: [
      {
        lineCode: 'M8',
        lineName: 'M8 Bostancı – Parseller Sürücüsüz Metro Hattı',
        type: 'metro',
        color: '#487ABF',
        stationName: 'Kozyatağı M8 İstasyonu',
        transferType: 'Doğrudan Yeraltı Bağlantı Tüneli',
        distance: '45m',
        walkingTime: '~1 dk yürüme',
        description: 'Yeraltı bilet holünden doğrudan M8 Bostancı–Dudullu metro hattına kapalı geçiş.'
      }
    ]
  },
  'bostancı': {
    id: 'bostanci-m4',
    name: 'Bostancı Station (M4)',
    cleanName: 'Bostancı',
    turkishName: 'Bostancı Metro İstasyonu (M4)',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Kadıköy (Bostancı Sanayi / D.100)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bostanc%C4%B1_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Bostancı M4 İstasyonu peron holü',
    description: 'D.100 Karayolu Bostancı Kavşağı altında yer alır. Bostancı Sanayi Sitesi ve sahil yönü otobüs hatlarına hizmet sunar.',
    historicalContext: '17 Ağustos 2012 tarihinde hizmete açılmıştır.',
    features: ['Bostancı Sanayi Sitesi Çıkışı', 'Park Et Devam Et Otoparkı', 'D.100 Otobüs Durakları'],
    interchanges: []
  },
  'küçükyalı': {
    id: 'kucukyali-m4',
    name: 'Küçükyalı Station',
    cleanName: 'Küçükyalı',
    turkishName: 'Küçükyalı Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Maltepe (Küçükyalı / Hilltown)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/K%C3%BC%C3%A7%C3%BCkyal%C4%B1_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Küçükyalı M4 İstasyonu ve Hilltown AVM çıkışları',
    description: 'Maltepe ilçesinde Küçükyalı, Hilltown AVM ve İstanbul Ticaret Üniversitesi yerleşkesine hizmet veren yoğun istasyondur.',
    historicalContext: '17 Ağustos 2012 tarihinde M4 hattıyla birlikte açılmıştır.',
    features: ['Hilltown AVM Çıkışı', 'İstanbul Ticaret Üniversitesi Erişimi', 'Asansör ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'maltepe': {
    id: 'maltepe-m4',
    name: 'Maltepe Station',
    cleanName: 'Maltepe',
    turkishName: 'Maltepe Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Maltepe (Zümrütevler / D.100)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maltepe_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Maltepe M4 Metro İstasyonu peron holü',
    description: 'D.100 üzerinde Maltepe ilçe merkezi girişi ve Zümrütevler Mahallesi’ne hizmet sunan ana istasyondur.',
    historicalContext: '17 Ağustos 2012 tarihinde açılmıştır.',
    features: ['Zümrütevler Köprüsü Çıkışı', 'İlçe Merkezi Minibüs Aktarmaları', 'Geniş Bilet Holü'],
    interchanges: []
  },
  'huzurevi': {
    id: 'huzurevi-m4',
    name: 'Huzurevi Station',
    cleanName: 'Huzurevi',
    turkishName: 'Huzurevi Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Maltepe (Zümrütevler / Huzurevi)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Huzurevi_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Huzurevi M4 İstasyonu',
    description: 'Maltepe Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi ile çevre yerleşim dokusuna hizmet verir.',
    historicalContext: '17 Ağustos 2012 tarihinde açılmıştır.',
    features: ['Maltepe Huzurevi Çıkışı', 'Engelsiz Yaya Erişimi', 'Turnike Geçişleri'],
    interchanges: []
  },
  'gülsuyu': {
    id: 'gulsuyu-m4',
    name: 'Gülsuyu Station',
    cleanName: 'Gülsuyu',
    turkishName: 'Gülsuyu Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Maltepe (Gülsuyu / Gülensu / D.100)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%BClsuyu_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Gülsuyu M4 Metro İstasyonu peron holü',
    description: 'Maltepe’nin Gülsuyu ve Gülensu tepelerine açılan, D.100 altındaki derin metro istasyonudur.',
    historicalContext: '17 Ağustos 2012 tarihinde açılmıştır.',
    features: ['Gülsuyu Mahallesi Çıkışı', 'Yürüyen Merdivenler ve Derin Asansörler', 'Otobüs Durakları'],
    interchanges: []
  },
  'esenkent': {
    id: 'esenkent-m4',
    name: 'Esenkent Station (M4)',
    cleanName: 'Esenkent',
    turkishName: 'Esenkent Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Maltepe (Esenkent / Cevizli Sınırı)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Esenkent_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Esenkent M4 İstasyonu',
    description: 'Maltepe Esenkent ve Cevizli sanayi/konut dönüşüm alanına hizmet veren yeraltı durağıdır.',
    historicalContext: '17 Ağustos 2012 tarihinde açılmıştır.',
    features: ['Esenkent Yerleşimi Çıkışı', 'D.100 Altgeçitleri', 'Turnike Alanı'],
    interchanges: []
  },
  'hastane - adliye': {
    id: 'hastane-adliye-m4',
    name: 'Hastane - Adliye Station',
    cleanName: 'Hastane - Adliye',
    turkishName: 'Hastane - Adliye Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Kartal (Cevizli / Anadolu Adliyesi)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / Dev Kamu Kampüsü)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hastane_-_Adliye_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'İstanbul Anadolu Adalet Sarayı ve Lütfi Kırdar Şehir Hastanesi önündeki istasyon',
    description: 'Dünyanın en büyük adliye binalarından İstanbul Anadolu Adalet Sarayı ve Kartal Dr. Lütfi Kırdar Şehir Hastanesi’ne doğrudan hizmet sunan devasa kamu istasyonudur.',
    historicalContext: '17 Ağustos 2012’de açılmıştır. Her gün on binlerce avukat, yargı mensubu, hasta ve ziyaretçiye doğrudan raylı erişim sağlar.',
    features: ['İstanbul Anadolu Adalet Sarayı Doğrudan Yeraltı Çıkışı', 'Kartal Dr. Lütfi Kırdar Şehir Hastanesi Çıkışı', 'Geniş Yeraltı Holleri ve Asansörler'],
    interchanges: []
  },
  'soğanlık': {
    id: 'soganlik-m4',
    name: 'Soğanlık Station',
    cleanName: 'Soğanlık',
    turkishName: 'Soğanlık Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Kartal (Soğanlık Yeni / D.100)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/So%C4%9Fanl%C4%B1k_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Soğanlık M4 İstasyonu peron holü',
    description: 'Kartal Soğanlık bölgesi, Uğur Mumcu Mahallesi bağlantısı ve D.100 boyunca yer alan iş merkezlerine hizmet sunar.',
    historicalContext: '17 Ağustos 2012 tarihinde hizmete açılmıştır.',
    features: ['Soğanlık Çıkışı', 'Uğur Mumcu Minibüs Hatları Entegrasyonu', 'Engelli Erişimi'],
    interchanges: []
  },
  'kartal': {
    id: 'kartal-m4',
    name: 'Kartal Station (M4)',
    cleanName: 'Kartal',
    turkishName: 'Kartal Metro İstasyonu (M4)',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Kartal (Cumhuriyet / D.100 Köprüsü)',
    structureType: 'Yeraltı (1. Aşama Doğu Terminali)',
    platforms: '1 Ada Peron (2 Hat - Çift Dönüş Makasları)',
    openedDate: '17 Ağustos 2012',
    openedDateFormatted: '08-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kartal_Metro_%C4%B0stasyonu_M4.jpg?width=1000',
    imageCaption: 'Kartal M4 Metro İstasyonu peronları ve makas holü',
    description: 'M4 hattının 2012–2016 yılları arasındaki doğu başlangıç ve bitiş terminalidir. Kartal ilçe merkezi, Pendik, Tuzla ve Gebze yönü besleme otobüslerinin ana aktarma merkezi olarak görev yapmıştır.',
    historicalContext: '17 Ağustos 2012 tarihinde Başbakanlık ve İBB töreniyle Anadolu Yakası’nın ilk metrosunun doğu terminali olarak açılmıştır. 2016’da Tavşantepe’ye uzatılana kadar 4 yıl boyunca hattın son durağı olmuştur.',
    features: ['Park Et Devam Et (P+R) Otoparkı', 'Kartal Köprüsü İETT Otobüs Aktarma Peronları', 'Genişletilmiş Turnike ve Bilet Holleri', 'Engelli Asansörleri'],
    interchanges: []
  },
  'yakacık - adnan kahveci': {
    id: 'yakacik-adnan-kahveci-m4',
    name: 'Yakacık - Adnan Kahveci Station',
    cleanName: 'Yakacık - Adnan Kahveci',
    turkishName: 'Yakacık - Adnan Kahveci Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Kartal (Hürriyet / Cumhuriyet / D.100)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Ekim 2016',
    openedDateFormatted: '10-2016',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yakacık - Adnan Kahveci M4 istasyonu peronları ve bilet holü',
    description: 'D.100 Karayolu üzerinde Kartal ile Pendik sınırında yer alan istasyon, Yakacık, Hürriyet ve Kurfalı mahallelerine konforlu raylı ulaşım sağlar.',
    historicalContext: '10 Ekim 2016 tarihinde M4 hattının Kartal–Tavşantepe uzatması kapsamında hizmete açılmıştır.',
    features: ['D.100 Karayolu Çift Taraflı Altgeçit Çıkışları', 'Adnan Kahveci Caddesi Bağlantısı', 'Engelli Asansörleri ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'yakacık': {
    id: 'yakacik-m4-alias',
    name: 'Yakacık - Adnan Kahveci Station',
    cleanName: 'Yakacık',
    turkishName: 'Yakacık - Adnan Kahveci Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Kartal (Hürriyet / Cumhuriyet / D.100)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Ekim 2016',
    openedDateFormatted: '10-2016',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yakacık - Adnan Kahveci M4 istasyonu',
    description: 'Kartal ile Pendik sınırında yer alan Yakacık istasyonudur.',
    historicalContext: '10 Ekim 2016’da hizmete girmiştir.',
    features: ['D.100 Çıkışları', 'Adnan Kahveci Caddesi', 'Engelli Erişimi'],
    interchanges: []
  },
  'adnan kahveci': {
    id: 'adnan-kahveci-m4-alias',
    name: 'Yakacık - Adnan Kahveci Station',
    cleanName: 'Adnan Kahveci',
    turkishName: 'Yakacık - Adnan Kahveci Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Kartal (Hürriyet / Cumhuriyet / D.100)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Ekim 2016',
    openedDateFormatted: '10-2016',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yakacık - Adnan Kahveci M4 istasyonu',
    description: 'Kartal ile Pendik sınırında yer alan istasyon.',
    historicalContext: '10 Ekim 2016’da açılmıştır.',
    features: ['D.100 Çıkışları', 'Engelli Erişimi'],
    interchanges: []
  },
  'pendik': {
    id: 'pendik-m4',
    name: 'Pendik Station (M4)',
    cleanName: 'Pendik',
    turkishName: 'Pendik Metro İstasyonu (M4)',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Pendik (Bahçelievler / Çamçeşme / D.100 Köprüsü)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / Ana Ulaşım Koridoru)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Ekim 2016',
    openedDateFormatted: '10-2016',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Pendik Köprüsü altındaki M4 Metro İstasyonu girişleri',
    description: 'Pendik ilçe merkezinin kuzeyinde, D.100 Karayolu üzerinde Pendik Köprüsü kavşağında yer alır. İETT otobüs ve minibüs hatlarıyla geniş bir aktarma olanağı sunar.',
    historicalContext: '10 Ekim 2016 tarihinde M4 hattının 2. aşamasıyla hizmete açılmıştır.',
    features: ['Pendik Köprüsü İETT Otobüs Aktarma Peronları', 'D.100 Çift Yönlü Yeraltı Çıkışları', 'Gelecekteki M10 Hattı Entegrasyonu', 'Engelli Asansörleri'],
    interchanges: [
      {
        lineCode: 'M10',
        lineName: 'M10 Pendik Merkez – Sabiha Gökçen Havalimanı Metro Hattı',
        type: 'metro',
        color: '#4CAA3C',
        stationName: 'Pendik İstasyonu',
        transferType: 'Ortak İstasyon Kompleksi',
        distance: '0m',
        walkingTime: '~1 dk yürüme',
        description: 'Pendik Merkez ve YHT Garı yönüne raylı sistem entegrasyonu.'
      }
    ]
  },
  'tavşantepe': {
    id: 'tavsantepe-m4',
    name: 'Tavşantepe Station',
    cleanName: 'Tavşantepe',
    turkishName: 'Tavşantepe Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Pendik (Doğu / Dumlupınar / Tersane Kavşağı)',
    structureType: 'Yeraltı (2. Aşama Doğu Nihai Terminali / Çift Dönüş Makasları)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Ekim 2016',
    openedDateFormatted: '10-2016',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Tavşantepe M4 Metro İstasyonu peron holü ve bilet gişeleri',
    description: 'M4 hattının 2016–2022 yılları arasındaki doğu nihai terminalidir. D.100 ve Tersane kavşağı yakınında konumlanmış olup Pendik, Tuzla ve Gebze yönünden gelen yolcuların ana aktarma noktası olmuştur.',
    historicalContext: '10 Ekim 2016 tarihinde M4 hattının Kartal–Tavşantepe etabının son durağı olarak hizmete açılmıştır. 2022’de Sabiha Gökçen Havalimanı uzatması açılana kadar doğu nihai terminali olarak hizmet vermiştir.',
    features: ['Park Et Devam Et (P+R) Otoparkı', 'Tersane Kavşağı ve E-5 Çıkışları', 'Genişletilmiş Turnike Holleri', 'Engelli Asansörleri ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'fevzi çakmak - hastane': {
    id: 'fevzi-cakmak-m4',
    name: 'Fevzi Çakmak - Hastane Station',
    cleanName: 'Fevzi Çakmak - Hastane',
    turkishName: 'Fevzi Çakmak - Hastane Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Pendik (Fevzi Çakmak Mahallesi)',
    structureType: 'Yeraltı (Tünel İstasyonu / 26m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '2 Ekim 2022',
    openedDateFormatted: '10-2022',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Fevzi Çakmak - Hastane M4 istasyonu peronları ve bilet holü',
    description: 'Marmara Üniversitesi Pendik Eğitim ve Araştırma Hastanesi’nin tam karşısında yer alır. Hastaneye doğrudan yeraltı tüp geçidi ile bağlantı sağlar. Gelecekte M10 Pendik Merkez hattı ile ortak istasyon olarak çalışacaktır.',
    historicalContext: '2 Ekim 2022 tarihinde Tavşantepe–Sabiha Gökçen Havalimanı uzatması kapsamında hizmete açılmıştır.',
    features: ['Marmara Üniversitesi Pendik EAH Doğrudan Yeraltı Bağlantısı', 'Gelecekteki M10 Hattı Ortak İstasyonu', 'Muhsin Yazıcıoğlu Caddesi Çıkışları', 'Engelli Asansörleri ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'fevzi cakmak': {
    id: 'fevzi-cakmak-alias',
    name: 'Fevzi Çakmak - Hastane Station',
    cleanName: 'Fevzi Çakmak - Hastane',
    turkishName: 'Fevzi Çakmak - Hastane Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Pendik (Fevzi Çakmak Mahallesi)',
    structureType: 'Yeraltı (Tünel İstasyonu / 26m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '2 Ekim 2022',
    openedDateFormatted: '10-2022',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Fevzi Çakmak - Hastane M4 istasyonu',
    description: 'Marmara Üniversitesi Pendik Eğitim ve Araştırma Hastanesi karşısındaki metro istasyonu.',
    historicalContext: '2 Ekim 2022 tarihinde hizmete açılmıştır.',
    features: ['Marmara Üniversitesi Hastanesi Bağlantısı', 'Muhsin Yazıcıoğlu Caddesi Çıkışları'],
    interchanges: []
  },
  'yayalar - şeyhli': {
    id: 'yayalar-seyhli-m4',
    name: 'Yayalar - Şeyhli Station',
    cleanName: 'Yayalar - Şeyhli',
    turkishName: 'Yayalar - Şeyhli Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Pendik (Yayalar / Şeyhli / Güllübağlar)',
    structureType: 'Yeraltı (Aç-Kapa ve Tünel İstasyonu / 24m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '2 Ekim 2022',
    openedDateFormatted: '10-2022',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yayalar - Şeyhli istasyonu Ankara Caddesi girişi',
    description: 'Ankara Caddesi üzerinde, Pendik’in Yayalar ve Şeyhli mahallelerinin kesişim noktasında yer alır. Yoğun konut yerleşimlerine ve sanayi sitelerine erişim sağlar.',
    historicalContext: '2 Ekim 2022 tarihinde M4 havalimanı etabı ile açılmıştır.',
    features: ['Ankara Caddesi Çift Taraflı Çıkışları', 'Güllübağlar ve Şeyhli Otobüs Aktarmaları', 'Engelli Asansörleri'],
    interchanges: []
  },
  'yayalar': {
    id: 'yayalar-alias',
    name: 'Yayalar - Şeyhli Station',
    cleanName: 'Yayalar - Şeyhli',
    turkishName: 'Yayalar - Şeyhli Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Pendik (Yayalar / Şeyhli)',
    structureType: 'Yeraltı (Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '2 Ekim 2022',
    openedDateFormatted: '10-2022',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yayalar - Şeyhli istasyonu',
    description: 'Yayalar ve Şeyhli mahallelerine hizmet veren metro istasyonu.',
    historicalContext: '2 Ekim 2022’de açılmıştır.',
    features: ['Ankara Caddesi Çıkışları', 'Engelli Erişimi'],
    interchanges: []
  },
  'kurtköy': {
    id: 'kurtkoy-m4',
    name: 'Kurtköy Station',
    cleanName: 'Kurtköy',
    turkishName: 'Kurtköy Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Pendik (Kurtköy Mahallesi)',
    structureType: 'Yeraltı (Tünel İstasyon / 28m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '2 Ekim 2022',
    openedDateFormatted: '10-2022',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kurtköy Metro İstasyonu peron holü',
    description: 'Kurtköy merkezinde, Ankara Caddesi ve Kurtköy Meydanı altında yer alır. Bölgedeki konut siteleri, ticaret merkezleri ve teknoloji firmalarına toplu taşıma erişimi sağlar.',
    historicalContext: '2 Ekim 2022 tarihinde hizmete açılmıştır.',
    features: ['Kurtköy Meydan Çıkışı', 'Ankara Caddesi Çıkışı', 'Engelli Erişimi ve Yürüyen Bantlar'],
    interchanges: []
  },
  'sabiha gökçen havalimanı': {
    id: 'sabiha-gokcen-m4',
    name: 'Sabiha Gökçen Havalimanı Station',
    cleanName: 'Sabiha Gökçen Havalimanı',
    turkishName: 'Sabiha Gökçen Havalimanı Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Pendik (Sabiha Gökçen Uluslararası Havalimanı / Sanayi Mahallesi)',
    structureType: 'Yeraltı (Terminal Entegre / 3 Katlı Büyük İstasyon Kompleksi)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '2 Ekim 2022',
    openedDateFormatted: '10-2022',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Sabiha Gökçen Havalimanı Metro İstasyonu ve Terminal aktarma tüneli',
    description: 'İstanbul Sabiha Gökçen Uluslararası Havalimanı (SAW) yolcu terminallerine doğrudan yeraltı tünelleri ve yürüyen bantlarla bağlı olan nihai terminal istasyonudur. Kadıköy’den havalimanına kesintisiz 50 dakikada ulaşım sağlar.',
    historicalContext: '2 Ekim 2022 tarihinde açılan istasyon, İstanbul Anadolu Yakası’nın ilk havalimanı metro bağlantısıdır.',
    features: ['Havalimanı Terminaline Doğrudan Yürüyen Bant Bağlantısı', 'Uçuş Bilgi Ekranları (FIDS)', 'Otopark ve Taksi / İETT Aktarma Tünelleri', 'Genişletilmiş Turnike ve Bagaj Kontrol Alanları'],
    interchanges: [
      {
        lineCode: 'SAW',
        lineName: 'Sabiha Gökçen Uluslararası Havalimanı (Terminal)',
        type: 'rail',
        color: '#E81E77',
        stationName: 'Dış Hatlar & İç Hatlar Terminali',
        transferType: 'Yeraltı Bağlantı Tüneli & Yürüyen Bantlar',
        distance: '100m',
        walkingTime: '~2 dk yürüme',
        description: 'Yurtiçi ve uluslararası uçuşlar için doğrudan havalimanı terminaline giriş.'
      }
    ]
  },
  'sabiha gokcen': {
    id: 'sabiha-gokcen-alias',
    name: 'Sabiha Gökçen Havalimanı Station',
    cleanName: 'Sabiha Gökçen Havalimanı',
    turkishName: 'Sabiha Gökçen Havalimanı Metro İstasyonu',
    lineCode: 'M4',
    lineName: 'M4 Kadıköy – Sabiha Gökçen Havalimanı Metro Hattı',
    district: 'Pendik (Sabiha Gökçen Havalimanı)',
    structureType: 'Yeraltı (Terminal Entegre İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '2 Ekim 2022',
    openedDateFormatted: '10-2022',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Sabiha Gökçen Havalimanı Metro İstasyonu',
    description: 'Sabiha Gökçen Havalimanı terminal istasyonudur.',
    historicalContext: '2 Ekim 2022 tarihinde hizmete açılmıştır.',
    features: ['Havalimanı Terminali Doğrudan Bağlantısı', 'Engelli Erişimi'],
    interchanges: []
  }
};

export function getM4StationDetail(stationName: string): StationDetail | null {
  if (!stationName) return null;
  const normalized = stationName
    .toLowerCase()
    .replace(/\s+station$/i, '')
    .replace(/\s+istasyonu$/i, '')
    .replace(/\s*\([^\)]*\)/g, '')
    .replace(/[–—]/g, '-')
    .trim();

  for (const [key, detail] of Object.entries(M4_STATIONS_DATA)) {
    if (normalized === key || normalized.includes(key) || key.includes(normalized)) {
      return detail;
    }
  }

  // Normalized characters
  const normalize = (s: string) =>
    s
      .replace(/i̇/g, 'i')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ç/g, 'c')
      .replace(/ğ/g, 'g');

  const normalizedClean = normalize(normalized);

  for (const [key, val] of Object.entries(M4_STATIONS_DATA)) {
    const normalizedKey = normalize(key);
    if (
      normalizedClean === normalizedKey ||
      normalizedClean.includes(normalizedKey) ||
      normalizedKey.includes(normalizedClean)
    ) {
      return val;
    }
  }

  if (normalizedClean.includes('fevzi') || normalizedClean.includes('hastane')) return M4_STATIONS_DATA['fevzi çakmak - hastane'];
  if (normalizedClean.includes('yayalar') || normalizedClean.includes('seyhli')) return M4_STATIONS_DATA['yayalar - şeyhli'];
  if (normalizedClean.includes('kurtkoy')) return M4_STATIONS_DATA['kurtköy'];
  if (normalizedClean.includes('sabiha') || normalizedClean.includes('gokcen') || normalizedClean.includes('saw') || normalizedClean.includes('havalimani')) return M4_STATIONS_DATA['sabiha gökçen havalimanı'];

  return null;
}
