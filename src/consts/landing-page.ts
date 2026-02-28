export const landingPageContent = {
  meta: {
    title: "うさぎカフェ | 街なかにある静かなうさぎカフェ",
    description:
      "やさしいうさぎとふれあい、季節のラテを味わい、午後の時間をゆっくりほどいていける街なかのうさぎカフェ。",
  },
  brand: {
    name: "うさぎカフェ",
    backToTopLabel: "うさぎカフェ トップへ戻る",
  },
  headerCta: {
    label: "席を予約する",
    href: "#access",
  },
  navItems: [
    { label: "ホーム", href: "#top" },
    { label: "メニュー", href: "#menu" },
    { label: "うさぎ紹介", href: "#bunnies" },
    { label: "アクセス", href: "#access" },
  ],
  hero: {
    eyebrow: "やわらかな時間、あたたかい飲み物、好奇心いっぱいのうさぎたち。",
    titleLines: ["街なかにある", "静かなうさぎカフェ。"],
    leadLines: [
      "やさしいうさぎとふれあい、季節のラテを味わい、",
      "午後の時間をゆっくりほどいていけます。",
    ],
    primaryCta: {
      label: "うさぎ時間を予約",
      href: "#access",
    },
    secondaryCta: {
      label: "本日のメニューを見る",
      href: "#menu",
    },
    visualCaption: "メイン写真プレースホルダー：やわらかな光、うさぎ、木のテーブル",
    visualChips: ["やわらかな光", "うさぎ", "木のテーブル"],
  },
  concept: {
    eyebrow: "午後をほどく、小さな逃げ場。",
    titleLines: ["つい長居したくなる", "理由をここで伝える。"],
    copyLines: [
      "このラフでは、落ち着く空間、うさぎとのふれあい、",
      "カフェ体験の魅力が伝わる流れを先に固めています。",
    ],
    cards: [
      {
        title: "静かな席",
        body: "やわらかな光と落ち着いたテーブル。",
        tone: "card-plain",
      },
      {
        title: "うさぎとの時間",
        body: "やさしく見守るふれあい体験。",
        tone: "card-warm",
      },
      {
        title: "季節のメニュー",
        body: "うさぎをモチーフにしたドリンクとスイーツ。",
        tone: "card-sage",
      },
    ],
  },
  menu: {
    id: "menu",
    eyebrow: "おすすめメニュー",
    titleLines: ["看板ドリンクと", "スイーツ"],
    cards: [
      {
        title: "キャラメルヘイラテ",
        body: "看板ドリンクの主役カード。",
        tone: "card-soft",
      },
      {
        title: "ベリーバニーパフェ",
        body: "季節デザートの紹介カード。",
        tone: "card-peach",
      },
      {
        title: "週末ティーセット",
        body: "ふたり向けの限定プラン。",
        tone: "card-mint",
      },
    ],
  },
  experience: {
    id: "bunnies",
    photoLabel: "写真プレースホルダー：うさぎ、木の質感、午後の光",
    eyebrow: "過ごし方のイメージ",
    titleLines: ["到着して、くつろいで、", "うさぎに会って、", "デザートで締める。"],
    copyLines: ["来店の流れ、衛生面の案内、", "はじめての方向け説明をここに置きます。"],
    visitSteps: ["到着", "くつろぐ", "ふれあう", "味わう"],
    supportNote: "補足帯：落ち着いた案内、時間制、スタッフ常駐。",
  },
  access: {
    id: "access",
    eyebrow: "アクセスと予約",
    titleLines: ["先に予約して、", "迷わずたどり着く。"],
    copyLines: ["営業時間、最寄り駅、", "簡単な利用ルールをここに。"],
    mapTitle: "地図プレースホルダー＋営業時間",
    notes: ["11:00-19:00 毎日営業", "最終入店 18:00", "駅から徒歩2分 / 予約優先"],
  },
  reservation: {
    titleLines: ["ゆっくり過ごす", "午後を予約"],
    copyLines: ["予約UIの想定枠。", "日付、人数、プラン選択を配置。"],
    fields: {
      dateLabel: "日付",
      defaultDate: "2026-03-01",
      guestLabel: "人数",
      guestOptions: ["2名", "3名", "4名"],
    },
    buttonLabel: "予約をはじめる",
  },
  footer: {
    id: "footer",
    descriptionLines: ["お茶とスイーツ、そしてやさしいうさぎに会える、", "街の小さな隠れ家。"],
    links: [
      { label: "メニュー", href: "#menu" },
      { label: "ご予約", href: "#access" },
      { label: "アクセス", href: "#access" },
      { label: "Instagram", href: "#top" },
    ],
    metaLines: ["11:00-19:00 毎日営業", "最終入店 18:00", "LPラフワイヤー"],
  },
} as const;
