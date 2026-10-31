/* Kandungan buku: Buku Teks Bahasa Melayu 1 (M20273) — setiap teks [Bahasa Melayu, ภาษาไทย] */
window.BUKU = {
  units: [
    { no: 1, ms: "Asas Komunikasi", th: "พื้นฐานการสื่อสาร", hp: "1–2", jam: 10 },
    { no: 2, ms: "Sekitar Saya", th: "รอบตัวฉัน", hp: "2–4", jam: 8 },
    { no: 3, ms: "Aktiviti dan Rutin", th: "กิจกรรมและชีวิตประจำวัน", hp: "2–4", jam: 10 },
    { no: 4, ms: "Budaya dan Loghat", th: "วัฒนธรรมและภาษาถิ่น", hp: "4–5", jam: 8 }
  ],

  hasil: [
    ["Memberi salam, memperkenalkan diri, bertanya dan menjawab, serta mengucapkan terima kasih dan selamat tinggal dalam kehidupan harian.",
     "ทักทาย แนะนำตัว ถาม–ตอบ และกล่าวคำอำลา/ขอบคุณในชีวิตประจำวันได้"],
    ["Menggunakan lebih daripada 100 perkataan asas dan membina ayat mudah (S–K–O) dengan betul.",
     "ใช้คำศัพท์พื้นฐานได้กว่า 100 คำ และสร้างประโยคง่าย ๆ (S–V–O) ได้ถูกต้อง"],
    ["Memahami dialog dan teks pendek serta menyebut perkataan dengan sebutan yang hampir sama dengan penutur jati.",
     "เข้าใจบทสนทนาและข้อความสั้น ๆ รวมถึงออกเสียงได้ใกล้เคียงเจ้าของภาษา"],
    ["Menerangkan dan membandingkan adat, makanan dan cara hidup masyarakat Melayu.",
     "อธิบายและเปรียบเทียบประเพณี อาหาร และวิถีชีวิตชาวมลายูได้"],
    ["Menggunakan pengetahuan untuk menghasilkan persembahan kreatif (seperti main peranan) dengan yakin.",
     "นำความรู้ไปสร้างสรรค์ผลงานนำเสนอ (เช่น บทบาทสมมติ) ได้อย่างมั่นใจ"]
  ],

  lessons: [
  /* ================= UNIT 1 ================= */
  {
    id: "p1", unit: 1, ms: "Salam dan Kenalan", th: "สวัสดีและทำความรู้จัก",
    obj: [
      ["Memberi dan membalas salam mengikut waktu.", "ทักทายและตอบรับคำทักทายตามช่วงเวลาได้"],
      ["Memperkenalkan diri dan rakan.", "แนะนำตนเองและเพื่อนได้"],
      ["Mengucapkan terima kasih dan selamat tinggal.", "กล่าวขอบคุณและคำอำลาได้"]
    ],
    blocks: [
      { t: "h", ms: "Kosa kata", th: "คำศัพท์" },
      { t: "vocab", rows: [
        ["Selamat pagi", "สวัสดีตอนเช้า"],
        ["Selamat tengah hari", "สวัสดีตอนกลางวัน"],
        ["Selamat petang", "สวัสดีตอนบ่ายถึงเย็น"],
        ["Selamat malam", "สวัสดีตอนกลางคืน"],
        ["Apa khabar?", "สบายดีไหม"],
        ["Khabar baik", "สบายดี"],
        ["Siapa nama kamu?", "เธอชื่ออะไร"],
        ["Nama saya ...", "ฉันชื่อ ..."],
        ["Terima kasih", "ขอบคุณ"],
        ["Sama-sama", "ด้วยความยินดี"],
        ["Selamat tinggal", "ลาก่อน (ผู้ที่จากไปพูดกับผู้ที่อยู่)"],
        ["Selamat jalan", "ลาก่อน เดินทางปลอดภัย (ผู้ที่อยู่พูดกับผู้ที่จากไป)"],
        ["Jumpa lagi", "แล้วพบกันใหม่"]
      ]},
      { t: "note", ms: "Murid beragama Islam boleh memberi salam “Assalamualaikum” dan menjawab “Waalaikumussalam”. Pilih salam yang sesuai dengan orang yang kita temui.",
        th: "นักเรียนมุสลิมทักทายด้วย “อัสสลามุอะลัยกุม” และตอบว่า “วะอะลัยกุมุสสลาม” ได้ ควรเลือกคำทักทายให้เหมาะกับผู้ที่เราพบ" },
      { t: "h", ms: "Mari bertutur", th: "มาพูดกันเถอะ" },
      { t: "dialog", lines: [
        ["Aminah", "Selamat pagi.", "สวัสดีตอนเช้า"],
        ["Ploy", "Selamat pagi. Apa khabar?", "สวัสดีตอนเช้า สบายดีไหม"],
        ["Aminah", "Khabar baik, terima kasih. Siapa nama kamu?", "สบายดี ขอบคุณ เธอชื่ออะไร"],
        ["Ploy", "Nama saya Ploy. Nama kamu siapa?", "ฉันชื่อพลอย แล้วเธอชื่ออะไร"],
        ["Aminah", "Nama saya Aminah. Saya murid Tingkatan 1.", "ฉันชื่ออามีนะห์ ฉันเป็นนักเรียนชั้น ม.1"],
        ["Ploy", "Saya pun murid Tingkatan 1. Gembira berkenalan dengan kamu.", "ฉันก็เป็นนักเรียนชั้น ม.1 ยินดีที่ได้รู้จัก"],
        ["Aminah", "Saya pun begitu. Jumpa lagi!", "เช่นกัน แล้วพบกันใหม่"]
      ]},
      { t: "pola", rows: [
        ["Nama saya + nama → Nama saya Ploy.", "ฉันชื่อ + ชื่อ → ฉันชื่อพลอย"],
        ["Ini kawan saya, + nama → Ini kawan saya, Aminah.", "นี่คือเพื่อนของฉัน + ชื่อ → นี่คือเพื่อนของฉัน อามีนะห์"]
      ]}
    ],
    latihan: [
      { q: ["Tulis ucapan salam yang sesuai dengan waktu.", "เขียนคำทักทายให้เหมาะกับเวลา"],
        items: [["1) 7.00 pagi → ______________", ""], ["2) 12.30 tengah hari → ______________", ""], ["3) 4.00 petang → ______________", ""], ["4) 9.00 malam → ______________", ""]] },
      { q: ["Lengkapkan dialog.", "เติมบทสนทนาให้สมบูรณ์"],
        items: [["1) A: Apa khabar?  B: ________ baik.", ""], ["2) A: Siapa ________ kamu?  B: Nama saya Dao.", ""], ["3) A: Terima kasih.  B: ________.", ""]] },
      { q: ["Perkenalkan diri kamu kepada rakan di sebelah.", "แนะนำตัวกับเพื่อนที่นั่งข้าง ๆ"],
        items: [["“Selamat pagi. Nama saya ... Saya murid Tingkatan 1.”", ""]] }
    ],
    jawapan: [["1", "Selamat pagi, Selamat tengah hari, Selamat petang, Selamat malam"], ["2", "Khabar, nama, Sama-sama"], ["3", "Jawapan bebas / ตอบได้หลากหลาย"]],
    nilai: ["Memberi salam dengan senyuman menunjukkan kita menghormati orang lain.", "การทักทายด้วยรอยยิ้มแสดงว่าเราให้เกียรติผู้อื่น"]
  },
  {
    id: "p2", unit: 1, ms: "Nombor dan Umur", th: "ตัวเลขและอายุ",
    obj: [
      ["Membilang dari 0 hingga 100.", "นับเลข 0 ถึง 100 ได้"],
      ["Bertanya dan memberitahu umur serta nombor telefon.", "ถามและบอกอายุและหมายเลขโทรศัพท์ได้"]
    ],
    blocks: [
      { t: "h", ms: "Nombor 0–10", th: "ตัวเลข 0–10" },
      { t: "grid", cells: [["0","kosong"],["1","satu"],["2","dua"],["3","tiga"],["4","empat"],["5","lima"],["6","enam"],["7","tujuh"],["8","lapan"],["9","sembilan"],["10","sepuluh"]] },
      { t: "h", ms: "Nombor 11 hingga 100", th: "ตัวเลข 11 ถึง 100" },
      { t: "grid", cells: [["11","sebelas"],["12","dua belas"],["15","lima belas"],["19","sembilan belas"],["20","dua puluh"],["21","dua puluh satu"],["35","tiga puluh lima"],["50","lima puluh"],["99","sembilan puluh sembilan"],["100","seratus"]] },
      { t: "note", ms: "11 hingga 19 menggunakan “belas”. Puluhan menggunakan “puluh”. “Se-” bermaksud satu: sebelas = 11, seratus = 100.",
        th: "11 ถึง 19 ใช้คำว่า belas หลักสิบใช้คำว่า puluh ส่วน se- แปลว่า หนึ่ง เช่น sebelas = 11, seratus = 100" },
      { t: "h", ms: "Mari bertutur", th: "มาพูดกันเถอะ" },
      { t: "dialog", lines: [
        ["Cikgu", "Berapakah umur kamu, Nurul?", "นูรุล เธออายุเท่าไร"],
        ["Nurul", "Umur saya dua belas tahun, cikgu.", "หนูอายุ 12 ปีค่ะ คุณครู"],
        ["Cikgu", "Berapakah nombor telefon ibu kamu?", "หมายเลขโทรศัพท์ของแม่เธอคือเบอร์อะไร"],
        ["Nurul", "Kosong lapan satu, dua tiga empat, lima enam tujuh lapan.", "081-234-5678 ค่ะ"],
        ["Cikgu", "Terima kasih.", "ขอบคุณ"]
      ]},
      { t: "pola", rows: [
        ["Berapakah umur kamu? → Umur saya ... tahun.", "เธออายุเท่าไร → ฉันอายุ ... ปี"],
        ["Berapakah nombor telefon kamu? → Nombor telefon saya ...", "หมายเลขโทรศัพท์ของเธอคืออะไร → หมายเลขโทรศัพท์ของฉันคือ ..."]
      ]}
    ],
    latihan: [
      { q: ["Tulis nombor dalam perkataan.", "เขียนตัวเลขเป็นคำ"],
        items: [["1) 7 = ______________", ""], ["2) 12 = ______________", ""], ["3) 15 = ______________", ""], ["4) 20 = ______________", ""], ["5) 38 = ______________", ""]] },
      { q: ["Tulis dalam angka.", "เขียนเป็นตัวเลข"],
        items: [["1) sembilan belas = ______", ""], ["2) empat puluh enam = ______", ""], ["3) seratus = ______", ""]] },
      { q: ["Jawab soalan dengan ayat lengkap.", "ตอบคำถามเป็นประโยคสมบูรณ์"],
        items: [["Berapakah umur kamu? ______________________________", ""]] }
    ],
    jawapan: [["1", "tujuh, dua belas, lima belas, dua puluh, tiga puluh lapan"], ["2", "19, 46, 100"], ["3", "Umur saya ... tahun."]],
    nilai: ["Setiap tahun umur kita bertambah. Gunakan masa dengan sebaik-baiknya.", "อายุของเราเพิ่มขึ้นทุกปี จงใช้เวลาให้เกิดประโยชน์ที่สุด"]
  },
  {
    id: "p3", unit: 1, ms: "Arahan Asas", th: "คำสั่งพื้นฐาน",
    obj: [
      ["Memahami dan mengikut arahan di dalam kelas.", "เข้าใจและปฏิบัติตามคำสั่งในห้องเรียนได้"],
      ["Menggunakan “Sila”, “Tolong” dan “Jangan” dengan betul.", "ใช้คำว่า Sila, Tolong และ Jangan ได้ถูกต้อง"]
    ],
    blocks: [
      { t: "h", ms: "Arahan di dalam kelas", th: "คำสั่งในห้องเรียน" },
      { t: "vocab", rows: [
        ["Sila duduk.", "เชิญนั่ง"], ["Sila bangun.", "เชิญยืน"], ["Buka buku.", "เปิดหนังสือ"], ["Tutup buku.", "ปิดหนังสือ"],
        ["Dengar baik-baik.", "ฟังให้ดี"], ["Baca bersama-sama.", "อ่านพร้อมกัน"], ["Tulis nama kamu.", "เขียนชื่อของเธอ"],
        ["Angkat tangan.", "ยกมือ"], ["Jangan bising.", "อย่าส่งเสียงดัง"], ["Tolong padam papan putih.", "ช่วยลบกระดานหน่อย"],
        ["Boleh saya ke tandas?", "ขอไปห้องน้ำได้ไหม"]
      ]},
      { t: "pola", rows: [
        ["Sila + perbuatan → Sila masuk.", "ใช้เชิญอย่างสุภาพ → เชิญเข้ามา"],
        ["Tolong + perbuatan → Tolong tutup pintu.", "ใช้ขอให้ช่วย → ช่วยปิดประตูหน่อย"],
        ["Jangan + perbuatan → Jangan lari.", "ใช้ห้าม → อย่าวิ่ง"]
      ]},
      { t: "h", ms: "Mari bertutur", th: "มาพูดกันเถอะ" },
      { t: "dialog", lines: [
        ["Cikgu", "Murid-murid, sila buka buku halaman 10.", "นักเรียน เปิดหนังสือหน้า 10"],
        ["Murid", "Baik, cikgu.", "ค่ะ คุณครู"],
        ["Siti", "Cikgu, boleh saya ke tandas?", "คุณครูคะ หนูขอไปห้องน้ำได้ไหมคะ"],
        ["Cikgu", "Boleh, tetapi jangan lama.", "ได้ แต่อย่านานนะ"]
      ]}
    ],
    latihan: [
      { q: ["Padankan arahan dengan maksudnya.", "จับคู่คำสั่งกับความหมาย"],
        items: [["1) Sila duduk.   2) Angkat tangan.   3) Buka buku.   4) Jangan bising.", "ก. ยกมือ   ข. อย่าส่งเสียงดัง   ค. เชิญนั่ง   ง. เปิดหนังสือ"]] },
      { q: ["Isi tempat kosong dengan Sila, Tolong atau Jangan.", "เติม Sila, Tolong หรือ Jangan ลงในช่องว่าง"],
        items: [["1) ________ masuk, murid-murid.", ""], ["2) ________ buang sampah di dalam kelas.", ""], ["3) ________ tutup pintu itu.", ""]] }
    ],
    jawapan: [["1", "1–ค, 2–ก, 3–ง, 4–ข"], ["2", "Sila, Jangan, Tolong"]],
    nilai: ["Murid yang mendengar arahan guru dengan teliti ialah murid yang berdisiplin.", "นักเรียนที่ตั้งใจฟังคำสั่งของครูคือนักเรียนที่มีวินัย"]
  },
  {
    id: "p4", unit: 1, ms: "Vokal dan Konsonan", th: "สระและพยัญชนะ",
    obj: [
      ["Menyebut huruf vokal, konsonan dan diftong Rumi dengan betul.", "ออกเสียงสระ พยัญชนะ และสระประสมอักษรรูมีได้ถูกต้อง"],
      ["Mengenal huruf Jawi dan tahu bahawa tulisan Jawi ditulis dari kanan ke kiri.", "รู้จักอักษรยาวีและรู้ว่าอักษรยาวีเขียนจากขวาไปซ้าย"]
    ],
    blocks: [
      { t: "h", ms: "Huruf vokal Rumi", th: "สระอักษรรูมี" },
      { t: "p", ms: "Tulisan Rumi mempunyai 26 huruf: 5 huruf vokal (a, e, i, o, u) dan 21 huruf konsonan. Huruf “e” mempunyai dua bunyi.",
        th: "อักษรรูมีมี 26 ตัว เป็นสระ 5 ตัว (a, e, i, o, u) และพยัญชนะ 21 ตัว ตัว e ออกเสียงได้ 2 แบบ" },
      { t: "table", head: [["Vokal","สระ"],["Bunyi","เสียง"],["Contoh","ตัวอย่าง"],["Maksud","ความหมาย"]], rows: [
        ["a", "/อา/", "ayam", "ไก่"], ["e (pepet)", "/เออ/", "emak", "แม่"], ["e (taling)", "/เอ/", "enak", "อร่อย"],
        ["i", "/อี/", "ikan", "ปลา"], ["o", "/โอ/", "oren", "ส้ม"], ["u", "/อู/", "ubi", "มันเทศ"]
      ]},
      { t: "h", ms: "Konsonan gabungan dan diftong", th: "พยัญชนะประสมและสระประสม" },
      { t: "table", head: [["Huruf","อักษร"],["Bunyi","เสียง"],["Contoh","ตัวอย่าง"],["Maksud","ความหมาย"]], rows: [
        ["ng", "/ง/", "bunga", "ดอกไม้"], ["ny", "/ญ/", "nyanyi", "ร้องเพลง"], ["kh", "/ค (ลำคอ)/", "khabar", "ข่าว"],
        ["sy", "/ช/", "syukur", "ขอบคุณพระเจ้า"], ["gh", "/ฆ (ลำคอ)/", "loghat", "ภาษาถิ่น"],
        ["ai", "/ไอ/", "pandai", "เก่ง ฉลาด"], ["au", "/เอา/", "pulau", "เกาะ"], ["oi", "/ออย/", "amboi", "โอ้โห (คำอุทาน)"]
      ]},
      { t: "h", ms: "Huruf Jawi", th: "อักษรยาวี" },
      { t: "p", ms: "Tulisan Jawi berasal daripada huruf Arab dan ditambah beberapa huruf untuk bunyi bahasa Melayu. Tulisan Jawi ditulis dan dibaca dari kanan ke kiri.",
        th: "อักษรยาวีพัฒนามาจากอักษรอาหรับ และเพิ่มตัวอักษรสำหรับเสียงในภาษามลายู อักษรยาวีเขียนและอ่านจากขวาไปซ้าย" },
      { t: "jawi", cells: [["ا","alif"],["ب","ba"],["ت","ta"],["ث","sa"],["ج","jim"],["چ","ca"],["ح","ha"],["خ","kha"],["د","dal"],["ذ","zal"],["ر","ra"],["ز","zai"],["س","sin"],["ش","syin"],["ص","sad"],["ض","dad"],["ط","ta"],["ظ","za"],["ع","ain"],["غ","ghain"],["ڠ","nga"],["ف","fa"],["ڤ","pa"],["ق","qaf"],["ک","kaf"],["ݢ","ga"],["ل","lam"],["م","mim"],["ن","nun"],["و","wau"],["ۏ","va"],["ه","ha"],["ء","hamzah"],["ي","ya"],["ڽ","nya"],["ى","ye"]] },
      { t: "table", jawiCol: 1, head: [["Huruf","อักษร"],["Nama","ชื่อ"],["Contoh","ตัวอย่าง"],["Maksud","ความหมาย"]], rows: [
        ["چ", "ca", "cawan  چاون", "ถ้วย"], ["ڠ", "nga", "bunga  بوڠا", "ดอกไม้"], ["ڤ", "pa", "padi  ڤادي", "ต้นข้าว"],
        ["ݢ", "ga", "gigi  ݢيݢي", "ฟัน"], ["ڽ", "nya", "nyamuk  ڽاموق", "ยุง"], ["ۏ", "va", "video  ۏيديو", "วีดิทัศน์"]
      ]},
      { t: "note", ms: "Ejaan Jawi dalam buku ini mengikut kaedah Pedoman Umum Ejaan Jawi Bahasa Melayu (Dewan Bahasa dan Pustaka) dan Pusat Rujukan Persuratan Melayu (PRPM).",
        th: "การสะกดอักษรยาวีในหนังสือเล่มนี้ยึดตามหลักเกณฑ์ใน Pedoman Umum Ejaan Jawi Bahasa Melayu ของสภาภาษาและวรรณกรรมมาเลเซีย (DBP) และ PRPM" }
    ],
    latihan: [
      { q: ["Tulis huruf vokal yang hilang.", "เขียนสระที่หายไป"],
        items: [["1) b_ku (buku)", "หนังสือ"], ["2) m_ja (meja)", "โต๊ะ"], ["3) ik_n (ikan)", "ปลา"], ["4) ul_r (ular)", "งู"]] },
      { q: ["Garis konsonan gabungan dalam perkataan ini.", "ขีดเส้นใต้พยัญชนะประสมในคำต่อไปนี้"],
        items: [["bunga • nyanyi • khabar • syukur", ""]] },
      { q: ["Tulis nama huruf Jawi ini.", "เขียนชื่อของอักษรยาวีต่อไปนี้"],
        items: [["1) ب   2) م   3) ڠ   4) ڤ", ""]] }
    ],
    jawapan: [["1", "u, e, a, a"], ["2", "ng, ny (2 kali), kh, sy"], ["3", "ba, mim, nga, pa"]],
    nilai: ["Sebutan yang jelas membantu orang lain memahami kita dengan betul.", "การออกเสียงที่ชัดเจนช่วยให้ผู้อื่นเข้าใจเราได้ถูกต้อง"]
  },
  {
    id: "p5", unit: 1, ms: "Latihan dan Ulang Kaji", th: "ฝึกฝนและทบทวน", review: true,
    obj: [["Mengulang kaji salam, nombor, arahan dan bunyi huruf.", "ทบทวนคำทักทาย ตัวเลข คำสั่ง และเสียงตัวอักษร"]],
    blocks: [
      { t: "p", ms: "Bahagian ini mengulang kaji semua pelajaran dalam Unit 1. Buat latihan sendiri dahulu, kemudian semak jawapan bersama rakan.",
        th: "ส่วนนี้ทบทวนทุกบทในหน่วยที่ 1 ทำแบบฝึกหัดด้วยตนเองก่อน แล้วตรวจคำตอบร่วมกับเพื่อน" }
    ],
    latihan: [
      { q: ["Susun perkataan menjadi ayat.", "เรียงคำให้เป็นประโยค"],
        items: [["1) kamu / nama / siapa → ______________________", ""], ["2) tahun / saya / dua belas / umur → ______________________", ""], ["3) buku / sila / buka → ______________________", ""]] },
      { q: ["Kira dan tulis jawapan dalam perkataan.", "คิดเลขแล้วเขียนคำตอบเป็นคำ"],
        items: [["1) lapan + lima = ______________", ""], ["2) dua puluh + tiga puluh = ______________", ""], ["3) sepuluh − satu = ______________", ""]] },
      { q: ["Main peranan berpasangan: dua murid bertemu buat kali pertama.", "แสดงบทบาทสมมติเป็นคู่: นักเรียน 2 คนพบกันครั้งแรก"],
        items: [["Beri salam → perkenalkan diri → tanya umur → ucap selamat tinggal.", "ทักทาย → แนะนำตัว → ถามอายุ → กล่าวลา"]] }
    ],
    jawapan: [["1", "Siapa nama kamu? / Umur saya dua belas tahun. / Sila buka buku."], ["2", "tiga belas, lima puluh, sembilan"], ["3", "Jawapan bebas / ตอบได้หลากหลาย"]],
    nilai: ["Sedikit-sedikit, lama-lama jadi bukit. Ulang kaji setiap hari.", "ทีละน้อย นานไปก็กลายเป็นภูเขา ทบทวนบทเรียนทุกวัน"]
  },

  /* ================= UNIT 2 ================= */
  {
    id: "p6", unit: 2, ms: "Keluarga Saya", th: "ครอบครัวของฉัน",
    obj: [
      ["Menyebut ahli keluarga dalam bahasa Melayu.", "บอกชื่อเรียกสมาชิกในครอบครัวเป็นภาษามลายูได้"],
      ["Memperkenalkan keluarga dengan ayat mudah.", "แนะนำครอบครัวด้วยประโยคง่าย ๆ ได้"]
    ],
    blocks: [
      { t: "h", ms: "Kosa kata", th: "คำศัพท์" },
      { t: "vocab", rows: [
        ["keluarga", "ครอบครัว"], ["ayah / bapa", "พ่อ"], ["ibu / emak", "แม่"], ["abang", "พี่ชาย"], ["kakak", "พี่สาว"],
        ["adik", "น้อง"], ["datuk", "ปู่ ตา"], ["nenek", "ย่า ยาย"], ["anak", "ลูก"],
        ["bapa saudara", "ลุง อา น้า (ผู้ชาย)"], ["ibu saudara", "ป้า อา น้า (ผู้หญิง)"], ["sepupu", "ลูกพี่ลูกน้อง"]
      ]},
      { t: "h", ms: "Mari membaca", th: "มาอ่านกันเถอะ" },
      { t: "reading", title: "Keluarga Saya", paras: [
        ["Nama saya Fah. Keluarga saya ada lima orang. Ayah saya seorang guru. Ibu saya seorang jururawat.",
         "ฉันชื่อฟ้า ครอบครัวของฉันมี 5 คน พ่อของฉันเป็นครู แม่ของฉันเป็นพยาบาล"],
        ["Saya ada seorang abang dan seorang adik perempuan. Abang saya berumur lima belas tahun. Adik saya berumur sembilan tahun.",
         "ฉันมีพี่ชาย 1 คน และน้องสาว 1 คน พี่ชายของฉันอายุ 15 ปี น้องของฉันอายุ 9 ปี"],
        ["Saya sayang keluarga saya.", "ฉันรักครอบครัวของฉัน"]
      ]},
      { t: "pola", rows: [
        ["Kata nama + pemilik → kakak saya", "คำนาม + เจ้าของ → พี่สาวของฉัน"],
        ["Saya ada + bilangan + orang + ahli → Saya ada dua orang adik.", "ฉันมี + จำนวน + คน (ลักษณนาม) + สมาชิก → ฉันมีน้อง 2 คน"]
      ]}
    ],
    latihan: [
      { q: ["Jawab soalan berdasarkan bacaan.", "ตอบคำถามจากเรื่องที่อ่าน"],
        items: [["1) Berapa orang ahli keluarga Fah?", ""], ["2) Apakah pekerjaan ibu Fah?", ""], ["3) Berapakah umur adik Fah?", ""]] },
      { q: ["Tulis perkataan bahasa Melayu.", "เขียนคำภาษามลายู"],
        items: [["1) ______________", "พ่อ"], ["2) ______________", "แม่"], ["3) ______________", "พี่ชาย"], ["4) ______________", "น้อง"], ["5) ______________", "ย่า ยาย"]] },
      { q: ["Lukis salasilah keluarga kamu dan perkenalkan kepada kelas.", "วาดแผนผังครอบครัวของตนเองแล้วนำเสนอหน้าชั้น"],
        items: [["“Ini ayah saya. Nama ayah saya ...”", ""]] }
    ],
    jawapan: [["1", "Lima orang. / Jururawat. / Sembilan tahun."], ["2", "ayah (bapa), ibu (emak), abang, adik, nenek"], ["3", "Jawapan bebas / ตอบได้หลากหลาย"]],
    nilai: ["Hormati ibu bapa dan sayangi adik-beradik.", "เคารพพ่อแม่และรักพี่น้อง"]
  },
  {
    id: "p7", unit: 2, ms: "Di Sekolah", th: "ที่โรงเรียน",
    obj: [
      ["Menyebut tempat dan barang di sekolah.", "บอกชื่อสถานที่และสิ่งของในโรงเรียนได้"],
      ["Menggunakan “Ini” dan “Itu” dengan betul.", "ใช้ Ini และ Itu ได้ถูกต้อง"]
    ],
    blocks: [
      { t: "h", ms: "Kosa kata", th: "คำศัพท์" },
      { t: "vocab", rows: [
        ["sekolah", "โรงเรียน"], ["bilik darjah", "ห้องเรียน"], ["guru / cikgu", "ครู"], ["murid", "นักเรียน"], ["pengetua", "ผู้อำนวยการโรงเรียน"],
        ["perpustakaan", "ห้องสมุด"], ["kantin", "โรงอาหาร"], ["padang", "สนาม"], ["makmal", "ห้องปฏิบัติการ"], ["tandas", "ห้องน้ำ"],
        ["pensel", "ดินสอ"], ["pembaris", "ไม้บรรทัด"], ["pemadam", "ยางลบ"], ["meja", "โต๊ะ"], ["kerusi", "เก้าอี้"], ["papan putih", "กระดานไวท์บอร์ด"]
      ]},
      { t: "h", ms: "Mari bertutur", th: "มาพูดกันเถอะ" },
      { t: "dialog", lines: [
        ["Nok", "Siti, ini apa?", "สิตี นี่คืออะไร"],
        ["Siti", "Ini pembaris.", "นี่คือไม้บรรทัด"],
        ["Nok", "Itu apa?", "นั่นคืออะไร"],
        ["Siti", "Itu papan putih.", "นั่นคือกระดานไวท์บอร์ด"],
        ["Nok", "Di mana perpustakaan?", "ห้องสมุดอยู่ที่ไหน"],
        ["Siti", "Perpustakaan di sebelah kantin.", "ห้องสมุดอยู่ข้างโรงอาหาร"]
      ]},
      { t: "pola", rows: [
        ["Ini + benda (dekat) → Ini pensel.", "Ini ใช้กับสิ่งที่อยู่ใกล้ → นี่คือดินสอ"],
        ["Itu + benda (jauh) → Itu kerusi.", "Itu ใช้กับสิ่งที่อยู่ไกล → นั่นคือเก้าอี้"]
      ]}
    ],
    latihan: [
      { q: ["Isi tempat kosong dengan Ini atau Itu.", "เติม Ini หรือ Itu"],
        items: [["1) ________ pemadam saya.", "ถือยางลบอยู่ในมือ"], ["2) ________ padang sekolah.", "ชี้ไปที่สนามซึ่งอยู่ไกล"]] },
      { q: ["Tulis maksud perkataan.", "เขียนความหมายภาษาไทย"],
        items: [["1) perpustakaan   2) kantin   3) pemadam   4) pengetua", ""]] },
      { q: ["Tulis lima benda yang ada di dalam kelas kamu.", "เขียนชื่อสิ่งของในห้องเรียนของเธอ 5 อย่าง"], items: [["______________________________________", ""]] }
    ],
    jawapan: [["1", "Ini, Itu"], ["2", "ห้องสมุด, โรงอาหาร, ยางลบ, ผู้อำนวยการโรงเรียน"], ["3", "Jawapan bebas / ตอบได้หลากหลาย"]],
    nilai: ["Jagalah kebersihan kelas dan hormati guru.", "รักษาความสะอาดห้องเรียนและให้ความเคารพครู"]
  },
  {
    id: "p8", unit: 2, ms: "Warna dan Sifat", th: "สีและคุณสมบัติ",
    obj: [
      ["Menyebut warna dan sifat benda.", "บอกสีและลักษณะของสิ่งของได้"],
      ["Meletakkan kata sifat selepas kata nama.", "วางคำคุณศัพท์ไว้หลังคำนามได้ถูกต้อง"]
    ],
    blocks: [
      { t: "h", ms: "Warna", th: "สี" },
      { t: "vocab", rows: [
        ["merah", "แดง"], ["biru", "น้ำเงิน ฟ้า"], ["kuning", "เหลือง"], ["hijau", "เขียว"], ["putih", "ขาว"],
        ["hitam", "ดำ"], ["jingga / oren", "ส้ม"], ["ungu", "ม่วง"], ["merah jambu", "ชมพู"], ["coklat", "น้ำตาล"]
      ]},
      { t: "h", ms: "Sifat dan lawannya", th: "ลักษณะและคำตรงข้าม" },
      { t: "table", head: [["Sifat","ลักษณะ"],["Maksud","ความหมาย"],["Lawan","คำตรงข้าม"],["Maksud","ความหมาย"]], rows: [
        ["besar", "ใหญ่", "kecil", "เล็ก"], ["panjang", "ยาว", "pendek", "สั้น"], ["tinggi", "สูง", "rendah", "เตี้ย ต่ำ"],
        ["baru", "ใหม่", "lama", "เก่า"], ["bersih", "สะอาด", "kotor", "สกปรก"]
      ]},
      { t: "pola", rows: [
        ["Kata nama + kata sifat → beg merah, rumah besar", "คำนาม + คำคุณศัพท์ → กระเป๋าสีแดง บ้านหลังใหญ่ (เรียงเหมือนภาษาไทย)"],
        ["... berwarna + warna → Beg itu berwarna biru.", "... มีสี + สี → กระเป๋าใบนั้นสีน้ำเงิน"]
      ]},
      { t: "h", ms: "Mari membaca", th: "มาอ่านกันเถอะ" },
      { t: "reading", title: "Barang Saya", paras: [
        ["Beg saya berwarna biru. Beg itu besar dan baru. Pensel saya kuning dan panjang. Pemadam saya kecil dan putih.",
         "กระเป๋าของฉันสีน้ำเงิน กระเป๋าใบนั้นใหญ่และใหม่ ดินสอของฉันสีเหลืองและยาว ยางลบของฉันเล็กและสีขาว"]
      ]}
    ],
    latihan: [
      { q: ["Lengkapkan ayat dengan warna yang betul.", "เติมสีที่ถูกต้อง"],
        items: [["1) Langit berwarna ________.", "ท้องฟ้า"], ["2) Daun berwarna ________.", "ใบไม้"], ["3) Susu berwarna ________.", "นม"], ["4) Pisang masak berwarna ________.", "กล้วยสุก"]] },
      { q: ["Tulis lawan kata.", "เขียนคำตรงข้าม"],
        items: [["1) besar → ______   2) panjang → ______   3) tinggi → ______   4) bersih → ______", ""]] },
      { q: ["Huraikan beg kamu dalam dua ayat.", "บรรยายกระเป๋าของเธอ 2 ประโยค"], items: [["______________________________________", ""]] }
    ],
    jawapan: [["1", "biru, hijau, putih, kuning"], ["2", "kecil, pendek, rendah, kotor"], ["3", "Jawapan bebas / ตอบได้หลากหลาย"]],
    nilai: ["Setiap warna ada keindahannya. Begitu juga setiap orang ada kelebihan masing-masing.", "สีทุกสีมีความงามของตัวเอง คนแต่ละคนก็มีจุดเด่นของตนเช่นกัน"]
  },
  {
    id: "p9", unit: 2, ms: "Tempat", th: "สถานที่",
    obj: [
      ["Menyebut nama tempat di sekitar kita.", "บอกชื่อสถานที่รอบตัวได้"],
      ["Menggunakan kata sendi “di”, “ke” dan “dari”.", "ใช้คำบุพบท di, ke และ dari ได้ถูกต้อง"]
    ],
    blocks: [
      { t: "h", ms: "Kosa kata", th: "คำศัพท์" },
      { t: "vocab", rows: [
        ["rumah", "บ้าน"], ["pasar", "ตลาด"], ["kedai", "ร้านค้า"], ["hospital", "โรงพยาบาล"], ["masjid", "มัสยิด"],
        ["kuil", "วัด"], ["balai polis", "สถานีตำรวจ"], ["pejabat pos", "ที่ทำการไปรษณีย์"], ["bank", "ธนาคาร"],
        ["taman", "สวนสาธารณะ"], ["stesen kereta api", "สถานีรถไฟ"], ["pantai", "ชายหาด"]
      ]},
      { t: "pola", rows: [
        ["di + tempat → Ayah bekerja di hospital.", "ที่ + สถานที่ → พ่อทำงานที่โรงพยาบาล"],
        ["ke + tempat → Saya pergi ke pasar.", "ไปยัง + สถานที่ → ฉันไปตลาด"],
        ["dari + tempat → Kakak pulang dari sekolah.", "จาก + สถานที่ → พี่สาวกลับมาจากโรงเรียน"]
      ]},
      { t: "h", ms: "Mari bertutur", th: "มาพูดกันเถอะ" },
      { t: "dialog", lines: [
        ["Ploy", "Nurul, kamu hendak ke mana?", "นูรุล เธอจะไปไหน"],
        ["Nurul", "Saya hendak ke pasar dengan ibu.", "ฉันจะไปตลาดกับแม่"],
        ["Ploy", "Pasar itu di mana?", "ตลาดนั้นอยู่ที่ไหน"],
        ["Nurul", "Pasar itu di dekat stesen kereta api Hat Yai.", "ตลาดนั้นอยู่ใกล้สถานีรถไฟหาดใหญ่"],
        ["Ploy", "Saya pula baru balik dari perpustakaan.", "ส่วนฉันเพิ่งกลับมาจากห้องสมุด"]
      ]}
    ],
    latihan: [
      { q: ["Isi tempat kosong dengan di, ke atau dari.", "เติม di, ke หรือ dari"],
        items: [["1) Saya pergi ____ sekolah.", ""], ["2) Ayah bekerja ____ hospital.", ""], ["3) Adik baru pulang ____ pasar.", ""], ["4) Kami bermain ____ taman.", ""]] },
      { q: ["Padankan tempat dengan maksudnya.", "จับคู่สถานที่กับความหมาย"],
        items: [["1) hospital   2) pejabat pos   3) balai polis   4) kuil", "ก. วัด   ข. สถานีตำรวจ   ค. โรงพยาบาล   ง. ที่ทำการไปรษณีย์"]] }
    ],
    jawapan: [["1", "ke, di, dari, di"], ["2", "1–ค, 2–ง, 3–ข, 4–ก"]],
    nilai: ["Kenali tempat di sekitar kita dan jagalah kemudahan awam.", "รู้จักสถานที่รอบตัวและช่วยกันดูแลสาธารณสมบัติ"]
  },
  {
    id: "p10", unit: 2, ms: "Latihan dan Projek", th: "ฝึกฝนและโครงงาน", review: true,
    obj: [["Menggunakan kosa kata Unit 2 dalam projek berkumpulan.", "ใช้คำศัพท์ในหน่วยที่ 2 ทำโครงงานกลุ่มได้"]],
    blocks: [
      { t: "h", ms: "Projek: Peta Sekolah Saya", th: "โครงงาน: แผนผังโรงเรียนของฉัน" },
      { t: "steps", rows: [
        ["Bentuk kumpulan 4 orang.", "แบ่งกลุ่ม กลุ่มละ 4 คน"],
        ["Lukis peta sekolah pada kertas besar.", "วาดแผนผังโรงเรียนบนกระดาษแผ่นใหญ่"],
        ["Labelkan tempat dalam bahasa Melayu: perpustakaan, kantin, padang dan lain-lain.", "เขียนชื่อสถานที่เป็นภาษามลายู เช่น ห้องสมุด โรงอาหาร สนาม"],
        ["Warnakan peta dan tulis satu ayat untuk setiap tempat.", "ระบายสีแผนผังและเขียนประโยคบรรยายสถานที่ละ 1 ประโยค"],
        ["Bentangkan peta kepada kelas.", "นำเสนอแผนผังหน้าชั้นเรียน"]
      ]},
      { t: "pola", rows: [
        ["Ini perpustakaan. Perpustakaan di sebelah kantin.", "นี่คือห้องสมุด ห้องสมุดอยู่ข้างโรงอาหาร"],
        ["Padang sekolah kami besar dan hijau.", "สนามโรงเรียนของเราใหญ่และเขียวขจี"]
      ]}
    ],
    latihan: [
      { q: ["Susun perkataan menjadi ayat.", "เรียงคำให้เป็นประโยค"],
        items: [["1) besar / sekolah / saya → ______________________", ""], ["2) merah / beg / ini → ______________________", ""], ["3) ke / pergi / kakak / pasar → ______________________", ""]] }
    ],
    jawapan: [["1", "Sekolah saya besar. / Ini beg merah. / Kakak pergi ke pasar."]],
    nilai: ["Berat sama dipikul, ringan sama dijinjing. Bekerjasama menjadikan kerja lebih mudah.", "หนักก็ช่วยกันแบก เบาก็ช่วยกันหิ้ว การร่วมมือกันทำให้งานง่ายขึ้น"]
  },

  /* ================= UNIT 3 ================= */
  {
    id: "p11", unit: 3, ms: "Waktu dan Hari", th: "เวลาและวัน",
    obj: [
      ["Menyebut nama hari dalam seminggu.", "บอกชื่อวันในสัปดาห์ได้"],
      ["Bertanya dan memberitahu waktu.", "ถามและบอกเวลาได้"]
    ],
    blocks: [
      { t: "h", ms: "Hari dalam seminggu", th: "วันในสัปดาห์" },
      { t: "vocab", rows: [
        ["Isnin", "วันจันทร์"], ["Selasa", "วันอังคาร"], ["Rabu", "วันพุธ"], ["Khamis", "วันพฤหัสบดี"],
        ["Jumaat", "วันศุกร์"], ["Sabtu", "วันเสาร์"], ["Ahad", "วันอาทิตย์"],
        ["semalam", "เมื่อวาน"], ["hari ini", "วันนี้"], ["esok", "พรุ่งนี้"]
      ]},
      { t: "h", ms: "Waktu", th: "เวลา" },
      { t: "table", head: [["Jam","นาฬิกา"],["Bahasa Melayu","ภาษามลายู"],["Maksud","ความหมาย"]], rows: [
        ["7:00", "pukul tujuh pagi", "7 โมงเช้า"], ["8:30", "pukul lapan setengah pagi", "8 โมงครึ่ง"],
        ["12:00", "pukul dua belas tengah hari", "เที่ยงวัน"], ["3:15", "pukul tiga suku petang", "บ่าย 3 โมง 15 นาที"],
        ["8:00", "pukul lapan malam", "2 ทุ่ม"]
      ]},
      { t: "note", ms: "“Setengah” bermaksud 30 minit dan “suku” bermaksud 15 minit. Tambah pagi, tengah hari, petang atau malam selepas waktu.",
        th: "setengah คือ 30 นาที และ suku คือ 15 นาที ต่อท้ายด้วย pagi, tengah hari, petang หรือ malam เพื่อบอกช่วงเวลา" },
      { t: "dialog", lines: [
        ["Fah", "Hari ini hari apa?", "วันนี้วันอะไร"],
        ["Aminah", "Hari ini hari Isnin.", "วันนี้วันจันทร์"],
        ["Fah", "Pukul berapa kelas bahasa Melayu?", "คาบภาษามลายูกี่โมง"],
        ["Aminah", "Pukul sepuluh pagi.", "10 โมงเช้า"]
      ]}
    ],
    latihan: [
      { q: ["Tulis hari selepasnya.", "เขียนชื่อวันถัดไป"],
        items: [["1) Isnin → ________   2) Khamis → ________   3) Sabtu → ________", ""]] },
      { q: ["Tulis waktu dalam perkataan.", "เขียนเวลาเป็นคำ"],
        items: [["1) 7:00 pagi → ______________________", ""], ["2) 8:30 pagi → ______________________", ""], ["3) 3:15 petang → ______________________", ""]] },
      { q: ["Jawab: Hari ini hari apa? Pukul berapa sekarang?", "ตอบคำถาม: วันนี้วันอะไร ตอนนี้กี่โมง"], items: [["______________________________________", ""]] }
    ],
    jawapan: [["1", "Selasa, Jumaat, Ahad"], ["2", "pukul tujuh pagi, pukul lapan setengah pagi, pukul tiga suku petang"], ["3", "Jawapan bebas / ตอบได้หลากหลาย"]],
    nilai: ["Menepati masa ialah tanda kita menghormati orang lain.", "การตรงต่อเวลาแสดงว่าเราให้เกียรติผู้อื่น"]
  },
  {
    id: "p12", unit: 3, ms: "Rutin Harian", th: "กิจวัตรประจำวัน",
    obj: [
      ["Menyebut aktiviti harian dengan kata kerja yang betul.", "บอกกิจกรรมประจำวันด้วยคำกริยาที่ถูกต้องได้"],
      ["Menceritakan rutin harian mengikut urutan.", "เล่ากิจวัตรประจำวันตามลำดับได้"]
    ],
    blocks: [
      { t: "h", ms: "Kosa kata", th: "คำศัพท์" },
      { t: "vocab", rows: [
        ["bangun tidur", "ตื่นนอน"], ["mandi", "อาบน้ำ"], ["gosok gigi", "แปรงฟัน"], ["memakai baju seragam", "สวมชุดนักเรียน"],
        ["bersarapan", "รับประทานอาหารเช้า"], ["pergi ke sekolah", "ไปโรงเรียน"], ["belajar", "เรียน"], ["makan tengah hari", "รับประทานอาหารกลางวัน"],
        ["balik ke rumah", "กลับบ้าน"], ["membuat kerja rumah", "ทำการบ้าน"], ["membaca buku", "อ่านหนังสือ"], ["tidur", "นอน"]
      ]},
      { t: "h", ms: "Mari membaca", th: "มาอ่านกันเถอะ" },
      { t: "reading", title: "Rutin Harian Siti", paras: [
        ["Siti bangun tidur pada pukul lima setengah pagi. Dia mandi dan memakai baju seragam. Kemudian, dia bersarapan bersama keluarga.",
         "สิตีตื่นนอนตอนตี 5 ครึ่ง เธออาบน้ำและสวมชุดนักเรียน จากนั้นเธอรับประทานอาหารเช้ากับครอบครัว"],
        ["Pada pukul tujuh pagi, ayah menghantar Siti ke sekolah. Selepas sekolah, Siti membuat kerja rumah.",
         "เวลา 7 โมงเช้า พ่อไปส่งสิตีที่โรงเรียน หลังเลิกเรียน สิตีทำการบ้าน"],
        ["Pada waktu malam, dia membaca buku. Akhirnya, dia tidur pada pukul sembilan setengah malam.",
         "ตอนกลางคืนเธออ่านหนังสือ สุดท้ายเธอเข้านอนตอน 3 ทุ่มครึ่ง"]
      ]},
      { t: "pola", rows: [
        ["Kemudian, ... / Selepas itu, ... / Akhirnya, ...", "จากนั้น ... / หลังจากนั้น ... / สุดท้าย ..."],
        ["Pelaku + perbuatan + waktu → Saya mandi pada pukul enam pagi.", "ผู้กระทำ + กริยา + เวลา → ฉันอาบน้ำตอน 6 โมงเช้า"]
      ]}
    ],
    latihan: [
      { q: ["Jawab soalan berdasarkan bacaan.", "ตอบคำถามจากเรื่องที่อ่าน"],
        items: [["1) Pukul berapa Siti bangun tidur?", ""], ["2) Siapakah yang menghantar Siti ke sekolah?", ""], ["3) Apakah yang Siti buat pada waktu malam?", ""]] },
      { q: ["Susun aktiviti mengikut urutan.", "เรียงกิจกรรมตามลำดับ"],
        items: [["bersarapan • bangun tidur • pergi ke sekolah • mandi", ""]] },
      { q: ["Tulis rutin harian kamu dalam lima ayat.", "เขียนกิจวัตรประจำวันของเธอ 5 ประโยค"], items: [["______________________________________", ""]] }
    ],
    jawapan: [["1", "Pukul lima setengah pagi. / Ayah. / Membaca buku."], ["2", "bangun tidur → mandi → bersarapan → pergi ke sekolah"], ["3", "Jawapan bebas / ตอบได้หลากหลาย"]],
    nilai: ["Rutin yang teratur membantu kita belajar dengan lebih baik.", "กิจวัตรที่เป็นระเบียบช่วยให้เราเรียนได้ดีขึ้น"]
  },
  {
    id: "p13", unit: 3, ms: "Makanan dan Minuman", th: "อาหารและเครื่องดื่ม",
    obj: [
      ["Menyebut nama makanan, minuman dan rasa.", "บอกชื่ออาหาร เครื่องดื่ม และรสชาติได้"],
      ["Membeli makanan di kantin dengan sopan.", "ซื้ออาหารที่โรงอาหารได้อย่างสุภาพ"]
    ],
    blocks: [
      { t: "h", ms: "Kosa kata", th: "คำศัพท์" },
      { t: "vocab", rows: [
        ["nasi", "ข้าวสวย"], ["roti", "ขนมปัง โรตี"], ["mi", "บะหมี่"], ["ayam goreng", "ไก่ทอด"], ["ikan", "ปลา"], ["sayur", "ผัก"],
        ["buah-buahan", "ผลไม้"], ["telur", "ไข่"], ["air kosong", "น้ำเปล่า"], ["teh tarik", "ชาชัก"], ["susu", "นม"], ["jus oren", "น้ำส้ม"]
      ]},
      { t: "h", ms: "Rasa", th: "รสชาติ" },
      { t: "vocab", rows: [["sedap", "อร่อย"], ["manis", "หวาน"], ["masam", "เปรี้ยว"], ["masin", "เค็ม"], ["pedas", "เผ็ด"], ["pahit", "ขม"]] },
      { t: "h", ms: "Di kantin", th: "ที่โรงอาหาร" },
      { t: "dialog", lines: [
        ["Penjual", "Adik hendak makan apa?", "หนูจะกินอะไรจ๊ะ"],
        ["Dao", "Saya hendak nasi ayam dan air kosong.", "หนูขอข้าวมันไก่และน้ำเปล่าค่ะ"],
        ["Penjual", "Baik. Ini nasi ayam dan air kosong.", "ได้จ้ะ นี่ข้าวมันไก่และน้ำเปล่า"],
        ["Dao", "Berapa harganya?", "ราคาเท่าไรคะ"],
        ["Penjual", "Semuanya empat puluh baht.", "ทั้งหมด 40 บาทจ้ะ"],
        ["Dao", "Ini wangnya. Terima kasih.", "นี่เงินค่ะ ขอบคุณค่ะ"]
      ]},
      { t: "pola", rows: [
        ["Saya hendak + makanan → Saya hendak roti.", "ฉันต้องการ + อาหาร → ฉันขอโรตี"],
        ["Saya suka + makanan + kerana + rasa → Saya suka mangga kerana manis.", "ฉันชอบ + อาหาร + เพราะ + รส → ฉันชอบมะม่วงเพราะหวาน"]
      ]}
    ],
    latihan: [
      { q: ["Tulis rasa yang betul.", "เขียนรสชาติที่ถูกต้อง"],
        items: [["1) Gula rasanya ________.", "น้ำตาล"], ["2) Garam rasanya ________.", "เกลือ"], ["3) Cili rasanya ________.", "พริก"], ["4) Limau rasanya ________.", "มะนาว"]] },
      { q: ["Lengkapkan dialog.", "เติมบทสนทนาให้สมบูรณ์"],
        items: [["A: Adik hendak minum ________?   B: Saya hendak susu.", ""], ["A: Berapa ________?   B: Lima belas baht.", ""]] },
      { q: ["Tulis makanan kegemaran kamu dan sebabnya.", "เขียนอาหารที่ชอบและเหตุผล"], items: [["Saya suka ________ kerana ________.", ""]] }
    ],
    jawapan: [["1", "manis, masin, pedas, masam"], ["2", "apa, harganya"], ["3", "Jawapan bebas / ตอบได้หลากหลาย"]],
    nilai: ["Makanlah makanan yang berkhasiat dan jangan membazir.", "รับประทานอาหารที่มีประโยชน์และอย่ากินทิ้งกินขว้าง"]
  },
  {
    id: "p14", unit: 3, ms: "Emosi dan Perasaan", th: "อารมณ์และความรู้สึก",
    obj: [
      ["Menyebut perasaan dalam bahasa Melayu.", "บอกความรู้สึกเป็นภาษามลายูได้"],
      ["Memberi sebab dengan perkataan “kerana”.", "ให้เหตุผลด้วยคำว่า kerana ได้"]
    ],
    blocks: [
      { t: "h", ms: "Kosa kata", th: "คำศัพท์" },
      { t: "vocab", rows: [
        ["gembira", "ดีใจ มีความสุข"], ["sedih", "เศร้า"], ["marah", "โกรธ"], ["takut", "กลัว"], ["penat", "เหนื่อย"],
        ["lapar", "หิว (ข้าว)"], ["dahaga", "หิวน้ำ"], ["sakit", "ป่วย เจ็บ"], ["bosan", "เบื่อ"], ["terkejut", "ตกใจ"]
      ]},
      { t: "dialog", lines: [
        ["Nok", "Kenapa kamu nampak sedih, Siti?", "สิตี ทำไมเธอดูเศร้า"],
        ["Siti", "Saya sedih kerana buku saya hilang.", "ฉันเศร้าเพราะหนังสือของฉันหาย"],
        ["Nok", "Jangan sedih. Mari kita cari bersama-sama.", "อย่าเศร้าเลย มาช่วยกันหานะ"],
        ["Siti", "Terima kasih, Nok. Sekarang saya berasa gembira.", "ขอบคุณนะนก ตอนนี้ฉันรู้สึกดีใจแล้ว"]
      ]},
      { t: "pola", rows: [
        ["Saya berasa + perasaan + kerana + sebab", "ฉันรู้สึก + อารมณ์ + เพราะ + เหตุผล"],
        ["Saya berasa penat kerana saya bermain bola jaring.", "ฉันรู้สึกเหนื่อยเพราะเล่นเน็ตบอล"]
      ]}
    ],
    latihan: [
      { q: ["Apakah perasaan kamu dalam situasi ini?", "เธอจะรู้สึกอย่างไรในสถานการณ์ต่อไปนี้"],
        items: [["1) Saya mendapat hadiah. → ________", ""], ["2) Saya belum makan sejak pagi. → ________", ""], ["3) Saya melihat seekor ular. → ________", ""], ["4) Saya berlari selama satu jam. → ________", ""]] },
      { q: ["Lengkapkan ayat dengan sebab kamu sendiri.", "เติมประโยคด้วยเหตุผลของตนเอง"], items: [["Saya berasa gembira kerana ______________________.", ""]] }
    ],
    jawapan: [["1", "gembira, lapar, takut, penat"], ["2", "Jawapan bebas / ตอบได้หลากหลาย"]],
    nilai: ["Kongsilah perasaan kita dengan keluarga atau guru yang kita percayai.", "เล่าความรู้สึกของเราให้ครอบครัวหรือครูที่ไว้ใจฟัง"]
  },
  {
    id: "p15", unit: 3, ms: "Latihan Berdialog", th: "ฝึกบทสนทนา", review: true,
    obj: [["Bertutur dalam situasi harian dengan lancar dan sopan.", "สนทนาในสถานการณ์ประจำวันได้คล่องและสุภาพ"]],
    blocks: [
      { t: "h", ms: "Contoh dialog: Di perpustakaan", th: "ตัวอย่างบทสนทนา: ที่ห้องสมุด" },
      { t: "dialog", lines: [
        ["Murid", "Selamat pagi, puan. Saya hendak meminjam buku ini.", "สวัสดีตอนเช้าค่ะ หนูขอยืมหนังสือเล่มนี้ค่ะ"],
        ["Pustakawan", "Boleh. Tunjukkan kad perpustakaan kamu.", "ได้จ้ะ ขอดูบัตรห้องสมุดหน่อย"],
        ["Murid", "Ini kad saya. Bila saya perlu memulangkan buku ini?", "นี่บัตรของหนูค่ะ ต้องคืนหนังสือเมื่อไรคะ"],
        ["Pustakawan", "Pada hari Jumaat minggu depan.", "วันศุกร์หน้าจ้ะ"],
        ["Murid", "Baik. Terima kasih, puan.", "ได้ค่ะ ขอบคุณค่ะ"]
      ]},
      { t: "h", ms: "Pilih satu situasi", th: "เลือกสถานการณ์ 1 สถานการณ์" },
      { t: "steps", rows: [
        ["Membeli makanan di kantin.", "ซื้ออาหารที่โรงอาหาร"],
        ["Meminjam buku di perpustakaan.", "ยืมหนังสือที่ห้องสมุด"],
        ["Bertanya waktu dan hari kepada rakan.", "ถามเวลาและวันจากเพื่อน"],
        ["Bertanya perasaan rakan yang sedih.", "ถามความรู้สึกของเพื่อนที่กำลังเศร้า"]
      ]},
      { t: "table", head: [["Kriteria","เกณฑ์"],["Maksud","ความหมาย"],["Markah","คะแนน"]], rows: [
        ["Sebutan", "ออกเสียงถูกต้องชัดเจน", "4"], ["Kelancaran", "พูดต่อเนื่องไม่ติดขัด", "4"], ["Bahasa badan", "ท่าทางและน้ำเสียงเหมาะสม", "2"]
      ]}
    ],
    latihan: [
      { q: ["Tulis dialog pendek (6 baris) untuk situasi pilihan kamu, kemudian lakonkan bersama rakan.", "เขียนบทสนทนาสั้น ๆ 6 บรรทัดตามสถานการณ์ที่เลือก แล้วแสดงกับเพื่อน"], items: [["______________________________________", ""]] }
    ],
    jawapan: [["1", "Jawapan bebas / ตอบได้หลากหลาย"]],
    nilai: ["Bercakap dengan sopan membuatkan orang lain senang hati.", "การพูดอย่างสุภาพทำให้ผู้อื่นสบายใจ"]
  },

  /* ================= UNIT 4 ================= */
  {
    id: "p16", unit: 4, ms: "Adat dan Perayaan", th: "ธรรมเนียมและเทศกาล",
    obj: [
      ["Mengenal perayaan utama di Malaysia dan Thailand.", "รู้จักเทศกาลสำคัญในมาเลเซียและไทย"],
      ["Mengamalkan adat sopan santun masyarakat Melayu.", "ปฏิบัติตามมารยาทของชาวมลายูได้"]
    ],
    blocks: [
      { t: "h", ms: "Perayaan dan ucapan", th: "เทศกาลและคำอวยพร" },
      { t: "table", head: [["Perayaan","เทศกาล"],["Ucapan","คำอวยพร"],["Maksud","ความหมาย"]], rows: [
        ["Hari Raya Aidilfitri", "Selamat Hari Raya, maaf zahir dan batin", "สุขสันต์วันรายอ ขออภัยทั้งกายและใจ"],
        ["Hari Raya Aidiladha", "Selamat Hari Raya Aidiladha", "สุขสันต์วันรายอฮัจญี"],
        ["Tahun Baru Cina", "Selamat Tahun Baru Cina", "สุขสันต์วันตรุษจีน"],
        ["Deepavali", "Selamat Hari Deepavali", "สุขสันต์วันทีปาวลี"],
        ["Songkran", "Selamat Hari Songkran", "สุขสันต์วันสงกรานต์"],
        ["Hari Merdeka (31 Ogos)", "Selamat Hari Merdeka", "สุขสันต์วันชาติมาเลเซีย"]
      ]},
      { t: "h", ms: "Mari membaca", th: "มาอ่านกันเถอะ" },
      { t: "reading", title: "Rumah Terbuka", paras: [
        ["Hari Raya Aidilfitri disambut selepas sebulan berpuasa. Pada pagi Hari Raya, keluarga Aminah memakai baju baharu dan bersalaman dengan datuk dan nenek.",
         "วันรายออีดิลฟิตรีจัดขึ้นหลังจากถือศีลอดครบหนึ่งเดือน เช้าวันรายอ ครอบครัวของอามีนะห์สวมเสื้อผ้าใหม่และสลามขอพรปู่ย่าตายาย"],
        ["Pada waktu petang, keluarga Aminah mengadakan rumah terbuka. Ploy dan Dao datang ke rumah Aminah. Mereka makan ketupat dan rendang bersama-sama.",
         "ตอนบ่าย ครอบครัวของอามีนะห์เปิดบ้านต้อนรับแขก พลอยและดาวมาที่บ้านอามีนะห์ พวกเขารับประทานเกอตูปัตและเรินดังด้วยกัน"]
      ]},
      { t: "h", ms: "Adat sopan santun", th: "มารยาทที่ควรรู้" },
      { t: "steps", rows: [
        ["Bersalaman dengan orang tua sebagai tanda hormat.", "สลามผู้ใหญ่เพื่อแสดงความเคารพ"],
        ["Memberi dan menerima barang dengan tangan kanan.", "ส่งและรับสิ่งของด้วยมือขวา"],
        ["Membuka kasut sebelum masuk ke rumah.", "ถอดรองเท้าก่อนเข้าบ้าน"],
        ["Menunduk sedikit apabila lalu di hadapan orang tua.", "ก้มตัวเล็กน้อยเมื่อเดินผ่านหน้าผู้ใหญ่"]
      ]}
    ],
    latihan: [
      { q: ["Tulis Betul atau Salah.", "เขียน Betul (ถูก) หรือ Salah (ผิด)"],
        items: [["1) Kita memberi barang dengan tangan kiri. ______", ""], ["2) Kita membuka kasut sebelum masuk ke rumah. ______", ""], ["3) Hari Merdeka Malaysia ialah pada 31 Ogos. ______", ""]] },
      { q: ["Tulis ucapan yang sesuai.", "เขียนคำอวยพรที่เหมาะสม"], items: [["1) Hari Raya Aidilfitri → ______________________", ""], ["2) Songkran → ______________________", ""]] },
      { q: ["Nyatakan dua persamaan Hari Raya dan Songkran.", "บอกความเหมือนระหว่างวันรายอกับวันสงกรานต์ 2 ข้อ"], items: [["______________________________________", ""]] }
    ],
    jawapan: [["1", "Salah, Betul, Betul"], ["2", "Selamat Hari Raya, maaf zahir dan batin / Selamat Hari Songkran"], ["3", "Contoh: balik kampung, menghormati orang tua / เช่น กลับบ้านเกิด เคารพผู้ใหญ่"]],
    nilai: ["Hormatilah perayaan rakan yang berlainan budaya dan agama.", "ให้เกียรติเทศกาลของเพื่อนที่ต่างวัฒนธรรมและศาสนา"]
  },
  {
    id: "p17", unit: 4, ms: "Makanan Tradisi", th: "อาหารพื้นเมือง",
    obj: [
      ["Mengenal makanan tradisi Melayu.", "รู้จักอาหารพื้นเมืองของชาวมลายู"],
      ["Menerangkan makanan dengan ayat mudah.", "บรรยายอาหารด้วยประโยคง่าย ๆ ได้"]
    ],
    blocks: [
      { t: "h", ms: "Kosa kata", th: "คำศัพท์" },
      { t: "vocab", rows: [
        ["nasi lemak", "ข้าวมันกะทิ"], ["roti canai", "โรตีจาไน"], ["satay", "สะเต๊ะ"], ["ketupat", "ข้าวต้มห่อใบมะพร้าว"],
        ["rendang", "แกงเรินดัง"], ["nasi kerabu", "ข้าวยำ"], ["laksa", "ขนมจีนน้ำยาแบบมลายู"], ["kuih", "ขนม"],
        ["santan", "กะทิ"], ["rempah", "เครื่องเทศ"], ["sambal", "น้ำพริกแบบมลายู"]
      ]},
      { t: "h", ms: "Mari membaca", th: "มาอ่านกันเถอะ" },
      { t: "reading", title: "Nasi Lemak", paras: [
        ["Nasi lemak ialah makanan yang sangat popular di Malaysia. Nasinya dimasak dengan santan dan daun pandan. Nasi lemak dimakan dengan sambal, ikan bilis, kacang, telur rebus dan timun.",
         "ข้าวมันกะทิเป็นอาหารที่นิยมมากในมาเลเซีย ข้าวหุงด้วยกะทิและใบเตย รับประทานกับซัมบัล ปลาไส้ตันทอด ถั่ว ไข่ต้ม และแตงกวา"],
        ["Di selatan Thailand, kita juga boleh menemui roti canai, satay dan nasi kerabu.",
         "ในภาคใต้ของไทย เราก็พบโรตี สะเต๊ะ และข้าวยำได้เช่นกัน"]
      ]}
    ],
    latihan: [
      { q: ["Padankan makanan dengan keterangannya.", "จับคู่อาหารกับคำอธิบาย"],
        items: [["1) ketupat   2) satay   3) roti canai   4) rendang", ""],
                ["A. Daging dicucuk dan dibakar.  B. Nasi dibungkus dengan daun kelapa.  C. Daging dimasak lama dengan santan dan rempah.  D. Roti leper dimakan dengan kuah kari.", ""]] },
      { q: ["Tulis dua makanan tradisi yang ada di Malaysia dan di selatan Thailand.", "เขียนอาหารพื้นเมือง 2 อย่างที่พบทั้งในมาเลเซียและภาคใต้ของไทย"], items: [["______________________________________", ""]] }
    ],
    jawapan: [["1", "1–B, 2–A, 3–D, 4–C"], ["2", "Contoh: roti canai, satay, nasi kerabu / เช่น โรตี สะเต๊ะ ข้าวยำ"]],
    nilai: ["Makanan tradisi ialah warisan bangsa yang perlu kita kekalkan.", "อาหารพื้นเมืองเป็นมรดกที่เราควรรักษาไว้"]
  },
  {
    id: "p18", unit: 4, ms: "Pengenalan Loghat", th: "แนะนำภาษาถิ่น",
    obj: [
      ["Mengetahui perbezaan bahasa Melayu standard dengan loghat.", "รู้ความแตกต่างระหว่างภาษามลายูมาตรฐานกับภาษาถิ่น"],
      ["Menukar ayat loghat kepada bahasa standard.", "เปลี่ยนประโยคภาษาถิ่นเป็นภาษามาตรฐานได้"]
    ],
    blocks: [
      { t: "p", ms: "Bahasa Melayu mempunyai banyak loghat, misalnya loghat Kelantan, loghat Utara dan loghat Melayu Patani di selatan Thailand. Bahasa Melayu standard digunakan dalam penulisan, sekolah, berita dan majlis rasmi.",
        th: "ภาษามลายูมีภาษาถิ่นหลายถิ่น เช่น ถิ่นกลันตัน ถิ่นภาคเหนือของมาเลเซีย และภาษามลายูปาตานีในภาคใต้ของไทย ส่วนภาษามลายูมาตรฐานใช้ในงานเขียน โรงเรียน ข่าว และงานพิธีการ" },
      { t: "table", head: [["Bahasa standard","ภาษามาตรฐาน"],["Loghat Patani","ภาษาถิ่นปาตานี"],["Maksud","ความหมาย"]], rows: [
        ["apa", "gapo", "อะไร"], ["tidak", "dok", "ไม่"], ["pergi", "gi", "ไป"], ["sudah", "doh", "แล้ว"], ["mana", "mano", "ไหน"],
        ["kamu", "demo / mu", "เธอ คุณ"], ["makan", "make", "กิน"], ["ikan", "ike", "ปลา"], ["rumah", "rumoh", "บ้าน"]
      ]},
      { t: "note", ms: "Dalam loghat Patani, bunyi akhir “-an” sering menjadi “-e” dan “-ah” menjadi “-oh”. Contoh: makan → make, rumah → rumoh.",
        th: "ในภาษาถิ่นปาตานี เสียงท้าย -an มักกลายเป็น -e และ -ah กลายเป็น -oh เช่น makan → make, rumah → rumoh" }
    ],
    latihan: [
      { q: ["Tukar ayat loghat kepada bahasa Melayu standard.", "เปลี่ยนประโยคภาษาถิ่นเป็นภาษามลายูมาตรฐาน"],
        items: [["1) Gi mano? → ______________________", ""], ["2) Make doh? → ______________________", ""], ["3) Gapo ni? → ______________________", ""]] },
      { q: ["Tanya keluarga kamu tiga perkataan loghat dan tulis maksudnya dalam bahasa standard.", "ถามคนในครอบครัวถึงคำภาษาถิ่น 3 คำ แล้วเขียนคำภาษามาตรฐานที่ตรงกัน"], items: [["______________________________________", ""]] }
    ],
    jawapan: [["1", "Pergi ke mana? / Sudah makan? / Apa ini?"], ["2", "Jawapan bebas / ตอบได้หลากหลาย"]],
    nilai: ["Banggalah dengan loghat sendiri, dan kuasailah bahasa Melayu standard.", "ภูมิใจในภาษาถิ่นของตน และฝึกใช้ภาษามลายูมาตรฐานให้คล่อง"]
  },
  {
    id: "p19", unit: 4, ms: "Lagu dan Cerita", th: "เพลงและนิทาน",
    obj: [
      ["Membaca pantun dan memahami maksudnya.", "อ่านปันตุนและเข้าใจความหมาย"],
      ["Memahami cerita rakyat Melayu dan pengajarannya.", "เข้าใจนิทานพื้นบ้านมลายูและข้อคิด"]
    ],
    blocks: [
      { t: "h", ms: "Pantun", th: "ปันตุน (บทกลอนมลายู)" },
      { t: "p", ms: "Pantun ialah puisi Melayu tradisional. Pantun empat kerat mempunyai empat baris dengan rima a-b-a-b. Baris 1 dan 2 ialah pembayang. Baris 3 dan 4 ialah maksud.",
        th: "ปันตุนเป็นกวีนิพนธ์ดั้งเดิมของมลายู ปันตุน 4 บรรทัดมีสัมผัสแบบ a-b-a-b บรรทัดที่ 1 และ 2 เป็นบทนำ บรรทัดที่ 3 และ 4 เป็นเนื้อความ" },
      { t: "poem", lines: [
        ["Pisang emas dibawa belayar,", "กล้วยหอมทองนำลงเรือไป"],
        ["Masak sebiji di atas peti;", "สุกหนึ่งลูกอยู่บนหีบ"],
        ["Hutang emas boleh dibayar,", "หนี้ทองยังชดใช้ได้"],
        ["Hutang budi dibawa mati.", "หนี้บุญคุณติดตัวไปจนตาย"]
      ]},
      { t: "note", ms: "Dengar dan nyanyikan lagu rakyat “Rasa Sayang” bersama guru.", th: "ฟังและร้องเพลงพื้นบ้าน “Rasa Sayang” พร้อมกับครู" },
      { t: "h", ms: "Cerita rakyat", th: "นิทานพื้นบ้าน" },
      { t: "reading", title: "Sang Kancil dan Buaya", paras: [
        ["Sang Kancil ingin makan buah-buahan di seberang sungai. Tetapi di dalam sungai ada banyak buaya.",
         "กระจงอยากกินผลไม้ที่อีกฝั่งแม่น้ำ แต่ในแม่น้ำมีจระเข้อยู่มากมาย"],
        ["Sang Kancil berkata, “Raja menyuruh saya mengira semua buaya. Sila berbaris dari tebing ke tebing.”",
         "กระจงพูดว่า “พระราชาสั่งให้ข้านับจระเข้ทุกตัว ช่วยเรียงแถวจากฝั่งนี้ไปถึงฝั่งโน้นด้วย”"],
        ["Buaya pun berbaris. Sang Kancil melompat di atas belakang buaya sambil mengira, “Satu, dua, tiga ...” Akhirnya, dia sampai di seberang sungai.",
         "จระเข้จึงเรียงแถว กระจงกระโดดไปบนหลังจระเข้พลางนับ “หนึ่ง สอง สาม ...” ในที่สุดก็ข้ามไปถึงอีกฝั่ง"]
      ]}
    ],
    latihan: [
      { q: ["Jawab soalan berdasarkan cerita.", "ตอบคำถามจากนิทาน"],
        items: [["1) Mengapakah Sang Kancil hendak ke seberang sungai?", ""], ["2) Mengapakah buaya berbaris?", ""], ["3) Apakah pengajaran cerita ini?", ""]] },
      { q: ["Baris manakah maksud pantun di atas?", "บรรทัดใดของปันตุนข้างต้นเป็นเนื้อความ"], items: [["______________________________________", ""]] }
    ],
    jawapan: [["1", "Untuk makan buah-buahan. / Kerana Sang Kancil kata dia mahu mengira buaya. / Gunakan akal untuk menyelesaikan masalah."], ["2", "Baris 3 dan 4"]],
    nilai: ["Pantun dan cerita rakyat menyimpan nasihat orang tua-tua untuk kita.", "ปันตุนและนิทานพื้นบ้านเก็บคำสอนของคนรุ่นก่อนไว้ให้เรา"]
  },
  {
    id: "p20", unit: 4, ms: "Projek Akhir dan Penilaian", th: "โครงงานและประเมินผล", review: true,
    obj: [["Menghasilkan dan membentangkan projek tentang bahasa dan budaya Melayu.", "สร้างสรรค์และนำเสนอโครงงานเกี่ยวกับภาษาและวัฒนธรรมมลายูได้"]],
    blocks: [
      { t: "h", ms: "Pilih satu projek", th: "เลือกโครงงาน 1 หัวข้อ" },
      { t: "steps", rows: [
        ["Poster makanan tradisi dengan lima ayat penerangan.", "โปสเตอร์อาหารพื้นเมือง พร้อมคำบรรยาย 5 ประโยค"],
        ["Lakonan “Rumah Terbuka” selama 3 minit.", "ละครสั้น “เปิดบ้านวันรายอ” ความยาว 3 นาที"],
        ["Persembahan pantun dan cerita rakyat.", "การแสดงอ่านปันตุนและเล่านิทานพื้นบ้าน"],
        ["Video pendek 1 minit: “Sekolah Saya”.", "วิดีโอสั้น 1 นาที: “โรงเรียนของฉัน”"]
      ]},
      { t: "h", ms: "Rubrik penilaian", th: "เกณฑ์การประเมิน" },
      { t: "table", head: [["Kriteria","เกณฑ์"],["4","ดีมาก"],["3","ดี"],["2","พอใช้"],["1","ปรับปรุง"]], rows: [
        ["Kandungan", "Lengkap dan tepat", "Hampir lengkap", "Kurang lengkap", "Tidak lengkap"],
        ["Bahasa", "Ayat betul", "Sedikit kesalahan", "Banyak kesalahan", "Sukar difahami"],
        ["Sebutan", "Jelas dan lancar", "Jelas", "Kurang jelas", "Tidak jelas"],
        ["Kerjasama", "Semua ahli aktif", "Kebanyakan aktif", "Sebahagian aktif", "Tidak bekerjasama"]
      ]},
      { t: "h", ms: "Senarai semak diri", th: "แบบตรวจสอบตนเอง" },
      { t: "check", rows: [
        ["Saya boleh memberi salam dan memperkenalkan diri.", "ฉันทักทายและแนะนำตัวได้"],
        ["Saya boleh membilang hingga 100 dan memberitahu umur.", "ฉันนับเลขถึง 100 และบอกอายุได้"],
        ["Saya boleh memperkenalkan keluarga dan sekolah saya.", "ฉันแนะนำครอบครัวและโรงเรียนของฉันได้"],
        ["Saya boleh menceritakan rutin harian saya.", "ฉันเล่ากิจวัตรประจำวันของฉันได้"],
        ["Saya boleh menerangkan satu perayaan dan satu makanan Melayu.", "ฉันอธิบายเทศกาลและอาหารมลายูได้อย่างละ 1 อย่าง"]
      ]}
    ],
    latihan: [
      { q: ["Tulis rancangan projek kumpulan kamu: tajuk, ahli dan tugas setiap ahli.", "เขียนแผนโครงงานของกลุ่ม: ชื่อเรื่อง สมาชิก และหน้าที่ของแต่ละคน"], items: [["______________________________________", ""]] }
    ],
    jawapan: [["1", "Jawapan bebas / ตอบได้หลากหลาย"]],
    nilai: ["Yakin dengan diri sendiri apabila bertutur dalam bahasa Melayu.", "มั่นใจในตนเองเมื่อพูดภาษามลายู"]
  }
  ],

  rujukan: [
    "Dewan Bahasa dan Pustaka. (t.t.). <i>Pusat Rujukan Persuratan Melayu</i>. Diakses pada 31 Oktober 2026, daripada https://prpm.dbp.gov.my/",
    "Dewan Bahasa dan Pustaka. (1992). <i>Pedoman umum ejaan bahasa Melayu</i>.",
    "Dewan Bahasa dan Pustaka. (2005). <i>Kamus Dewan</i> (Ed. ke-4).",
    "Nik Safiah Karim, Farid M. Onn, Hashim Haji Musa, &amp; Abdul Hamid Mahmood. (2008). <i>Tatabahasa Dewan</i> (Ed. ke-3). Dewan Bahasa dan Pustaka.",
    "กระทรวงศึกษาธิการ. (2551). <i>หลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน พุทธศักราช 2551</i>. โรงพิมพ์ชุมนุมสหกรณ์การเกษตรแห่งประเทศไทย.",
    "สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน. (ม.ป.ป.). <i>ผลการเรียนรู้และสาระการเรียนรู้ภาษามลายู ระดับชั้นมัธยมศึกษาปีที่ 4–6</i>. สำนักวิชาการและมาตรฐานการศึกษา.",
    "โรงเรียนหาดใหญ่วิทยาลัยสมบูรณ์กุลกันยา. (2569). <i>คำอธิบายรายวิชาและโครงสร้างรายวิชา ม20273 ภาษาที่ 2 (ภาษามลายู 1)</i> [เอกสารหลักสูตรสถานศึกษา]."
  ]
};
