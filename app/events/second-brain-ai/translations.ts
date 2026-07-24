export const translations = {
  en: {
    nonProfitNote:
      "This is a non-profit event — ticket prices cover venue, speaker fees, and logistics costs only.",
    hero: {
      eyebrow: "Hands-On Workshop",
      headline: "Build Your Second Brain & Automate Your Marketing with Agentic AI (BONUS: AI Video Automation)",
      bonusBadge: "+ BONUS Video Automation Workshop",
      tagline: "Agentic AI Workflows with Claude, Hermes & OpenClaw",
      detailParagraphs: [
        "Learn how to set up and use Claude, Hermes Agent, and OpenClaw to build yourself a second brain — one that remembers, connects to your tools, and gets real work done while you focus on what matters.",
        "This four-hour workshop starts easy and gets more hands-on as we go. No technical background needed to start. Then stay for the bonus: Ken breaks down the exact automation that turns a single news URL into a finished, editable video.",
      ],
      toolStack: [
        { name: "Claude", logo: "/claude-logo.jpg" },
        { name: "Hermes Agent", logo: "/hermes-agent-logo.webp" },
        { name: "OpenClaw", logo: "/openclaw-logo.png" },
      ],
      datetime: "12 August 2026 (Wednesday)",
      time: "12:30 PM – 5:00 PM",
      location: "Infinity8, Sunway Square",
      ctaTickets: "Get My Ticket",
      ctaDirections: "Google Maps",
      ctaWaze: "Waze",
      ctaLessonPlan: "Download Lesson Plan",
      startsIn: "Starts in",
      eventStarted: "Event has started",
      seatsLeft: "of 15 seats left",
      seatsUnit: { d: "d", h: "h", m: "m", s: "s" },
      limitedSeatsNote: "Limited seats available so everyone gets hands-on time!",
    },
    trustedBy: {
      label: "CloudLine's small, AI-augmented team already delivers for",
    },
    timeline: {
      eyebrow: "Schedule",
      heading: "How your afternoon unfolds",
      subcopy: "Tap any step below for the full breakdown. We start easy and get a little more technical as the day goes on.",
      steps: [
        {
          time: "12:30 PM",
          title: "Registration & Welcome",
          expandable: false,
        },
        {
          time: "1:00 PM",
          title: "Claude — Kristine Ling",
          speaker: "Kristine Ling",
          level: "Beginner-friendly",
          expandable: true,
          summary: "Start here — no code, just conversations that get real work done.",
          description:
            "Claude is Anthropic's AI assistant — you talk to it in plain English, and it plans, drafts, and works through multi-step tasks with you. Kristine shows you how to set it up in minutes and put it to work on the repetitive parts of your week.",
          items: [
            "Setting up Claude and having your first real working conversation",
            "How to identify repetitive tasks that are actually suitable for AI",
            "Turning a messy, existing process into a clear step-by-step workflow",
            "Writing prompts that produce reliable, usable results — every time",
            "Simple wins: sorting and drafting emails, researching and summarising information",
          ],
        },
        {
          time: "2:00 PM",
          title: "Cybersecurity & Responsible AI Use",
          badge: "Safety Checkpoint",
          expandable: true,
          summary: "Before we hand AI more control, here's exactly how to keep it safe.",
          intro: "You'll also learn how to:",
          items: [
            "Protect confidential and sensitive information",
            "Manage tool permissions safely",
            "Review third-party connections before you approve them",
            "Secure passwords and API keys",
            "Recognise unsafe or manipulative instructions",
            "Check AI-generated work before you rely on it",
          ],
        },
        {
          time: "2:15 PM",
          title: "Hermes Agent — Ken Ooi",
          speaker: "Ken Ooi",
          level: "Getting hands-on",
          expandable: true,
          summary: "Give your AI a memory that never resets — and hands that reach into the tools you already use.",
          description:
            "Hermes Agent is an open-source autonomous agent built by Nous Research. Unlike a chat window that forgets everything the moment you close it, Hermes remembers context across sessions, builds reusable \"skills\" from tasks it's already completed, and can be messaged from Slack, Telegram, Discord, or WhatsApp — picking up the exact same conversation wherever you left off. Ken walks through setting it up and connecting it to the tools your team already runs on.",
          items: [
            "Setting up Hermes Agent and connecting your first messaging platform",
            "Connecting tools such as Google Sheets, forms, email, and calendars",
            "Organising information from forms and spreadsheets automatically",
            "Managing follow-ups, reminders, and recurring tasks without lifting a finger",
            "Consolidating information pulled from multiple sources into one place",
            "Testing a workflow, then letting Hermes improve it on its own",
          ],
        },
        {
          time: "3:00 PM",
          title: "Break",
          expandable: false,
        },
        {
          time: "3:30 PM",
          title: "OpenClaw — Kristine Ling",
          speaker: "Kristine Ling",
          level: "Agentic AI",
          expandable: true,
          summary: "A fully autonomous personal agent that plans and executes tasks on its own.",
          description:
            "OpenClaw is a viral open-source AI agent — over 68,000 GitHub stars — that runs entirely on your own machine or a small server. Give it a task through WhatsApp or Telegram, and it executes shell commands, manages files, scrapes the web, and runs multi-step workflows in the background, using 100+ prebuilt \"AgentSkills.\" It's model-agnostic, so you bring your own API key, and there's no subscription.",
          items: [
            "Setting up OpenClaw on your own machine or a small server",
            "What AgentSkills are, and how to use the 100+ that already exist",
            "Streamlining routine admin and operations work end-to-end",
            "Where OpenClaw fits versus Claude and Hermes — and when agentic AI is the right call",
          ],
        },
        {
          time: "4:15 PM",
          title: "BONUS: Video Automation — Ken Ooi",
          badge: "Bonus Session",
          speaker: "Ken Ooi",
          level: "Bonus",
          expandable: true,
          summary: "How one editor ships 10x the output — from a single news link to a finished video.",
          items: [
            "How to structure a news-to-video AI automation, from source URL to editable output",
            "Scripting logic for repetitive content workflows: where to automate vs. where a human editor should stay in the loop",
            "Building a system that multiplies one editor's output without sacrificing quality",
            "Turning a working pipeline into a repeatable process a team can run independently",
          ],
        },
        {
          time: "4:45 PM",
          title: "Q&A and Sharing",
          expandable: false,
        },
      ],
    },
    takeaways: {
      heading: "What You'll Take Away",
      items: [
        "A clear setup workflow for Claude, Hermes Agent, and OpenClaw",
        "An understanding of how and when to use each tool",
        "Simple AI workflows you can adapt to your own work",
        "A repeatable framework for identifying automation opportunities",
        "A prompting template for producing reliable results",
        "A practical cybersecurity checklist",
      ],
    },
    speakers: {
      eyebrow: "Speakers",
      heading: "Your Speakers",
      readMore: "Read more",
      readLess: "Show less",
      people: [
        {
          name: "Kristine Ling",
          role: "Founder, CloudLine Studio",
          bioShort:
            "Founder of CloudLine Studio, where a lean AI-augmented team delivers work for enterprise clients like Petronas and Prenetics. She'll show you the exact systems her team uses to cut repetitive work — so you can build the same for yourself.",
          bio: "Kristine Ling has spent the last four years building at the frontier of AI and machine learning, using that time to build and mentor five AI startups in Malaysia, including SurgeGraph, which crossed USD500,000 in annual recurring revenue in just eight months.",
          bioExtra:
            "Today, she runs CloudLine Studio, where a lean team paired with a fleet of AI agents delivers work for enterprise-grade clients including Petronas Lubricants and Prenetics (CircleDNA), proof that a small, AI-augmented team can operate at the scale and reliability global brands demand. This workshop pulls back the curtain on the exact systems and workflows she uses inside CloudLine Studio to cut repetitive work and run lean without sacrificing quality — the same playbook that lets her team punch well above its headcount.",
          photo: "/team-kristine.jpg",
        },
        {
          name: "Ken Ooi",
          role: "AI Trainer & Builder · Product Manager",
          badge: "Bonus Session",
          bioShort:
            "Product Manager at A47, where he built a news-to-video AI pipeline that lets one editor ship 10x the output. In his session, he breaks down exactly how to build — and know when to trust — automation like this yourself.",
          bio: "Ken is a Product Manager at A47, an AI-native news platform startup backed by USD2 million in funding. There, he builds the automation that turns a single news URL into a finished, editable video — a pipeline that lets one editor ship 10x the output of manual work.",
          bioExtra:
            "He's a 500 Global AI Residency alum, TEDx speaker, and ex-Shell engineer. He judged the AI Generative Arts category at the National AI Competition 2026 (Sunway University × Rakan Tutor) and led his team to 2nd place at BEYOND Hack Day 2026 in Macau, featured by Cradle. He's also organised a live prompt-writing workshop at a BytePlus video-AI hackathon. In this session, Ken breaks down exactly how his automation works: the scripting logic behind it, where to automate versus where a human editor should stay in control, and how to turn a working pipeline into a process a team can run on its own.",
          topics: ["500 Global AI Residency", "TEDx Speaker", "Ex-Shell", "MEng, Southampton"],
          photo: "/speaker-ken-ooi.jpg",
        },
      ],
    },
    whoFor: {
      heading: "Who This Is For",
      items: [
        "Corporate professionals who want to move ahead in the workforce and work more efficiently with AI",
        "Freelancers and business founders managing repetitive workflows",
        "Administrative, marketing, operations and sales teams interested in agentic AI without a technical background",
      ],
    },
    whatToBring: {
      heading: "What to Bring",
      items: [
        "A fully charged laptop and charger",
        "A paid Claude subscription is recommended",
        "1–3 repetitive tasks or workflows you would like to improve",
      ],
    },
    included: {
      heading: "Also Included",
      items: [
        "Free-flow refreshments, coffee & tea",
        "Sufficient charging plugs",
        "A one-week complimentary coworking pass for every attendee at Infinity8, Sunway Square",
      ],
    },
    tickets: {
      eyebrow: "Tickets",
      heading: "Reserve your seat",
      disclaimer:
        "This event will be photographed and video recorded. Clips and photos may be used publicly on social media and in marketing material. By registering and attending, you consent to appearing in that footage.",
    },
    partners: {
      eyebrow: "With Thanks To Our Partners",
      heading: "Hosted at Infinity8, Sunway Square",
      subheading: "Celebrating Infinity8's 9th anniversary, empowering builders across the region",
      p1: "Thank you to Infinity8 for hosting this workshop at their Sunway Square venue — the flexible space behind several of our past AI workshops.",
      p2: "This year marks Infinity8's 9th anniversary: nine years building the coworking spaces and community infrastructure that founders and teams across Malaysia rely on. We're proud to celebrate that milestone here.",
    },
    cta: {
      eyebrow: "Reserve Your Spot",
      heading: "Leave with a working second brain",
      subcopy: "Four hours. Two speakers. Real tools you're using by the time you walk out.",
      ticketsButton: "Get My Ticket",
    },
  },
  ms: {
    nonProfitNote:
      "Ini ialah acara bukan untung — harga tiket hanya menampung kos tempat, yuran penceramah, dan logistik.",
    hero: {
      eyebrow: "Bengkel Praktikal",
      headline: "Bina Otak Kedua Anda & Automatikkan Pemasaran Anda dengan Agentic AI (BONUS: Automasi Video AI)",
      bonusBadge: "+ BONUS Bengkel Automasi Video",
      tagline: "Aliran Kerja Agentic AI dengan Claude, Hermes & OpenClaw",
      detailParagraphs: [
        "Belajar cara menyediakan dan menggunakan Claude, Hermes Agent, dan OpenClaw untuk membina otak kedua anda sendiri — satu yang mengingati, menyambung ke alat anda, dan menyiapkan kerja sebenar semasa anda fokus pada perkara yang penting.",
        "Bengkel empat jam ini bermula mudah dan menjadi lebih praktikal semakin ke hadapan. Tiada latar belakang teknikal diperlukan untuk bermula. Kemudian kekal untuk bonus: Ken menunjukkan dengan tepat automasi yang menukar satu URL berita kepada video siap disunting.",
      ],
      toolStack: [
        { name: "Claude", logo: "/claude-logo.jpg" },
        { name: "Hermes Agent", logo: "/hermes-agent-logo.webp" },
        { name: "OpenClaw", logo: "/openclaw-logo.png" },
      ],
      datetime: "12 Ogos 2026 (Rabu)",
      time: "12:30 PM – 5:00 PM",
      location: "Infinity8, Sunway Square",
      ctaTickets: "Dapatkan Tiket Saya",
      ctaDirections: "Google Maps",
      ctaWaze: "Waze",
      ctaLessonPlan: "Muat Turun Pelan Pengajaran",
      startsIn: "Bermula dalam",
      eventStarted: "Acara telah bermula",
      seatsLeft: "daripada 15 tempat tinggal",
      seatsUnit: { d: "h", h: "j", m: "m", s: "s" },
      limitedSeatsNote: "Tempat adalah terhad supaya semua orang mendapat masa praktikal!",
    },
    trustedBy: {
      label: "Pasukan ramping CloudLine yang diperkasakan AI sudah menyampaikan kerja untuk",
    },
    timeline: {
      eyebrow: "Jadual",
      heading: "Bagaimana sesi petang anda berjalan",
      subcopy: "Ketik mana-mana langkah di bawah untuk perincian penuh. Kami bermula mudah dan menjadi sedikit lebih teknikal semakin hari berjalan.",
      steps: [
        {
          time: "12:30 PM",
          title: "Pendaftaran & Alu-aluan",
          expandable: false,
        },
        {
          time: "1:00 PM",
          title: "Claude — Kristine Ling",
          speaker: "Kristine Ling",
          level: "Mesra pemula",
          expandable: true,
          summary: "Mulakan di sini — tiada kod, hanya perbualan yang menyiapkan kerja sebenar.",
          description:
            "Claude ialah pembantu AI daripada Anthropic — anda bercakap dengannya dalam bahasa mudah, dan ia merancang, merangka, serta menyiapkan tugas berbilang langkah bersama anda. Kristine menunjukkan cara menyediakannya dalam beberapa minit dan menggunakannya untuk bahagian berulang dalam minggu anda.",
          items: [
            "Menyediakan Claude dan perbualan kerja pertama anda yang sebenar",
            "Cara mengenal pasti tugas berulang yang benar-benar sesuai untuk AI",
            "Menukar proses sedia ada yang bercelaru kepada aliran kerja langkah demi langkah yang jelas",
            "Menulis gesaan (prompt) yang menghasilkan keputusan boleh dipercayai — setiap kali",
            "Kemenangan mudah: menyusun dan merangka e-mel, menyelidik dan meringkaskan maklumat",
          ],
        },
        {
          time: "2:00 PM",
          title: "Keselamatan Siber & Penggunaan AI Bertanggungjawab",
          badge: "Titik Semak Keselamatan",
          expandable: true,
          summary: "Sebelum kami memberi AI lebih kawalan, inilah dengan tepat cara memastikannya selamat.",
          intro: "Anda juga akan belajar cara untuk:",
          items: [
            "Melindungi maklumat sulit dan sensitif",
            "Menguruskan kebenaran alat dengan selamat",
            "Menyemak sambungan pihak ketiga sebelum meluluskannya",
            "Mengamankan kata laluan dan kunci API",
            "Mengenali arahan yang tidak selamat atau memanipulasi",
            "Menyemak kerja yang dijana AI sebelum anda bergantung padanya",
          ],
        },
        {
          time: "2:15 PM",
          title: "Hermes Agent — Ken Ooi",
          speaker: "Ken Ooi",
          level: "Mula praktikal",
          expandable: true,
          summary: "Berikan AI anda ingatan yang tidak pernah reset — dan tangan yang mencapai alat yang anda sudah gunakan.",
          description:
            "Hermes Agent ialah ejen autonomi sumber terbuka yang dibina oleh Nous Research. Berbeza daripada tetingkap sembang yang melupakan segalanya sebaik sahaja anda menutupnya, Hermes mengingati konteks merentasi sesi, membina \"kemahiran\" boleh guna semula daripada tugas yang telah diselesaikannya, dan boleh dimesej daripada Slack, Telegram, Discord, atau WhatsApp — meneruskan perbualan yang sama di mana sahaja anda tinggalkan. Ken menunjukkan cara menyediakannya dan menyambungkannya ke alat yang pasukan anda sudah gunakan.",
          items: [
            "Menyediakan Hermes Agent dan menyambungkan platform pemesejan pertama anda",
            "Menyambungkan alat seperti Google Sheets, borang, e-mel, dan kalendar",
            "Menyusun maklumat daripada borang dan hamparan secara automatik",
            "Menguruskan susulan, peringatan, dan tugas berulang tanpa mengangkat jari",
            "Menggabungkan maklumat daripada pelbagai sumber ke satu tempat",
            "Menguji aliran kerja, kemudian membiarkan Hermes menambah baiknya sendiri",
          ],
        },
        {
          time: "3:00 PM",
          title: "Rehat",
          expandable: false,
        },
        {
          time: "3:30 PM",
          title: "OpenClaw — Kristine Ling",
          speaker: "Kristine Ling",
          level: "Agentic AI",
          expandable: true,
          summary: "Ejen peribadi yang sepenuhnya autonomi — merancang dan melaksanakan tugas dengan sendirinya.",
          description:
            "OpenClaw ialah ejen AI sumber terbuka yang tular — lebih 68,000 bintang GitHub — yang berjalan sepenuhnya pada mesin anda sendiri atau pelayan kecil. Berikan tugas melalui WhatsApp atau Telegram, dan ia melaksanakan arahan shell, menguruskan fail, mengimbas web, dan menjalankan aliran kerja berbilang langkah di latar belakang, menggunakan 100+ \"AgentSkills\" yang telah disediakan. Ia agnostik model, jadi anda bawa kunci API anda sendiri, dan tiada langganan diperlukan.",
          items: [
            "Menyediakan OpenClaw pada mesin anda sendiri atau pelayan kecil",
            "Apa itu AgentSkills, dan cara menggunakan 100+ yang sudah sedia ada",
            "Memperkemas kerja pentadbiran dan operasi rutin dari hujung ke hujung",
            "Di mana OpenClaw sesuai berbanding Claude dan Hermes — dan bila Agentic AI adalah pilihan yang tepat",
          ],
        },
        {
          time: "4:15 PM",
          title: "BONUS: Automasi Video — Ken Ooi",
          badge: "Sesi Bonus",
          speaker: "Ken Ooi",
          level: "Bonus",
          expandable: true,
          summary: "Bagaimana seorang editor menghasilkan 10x lebih banyak output — daripada satu pautan berita kepada video siap.",
          items: [
            "Cara menyusun automasi berita-kepada-video AI, dari URL sumber ke output yang boleh disunting",
            "Logik skrip untuk aliran kerja kandungan berulang: di mana untuk automasikan berbanding di mana editor manusia perlu kekal terlibat",
            "Membina sistem yang menggandakan output seorang editor tanpa menjejaskan kualiti",
            "Menukar saluran paip yang berfungsi kepada proses berulang yang pasukan boleh jalankan secara bebas",
          ],
        },
        {
          time: "4:45 PM",
          title: "Sesi Soal Jawab & Perkongsian",
          expandable: false,
        },
      ],
    },
    takeaways: {
      heading: "Apa yang Anda Akan Bawa Pulang",
      items: [
        "Aliran kerja persediaan yang jelas untuk Claude, Hermes Agent, dan OpenClaw",
        "Pemahaman tentang bagaimana dan bila menggunakan setiap alat",
        "Aliran kerja AI ringkas yang boleh anda sesuaikan untuk kerja anda sendiri",
        "Rangka kerja boleh ulang guna untuk mengenal pasti peluang automasi",
        "Templat gesaan untuk menghasilkan keputusan yang boleh dipercayai",
        "Senarai semak keselamatan siber yang praktikal",
      ],
    },
    speakers: {
      eyebrow: "Penceramah",
      heading: "Penceramah Anda",
      readMore: "Baca lagi",
      readLess: "Kurangkan",
      people: [
        {
          name: "Kristine Ling",
          role: "Pengasas, CloudLine Studio",
          bioShort:
            "Pengasas CloudLine Studio, di mana pasukan ramping berkuasa AI menyampaikan kerja untuk pelanggan enterprise seperti Petronas dan Prenetics. Beliau akan menunjukkan sistem sebenar yang pasukannya gunakan untuk mengurangkan kerja berulang — supaya anda boleh membina yang sama.",
          bio: "Kristine Ling telah menghabiskan empat tahun terakhir membina di barisan hadapan AI dan pembelajaran mesin, menggunakan masa itu untuk membina dan membimbing lima startup AI di Malaysia, termasuk SurgeGraph, yang mencecah hasil berulang tahunan USD500,000 dalam masa lapan bulan sahaja.",
          bioExtra:
            "Kini, beliau menjalankan CloudLine Studio, di mana satu pasukan yang ramping digandingkan dengan barisan ejen AI menyampaikan kerja untuk pelanggan bertaraf enterprise termasuk Petronas Lubricants dan Prenetics (CircleDNA), bukti bahawa pasukan kecil yang diperkasakan AI boleh beroperasi pada skala dan kebolehpercayaan yang dituntut oleh jenama global. Bengkel ini membuka rahsia sistem dan aliran kerja sebenar yang beliau gunakan di dalam CloudLine Studio untuk mengurangkan kerja berulang dan beroperasi secara ramping tanpa menjejaskan kualiti — playbook yang sama yang membolehkan pasukannya mencapai hasil jauh melebihi bilangan kakitangannya.",
          photo: "/team-kristine.jpg",
        },
        {
          name: "Ken Ooi",
          role: "Jurulatih AI & Pembina · Product Manager",
          badge: "Sesi Bonus",
          bioShort:
            "Product Manager di A47, tempat beliau membina saluran paip AI berita-kepada-video yang membolehkan seorang editor menghasilkan 10x lebih banyak output. Dalam sesinya, beliau menunjukkan dengan tepat cara membina — dan bila untuk mempercayai — automasi seperti ini sendiri.",
          bio: "Ken ialah Product Manager di A47, sebuah startup platform berita AI-native yang disokong oleh dana USD2 juta. Di sana, beliau membina automasi yang menukar satu URL berita kepada video siap disunting — satu saluran paip yang membolehkan seorang editor menghasilkan 10x lebih banyak output berbanding kerja manual.",
          bioExtra:
            "Beliau merupakan alumni 500 Global AI Residency, penceramah TEDx, dan bekas jurutera Shell. Beliau menjadi hakim untuk kategori AI Generative Arts di National AI Competition 2026 (Sunway University × Rakan Tutor) dan mengetuai pasukannya ke tempat ke-2 di BEYOND Hack Day 2026 di Macau, yang diketengahkan oleh Cradle. Beliau turut menganjurkan bengkel penulisan gesaan (prompt) langsung di sebuah hackathon video-AI BytePlus. Dalam sesi ini, Ken akan menunjukkan dengan tepat bagaimana automasinya berfungsi: logik skrip di sebaliknya, di mana untuk automasikan berbanding di mana editor manusia perlu mengekalkan kawalan, dan cara menukar saluran paip yang berfungsi kepada proses yang boleh dijalankan sendiri oleh sesebuah pasukan.",
          topics: ["500 Global AI Residency", "Penceramah TEDx", "Bekas Shell", "MEng, Southampton"],
          photo: "/speaker-ken-ooi.jpg",
        },
      ],
    },
    whoFor: {
      heading: "Bengkel Ini Sesuai Untuk",
      items: [
        "Profesional korporat yang mahu maju dalam tenaga kerja dan bekerja dengan lebih cekap menggunakan AI",
        "Pekerja bebas dan pengasas perniagaan yang menguruskan aliran kerja berulang",
        "Pasukan pentadbiran, pemasaran, operasi dan jualan yang berminat dengan agentic AI tanpa latar belakang teknikal",
      ],
    },
    whatToBring: {
      heading: "Apa yang Perlu Dibawa",
      items: [
        "Sebuah laptop yang dicas penuh berserta pengecas",
        "Langganan Claude berbayar disyorkan",
        "1–3 tugas atau aliran kerja berulang yang anda mahu perbaiki",
      ],
    },
    included: {
      heading: "Turut Disertakan",
      items: [
        "Minuman ringan, kopi & teh tanpa had",
        "Palam pengecasan yang mencukupi",
        "Pas coworking percuma selama seminggu untuk setiap peserta di Infinity8, Sunway Square",
      ],
    },
    tickets: {
      eyebrow: "Tiket",
      heading: "Tempah tempat anda",
      disclaimer:
        "Acara ini akan dirakam foto dan video. Klip dan foto mungkin digunakan secara terbuka di media sosial dan bahan pemasaran. Dengan mendaftar dan menghadiri, anda bersetuju untuk muncul dalam rakaman tersebut.",
    },
    partners: {
      eyebrow: "Dengan Penghargaan Kepada Rakan Kongsi Kami",
      heading: "Dihoskan di Infinity8, Sunway Square",
      subheading: "Meraikan ulang tahun ke-9 Infinity8, memperkasakan pembina di seluruh rantau",
      p1: "Terima kasih kepada Infinity8 kerana menjadi hos bengkel ini di lokasi Sunway Square mereka — ruang fleksibel di sebalik beberapa bengkel AI kami yang lepas.",
      p2: "Tahun ini menandakan ulang tahun ke-9 Infinity8: sembilan tahun membina ruang coworking dan infrastruktur komuniti yang menjadi sandaran pengasas dan pasukan di seluruh Malaysia. Kami bangga meraikan pencapaian ini di sini.",
    },
    cta: {
      eyebrow: "Tempah Tempat Anda",
      heading: "Pulang dengan otak kedua yang berfungsi",
      subcopy: "Empat jam. Dua penceramah. Alat sebenar yang anda gunakan sebelum anda pulang.",
      ticketsButton: "Dapatkan Tiket Saya",
    },
  },
  zh: {
    nonProfitNote:
      "本活动为非营利性质——门票价格仅用于支付场地、讲者费用及相关物流成本。",
    hero: {
      eyebrow: "实操工作坊",
      headline: "用 Agentic AI 打造你的第二大脑，自动化你的营销（福利：AI 视频自动化）",
      bonusBadge: "+ 福利：视频自动化工作坊",
      tagline: "使用 Claude、Hermes 与 OpenClaw 的 Agentic AI 工作流",
      detailParagraphs: [
        "学习如何搭建并使用 Claude、Hermes Agent 与 OpenClaw，为自己打造一个第二大脑——它会记住、连接您的工具，并在您专注于真正重要的事情时完成真正的工作。",
        "这场四小时的工作坊从简单开始，随着课程推进逐渐深入实操。开始时无需技术背景。接着请留下参加福利环节：Ken 将具体拆解如何把一条新闻链接自动转化为成品视频。",
      ],
      toolStack: [
        { name: "Claude", logo: "/claude-logo.jpg" },
        { name: "Hermes Agent", logo: "/hermes-agent-logo.webp" },
        { name: "OpenClaw", logo: "/openclaw-logo.png" },
      ],
      datetime: "2026 年 8 月 12 日（星期三）",
      time: "中午 12:30 – 下午 5:00",
      location: "Infinity8, Sunway Square",
      ctaTickets: "获取我的门票",
      ctaDirections: "Google 地图",
      ctaWaze: "Waze",
      ctaLessonPlan: "下载课程计划",
      startsIn: "距离开始还有",
      eventStarted: "活动已开始",
      seatsLeft: "个名额剩余（共15个）",
      seatsUnit: { d: "天", h: "时", m: "分", s: "秒" },
      limitedSeatsNote: "座位有限，确保每位参与者都能获得实操时间！",
    },
    trustedBy: {
      label: "CloudLine 精简的 AI 增强型团队已在为以下企业提供服务",
    },
    timeline: {
      eyebrow: "议程",
      heading: "您的下午将如何展开",
      subcopy: "点击下方任意步骤查看完整内容。我们从简单开始，随着当天推进会稍微深入一些技术细节。",
      steps: [
        {
          time: "12:30 PM",
          title: "签到与欢迎",
          expandable: false,
        },
        {
          time: "1:00 PM",
          title: "Claude — Kristine Ling",
          speaker: "Kristine Ling",
          level: "新手友好",
          expandable: true,
          summary: "从这里开始——无需编程，只需对话即可完成真正的工作。",
          description:
            "Claude 是 Anthropic 推出的 AI 助手——您用平实的语言与它交流，它会为您规划、起草并完成多步骤任务。Kristine 将展示如何在几分钟内完成搭建，并让它处理您一周中重复性的部分。",
          items: [
            "搭建 Claude，并进行您第一次真正有用的工作对话",
            "如何识别真正适合交给 AI 处理的重复性任务",
            "把一个混乱的现有流程转化为清晰的分步工作流",
            "撰写每次都能产出可靠、可用结果的提示词",
            "简单的立即见效场景：整理与起草邮件、研究并总结信息",
          ],
        },
        {
          time: "2:00 PM",
          title: "网络安全与负责任的 AI 使用",
          badge: "安全检查点",
          expandable: true,
          summary: "在把更多控制权交给 AI 之前，先了解如何确保安全。",
          intro: "您还将学会如何：",
          items: [
            "保护机密与敏感信息",
            "安全地管理工具权限",
            "在批准前审核第三方连接",
            "妥善保管密码与 API 密钥",
            "识别不安全或带有操纵性的指令",
            "在依赖 AI 生成的内容前先进行审查",
          ],
        },
        {
          time: "2:15 PM",
          title: "Hermes Agent — Ken Ooi",
          speaker: "Ken Ooi",
          level: "开始实操",
          expandable: true,
          summary: "让您的 AI 拥有永不重置的记忆——以及能触及您已在使用的工具的双手。",
          description:
            "Hermes Agent 是由 Nous Research 打造的开源自主智能体。与一关闭就忘记一切的聊天窗口不同，Hermes 能跨会话记住上下文，从已完成的任务中构建可重复使用的\"技能\"，并可以通过 Slack、Telegram、Discord 或 WhatsApp 与它对话——无论您从哪里离开，都能延续同一段对话。Ken 将展示如何搭建它，并将其连接到您团队已经在使用的工具。",
          items: [
            "搭建 Hermes Agent，并连接您的第一个消息平台",
            "连接 Google Sheets、表单、邮件、日历等工具",
            "自动整理来自表单与电子表格的信息",
            "无需动手即可管理跟进事项、提醒与周期性任务",
            "将来自多个来源的信息整合到一处",
            "测试一个工作流，然后让 Hermes 自行改进它",
          ],
        },
        {
          time: "3:00 PM",
          title: "休息时间",
          expandable: false,
        },
        {
          time: "3:30 PM",
          title: "OpenClaw — Kristine Ling",
          speaker: "Kristine Ling",
          level: "Agentic AI",
          expandable: true,
          summary: "一个完全自主的个人智能体，能够自行规划并执行任务。",
          description:
            "OpenClaw 是一款爆火的开源 AI 智能体——在 GitHub 上已获得超过 68,000 颗星——完全运行在您自己的电脑或一台小型服务器上。通过 WhatsApp 或 Telegram 给它一个任务，它就能执行终端命令、管理文件、抓取网页内容，并使用 100 多个预置的\"AgentSkills\"在后台运行多步骤工作流。它不限定模型，您可以使用自己的 API 密钥，且无需订阅。",
          items: [
            "在自己的电脑或一台小型服务器上搭建 OpenClaw",
            "了解 AgentSkills 是什么，以及如何使用已有的 100 多个技能",
            "端到端简化日常行政与运营工作",
            "OpenClaw 与 Claude、Hermes 相比的定位——以及何时 Agentic AI 才是正确之选",
          ],
        },
        {
          time: "4:15 PM",
          title: "福利：视频自动化 — Ken Ooi",
          badge: "福利环节",
          speaker: "Ken Ooi",
          level: "福利",
          expandable: true,
          summary: "一位剪辑师如何产出 10 倍的成果——从一条新闻链接到一支成品视频。",
          items: [
            "如何构建「新闻链接到成品视频」的 AI 自动化流程，从源链接到可编辑成品",
            "重复性内容工作流的脚本逻辑：哪些该自动化，哪些仍需人工剪辑把关",
            "构建能让一位编辑产出倍增而不牺牲质量的系统",
            "把可运行的流程转化为团队可独立执行的可重复流程",
          ],
        },
        {
          time: "4:45 PM",
          title: "问答与交流分享",
          expandable: false,
        },
      ],
    },
    takeaways: {
      heading: "您将带走什么",
      items: [
        "Claude、Hermes Agent 与 OpenClaw 的清晰搭建流程",
        "了解每个工具的使用方式与时机",
        "可直接应用到您自己工作中的简单 AI 工作流",
        "识别自动化机会的可重复框架",
        "产出可靠结果的提示词模板",
        "一份实用的网络安全检查清单",
      ],
    },
    speakers: {
      eyebrow: "讲者",
      heading: "您的讲者",
      readMore: "阅读更多",
      readLess: "收起",
      people: [
        {
          name: "Kristine Ling",
          role: "CloudLine Studio 创始人",
          bioShort:
            "CloudLine Studio 创始人，一支精简的 AI 增强型团队为 Petronas、Prenetics 等企业级客户提供服务。她将展示团队实际使用的系统，帮助您减少重复性工作——让您也能搭建同样的系统。",
          bio: "Kristine Ling 过去四年一直在 AI 与机器学习的前沿深耕，并在此期间创建和指导了马来西亚的五家 AI 初创公司，其中包括 SurgeGraph——该公司仅用 8 个月便实现了 50 万美元的年经常性收入（ARR）。",
          bioExtra:
            "如今，她经营着 CloudLine Studio，一支精简的团队配合一批 AI 智能体，为 Petronas Lubricants、Prenetics（CircleDNA）等企业级客户提供服务——证明一支精小的 AI 增强型团队，同样能够以全球品牌所要求的规模与可靠性运作。这场工作坊将揭开她在 CloudLine Studio 内部所使用的系统与工作流程：如何削减重复性工作、在不牺牲质量的前提下保持精简运作——正是这套打法，让她的团队产出远超其人数所能预期的成果。",
          photo: "/team-kristine.jpg",
        },
        {
          name: "Ken Ooi",
          role: "AI 培训师与建造者 · 产品经理",
          badge: "福利环节",
          bioShort:
            "A47 的产品经理，构建了让一位剪辑师产出量提升 10 倍的新闻转视频 AI 流程。在他的环节中，他将具体拆解如何自行搭建——以及何时该信任——这样的自动化系统。",
          bio: "Ken 是 A47 的产品经理——这是一家获得 200 万美元融资支持的 AI 原生新闻平台初创公司。在那里，他构建了能将一条新闻链接转化为成品视频的自动化系统——这套流程让一位剪辑师的产出量提升至人工制作的 10 倍。",
          bioExtra:
            "他是 500 Global AI Residency 校友、TEDx 演讲者，也曾任职于壳牌（Shell）。他担任了 2026 年全国 AI 竞赛（Sunway University × Rakan Tutor 主办）AI 生成艺术类别的评审，并带领团队在 2026 年澳门 BEYOND Hack Day 中获得第二名，获 Cradle 报道。他还在 BytePlus 举办的视频 AI 黑客松中组织并主持了一场实操提示词撰写工作坊。在本场环节中，Ken 将具体拆解他的自动化系统是如何运作的：背后的脚本逻辑、哪些环节该自动化、哪些环节仍需人工编辑把关，以及如何将一套可运行的流程，转化为团队能够自行运作的标准流程。",
          topics: ["500 Global AI Residency", "TEDx 演讲者", "前壳牌员工", "南安普顿大学工程硕士"],
          photo: "/speaker-ken-ooi.jpg",
        },
      ],
    },
    whoFor: {
      heading: "本工作坊适合",
      items: [
        "希望在职场更进一步、更高效地运用 AI 工作的企业专业人士",
        "需要管理重复性工作流程的自由职业者与企业创始人",
        "对 agentic AI 感兴趣、无需技术背景的行政、营销、运营与销售团队",
      ],
    },
    whatToBring: {
      heading: "需要携带的物品",
      items: [
        "一台已充满电的笔记本电脑，以及充电器",
        "建议准备付费版 Claude 订阅",
        "1-3 个您希望改进的重复性任务或工作流程",
      ],
    },
    included: {
      heading: "同时包含",
      items: [
        "无限量茶点、咖啡与茶饮",
        "充足的充电插座",
        "每位参与者可获得 Infinity8, Sunway Square 一周免费联合办公通行证",
      ],
    },
    tickets: {
      eyebrow: "门票",
      heading: "预留您的座位",
      disclaimer:
        "本活动将进行拍照及录像。相关片段与照片可能用于社交媒体及营销材料的公开展示。报名并出席即表示您同意出现在相关影像中。",
    },
    partners: {
      eyebrow: "特别感谢我们的合作伙伴",
      heading: "活动举办地：Infinity8, Sunway Square",
      subheading: "庆祝 Infinity8 成立 9 周年，助力区域建造者",
      p1: "感谢 Infinity8 在其 Sunway Square 场地为本次工作坊提供场地支持——这也是我们多场往期 AI 工作坊的灵活场地。",
      p2: "今年正值 Infinity8 成立 9 周年：九年来，他们持续打造马来西亚各地创始人与团队所依赖的共享办公空间与社区基础设施。我们很荣幸能在这里共同庆祝这一里程碑。",
    },
    cta: {
      eyebrow: "预留您的名额",
      heading: "带着可用的第二大脑离开",
      subcopy: "四小时。两位讲者。真正能在您离场前就用上的工具。",
      ticketsButton: "获取我的门票",
    },
  },
} as const
