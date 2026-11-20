import { StationDetail } from './m1StationsData';

export const T5_STATIONS_DATA: Record<string, StationDetail> = {
  'cibali': {
    id: 'cibali-t5',
    name: 'Cibali Tramvay İstasyonu',
    cleanName: 'Cibali',
    turkishName: 'Cibali Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Fatih (Cibali / Kadir Has Üniversitesi)',
    structureType: 'Hemzemin (Haliç Sahili / Katenersiz Alttan Besleme / APS)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '1 Ocak 2021',
    openedDateFormatted: '01-2021',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Cibali T5 İstasyonu ve Kadir Has Üniversitesi Haliç kıyısı',
    description: 'T5 hattının 2021–2023 yılları arasındaki güney başlangıç terminalidir. Kadir Has Üniversitesi merkez kampüsü, Atatürk Köprüsü ve Tarihi Cibali Kapısı yanında Haliç sahil şeridinde yer alır.',
    historicalContext: '1 Ocak 2021 tarihinde T5 hattının ilk etabı olarak Cibali–Alibeyköy Cep Otogarı arasında hizmete açılmıştır.',
    features: ['Kadir Has Üniversitesi Karşısı', 'Katenersiz Alttan Beslemeli (APS) Çevre Dostu Teknoloji', 'Haliç Sahil Parkı ve Yürüyüş Yolu', 'Engelli Rampaları'],
    interchanges: []
  },
  'fener': {
    id: 'fener-t5',
    name: 'Fener Tramvay İstasyonu',
    cleanName: 'Fener',
    turkishName: 'Fener Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Fatih (Yavuz Sultan Selim / Fener Sahili)',
    structureType: 'Hemzemin (Haliç Sahili)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '1 Ocak 2021',
    openedDateFormatted: '01-2021',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Fener T5 İstasyonu ve Fener Rum Patrikhanesi sahil hattı',
    description: 'Tarihi Fener semtinde, Fener Rum Ortodoks Patrikhanesi ve Fener İskelesi karşısında yer alır. UNESCO Dünya Mirası Balat-Fener koruma bölgesinin ana erişim kapısıdır.',
    historicalContext: '1 Ocak 2021 tarihinde açılmıştır.',
    features: ['Fener Rum Ortodoks Patrikhanesi Çıkışı', 'Fener Vapur İskelesi Karşısı', 'Tarihi Haliç Evleri Erişimi'],
    interchanges: [
      {
        lineCode: 'Vapur',
        lineName: 'Şehir Hatları Haliç Hattı Vapurları',
        type: 'rail',
        color: '#7B72B2',
        stationName: 'Fener İskelesi',
        transferType: 'Cadde / Sahil Çıkışı',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'Üsküdar, Karaköy ve Eyüpsultan yönüne Haliç vapur seferleri.'
      }
    ]
  },
  'balat': {
    id: 'balat-t5',
    name: 'Balat Tramvay İstasyonu',
    cleanName: 'Balat',
    turkishName: 'Balat Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Fatih (Balat / Haliç Caddesi)',
    structureType: 'Hemzemin (Haliç Sahil Parkı)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '1 Ocak 2021',
    openedDateFormatted: '01-2021',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Balat T5 İstasyonu ve tarihi rengarenk Balat sokakları',
    description: 'Renkli tarihi evleri, kafeleri ve tarihi sinagog ve kiliseleriyle ünlü Balat semtinin sahilinde yer alır. Yerli ve yabancı turistlerin en yoğun kullandığı duraklardan biridir.',
    historicalContext: '1 Ocak 2021 tarihinde hizmete girmiştir.',
    features: ['Balat Çarşısı ve Merdivenli Yokuş Erişimi', 'Balat İskelesi Bağlantısı', 'Haliç Sahil Şeridi'],
    interchanges: []
  },
  'ayvansaray': {
    id: 'ayvansaray-t5',
    name: 'Ayvansaray Tramvay İstasyonu',
    cleanName: 'Ayvansaray',
    turkishName: 'Ayvansaray Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Fatih (Ayvansaray / Tarihi Kara Surları)',
    structureType: 'Hemzemin (Haliç Kıyısı / Haliç Köprüsü Altı)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '1 Ocak 2021',
    openedDateFormatted: '01-2021',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Haliç Köprüsü altında Ayvansaray T5 İstasyonu',
    description: 'Haliç Köprüsü’nün tarihi suriçi ayağında, Ayvansaray İskelesi ve Tarihi İstanbul Kara Surları’nın Haliç’le buluştuğu noktada yer alır.',
    historicalContext: '1 Ocak 2021 tarihinde açılmıştır.',
    features: ['Tarihi İstanbul Surları Başlangıcı', 'Haliç Köprüsü ve Metrobüs Yürüyüş Bağlantısı', 'Ayvansaray İskelesi'],
    interchanges: [
      {
        lineCode: 'Metrobüs',
        lineName: 'Metrobüs (Söğütlüçeşme – Beylikdüzü)',
        type: 'rail',
        color: '#7B72B2',
        stationName: 'Ayvansaray - Eyüpsultan Metrobüs Durağı',
        transferType: 'Yaya Rampası ve Merdivenler',
        distance: '250m',
        walkingTime: '~4-5 dk yürüme',
        description: 'Haliç Köprüsü üzerindeki Ayvansaray Metrobüs durağına rampa bağlantısı.'
      }
    ]
  },
  'feshane': {
    id: 'feshane-t5',
    name: 'Feshane Tramvay İstasyonu',
    cleanName: 'Feshane',
    turkishName: 'Feshane Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Eyüpsultan (Nişanca / Artİstanbul Feshane)',
    structureType: 'Hemzemin (Tarihi Feshane Fabrikası Önü)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '1 Ocak 2021',
    openedDateFormatted: '01-2021',
    imageUrl: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Artİstanbul Feshane önündeki T5 tramvay durağı',
    description: 'Osmanlı’nın ilk sanayi tesislerinden restore edilen Artİstanbul Feshane Kültür ve Sanat Merkezi önünde yer alır. Geniş etkinlik ve bahçe alanlarına doğrudan erişim sunar.',
    historicalContext: '1 Ocak 2021 tarihinde hizmete girmiştir.',
    features: ['Artİstanbul Feshane Kültür Merkezi Çıkışı', 'Haliç Kıyısı Etkinlik Alanı', 'Engelli Erişimi'],
    interchanges: []
  },
  'eyüpsultan teleferik': {
    id: 'eyupsultan-teleferik-t5',
    name: 'Eyüpsultan Teleferik Tramvay İstasyonu',
    cleanName: 'Eyüpsultan Teleferik',
    turkishName: 'Eyüpsultan Teleferik Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Eyüpsultan (Merkez / Eyüp Sultan Camii / Teleferik)',
    structureType: 'Hemzemin (Meydan / Tarihi Merkez)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '1 Ocak 2021',
    openedDateFormatted: '01-2021',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Eyüp Sultan Meydanı ve TF2 Pierre Loti Teleferiği karşısındaki T5 durağı',
    description: 'Eyüp Sultan Camii ve Külliyesi, Tarihi Eyüpsultan Çarşısı ve TF2 Eyüp-Piyer Loti teleferik istasyonunun hemen yanında yer alan hattın en yoğun turistik merkezidir.',
    historicalContext: '1 Ocak 2021 tarihinde açılmıştır.',
    features: ['TF2 Piyer Loti Teleferik İstasyonuna Doğrudan Aktarma', 'Eyüp Sultan Camii ve Meydanı Çıkışı', 'Eyüpsultan İskelesi Karşısı'],
    interchanges: [
      {
        lineCode: 'TF2',
        lineName: 'TF2 Eyüp – Piyer Loti Teleferik Hattı',
        type: 'funicular',
        color: '#7B72B2',
        stationName: 'Eyüp Teleferik İstasyonu',
        transferType: 'Meydan Yürüyüşü',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'Pierre Loti Tepesi’ne panoramik teleferik aktarması.'
      }
    ]
  },
  'eyüpsultan devlet hastanesi': {
    id: 'eyupsultan-devlet-hastanesi-t5',
    name: 'Eyüpsultan Devlet Hastanesi Tramvay İstasyonu',
    cleanName: 'Eyüpsultan Devlet Hastanesi',
    turkishName: 'Eyüpsultan Devlet Hastanesi Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Eyüpsultan (İslambey / Silahtarağa Caddesi)',
    structureType: 'Hemzemin',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '1 Ocak 2021',
    openedDateFormatted: '01-2021',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Eyüpsultan Devlet Hastanesi önündeki T5 durağı',
    description: 'Eyüpsultan Devlet Hastanesi ana binası önünde konumlanmış olup hasta, personel ve ziyaretçilere konforlu engelsiz raylı erişim sağlar.',
    historicalContext: '1 Ocak 2021 tarihinde açılmıştır.',
    features: ['Hastane Doğrudan Yaya Geçişi', 'Engelli Rampaları', 'Silahtarağa Caddesi'],
    interchanges: []
  },
  'silahtarağa mahallesi': {
    id: 'silahtaraga-mahallesi-t5',
    name: 'Silahtarağa Mahallesi Tramvay İstasyonu',
    cleanName: 'Silahtarağa Mahallesi',
    turkishName: 'Silahtarağa Mahallesi Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Eyüpsultan (Silahtarağa / Sakarya Mahallesi)',
    structureType: 'Hemzemin (Haliç Kıyısı)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '1 Ocak 2021',
    openedDateFormatted: '01-2021',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Silahtarağa Mahallesi T5 İstasyonu',
    description: 'Silahtarağa Mahallesi konut yerleşimlerine ve Haliç kıyısındaki sosyal yaşam alanlarına hizmet vermektedir.',
    historicalContext: '1 Ocak 2021’de hizmete girmiştir.',
    features: ['Silahtarağa Parkı Çıkışı', 'Yaya Üstgeçidi Bağlantısı', 'APS'],
    interchanges: []
  },
  'üniversite': {
    id: 'universite-t5',
    name: 'Üniversite Tramvay İstasyonu',
    cleanName: 'Üniversite',
    turkishName: 'Üniversite Tramvay İstasyonu (Bezmiâlem)',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Eyüpsultan (Silahtarağa / Santralİstanbul)',
    structureType: 'Hemzemin (Tarihi Santralİstanbul Karşısı)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '1 Ocak 2021',
    openedDateFormatted: '01-2021',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Santralİstanbul ve Bezmialem Üniversitesi önündeki Üniversite durağı',
    description: 'Bezmiâlem Vakıf Üniversitesi Eyüpsultan Yerleşkesi ve İstanbul Bilgi Üniversitesi santralistanbul Kampüsü karşısında yer alan önemli bir öğrenci ve gençlik durağıdır.',
    historicalContext: '1 Ocak 2021 tarihinde açılmıştır.',
    features: ['Üniversite Kampüslerine Doğrudan Erişim', 'santralistanbul Enerji Müzesi Çıkışı', 'Öğrenci Yoğunluğu'],
    interchanges: []
  },
  'alibeyköy merkez': {
    id: 'alibeykoy-merkez-t5',
    name: 'Alibeyköy Merkez Tramvay İstasyonu',
    cleanName: 'Alibeyköy Merkez',
    turkishName: 'Alibeyköy Merkez Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Eyüpsultan (Alibeyköy Çarşı)',
    structureType: 'Hemzemin (Alibeyköy Caddesi)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '1 Ocak 2021',
    openedDateFormatted: '01-2021',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Alibeyköy Merkez Çarşı içindeki T5 tramvay durağı',
    description: 'Alibeyköy’ün tarihi çarşısı, camisi ve ticaret merkezinin kalbinde yer alır. Bölgedeki esnaf ve mahalle sakinlerinin ana ulaşım noktasıdır.',
    historicalContext: '1 Ocak 2021’de açılmıştır.',
    features: ['Alibeyköy Çarşı Girişi', 'Tarihi Alibeyköy Mısır Meydanı', 'APS'],
    interchanges: []
  },
  'alibeyköy metro': {
    id: 'alibeykoy-metro-t5',
    name: 'Alibeyköy Metro Tramvay İstasyonu',
    cleanName: 'Alibeyköy Metro',
    turkishName: 'Alibeyköy Metro Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Eyüpsultan (Alibeyköy Viyadüğü Altı / Transfer Meydanı)',
    structureType: 'Hemzemin (M7 Metro Viyadüğü Altı Aktarma Meydanı)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '1 Ocak 2021',
    openedDateFormatted: '01-2021',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'M7 Metro Viyadüğü altındaki Alibeyköy Metro Tramvay İstasyonu',
    description: 'M7 Mecidiyeköy–Mahmutbey metro viyadüğünün hemen altında konumlanmıştır. Tramvaydan inip merdiven veya asansörlerle doğrudan M7 Alibeyköy metro istasyonuna aktarma imkanı tanır.',
    historicalContext: '1 Ocak 2021 tarihinde açılan istasyon, T5 tramvayını İstanbul raylı sistem omurgasına bağlayan ana aktarma merkezidir.',
    features: ['M7 Mecidiyeköy–Mahmutbey Metrosuna Doğrudan Aktarma', 'İETT Otobüs Aktarma Alanı', 'Engelli Asansörleri ve Yürüyen Merdivenler'],
    interchanges: [
      {
        lineCode: 'M7',
        lineName: 'M7 Yıldız – Mahmutbey Metro Hattı',
        type: 'metro',
        color: '#F490B3',
        stationName: 'Alibeyköy Metro İstasyonu (M7)',
        transferType: 'Meydan / Viyadük Yürüyüşü',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'Mecidiyeköy, Beşiktaş ve Mahmutbey yönüne sürücüsüz metro aktarması.'
      }
    ]
  },
  'alibeyköy cep otogarı': {
    id: 'alibeykoy-cep-otogari-t5',
    name: 'Alibeyköy Cep Otogarı Tramvay İstasyonu',
    cleanName: 'Alibeyköy Cep Otogarı',
    turkishName: 'Alibeyköy Cep Otogarı Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Eyüpsultan (Alibeyköy Cep Otogarı / TEM Sapağı)',
    structureType: 'Hemzemin (Kuzey Nihai Terminali / Dönüş Makasları)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '1 Ocak 2021',
    openedDateFormatted: '01-2021',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Alibeyköy Şehirlerarası Cep Otogarı önündeki T5 son durağı',
    description: 'T5 hattının kuzey nihai terminalidir. Türkiye’nin dört bir yanına sefer yapan şehirlerarası otobüslerin kalktığı İBB Alibeyköy Cep Otogarı’nın hemen önünde yer alır; otobüs yolcularının şehir içi raylı dağıtımını sağlar.',
    historicalContext: '1 Ocak 2021 tarihinde T5 hattının ilk etabının kuzey terminali olarak hizmete açılmıştır.',
    features: ['İBB Alibeyköy Cep Otogarı Doğrudan Girişi', 'Şehirlerarası Otobüs Aktarması', 'Park Et Devam Et (P+R) Otoparkı', 'Geniş Bilet Holü ve Turnikeler'],
    interchanges: []
  },
  'küçükpazar': {
    id: 'kucukpazar-t5',
    name: 'Küçükpazar Station',
    cleanName: 'Küçükpazar',
    turkishName: 'Küçükpazar Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Fatih (Yavuz Sinan / Küçükpazar Sahili)',
    structureType: 'Hemzemin (Haliç Sahili / Katenersiz Alttan Besleme / APS)',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '30 Ağustos 2023',
    openedDateFormatted: '08-2023',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Küçükpazar T5 İstasyonu ve M2 Haliç Metro Köprüsü bağlantısı',
    description: 'Atatürk (Unkapanı) Köprüsü ile Haliç Metro Köprüsü arasında, Ragıp Gümüşpala Caddesi sahilinde yer alır. M2 Yenikapı–Hacıosman metro hattının Haliç İstasyonu’na yaya üstgeçidi ve aktarma koridoru ile doğrudan bağlantı sağlar.',
    historicalContext: '30 Ağustos 2023 tarihinde Zafer Bayramı’nda Cibali–Eminönü 2. etabı kapsamında hizmete açılmıştır.',
    features: ['M2 Haliç Metro İstasyonuna Doğrudan Yaya Aktarması', 'Atatürk Köprüsü ve Unkapanı Yakınlığı', 'Haliç Sahil Yürüyüş Yolu', 'Engelli Erişilebilir Rampalar'],
    interchanges: [
      {
        lineCode: 'M2',
        lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
        type: 'metro',
        color: '#059A4D',
        stationName: 'Haliç Metro İstasyonu',
        transferType: 'Yaya Üstgeçidi / Aktarma Rampası',
        distance: '150m',
        walkingTime: '~2 dk yürüme',
        description: 'Haliç Metro Köprüsü üzerindeki M2 istasyonuna doğrudan yaya köprüsü ile aktarma.'
      }
    ]
  },
  'kucukpazar': {
    id: 'kucukpazar-t5-alias',
    name: 'Küçükpazar Station',
    cleanName: 'Küçükpazar',
    turkishName: 'Küçükpazar Tramvay İstasyonu',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Fatih (Küçükpazar)',
    structureType: 'Hemzemin',
    platforms: '2 Kenar Peron (2 Hat)',
    openedDate: '30 Ağustos 2023',
    openedDateFormatted: '08-2023',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Küçükpazar T5 İstasyonu',
    description: 'T5 Küçükpazar tramvay durağıdır.',
    historicalContext: '30 Ağustos 2023 tarihinde açılmıştır.',
    features: ['M2 Haliç Aktarması', 'Engelli Rampaları'],
    interchanges: []
  },
  'eminönü': {
    id: 'eminonu-t5',
    name: 'Eminönü Station (T5)',
    cleanName: 'Eminönü',
    turkishName: 'Eminönü Tramvay İstasyonu (T5)',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Fatih (Rüstem Paşa / Eminönü Meydanı)',
    structureType: 'Hemzemin (Güney Başlangıç Terminali / 3 Hat - 2 Ada Peron)',
    platforms: '2 Ada Peron (3 Hat - Katenersiz APS)',
    openedDate: '30 Ağustos 2023',
    openedDateFormatted: '08-2023',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Eminönü T5 Terminali, Galata Köprüsü ve Haliç manzarası',
    description: 'T5 hattının güney başlangıç ve bitiş terminalidir. Tarihi Eminönü Meydanı, Galata Köprüsü girişi ve Mısır Çarşısı yanında yer alır. T1 Kabataş–Bağcılar tramvayı, Şehir Hatları vapur iskeleleri ve İETT otobüs hatlarıyla İstanbul’un en büyük aktarma merkezlerinden birini oluşturur.',
    historicalContext: '30 Ağustos 2023 tarihinde Cibali–Eminönü etabının tamamlanmasıyla hizmete girerek T5 hattını Eminönü ana transfer merkezine kavuşturmuştur.',
    features: ['T1 Kabataş – Bağcılar Tramvayına Doğrudan Yaya Aktarması', 'Eminönü Şehir Hatları Vapur İskeleleri Karşısı', 'Mısır Çarşısı ve Tarihi Yarımada Turistik Erişimi', '3 Hatlı Yüksek Kapasiteli Terminal Peronları'],
    interchanges: [
      {
        lineCode: 'T1',
        lineName: 'T1 Kabataş – Bağcılar Tramvay Hattı',
        type: 'tram',
        color: '#004B86',
        stationName: 'Eminönü Tramvay İstasyonu (T1)',
        transferType: 'Meydan Yaya Geçişi / Altgeçit',
        distance: '60m',
        walkingTime: '~1 dk yürüme',
        description: 'Sultanahmet, Beyazıt, Aksaray veya Karaköy, Kabataş yönlerine T1 tramvay aktarması.'
      },
      {
        lineCode: 'Vapur',
        lineName: 'Şehir Hatları Eminönü Vapur İskeleleri',
        type: 'rail',
        color: '#0284c7',
        stationName: 'Eminönü İskeleleri',
        transferType: 'Sahil Meydanı Çıkışı',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'Kadıköy, Üsküdar ve Boğaz hattı vapur seferlerine doğrudan entegrasyon.'
      }
    ]
  },
  'eminönü (t5)': {
    id: 'eminonu-t5-full-alias',
    name: 'Eminönü Station (T5)',
    cleanName: 'Eminönü',
    turkishName: 'Eminönü Tramvay İstasyonu (T5)',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Fatih (Eminönü Meydanı)',
    structureType: 'Hemzemin Terminal',
    platforms: '2 Ada Peron (3 Hat)',
    openedDate: '30 Ağustos 2023',
    openedDateFormatted: '08-2023',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Eminönü T5 İstasyonu',
    description: 'Eminönü T5 tramvay terminalidir.',
    historicalContext: '30 Ağustos 2023 tarihinde açılmıştır.',
    features: ['T1 ve Vapur Aktarması', 'Mısır Çarşısı Çıkışı'],
    interchanges: []
  },
  'eminonu': {
    id: 'eminonu-t5-alias',
    name: 'Eminönü Station (T5)',
    cleanName: 'Eminönü',
    turkishName: 'Eminönü Tramvay İstasyonu (T5)',
    lineCode: 'T5',
    lineName: 'T5 Eminönü – Alibeyköy Cep Otogarı Tramvay Hattı',
    district: 'Fatih (Eminönü)',
    structureType: 'Hemzemin Terminal',
    platforms: '2 Ada Peron (3 Hat)',
    openedDate: '30 Ağustos 2023',
    openedDateFormatted: '08-2023',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Eminönü T5 İstasyonu',
    description: 'Eminönü T5 tramvay terminalidir.',
    historicalContext: '30 Ağustos 2023 tarihinde açılmıştır.',
    features: ['T1 ve Vapur Aktarması', 'Mısır Çarşısı Çıkışı'],
    interchanges: []
  }
};

export function getT5StationDetail(name: string): StationDetail | null {
  if (!name) return null;
  const clean = name
    .replace(/\s+Tramvay\s+İstasyonu$/i, '')
    .replace(/\s+Station$/i, '')
    .replace(/\s+İstasyonu$/i, '')
    .replace(/\s+Durağı$/i, '')
    .replace(/\s*\([A-Za-z0-9]+\)$/i, '')
    .trim()
    .toLowerCase();

  for (const [key, detail] of Object.entries(T5_STATIONS_DATA)) {
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

  for (const [key, val] of Object.entries(T5_STATIONS_DATA)) {
    const normalizedKey = normalize(key);
    if (
      normalizedClean === normalizedKey ||
      normalizedClean.includes(normalizedKey) ||
      normalizedKey.includes(normalizedClean)
    ) {
      return val;
    }
  }

  if (normalizedClean.includes('kucukpazar') || normalizedClean.includes('küçükpazar')) return T5_STATIONS_DATA['küçükpazar'];
  if (normalizedClean.includes('eminonu') || normalizedClean.includes('eminönü')) return T5_STATIONS_DATA['eminönü'];

  return null;
}
