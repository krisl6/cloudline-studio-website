export type Lang = "en" | "ms" | "zh"

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ms", label: "MS" },
  { code: "zh", label: "中" },
]

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      clientResults: "Client Results",
      pricing: "Pricing",
      contact: "Contact",
      chat: "Chat with us now",
    },
    hero: {
      eyebrow: "Digital Marketing · Transformation · AI Automations",
      headline: "We help businesses grow, transform, and run better.",
      subcopy:
        "CloudLine Studio is a consultancy partnering with ambitious teams across Singapore and Malaysia. We improve your marketing and sales efficiency by 300% with AI — then build the operations to sustain it.",
      ctaPrimary: "Book a consultation",
      ctaSecondary: "See our work",
      stat1: "marketing & sales efficiency",
      stat2Value: "7+ yrs",
      stat2: "advising growth teams",
    },
    services: {
      eyebrow: "What we do",
      heading: "One consultancy for the whole growth picture",
      subcopy:
        "Most agencies fix one slice and leave the rest. We connect marketing, transformation, and operations so growth is something your business can actually sustain.",
      pillars: [
        {
          name: "Digital Marketing",
          description:
            "Demand that compounds. SEO, SEM, paid social, and content engineered to fill your pipeline with the right customers — not just traffic.",
          points: ["Performance & paid media", "SEO & content systems", "Brand & positioning", "Marketing analytics"],
        },
        {
          name: "Business Transformation",
          description:
            "AI-enabled change. We unify your tools, data, and teams so the whole business moves as one — and decisions get faster.",
          points: ["AI workflow automation", "Systems & data consolidation", "CRM & sales enablement", "Change management"],
        },
        {
          name: "Operations",
          description:
            "Calm, scalable systems. We streamline how work actually gets done, cut wasted spend, and remove the bottlenecks holding growth back.",
          points: ["Process design", "Cost & subscription audits", "Reporting & dashboards", "Operating rhythms"],
        },
      ],
    },
    work: {
      eyebrow: "Our work",
      heading: "Trusted by teams across the region",
      subcopy:
        "From healthcare and tech to F&B and professional services — leading brands partner with us to grow.",
      satisfaction: "4.9 / 5 average client satisfaction · 120+ projects delivered",
    },
    about: {
      eyebrow: "Why CloudLine",
      heading: "A consultancy that works inside your business, not just on it",
      body:
        "We pair sharp marketing strategy with hands-on transformation and operations work. That means we don't just hand you a deck — we implement the AI workflows, consolidate the tools, and build the systems your team will use every day.",
      points: [
        "Senior consultants on every engagement",
        "AI-first approach to marketing, sales, and operations",
        "Measured against revenue and efficiency, not vanity metrics",
        "Boutique focus — we take on work we can do exceptionally",
      ],
    },
    outcomes: {
      eyebrow: "What changes",
      heading: "What it looks like when the whole system works",
      subcopy: "Real shifts our clients feel within the first quarter — not someday, but soon.",
      items: [
        { title: "Premium pricing power", description: "Stop competing on price. Clear positioning lets you command 40–80% higher rates with confidence." },
        { title: "Attract the right clients", description: "Work with customers who value quality — and build a business around the work you actually want." },
        { title: "Predictable growth", description: "Replace feast-or-famine cycles with consistent, compounding revenue you can plan around." },
        { title: "Faster sales cycles", description: "When your value is obvious and your funnel is automated, prospects decide faster." },
        { title: "Industry recognition", description: "Become the obvious choice in your field — the name people reference and recommend." },
        { title: "Effortless referrals", description: "When the experience is excellent end to end, your customers do the selling for you." },
      ],
    },
    process: {
      eyebrow: "How we work",
      heading: "A clear, three-step path from diagnosis to results",
      steps: [
        { title: "Diagnose", description: "We map your funnel, tooling, and operations to find exactly where growth and margin are leaking." },
        { title: "Design", description: "We design the marketing engine, AI-enabled systems, and operating model tailored to your business." },
        { title: "Deliver", description: "We implement alongside your team, measure relentlessly, and hand over systems that keep compounding." },
      ],
    },
    quote: {
      text:
        "“CloudLine cut over S$100K a month from our stack and lifted appointment bookings and revenue 40% in a single quarter — while finally getting our departments on the same page.”",
      attribution: "Operations Lead · ClearSK Aesthetic Clinic, Singapore",
    },
    cta: {
      heading: "Let's build what's next",
      subcopy:
        "Tell us where you want to grow. We'll show you the fastest, calmest path to get there — starting with a complimentary growth audit of your marketing, sales, and operations.",
      ctaPrimary: "Book a consultation",
      ctaSecondary: "See client results",
    },
    footer: {
      tagline: "Data-driven marketing solutions that deliver measurable results and drive business growth.",
      servicesTitle: "Services",
      companyTitle: "Company",
      contactTitle: "Contact",
      services: ["Performance Marketing", "Website Creation", "SEO Optimization", "Influencer Marketing"],
      company: ["About Us", "Case Studies", "Pricing", "Blog", "Careers"],
      location: "Kuala Lumpur, Malaysia",
      getInTouch: "Get in Touch",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },

  ms: {
    nav: {
      about: "Tentang",
      services: "Perkhidmatan",
      clientResults: "Hasil Klien",
      pricing: "Harga",
      contact: "Hubungi",
      chat: "Hubungi kami sekarang",
    },
    hero: {
      eyebrow: "Pemasaran Digital · Transformasi · Automasi AI",
      headline: "Kami bantu perniagaan berkembang, bertransformasi dan beroperasi dengan lebih baik.",
      subcopy:
        "CloudLine Studio ialah firma perunding yang bekerjasama dengan pasukan berdaya saing di Singapura dan Malaysia. Kami tingkatkan kecekapan pemasaran dan jualan anda sebanyak 300% dengan AI — kemudian membina operasi untuk mengekalkannya.",
      ctaPrimary: "Tempah perundingan",
      ctaSecondary: "Lihat hasil kerja kami",
      stat1: "kecekapan pemasaran & jualan",
      stat2Value: "7+ thn",
      stat2: "menasihati pasukan pertumbuhan",
    },
    services: {
      eyebrow: "Apa yang kami lakukan",
      heading: "Satu firma perunding untuk keseluruhan gambaran pertumbuhan",
      subcopy:
        "Kebanyakan agensi hanya membaiki satu bahagian dan meninggalkan yang lain. Kami menghubungkan pemasaran, transformasi dan operasi supaya pertumbuhan benar-benar mampan untuk perniagaan anda.",
      pillars: [
        {
          name: "Pemasaran Digital",
          description:
            "Permintaan yang berganda. SEO, SEM, media sosial berbayar dan kandungan yang direka untuk mengisi saluran jualan anda dengan pelanggan yang tepat — bukan sekadar trafik.",
          points: ["Prestasi & media berbayar", "Sistem SEO & kandungan", "Penjenamaan & kedudukan", "Analitik pemasaran"],
        },
        {
          name: "Transformasi Perniagaan",
          description:
            "Perubahan dipacu AI. Kami menyatukan alatan, data dan pasukan anda supaya seluruh perniagaan bergerak sebagai satu — dan keputusan dibuat lebih pantas.",
          points: ["Automasi aliran kerja AI", "Penyatuan sistem & data", "CRM & pemerkasaan jualan", "Pengurusan perubahan"],
        },
        {
          name: "Operasi",
          description:
            "Sistem yang tenang dan boleh berskala. Kami memperkemas cara kerja dijalankan, mengurangkan pembaziran dan menghapuskan halangan yang membantutkan pertumbuhan.",
          points: ["Reka bentuk proses", "Audit kos & langganan", "Pelaporan & papan pemuka", "Rentak operasi"],
        },
      ],
    },
    work: {
      eyebrow: "Hasil kerja kami",
      heading: "Dipercayai oleh pasukan di seluruh rantau",
      subcopy:
        "Dari penjagaan kesihatan dan teknologi hinggalah F&B dan perkhidmatan profesional — jenama terkemuka bekerjasama dengan kami untuk berkembang.",
      satisfaction: "4.9 / 5 purata kepuasan klien · 120+ projek disiapkan",
    },
    about: {
      eyebrow: "Kenapa CloudLine",
      heading: "Firma perunding yang bekerja dalam perniagaan anda, bukan sekadar di luar",
      body:
        "Kami menggabungkan strategi pemasaran yang tajam dengan kerja transformasi dan operasi secara praktikal. Maksudnya kami bukan sekadar menyerahkan slaid — kami melaksanakan aliran kerja AI, menyatukan alatan dan membina sistem yang akan digunakan pasukan anda setiap hari.",
      points: [
        "Perunding kanan dalam setiap penglibatan",
        "Pendekatan mengutamakan AI untuk pemasaran, jualan dan operasi",
        "Diukur berdasarkan hasil dan kecekapan, bukan metrik kosong",
        "Fokus butik — kami hanya ambil kerja yang boleh kami lakukan dengan cemerlang",
      ],
    },
    outcomes: {
      eyebrow: "Apa yang berubah",
      heading: "Beginilah rupanya apabila keseluruhan sistem berfungsi",
      subcopy: "Perubahan sebenar yang dirasai klien kami dalam suku tahun pertama — bukan suatu hari nanti, tetapi tidak lama lagi.",
      items: [
        { title: "Kuasa harga premium", description: "Berhenti bersaing pada harga. Kedudukan yang jelas membolehkan anda mengenakan kadar 40–80% lebih tinggi dengan yakin." },
        { title: "Tarik pelanggan yang tepat", description: "Bekerja dengan pelanggan yang menghargai kualiti — dan bina perniagaan sekitar kerja yang benar-benar anda mahukan." },
        { title: "Pertumbuhan yang boleh diramal", description: "Gantikan kitaran naik-turun dengan hasil yang konsisten dan berganda yang boleh dirancang." },
        { title: "Kitaran jualan lebih pantas", description: "Apabila nilai anda jelas dan saluran jualan automatik, prospek membuat keputusan lebih pantas." },
        { title: "Pengiktirafan industri", description: "Jadi pilihan utama dalam bidang anda — nama yang dirujuk dan disyorkan orang." },
        { title: "Rujukan tanpa usaha", description: "Apabila pengalaman cemerlang dari mula hingga akhir, pelanggan anda yang menjual untuk anda." },
      ],
    },
    process: {
      eyebrow: "Cara kami bekerja",
      heading: "Laluan tiga langkah yang jelas dari diagnosis ke hasil",
      steps: [
        { title: "Diagnosis", description: "Kami memetakan saluran jualan, alatan dan operasi anda untuk mencari dengan tepat di mana pertumbuhan dan margin bocor." },
        { title: "Reka bentuk", description: "Kami mereka enjin pemasaran, sistem berkuasa AI dan model operasi yang disesuaikan untuk perniagaan anda." },
        { title: "Laksana", description: "Kami melaksanakan bersama pasukan anda, mengukur tanpa henti dan menyerahkan sistem yang terus berganda." },
      ],
    },
    quote: {
      text:
        "“CloudLine menjimatkan lebih S$100K sebulan daripada sistem kami dan meningkatkan tempahan temujanji serta hasil sebanyak 40% dalam satu suku tahun — sambil akhirnya menyatukan semua jabatan kami.”",
      attribution: "Ketua Operasi · Klinik Estetik ClearSK, Singapura",
    },
    cta: {
      heading: "Mari bina langkah seterusnya",
      subcopy:
        "Beritahu kami ke mana anda mahu berkembang. Kami akan tunjukkan laluan terpantas dan paling tenang untuk sampai ke sana — bermula dengan audit pertumbuhan percuma untuk pemasaran, jualan dan operasi anda.",
      ctaPrimary: "Tempah perundingan",
      ctaSecondary: "Lihat hasil klien",
    },
    footer: {
      tagline: "Penyelesaian pemasaran dipacu data yang memberikan hasil boleh diukur dan memacu pertumbuhan perniagaan.",
      servicesTitle: "Perkhidmatan",
      companyTitle: "Syarikat",
      contactTitle: "Hubungi",
      services: ["Pemasaran Prestasi", "Pembinaan Laman Web", "Pengoptimuman SEO", "Pemasaran Influencer"],
      company: ["Tentang Kami", "Kajian Kes", "Harga", "Blog", "Kerjaya"],
      location: "Kuala Lumpur, Malaysia",
      getInTouch: "Hubungi Kami",
      rights: "Hak cipta terpelihara.",
      privacy: "Dasar Privasi",
      terms: "Terma Perkhidmatan",
    },
  },

  zh: {
    nav: {
      about: "关于我们",
      services: "服务",
      clientResults: "客户成果",
      pricing: "价格",
      contact: "联系我们",
      chat: "立即联系我们",
    },
    hero: {
      eyebrow: "数字营销 · 业务转型 · AI 自动化",
      headline: "我们助力企业成长、转型，并更高效地运营。",
      subcopy:
        "CloudLine Studio 是一家咨询公司，与新加坡和马来西亚富有雄心的团队携手合作。我们运用 AI 将您的营销与销售效率提升 300%，并建立可持续的运营体系。",
      ctaPrimary: "预约咨询",
      ctaSecondary: "查看我们的案例",
      stat1: "营销与销售效率",
      stat2Value: "7+ 年",
      stat2: "为成长团队提供咨询",
    },
    services: {
      eyebrow: "我们的服务",
      heading: "一家咨询公司，掌握完整的增长全局",
      subcopy:
        "大多数机构只解决其中一环，却忽略其余。我们将营销、转型与运营连接起来，让增长成为您企业真正可持续的能力。",
      pillars: [
        {
          name: "数字营销",
          description:
            "持续累积的需求。通过 SEO、SEM、付费社交与内容，为您的销售管道带来真正合适的客户——而不仅仅是流量。",
          points: ["效果与付费媒体", "SEO 与内容体系", "品牌与定位", "营销分析"],
        },
        {
          name: "业务转型",
          description:
            "AI 驱动的变革。我们整合您的工具、数据与团队，让整个企业协同运作——决策更快。",
          points: ["AI 工作流自动化", "系统与数据整合", "CRM 与销售赋能", "变革管理"],
        },
        {
          name: "运营优化",
          description:
            "从容且可扩展的体系。我们优化实际的工作方式，削减浪费的开支，消除阻碍增长的瓶颈。",
          points: ["流程设计", "成本与订阅审计", "报表与仪表板", "运营节奏"],
        },
      ],
    },
    work: {
      eyebrow: "我们的案例",
      heading: "深受区域内各团队信赖",
      subcopy: "从医疗、科技到餐饮与专业服务——众多领先品牌选择与我们携手成长。",
      satisfaction: "客户满意度平均 4.9 / 5 · 已交付 120+ 个项目",
    },
    about: {
      eyebrow: "为何选择 CloudLine",
      heading: "一家深入您业务内部、而不仅停留在表面的咨询公司",
      body:
        "我们将敏锐的营销策略与亲力亲为的转型和运营工作相结合。这意味着我们不只是交付一份方案——我们会落地 AI 工作流、整合工具，并构建您团队每天都会使用的系统。",
      points: [
        "每个项目都有资深顾问参与",
        "以 AI 为先，贯穿营销、销售与运营",
        "以营收与效率衡量，而非虚荣指标",
        "精品化专注——只承接我们能做到卓越的工作",
      ],
    },
    outcomes: {
      eyebrow: "会有什么改变",
      heading: "当整个体系运转起来时的样子",
      subcopy: "客户在第一个季度内就能切实感受到的改变——不是某一天，而是很快。",
      items: [
        { title: "高端定价能力", description: "不再以价格竞争。清晰的定位让您自信地将价格提高 40–80%。" },
        { title: "吸引合适的客户", description: "与重视品质的客户合作——围绕您真正想做的工作打造业务。" },
        { title: "可预测的增长", description: "用稳定且持续累积的营收取代忽高忽低的周期，让您能够从容规划。" },
        { title: "更快的销售周期", description: "当价值清晰、销售漏斗自动化时，潜在客户决策更快。" },
        { title: "行业认可", description: "成为您领域中的不二之选——人们引用并推荐的名字。" },
        { title: "轻松的口碑转介", description: "当全程体验都出色时，您的客户会主动为您带来新客户。" },
      ],
    },
    process: {
      eyebrow: "我们的工作方式",
      heading: "从诊断到成果，清晰的三步路径",
      steps: [
        { title: "诊断", description: "我们梳理您的销售漏斗、工具与运营，精准找出增长与利润流失的环节。" },
        { title: "设计", description: "我们为您的企业量身设计营销引擎、AI 驱动的系统与运营模式。" },
        { title: "交付", description: "我们与您的团队并肩落地，持续衡量，并交付能不断累积成效的系统。" },
      ],
    },
    quote: {
      text:
        "“CloudLine 每月为我们的系统节省超过 10 万新元，并在一个季度内将预约量与营收提升了 40%——同时终于让我们各部门步调一致。”",
      attribution: "运营主管 · ClearSK 医美诊所，新加坡",
    },
    cta: {
      heading: "一起打造下一步",
      subcopy:
        "告诉我们您想在哪里实现增长。我们将为您指明最快、最从容的路径——从一次免费的营销、销售与运营增长审计开始。",
      ctaPrimary: "预约咨询",
      ctaSecondary: "查看客户成果",
    },
    footer: {
      tagline: "以数据驱动的营销方案，带来可衡量的成果，推动业务增长。",
      servicesTitle: "服务",
      companyTitle: "公司",
      contactTitle: "联系",
      services: ["效果营销", "网站建设", "SEO 优化", "网红营销"],
      company: ["关于我们", "案例研究", "价格", "博客", "招贤纳士"],
      location: "吉隆坡，马来西亚",
      getInTouch: "联系我们",
      rights: "版权所有。",
      privacy: "隐私政策",
      terms: "服务条款",
    },
  },
} as const
