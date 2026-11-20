import { StationDetail } from './m1StationsData';

export const M2_STATIONS_DATA: Record<string, StationDetail> = {
  'taksim': {
    id: 'taksim-m2',
    name: 'Taksim Station',
    cleanName: 'Taksim',
    turkishName: 'Taksim Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Beyoğlu (Taksim Meydanı / Gümüşsuyu)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '2 Ada Peron (3 Hat - Çapraz Peron)',
    openedDate: '16 Eylül 2000',
    openedDateFormatted: '09-2000',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taksim_metro_station_Istanbul.jpg?width=1000',
    imageCaption: 'Taksim Metro İstasyonu yeraltı peronları ve bilet holü',
    description: 'İstanbul’un kalbi sayılan Taksim Meydanı’nın altında yer alan, Cumhuriyet Anıtı, İstiklal Caddesi ve Gezi Parkı’na açılan devasa yeraltı metro merkezidir.',
    historicalContext: '16 Eylül 2000 tarihinde Taksim–4. Levent etabının güney terminali olarak hizmete açılmıştır. İstanbul’un modern ağır metro döneminin amiral gemisidir.',
    features: ['F1 Füniküler Hattına Doğrudan Yeraltı Tüneli', 'T2 Nostaljik Tramvay Bağlantısı', 'Taksim Gezi Parkı & Meydan Çıkışları', 'Atatürk Kültür Merkezi (AKM) Erişimi'],
    interchanges: [
      {
        lineCode: 'F1',
        lineName: 'F1 Taksim – Kabataş Füniküler Hattı',
        type: 'funicular',
        color: '#7A745A',
        stationName: 'Taksim Füniküler İstasyonu',
        transferType: 'Doğrudan İstasyon İçi Bağlantı',
        distance: '40m (Doğrudan Tünel)',
        walkingTime: 'Anında (İstasyon İçi)',
        description: 'M2 Taksim istasyonu bilet holünden doğrudan yürüyüş koridoruyla Boğaz kıyısındaki Kabataş vapur ve tramvay merkezine inen F1 fünikülerine geçiş.'
      },
      {
        lineCode: 'T2',
        lineName: 'T2 Taksim – Tünel Nostaljik Tramvay Hattı',
        type: 'tram',
        color: '#90ABA0',
        stationName: 'Taksim Tramvay Durağı',
        transferType: 'Cadde / Meydan Çıkışı',
        distance: '30m',
        walkingTime: '~1 dk yürüme',
        description: 'Taksim Meydanı çıkışından İstiklal Caddesi boyunca tarihi Tünel meydanına sefer yapan nostaljik tramvay durağına geçiş.'
      }
    ]
  },
  'osmanbey': {
    id: 'osmanbey',
    name: 'Osmanbey Station',
    cleanName: 'Osmanbey',
    turkishName: 'Osmanbey Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Şişli (Osmanbey / Halaskargazi / Nişantaşı)',
    structureType: 'Yeraltı',
    platforms: 'Ada Peron (2 Hat)',
    openedDate: '16 Eylül 2000',
    openedDateFormatted: '09-2000',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Osmanbey_Metro_%C4%B0stasyonu_M2_2024.jpg?width=1000',
    imageCaption: 'Osmanbey M2 Metro İstasyonu Halaskargazi Caddesi ve Nişantaşı çıkışı',
    description: 'Halaskargazi Caddesi altında konumlanan, Rumeli Caddesi üzerinden Nişantaşı moda ve alışveriş bölgesine açılan yoğun yeraltı istasyonudur.',
    historicalContext: '16 Eylül 2000 tarihinde ilk etapla birlikte açılmıştır. Pangaltı ve Nişantaşı’nın kent içi raylı sistemle buluşmasını sağlamıştır.',
    features: ['Rumeli Caddesi & Nişantaşı Çıkışı', 'Halaskargazi Caddesi Çıkışları', 'Yürüyen Merdivenler ve Asansörler', 'Engelli Erişilebilir'],
    interchanges: []
  },
  'şişli - mecidiyeköy': {
    id: 'sisli-mecidiyekoy',
    name: 'Şişli - Mecidiyeköy Station',
    cleanName: 'Şişli - Mecidiyeköy',
    turkishName: 'Şişli - Mecidiyeköy Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Şişli (Mecidiyeköy / Fulya / 19 Mayıs)',
    structureType: 'Yeraltı',
    platforms: 'Ada Peron (2 Hat)',
    openedDate: '16 Eylül 2000',
    openedDateFormatted: '09-2000',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/%C5%9Ei%C5%9Fli_-_Mecidiyek%C3%B6y_Metro_%C4%B0stasyonu_M2_2024.jpg?width=1000',
    imageCaption: 'Şişli - Mecidiyeköy İstasyonu peron holü ve Cevahir AVM bağlantısı',
    description: 'İstanbul’un en yoğun iş, ticaret ve transfer merkezlerinden Mecidiyeköy Meydanı ile Cevahir AVM altında yer alan mega aktarma düğümüdür.',
    historicalContext: '16 Eylül 2000’de açılmıştır. 2020 yılında M7 Mahmutbey metro hattının Mecidiyeköy etabının açılmasıyla birlikte çift metrolu entegre aktarma kompleksine dönüşmüştür.',
    features: ['M7 Mecidiyeköy Metrosuna Doğrudan Yeraltı Koridoru', 'Cevahir AVM Doğrudan Girişi', 'Büyükdere Caddesi & Meydan Çıkışları', 'Yüksek Yolcu Kapasiteli Bilet Holü'],
    interchanges: [
      {
        lineCode: 'M7',
        lineName: 'M7 Yıldız – Mahmutbey Metro Hattı',
        type: 'metro',
        color: '#F490B3',
        stationName: 'Mecidiyeköy M7 İstasyonu',
        transferType: 'Yeraltı Bağlantı Tüneli',
        distance: '80m',
        walkingTime: '~1.5 dk yürüme',
        description: 'Genişletilmiş yeraltı transfer koridoru üzerinden Kağıthane, Alibeyköy, Karadeniz Mahallesi ve Mahmutbey yönüne giden M7 sürücüsüz metro hattına geçiş.'
      }
    ]
  },
  'gayrettepe': {
    id: 'gayrettepe',
    name: 'Gayrettepe Station',
    cleanName: 'Gayrettepe',
    turkishName: 'Gayrettepe Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Şişli / Beşiktaş Sınırı (Esentepe / Zincirlikuyu)',
    structureType: 'Yeraltı (Çok Katlı Entegre İstasyon)',
    platforms: 'Ada Peron (2 Hat)',
    openedDate: '16 Eylül 2000',
    openedDateFormatted: '09-2000',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gayrettepe_Metro_%C4%B0stasyonu_M2_2024.jpg?width=1000',
    imageCaption: 'Gayrettepe M2 İstasyonu, Zorlu Center ve M11 Havalimanı Metrosu aktarma kompleksi',
    description: 'Büyükdere Caddesi altında, Zincirlikuyu finans vadisi, Zorlu Center ve Çevre Yolu kesişiminde yer alan devasa transfer istasyonudur.',
    historicalContext: '16 Eylül 2000’de açılmıştır. 2024 yılında M11 İstanbul Havalimanı hızlı metro hattının Gayrettepe istasyonunun hizmete girmesiyle kentin en stratejik havalimanı raylı transfer kapısı olmuştur.',
    features: ['M11 İstanbul Havalimanı Metrosuna Doğrudan Bağlantı', 'Zorlu Center Alışveriş Merkezi Tüneli', 'Büyükdere Caddesi Finans Çıkışları', 'Yürüyen Bantlı Transfer Tünelleri'],
    interchanges: [
      {
        lineCode: 'M11',
        lineName: 'M11 Gayrettepe – İstanbul Havalimanı Metro Hattı',
        type: 'metro',
        color: '#A1609B',
        stationName: 'Gayrettepe M11 Yeraltı İstasyonu',
        transferType: 'Yeraltı Bağlantı Tüneli',
        distance: '110m',
        walkingTime: '~2 dk yürüme',
        description: 'Yürüyen bantlı modern yeraltı bağlantı tüneliyle saatte 120 km hıza sahip Türkiye’nin en hızlı metrosu M11 İstanbul Havalimanı hattına geçiş.'
      }
    ]
  },
  'levent': {
    id: 'levent',
    name: 'Levent Station',
    cleanName: 'Levent',
    turkishName: 'Levent Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Beşiktaş / Şişli Sınırı (Levent Finans Merkezi)',
    structureType: 'Yeraltı',
    platforms: 'Ada Peron (2 Hat)',
    openedDate: '16 Eylül 2000',
    openedDateFormatted: '09-2000',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Levent_Metro_%C4%B0stasyonu_M2_2024.jpg?width=1000',
    imageCaption: 'Levent M2 peronları ve Kanyon / Özdilek / MetroCity AVM doğrudan çıkışları',
    description: 'Türkiye finans ve bankacılık sektörünün merkez üssü olan Levent’te, Kanyon, ÖzdilekPark ve MetroCity alışveriş merkezlerine doğrudan yeraltı bağlantıları sunan merkez istasyondur.',
    historicalContext: '16 Eylül 2000’de açılmıştır. 2015 yılında M6 Boğaziçi Üniversitesi/Hisarüstü mini metro hattının Levent ortak peronuna bağlanmasıyla çift hatlı istasyona dönüşmüştür.',
    features: ['M6 Boğaziçi Üniversitesi Metrosu Doğrudan Aktarması', 'Kanyon, Özdilek ve MetroCity AVM Yeraltı Tünelleri', 'İş Kuleleri & Finans Merkezleri Çıkışları', 'Geniş Bilet Holü'],
    interchanges: [
      {
        lineCode: 'M6',
        lineName: 'M6 Levent – Boğaziçi Üniversitesi/Hisarüstü Metro Hattı',
        type: 'metro',
        color: '#C9AA79',
        stationName: 'Levent M6 İstasyonu',
        transferType: 'Doğrudan İstasyon İçi Bağlantı',
        distance: '30m (Doğrudan Turnike Holü)',
        walkingTime: 'Anında (Aynı İstasyon)',
        description: 'İstasyon içinden ayrılmadan ortak turnike holünden Boğaziçi Üniversitesi, Nispetiye ve Etiler yönüne giden M6 metro hattına doğrudan geçiş.'
      }
    ]
  },
  '4. levent': {
    id: '4-levent',
    name: '4. Levent Station',
    cleanName: '4. Levent',
    turkishName: '4. Levent Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Kağıthane / Şişli Sınırı (4. Levent / Emniyet Evleri)',
    structureType: 'Yeraltı',
    platforms: 'Ada Peron (2 Hat)',
    openedDate: '31 Ekim 2000',
    openedDateFormatted: '10-2000',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/4._Levent_Metro_%C4%B0stasyonu_M2_2024.jpg?width=1000',
    imageCaption: '4. Levent Metro İstasyonu peron holü ve Sapphire AVM çıkışı',
    description: 'İstanbul Sapphire kulesi, Emniyet Evleri ve Çeliktepe mahallelerine hizmet veren, hattın 2000–2009 yılları arasındaki kuzey terminalidir.',
    historicalContext: 'M2 hattı Taksim–Levent arası 16 Eylül 2000’de açılmış, 4. Levent istasyonu ise test sürüşlerinin ve peron donatılarının tamamlanmasıyla 31 Ekim 2000 (10-2000) tarihinde işletmeye alınmıştır. 2009 yılında hat Atatürk Oto Sanayi’ye uzatılana kadar 9 yıl boyunca hattın son durağı olmuştur.',
    features: ['İstanbul Sapphire AVM Doğrudan Bağlantısı', 'Emniyet Evleri ve Çeliktepe Çıkışları', 'Otobüs Peronları Entegrasyonu', 'Geniş Dönüş Makasları'],
    interchanges: []
  },
  'şişhane': {
    id: 'sishane',
    name: 'Şişhane Station',
    cleanName: 'Şişhane',
    turkishName: 'Şişhane Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Beyoğlu (Şişhane Meydanı / İstiklal Caddesi / Tünel)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '30 Ocak 2009',
    openedDateFormatted: '01-2009',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/%C5%9Ei%C5%9Fhane_Metro_%C4%B0stasyonu_M2.jpg?width=1000',
    imageCaption: 'Şişhane Metro İstasyonu Tünel ve İstiklal Caddesi çıkışı',
    description: 'Tarihi Beyoğlu bölgesinde İstiklal Caddesi’nin güney ucu, Tünel Meydanı, Galata ve Kasımpaşa’ya açılan çok katlı derin metro istasyonudur.',
    historicalContext: '30 Ocak 2009 tarihinde Taksim–Şişhane güney uzatmasıyla hizmete girmiştir. 2014 yılında Haliç Metro Köprüsü ve Yenikapı bağlantısı açılana kadar 5 yıl boyunca M2 hattının güney terminali olarak hizmet vermiştir.',
    features: ['F2 Tarihi Tünel Füniküleri Aktarması', 'İstiklal Caddesi & Galata Kulesi Çıkışları', 'Kasımpaşa Asansörlü Çıkışı', 'Derin Delme Tünel Mimarisi'],
    interchanges: [
      {
        lineCode: 'F2',
        lineName: 'F2 Karaköy – Beyoğlu Tarihi Tünel Hattı',
        type: 'funicular',
        color: '#7A745A',
        stationName: 'Tünel İstasyonu',
        transferType: 'Cadde / Meydan Çıkışı',
        distance: '150m',
        walkingTime: '~2 dk yürüme',
        description: 'Tünel çıkışından tarihi fünikülerle Karaköy Meydanı ve vapur iskelelerine iniş.'
      },
      {
        lineCode: 'T2',
        lineName: 'T2 Taksim – Tünel Nostaljik Tramvayı',
        type: 'tram',
        color: '#90ABA0',
        stationName: 'Tünel Meydanı Durağı',
        transferType: 'Meydan Çıkışı',
        distance: '100m',
        walkingTime: '~1 dk yürüme',
        description: 'İstiklal Caddesi boyunca Taksim’e giden nostaljik tramvayın başlangıç durağına geçiş.'
      }
    ]
  },
  'sanayi mahallesi': {
    id: 'sanayi-mahallesi',
    name: 'Sanayi Mahallesi Station',
    cleanName: 'Sanayi Mahallesi',
    turkishName: 'Sanayi Mahallesi Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Sarıyer / Kağıthane (Büyükdere Caddesi)',
    structureType: 'Yeraltı (3 Hatlı Özel Aktarma İstasyonu)',
    platforms: '2 Ada Peron (3 Hat - Seyrantepe Çapraz Peronu)',
    openedDate: '30 Ocak 2009',
    openedDateFormatted: '01-2009',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sanayi_Mahallesi_Metro_%C4%B0stasyonu_M2.jpg?width=1000',
    imageCaption: 'Sanayi Mahallesi Metro İstasyonu ve Seyrantepe aktarma peronları',
    description: 'Büyükdere Caddesi altında yer alan, Oto Sanayi Sitesi ve çevre yerleşimlere hizmet veren, aynı zamanda Seyrantepe şube hattının aktarma merkezidir.',
    historicalContext: '30 Ocak 2009 tarihinde 4. Levent–Atatürk Oto Sanayi kuzey uzatmasıyla hizmete açılmıştır.',
    features: ['Seyrantepe / Rams Park Şube Hattı Aktarması', 'Orta Peron Çapraz Aktarma Düzeni', 'Oto Sanayi Çıkışı'],
    interchanges: []
  },
  'itü - ayazağa': {
    id: 'itu-ayazaga',
    name: 'İTÜ - Ayazağa Station',
    cleanName: 'İTÜ - Ayazağa',
    turkishName: 'İTÜ - Ayazağa Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Sarıyer (Maslak / Ayazağa)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '30 Ocak 2009',
    openedDateFormatted: '01-2009',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/%C4%B0T%C3%9C_-_Ayaza%C4%9Fa_Metro_%C4%B0stasyonu_M2.jpg?width=1000',
    imageCaption: 'İTÜ Ayazağa Kampüsü ve Maslak plazalar çıkışındaki metro istasyonu',
    description: 'İstanbul Teknik Üniversitesi (İTÜ) Ayazağa Kampüsü ve Maslak finans plazaları bölgesinin ana ulaşım omurgasını oluşturan yoğun istasyondur.',
    historicalContext: '30 Ocak 2009’da açılmıştır. On binlerce üniversite öğrencisine ve iş dünyasına hızlı raylı ulaşım sağlamıştır.',
    features: ['İTÜ Ayazağa Kampüsü Doğrudan Yeraltı Girişi', 'Maslak Plazalar Bölgesi Çıkışları', 'Geniş Yeraltı Bilet Holü'],
    interchanges: []
  },
  'atatürk oto sanayi': {
    id: 'ataturk-oto-sanayi',
    name: 'Atatürk Oto Sanayi Station',
    cleanName: 'Atatürk Oto Sanayi',
    turkishName: 'Atatürk Oto Sanayi Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Sarıyer (Maslak / Atatürk Oto Sanayi)',
    structureType: 'Yeraltı (1. Aşama Kuzey Terminali)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '30 Ocak 2009',
    openedDateFormatted: '01-2009',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atat%C3%BCrk_Oto_Sanayi_Metro_%C4%B0stasyonu_M2.jpg?width=1000',
    imageCaption: 'Atatürk Oto Sanayi M2 Metro İstasyonu',
    description: 'Büyükdere Caddesi üzerinde Atatürk Oto Sanayi Sitesi ve Maslak kuzey aksına hizmet sunan, 2009–2010 dönemi kuzey geçici terminal istasyonudur.',
    historicalContext: '30 Ocak 2009 tarihinde açılmıştır. Eylül 2010’da Darüşşafaka ve Mayıs 2011’de Hacıosman açılana kadar M2 hattının kuzey uç noktası olmuştur.',
    features: ['Atatürk Oto Sanayi Sitesi Çıkışı', 'Park Et Devam Et (P+R) Otoparkı', 'Maslak İş Merkezleri Erişimi'],
    interchanges: []
  },
  'darüşşafaka': {
    id: 'darussafaka',
    name: 'Darüşşafaka Station',
    cleanName: 'Darüşşafaka',
    turkishName: 'Darüşşafaka Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Sarıyer (Darüşşafaka / Yeniköy / Tarabya)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '2 Eylül 2010',
    openedDateFormatted: '09-2010',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dar%C3%BC%C5%9F%C5%9Fafaka_Metro_%C4%B0stasyonu_M2.jpg?width=1000',
    imageCaption: 'Darüşşafaka M2 Metro İstasyonu yeraltı peron holü',
    description: 'Büyükdere Caddesi altında yer alan, tarihi Darüşşafaka Eğitim Kurumları, Acıbadem Maslak Hastanesi ve Boğaz köyleri (Yeniköy, Tarabya) bağlantı aksına hizmet veren derin metro istasyonudur.',
    historicalContext: '2 Eylül 2010 tarihinde Atatürk Oto Sanayi–Darüşşafaka uzatmasıyla hizmete açılmıştır. Mayıs 2011’de Hacıosman açılana kadar yaklaşık 9 ay boyunca M2 hattının kuzey terminali olarak hizmet vermiştir.',
    features: ['Darüşşafaka Eğitim Kurumları Çıkışı', 'Acıbadem Maslak Hastanesi Erişimi', 'Yeniköy & Tarabya Otobüs Hatları Entegrasyonu', 'Derin Delme Tünel İstasyonu'],
    interchanges: []
  },
  'seyrantepe': {
    id: 'seyrantepe',
    name: 'Seyrantepe Station',
    cleanName: 'Seyrantepe',
    turkishName: 'Seyrantepe Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı (Seyrantepe Şubesi)',
    district: 'Sarıyer (Huzur / Seyrantepe)',
    structureType: 'Yeraltı (3 Hatlı Özel Stadyum İstasyonu)',
    platforms: '2 Ada Peron (3 Hat - Stadyum Tahliye Peronu)',
    openedDate: '11 Kasım 2010',
    openedDateFormatted: '11-2010',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Seyrantepe_Metro_%C4%B0stasyonu_M2.jpg?width=1000',
    imageCaption: 'Seyrantepe M2 Metro İstasyonu peron holü ve Rams Park stadyum tüneli',
    description: 'Ali Sami Yen Spor Kompleksi (Rams Park), Seyrantepe Hamidiye Etfal Hastanesi ve M2 Metro Ağır Bakım Deposu’na hizmet veren 3 hatlı büyük yeraltı terminalidir.',
    historicalContext: '11 Kasım 2010 tarihinde Sanayi Mahallesi–Seyrantepe mekik metro hattı olarak açılmıştır. Maç ve etkinlik günlerinde on binlerce taraftarı stadyuma doğrudan taşıyan özel tünel ve tahliye peronlarına sahiptir.',
    features: ['Rams Park / Stadyum Doğrudan Yeraltı Tüneli', 'Seyrantepe Hamidiye Etfal Hastanesi Bağlantısı', 'M2 Seyrantepe Metro Depo Sahası', 'F3 Vadistanbul Füniküleri Entegrasyonu'],
    interchanges: [
      {
        lineCode: 'F3',
        lineName: 'F3 Vadistanbul – Seyrantepe Füniküler Hattı',
        type: 'funicular',
        color: '#7A745A',
        stationName: 'Seyrantepe Füniküler İstasyonu',
        transferType: 'Doğrudan İstasyon İçi Bağlantı',
        distance: '40m',
        walkingTime: '~1 dk yürüme',
        description: 'İstasyon içinden Vadistanbul AVM ve Cendere Vadisi’ne inen F3 fünikülerine doğrudan kapalı geçiş.'
      }
    ]
  },
  'hacıosman': {
    id: 'haciosman',
    name: 'Hacıosman Station',
    cleanName: 'Hacıosman',
    turkishName: 'Hacıosman Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Sarıyer (Hacıosman / Tarabya Bayırı / Çayırbaşı)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu / Kuzey Terminali)',
    platforms: '1 Ada Peron (2 Hat - Çift Yönlü Dönüş Makasları)',
    openedDate: 'Temmuz 2011',
    openedDateFormatted: '07-2011',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hac%C4%B1osman_Metro_%C4%B0stasyonu_M2.jpg?width=1000',
    imageCaption: 'M2 hattının kuzey terminali olan Hacıosman İstasyonu ve İETT peronları',
    description: 'M2 Yenikapı–Hacıosman Metro Hattı’nın kuzey başlangıç ve bitiş terminalidir. Sarıyer merkez, Kilyos, Zekeriyaköy, Rumeli Feneri ve Karadeniz sahiline giden hatların ana aktarma merkezidir.',
    historicalContext: 'Temmuz 2011’de (07-2011) hizmete girerek M2 metrosunun kuzeydeki nihai terminali olmuştur. İstasyon ile entegre dev çok katlı otopark ve açık otobüs terminali inşa edilmiştir.',
    features: ['Çok Katlı Park Et Devam Et (P+R) Otoparkı', 'Hacıosman İETT Dev Otobüs Aktarma Peronları', 'Atatürk Kent Ormanı / Hacıosman Korusu Çıkışı', 'Derin Tünel İstasyonu'],
    interchanges: [
      {
        lineCode: 'İETT',
        lineName: 'Hacıosman İETT Otobüs Peronları (Sarıyer, Kilyos, Zekeriyaköy)',
        type: 'rail',
        color: '#059A4D',
        stationName: 'Hacıosman Otobüs Terminali',
        transferType: 'Doğrudan Çıkış / Terminal',
        distance: '30m',
        walkingTime: '~1 dk yürüme',
        description: 'İstasyon çıkışından doğrudan Sarıyer sahil, Kilyos plajları ve Koç Üniversitesi yönü otobüslerine aktarma.'
      }
    ]
  },
  'haliç': {
    id: 'halic-m2',
    name: 'Haliç Station',
    cleanName: 'Haliç',
    turkishName: 'Haliç Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Fatih / Beyoğlu Sınırı (Haliç Metro Geçiş Köprüsü)',
    structureType: 'Köprü Üstü (Haliç Metro Geçiş Köprüsü Üzerinde Açık İstasyon)',
    platforms: '2 Kenar Peron (2 Hat - Boğaz ve Tarihi Yarımada Manzaralı)',
    openedDate: '15 Şubat 2014',
    openedDateFormatted: '02-2014',
    imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Haliç Metro Geçiş Köprüsü üzerinde yer alan Haliç İstasyonu ve Tarihi Yarımada silüeti',
    description: 'Haliç üzerine inşa edilen 936 metre uzunluğundaki Haliç Metro Geçiş Köprüsü’nün üzerinde yer alan dünyadaki nadir köprü-istasyonlardan biridir. Süleymaniye Camii, Galata Kulesi ve Haliç manzarasına hakimdir.',
    historicalContext: '15 Şubat 2014 tarihinde Şişhane–Yenikapı uzatmasıyla hizmete açılmıştır. Beyoğlu ile Tarihi Yarımada’yı birbirine bağlayan köprü, iki kıyıdaki yürüyüş yolları ve T5 tramvayına yaya erişimi sağlar.',
    features: ['Haliç Köprüsü Üzerinde Panoramik Peron', 'Tarihi Yarımada ve Galata Kulesi Manzarası', 'Köprü Yaya Yürüyüş Yolu Çıkışları', 'Azapkapı ve Küçükpazar Kıyı Bağlantısı'],
    interchanges: []
  },
  'yenikapı': {
    id: 'yenikapi-m2',
    name: 'Yenikapı Station (M2)',
    cleanName: 'Yenikapı',
    turkishName: 'Yenikapı Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Fatih (Yenikapı / Aksaray Sahil)',
    structureType: 'Yeraltı (Mega Entegre Aktarma Merkezi)',
    platforms: '2 Ada Peron (3 Hat - Çift Dönüş Makasları)',
    openedDate: '15 Şubat 2014',
    openedDateFormatted: '02-2014',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1000&auto=format&fit=crop&q=80',
    imageCaption: 'Yenikapı Transfer Merkezi dev yeraltı aktarma salonu ve M2 peronları',
    description: 'İstanbul’un en büyük toplu taşıma transfer merkezi olan Yenikapı’da yer alan M2 hattının güney başlangıç ve bitiş terminalidir. M1A/M1B hatları ve İDO feribot iskelesiyle entegredir.',
    historicalContext: '15 Şubat 2014 tarihinde Haliç Metro Köprüsü ile birlikte hizmete girmiştir. Yapımı sırasında Theodosius Limanı ve 8500 yıllık neolitik arkeolojik buluntular ortaya çıkarılmıştır.',
    features: ['M1A ve M1B Hatlarına Doğrudan Yeraltı Koridoru', 'Theodosius Limanı Arkeolojik Sergi Konsepti', 'İDO Yenikapı Hızlı Feribot İskelesi Entegrasyonu', 'Engelli Erişilebilir Asansörler'],
    interchanges: [
      {
        lineCode: 'M1',
        lineName: 'M1A / M1B Yenikapı – Atatürk Havalimanı / Kirazlı Metro Hattı',
        type: 'metro',
        color: '#EE2229',
        stationName: 'Yenikapı M1 Peronları',
        transferType: 'Doğrudan İstasyon İçi Bağlantı',
        distance: '50m',
        walkingTime: '~1 dk yürüme',
        description: 'Aynı yeraltı transfer kompleksinde M1A (Havalimanı) ve M1B (Otogar-Kirazlı) hatlarına doğrudan aktarma.'
      }
    ]
  },
  'vezneciler': {
    id: 'vezneciler-m2',
    name: 'Vezneciler - İstanbul Üniversitesi Station',
    cleanName: 'Vezneciler',
    turkishName: 'Vezneciler - İstanbul Üniversitesi Metro İstasyonu',
    lineCode: 'M2',
    lineName: 'M2 Yenikapı – Hacıosman Metro Hattı',
    district: 'Fatih (Kemalpaşa / Şehzadebaşı / Beyazıt)',
    structureType: 'Yeraltı (Derin Tünel İstasyonu)',
    platforms: '1 Ada Peron (2 Hat)',
    openedDate: '16 Mart 2014',
    openedDateFormatted: '03-2014',
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vezneciler_Metro_%C4%B0stasyonu_M2_2024.jpg?width=1000',
    imageCaption: 'Vezneciler Metro İstasyonu Şehzadebaşı girişi ve İstanbul Üniversitesi bağlantısı',
    description: 'Tarihi Yarımada’nın kalbinde yer alan istasyon, İstanbul Üniversitesi Beyazıt Yerleşkesi, Şehzadebaşı Camii ve Beyazıt Meydanı’na hizmet veren derin yeraltı metro durağıdır.',
    historicalContext: 'Şişhane–Yenikapı ray hattı ve Haliç Köprüsü Şubat 2014’te açılmış, aradaki yeraltı Vezneciler istasyonu ise ince işçilik ve asansör montajlarının tamamlanmasıyla 16 Mart 2014 (03-2014) tarihinde yolcu kullanımına açılmıştır.',
    features: ['İstanbul Üniversitesi Beyazıt Yerleşkesi Doğrudan Çıkışı', 'Şehzadebaşı Camii & 16 Mart Şehitleri Caddesi Çıkışları', 'T1 Laleli Tramvayına Yürüyüş Aktarması', 'Yüksek Kapasiteli Derin İstasyon Asansörleri'],
    interchanges: [
      {
        lineCode: 'T1',
        lineName: 'T1 Kabataş – Bağcılar Tramvay Hattı',
        type: 'tram',
        color: '#004B86',
        stationName: 'Laleli - İstanbul Üniversitesi Tramvay İstasyonu',
        transferType: 'Cadde / Sokak Yürüyüşü',
        distance: '200m',
        walkingTime: '~3 dk yürüme',
        description: 'Ordu Caddesi yönü çıkışından kısa yaya yürüyüşüyle T1 Laleli tramvay durağına geçiş.'
      }
    ]
  }
};

/**
 * Normalizes station name to lookup in M2 station database.
 */
export function getM2StationDetail(rawName: string): StationDetail | null {
  if (!rawName) return null;
  const clean = rawName
    .replace(/\s+Station$/i, '')
    .replace(/\s+İstasyonu$/i, '')
    .replace(/\s*\([A-Za-z0-9]+\)$/i, '')
    .trim()
    .toLowerCase();

  if (M2_STATIONS_DATA[clean]) {
    return M2_STATIONS_DATA[clean];
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

  for (const [key, val] of Object.entries(M2_STATIONS_DATA)) {
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
