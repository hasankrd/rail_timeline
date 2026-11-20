import { StationDetail } from './m1StationsData';

export const M3_STATIONS_DATA: Record<string, StationDetail> = {
  'kirazlı': {
    id: 'kirazli-m3',
    name: 'Kirazlı Station',
    cleanName: 'Kirazlı',
    turkishName: 'Kirazlı - Bağcılar Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Kirazlı – Başakşehir/Metrokent Metro Hattı',
    district: 'Bağcılar (Kirazlı / Güneşli Girişi)',
    structureType: 'Yeraltı (Çok Katlı Çapraz Aktarma İstasyonu)',
    platforms: '2 Ada Peron (4 Hat - M3 ve M1B Ortak İstasyon Yapısı)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kirazlı İstasyonu M3 ve M1B ortak aktarma holü ve peronları',
    description: 'Bağcılar ilçesinde yer alan Kirazlı istasyonu, M3 Başakşehir-Metrokent metrosunun güney başlangıç ve bitiş terminalidir. M1B Yenikapı-Otogar-Kirazlı hattıyla aynı yeraltı yapısında doğrudan aktarma olanağı sunar.',
    historicalContext: '14 Haziran 2013 tarihinde hizmete giren M3 hattı ile birlikte açılmış ve bölgenin ana raylı sistem transfer üssü haline gelmiştir.',
    features: ['M1B Hattına Aynı Seviyede / Hızlı Aktarma', 'Mevlana Caddesi Çıkışları', 'Otobüs ve Minibüs Entegrasyonu', 'Engelli Erişilebilir Asansörler'],
    interchanges: [
      {
        lineCode: 'M1B',
        lineName: 'M1B Yenikapı – Kirazlı Metro Hattı',
        type: 'metro',
        color: '#EE2229',
        stationName: 'Kirazlı İstasyonu',
        transferType: 'Ortak İstasyon / Karşı Peron & Alt Kat',
        distance: '0m - 30m',
        walkingTime: '~1 dk yürüme',
        description: 'M1B metrosuna turnike terk etmeden doğrudan yeraltı peron aktarması.'
      }
    ]
  },
  'yenimahalle': {
    id: 'yenimahalle-m3',
    name: 'Yenimahalle Station',
    cleanName: 'Yenimahalle',
    turkishName: 'Yenimahalle Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Kirazlı – Başakşehir/Metrokent Metro Hattı',
    district: 'Bağcılar (Yenimahalle)',
    structureType: 'Yeraltı (Aç-Kapa / Tünel İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yenimahalle istasyon girişi ve bilet holü',
    description: 'Bağcılar Yenimahalle mevkiinde yer alan istasyon, bölgedeki yoğun konut ve ticaret alanlarına hızlı raylı ulaşım sağlamaktadır.',
    historicalContext: '14 Haziran 2013’te Kirazlı–Metrokent etabının bir parçası olarak yolcu taşımaya başlamıştır.',
    features: ['1538. Sokak ve Dökümcüler Çıkışı', 'İETT Otobüs Aktarma Peronları', 'Yürüyen Merdivenler ve Asansörler'],
    interchanges: []
  },
  'mahmutbey': {
    id: 'mahmutbey-m3',
    name: 'Mahmutbey Station',
    cleanName: 'Mahmutbey',
    turkishName: 'Mahmutbey Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Kirazlı – Başakşehir/Metrokent Metro Hattı',
    district: 'Bağcılar (Mahmutbey / Basın Ekspres Girişi)',
    structureType: 'Yeraltı (Çok Katlı Geniş Aktarma İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Mahmutbey Metro İstasyonu aktarma holü',
    description: 'Mahmutbey Kavşağı ve TEM Otoyolu bağlantı noktasında yer alan istasyon, hem bölgedeki iş merkezlerine hem de daha sonra açılacak M7 Mecidiyeköy-Mahmutbey hattına kavşaklık yapan kritik bir noktadır.',
    historicalContext: '14 Haziran 2013’te M3 metrosunun açılmasıyla hizmete girmiştir.',
    features: ['TEM Otoyolu ve Basın Ekspres Bağlantısı', 'İnönü Caddesi Çıkışı', 'Geniş Bilet Holü', 'M7 Gelecek Aktarma Bağlantısı'],
    interchanges: []
  },
  'istoç': {
    id: 'istoc-m3',
    name: 'İSTOÇ Station',
    cleanName: 'İSTOÇ',
    turkishName: 'İSTOÇ Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Kirazlı – Başakşehir/Metrokent Metro Hattı',
    district: 'Bağcılar (İSTOÇ Toptancılar Çarşısı)',
    structureType: 'Yeraltı (Tünel İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İSTOÇ Ticaret Merkezi önündeki metro çıkışı',
    description: 'Türkiye’nin en büyük toptancı ticaret merkezlerinden biri olan İSTOÇ kompleksinin doğrudan içine açılan metro istasyonudur. Günlük on binlerce esnaf ve ziyaretçiye hizmet verir.',
    historicalContext: '14 Haziran 2013 tarihinde Kirazlı–Metrokent etabıyla birlikte hizmete girmiştir.',
    features: ['İSTOÇ Ticaret Merkezi Doğrudan Geçiş', 'TEM Kuzey Yan Yol Çıkışı', 'Ticari Otopark Entegrasyonu'],
    interchanges: []
  },
  'ikitelli sanayi': {
    id: 'ikitelli-sanayi-m3',
    name: 'İkitelli Sanayi Station',
    cleanName: 'İkitelli Sanayi',
    turkishName: 'İkitelli Sanayi Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Kirazlı – Başakşehir/Metrokent Metro Hattı',
    district: 'Başakşehir (İkitelli Organize Sanayi Bölgesi)',
    structureType: 'Yeraltı (Çok Hatlı Çatallanma ve Aktarma İstasyonu)',
    platforms: '2 Ada Peron (4 Hat - Ana Hat ve Olimpiyat Mekik Hattı Ayrımı)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İkitelli Sanayi İstasyonu peronları ve ray makasları',
    description: 'İkitelli Organize Sanayi Bölgesi’nin kalbinde yer alır. M3 ana hattı ile Olimpiyat Şube (Mekik) Hattı’nın birbirinden ayrıldığı kavşak ve aktarma istasyonudur.',
    historicalContext: '14 Haziran 2013’te açılmış, 2013-2021 yılları arasında Olimpiyat mekik seferlerinin başlangıç noktası olarak hizmet vermiştir.',
    features: ['Olimpiyat Mekik Hattı Çapraz Peron Aktarması', 'Bedrettin Dalan Bulvarı Çıkışı', 'İkitelli OSB Yönetim Merkezi Yanı'],
    interchanges: [
      {
        lineCode: 'M9',
        lineName: 'M9 Ataköy – Bahariye – Olimpiyat Metro Hattı',
        type: 'metro',
        color: '#FCD10D',
        stationName: 'İkitelli Sanayi İstasyonu',
        transferType: 'Aynı Peron / Alt-Üst Peron Aktarması',
        distance: '15m',
        walkingTime: '~1 dk yürüme',
        description: 'Bahariye, MASKO veya Olimpiyat yönüne M9 metro seferlerine doğrudan aktarma.'
      },
      {
        lineCode: 'M3 Mekik',
        lineName: 'M3 İkitelli Sanayi – Olimpiyat Mekik Hattı (2013-2021)',
        type: 'metro',
        color: '#0CA6DF',
        stationName: 'İkitelli Sanayi İstasyonu',
        transferType: 'Karşı Peron Aktarması',
        distance: '10m',
        walkingTime: '~30 sn yürüme',
        description: 'Ziya Gökalp Mahallesi ve Atatürk Olimpiyat Stadyumu yönüne 2021 öncesi mekik aktarması.'
      }
    ]
  },
  'turgut özal': {
    id: 'turgut-ozal-m3',
    name: 'Turgut Özal Station',
    cleanName: 'Turgut Özal',
    turkishName: 'Turgut Özal Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Kirazlı – Başakşehir/Metrokent Metro Hattı',
    district: 'Başakşehir (İkitelli OSB / Turgut Özal Sanayi Sitesi)',
    structureType: 'Yeraltı (Tünel İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Turgut Özal İstasyonu bilet holü',
    description: 'Turgut Özal Sanayi Sitesi ile çevre sanayi kooperatiflerine hizmet veren yer altı metro durağıdır.',
    historicalContext: '14 Haziran 2013 tarihinde işletmeye açılmıştır.',
    features: ['Süleyman Demirel Bulvarı Girişi', 'Turgut Özal Sanayi Sitesi Çıkışı', 'Geniş Asansör ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'siteler': {
    id: 'siteler-m3',
    name: 'Siteler Station',
    cleanName: 'Siteler',
    turkishName: 'Siteler Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Kirazlı – Başakşehir/Metrokent Metro Hattı',
    district: 'Başakşehir (İkitelli OSB / Çevre Sanayi Siteleri)',
    structureType: 'Yeraltı (Tünel İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Siteler İstasyonu turnike alanı',
    description: 'Başakşehir sanayi siteleri bölgesinde Süleyman Demirel Bulvarı aksında konumlanmış metro istasyonudur.',
    historicalContext: '14 Haziran 2013’te hizmete açılmıştır.',
    features: ['Atatürk Oto Sanatkarları Çıkışı', 'Metal-İş Sanayi Sitesi Bağlantısı', 'Yolcu Bilgilendirme Ekranları'],
    interchanges: []
  },
  'başak konutları': {
    id: 'basak-konutlari-m3',
    name: 'Başak Konutları Station',
    cleanName: 'Başak Konutları',
    turkishName: 'Başak Konutları Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Kirazlı – Başakşehir/Metrokent Metro Hattı',
    district: 'Başakşehir (1. ve 2. Etap Konutları)',
    structureType: 'Yeraltı (Aç-Kapa İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Başak Konutları İstasyonu cadde seviyesi girişleri',
    description: 'Başakşehir 1. ve 2. etap toplu konut alanlarının ana ulaşım kapısıdır. Hürriyet Bulvarı ve konut bölgelerine yaya erişimi sağlar.',
    historicalContext: '14 Haziran 2013 tarihinde Kirazlı–Metrokent etabıyla birlikte hizmete girmiştir.',
    features: ['Başakşehir 1. ve 2. Etap Yaya Erişimi', 'Hürriyet Bulvarı Çıkışı', 'Geniş Park ve Dinlenme Alanı Bağlantısı'],
    interchanges: []
  },
  'metrokent': {
    id: 'metrokent-m3',
    name: 'Metrokent Station',
    cleanName: 'Metrokent',
    turkishName: 'Başakşehir - Metrokent Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Kirazlı – Başakşehir/Metrokent Metro Hattı',
    district: 'Başakşehir (Metrokent / 4. ve 5. Etaplar / İlçe Meydanı)',
    structureType: 'Yeraltı (Terminal İstasyon / Çift Makaslı)',
    platforms: '1 Ada Peron (2 Hat - Tren Park ve Dönüş Makasları)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Başakşehir Metrokent İstasyonu ve meydan girişi',
    description: 'Başakşehir ilçe merkezinde yer alan Metrokent istasyonu, M3 hattının 2013 yılındaki kuzey başlangıç ve bitiş terminalidir. Meydan, belediye birimleri ve otobüs peronlarıyla entegredir.',
    historicalContext: '14 Haziran 2013 tarihinde M3 metrosunun kuzey terminali olarak Başbakanlık ve İBB heyetiyle görkemli bir törenle açılmıştır.',
    features: ['Başakşehir Meydanı ve Park Alanı', 'İETT Otobüs ve Minibüs Hareket Noktası', 'Dönüş ve Depolama Makas Hatları', 'Yüksek Kapasiteli Asansörler'],
    interchanges: []
  },
  'ziya gökalp mahallesi': {
    id: 'ziya-gokalp-m3',
    name: 'Ziya Gökalp Mahallesi Station',
    cleanName: 'Ziya Gökalp Mahallesi',
    turkishName: 'Ziya Gökalp Mahallesi Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 İkitelli Sanayi – Olimpiyat Mekik Hattı',
    district: 'Başakşehir (Ziya Gökalp Mahallesi)',
    structureType: 'Yeraltı (Derin Tünel İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Ziya Gökalp Mahallesi İstasyon girişi',
    description: 'İkitelli Sanayi ile Olimpiyat Stadyumu arasındaki mekik şube hattının ara istasyonudur. Mahalle sakinlerine ve çevredeki tesislere hizmet verir.',
    historicalContext: '14 Haziran 2013’te M3 İkitelli–Olimpiyat mekik servisi bünyesinde açılmıştır.',
    features: ['Hürriyet Bulvarı Çıkışları', 'Otobüs Hatları Entegrasyonu', 'Derin Tünel Mimarisi'],
    interchanges: []
  },
  'olimpiyat': {
    id: 'olimpiyat-m3',
    name: 'Olimpiyat Station',
    cleanName: 'Olimpiyat',
    turkishName: 'Olimpiyat Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 İkitelli Sanayi – Olimpiyat Mekik Hattı',
    district: 'Başakşehir (Atatürk Olimpiyat Stadyumu)',
    structureType: 'Yarı Açık / Yeraltı (Devasa Kapasiteli Stadyum İstasyonu)',
    platforms: '2 Ada Peron (4 Hat - Stadyum Tahliye Peronları ve Depo Sahası Bağlantısı)',
    openedDate: '14 Haziran 2013',
    openedDateFormatted: '06-2013',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Atatürk Olimpiyat Stadyumu önündeki Olimpiyat Metro İstasyonu',
    description: 'Atatürk Olimpiyat Stadyumu’nun hemen doğusunda yer alan istasyon, 80.000 kişilik stadyumun devasa seyirci kalabalığını tahliye edebilecek kapasitede çok hatlı geniş peronlarla ve metro atölye/depo sahası bağlantısıyla inşa edilmiştir.',
    historicalContext: '14 Haziran 2013 tarihinde İkitelli Sanayi - Olimpiyat mekik hattının batı uç terminali olarak hizmete alınmıştır.',
    features: ['Atatürk Olimpiyat Stadyumu Doğrudan Meydan Girişi', 'Olimpiyat Metro Bakım ve Depo Sahası Bağlantısı', '4 Hatlı Yüksek Kapasiteli Tahliye Peronları', 'İETT Olimpiyatköy Otobüs Peronları'],
    interchanges: []
  },
  'onurkent': {
    id: 'onurkent-m3',
    name: 'Onurkent Station',
    cleanName: 'Onurkent',
    turkishName: 'Onurkent Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Başakşehir (Onurkent / Başakşehir 2. Etap)',
    structureType: 'Yeraltı (Tünel İstasyonu / 26m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '8 Nisan 2023',
    openedDateFormatted: '04-2023',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Onurkent Metro İstasyonu giriş ve bilet holü',
    description: 'Başakşehir Onurkent Mahallesi ve Mimar Kemalettin Bulvarı çevresindeki yoğun toplu konut alanlarına hizmet verir.',
    historicalContext: '8 Nisan 2023 tarihinde Metrokent–Kayaşehir uzatması ile hizmete girmiştir.',
    features: ['Onurkent Konutları Erişimi', 'Mimar Kemalettin Bulvarı Çıkışı', 'Engelli Asansörleri ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'şehir hastanesi': {
    id: 'sehir-hastanesi-m3',
    name: 'Şehir Hastanesi Station',
    cleanName: 'Şehir Hastanesi',
    turkishName: 'Şehir Hastanesi Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Başakşehir (Başakşehir Çam ve Sakura Şehir Hastanesi)',
    structureType: 'Yeraltı (Doğrudan Hastane Kompleksi Entegre / 28m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '8 Nisan 2023',
    openedDateFormatted: '04-2023',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Çam ve Sakura Şehir Hastanesi entegre metro girişi',
    description: 'Avrupa’nın en büyük sağlık komplekslerinden biri olan Başakşehir Çam ve Sakura Şehir Hastanesi’ne doğrudan yeraltı tüneliyle kesintisiz bağlantı sağlar. Günde 100.000’den fazla hasta ve sağlık çalışanına hizmet verir.',
    historicalContext: '8 Nisan 2023 tarihinde Ulaştırma ve Altyapı Bakanlığı tarafından tamamlanarak hizmete açılmıştır.',
    features: ['Çam ve Sakura Şehir Hastanesi Doğrudan Yeraltı Tüneli', 'Fizik Tedavi, Kadın Doğum ve Onkoloji Hastaneleri Çıkışları', 'Acil Servis Yaya Erişimi', 'Geniş Asansörler'],
    interchanges: []
  },
  'sehir hastanesi': {
    id: 'sehir-hastanesi-m3-alias',
    name: 'Şehir Hastanesi Station',
    cleanName: 'Şehir Hastanesi',
    turkishName: 'Şehir Hastanesi Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Başakşehir (Çam ve Sakura Şehir Hastanesi)',
    structureType: 'Yeraltı (Hastane Entegre İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '8 Nisan 2023',
    openedDateFormatted: '04-2023',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Şehir Hastanesi Metro İstasyonu',
    description: 'Başakşehir Çam ve Sakura Şehir Hastanesi metro istasyonu.',
    historicalContext: '8 Nisan 2023’te açılmıştır.',
    features: ['Şehir Hastanesi Tüneli', 'Engelli Erişimi'],
    interchanges: []
  },
  'toplu konutlar': {
    id: 'toplu-konutlar-m3',
    name: 'Toplu Konutlar Station',
    cleanName: 'Toplu Konutlar',
    turkishName: 'Toplu Konutlar Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Başakşehir (Kayaşehir 15. ve 16. Bölge Toplu Konutları)',
    structureType: 'Yeraltı (Tünel İstasyonu / 24m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '8 Nisan 2023',
    openedDateFormatted: '04-2023',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kayaşehir Toplu Konutlar Metro İstasyonu',
    description: 'Kayaşehir toplu konut bölgeleri, Akik Caddesi ve çevre sitelere hizmet verir.',
    historicalContext: '8 Nisan 2023 tarihinde açılmıştır.',
    features: ['Kayaşehir Toplu Konutları Erişimi', 'Akik Caddesi Çıkışları', 'Engelli Erişimi'],
    interchanges: []
  },
  'kayaşehir merkez': {
    id: 'kayasehir-merkez-m3',
    name: 'Kayaşehir Merkez Station',
    cleanName: 'Kayaşehir Merkez',
    turkishName: 'Kayaşehir Merkez Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Başakşehir (Kayaşehir Meydanı)',
    structureType: 'Yeraltı (Kuzey Nihai Terminal & M11 Gelecek Aktarma İstasyonu / 32m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '8 Nisan 2023',
    openedDateFormatted: '04-2023',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kayaşehir Merkez Metro İstasyonu turnike holü ve meydan çıkışı',
    description: 'M3 hattının kuzey nihai terminalidir. Kayaşehir Kent Meydanı, Kayaşehir AVM ve Millet Bahçesi yanında yer alır. Gelecekte M11 İstanbul Havalimanı–Halkalı metro hattı ile entegre olacaktır.',
    historicalContext: '8 Nisan 2023 tarihinde hizmete açılmıştır.',
    features: ['Kayaşehir Kent Meydanı Çıkışı', 'M11 İstanbul Havalimanı Gelecek Aktarması', 'Geniş Bilet Holü ve Turnike Sahası', 'Engelli Asansörleri'],
    interchanges: [
      {
        lineCode: 'M11',
        lineName: 'M11 İstanbul Havalimanı – Halkalı Metro Hattı',
        type: 'metro',
        color: '#A1609B',
        stationName: 'Kayaşehir İstasyonu',
        transferType: 'Gelecek Ortak İstasyon Kompleksi',
        distance: '30m',
        walkingTime: '~1 dk yürüme',
        description: 'İstanbul Havalimanı ve Gayrettepe / Halkalı yönüne doğrudan hızlı metro entegrasyonu.'
      }
    ]
  },
  'kayasehir': {
    id: 'kayasehir-merkez-alias',
    name: 'Kayaşehir Merkez Station',
    cleanName: 'Kayaşehir Merkez',
    turkishName: 'Kayaşehir Merkez Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Başakşehir (Kayaşehir Meydanı)',
    structureType: 'Yeraltı (Kuzey Nihai Terminal)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '8 Nisan 2023',
    openedDateFormatted: '04-2023',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Kayaşehir Merkez Metro İstasyonu',
    description: 'Kayaşehir Kent Meydanı metro istasyonudur.',
    historicalContext: '8 Nisan 2023 tarihinde açılmıştır.',
    features: ['Kent Meydanı Çıkışı', 'Engelli Erişimi'],
    interchanges: []
  },
  'molla gürani': {
    id: 'molla-gurani-m3',
    name: 'Molla Gürani Station',
    cleanName: 'Molla Gürani',
    turkishName: 'Molla Gürani Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Bağcılar (İnönü Mahallesi)',
    structureType: 'Yeraltı (Tünel İstasyon / 27m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Molla Gürani Metro İstasyonu giriş ve bilet holü',
    description: 'Bağcılar İnönü Mahallesi’nde Mehmet Akif Bulvarı ve Molla Gürani Parkı yakınında yer alan yer altı metro istasyonudur. Yoğun konut dokusuna ve eğitim kurumlarına hızlı ulaşım sağlar.',
    historicalContext: '10 Mart 2024 tarihinde M3 Bakırköy Sahil – Kirazlı uzatması ile hizmete girmiştir.',
    features: ['Molla Gürani Parkı Çıkışı', 'Mehmet Akif Bulvarı Bağlantısı', 'Engelli Asansörleri ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'molla gurani': {
    id: 'molla-gurani-alias',
    name: 'Molla Gürani Station',
    cleanName: 'Molla Gürani',
    turkishName: 'Molla Gürani Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Bağcılar (İnönü Mahallesi)',
    structureType: 'Yeraltı (Tünel İstasyon)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Molla Gürani Metro İstasyonu',
    description: 'Bağcılar İnönü Mahallesi metro istasyonudur.',
    historicalContext: '10 Mart 2024 tarihinde hizmete girmiştir.',
    features: ['Molla Gürani Parkı Çıkışı', 'Engelli Erişimi'],
    interchanges: []
  },
  'ilkyuva': {
    id: 'ilkyuva-m3',
    name: 'İlkyuva Station',
    cleanName: 'İlkyuva',
    turkishName: 'İlkyuva Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Bahçelievler (Bahçelievler / Siyavuşpaşa Mahallesi)',
    structureType: 'Yeraltı (Tünel İstasyon / 29m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İlkyuva Metro İstasyonu modern peron tasarımı',
    description: 'Bahçelievler ile Bağcılar sınırında, Bağcılar Caddesi ve İlkyuva Meydanı kesişiminde yer alır. Bölgedeki yoğun yerleşim dokusuna hızlı raylı ulaşım sağlar.',
    historicalContext: '10 Mart 2024 tarihinde M3 Kirazlı – Bakırköy Sahil etabıyla açılmıştır.',
    features: ['İlkyuva Meydanı Çıkışı', 'Bağcılar Caddesi Erişimi', 'Engelli Dostu Asansörler'],
    interchanges: []
  },
  'haznedar': {
    id: 'haznedar-m3',
    name: 'Haznedar Station',
    cleanName: 'Haznedar',
    turkishName: 'Haznedar Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Güngören / Bahçelievler (Haznedar Mahallesi)',
    structureType: 'Yeraltı (Tünel İstasyon / 31m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Haznedar İstasyonu geniş bilet holü ve turnikeler',
    description: 'Güngören ile Bahçelievler ilçe sınırındaki Haznedar Meydanı ve Bağcılar Caddesi üzerinde bulunur. Bölgenin ticari merkezine ve çarşısına hizmet vermektedir.',
    historicalContext: '10 Mart 2024 tarihinde M3 güney etabıyla birlikte işletmeye alınmıştır.',
    features: ['Haznedar Meydanı Girişi', 'Bağcılar Caddesi Çıkışı', 'Güngören - Bahçelievler Yaya Geçişi', 'Engelli Erişimi'],
    interchanges: []
  },
  'incirli': {
    id: 'incirli-m3',
    name: 'İncirli Station',
    cleanName: 'İncirli',
    turkishName: 'İncirli Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Bakırköy (İncirli / Osmaniye)',
    structureType: 'Yeraltı (Tünel İstasyon / 34m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İncirli Metro İstasyonu aktarma koridoru',
    description: 'Bakırköy İncirli Caddesi ile D-100 (E-5) Karayolu kesişimindeki devasa entegre aktarma merkezidir. M1A Yenikapı - Atatürk Havalimanı metrosu ve Metrobüs ile direkt aktarma bağlantısına sahiptir.',
    historicalContext: '10 Mart 2024 tarihinde hizmete girerek Bakırköy-İncirli bölgesini M3 hattı üzerinden Başakşehir ve Kayaşehir’e doğrudan bağlamıştır.',
    features: ['M1A Metrosuna Yeraltı Aktarma Koridoru', 'Metrobüs İncirli İstasyonu Bağlantısı', 'E-5 Karayolu Altgeçit Erişimi', 'İncirli Caddesi Çıkışları', 'Geniş Bilet Holü'],
    interchanges: [
      {
        lineCode: 'M1A',
        lineName: 'M1A Yenikapı – Atatürk Havalimanı Metro Hattı',
        type: 'metro',
        color: '#EE2229',
        stationName: 'Bakırköy - İncirli İstasyonu',
        transferType: 'Yeraltı Bağlantı Tüneli',
        distance: '60m',
        walkingTime: '~1-2 dk yürüme',
        description: 'Yenikapı, Otogar ve Atatürk Havalimanı yönüne doğrudan metro aktarması.'
      },
      {
        lineCode: 'Metrobüs',
        lineName: 'İETT Metrobüs Hattı (Beylikdüzü – Söğütlüçeşme)',
        type: 'rail',
        color: '#3b82f6',
        stationName: 'İncirli Metrobüs İstasyonu',
        transferType: 'Yaya Köprüsü ve Altgeçit Bağlantısı',
        distance: '100m',
        walkingTime: '~2 dk yürüme',
        description: 'D-100 karayolu üzerindeki Metrobüs durağına doğrudan yaya geçidi bağlantısı.'
      }
    ]
  },
  'özgürlük meydanı': {
    id: 'ozgurluk-meydani-m3',
    name: 'Özgürlük Meydanı Station',
    cleanName: 'Özgürlük Meydanı',
    turkishName: 'Özgürlük Meydanı Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Bakırköy (Cumhuriyet / Özgürlük Meydanı)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / 32m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Özgürlük Meydanı Metro İstasyonu modern giriş mimarisi',
    description: 'Bakırköy’ün kalbi olan Özgürlük (Cumhuriyet) Meydanı altında yer alır. Marmaray banliyö hattı ve TCDD Yüksek Hızlı Tren (YHT) Bakırköy Garı ile doğrudan entegredir.',
    historicalContext: '10 Mart 2024 tarihinde M3 hattının Bakırköy merkez etabıyla birlikte açılmıştır.',
    features: ['Marmaray Bakırköy İstasyonu Aktarması', 'YHT Hızlı Tren Entegrasyonu', 'Özgürlük Meydanı Doğrudan Çıkışı', 'Bakırköy Çarşı ve Kaymakamlık Erişimi'],
    interchanges: [
      {
        lineCode: 'Marmaray',
        lineName: 'B1 Marmaray (Halkalı – Gebze) Banliyö Tren Hattı',
        type: 'rail',
        color: '#65656A',
        stationName: 'Bakırköy Tren İstasyonu',
        transferType: 'Yeraltı Aktarma Tüneli',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'Halkalı, Yenikapı, Kadıköy, Bostancı ve Gebze yönlerine kesintisiz tren aktarması.'
      },
      {
        lineCode: 'YHT',
        lineName: 'TCDD Yüksek Hızlı Tren (İstanbul – Ankara – Karaman / Sivas)',
        type: 'rail',
        color: '#1e3a8a',
        stationName: 'Bakırköy YHT Garı',
        transferType: 'Gar Binası Bağlantısı',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'Ankara, Eskişehir ve Konya yönüne giden şehirlerarası YHT trenlerine bağlantı.'
      }
    ]
  },
  'ozgurluk meydani': {
    id: 'ozgurluk-meydani-alias',
    name: 'Özgürlük Meydanı Station',
    cleanName: 'Özgürlük Meydanı',
    turkishName: 'Özgürlük Meydanı Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Bakırköy (Cumhuriyet / Özgürlük Meydanı)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Özgürlük Meydanı Metro İstasyonu',
    description: 'Bakırköy Özgürlük Meydanı metro istasyonudur.',
    historicalContext: '10 Mart 2024 tarihinde açılmıştır.',
    features: ['Marmaray ve YHT Aktarması', 'Özgürlük Meydanı Çıkışı'],
    interchanges: []
  },
  'bakırköy sahil': {
    id: 'bakirkoy-sahil-m3',
    name: 'Bakırköy Sahil Station',
    cleanName: 'Bakırköy Sahil',
    turkishName: 'Bakırköy Sahil Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Bakırköy (Sahil Parkı / Cevizlik)',
    structureType: 'Yeraltı (Güney Nihai Terminal / 22m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Bakırköy Sahil Metro İstasyonu deniz kıyısı çıkışı',
    description: 'M3 hattının Marmara Denizi sahilindeki güney uç terminalidir. Bakırköy Sahil Parkı, Kennedy Caddesi ve İDO Bakırköy Deniz Otobüsü İskelesi’ne doğrudan erişim sağlar.',
    historicalContext: '10 Mart 2024 tarihinde M3 güney uzatmasıyla hizmete alınarak hattı Marmara Denizi kıyısına ulaştırmıştır.',
    features: ['İDO Deniz Otobüsü İskelesi Entegrasyonu', 'Bakırköy Sahil Parkı ve Kordon Çıkışı', 'Kennedy Caddesi Yaya Üstgeçidi', 'İETT Sahil Otobüs Peronları'],
    interchanges: [
      {
        lineCode: 'İDO',
        lineName: 'İDO Bakırköy Deniz Otobüsü Terminali',
        type: 'rail',
        color: '#0CA6DF',
        stationName: 'Bakırköy İskelesi',
        transferType: 'Sahil Yolu Yaya Geçidi',
        distance: '80m',
        walkingTime: '~1-2 dk yürüme',
        description: 'Bursa, Yalova, Bandırma ve Adalar yönüne hızlı deniz otobüsleri aktarması.'
      }
    ]
  },
  'bakirkoy sahil': {
    id: 'bakirkoy-sahil-alias',
    name: 'Bakırköy Sahil Station',
    cleanName: 'Bakırköy Sahil',
    turkishName: 'Bakırköy Sahil Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Bakırköy (Sahil Parkı)',
    structureType: 'Yeraltı (Güney Terminal)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '10 Mart 2024',
    openedDateFormatted: '03-2024',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Bakırköy Sahil Metro İstasyonu',
    description: 'Bakırköy Sahil metro terminalidir.',
    historicalContext: '10 Mart 2024 tarihinde hizmete girmiştir.',
    features: ['İDO Deniz Otobüsü İskelesi Aktarması', 'Sahil Parkı Çıkışı'],
    interchanges: []
  },
  'yıldıztepe': {
    id: 'yildiztepe-m3',
    name: 'Yıldıztepe Station',
    cleanName: 'Yıldıztepe',
    turkishName: 'Yıldıztepe Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Bağcılar (Yıldıztepe Mahallesi / Bağcılar Caddesi)',
    structureType: 'Yeraltı (Tünel İstasyon / 32m Derinlik)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '8 Ekim 2025',
    openedDateFormatted: '10-2025',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yıldıztepe M3 Metro İstasyonu turnike ve bilet holü',
    description: 'Bağcılar Yıldıztepe Mahallesi’nde Bağcılar Caddesi ve Yıldız Caddesi kesişiminde yer alır. M3 hattının 10 Mart 2024 açılışında istasyon inşaatı sürdüğü için trenler istasyonu pas geçmiş, istasyon 8 Ekim 2025 tarihinde tamamlanarak hizmete alınmıştır.',
    historicalContext: '8 Ekim 2025 tarihinde hizmete açılarak M3 hattındaki eksik ara istasyon tamamlanmıştır.',
    features: ['Bağcılar Caddesi Çıkışı', 'Yıldız Caddesi Erişimi', 'Engelli Asansörleri ve Yürüyen Merdivenler'],
    interchanges: []
  },
  'yildiztepe': {
    id: 'yildiztepe-alias',
    name: 'Yıldıztepe Station',
    cleanName: 'Yıldıztepe',
    turkishName: 'Yıldıztepe Metro İstasyonu',
    lineCode: 'M3',
    lineName: 'M3 Bakırköy Sahil – Kirazlı – Kayaşehir Merkez Metro Hattı',
    district: 'Bağcılar (Yıldıztepe)',
    structureType: 'Yeraltı',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '8 Ekim 2025',
    openedDateFormatted: '10-2025',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yıldıztepe İstasyonu',
    description: 'Yıldıztepe M3 metro istasyonudur.',
    historicalContext: '8 Ekim 2025 tarihinde hizmete girmiştir.',
    features: ['Bağcılar Caddesi Çıkışı'],
    interchanges: []
  }
};

export function getM3StationDetail(name: string): StationDetail | null {
  if (!name) return null;
  const clean = name
    .replace(/\s+Station$/i, '')
    .replace(/\s+İstasyonu$/i, '')
    .replace(/\s*\([A-Za-z0-9]+\)$/i, '')
    .trim()
    .toLowerCase();

  for (const [key, detail] of Object.entries(M3_STATIONS_DATA)) {
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

  for (const [key, val] of Object.entries(M3_STATIONS_DATA)) {
    const normalizedKey = normalize(key);
    if (
      normalizedClean === normalizedKey ||
      normalizedClean.includes(normalizedKey) ||
      normalizedKey.includes(normalizedClean)
    ) {
      return val;
    }
  }

  if (normalizedClean.includes('molla') || normalizedClean.includes('gurani')) return M3_STATIONS_DATA['molla gürani'];
  if (normalizedClean.includes('yildiztepe') || normalizedClean.includes('yıldıztepe')) return M3_STATIONS_DATA['yıldıztepe'];
  if (normalizedClean.includes('ilkyuva')) return M3_STATIONS_DATA['ilkyuva'];
  if (normalizedClean.includes('haznedar')) return M3_STATIONS_DATA['haznedar'];
  if (normalizedClean.includes('incirli')) return M3_STATIONS_DATA['incirli'];
  if (normalizedClean.includes('ozgurluk') || normalizedClean.includes('özgürlük')) return M3_STATIONS_DATA['özgürlük meydanı'];
  if (normalizedClean.includes('sahil') || normalizedClean.includes('bakirkoy') || normalizedClean.includes('bakırköy')) return M3_STATIONS_DATA['bakırköy sahil'];
  if (normalizedClean.includes('onurkent')) return M3_STATIONS_DATA['onurkent'];
  if (normalizedClean.includes('sehir') || normalizedClean.includes('hastane')) return M3_STATIONS_DATA['şehir hastanesi'];
  if (normalizedClean.includes('toplu') || normalizedClean.includes('konut')) return M3_STATIONS_DATA['toplu konutlar'];
  if (normalizedClean.includes('kayasehir') || normalizedClean.includes('kayaşehir')) return M3_STATIONS_DATA['kayaşehir merkez'];

  return null;
}
