import rabbitImage from "../assets/concept/rabbit.webp";
import sweetsImage from "../assets/concept/sweets.webp";
import tableImage from "../assets/concept/table.webp";
import heroRabbitsImage from "../assets/hero/rabbits.webp";
import cafeLatteImage from "../assets/menu/cafe-latte.png";
import parfaitImage from "../assets/menu/parfait.png";
import teaSetImage from "../assets/menu/tea-set.png";
import komugiImage from "../assets/experience/komugi.webp";
import mimiImage from "../assets/experience/mimi.webp";
import omameImage from "../assets/experience/omame.webp";
import leoImage from "../assets/experience/leo.webp";

export const landingPageContent = {
  meta: {
    title: "うさぎカフェ | 街なかの静かなうさぎカフェ",
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
    titleLines: ["街なかの静かな", "うさぎカフェ"],
    leadLines: [
      "やさしいうさぎとふれあい、季節のラテを味わい、",
      "午後の時間をゆっくりほどいていけます。",
    ],
    primaryCta: {
      label: "うさぎ時間を予約",
      href: "#access",
    },
    secondaryCta: {
      label: "おすすめメニューを見る",
      href: "#menu",
    },
    visualImage: heroRabbitsImage,
    visualAlt: "やわらかな光の中で寄り添ううさぎたち",
  },
  concept: {
    eyebrow: "忙しない午後に、深呼吸できる居場所。",
    titleLines: ["静かにほどける時間を", "うさぎと一緒に。"],
    copyLines: [
      "やわらかな光の席、そっと寄り添ううさぎたち、",
      "甘さ控えめのスイーツで気持ちまでふっと軽くなります。",
    ],
    cards: [
      {
        title: "静かな席",
        body: "ひとり時間も心地よく。",
        tone: "card-plain",
        image: tableImage,
        imageAlt: "やわらかな光が差し込む木のテーブル席",
      },
      {
        title: "うさぎとの時間",
        body: "はじめてでも安心。",
        tone: "card-warm",
        image: rabbitImage,
        imageAlt: "落ち着いた表情でこちらを見るうさぎ",
      },
      {
        title: "季節のメニュー",
        body: "限定の甘いごほうび。",
        tone: "card-sage",
        image: sweetsImage,
        imageAlt: "うさぎをモチーフにしたドリンクとスイーツ",
      },
    ],
  },
  menu: {
    id: "menu",
    eyebrow: "今日のおすすめ",
    titleLines: ["うさぎモチーフのドリンクとスイーツ"],
    cards: [
      {
        title: "キャラメルヘイラテ",
        body: "定番人気の一杯。",
        tone: "card-soft",
        image: cafeLatteImage,
        imageAlt: "キャラメルヘイラテのメニュー写真",
      },
      {
        title: "ベリーバニーパフェ",
        body: "季節の人気パフェ。",
        tone: "card-peach",
        image: parfaitImage,
        imageAlt: "ベリーバニーパフェのメニュー写真",
      },
      {
        title: "週末ティーセット",
        body: "午後限定のティーセット。",
        tone: "card-mint",
        image: teaSetImage,
        imageAlt: "週末ティーセットのメニュー写真",
      },
    ],
  },
  experience: {
    id: "bunnies",
    eyebrow: "うさぎ紹介",
    titleLines: ["今日会えるうさぎ"],
    copyLines: ["個性を持ったうさぎたちと触れ合えます。", "お気に入りの子を見つけてください。"],
    activeIndex: 0,
    bunnies: [
      {
        name: "こむぎ",
        age: "1歳",
        summary: "おだやか / ひとなつこい / そっと近づくタイプ",
        image: komugiImage,
        imageAlt: "こむぎがカメラを見つめる様子",
      },
      {
        name: "みみ",
        age: "2歳",
        summary: "好奇心たっぷり / 耳がぴんと立つ / ぴょんと近づくタイプ",
        image: mimiImage,
        imageAlt: "みみが少し首をかしげる様子",
      },
      {
        name: "おまめ",
        age: "8か月",
        summary: "まだ少し慎重 / 慣れると足元まで来てくれる",
        image: omameImage,
        imageAlt: "おまめが落ち着いて座っている様子",
      },
      {
        name: "レオ",
        age: "3歳",
        summary: "元気いっぱい / 好奇心旺盛 / すぐに駆け寄るタイプ",
        image: leoImage,
        imageAlt: "レオが元気に走り回る様子",
      },
    ],
  },
  access: {
    id: "access",
    eyebrow: "アクセスと予約",
    titleLines: ["アクセス"],
    copyLines: [
      "日付を選んで予約することもできます。",
      "予約なしでも、空いていればご案内可能です。",
    ],
    mapTitle: "店舗情報",
    notes: [
      "営業時間 : 11:00-19:00",
      "最終入店 : 18:00",
      "アクセス : ○○駅から徒歩2分 / 駐車場なし",
    ],
  },
  reservation: {
    titleLines: ["予約"],
    copyLines: ["日付・人数を選択してください。"],
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
    metaLines: [
      "営業時間 : 11:00-19:00",
      "最終入店 : 18:00",
      "アクセス : ○○駅から徒歩2分 / 駐車場なし",
    ],
  },
} as const;

export type LandingPageContent = typeof landingPageContent;
export type BrandContent = LandingPageContent["brand"];
export type HeaderCtaContent = LandingPageContent["headerCta"];
export type NavItem = LandingPageContent["navItems"][number];
export type HeroContent = LandingPageContent["hero"];
export type ConceptContent = LandingPageContent["concept"];
export type MenuContent = LandingPageContent["menu"];
export type ExperienceContent = LandingPageContent["experience"];
export type AccessContent = LandingPageContent["access"];
export type ReservationContent = LandingPageContent["reservation"];
export type FooterContent = LandingPageContent["footer"];
