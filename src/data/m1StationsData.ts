export interface StationInterchange {
  lineCode: string; // e.g. 'T1', 'T4', 'M3', 'M1B', 'F1', 'M7', 'M11'
  lineName: string; // e.g. 'T1 Kabataş - Bağcılar Tramvay Hattı'
  type: 'metro' | 'tram' | 'rail' | 'funicular';
  color: string; // Theme badge color
  textColor?: string;
  stationName?: string; // Interchange station name if different (e.g. 'Yusufpaşa' or 'Vatan')
  transferType: 'Doğrudan Peron' | 'Yeraltı Bağlantı Tüneli' | 'Cadde / Üstgeçit Yürüyüşü' | 'Doğrudan İstasyon İçi Bağlantı' | 'Cadde / Meydan Çıkışı' | string;
  distance: string; // Distance in meters (e.g. '0m (Doğrudan Peron)', '200m', '350m', '120m')
  walkingTime?: string; // e.g. 'Anında', '~3 dk yürüme', '~2 dk yürüme'
  description: string;
}

export interface StationDetail {
  id: string;
  name: string; // Official name in layer (e.g. "Aksaray Station")
  cleanName: string; // e.g. "Aksaray"
  turkishName: string;
  lineCode: string; // "M1A / M1B" or "M1A" or "M2"
  lineName: string;
  district: string; // e.g. "Fatih", "Zeytinburnu", "Şişli"
  structureType: 'Yeraltı' | 'Hemzemin (Yüzeysel)' | 'Viyadük (Yükseltilmiş)' | 'Aç-Kapa / Yeraltı' | 'Yeraltı (Derin Tünel İstasyonu)' | 'Yeraltı (Çok Katlı Entegre İstasyon)' | string;
  platforms: string; // e.g. "Ada Peron (2 Hat)"
  openedDate: string; // e.g. "3 Eylül 1989"
  openedDateFormatted: string; // e.g. "09-1989"
  imageUrl: string;
  imageCaption: string;
  description: string;
  historicalContext: string;
  features: string[];
  interchanges: StationInterchange[];
}

export const M1_STATIONS_DATA: Record<string, StationDetail> = {
  'yenikapı': {
    id: 'yenikapi-m1',
    name: 'Yenikapı Station (M1)',
    cleanName: 'Yenikapı',
    turkishName: 'Yenikapı Metro İstasyonu',
    lineCode: 'M1A / M1B',
    lineName: 'M1A / M1B Yenikapı – Atatürk Havalimanı / Kirazlı',
    district: 'Fatih (Yenikapı / Aksaray Sahil)',
    structureType: 'Yeraltı (Mega Entegre Aktarma Merkezi)',
    platforms: '1 Ada Peron (2 Hat - M1 Terminal Peronları)',
    openedDate: '9 Kasım 2014',
    openedDateFormatted: '11-2014',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yenikapı Transfer Merkezi dev yeraltı aktarma salonu ve M1A / M1B peronları',
    description: 'M1A (Atatürk Havalimanı) ve M1B (Kirazlı) hatlarının doğudaki ortak başlangıç ve bitiş terminalidir. 1989’dan beri Aksaray’da son bulan M1 hattı, 9 Kasım 2014’te açılan 700 metrelik tünelle Yenikapı aktarma merkezine bağlanmıştır.',
    historicalContext: '9 Kasım 2014 tarihinde hizmete girmiştir. M1 hattını M2 Hacıosman metrosuna ve Marmaray Boğaz tüp geçişine bağlayarak İstanbul raylı sistemlerinin en büyük entegrasyon halkasını tamamlamıştır.',
    features: ['M2 Hacıosman Metrosuna Doğrudan Yeraltı Koridoru', 'Theodosius Limanı Arkeolojik Sergi Konsepti', 'İDO Hızlı Feribot İskelesi Entegrasyonu', 'Geniş Yeraltı Turnike Salonu'],
    interchanges: [
      {
        lineCode: 'M2',
        lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
        type: 'metro',
        color: '#059A4D',
        stationName: 'Yenikapı M2 İstasyonu',
        transferType: 'Doğrudan İstasyon İçi Bağlantı',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'Aynı yeraltı kompleksinde M2 Taksim–Hacıosman metrosuna doğrudan tünel aktarması.'
      }
    ]
  },
  'aksaray': {
    id: 'aksaray',
    name: 'Aksaray Station',
    cleanName: 'Aksaray',
    turkishName: 'Aksaray İstasyonu',
    lineCode: 'M1A / M1B',
    lineName: 'M1 Yenikapı – Atatürk Havalimanı / Kirazlı',
    district: 'Fatih (Tarihi Yarımada)',
    structureType: 'Yeraltı',
    platforms: 'Kenar Peron (2 Hat)',
    openedDate: '3 Eylül 1989',
    openedDateFormatted: '09-1989',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aksaray_Metro_%C4%B0stasyonu_M1_2024.jpg?width=1000',
    imageCaption: 'Aksaray M1 İstasyonu yeraltı turnike holü ve peron girişi',
    description: 'Aksaray İstasyonu, 1989 yılında hizmete girdiğinde Türkiye’nin ilk modern metro hattının doğu uç terminali olarak hizmet vermiştir. 2014’te Yenikapı aktarma merkezinin açılmasına kadar M1 hattının başlangıç istasyonu olmuştur.',
    historicalContext: '11 Mart 1989’daki ilk Emniyet–Kocatepe açılışından 6 ay sonra, 3 Eylül 1989’da tamamlanarak metro konforunu Tarihi Yarımada’nın kalbine bağlamıştır.',
    features: ['Asansör ve Erişilebilirlik', 'Geniş Yeraltı Bilet Holü', 'Turnike Geçişleri', 'Vatan Caddesi Çıkışları'],
    interchanges: [
      {
        lineCode: 'T1',
        lineName: 'T1 Kabataş – Bağcılar Tramvay Hattı',
        type: 'tram',
        color: '#004B86',
        stationName: 'Yusufpaşa Tramvay İstasyonu',
        transferType: 'Cadde / Üstgeçit Yürüyüşü',
        distance: '200m',
        walkingTime: '~3 dk yürüme',
        description: 'Adnan Menderes Bulvarı üzerinden kısa yaya bağlantısıyla Yusufpaşa T1 durağına geçiş. Sultanahmet, Eminönü ve Kabataş yönüne aktarma imkanı.'
      }
    ]
  },
  'emniyet - fatih': {
    id: 'emniyet-fatih',
    name: 'Emniyet - Fatih Station',
    cleanName: 'Emniyet - Fatih',
    turkishName: 'Emniyet - Fatih İstasyonu',
    lineCode: 'M1A / M1B',
    lineName: 'M1 Yenikapı – Atatürk Havalimanı / Kirazlı',
    district: 'Fatih (Akşemsettin / Vatan Caddesi)',
    structureType: 'Yeraltı',
    platforms: 'Kenar Peron (2 Hat)',
    openedDate: '11 Mart 1989',
    openedDateFormatted: '03-1989',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emniyet_-_Fatih_Metro_%C4%B0stasyonu_M1_2024.jpg?width=1000',
    imageCaption: 'Emniyet - Fatih İstasyonu Vatan Caddesi giriş holü',
    description: 'İstanbul Metrosu’nun ilk 5 kurucu istasyonundan biridir. İstanbul İl Emniyet Müdürlüğü yerleşkesinin ve Fatih Kaymakamlığı’nın hemen yanında konumlanmıştır.',
    historicalContext: '11 Mart 1989 tarihinde Cumhurbaşkanı Turgut Özal ve Belediye Başkanı Bedrettin Dalan tarafından hizmete açılan ilk metro etabının simge yeraltı istasyonudur.',
    features: ['Emniyet Müdürlüğü Doğrudan Çıkışı', 'Yürüyen Merdivenler ve Asansör', 'Altgeçit Geçişi', 'Geniş Bilet Holü'],
    interchanges: []
  },
  'topkapı - ulubatlı': {
    id: 'topkapi-ulubatli',
    name: 'Topkapı - Ulubatlı Station',
    cleanName: 'Topkapı - Ulubatlı',
    turkishName: 'Topkapı - Ulubatlı İstasyonu',
    lineCode: 'M1A / M1B',
    lineName: 'M1 Yenikapı – Atatürk Havalimanı / Kirazlı',
    district: 'Fatih / Topkapı Şehir Surları',
    structureType: 'Yeraltı',
    platforms: 'Kenar Peron (2 Hat)',
    openedDate: '11 Mart 1989',
    openedDateFormatted: '03-1989',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Topkap%C4%B1_-_Ulubatl%C4%B1_Metro_%C4%B0stasyonu_M1_2024.jpg?width=1000',
    imageCaption: 'Topkapı - Ulubatlı İstasyonu ve T4 Tramvay yer altı bağlantısı',
    description: 'Tarihi Theodosius Kara Surları ile Ulubatlı Hasan Meydanı kesişiminde yer alan kritik raylı sistem aktarma düğümüdür.',
    historicalContext: '11 Mart 1989’da açılmıştır. 2007 yılında T4 tramvay hattının açılmasıyla birlikte inşa edilen entegre yeraltı koridoru sayesinde iki hat birbirine doğrudan bağlanmıştır.',
    features: ['T4 Tramvayına Yeraltı Tüneli', 'Panorama 1453 Müzesi Yakınlığı', 'Asansör Erişimi', 'Tarihi Kara Surları Çıkışı'],
    interchanges: [
      {
        lineCode: 'T4',
        lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
        type: 'tram',
        color: '#FF7E42',
        stationName: 'Vatan Tramvay İstasyonu',
        transferType: 'Yeraltı Bağlantı Tüneli',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'Doğrudan yeraltı bağlantı tüneli ile T4 Vatan istasyonuna geçiş. Gaziosmanpaşa ve Sultangazi yönüne hızlı raylı sistem erişimi.'
      }
    ]
  },
  'bayrampaşa - maltepe': {
    id: 'bayrampasa-maltepe',
    name: 'Bayrampaşa - Maltepe Station',
    cleanName: 'Bayrampaşa - Maltepe',
    turkishName: 'Bayrampaşa - Maltepe İstasyonu',
    lineCode: 'M1A / M1B',
    lineName: 'M1 Yenikapı – Atatürk Havalimanı / Kirazlı',
    district: 'Bayrampaşa / Zeytinburnu Sınırı',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: 'Ada Peron (2 Hat)',
    openedDate: '11 Mart 1989',
    openedDateFormatted: '03-1989',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bayrampa%C5%9Fa_-_Maltepe_Metro_%C4%B0stasyonu_M1_2024.jpg?width=1000',
    imageCaption: 'Bayrampaşa - Maltepe İstasyonu hemzemin peronu ve yaya üstgeçidi',
    description: 'Bayrampaşa ve Zeytinburnu sınırındaki sanayi, ticaret ve iş merkezlerine hizmet veren korunaklı açık hava peron istasyonudur.',
    historicalContext: '11 Mart 1989’da işletmeye alınan ilk etap istasyonlarındandır. Yoğun sanayi aksını şehir merkezine kesintisiz bağlamıştır.',
    features: ['Kapalı Ada Peron', 'Yaya Üstgeçit Köprüsü', 'Axis İstanbul AVM Bağlantısı', 'Engelli Erişilebilirliği'],
    interchanges: [
      {
        lineCode: 'T4',
        lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
        type: 'tram',
        color: '#FF7E42',
        stationName: 'Demirkapı Tramvay İstasyonu',
        transferType: 'Cadde / Üstgeçit Yürüyüşü',
        distance: '350m',
        walkingTime: '~4 dk yürüme',
        description: 'Şehit Teğmen Ali Yılmaz Caddesi üzerinden T4 Demirkapı tramvay durağına yaya bağlantısı.'
      }
    ]
  },
  'sağmalcılar': {
    id: 'sagmalcilar',
    name: 'Sağmalcılar Station',
    cleanName: 'Sağmalcılar',
    turkishName: 'Sağmalcılar İstasyonu',
    lineCode: 'M1A / M1B',
    lineName: 'M1 Yenikapı – Atatürk Havalimanı / Kirazlı',
    district: 'Bayrampaşa (Merkez)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: 'Ada Peron (2 Hat)',
    openedDate: '11 Mart 1989',
    openedDateFormatted: '03-1989',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sa%C4%9Fmalc%C4%B1lar_Metro_%C4%B0stasyonu_M1_2024.jpg?width=1000',
    imageCaption: 'Sağmalcılar İstasyonu hemzemin peronu ve yolcu köprüsü',
    description: 'Bayrampaşa’nın eski ve tarihi ismi olan Sağmalcılar adını taşıyan, yoğun yerleşim bölgelerine hizmet sunan hemzemin istasyondur.',
    historicalContext: '11 Mart 1989’da açılan orijinal beş istasyondan biridir. Bölge sakinlerine Aksaray ve merkez yönünde hızlı raylı ulaşım sağlamıştır.',
    features: ['Üstgeçit Bilet Holü', 'Engelli Asansörleri', 'Turnike Geçişleri', 'Meydan Bağlantısı'],
    interchanges: []
  },
  'kocatepe': {
    id: 'kocatepe',
    name: 'Kocatepe Station',
    cleanName: 'Kocatepe',
    turkishName: 'Kocatepe İstasyonu',
    lineCode: 'M1A / M1B',
    lineName: 'M1 Yenikapı – Atatürk Havalimanı / Kirazlı',
    district: 'Bayrampaşa (Kocatepe / Kartaltepe)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: 'Ada Peron (2 Hat)',
    openedDate: '11 Mart 1989',
    openedDateFormatted: '03-1989',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kocatepe_Metro_%C4%B0stasyonu_M1_2024.jpg?width=1000',
    imageCaption: 'Kocatepe İstasyonu modern yolcu holü ve Forum İstanbul bağlantısı',
    description: '1989’dan 1994 yılına kadar İstanbul Metrosu’nun batı uç son durağı olarak hizmet vermiştir. Günümüzde Forum İstanbul alışveriş merkezine doğrudan kapalı geçitle bağlıdır.',
    historicalContext: '11 Mart 1989’da Emniyet–Kocatepe etabının batı terminali olarak açıldı. 5 yıl boyunca hat burada sonlanmış, 1994’te hat Otogar yönüne uzatılmıştır.',
    features: ['Forum İstanbul Doğrudan Bağlantısı', 'Asansörlü Yaya Köprüsü', 'Mega Center Toptancılar Hali Yakınlığı', 'Geniş Peron'],
    interchanges: []
  },
  'otogar': {
    id: 'otogar',
    name: 'Otogar Station',
    cleanName: 'Otogar (Büyük İstanbul Otogarı)',
    turkishName: 'Otogar İstasyonu',
    lineCode: 'M1A / M1B',
    lineName: 'M1 Yenikapı – Atatürk Havalimanı / Kirazlı',
    district: 'Bayrampaşa (Büyük Otogar Yerleşkesi)',
    structureType: 'Aç-Kapa / Yeraltı',
    platforms: '2 Ada Peron (3 Hat - Çatal Hat Aktarması)',
    openedDate: '31 Ocak 1994',
    openedDateFormatted: '01-1994',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Otogar_Metro_%C4%B0stasyonu_M1_2024.jpg?width=1000',
    imageCaption: 'Otogar İstasyonu peron holü ve M1A / M1B aktarma peronları',
    description: 'Büyük İstanbul Otogarı’nın merkez meydanının tam altına inşa edilmiş, M1 ağının ana kavşak ve çatal hat aktarma istasyonudur.',
    historicalContext: '31 Ocak 1994’te Kocatepe–Zeytinburnu uzatmasıyla hizmete açılmıştır. M1A (Havalimanı) ile M1B (Kirazlı) hatlarının ayrılma ve birleşme merkezidir.',
    features: ['3 Hat / 2 Ada Peron', 'M1A/M1B Aynı Peronda Çapraz Aktarma', 'Otogar Meydanına Yürüyen Merdivenler', 'Geniş Bagaj Geçişleri'],
    interchanges: [
      {
        lineCode: 'M1B',
        lineName: 'M1B Kol Hattı (Esenler – Kirazlı)',
        type: 'metro',
        color: '#EE2229',
        stationName: 'Otogar 3. Peron',
        transferType: 'Doğrudan Peron',
        distance: '0m (Doğrudan Peron)',
        walkingTime: 'Anında (Aynı Peron)',
        description: 'M1A (Atatürk Havalimanı) ve M1B (Kirazlı & M3 bağlantısı) trenleri arasında aynı istasyon içi doğrudan çapraz peron aktarması.'
      }
    ]
  },
  'esenler': {
    id: 'esenler-m1b',
    name: 'Esenler Station',
    cleanName: 'Esenler',
    turkishName: 'Esenler Metro İstasyonu',
    lineCode: 'M1B',
    lineName: 'M1B Yenikapı – Kirazlı Metro Hattı',
    district: 'Esenler (Birlik / Fevzi Çakmak / İlçe Merkezi)',
    structureType: 'Viyadük (Yükseltilmiş İstasyon)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: 'Şubat 2012',
    openedDateFormatted: '02-2012',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Esenler_Metro_%C4%B0stasyonu_M1.jpg?width=1000',
    imageCaption: 'Esenler M1B Metro İstasyonu peron holü',
    description: 'M1B Yenikapı–Kirazlı hattının Esenler ilçe merkezine hizmet veren modern yükseltilmiş viyadük istasyonudur.',
    historicalContext: 'Şubat 2012 tarihinde (02-2012) çift hatlı olarak tamamen yeniden inşa edilip modern peronlarıyla hizmete açılmıştır. Haziran 2013’te Kirazlı’ya uzatılacak M1B hattının ilk operasyonel etabı olmuştur.',
    features: ['Esenler Meydanı ve Çarşı Çıkışları', 'Genişletilmiş Çift Hatlı Viyadük Yapısı', 'Engelli Asansörleri ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'menderes': {
    id: 'menderes-m1b',
    name: 'Menderes Station',
    cleanName: 'Menderes',
    turkishName: 'Menderes Metro İstasyonu',
    lineCode: 'M1B',
    lineName: 'M1B Yenikapı – Kirazlı Metro Hattı',
    district: 'Esenler (Menderes Mahallesi / Dörtyol Meydanı)',
    structureType: 'Yeraltı (Tünel İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Menderes İstasyonu cadde girişleri ve bilet holü',
    description: 'Esenler Dörtyol Meydanı ve Menderes Mahallesi aksında yer alan yeraltı metro istasyonudur. Yoğun konut ve çarşı alanlarına hizmet verir.',
    historicalContext: '14 Haziran 2013 tarihinde Esenler–Kirazlı uzatmasıyla birlikte hizmete girmiştir.',
    features: ['Dörtyol Meydanı Çıkışı', 'İnönü Caddesi Erişimi', 'Asansör ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'üçyüzlü': {
    id: 'ucyuzlu-m1b',
    name: 'Üçyüzlü Station',
    cleanName: 'Üçyüzlü',
    turkishName: 'Üçyüzlü Metro İstasyonu',
    lineCode: 'M1B',
    lineName: 'M1B Yenikapı – Kirazlı Metro Hattı',
    district: 'Bağcılar / Güngören / Esenler Kesişimi',
    structureType: 'Yeraltı (Tünel İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Üçyüzlü İstasyonu peron holü',
    description: 'Bağcılar, Güngören ve Esenler ilçelerinin kesişim noktasında, Üçyüzlü Meydanı altında inşa edilmiş derin yeraltı istasyonudur.',
    historicalContext: '14 Haziran 2013 tarihinde M1B uzatması kapsamında açılmıştır.',
    features: ['Üç İlçe Kesişim Noktası', 'Meydan Parkı Çıkışı', 'Engelli Erişimi'],
    interchanges: []
  },
  'bağcılar meydan': {
    id: 'bagcilar-meydan-m1b',
    name: 'Bağcılar Meydan Station',
    cleanName: 'Bağcılar Meydan',
    turkishName: 'Bağcılar Meydan Metro İstasyonu',
    lineCode: 'M1B',
    lineName: 'M1B Yenikapı – Kirazlı Metro Hattı',
    district: 'Bağcılar (Merkez / Bağcılar Meydanı)',
    structureType: 'Yeraltı (Tünel İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Bağcılar Meydanı altındaki metro çıkışları ve T1 tramvay aktarması',
    description: 'Bağcılar ilçe merkezinin en hareketli noktası olan Bağcılar Meydanı altında yer alır. T1 Bağcılar–Kabataş tramvay hattının son durağına meydan üzerinden doğrudan yaya aktarması sağlar.',
    historicalContext: '14 Haziran 2013 tarihinde hizmete girmiştir. T1 tramvay hattı ile birlikte ilçenin en büyük toplu taşıma merkezidir.',
    features: ['T1 Tramvay Hattına Meydan Üzerinden Aktarma', 'Bağcılar Meydanı ve Çarşı Çıkışları', 'Geniş Yeraltı Bilet Holü'],
    interchanges: [
      {
        lineCode: 'T1',
        lineName: 'T1 Kabataş – Bağcılar Tramvay Hattı',
        type: 'tram',
        color: '#004B86',
        stationName: 'Bağcılar Tramvay İstasyonu',
        transferType: 'Cadde / Meydan Çıkışı',
        distance: '60m',
        walkingTime: '~1 dk yürüme',
        description: 'Meydan çıkışından doğrudan T1 Bağcılar tramvay terminaline aktarma.'
      }
    ]
  },
  'kirazlı': {
    id: 'kirazli-m1b',
    name: 'Kirazlı Station (M1B)',
    cleanName: 'Kirazlı',
    turkishName: 'Kirazlı - Bağcılar Metro İstasyonu',
    lineCode: 'M1B',
    lineName: 'M1B Yenikapı – Kirazlı Metro Hattı',
    district: 'Bağcılar (Kirazlı / Güneşli Girişi)',
    structureType: 'Yeraltı (Çok Katlı Çapraz Aktarma İstasyonu)',
    platforms: '2 Ada Peron (4 Hat - M1B ve M3 Ortak İstasyon Yapısı)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kirazlı İstasyonu M1B ve M3 ortak aktarma holü ve peronları',
    description: 'M1B hattının batı nihai terminal istasyonudur. M3 Başakşehir-Metrokent metro hattına aynı bilet holü seviyesinde doğrudan aktarma sunar.',
    historicalContext: '14 Haziran 2013 tarihinde M1B Esenler-Kirazlı uzatması ve M3 hattı ile birlikte ortak terminal olarak hizmete girmiştir.',
    features: ['M3 Metrosuna Doğrudan Ortak Hol Aktarması', 'Mevlana Caddesi Çıkışı', 'İETT Aktarma Peronları'],
    interchanges: [
      {
        lineCode: 'M3',
        lineName: 'M3 Kirazlı – Başakşehir/Metrokent Metro Hattı',
        type: 'metro',
        color: '#0CA6DF',
        stationName: 'Kirazlı M3 İstasyonu',
        transferType: 'Doğrudan Peron / Ortak İstasyon',
        distance: '0m - 20m',
        walkingTime: '~30 sn yürüme',
        description: 'Aynı yeraltı kompleksinde M3 Başakşehir metrosuna turnike terk etmeden doğrudan aktarma.'
      }
    ]
  },
  'terazidere': {
    id: 'terazidere',
    name: 'Terazidere Station',
    cleanName: 'Terazidere',
    turkishName: 'Terazidere İstasyonu',
    lineCode: 'M1A',
    lineName: 'M1A Yenikapı – Atatürk Havalimanı',
    district: 'Güngören / Esenler Sınırı',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: 'Ada Peron (2 Hat)',
    openedDate: '31 Ocak 1994',
    openedDateFormatted: '01-1994',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Terazidere_Metro_%C4%B0stasyonu_M1%E1%B4%80_2024.jpg?width=1000',
    imageCaption: 'Terazidere İstasyonu peron holü ve D.100 aksı bağlantısı',
    description: 'Esenler ve Güngören sınırında, otoyol koridoru boyunca yerleşim ve tekstil atölyelerine hizmet veren açık peronlu istasyondur.',
    historicalContext: '31 Ocak 1994 tarihinde açılan Kocatepe–Zeytinburnu uzatması kapsamında hizmete girmiştir.',
    features: ['Üstgeçit Bilet Salonu', 'Engelli Asansörleri', 'Otoyol Üstgeçit Çıkışı'],
    interchanges: []
  },
  'davutpaşa - ytü': {
    id: 'davutpasa-ytu',
    name: 'Davutpaşa - YTÜ Station',
    cleanName: 'Davutpaşa - YTÜ',
    turkishName: 'Davutpaşa - YTÜ İstasyonu',
    lineCode: 'M1A',
    lineName: 'M1A Yenikapı – Atatürk Havalimanı',
    district: 'Esenler (YTÜ Davutpaşa Kampüsü)',
    structureType: 'Viyadük (Yükseltilmiş)',
    platforms: 'Kenar Peron (2 Hat)',
    openedDate: '31 Ocak 1994',
    openedDateFormatted: '01-1994',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Davutpa%C5%9Fa_-_YT%C3%9C_Metro_%C4%B0stasyonu_M1%E1%B4%80_2024.jpg?width=1000',
    imageCaption: 'Davutpaşa - YTÜ yükseltilmiş viyadük istasyonu ve kampüs girişi',
    description: 'Tarihi Davutpaşa Kışlası yerleşkesinde bulunan Yıldız Teknik Üniversitesi (YTÜ) ana kampüsünün girişinde yer alan viyadük istasyonudur.',
    historicalContext: '31 Ocak 1994’te açılmış, üniversite öğrencileri ve akademisyenlerin şehir merkezine ulaşımında devrim yaratmıştır.',
    features: ['Yükseltilmiş Viyadük İstasyon Yapısı', 'Doğrudan Üniversite Kampüs Kapısı', 'Kampüs İçi Ring Durağı', 'Engelli Asansörü'],
    interchanges: []
  },
  'merter': {
    id: 'merter',
    name: 'Merter Station',
    cleanName: 'Merter',
    turkishName: 'Merter İstasyonu',
    lineCode: 'M1A',
    lineName: 'M1A Yenikapı – Atatürk Havalimanı',
    district: 'Güngören (Merter Tekstil Merkezi)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: 'Ada Peron (2 Hat - Otoyol Orta Refüjü)',
    openedDate: '31 Ocak 1994',
    openedDateFormatted: '01-1994',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Merter_Metro_%C4%B0stasyonu_M1%E1%B4%80_2024.jpg?width=1000',
    imageCaption: 'Merter İstasyonu D.100 yaya üstgeçidi ve peron bağlantısı',
    description: 'D.100 karayolunun orta refüjünde konuşlanmış, Türkiye’nin en büyük toptan tekstil ve konfeksiyon merkezine hizmet veren kilit raylı sistem durağıdır.',
    historicalContext: '31 Ocak 1994’te hizmete girmiştir. Tekstil sanayisi ile kentin iş gücü arasındaki ana ulaşım arteri olmuştur.',
    features: ['Kapalı Yaya Üstgeçidi', 'Tekstil Toptancılar Çarşısı Erişimi', 'Asansör ve Yürüyen Merdivenler', 'Geniş Turnike Hattı'],
    interchanges: [
      {
        lineCode: 'T1',
        lineName: 'T1 Kabataş – Bağcılar Tramvay Hattı',
        type: 'tram',
        color: '#004B86',
        stationName: 'Merter Tekstil Merkezi Tramvay Durağı',
        transferType: 'Cadde / Üstgeçit Yürüyüşü',
        distance: '380m',
        walkingTime: '~5 dk yürüme',
        description: 'Tekstil çarşısı aksı üzerinden T1 Merter Tekstil Merkezi tramvay durağına yaya bağlantısı.'
      }
    ]
  },
  'zeytinburnu': {
    id: 'zeytinburnu',
    name: 'Zeytinburnu Station (M1)',
    cleanName: 'Zeytinburnu',
    turkishName: 'Zeytinburnu İstasyonu',
    lineCode: 'M1A',
    lineName: 'M1A Yenikapı – Atatürk Havalimanı',
    district: 'Bakırköy / Zeytinburnu Sınırı',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: 'Çapraz / Ada Peronları (4 Hat - T1 Ortak Peronu)',
    openedDate: '31 Ocak 1994',
    openedDateFormatted: '01-1994',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Zeytinburnu_Metro_%C4%B0stasyonu_M1%E1%B4%80_2024.jpg?width=1000',
    imageCaption: 'Zeytinburnu Entegre Aktarma Merkezi ve M1 - T1 ortak peronları',
    description: 'İstanbul’un en yoğun raylı sistem aktarma merkezlerinden biridir. M1 hafif metro hattı ile T1 modern tramvay hattı arasında aynı seviyede doğrudan çapraz peron aktarması sağlar.',
    historicalContext: '31 Ocak 1994’te M1 istasyonu açılmış, Mart 1994’te T1 tramvayının buraya ulaşmasıyla Türkiye’nin ilk entegre metro-tramvay peron aktarma kompleksi doğmuştur. 2021 yılında baştan sona modernize edilmiştir.',
    features: ['T1 Tramvayı ile Aynı Seviyede Peron Aktarması', 'Yüksek Kapasiteli Bilet Holü', 'Tam Engelli Erişimi ve Asansörler', 'Geniş Yolcu Meydanı'],
    interchanges: [
      {
        lineCode: 'T1',
        lineName: 'T1 Kabataş – Bağcılar Tramvay Hattı',
        type: 'tram',
        color: '#004B86',
        stationName: 'Zeytinburnu Tramvay Peronları',
        transferType: 'Doğrudan Peron',
        distance: '0m (Doğrudan Peron)',
        walkingTime: 'Anında (Aynı Seviye)',
        description: 'Peron hattından çıkmadan aynı peron seviyesinde T1 tramvayına doğrudan aktarma. Topkapı, Aksaray, Sultanahmet, Eminönü ve Kabataş yönü.'
      }
    ]
  },
  'bakırköy - incirli': {
    id: 'bakirkoy-incirli',
    name: 'Bakırköy - İncirli Station',
    cleanName: 'Bakırköy - İncirli',
    turkishName: 'Bakırköy - İncirli İstasyonu',
    lineCode: 'M1A',
    lineName: 'M1A Yenikapı – Atatürk Havalimanı',
    district: 'Bakırköy (İncirli / Zuhuratbaba)',
    structureType: 'Yeraltı',
    platforms: 'Kenar Peron (2 Hat)',
    openedDate: '7 Mart 1994',
    openedDateFormatted: '03-1994',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bak%C4%B1rk%C3%B6y_-_%C4%B0ncirli_Metro_%C4%B0stasyonu_M1%E1%B4%80_2024.jpg?width=1000',
    imageCaption: 'Bakırköy - İncirli İstasyonu yeraltı giriş holü ve bağlantı koridoru',
    description: 'Bakırköy merkezine, sağlık kuruluşlarına ve yoğun İncirli yerleşimine hizmet veren stratejik yeraltı istasyonudur.',
    historicalContext: '7 Mart 1994 tarihinde metronun Bakırköy ilçesine ilk kez ulaşmasını sağlamıştır. 2024 yılında M3 metro uzatmasının bağlanmasıyla çift metrolu aktarma merkezine dönüşmüştür.',
    features: ['M3 Metrosuna Doğrudan Yeraltı Tüneli', 'Geniş Yeraltı Yolcu Holü', 'Asansörler ve Yürüyen Merdivenler', 'Botanik Park Çıkışı'],
    interchanges: [
      {
        lineCode: 'M3',
        lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Metro Hattı',
        type: 'metro',
        color: '#0CA6DF',
        stationName: 'İncirli M3 İstasyonu',
        transferType: 'Yeraltı Bağlantı Tüneli',
        distance: '120m',
        walkingTime: '~2 dk yürüme',
        description: 'Doğrudan yeraltı transfer koridoruyla güneyde Bakırköy İDO İskelesi, kuzeyde Kirazlı ve Başakşehir yönüne giden M3 metro hattına geçiş.'
      }
    ]
  },
  'bahçelievler': {
    id: 'bahcelievler',
    name: 'Bahçelievler Station',
    cleanName: 'Bahçelievler',
    turkishName: 'Bahçelievler İstasyonu',
    lineCode: 'M1A',
    lineName: 'M1A Yenikapı – Atatürk Havalimanı',
    district: 'Bahçelievler (Merkez / Ömür)',
    structureType: 'Yeraltı',
    platforms: 'Kenar Peron (2 Hat)',
    openedDate: '15 Ocak 1999',
    openedDateFormatted: '01-1999',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bah%C3%A7elievler_Metro_%C4%B0stasyonu_M1%E1%B4%80_2024.jpg?width=1000',
    imageCaption: 'Bahçelievler M1 İstasyonu yeraltı peron holü ve Metroport AVM girişi',
    description: 'D.100 karayolunun altında, Metroport AVM ve Bahçelievler merkez yerleşimine hizmet veren yüksek yolcu kapasiteli yeraltı istasyonudur.',
    historicalContext: 'Bakırköy İncirli – Yenibosna raylı hattı Ağustos 1995’te tren işletmesine açılmış, aradaki yeraltı Bahçelievler istasyon yapısı ise inşaat ve bilet holü çalışmalarının tamamlanmasıyla 15 Ocak 1999 (01-1999) tarihinde yolcu kullanımına açılmıştır.',
    features: ['Metroport AVM Doğrudan Bağlantısı', 'Geniş Yeraltı Turnike Holü', 'Asansör ve Yürüyen Merdivenler', 'D.100 Yaya Altgeçidi'],
    interchanges: []
  },
  'ataköy - şirinevler': {
    id: 'atakoy-sirinevler',
    name: 'Ataköy - Şirinevler Station',
    cleanName: 'Ataköy - Şirinevler',
    turkishName: 'Ataköy - Şirinevler İstasyonu',
    lineCode: 'M1A',
    lineName: 'M1A Yenikapı – Atatürk Havalimanı',
    district: 'Bakırköy / Bahçelievler Sınırı (Şirinevler Meydanı)',
    structureType: 'Viyadük (Yükseltilmiş)',
    platforms: 'Ada Peron (2 Hat)',
    openedDate: '25 Ağustos 1995',
    openedDateFormatted: '08-1995',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atak%C3%B6y_-_%C5%9Eirinevler_Metro_%C4%B0stasyonu_M1%E1%B4%80_2024.jpg?width=1000',
    imageCaption: 'Ataköy - Şirinevler İstasyonu viyadük peronları ve Şirinevler Meydanı',
    description: 'İstanbul’un en işlek yaya ve aktarma koridorlarından biridir. D.100 otoyolunun üstünden geçen viyadük yapısıyla Ataköy konutları ile Şirinevler Meydanı’nı birbirine bağlar.',
    historicalContext: '25 Ağustos 1995 tarihinde açılmıştır. Bölgedeki yoğun servis ve minibüs trafiğini hafifleten en kritik omurga istasyonu olmuştur.',
    features: ['Şirinevler Meydanı Doğrudan Çıkışı', 'Yüksek Kapasiteli Yaya Üstgeçitleri', 'Geniş Bilet Holü', 'Engelli Asansörleri'],
    interchanges: []
  },
  'yenibosna': {
    id: 'yenibosna',
    name: 'Yenibosna Station',
    cleanName: 'Yenibosna',
    turkishName: 'Yenibosna İstasyonu',
    lineCode: 'M1A',
    lineName: 'M1A Yenikapı – Atatürk Havalimanı',
    district: 'Bakırköy (Ataköy 7-8-9-10. Kısım / Yenibosna)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: 'Ada Peron (2 Hat)',
    openedDate: '25 Ağustos 1995',
    openedDateFormatted: '08-1995',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yenibosna_Metro_%C4%B0stasyonu_M1%E1%B4%80_2024.jpg?width=1000',
    imageCaption: 'Yenibosna Entegre Raylı Sistemler Aktarma Merkezi ve M1A / M9 peronları',
    description: '1995–2002 yılları arasında M1 hattının batı son durağı olarak hizmet vermiştir. Günümüzde M9 Ataköy–Olimpiyat metrosuna bağlanan kritik bir raylı sistem aktarma merkezidir.',
    historicalContext: '25 Ağustos 1995’te işletmeye alınmış ve 2002’de havalimanı uzatması açılana kadar 7 yıl boyunca batı terminali olmuştur. 2024’te M9 metro hattı uzatmasıyla doğrudan aktarma tüneli inşa edilmiştir.',
    features: ['M9 Metrosuna Doğrudan Yeraltı Tüneli', 'Ataköy Toplu Konutları Erişimi', 'İETT Otobüs Peronları Bağlantısı', 'Asansör ve Yürüyen Merdivenler'],
    interchanges: [
      {
        lineCode: 'M9',
        lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
        type: 'metro',
        color: '#FCD10D',
        stationName: 'Yenibosna M9 İstasyonu',
        transferType: 'Yeraltı Bağlantı Tüneli',
        distance: '90m',
        walkingTime: '~1.5 dk yürüme',
        description: 'Doğrudan yeraltı transfer koridoruyla güneyde Ataköy Sahil, kuzeyde İkitelli Sanayi ve Olimpiyat yönüne giden M9 metro hattına geçiş.'
      }
    ]
  },
  'dtm - istanbul fuar merkezi': {
    id: 'dtm-istanbul-fuar-merkezi',
    name: 'DTM - İstanbul Fuar Merkezi Station',
    cleanName: 'DTM - İstanbul Fuar Merkezi',
    turkishName: 'DTM - İstanbul Fuar Merkezi İstasyonu',
    lineCode: 'M1A',
    lineName: 'M1A Yenikapı – Atatürk Havalimanı',
    district: 'Bakırköy (Yeşilköy / İDTM Yerleşkesi)',
    structureType: 'Viyadük (Yükseltilmiş)',
    platforms: 'Kenar Peron (2 Hat)',
    openedDate: '20 Aralık 2002',
    openedDateFormatted: '12-2002',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/DTM_%C4%B0stanbul_Fuar_Merkezi_Metro_%C4%B0stasyonu_M1%E1%B4%80_2024.jpg?width=1000',
    imageCaption: 'DTM - İstanbul Fuar Merkezi viyadük peronları ve Dünya Ticaret Merkezi kuleleri',
    description: 'İstanbul Dünya Ticaret Merkezi (İDTM), CNR Expo Fuar Alanı ve WOW Oteller Kompleksi’ne doğrudan hizmet veren yükseltilmiş viyadük istasyonudur.',
    historicalContext: '20 Aralık 2002 tarihinde Yenibosna–Atatürk Havalimanı etabıyla hizmete girmiştir. Uluslararası ticaret ve fuar ziyaretçileri için kilit raylı erişim kapısıdır.',
    features: ['İDTM Plaza Doğrudan Bağlantısı', 'CNR Expo Fuar Alanı Çıkışı', 'Yürüyen Merdivenler ve Asansörler', 'Genişletilmiş Turnike Holü'],
    interchanges: []
  },
  'atatürk havalimanı': {
    id: 'ataturk-havalimani',
    name: 'Atatürk Havalimanı Station',
    cleanName: 'Atatürk Havalimanı',
    turkishName: 'Atatürk Havalimanı Metro İstasyonu',
    lineCode: 'M1A',
    lineName: 'M1A Yenikapı – Atatürk Havalimanı',
    district: 'Bakırköy (Yeşilköy / Atatürk Havalimanı)',
    structureType: 'Yeraltı',
    platforms: 'Ada Peron (2 Hat)',
    openedDate: '20 Aralık 2002',
    openedDateFormatted: '12-2002',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atat%C3%BCrk_Havaliman%C4%B1_Metro_%C4%B0stasyonu_M1%E1%B4%80_2024.jpg?width=1000',
    imageCaption: 'Atatürk Havalimanı M1A yeraltı terminal peronları',
    description: 'Türkiye’de havalimanına doğrudan metro erişimi sağlayan ilk istasyondur. M1A hattının güneybatıdaki nihai terminal istasyonudur.',
    historicalContext: '20 Aralık 2002 tarihinde büyük bir törenle hizmete alınmıştır. Uzun yıllar kentin ana uluslararası havalimanına kesintisiz metro ulaşımı sağlamış, Atatürk Havalimanı Millet Bahçesi ve fuar alanına dönüşüm sonrasında da hizmetini sürdürmektedir.',
    features: ['Havalimanı Terminali Doğrudan Yeraltı Tüneli', 'Millet Bahçesi Çıkışı', 'Bagajlı Yolculara Uygun Geniş Turnikeler', 'Yürüyen Bantlar ve Asansörler'],
    interchanges: []
  }
};

/**
 * Normalizes station name to lookup in station database.
 */
export function getM1StationDetail(rawName: string): StationDetail | null {
  if (!rawName) return null;
  const clean = rawName
    .replace(/\s+Station$/i, '')
    .replace(/\s+İstasyonu$/i, '')
    .replace(/\s*\([A-Za-z0-9]+\)$/i, '')
    .trim()
    .toLowerCase();

  if (M1_STATIONS_DATA[clean]) {
    return M1_STATIONS_DATA[clean];
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

  for (const [key, val] of Object.entries(M1_STATIONS_DATA)) {
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
