/* Latihan interaktif dan gambar.
   Jenis soalan:
   fill  – isi tempat kosong; jawapan dalam [[jawapan|jawapan lain]]
   mcq   – pilih satu jawapan; a = indeks pilihan betul (boleh senarai)
   order – susun perkataan; a = susunan betul
   open  – jawapan bebas; model = contoh jawapan */
window.LATIHAN = {
  p1: [
    { type: "fill", q: ["Tulis ucapan salam yang sesuai dengan waktu.", "เขียนคำทักทายให้เหมาะกับเวลา"], items: [
      { ms: "7.00 pagi → [[Selamat pagi]]" }, { ms: "12.30 tengah hari → [[Selamat tengah hari]]" },
      { ms: "4.00 petang → [[Selamat petang]]" }, { ms: "9.00 malam → [[Selamat malam]]" }]},
    { type: "fill", q: ["Lengkapkan dialog.", "เติมบทสนทนาให้สมบูรณ์"], items: [
      { ms: "A: Apa khabar?  B: [[Khabar]] baik." }, { ms: "A: Siapa [[nama]] kamu?  B: Nama saya Dao." },
      { ms: "A: Terima kasih.  B: [[Sama-sama]]." }]},
    { type: "open", q: ["Perkenalkan diri kamu kepada rakan di sebelah.", "แนะนำตัวกับเพื่อนที่นั่งข้าง ๆ"],
      model: "Selamat pagi. Nama saya ... Saya murid Tingkatan 1." }
  ],
  p2: [
    { type: "fill", q: ["Tulis nombor dalam perkataan.", "เขียนตัวเลขเป็นคำ"], items: [
      { ms: "7 = [[tujuh]]" }, { ms: "12 = [[dua belas]]" }, { ms: "15 = [[lima belas]]" }, { ms: "20 = [[dua puluh]]" }, { ms: "38 = [[tiga puluh lapan]]" }]},
    { type: "fill", q: ["Tulis dalam angka.", "เขียนเป็นตัวเลข"], items: [
      { ms: "sembilan belas = [[19]]" }, { ms: "empat puluh enam = [[46]]" }, { ms: "seratus = [[100]]" }]},
    { type: "open", q: ["Jawab soalan dengan ayat lengkap: Berapakah umur kamu?", "ตอบคำถามเป็นประโยคสมบูรณ์: เธออายุเท่าไร"],
      model: "Umur saya ... tahun." }
  ],
  p3: [
    { type: "mcq", q: ["Pilih maksud arahan.", "เลือกความหมายของคำสั่ง"], items: [
      { ms: "Sila duduk.", opts: ["ยกมือ", "อย่าส่งเสียงดัง", "เชิญนั่ง", "เปิดหนังสือ"], a: 2 },
      { ms: "Angkat tangan.", opts: ["ยกมือ", "อย่าส่งเสียงดัง", "เชิญนั่ง", "เปิดหนังสือ"], a: 0 },
      { ms: "Buka buku.", opts: ["ยกมือ", "อย่าส่งเสียงดัง", "เชิญนั่ง", "เปิดหนังสือ"], a: 3 },
      { ms: "Jangan bising.", opts: ["ยกมือ", "อย่าส่งเสียงดัง", "เชิญนั่ง", "เปิดหนังสือ"], a: 1 }]},
    { type: "mcq", q: ["Pilih Sila, Tolong atau Jangan.", "เลือก Sila, Tolong หรือ Jangan"], items: [
      { ms: "____ masuk, murid-murid.", opts: ["Sila", "Tolong", "Jangan"], a: 0 },
      { ms: "____ buang sampah di dalam kelas.", opts: ["Sila", "Tolong", "Jangan"], a: 2 },
      { ms: "____ padam papan putih, Siti.", th: "ขอให้สิตีช่วย", opts: ["Sila", "Tolong", "Jangan"], a: 1 }]}
  ],
  p4: [
    { type: "fill", q: ["Tulis huruf vokal yang hilang.", "เขียนสระที่หายไป"], items: [
      { ms: "b[[u]]ku", th: "หนังสือ", pic: "📖" }, { ms: "m[[e]]ja", th: "โต๊ะ" }, { ms: "ik[[a]]n", th: "ปลา", pic: "🐟" }, { ms: "ul[[a]]r", th: "งู", pic: "🐍" }]},
    { type: "mcq", q: ["Pilih konsonan gabungan dalam perkataan.", "เลือกพยัญชนะประสมที่อยู่ในคำ"], items: [
      { ms: "bunga", opts: ["ng", "ny", "kh", "sy"], a: 0 }, { ms: "nyanyi", opts: ["ng", "ny", "kh", "sy"], a: 1 },
      { ms: "khabar", opts: ["ng", "ny", "kh", "sy"], a: 2 }, { ms: "syukur", opts: ["ng", "ny", "kh", "sy"], a: 3 }]},
    { type: "mcq", q: ["Pilih nama huruf Jawi.", "เลือกชื่อของอักษรยาวี"], items: [
      { ms: "ب", opts: ["ba", "ta", "nun", "ya"], a: 0 }, { ms: "م", opts: ["lam", "mim", "wau", "ha"], a: 1 },
      { ms: "ڠ", opts: ["ghain", "ain", "nga", "nya"], a: 2 }, { ms: "ڤ", opts: ["fa", "pa", "qaf", "ga"], a: 1 }]}
  ],
  p5: [
    { type: "order", q: ["Susun perkataan menjadi ayat.", "เรียงคำให้เป็นประโยค"], items: [
      { a: ["Siapa", "nama", "kamu?"] }, { a: ["Umur", "saya", "dua belas", "tahun."] }, { a: ["Sila", "buka", "buku."] }]},
    { type: "fill", q: ["Kira dan tulis jawapan dalam perkataan.", "คิดเลขแล้วเขียนคำตอบเป็นคำ"], items: [
      { ms: "lapan + lima = [[tiga belas]]" }, { ms: "dua puluh + tiga puluh = [[lima puluh]]" }, { ms: "sepuluh − satu = [[sembilan]]" }]},
    { type: "open", q: ["Main peranan berpasangan: beri salam, perkenalkan diri, tanya umur dan ucap selamat tinggal.", "แสดงบทบาทสมมติเป็นคู่: ทักทาย แนะนำตัว ถามอายุ และกล่าวลา"],
      model: "A: Selamat pagi. Nama saya ... Siapa nama kamu?  B: Nama saya ... Berapakah umur kamu?  A: Umur saya ... tahun.  B: Jumpa lagi!" }
  ],
  p6: [
    { type: "fill", q: ["Jawab soalan berdasarkan bacaan.", "ตอบคำถามจากเรื่องที่อ่าน"], items: [
      { ms: "Berapa orang ahli keluarga Fah? [[lima orang|lima|5 orang|5]]" },
      { ms: "Apakah pekerjaan ibu Fah? [[jururawat|seorang jururawat]]" },
      { ms: "Berapakah umur adik Fah? [[sembilan tahun|sembilan|9 tahun|9]]" }]},
    { type: "fill", q: ["Tulis perkataan bahasa Melayu.", "เขียนคำภาษามลายู"], items: [
      { ms: "[[ayah|bapa]]", th: "พ่อ", pic: "👨" }, { ms: "[[ibu|emak]]", th: "แม่", pic: "👩" }, { ms: "[[abang]]", th: "พี่ชาย", pic: "👦" },
      { ms: "[[adik]]", th: "น้อง", pic: "🧒" }, { ms: "[[nenek]]", th: "ย่า ยาย", pic: "👵" }]},
    { type: "open", q: ["Lukis salasilah keluarga kamu dan perkenalkan kepada kelas.", "วาดแผนผังครอบครัวของตนเองแล้วนำเสนอหน้าชั้น"],
      model: "Ini ayah saya. Nama ayah saya ... Ini ibu saya ..." }
  ],
  p7: [
    { type: "mcq", q: ["Pilih Ini atau Itu.", "เลือก Ini หรือ Itu"], items: [
      { ms: "____ pemadam saya.", th: "ถือยางลบอยู่ในมือ", opts: ["Ini", "Itu"], a: 0 },
      { ms: "____ padang sekolah.", th: "ชี้ไปที่สนามซึ่งอยู่ไกล", opts: ["Ini", "Itu"], a: 1 }]},
    { type: "mcq", q: ["Pilih maksud perkataan.", "เลือกความหมายของคำ"], items: [
      { ms: "perpustakaan", opts: ["ห้องสมุด", "โรงอาหาร", "ห้องน้ำ", "สนาม"], a: 0 },
      { ms: "kantin", opts: ["ห้องสมุด", "โรงอาหาร", "ห้องน้ำ", "สนาม"], a: 1 },
      { ms: "pemadam", opts: ["ดินสอ", "ยางลบ", "ไม้บรรทัด", "กระเป๋า"], a: 1 },
      { ms: "pengetua", opts: ["ครู", "นักเรียน", "ผู้อำนวยการโรงเรียน", "บรรณารักษ์"], a: 2 }]},
    { type: "open", q: ["Tulis lima benda yang ada di dalam kelas kamu.", "เขียนชื่อสิ่งของในห้องเรียนของเธอ 5 อย่าง"],
      model: "meja, kerusi, pensel, papan putih, buku" }
  ],
  p8: [
    { type: "fill", q: ["Lengkapkan ayat dengan warna yang betul.", "เติมสีที่ถูกต้อง"], items: [
      { ms: "Langit berwarna [[biru]].", th: "ท้องฟ้า" }, { ms: "Daun berwarna [[hijau]].", th: "ใบไม้" },
      { ms: "Susu berwarna [[putih]].", th: "นม" }, { ms: "Pisang masak berwarna [[kuning]].", th: "กล้วยสุก" }]},
    { type: "fill", q: ["Tulis lawan kata.", "เขียนคำตรงข้าม"], items: [
      { ms: "besar ↔ [[kecil]]" }, { ms: "panjang ↔ [[pendek]]" }, { ms: "tinggi ↔ [[rendah]]" }, { ms: "bersih ↔ [[kotor]]" }]},
    { type: "open", q: ["Huraikan beg kamu dalam dua ayat.", "บรรยายกระเป๋าของเธอ 2 ประโยค"], model: "Beg saya berwarna hitam. Beg itu besar dan baru." }
  ],
  p9: [
    { type: "mcq", q: ["Pilih di, ke atau dari.", "เลือก di, ke หรือ dari"], items: [
      { ms: "Saya pergi ____ sekolah.", opts: ["di", "ke", "dari"], a: 1 },
      { ms: "Ayah bekerja ____ hospital.", opts: ["di", "ke", "dari"], a: 0 },
      { ms: "Adik baru pulang ____ pasar.", opts: ["di", "ke", "dari"], a: 2 },
      { ms: "Kami bermain ____ taman.", opts: ["di", "ke", "dari"], a: 0 }]},
    { type: "mcq", q: ["Pilih maksud tempat.", "เลือกความหมายของสถานที่"], items: [
      { ms: "hospital", opts: ["วัด", "สถานีตำรวจ", "โรงพยาบาล", "ที่ทำการไปรษณีย์"], a: 2 },
      { ms: "pejabat pos", opts: ["วัด", "สถานีตำรวจ", "โรงพยาบาล", "ที่ทำการไปรษณีย์"], a: 3 },
      { ms: "balai polis", opts: ["วัด", "สถานีตำรวจ", "โรงพยาบาล", "ที่ทำการไปรษณีย์"], a: 1 },
      { ms: "kuil", opts: ["วัด", "สถานีตำรวจ", "โรงพยาบาล", "ที่ทำการไปรษณีย์"], a: 0 }]}
  ],
  p10: [
    { type: "order", q: ["Susun perkataan menjadi ayat.", "เรียงคำให้เป็นประโยค"], items: [
      { a: ["Sekolah", "saya", "besar."] }, { a: ["Ini", "beg", "merah."] }, { a: ["Kakak", "pergi", "ke", "pasar."] }]},
    { type: "open", q: ["Tulis tiga ayat tentang peta sekolah kumpulan kamu.", "เขียน 3 ประโยคบรรยายแผนผังโรงเรียนของกลุ่ม"],
      model: "Ini perpustakaan. Perpustakaan di sebelah kantin. Padang sekolah kami besar dan hijau." }
  ],
  p11: [
    { type: "mcq", q: ["Pilih hari selepasnya.", "เลือกวันถัดไป"], items: [
      { ms: "Isnin → ?", opts: ["Ahad", "Selasa", "Rabu"], a: 1 },
      { ms: "Khamis → ?", opts: ["Rabu", "Jumaat", "Sabtu"], a: 1 },
      { ms: "Sabtu → ?", opts: ["Jumaat", "Isnin", "Ahad"], a: 2 }]},
    { type: "mcq", q: ["Pilih waktu yang betul.", "เลือกการบอกเวลาที่ถูกต้อง"], items: [
      { ms: "7:00 pagi", clock: "7:00", opts: ["pukul tujuh pagi", "pukul tujuh malam", "pukul tujuh setengah pagi"], a: 0 },
      { ms: "8:30 pagi", clock: "8:30", opts: ["pukul lapan suku pagi", "pukul lapan setengah pagi", "pukul sembilan pagi"], a: 1 },
      { ms: "3:15 petang", clock: "3:15", opts: ["pukul tiga suku petang", "pukul tiga setengah petang", "pukul empat petang"], a: 0 }]},
    { type: "open", q: ["Jawab: Hari ini hari apa? Pukul berapa sekarang?", "ตอบคำถาม: วันนี้วันอะไร ตอนนี้กี่โมง"], model: "Hari ini hari ... Sekarang pukul ..." }
  ],
  p12: [
    { type: "fill", q: ["Jawab soalan berdasarkan bacaan.", "ตอบคำถามจากเรื่องที่อ่าน"], items: [
      { ms: "Pukul berapa Siti bangun tidur? [[pukul lima setengah pagi|lima setengah pagi|pukul lima setengah|5.30 pagi]]" },
      { ms: "Siapakah yang menghantar Siti ke sekolah? [[ayah|ayahnya|ayah Siti]]" },
      { ms: "Apakah yang Siti buat pada waktu malam? [[membaca buku|dia membaca buku]]" }]},
    { type: "order", q: ["Susun aktiviti mengikut urutan.", "เรียงกิจกรรมตามลำดับ"], items: [
      { a: ["bangun tidur", "mandi", "bersarapan", "pergi ke sekolah"] }]},
    { type: "open", q: ["Tulis rutin harian kamu dalam lima ayat.", "เขียนกิจวัตรประจำวันของเธอ 5 ประโยค"],
      model: "Saya bangun tidur pada pukul enam pagi. Kemudian, saya mandi ..." }
  ],
  p13: [
    { type: "fill", q: ["Tulis rasa yang betul.", "เขียนรสชาติที่ถูกต้อง"], items: [
      { ms: "Gula rasanya [[manis]].", th: "น้ำตาล" }, { ms: "Garam rasanya [[masin]].", th: "เกลือ", pic: "🧂" },
      { ms: "Cili rasanya [[pedas]].", th: "พริก", pic: "🌶️" }, { ms: "Limau rasanya [[masam]].", th: "มะนาว", pic: "🍋" }]},
    { type: "fill", q: ["Lengkapkan dialog.", "เติมบทสนทนาให้สมบูรณ์"], items: [
      { ms: "A: Adik hendak minum [[apa]]?  B: Saya hendak susu." }, { ms: "A: Berapa [[harganya|harga]]?  B: Lima belas baht." }]},
    { type: "open", q: ["Tulis makanan kegemaran kamu dan sebabnya.", "เขียนอาหารที่ชอบและเหตุผล"], model: "Saya suka roti canai kerana sedap." }
  ],
  p14: [
    { type: "mcq", q: ["Apakah perasaan kamu dalam situasi ini?", "เธอจะรู้สึกอย่างไรในสถานการณ์ต่อไปนี้"], items: [
      { ms: "Saya mendapat hadiah.", opts: ["gembira", "lapar", "takut", "penat"], a: 0 },
      { ms: "Saya belum makan sejak pagi.", opts: ["gembira", "lapar", "takut", "penat"], a: 1 },
      { ms: "Saya melihat seekor ular.", opts: ["gembira", "lapar", "takut", "penat"], a: 2 },
      { ms: "Saya berlari selama satu jam.", opts: ["gembira", "lapar", "takut", "penat"], a: 3 }]},
    { type: "open", q: ["Lengkapkan ayat dengan sebab kamu sendiri: Saya berasa gembira kerana ...", "เติมประโยคด้วยเหตุผลของตนเอง"],
      model: "Saya berasa gembira kerana hari ini hari jadi saya." }
  ],
  p15: [
    { type: "open", q: ["Tulis dialog pendek (6 baris) untuk situasi pilihan kamu, kemudian lakonkan bersama rakan.", "เขียนบทสนทนาสั้น ๆ 6 บรรทัดตามสถานการณ์ที่เลือก แล้วแสดงกับเพื่อน"],
      model: "A: Selamat pagi, puan. Saya hendak meminjam buku ini.  B: Boleh. Tunjukkan kad perpustakaan kamu. ..." }
  ],
  p16: [
    { type: "mcq", q: ["Betul atau Salah?", "ถูกหรือผิด"], items: [
      { ms: "Kita memberi barang dengan tangan kiri.", opts: ["Betul", "Salah"], a: 1 },
      { ms: "Kita membuka kasut sebelum masuk ke rumah.", opts: ["Betul", "Salah"], a: 0 },
      { ms: "Hari Merdeka Malaysia ialah pada 31 Ogos.", opts: ["Betul", "Salah"], a: 0 }]},
    { type: "fill", q: ["Tulis ucapan yang sesuai.", "เขียนคำอวยพรที่เหมาะสม"], items: [
      { ms: "Hari Raya Aidilfitri → [[Selamat Hari Raya|Selamat Hari Raya, maaf zahir dan batin|Selamat Hari Raya Aidilfitri|Selamat Hari Raya Aidilfitri, maaf zahir dan batin]]" },
      { ms: "Songkran → [[Selamat Hari Songkran]]" }]},
    { type: "open", q: ["Nyatakan dua persamaan Hari Raya dan Songkran.", "บอกความเหมือนระหว่างวันรายอกับวันสงกรานต์ 2 ข้อ"],
      model: "Orang balik kampung. Orang muda menghormati orang tua." }
  ],
  p17: [
    { type: "mcq", q: ["Pilih keterangan yang betul.", "เลือกคำอธิบายที่ถูกต้อง"], items: [
      { ms: "ketupat", opts: ["Daging dicucuk dan dibakar.", "Nasi dibungkus dengan daun kelapa.", "Daging dimasak lama dengan santan dan rempah.", "Roti leper dimakan dengan kuah kari."], a: 1 },
      { ms: "satay", opts: ["Daging dicucuk dan dibakar.", "Nasi dibungkus dengan daun kelapa.", "Daging dimasak lama dengan santan dan rempah.", "Roti leper dimakan dengan kuah kari."], a: 0 },
      { ms: "roti canai", opts: ["Daging dicucuk dan dibakar.", "Nasi dibungkus dengan daun kelapa.", "Daging dimasak lama dengan santan dan rempah.", "Roti leper dimakan dengan kuah kari."], a: 3 },
      { ms: "rendang", opts: ["Daging dicucuk dan dibakar.", "Nasi dibungkus dengan daun kelapa.", "Daging dimasak lama dengan santan dan rempah.", "Roti leper dimakan dengan kuah kari."], a: 2 }]},
    { type: "open", q: ["Tulis dua makanan tradisi yang ada di Malaysia dan di selatan Thailand.", "เขียนอาหารพื้นเมือง 2 อย่างที่พบทั้งในมาเลเซียและภาคใต้ของไทย"],
      model: "roti canai, satay, nasi kerabu" }
  ],
  p18: [
    { type: "fill", q: ["Tukar ayat loghat kepada bahasa Melayu standard.", "เปลี่ยนประโยคภาษาถิ่นเป็นภาษามลายูมาตรฐาน"], items: [
      { ms: "Gi mano? → [[Pergi ke mana?|Pergi mana?|Hendak pergi ke mana?]]" },
      { ms: "Make doh? → [[Sudah makan?|Kamu sudah makan?]]" },
      { ms: "Gapo ni? → [[Apa ini?]]" }]},
    { type: "open", q: ["Tanya keluarga kamu tiga perkataan loghat dan tulis perkataan standardnya.", "ถามคนในครอบครัวถึงคำภาษาถิ่น 3 คำ แล้วเขียนคำภาษามาตรฐานที่ตรงกัน"],
      model: "rumoh = rumah, ike = ikan, gi = pergi" }
  ],
  p19: [
    { type: "mcq", q: ["Jawab soalan berdasarkan cerita.", "ตอบคำถามจากนิทาน"], items: [
      { ms: "Mengapakah Sang Kancil hendak ke seberang sungai?", opts: ["Untuk makan buah-buahan.", "Untuk berjumpa raja.", "Untuk mandi di sungai."], a: 0 },
      { ms: "Mengapakah buaya berbaris?", opts: ["Kerana buaya hendak tidur.", "Kerana Sang Kancil kata dia mahu mengira buaya.", "Kerana raja datang ke sungai."], a: 1 },
      { ms: "Apakah pengajaran cerita ini?", opts: ["Gunakan akal untuk menyelesaikan masalah.", "Jangan makan buah-buahan.", "Buaya suka berbaris."], a: 0 }]},
    { type: "mcq", q: ["Baris manakah maksud pantun di atas?", "บรรทัดใดของปันตุนข้างต้นเป็นเนื้อความ"], items: [
      { ms: "Maksud pantun ialah ...", opts: ["Baris 1 dan 2", "Baris 3 dan 4"], a: 1 }]}
  ],
  p20: [
    { type: "open", q: ["Tulis rancangan projek kumpulan kamu: tajuk, ahli dan tugas setiap ahli.", "เขียนแผนโครงงานของกลุ่ม: ชื่อเรื่อง สมาชิก และหน้าที่ของแต่ละคน"],
      model: "Tajuk: Poster Nasi Lemak. Ahli: Fah (lukis), Siti (tulis ayat), Nok (warna), Ploy (bentang)." }
  ]
};

/* Gambar untuk kad kosa kata */
window.GAMBAR = {
  "Selamat pagi": "🌅", "Selamat tengah hari": "☀️", "Selamat petang": "🌇", "Selamat malam": "🌙",
  "Terima kasih": "🙏", "Selamat tinggal": "👋", "Selamat jalan": "👋", "Apa khabar?": "🙂", "Khabar baik": "😊",
  "Sila duduk.": "🪑", "Buka buku.": "📖", "Tutup buku.": "📕", "Dengar baik-baik.": "👂", "Tulis nama kamu.": "📝",
  "Angkat tangan.": "✋", "Jangan bising.": "🤫", "Boleh saya ke tandas?": "🚻", "Baca bersama-sama.": "📚",
  "keluarga": "👨‍👩‍👧‍👦", "ayah / bapa": "👨", "ibu / emak": "👩", "abang": "👦", "kakak": "👧", "adik": "🧒",
  "datuk": "👴", "nenek": "👵", "anak": "👶", "bapa saudara": "🧔", "ibu saudara": "👩‍🦱", "sepupu": "🧑‍🤝‍🧑",
  "sekolah": "🏫", "bilik darjah": "🧑‍🏫", "guru / cikgu": "👩‍🏫", "murid": "🧑‍🎓", "pengetua": "👩‍💼",
  "perpustakaan": "📚", "kantin": "🍱", "padang": "⚽", "makmal": "🔬", "tandas": "🚻", "pensel": "✏️",
  "pembaris": "📏", "kerusi": "🪑", "papan putih": "🧾",
  "rumah": "🏠", "pasar": "🛒", "kedai": "🏪", "hospital": "🏥", "masjid": "🕌", "kuil": "🛕", "balai polis": "🚓",
  "pejabat pos": "🏤", "bank": "🏦", "taman": "🌳", "stesen kereta api": "🚉", "pantai": "🏖️",
  "bangun tidur": "⏰", "mandi": "🚿", "gosok gigi": "🪥", "memakai baju seragam": "👕", "bersarapan": "🍳",
  "pergi ke sekolah": "🚌", "belajar": "✍️", "makan tengah hari": "🍛", "balik ke rumah": "🏡",
  "membuat kerja rumah": "📝", "membaca buku": "📖", "tidur": "😴",
  "nasi": "🍚", "roti": "🍞", "mi": "🍜", "ayam goreng": "🍗", "ikan": "🐟", "sayur": "🥬", "buah-buahan": "🍎",
  "telur": "🥚", "air kosong": "💧", "teh tarik": "🍵", "susu": "🥛", "jus oren": "🧃",
  "sedap": "😋", "manis": "🍬", "masam": "🍋", "masin": "🧂", "pedas": "🌶️", "pahit": "☕",
  "gembira": "😄", "sedih": "😢", "marah": "😠", "takut": "😨", "penat": "😩", "lapar": "🍽️", "dahaga": "🥤",
  "sakit": "🤒", "bosan": "🥱", "terkejut": "😲",
  "nasi lemak": "🍛", "roti canai": "🫓", "satay": "🍢", "ketupat": "🍙", "rendang": "🍲", "nasi kerabu": "🍚",
  "laksa": "🍜", "kuih": "🍡", "santan": "🥥", "rempah": "🌿", "sambal": "🌶️",
  "Isnin": "1", "Selasa": "2", "Rabu": "3", "Khamis": "4", "Jumaat": "5", "Sabtu": "6", "Ahad": "7",
  "semalam": "⬅️", "hari ini": "📅", "esok": "➡️",
  "ayam": "🐔", "emak": "👩", "enak": "😋", "oren": "🍊", "ubi": "🍠", "bunga": "🌸", "nyanyi": "🎤", "pulau": "🏝️"
};

/* Warna sebenar untuk kad warna */
window.WARNA = {
  "merah": "#D7263D", "biru": "#1E5BD6", "kuning": "#F2C40F", "hijau": "#2E9E4F", "putih": "#FFFFFF", "hitam": "#1A1A1A",
  "jingga / oren": "#F28C18", "ungu": "#7B3FB2", "merah jambu": "#F48FB1", "coklat": "#7A4A26"
};

/* Gambar untuk bacaan */
window.GAMBAR_BACAAN = {
  "Keluarga Saya": "👨‍👩‍👧‍👦", "Barang Saya": "🎒", "Rutin Harian Siti": "⏰", "Rumah Terbuka": "🏡",
  "Nasi Lemak": "🍛", "Sang Kancil dan Buaya": "🦌🐊"
};

/* Rakaman suara sebenar (pilihan): letakkan fail dalam folder audio/ dan tambah di sini.
   Contoh: "Selamat pagi": "audio/selamat-pagi.mp3" */
window.AUDIO = {};
