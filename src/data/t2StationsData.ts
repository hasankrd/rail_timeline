import { StationDetail } from './m1StationsData';

export const T2_STATIONS_DATA: Record<string, StationDetail> = {
  'zeytinburnu': {
    id: 'zeytinburnu-t2',
    name: 'Zeytinburnu Station (T2)',
    cleanName: 'Zeytinburnu',
    turkishName: 'Zeytinburnu Tramvay İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Zeytinburnu – Bağcılar Tramvay Hattı',
    district: 'Bakırköy / Zeytinburnu (Çırpıcı / D.100)',
    structureType: 'Hemzemin (Entegre Raylı Sistemler Aktarma İstasyonu)',
    platforms: 'Ada ve Kenar Peronlar',
    openedDate: '14 Eylül 2006',
    openedDateFormatted: '09-2006',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Zeytinburnu_Metro_%C4%B0stasyonu.jpg?width=1000',
    imageCaption: 'M1A, T1 ve T2 hatlarının kesiştiği Zeytinburnu dev aktarma merkezi',
    description: '14 Eylül 2006’da hizmete giren T2 Zeytinburnu–Bağcılar tramvayının güney başlangıç terminalidir. M1A Havalimanı metrosu ve T1 Kabataş tramvayı ile doğrudan entegredir.',
    historicalContext: '2006 yılında açılan hat, başlangıçta yüksek tabanlı araçlarla bağımsız T2 hattı olarak işletilmiş, 2011 yılında peronlar alçaltılarak T1 hattına dahil edilmiştir.',
    features: ['M1A Havalimanı Metrosuna Doğrudan Geçiş', 'T1 Kabataş Tramvayına Aktarma', 'Metrobüs Entegrasyonu', 'Turnike ve Bilet Holleri'],
    interchanges: [
      {
        lineCode: 'T1',
        lineName: 'T1 Kabataş – Bağcılar Tramvay Hattı',
        type: 'tram',
        color: '#004B86',
        stationName: 'Zeytinburnu T1 İstasyonu',
        transferType: 'Aynı Peron / Karşı Hat',
        distance: '10m',
        walkingTime: '~1 dk yürüme',
        description: 'Tarihi Yarımada ve Kabataş yönüne giden T1 tramvayına doğrudan peron içi aktarma.'
      },
      {
        lineCode: 'M1A',
        lineName: 'M1A Yenikapı – Atatürk Havalimanı Metro Hattı',
        type: 'metro',
        color: '#EE2229',
        stationName: 'Zeytinburnu Metro İstasyonu',
        transferType: 'Üstgeçit / Turnike Holü',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'Ortak yaya köprüsü üzerinden M1A metro hattına doğrudan geçiş.'
      }
    ]
  },
  'mehmet akif': {
    id: 'mehmet-akif',
    name: 'Mehmet Akif Station',
    cleanName: 'Mehmet Akif',
    turkishName: 'Mehmet Akif İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Zeytinburnu – Bağcılar Tramvay Hattı',
    district: 'Güngören (Mehmet Nesih Özmen)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '14 Eylül 2006',
    openedDateFormatted: '09-2006',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mehmet_Akif_Tramvay_%C4%B0stasyonu_T1.jpg?width=1000',
    imageCaption: 'Mehmet Akif Ersoy Caddesi üzerindeki tramvay durağı',
    description: 'Güngören ilçesinin güneyinde Mehmet Nesih Özmen Mahallesi ve çevre yerleşimlerine hizmet veren hemzemin tramvay durağıdır.',
    historicalContext: '14 Eylül 2006 tarihinde T2 hattının ilk işletmeye alınmasıyla açılmıştır.',
    features: ['Engelli Rampaları', 'Yaya Geçitleri', 'İstanbulkart Dolum'],
    interchanges: []
  },
  'merter tekstil merkezi': {
    id: 'merter-tekstil-merkezi',
    name: 'Merter Tekstil Merkezi Station',
    cleanName: 'Merter Tekstil Merkezi',
    turkishName: 'Merter Tekstil Merkezi İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Zeytinburnu – Bağcılar Tramvay Hattı',
    district: 'Güngören (Merter Tekstil Sanayi Bölgesi)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '14 Eylül 2006',
    openedDateFormatted: '09-2006',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Merter_Tekstil_Merkezi_Tramvay_%C4%B0stasyonu_T1.jpg?width=1000',
    imageCaption: 'Türkiye tekstil ticaretinin kalbi Merter Tekstil Merkezi durağı',
    description: 'Türkiye’nin ve bölgenin en büyük hazır giyim ve tekstil ihracat merkezi olan Merter sanayi ve ticaret bölgesine doğrudan hizmet verir.',
    historicalContext: '14 Eylül 2006’da açılan durak, Merter esnafının ve çalışanlarının raylı ulaşıma erişimini sağlamıştır.',
    features: ['Tekstil Çarşıları Çıkışı', 'Ticaret Merkezleri Erişimi', 'Turnike Geçişleri'],
    interchanges: []
  },
  'güngören': {
    id: 'gungoren',
    name: 'Güngören Station',
    cleanName: 'Güngören',
    turkishName: 'Güngören İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Zeytinburnu – Bağcılar Tramvay Hattı',
    district: 'Güngören (Merkez / Güven Mahallesi)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '14 Eylül 2006',
    openedDateFormatted: '09-2006',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%BCng%C3%B6ren_Tramvay_%C4%B0stasyonu_T1.jpg?width=1000',
    imageCaption: 'Güngören ilçe merkezindeki ana tramvay istasyonu',
    description: 'Güngören ilçe meydanı, belediye hizmet binaları ve yoğun çarşı aksında yer alan merkezi istasyondur.',
    historicalContext: '14 Eylül 2006’da T2 hattının hizmete girmesiyle Güngören ilçesi ilk raylı sistemine kavuşmuştur.',
    features: ['Güngören Çarşısı Erişimi', 'Belediye Hizmet Alanı', 'Engelli Erişilebilir'],
    interchanges: []
  },
  'akıncılar': {
    id: 'akincilar',
    name: 'Akıncılar Station',
    cleanName: 'Akıncılar',
    turkishName: 'Akıncılar İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Zeytinburnu – Bağcılar Tramvay Hattı',
    district: 'Güngören (Akıncılar Mahallesi)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '14 Eylül 2006',
    openedDateFormatted: '09-2006',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ak%C4%B1nc%C4%B1lar_Tramvay_%C4%B0stasyonu_T1.jpg?width=1000',
    imageCaption: 'Akıncılar Mahallesi konut ve ticaret alanındaki durak',
    description: 'Abdi İpekçi Caddesi üzerindeki yerleşim bölgelerine, okullara ve pazar alanlarına hizmet sunar.',
    historicalContext: '14 Eylül 2006 tarihinde T2 hattı kapsamında açılmıştır.',
    features: ['Yaya Geçitleri', 'Turnike Alanı', 'Engelli Rampası'],
    interchanges: []
  },
  'soğanlı': {
    id: 'soganli',
    name: 'Soğanlı Station',
    cleanName: 'Soğanlı',
    turkishName: 'Soğanlı İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Zeytinburnu – Bağcılar Tramvay Hattı',
    district: 'Güngören / Bahçelievler sınırı (Soğanlı)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '14 Eylül 2006',
    openedDateFormatted: '09-2006',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/So%C4%9Fanl%C4%B1_Tramvay_%C4%B0stasyonu_T1.jpg?width=1000',
    imageCaption: 'Soğanlı tramvay durağı ve çevre yerleşim dokusu',
    description: 'Güngören ile Bahçelievler Soğanlı mahallesi sınırında yer alan, yoğun konut bölgesine hitap eden duraktır.',
    historicalContext: '14 Eylül 2006 tarihinde T2 açılışıyla hizmete girmiştir.',
    features: ['Çift Taraflı Yaya Girişi', 'Engelli Erişimi', 'Turnike Geçişleri'],
    interchanges: []
  },
  'yavuz selim': {
    id: 'yavuz-selim',
    name: 'Yavuz Selim Station',
    cleanName: 'Yavuz Selim',
    turkishName: 'Yavuz Selim İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Zeytinburnu – Bağcılar Tramvay Hattı',
    district: 'Bağcılar (Yavuz Selim Mahallesi)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '14 Eylül 2006',
    openedDateFormatted: '09-2006',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yavuz_Selim_Tramvay_%C4%B0stasyonu_T1.jpg?width=1000',
    imageCaption: 'Yavuz Selim Mahallesi tramvay istasyonu',
    description: 'Bağcılar sınırına giren tramvay hattının Yavuz Selim Mahallesi ve ticaret caddelerine hizmet veren istasyonudur.',
    historicalContext: '14 Eylül 2006 tarihinde açılmıştır.',
    features: ['Engelli Rampaları', 'Güvenlik & Turnikeler', 'İstanbulkart Otomatları'],
    interchanges: []
  },
  'güneştepe': {
    id: 'gunestepe',
    name: 'Güneştepe Station',
    cleanName: 'Güneştepe',
    turkishName: 'Güneştepe İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Zeytinburnu – Bağcılar Tramvay Hattı',
    district: 'Güngören / Bağcılar (Güneştepe)',
    structureType: 'Hemzemin (Yüzeysel)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '14 Eylül 2006',
    openedDateFormatted: '09-2006',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%BCne%C5%9Ftepe_Tramvay_%C4%B0stasyonu_T1.jpg?width=1000',
    imageCaption: 'Güneştepe Mahallesi tramvay durağı',
    description: 'Bağcılar ve Güngören tepeleri arasındaki Güneştepe yerleşim alanına hızlı ve güvenli toplu taşıma sunan istasyondur.',
    historicalContext: '14 Eylül 2006 tarihinde açılmıştır.',
    features: ['Mahalle İçi Yaya Bağlantıları', 'Geniş Peronlar', 'Engelli Erişimi'],
    interchanges: []
  },
  'bağcılar': {
    id: 'bagcilar-t2',
    name: 'Bağcılar Station',
    cleanName: 'Bağcılar',
    turkishName: 'Bağcılar Tramvay İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Zeytinburnu – Bağcılar Tramvay Hattı',
    district: 'Bağcılar (Bağcılar Meydanı / İstanbul Caddesi)',
    structureType: 'Hemzemin (Terminal / Makaslı Son İstasyon)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '14 Eylül 2006',
    openedDateFormatted: '09-2006',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ba%C4%9Fc%C4%B1lar_Tramvay_%C4%B0stasyonu_T1.jpg?width=1000',
    imageCaption: 'Bağcılar Meydanı girişindeki T2 Tramvay Terminali',
    description: 'Hattın kuzeybatı son durağıdır. Bağcılar Meydanı’na, çarşıya ve daha sonra açılan M1B Kirazlı–Yenikapı metrosuna yürüme mesafesinde entegredir.',
    historicalContext: '14 Eylül 2006’da T2 hattının kuzey terminali olarak açılmıştır. 2011’de T1 ile birleştirilerek Kabataş–Bağcılar hattının son durağı haline gelmiştir.',
    features: ['Bağcılar Meydanı Çıkışı', 'M1B Bağcılar Meydan Metrosu Aktarması', 'Yoğun Çarşı Aksı', 'Çift Hatlı Makas Alanı'],
    interchanges: [
      {
        lineCode: 'M1B',
        lineName: 'M1B Yenikapı – Kirazlı Metro Hattı',
        type: 'metro',
        color: '#EE2229',
        stationName: 'Bağcılar Meydan Metro İstasyonu',
        transferType: 'Cadde / Meydan Yürüyüşü',
        distance: '300m',
        walkingTime: '~4 dk yürüme',
        description: 'Bağcılar Meydanı üzerinden M1B Kirazlı–Yenikapı metro istasyonuna yaya bağlantısı.'
      }
    ]
  },
  'taksim': {
    id: 'taksim-t2',
    name: 'Taksim Station (T2)',
    cleanName: 'Taksim',
    turkishName: 'Taksim Nostaljik Tramvay İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Taksim – Tünel Nostaljik Tramvay Hattı',
    district: 'Beyoğlu (Taksim Meydanı / Gezi Parkı)',
    structureType: 'Hemzemin (Meydan Ring Hattı)',
    platforms: 'Meydan Çevre Peronu',
    openedDate: '29 Aralık 1990',
    openedDateFormatted: '12-1990',
    imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Taksim Meydanı Cumhuriyet Anıtı etrafındaki tarihi T2 nostaljik tramvay durağı',
    description: 'İstiklal Caddesi’nin kuzey başlangıç noktası olan Taksim Meydanı’ndaki başlangıç terminalidir. Cumhuriyet Anıtı etrafından dönerek İstiklal Caddesi’ne giriş yapar. M2 Yenikapı–Hacıosman metrosu ve F1 Taksim–Kabataş fünikülerine doğrudan aktarma sunar.',
    historicalContext: '29 Aralık 1990’da İstiklal Caddesi’nin yayalaştırılması projesi kapsamında tarihi tramvayın yeniden kente kazandırılmasıyla açılmıştır.',
    features: ['Tarihi Kırmızı Nostaljik Tramvay', 'Taksim Meydanı & Gezi Parkı', 'M2 ve F1 Hatlarına Yeraltı Aktarması', 'Cumhuriyet Anıtı'],
    interchanges: [
      {
        lineCode: 'M2',
        lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
        type: 'metro',
        color: '#059A4D',
        stationName: 'Taksim M2 Metro İstasyonu',
        transferType: 'Meydan / Yeraltı Girişi',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'M2 Yenikapı–Hacıosman metro hattına meydan altı holünden doğrudan geçiş.'
      },
      {
        lineCode: 'F1',
        lineName: 'F1 Taksim – Kabataş Füniküler Hattı',
        type: 'funicular',
        color: '#7A745A',
        stationName: 'Taksim F1 Füniküler İstasyonu',
        transferType: 'Meydan / Yeraltı Girişi',
        distance: '60m',
        walkingTime: '~1 dk yürüme',
        description: 'Kabataş sahiline ve Boğaz vapur iskelelerine inen F1 fünikülerine aktarma.'
      }
    ]
  },
  'hüseyin ağa camii': {
    id: 'huseyin-aga-camii-t2',
    name: 'Hüseyin Ağa Camii Station',
    cleanName: 'Hüseyin Ağa Camii',
    turkishName: 'Hüseyin Ağa Camii İstasyonu (Ağa Camii)',
    lineCode: 'T2',
    lineName: 'T2 Taksim – Tünel Nostaljik Tramvay Hattı',
    district: 'Beyoğlu (İstiklal Caddesi / Ağa Camii)',
    structureType: 'Hemzemin Cadde Durağı',
    platforms: 'Cadde Seviyesi Peron',
    openedDate: '29 Aralık 1990',
    openedDateFormatted: '12-1990',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'İstiklal Caddesi tarihi Ağa Camii önündeki nostaljik tramvay durağı',
    description: '1596 yılında inşa edilen tarihi Hüseyin Ağa Camii ve İstiklal Caddesi alışveriş koridoru önündeki duraktır.',
    historicalContext: '29 Aralık 1990 tarihinde Taksim – Tünel nostaljik tramvay hattının açılışıyla hizmete girmiştir.',
    features: ['Tarihi Hüseyin Ağa Camii', 'İstiklal Caddesi Yayalaştırılmış Yolu', 'Cadde Seviyesi Biniş'],
    interchanges: []
  },
  'ağa camii': {
    id: 'aga-camii-alias-t2',
    name: 'Hüseyin Ağa Camii Station',
    cleanName: 'Hüseyin Ağa Camii',
    turkishName: 'Hüseyin Ağa Camii İstasyonu (Ağa Camii)',
    lineCode: 'T2',
    lineName: 'T2 Taksim – Tünel Nostaljik Tramvay Hattı',
    district: 'Beyoğlu',
    structureType: 'Hemzemin',
    platforms: 'Cadde Seviyesi',
    openedDate: '29 Aralık 1990',
    openedDateFormatted: '12-1990',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Ağa Camii Durağı',
    description: 'Hüseyin Ağa Camii durağı.',
    historicalContext: '29 Aralık 1990 tarihinde açılmıştır.',
    features: ['Ağa Camii'],
    interchanges: []
  },
  'galatasaray lisesi': {
    id: 'galatasaray-lisesi-t2',
    name: 'Galatasaray Lisesi Station',
    cleanName: 'Galatasaray Lisesi',
    turkishName: 'Galatasaray Lisesi Tramvay İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Taksim – Tünel Nostaljik Tramvay Hattı',
    district: 'Beyoğlu (Galatasaray Meydanı / Yeniçarşı Caddesi)',
    structureType: 'Hemzemin Cadde İstasyonu',
    platforms: 'Karşılıklı İkili Makas Peronu (Tramvay Karşılaşma Noktası)',
    openedDate: '29 Aralık 1990',
    openedDateFormatted: '12-1990',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Galatasaray Meydanı ve tarihi Galatasaray Lisesi kapısı önündeki tramvay makas durağı',
    description: 'İstiklal Caddesi’nin tam kalbinde, Galatasaray Meydanı’nda yer alan istasyondur. Tek hatlı sistemde karşılıklı sefer yapan nostaljik tramvayların buluşup geçtiği makas alanıdır.',
    historicalContext: '29 Aralık 1990 tarihinde hizmete girmiştir. Tarihi Galatasaray Lisesi, Çiçek Pasajı ve Balık Pazarı’na doğrudan erişim sağlar.',
    features: ['Tarihi Tramvay Karşılaşma Makası', 'Tarihi Galatasaray Lisesi', 'Çiçek Pasajı ve Balık Pazarı Bağlantısı', 'Yapı Kredi Kültür Sanat'],
    interchanges: []
  },
  'galatasaray': {
    id: 'galatasaray-alias-t2',
    name: 'Galatasaray Lisesi Station',
    cleanName: 'Galatasaray Lisesi',
    turkishName: 'Galatasaray Lisesi Tramvay İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Taksim – Tünel Nostaljik Tramvay Hattı',
    district: 'Beyoğlu',
    structureType: 'Hemzemin',
    platforms: 'Makas Peronu',
    openedDate: '29 Aralık 1990',
    openedDateFormatted: '12-1990',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Galatasaray Lisesi Durağı',
    description: 'Galatasaray Lisesi tramvay durağı.',
    historicalContext: '29 Aralık 1990 tarihinde açılmıştır.',
    features: ['Galatasaray Meydanı'],
    interchanges: []
  },
  'odakule': {
    id: 'odakule-t2',
    name: 'Odakule Station',
    cleanName: 'Odakule',
    turkishName: 'Odakule Tramvay İstasyonu',
    lineCode: 'T2',
    lineName: 'T2 Taksim – Tünel Nostaljik Tramvay Hattı',
    district: 'Beyoğlu (Meşrutiyet Caddesi / Asmalımescit)',
    structureType: 'Hemzemin Cadde Durağı',
    platforms: 'Cadde Seviyesi Peron',
    openedDate: '29 Aralık 1990',
    openedDateFormatted: '12-1990',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Odakule Pasajı önünde İstiklal Caddesi üzerinde yer alan tramvay durağı',
    description: 'İstanbul Sanayi Odası Odakule binası, Meşrutiyet Caddesi geçit pasajı, Pera Müzesi ve Asmalımescit bölgesine hizmet verir.',
    historicalContext: '29 Aralık 1990 tarihinde açılmıştır.',
    features: ['Odakule Geçidi ve Sanat Meydanı', 'Pera Müzesi Erişimi', 'Asmalımescit ve Tepebaşı Bağlantısı'],
    interchanges: []
  },
  'tünel': {
    id: 'tunel-t2',
    name: 'Tünel Station (T2)',
    cleanName: 'Tünel',
    turkishName: 'Tünel Nostaljik Tramvay İstasyonu (T2)',
    lineCode: 'T2',
    lineName: 'T2 Taksim – Tünel Nostaljik Tramvay Hattı',
    district: 'Beyoğlu (Tünel Meydanı / Şişhane / Galata)',
    structureType: 'Hemzemin Meydan İstasyonu (Güney Terminali)',
    platforms: '1 Yan Peron (1 Hat)',
    openedDate: '29 Aralık 1990',
    openedDateFormatted: '12-1990',
    imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Tünel Meydanı tarihi F2 Tünel binası önündeki T2 güney başlangıç durağı',
    description: 'İstiklal Caddesi’nin güney ucu olan Tünel Meydanı’ndaki terminaldir. Dünyanın en eski ikinci metrosu olan F2 Tarihi Tünel füniküleri ile Karaköy’e ve M2 Şişhane metro istasyonuna doğrudan yürüme mesafesinde aktarma imkanı sağlar.',
    historicalContext: '29 Aralık 1990 tarihinde hizmete girmiştir. Galata Kulesi, Asmalımescit ve tarihi Karaköy aksının ana giriş kapısıdır.',
    features: ['F2 Tarihi Tünel Füniküler Aktarması', 'M2 Şişhane Metro İstasyonu Bağlantısı', 'Galata Kulesi Yürüyüş Güzergahı', 'Tarihi Tünel Pasajı'],
    interchanges: [
      {
        lineCode: 'F2',
        lineName: 'F2 Tarihi Tünel (Karaköy – Beyoğlu)',
        type: 'funicular',
        color: '#7A745A',
        stationName: 'Beyoğlu Tarihi Tünel İstasyonu',
        transferType: 'Doğrudan Meydan / Gar Binası Çıkışı',
        distance: '20m',
        walkingTime: '~1 dk yürüme',
        description: '1875 yapımı tarihi yer altı füniküleri F2 Tünel ile Karaköy’e doğrudan iniş.'
      },
      {
        lineCode: 'M2',
        lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
        type: 'metro',
        color: '#059A4D',
        stationName: 'Şişhane M2 İstasyonu',
        transferType: 'Zemin / Yeraltı Girişi',
        distance: '100m',
        walkingTime: '~1.5 dk yürüme',
        description: 'M2 Şişhane istasyonu İstiklal Caddesi çıkışına doğrudan erişim.'
      }
    ]
  },
  'tunel': {
    id: 'tunel-ascii-alias-t2',
    name: 'Tünel Station (T2)',
    cleanName: 'Tünel',
    turkishName: 'Tünel Nostaljik Tramvay İstasyonu (T2)',
    lineCode: 'T2',
    lineName: 'T2 Taksim – Tünel Nostaljik Tramvay Hattı',
    district: 'Beyoğlu',
    structureType: 'Hemzemin',
    platforms: '1 Yan Peron',
    openedDate: '29 Aralık 1990',
    openedDateFormatted: '12-1990',
    imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Tünel İstasyonu',
    description: 'Tünel T2 durağı.',
    historicalContext: '29 Aralık 1990 tarihinde açılmıştır.',
    features: ['F2 Füniküler Aktarması'],
    interchanges: []
  }
};

export function getT2StationDetail(stationName: string): StationDetail | null {
  if (!stationName) return null;
  const normalized = stationName
    .toLowerCase()
    .replace(/\s+station$/i, '')
    .replace(/\s+istasyonu$/i, '')
    .replace(/\s*\([^\)]*\)/g, '')
    .replace(/[–—]/g, '-')
    .trim();

  for (const [key, detail] of Object.entries(T2_STATIONS_DATA)) {
    if (normalized === key || normalized.includes(key) || key.includes(normalized)) {
      return detail;
    }
  }

  if (normalized.includes('taksim')) return T2_STATIONS_DATA['taksim'];
  if (normalized.includes('aga') || normalized.includes('ağa')) return T2_STATIONS_DATA['hüseyin ağa camii'];
  if (normalized.includes('galatasaray')) return T2_STATIONS_DATA['galatasaray lisesi'];
  if (normalized.includes('odakule')) return T2_STATIONS_DATA['odakule'];
  if (normalized.includes('tunel') || normalized.includes('tünel')) return T2_STATIONS_DATA['tünel'];

  return null;
}
