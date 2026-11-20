import { StationDetail } from './m1StationsData';

export const M9_STATIONS_DATA: Record<string, StationDetail> = {
  'bahariye': {
    id: 'bahariye-m9',
    name: 'Bahariye Station',
    cleanName: 'Bahariye',
    turkishName: 'Bahariye Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Küçükçekmece (Atatürk Mahallesi / Bahariye)',
    structureType: 'Yeraltı (Aç-Kapa ve Delme Tünel İstasyonu / 22m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '29 Mayıs 2021',
    openedDateFormatted: '05-2021',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Bahariye M9 Metro İstasyonu giriş ve bilet holü',
    description: 'M9 hattının 2021 yılındaki güney geçici terminal istasyonudur. Küçükçekmece Atatürk Mahallesi, İkitelli Caddesi ve Rüştü Akın Mesleki ve Teknik Anadolu Lisesi yakınında konumlanmıştır.',
    historicalContext: '29 Mayıs 2021 tarihinde M9 hattının 1. etabı olarak Bahariye – İkitelli Sanayi arasında hizmete açılmıştır.',
    features: ['M9 Hattı 1. Etap Güney Terminali', 'Küçükçekmece Atatürk Mahallesi Erişimi', 'PAKS Peron Ayırıcı Kapı Sistemleri', 'Asansör ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'masko': {
    id: 'masko-m9',
    name: 'MASKO Station',
    cleanName: 'MASKO',
    turkishName: 'MASKO Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Başakşehir (Ziya Gökalp / MASKO Mobilya Kenti)',
    structureType: 'Yeraltı (Delme Tünel İstasyonu / 26m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '29 Mayıs 2021',
    openedDateFormatted: '05-2021',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'MASKO İstasyonu ve Mobilya Kenti TEM bağlantısı',
    description: 'Dünyanın en büyük mobilya kenti olan MASKO Mobilya Kenti ve Mall of İstanbul alışveriş merkezinin güney kanadına doğrudan yaya erişimi sağlayan stratejik istasyondur.',
    historicalContext: '29 Mayıs 2021 tarihinde açılmıştır.',
    features: ['MASKO Mobilya Kenti Doğrudan Çıkışı', 'Mall of İstanbul Güney Erişimi', 'TEM Otoyolu Kuzey Yan Yol Bağlantısı', 'PAKS Peron Kapıları'],
    interchanges: []
  },
  'ikitelli-sanayi': {
    id: 'ikitelli-sanayi-m9',
    name: 'İkitelli Sanayi Station',
    cleanName: 'İkitelli Sanayi',
    turkishName: 'İkitelli Sanayi Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Başakşehir / Küçükçekmece (İkitelli Organize Sanayi Bölgesi)',
    structureType: 'Yeraltı (M3 ve M9 Entegre 4 Hatlı / Çok Katlı Raylı Sistem Düğümü)',
    platforms: '2 Ada Peron (4 Hat / Çapraz Peron Aktarması)',
    openedDate: '14 Haziran 2013 (M3) / 29 Mayıs 2021 (M9)',
    openedDateFormatted: '05-2021',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İkitelli Sanayi ortak peron katı ve M3 / M9 aktarma koridorları',
    description: 'İkitelli Organize Sanayi Bölgesi (İOSB) merkezinde yer alan devasa aktarma düğümüdür. M3 Kirazlı - Başakşehir hattı ile M9 Ataköy - Olimpiyat hattı aynı peron kompleksinde kesintisiz çapraz peron aktarması (cross-platform transfer) sunar.',
    historicalContext: 'İlk olarak 2013 yılında M3 hattı ile açılmış, 29 Mayıs 2021’de M9 hattının Bahariye uzatmasıyla iki hattın ana kesişim ve aktarma merkezi olmuştur.',
    features: ['M3 Kirazlı – Kayaşehir Hattına Kesintisiz Aktarma', 'İkitelli Organize Sanayi Bölgesi (İOSB) Merkez Çıkışı', 'Çapraz Peron (Cross-Platform) Kolaylığı', 'Depo Sahası ve Makas Bağlantısı'],
    interchanges: [
      {
        lineCode: 'M3',
        lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Metro Hattı',
        type: 'metro',
        color: '#0CA6DF',
        stationName: 'İkitelli Sanayi İstasyonu (M3)',
        transferType: 'Ortak Peron / Alt Kat Aktarması',
        distance: '20m',
        walkingTime: '~1 dk yürüme',
        description: 'Kirazlı, Mahmutbey ve Kayaşehir Merkez yönüne doğrudan peron içi aktarma.'
      }
    ]
  },
  'ziya-gokalp-mahallesi': {
    id: 'ziya-gokalp-m9',
    name: 'Ziya Gökalp Mahallesi Station',
    cleanName: 'Ziya Gökalp Mahallesi',
    turkishName: 'Ziya Gökalp Mahallesi Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Başakşehir (Ziya Gökalp Mahallesi)',
    structureType: 'Yeraltı (Tünel İstasyon / 24m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '14 Haziran 2013 (M3 Mekik) / 29 Mayıs 2021 (M9 Entegrasyonu)',
    openedDateFormatted: '05-2021',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Ziya Gökalp Mahallesi istasyonu peron ve bilet holü',
    description: 'Başakşehir Ziya Gökalp Mahallesi konut yerleşimlerine, Ayazma bölgesine ve İkitelli sanayi sitelerine hizmet veren yeraltı istasyonudur. 2021 yılına kadar M3 mekik hattı parçasıyken M9 bünyesine aktarılmıştır.',
    historicalContext: '14 Haziran 2013’te İkitelli–Olimpiyat mekik hattı istasyonu olarak açılmış, 29 Mayıs 2021’de resmi olarak M9 hattına devredilmiştir.',
    features: ['Ziya Gökalp Konut Alanları ve Ayazma Erişimi', 'PAKS Tam Boy Peron Ayırıcı Kapıları', 'Engelli Erişilebilir Asansör Sistemi'],
    interchanges: []
  },
  'olimpiyat': {
    id: 'olimpiyat-m9',
    name: 'Olimpiyat Station',
    cleanName: 'Olimpiyat',
    turkishName: 'Olimpiyat Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Başakşehir (Atatürk Olimpiyat Stadyumu)',
    structureType: 'Yarı Açık Viyadük / Hemzemin (Devasa Peron Kompleksi & Metro Deposu)',
    platforms: '2 Ada Peron (3 Hat)',
    openedDate: '14 Haziran 2013 (M3 Mekik) / 29 Mayıs 2021 (M9 Entegrasyonu)',
    openedDateFormatted: '05-2021',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Atatürk Olimpiyat Stadyumu ve Olimpiyat Metro İstasyonu peron sahası',
    description: 'Atatürk Olimpiyat Stadyumu ve Metro İstanbul Olimpiyat Atölye ve Ağır Bakım Sahası yanında yer alan devasa peron yapısına sahip terminal istasyonudur. 75.000 kişilik stadyum tahliyesi için geniş çıkış kapılarına sahiptir.',
    historicalContext: '14 Haziran 2013’te M3 Olimpiyat mekiği olarak açılmış, 29 Mayıs 2021’de M9 hattının kuzey terminali haline gelmiştir.',
    features: ['Atatürk Olimpiyat Stadyumu Doğrudan Girişi', 'Metro İstanbul Olimpiyat Depo ve Bakım Merkezi', 'Genişletilmiş Turnike ve Tahliye Koridorları', 'İETT Otobüs Aktarma Peronları'],
    interchanges: []
  },
  'atatürk mahallesi': {
    id: 'ataturk-mahallesi-m9',
    name: 'Atatürk Mahallesi Station',
    cleanName: 'Atatürk Mahallesi',
    turkishName: 'Atatürk Mahallesi Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Küçükçekmece (Atatürk Mahallesi / İkitelli Caddesi)',
    structureType: 'Yeraltı (Tünel İstasyon / 24m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Atatürk Mahallesi M9 İstasyonu ve ArenaPark AVM çıkışı',
    description: 'Küçükçekmece Atatürk Mahallesi’nde, ArenaPark AVM ve İkitelli Caddesi kesişiminde yer alır. Gelecekte M7 Kabataş – Mahmutbey – Esenyurt metro hattı uzatması ile aktarma noktası olacaktır.',
    historicalContext: '18 Mart 2024 tarihinde M9 Ataköy – Bahariye 2. etabıyla hizmete girmiştir.',
    features: ['ArenaPark AVM Doğrudan Yaya Çıkışı', 'İkitelli Caddesi Erişimi', 'Gelecek M7 Metro Hattı Aktarması', 'PAKS Peron Ayırıcı Kapıları'],
    interchanges: []
  },
  'ataturk mahallesi': {
    id: 'ataturk-mahallesi-alias',
    name: 'Atatürk Mahallesi Station',
    cleanName: 'Atatürk Mahallesi',
    turkishName: 'Atatürk Mahallesi Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Küçükçekmece',
    structureType: 'Yeraltı',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Atatürk Mahallesi İstasyonu',
    description: 'Atatürk Mahallesi M9 metro istasyonudur.',
    historicalContext: '18 Mart 2024 tarihinde hizmete girmiştir.',
    features: ['ArenaPark AVM Çıkışı'],
    interchanges: []
  },
  'halkalı caddesi': {
    id: 'halkali-caddesi-m9',
    name: 'Halkalı Caddesi Station',
    cleanName: 'Halkalı Caddesi',
    turkishName: 'Halkalı Caddesi Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Küçükçekmece (Mehmet Akif Mahallesi)',
    structureType: 'Yeraltı (Tünel İstasyon / 27m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Halkalı Caddesi İstasyonu turnike alanı',
    description: 'Küçükçekmece Mehmet Akif Mahallesi ile Halkalı Caddesi aksında yer alan metro istasyonudur. Bölgedeki yoğun yerleşim ve ticaret alanlarına hizmet sunar.',
    historicalContext: '18 Mart 2024 tarihinde hizmete girmiştir.',
    features: ['Halkalı Caddesi Çıkışı', 'Mehmet Akif Mahallesi Erişimi', 'Engelli Asansörleri ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'halkali caddesi': {
    id: 'halkali-caddesi-alias',
    name: 'Halkalı Caddesi Station',
    cleanName: 'Halkalı Caddesi',
    turkishName: 'Halkalı Caddesi Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Küçükçekmece',
    structureType: 'Yeraltı',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Halkalı Caddesi İstasyonu',
    description: 'Halkalı Caddesi M9 metro istasyonudur.',
    historicalContext: '18 Mart 2024 tarihinde açılmıştır.',
    features: ['Halkalı Caddesi Çıkışı'],
    interchanges: []
  },
  '15 temmuz': {
    id: '15-temmuz-m9',
    name: '15 Temmuz Station',
    cleanName: '15 Temmuz',
    turkishName: '15 Temmuz Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Bağcılar (15 Temmuz Mahallesi)',
    structureType: 'Yeraltı (Tünel İstasyon / 30m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: '15 Temmuz İstasyonu giriş ve bilet holü',
    description: 'Bağcılar 15 Temmuz Mahallesi’nde Cami Yolu Caddesi ve Gülbahar Caddesi yakınında konumlanmıştır. Bağcılar’ın batı mahallelerine doğrudan metro bağlantısı sağlar.',
    historicalContext: '18 Mart 2024 tarihinde hizmete açılmıştır.',
    features: ['Cami Yolu Caddesi Çıkışı', 'Gülbahar Caddesi Bağlantısı', 'Geniş Bilet Holü'],
    interchanges: []
  },
  'doğu sanayi': {
    id: 'dogu-sanayi-m9',
    name: 'Doğu Sanayi Station',
    cleanName: 'Doğu Sanayi',
    turkishName: 'Doğu Sanayi Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Bahçelievler (Yenibosna Merkez / Doğu Sanayi Sitesi)',
    structureType: 'Yeraltı (Tünel İstasyon / 25m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Doğu Sanayi Sitesi önündeki M9 İstasyonu',
    description: 'Bahçelievler Yenibosna Doğu Sanayi Sitesi ve Değirmenbahçe Caddesi üzerinde yer alır. Sanayi çalışanları ve çevre iş merkezleri için ana ulaşım kapısıdır.',
    historicalContext: '18 Mart 2024 tarihinde açılmıştır.',
    features: ['Doğu Sanayi Sitesi Doğrudan Çıkışı', 'Değirmenbahçe Caddesi Erişimi', 'PAKS Peron Kapı Sistemi'],
    interchanges: []
  },
  'dogu sanayi': {
    id: 'dogu-sanayi-alias',
    name: 'Doğu Sanayi Station',
    cleanName: 'Doğu Sanayi',
    turkishName: 'Doğu Sanayi Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Bahçelievler',
    structureType: 'Yeraltı',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Doğu Sanayi İstasyonu',
    description: 'Doğu Sanayi M9 metro istasyonudur.',
    historicalContext: '18 Mart 2024 tarihinde hizmete girmiştir.',
    features: ['Doğu Sanayi Sitesi Çıkışı'],
    interchanges: []
  },
  '29 ekim - cumhuriyet': {
    id: '29-ekim-cumhuriyet-m9',
    name: '29 Ekim - Cumhuriyet Station',
    cleanName: '29 Ekim - Cumhuriyet',
    turkishName: '29 Ekim - Cumhuriyet Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Bahçelievler (Yenibosna / 29 Ekim Caddesi)',
    structureType: 'Yeraltı (Tünel İstasyon / 28m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&auto=format&fit=crop&q=80',
    imageCaption: '29 Ekim - Cumhuriyet İstasyonu modern mimarisi',
    description: 'Bahçelievler 29 Ekim Caddesi üzerinde, İhlas Yuva Konutları ve Kuyumcukent kuzey bölgesinde yer alır. Yoğun konut ve ticaret alanlarına hizmet sunar.',
    historicalContext: '18 Mart 2024 tarihinde işletmeye alınmıştır.',
    features: ['29 Ekim Caddesi Çıkışı', 'Kuyumcukent Kuzey Erişimi', 'Engelli Erişilebilir Asansörler'],
    interchanges: []
  },
  '29 ekim cumhuriyet': {
    id: '29-ekim-cumhuriyet-alias',
    name: '29 Ekim - Cumhuriyet Station',
    cleanName: '29 Ekim - Cumhuriyet',
    turkishName: '29 Ekim - Cumhuriyet Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Bahçelievler',
    structureType: 'Yeraltı',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&auto=format&fit=crop&q=80',
    imageCaption: '29 Ekim - Cumhuriyet İstasyonu',
    description: '29 Ekim - Cumhuriyet metro istasyonudur.',
    historicalContext: '18 Mart 2024 tarihinde hizmete girmiştir.',
    features: ['29 Ekim Caddesi Çıkışı'],
    interchanges: []
  },
  'çobançeşme': {
    id: 'cobancesme-m9',
    name: 'Çobançeşme Station',
    cleanName: 'Çobançeşme',
    turkishName: 'Çobançeşme Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Bahçelievler (Çobançeşme / Kuyumcukent / D-100)',
    structureType: 'Yeraltı (Tünel ve Entegre Aktarma Kompleksi / 31m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Çobançeşme İstasyonu ve Kuyumcukent bağlantısı',
    description: 'Kuyumcukent, Türkiye İhracatçılar Meclisi (TİM) ve D-100 Otoyolu Çobançeşme Kavşağı yakınında konumlanmıştır. Gelecekte M11 İstanbul Havalimanı – Halkalı metro hattı ile kesişecektir.',
    historicalContext: '18 Mart 2024 tarihinde hizmete girmiştir.',
    features: ['Kuyumcukent Doğrudan Yaya Çıkışı', 'Gelecek M11 İstanbul Havalimanı Metrosu Entegrasyonu', 'D-100 ve Basın Ekspres Bağlantısı'],
    interchanges: []
  },
  'cobancesme': {
    id: 'cobancesme-alias',
    name: 'Çobançeşme Station',
    cleanName: 'Çobançeşme',
    turkishName: 'Çobançeşme Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Bahçelievler',
    structureType: 'Yeraltı',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Çobançeşme İstasyonu',
    description: 'Çobançeşme M9 istasyonudur.',
    historicalContext: '18 Mart 2024 tarihinde açılmıştır.',
    features: ['Kuyumcukent Çıkışı'],
    interchanges: []
  },
  'yenibosna': {
    id: 'yenibosna-m9',
    name: 'Yenibosna Station (M9)',
    cleanName: 'Yenibosna',
    turkishName: 'Yenibosna Metro İstasyonu (M9)',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Bakırköy / Bahçelievler (Yenibosna / D-100 Aksı)',
    structureType: 'Yeraltı (Derin Aktarma Kompleksi / 32m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yenibosna Transfer Merkezi M9 peronları ve M1A / Metrobüs aktarma tüneli',
    description: 'Avrupa Yakası’nın en yoğun aktarma merkezlerinden biridir. M1A Yenikapı – Atatürk Havalimanı metrosu ve Metrobüs Yenibosna durağı ile doğrudan yeraltı bilet holü bağlantısına sahiptir.',
    historicalContext: '18 Mart 2024 tarihinde M9 etabıyla açılmış ve Yenibosna aktarma merkezine ikinci bir metro hattı eklemiştir.',
    features: ['M1A Metrosuna Doğrudan Yeraltı Turnike Aktarması', 'Metrobüs Yenibosna İstasyonu Bağlantısı', 'D-100 Karayolu Yaya Altgeçidi', 'Geniş Bilet Holü'],
    interchanges: [
      {
        lineCode: 'M1A',
        lineName: 'M1A Yenikapı – Atatürk Havalimanı Metro Hattı',
        type: 'metro',
        color: '#EE2229',
        stationName: 'Yenibosna Metro İstasyonu',
        transferType: 'Yeraltı Aktarma Koridoru',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'Yenikapı, Otogar ve Atatürk Havalimanı yönüne doğrudan metro aktarması.'
      },
      {
        lineCode: 'Metrobüs',
        lineName: 'İETT Metrobüs (Beylikdüzü – Söğütlüçeşme)',
        type: 'rail',
        color: '#3b82f6',
        stationName: 'Yenibosna Metrobüs İstasyonu',
        transferType: 'Yaya Köprüsü ve Altgeçit Bağlantısı',
        distance: '70m',
        walkingTime: '~1-2 dk yürüme',
        description: 'D-100 üzerindeki Metrobüs peronlarına doğrudan yaya bağlantısı.'
      }
    ]
  },
  'ataköy': {
    id: 'atakoy-m9',
    name: 'Ataköy Station (M9)',
    cleanName: 'Ataköy',
    turkishName: 'Ataköy Metro İstasyonu (M9)',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Bakırköy (Ataköy 2-5-6. Kısım / Sahil Yolu Yakını)',
    structureType: 'Yeraltı (Güney Nihai Terminal / Marmaray Aktarma İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Ataköy M9 Terminali ve Marmaray Ataköy İstasyonu aktarma meydanı',
    description: 'M9 hattının güney başlangıç ve bitiş terminalidir. Bakırköy Ataköy’de yer alır; B1 Marmaray banliyö tren hattının Ataköy İstasyonu ile doğrudan ortak bilet holü ve aktarma tüneliyle birbirine bağlanmıştır.',
    historicalContext: '18 Mart 2024 tarihinde hizmete açılarak M9 hattını Marmaray sahil omurgasına entegre etmiştir.',
    features: ['Marmaray Ataköy İstasyonuna Doğrudan Yeraltı Aktarması', 'Ataköy 2-5-6. Kısım Çıkışları', 'Ataköy Marina ve Sahil Parkı Yakınlığı', 'PAKS Peron Kapı Sistemi'],
    interchanges: [
      {
        lineCode: 'Marmaray',
        lineName: 'B1 Marmaray (Halkalı – Gebze) Banliyö Tren Hattı',
        type: 'rail',
        color: '#65656A',
        stationName: 'Ataköy Tren İstasyonu',
        transferType: 'Ortak Bilet Holü ve Yeraltı Geçidi',
        distance: '30m',
        walkingTime: '~1 dk yürüme',
        description: 'Halkalı, Yenikapı, Kadıköy, Bostancı ve Gebze yönüne kesintisiz banliyö treni aktarması.'
      }
    ]
  },
  'atakoy': {
    id: 'atakoy-alias',
    name: 'Ataköy Station (M9)',
    cleanName: 'Ataköy',
    turkishName: 'Ataköy Metro İstasyonu (M9)',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Bakırköy (Ataköy)',
    structureType: 'Yeraltı Terminal',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Ataköy M9 İstasyonu',
    description: 'Ataköy M9 terminal istasyonudur.',
    historicalContext: '18 Mart 2024 tarihinde hizmete girmiştir.',
    features: ['Marmaray Aktarması', 'Ataköy Sahil Erişimi'],
    interchanges: []
  },
  'mimar sinan': {
    id: 'mimar-sinan-m9',
    name: 'Mimar Sinan Station',
    cleanName: 'Mimar Sinan',
    turkishName: 'Mimar Sinan Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Bağcılar (Mimar Sinan / Güneşli / Basın Ekspres Yolu)',
    structureType: 'Yeraltı (Tünel İstasyon / 28m Derinlik)',
    platforms: '1 Ada Peron (2 Hat - PAKS)',
    openedDate: '30 Ağustos 2024',
    openedDateFormatted: '08-2024',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Mimar Sinan M9 İstasyonu giriş holü ve peronları',
    description: 'Bağcılar Mimar Sinan Mahallesi ve Güneşli Basın Ekspres Yolu aksında yer alır. M9 hattının 18 Mart 2024 açılışında istasyon inşaatı devam ettiğinden trenler duraksız geçmiş, istasyon 30 Ağustos 2024 Zafer Bayramı’nda hizmete alınmıştır. Gelecekte M1B Kirazlı – Halkalı metro hattı ile aktarma noktası olacaktır.',
    historicalContext: '30 Ağustos 2024 tarihinde hizmete açılarak M9 hattındaki eksik ara istasyon tamamlanmıştır.',
    features: ['Mimar Sinan Caddesi Çıkışı', 'Basın Ekspres Yolu Yakınlığı', 'Gelecek M1B Kirazlı – Halkalı Metrosu Aktarması', 'PAKS Peron Kapı Sistemi'],
    interchanges: []
  },
  'mimar-sinan': {
    id: 'mimar-sinan-hyphen-alias',
    name: 'Mimar Sinan Station',
    cleanName: 'Mimar Sinan',
    turkishName: 'Mimar Sinan Metro İstasyonu',
    lineCode: 'M9',
    lineName: 'M9 Ataköy – İkitelli – Olimpiyat Metro Hattı',
    district: 'Bağcılar (Mimar Sinan)',
    structureType: 'Yeraltı',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '30 Ağustos 2024',
    openedDateFormatted: '08-2024',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Mimar Sinan İstasyonu',
    description: 'Mimar Sinan M9 metro istasyonudur.',
    historicalContext: '30 Ağustos 2024 tarihinde açılmıştır.',
    features: ['Mimar Sinan Caddesi Çıkışı'],
    interchanges: []
  }
};

export function getM9StationDetail(name: string): StationDetail | null {
  if (!name) return null;
  const clean = name
    .toLowerCase()
    .replace(/\s+station(\s*\([a-z0-9]+\))?$/i, '')
    .replace(/\s*\([a-z0-9]+\)$/i, '')
    .replace(/\s+metro$/i, '')
    .replace(/\s+istasyonu$/i, '')
    .trim();

  // Direct normalized match
  for (const [key, detail] of Object.entries(M9_STATIONS_DATA)) {
    if (
      clean === key ||
      clean === detail.name.toLowerCase() ||
      clean === detail.cleanName.toLowerCase() ||
      clean === detail.turkishName.toLowerCase()
    ) {
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

  for (const [key, val] of Object.entries(M9_STATIONS_DATA)) {
    const normalizedKey = normalize(key);
    if (
      normalizedClean === normalizedKey ||
      normalizedClean.includes(normalizedKey) ||
      normalizedKey.includes(normalizedClean)
    ) {
      return val;
    }
  }

  // Substring or fuzzy matching
  if (normalizedClean.includes('bahariye')) return M9_STATIONS_DATA['bahariye'];
  if (normalizedClean.includes('masko')) return M9_STATIONS_DATA['masko'];
  if (normalizedClean.includes('ikitelli')) return M9_STATIONS_DATA['ikitelli-sanayi'];
  if (normalizedClean.includes('ziya') || normalizedClean.includes('gokalp')) return M9_STATIONS_DATA['ziya-gokalp-mahallesi'];
  if (normalizedClean.includes('olimpiyat')) return M9_STATIONS_DATA['olimpiyat'];
  if (normalizedClean.includes('ataturk') || normalizedClean.includes('atatürk')) return M9_STATIONS_DATA['atatürk mahallesi'];
  if (normalizedClean.includes('halkali') || normalizedClean.includes('halkalı')) return M9_STATIONS_DATA['halkalı caddesi'];
  if (normalizedClean.includes('15 temmuz')) return M9_STATIONS_DATA['15 temmuz'];
  if (normalizedClean.includes('mimar') || normalizedClean.includes('sinan')) return M9_STATIONS_DATA['mimar sinan'];
  if (normalizedClean.includes('dogu') || normalizedClean.includes('doğu')) return M9_STATIONS_DATA['doğu sanayi'];
  if (normalizedClean.includes('29 ekim') || normalizedClean.includes('cumhuriyet')) return M9_STATIONS_DATA['29 ekim - cumhuriyet'];
  if (normalizedClean.includes('cobancesme') || normalizedClean.includes('çobançeşme')) return M9_STATIONS_DATA['çobançeşme'];
  if (normalizedClean.includes('yenibosna')) return M9_STATIONS_DATA['yenibosna'];
  if (normalizedClean.includes('atakoy') || normalizedClean.includes('ataköy')) return M9_STATIONS_DATA['ataköy'];

  return null;
}
