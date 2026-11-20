import { StationDetail } from './m1StationsData';

export const T4_STATIONS_DATA: Record<string, StationDetail> = {
  'topkapı': {
    id: 'topkapi-t4',
    name: 'Topkapı Station (T4)',
    cleanName: 'Topkapı',
    turkishName: 'Topkapı Tramvay Terminali (T4)',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Zeytinburnu / Fatih (Topkapı Kültür Parkı / D.100)',
    structureType: 'Hemzemin (Güney Başlangıç Terminali)',
    platforms: 'Ada ve Kenar Peronlar (3 Hat)',
    openedDate: '18 Mart 2009',
    openedDateFormatted: '03-2009',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Topkap%C4%B1_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'T4 hattının güney başlangıç terminali olan Topkapı İstasyonu',
    description: 'T4 hattının güney başlangıç ve bitiş terminalidir. T1 Kabataş–Bağcılar tramvay terminali, Topkapı Metrobüs durağı ve Topkapı Kültür Parkı ile entegredir.',
    historicalContext: '18 Mart 2009 tarihinde Şehitlik–Topkapı 2. etabıyla açılmıştır. T4 hattını Tarihi Yarımada aksındaki T1 tramvayına ve D.100 Metrobüs omurgasına bağlamıştır.',
    features: ['T1 Kabataş Tramvayına Doğrudan Peron Geçişi', 'Topkapı Metrobüs İstasyonu Aktarması', 'Panorama 1453 Tarih Müzesi Erişimi', 'Geniş Bilet Holü'],
    interchanges: [
      {
        lineCode: 'T1',
        lineName: 'T1 Kabataş – Bağcılar Tramvay Hattı',
        type: 'tram',
        color: '#004B86',
        stationName: 'Topkapı T1 İstasyonu',
        transferType: 'Doğrudan İstasyon İçi Geçiş',
        distance: '30m',
        walkingTime: '~1 dk yürüme',
        description: 'Ortak peron sahasından T1 Kabataş ve Bağcılar yönü tramvaylarına anında geçiş.'
      },
      {
        lineCode: 'Metrobüs',
        lineName: 'Metrobüs (Söğütlüçeşme – Beylikdüzü)',
        type: 'rail',
        color: '#dc2626',
        stationName: 'Topkapı Metrobüs İstasyonu',
        transferType: 'Yaya Altgeçidi',
        distance: '60m',
        walkingTime: '~1 dk yürüme',
        description: 'D.100 altgeçidi üzerinden Topkapı Metrobüs durağına doğrudan bağlantı.'
      }
    ]
  },
  'fetihkapı': {
    id: 'fetihkapi-t4',
    name: 'Fetihkapı Station',
    cleanName: 'Fetihkapı',
    turkishName: 'Fetihkapı Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Zeytinburnu (Maltepe / Topkapı Kültür Parkı)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '18 Mart 2009',
    openedDateFormatted: '03-2009',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fetihkap%C4%B1_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Tarihi surlar önündeki Fetihkapı T4 durağı',
    description: 'Tarihi Konstantinopolis Kara Surları, Fetih Kapısı ve Panorama 1453 Tarih Müzesi’ne en yakın istasyondur.',
    historicalContext: '18 Mart 2009’da açılmıştır. İstanbul’un fethinin gerçekleştiği tarihi sur kapısının tam karşısında yer alır.',
    features: ['Panorama 1453 Tarih Müzesi Çıkışı', 'Tarihi Surlar ve Park Alanı', 'Engelli Rampaları'],
    interchanges: []
  },
  'vatan': {
    id: 'vatan-t4',
    name: 'Vatan Station',
    cleanName: 'Vatan',
    turkishName: 'Vatan Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Eyüpsultan / Fatih (Adnan Menderes Vatan Bulvarı)',
    structureType: 'Viyadük & Yeraltı Entegre İstasyonu',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '18 Mart 2009',
    openedDateFormatted: '03-2009',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vatan_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Vatan Caddesi üzerindeki Vatan T4 İstasyonu ve M1 metro aktarması',
    description: 'Adnan Menderes (Vatan) Bulvarı’nı köprüyle geçen, M1A ve M1B Topkapı-Ulubatlı metro istasyonuna doğrudan yeraltı tüneliyle bağlanan stratejik aktarma merkezidir.',
    historicalContext: '18 Mart 2009 tarihinde hizmete girmiştir. Sultangazi ve Gaziosmanpaşa’dan gelen yolcuların Atatürk Havalimanı, Otogar ve Yenikapı metrosuna kolayca aktarma yapmasını sağlamıştır.',
    features: ['M1A/M1B Topkapı-Ulubatlı Metrosuna Doğrudan Geçiş', 'Vatan Caddesi Köprü Geçişi', 'Yürüyen Merdivenler ve Asansörler'],
    interchanges: [
      {
        lineCode: 'M1A / M1B',
        lineName: 'M1 Yenikapı – Atatürk Havalimanı / Kirazlı Metro Hattı',
        type: 'metro',
        color: '#EE2229',
        stationName: 'Topkapı - Ulubatlı Metro İstasyonu',
        transferType: 'Doğrudan Yeraltı Bağlantı Tüneli',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'Tünel bağlantısı ile hiçbir şekilde caddeye çıkmadan M1A ve M1B metrosuna anında aktarma imkanı.'
      }
    ]
  },
  'edirnekapı': {
    id: 'edirnekapi-t4',
    name: 'Edirnekapı Station',
    cleanName: 'Edirnekapı',
    turkishName: 'Edirnekapı Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Eyüpsultan / Fatih (Edirnekapı Surları / Mihrimah Sultan)',
    structureType: 'Yeraltı (Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '18 Mart 2009',
    openedDateFormatted: '03-2009',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Edirnekap%C4%B1_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Edirnekapı Yeraltı İstasyonu ve Mihrimah Sultan Camii çıkışı',
    description: 'Mimar Sinan’ın şaheseri Mihrimah Sultan Camii, Kariye Camii ve tarihi Edirnekapı Kara Surları’na açılan derin yeraltı istasyonudur.',
    historicalContext: '18 Mart 2009’da açılmıştır. Tarihi Yarımada’nın batı kapısı olan Edirnekapı’ya modern ve çevreye duyarlı raylı erişim sunar.',
    features: ['Mihrimah Sultan Camii Çıkışı', 'Tarihi Edirnekapı ve Surlar', 'Kariye Camii Yakınlığı', 'Derin Tünel İstasyonu'],
    interchanges: []
  },
  'şehitlik': {
    id: 'sehitlik-t4',
    name: 'Şehitlik Station',
    cleanName: 'Şehitlik',
    turkishName: 'Şehitlik Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Eyüpsultan (Edirnekapı Şehitliği / D.100)',
    structureType: 'Hemzemin (1. Etap Güney Terminali)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/%C5%9Eehitlik_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Tarihi Edirnekapı Şehitliği yanındaki Şehitlik T4 ve Metrobüs aktarma istasyonu',
    description: '17 Eylül 2007’de T4 hattının 1. etabının güney başlangıç terminali olarak açılmıştır. Tarihi Edirnekapı Şehitliği ve Metrobüs hattı ile doğrudan bağlantılıdır.',
    historicalContext: '2007 yılında Mescid-i Selam ile Şehitlik arasında hizmete giren hattın güneydeki ilk uç noktası olmuştur. 2009 yılında hat Topkapı’ya uzatılana kadar aktarma terminali olarak görev yapmıştır.',
    features: ['Edirnekapı Metrobüs İstasyonuna Doğrudan Geçiş', 'Tarihi Edirnekapı Şehitliği Çıkışı', 'Engelli Rampaları', 'Yaya Üstgeçidi'],
    interchanges: [
      {
        lineCode: 'Metrobüs',
        lineName: 'Metrobüs (Söğütlüçeşme – Beylikdüzü)',
        type: 'rail',
        color: '#FF7E42',
        stationName: 'Edirnekapı Metrobüs İstasyonu',
        transferType: 'Doğrudan Yaya Köprüsü',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'Ortak üstgeçit üzerinden D.100 karayolunun ortasındaki Edirnekapı Metrobüs durağına anında geçiş.'
      }
    ]
  },
  'demirkapı': {
    id: 'demirkapi-t4',
    name: 'Demirkapı Station',
    cleanName: 'Demirkapı',
    turkishName: 'Demirkapı Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Eyüpsultan (Demirkapı Mahallesi)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Demirkap%C4%B1_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Rami Kışla Caddesi üzerindeki Demirkapı T4 durağı',
    description: 'Eyüpsultan Demirkapı Mahallesi yerleşimine hizmet veren hemzemin tramvay durağıdır.',
    historicalContext: '17 Eylül 2007’de 1. etap kapsamında hizmete girmiştir.',
    features: ['Turnike Geçişleri', 'Yaya Geçitleri', 'İstanbulkart Dolum'],
    interchanges: []
  },
  'topçular': {
    id: 'topcular-t4',
    name: 'Topçular Station',
    cleanName: 'Topçular',
    turkishName: 'Topçular Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Eyüpsultan (Topçular Sanayi Bölgesi)',
    structureType: 'Yeraltı (Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Top%C3%A7ular_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'T4 hattının yeraltı istasyonlarından biri olan Topçular durağı',
    description: 'Topçular sanayi ve iş merkezleri bölgesine hizmet veren yeraltı tramvay istasyonudur.',
    historicalContext: '17 Eylül 2007 tarihinde açılmıştır. Rami Kışlası ve çevresindeki yoğun sanayi trafiğini yerin altından bypass eder.',
    features: ['Yeraltı Bilet Holü', 'Yürüyen Merdivenler ve Asansörler', 'Sanayi Alanı Çıkışları'],
    interchanges: []
  },
  'rami': {
    id: 'rami-t4',
    name: 'Rami Station',
    cleanName: 'Rami',
    turkishName: 'Rami Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Eyüpsultan (Rami Yeni / Tarihi Rami Kışlası)',
    structureType: 'Yeraltı (Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rami_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Tarihi Rami Kışlası ve Kütüphanesi yanındaki Rami Yeraltı İstasyonu',
    description: 'Tarihi Rami Kışlası (Rami Kütüphanesi) ve Rami yerleşim bölgesine hizmet sunan modern yeraltı durağıdır.',
    historicalContext: '17 Eylül 2007 tarihinde açılmıştır.',
    features: ['Rami Kütüphanesi Erişimi', 'Yeraltı Peronu', 'Engelli Asansörleri'],
    interchanges: []
  },
  'uluyol-bereç': {
    id: 'uluyol-berec-t4',
    name: 'Uluyol - Bereç Station',
    cleanName: 'Uluyol - Bereç',
    turkishName: 'Uluyol - Bereç Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Gaziosmanpaşa / Bayrampaşa Sınırı',
    structureType: 'Yeraltı (Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Uluyol-Bere%C3%A7_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Gaziosmanpaşa Meydanı bağlantılı Uluyol-Bereç yeraltı istasyonu',
    description: 'Gaziosmanpaşa Cumhuriyet Meydanı, ilçe çarşısı ve Bereç kavşağına hizmet veren en işlek yeraltı istasyonlarındandır.',
    historicalContext: '17 Eylül 2007 tarihinde açılmıştır. Gaziosmanpaşa’nın merkezine raylı erişim sağlayan ana kapıdır.',
    features: ['Gaziosmanpaşa Meydan Çıkışı', 'Yoğun Ticari Aks', 'Turnike Holü'],
    interchanges: []
  },
  'sağmalcılar': {
    id: 'sagmalcilar-t4',
    name: 'Sağmalcılar Station (T4)',
    cleanName: 'Sağmalcılar',
    turkishName: 'Sağmalcılar Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Bayrampaşa / Gaziosmanpaşa',
    structureType: 'Hemzemin (Viyadük / Açık Bölge)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sa%C4%9Fmalc%C4%B1lar_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'T4 Sağmalcılar İstasyonu',
    description: 'Bayrampaşa Muratpaşa Mahallesi ile Gaziosmanpaşa sınırında yer alan hemzemin tramvay durağıdır.',
    historicalContext: '17 Eylül 2007 tarihinde açılmıştır.',
    features: ['Yaya Üstgeçidi', 'Engelli Rampaları', 'İstanbulkart Otomatları'],
    interchanges: []
  },
  'bosna-çukurçeşme': {
    id: 'bosna-cukurcesme-t4',
    name: 'Bosna - Çukurçeşme Station',
    cleanName: 'Bosna - Çukurçeşme',
    turkishName: 'Bosna - Çukurçeşme Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Gaziosmanpaşa (Yıldıztabya / Çukurçeşme)',
    structureType: 'Yeraltı (Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bosna-%C3%87ukur%C3%A7e%C5%9Fme_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Bosna-Çukurçeşme Yeraltı İstasyonu',
    description: 'Gaziosmanpaşa’nın Çukurçeşme ve Bosna mahallelerine hizmet veren modern yeraltı istasyonudur.',
    historicalContext: '17 Eylül 2007 tarihinde hizmete girmiştir.',
    features: ['Yeraltı Bilet Holü', 'Asansör ve Merdivenler', 'Turnike Alanı'],
    interchanges: []
  },
  'ali fuat başgil': {
    id: 'ali-fuat-basgil-t4',
    name: 'Ali Fuat Başgil Station',
    cleanName: 'Ali Fuat Başgil',
    turkishName: 'Ali Fuat Başgil Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Gaziosmanpaşa (Barbaros Hayrettin Paşa / Hürriyet)',
    structureType: 'Yeraltı (Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ali_Fuat_Ba%C5%9Fgil_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Ali Fuat Başgil Caddesi altındaki T4 istasyonu',
    description: 'Ali Fuat Başgil Caddesi ve çevresindeki yoğun konut ve ticaret alanına hizmet veren tünel istasyonudur.',
    historicalContext: '17 Eylül 2007’de T4 1. etabıyla hizmete girmiştir.',
    features: ['Cadde Altı İstasyon Yapısı', 'Geniş Bilet Holü', 'Engelli Asansörleri'],
    interchanges: []
  },
  'taşköprü': {
    id: 'taskopru-t4',
    name: 'Taşköprü Station',
    cleanName: 'Taşköprü',
    turkishName: 'Taşköprü Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Gaziosmanpaşa (Karadeniz / Taşköprü)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ta%C5%9Fk%C3%B6pr%C3%BC_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Eski Edirne Asfaltı refüjündeki Taşköprü İstasyonu',
    description: 'Eski Edirne Asfaltı üzerinde Karadeniz ve Taşköprü mahallelerinin kesişim noktasında yer alır.',
    historicalContext: '17 Eylül 2007 tarihinde açılmıştır.',
    features: ['Eski Edirne Asfaltı Çıkışı', 'Yaya Üstgeçitleri', 'Turnikeler'],
    interchanges: []
  },
  'karadeniz': {
    id: 'karadeniz-t4',
    name: 'Karadeniz Station',
    cleanName: 'Karadeniz',
    turkishName: 'Karadeniz Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Gaziosmanpaşa (Karadeniz Mahallesi)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Karadeniz_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Karadeniz Mahallesi T4 Tramvay İstasyonu',
    description: 'Gaziosmanpaşa Karadeniz Mahallesi konut dokusuna hizmet veren hemzemin tramvay durağıdır.',
    historicalContext: '17 Eylül 2007 tarihinde açılmıştır.',
    features: ['Hemzemin Peronlar', 'Rampa Geçişleri', 'İstanbulkart Otomatları'],
    interchanges: []
  },
  'kiptaş - venezia': {
    id: 'kiptas-venezia-t4',
    name: 'KİPTAŞ - Venezia Station',
    cleanName: 'KİPTAŞ - Venezia',
    turkishName: 'KİPTAŞ - Venezia Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Gaziosmanpaşa / Sultangazi (Metris Kavşağı)',
    structureType: 'Yeraltı (Tünel İstasyonu / Entegre Merkez)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/K%C4%B0PTA%C5%9E_-_Venezia_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Metris Kavşağı ve Venezia Mega Outlet önündeki T4/M7 aktarma istasyonu',
    description: 'Eski adı Metris olan istasyon, O-2 TEM otoyolu Metris Kavşağı’nda yer almakta olup, Venezia Mega Outlet ve M7 Kabataş–Mahmutbey metrosuna doğrudan entegredir.',
    historicalContext: '17 Eylül 2007’de açılmıştır. TEM otoyolunun altından geçen derin tünel yapısıyla kritik bir kavşak noktasıdır.',
    features: ['M7 Mecidiyeköy–Mahmutbey Metrosuna Yeraltı Aktarması', 'Venezia Mega Outlet Doğrudan Çıkışı', 'TEM Metris Kavşağı'],
    interchanges: [
      {
        lineCode: 'M7',
        lineName: 'M7 Yıldız – Mahmutbey Metro Hattı',
        type: 'metro',
        color: '#F490B3',
        stationName: 'Karadeniz Mahallesi Metro İstasyonu',
        transferType: 'Doğrudan Yeraltı Tüneli',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'Ortak yeraltı bilet holü üzerinden M7 metro hattına doğrudan kapalı aktarma imkanı.'
      }
    ]
  },
  'cumhuriyet mahallesi': {
    id: 'cumhuriyet-mahallesi-t4',
    name: 'Cumhuriyet Mahallesi Station',
    cleanName: 'Cumhuriyet Mahallesi',
    turkishName: 'Cumhuriyet Mahallesi Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Sultangazi (Cumhuriyet Mahallesi)',
    structureType: 'Yeraltı (Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cumhuriyet_Mahallesi_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Cumhuriyet Mahallesi Yeraltı İstasyonu',
    description: 'Sultangazi ilçesine girişte Cumhuriyet Mahallesi ve Hamza Yerlikaya Spor Kompleksi’ne hizmet sunan yeraltı durağıdır.',
    historicalContext: '17 Eylül 2007 tarihinde açılmıştır.',
    features: ['Hamza Yerlikaya Spor Kompleksi Çıkışı', 'Yeraltı Peronu', 'Turnike Alanları'],
    interchanges: []
  },
  '50. yıl-baştabya': {
    id: '50-yil-bastabya-t4',
    name: '50. Yıl - Baştabya Station',
    cleanName: '50. Yıl - Baştabya',
    turkishName: '50. Yıl - Baştabya Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Sultangazi (50. Yıl Mahallesi)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/50._Y%C4%B1l_-_Ba%C5%9Ftabya_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: '50. Yıl - Baştabya İstasyonu',
    description: 'Eski Edirne Asfaltı üzerinde 50. Yıl Mahallesi ve Baştabya kışlası bölgesine hizmet verir.',
    historicalContext: '17 Eylül 2007 tarihinde hizmete girmiştir.',
    features: ['Hemzemin Kenar Peronlar', 'Engelli Rampaları', 'İstanbulkart Dolum'],
    interchanges: []
  },
  'hacı şükrü': {
    id: 'haci-sukru-t4',
    name: 'Hacı Şükrü Station',
    cleanName: 'Hacı Şükrü',
    turkishName: 'Hacı Şükrü Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Sultangazi (Uğur Mumcu / 50. Yıl)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hac%C4%B1_%C5%9E%C3%BCkr%C3%BC_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Hacı Şükrü Tramvay İstasyonu',
    description: 'Bezmialem Vakıf Üniversitesi İlhan Varank Yerleşkesi ve Sultangazi konut alanlarına ulaşım sağlar.',
    historicalContext: '17 Eylül 2007 tarihinde açılmıştır.',
    features: ['Üniversite Yerleşkesi Yakınlığı', 'Çift Kenar Peron', 'Yaya Geçitleri'],
    interchanges: []
  },
  'yenimahalle': {
    id: 'yenimahalle-t4',
    name: 'Yenimahalle Station (T4)',
    cleanName: 'Yenimahalle',
    turkishName: 'Yenimahalle Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Sultangazi (Yenimahalle / İsmetpaşa)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yenimahalle_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Yenimahalle T4 Tramvay İstasyonu',
    description: 'Sultangazi ilçesinin Yenimahalle ve İsmetpaşa mahallelerine hizmet veren hemzemin duraktır.',
    historicalContext: '17 Eylül 2007 tarihinde açılmıştır.',
    features: ['Turnike Geçişleri', 'Yaya Üstgeçidi', 'Engelli Erişimi'],
    interchanges: []
  },
  'sultançiftliği': {
    id: 'sultanciftligi-t4',
    name: 'Sultançiftliği Station',
    cleanName: 'Sultançiftliği',
    turkishName: 'Sultançiftliği Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Sultangazi (Sultançiftliği Merkez)',
    structureType: 'Hemzemin (Yüzeysel / İlçe Merkezi)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sultan%C3%A7iftli%C4%9Fi_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Sultangazi ilçe merkezindeki Sultançiftliği ana istasyonu',
    description: 'Sultangazi ilçe merkezi, Sultangazi Haseki Eğitim ve Araştırma Hastanesi ve yoğun belediye/çarşı aksında yer alır.',
    historicalContext: '17 Eylül 2007 tarihinde açılmıştır. Sultangazi’nin en yoğun yolcu çeken tramvay duraklarından biridir.',
    features: ['Sultangazi Haseki Hastanesi Erişimi', 'İlçe Çarşısı ve Kamu Binaları', 'Geniş Yaya Kaldırımları'],
    interchanges: []
  },
  'cebeci': {
    id: 'cebeci-t4',
    name: 'Cebeci Station',
    cleanName: 'Cebeci',
    turkishName: 'Cebeci Tramvay İstasyonu',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Sultangazi (Cebeci Mahallesi)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cebeci_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'Cebeci Tramvay Durağı',
    description: 'Cebeci Mahallesi ve taşocakları yolu üzerindeki yerleşim alanına hizmet sunan duraktır.',
    historicalContext: '17 Eylül 2007 tarihinde açılmıştır.',
    features: ['Mahalle İçi Yaya Bağlantısı', 'Turnike Alanı', 'Engelli Rampaları'],
    interchanges: []
  },
  'mescid-i selam': {
    id: 'mescid-i-selam-t4',
    name: 'Mescid-i Selam Station',
    cleanName: 'Mescid-i Selam',
    turkishName: 'Mescid-i Selam Tramvay Terminali',
    lineCode: 'T4',
    lineName: 'T4 Topkapı – Mescid-i Selam Tramvay Hattı',
    district: 'Sultangazi (Habibler Sınırı / Eski Edirne Asfaltı)',
    structureType: 'Hemzemin (Terminal / Makaslı Son İstasyon)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '17 Eylül 2007',
    openedDateFormatted: '09-2007',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mescid-i_Selam_Tramvay_%C4%B0stasyonu_T4.jpg?width=1000',
    imageCaption: 'T4 hattının kuzey terminali ve dev İETT otobüs aktarma peronları',
    description: 'T4 Topkapı–Mescid-i Selam hattının kuzey başlangıç ve bitiş terminalidir. Habibler, Arnavutköy ve Kuzey İstanbul otobüs hatlarının dev aktarma merkezidir.',
    historicalContext: '17 Eylül 2007 tarihinde T4 hattının 1. etabıyla hizmete girmiştir. Tramvay araç bakım deposu ve atölyeleri istasyonun hemen kuzeyinde yer alır.',
    features: ['Mescid-i Selam İETT Dev Otobüs Aktarma Peronları', 'Arnavutköy Yönü Besleme Hatları', 'T4 Tramvay Depo ve Atölye Sahası', 'Çift Hatlı Makas Alanı'],
    interchanges: [
      {
        lineCode: 'İETT',
        lineName: 'Mescid-i Selam İETT Otobüs Peronları (Arnavutköy, Habibler, Pirinççi)',
        type: 'rail',
        color: '#FF7E42',
        stationName: 'Mescid-i Selam Otobüs Peronları',
        transferType: 'Doğrudan Çıkış / Terminal',
        distance: '20m',
        walkingTime: '~1 dk yürüme',
        description: 'Peron çıkışından doğrudan Arnavutköy, İstanbul Havalimanı yönü ve çevre köylere giden onlarca ekspres ve ring otobüse aktarma.'
      }
    ]
  }
};

export function getT4StationDetail(stationName: string): StationDetail | null {
  if (!stationName) return null;
  const normalized = stationName
    .toLowerCase()
    .replace(/\s+station$/i, '')
    .replace(/\s+istasyonu$/i, '')
    .replace(/\s*\([^\)]*\)/g, '')
    .replace(/[–—]/g, '-')
    .trim();

  for (const [key, detail] of Object.entries(T4_STATIONS_DATA)) {
    if (normalized === key || normalized.includes(key) || key.includes(normalized)) {
      return detail;
    }
  }

  // Normalized characters
  const normalizedClean = normalized
    .replace(/i̇/g, 'i')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g');

  for (const [key, val] of Object.entries(T4_STATIONS_DATA)) {
    const normalizedKey = key
      .replace(/i̇/g, 'i')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ç/g, 'c')
      .replace(/ğ/g, 'g');

    if (normalizedClean === normalizedKey || normalizedClean.includes(normalizedKey) || normalizedKey.includes(normalizedClean)) {
      return val;
    }
  }

  return null;
}
