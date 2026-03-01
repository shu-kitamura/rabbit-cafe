# rabbit-cafe

## 概要

`rabbit-cafe` は、Astro 5 で構築した「うさぎカフェ」のLPサンプルです。  
以下で公開しています。  
https://lp-rabbit-cafe.shu-kita.net/

UI デザインのソースは `docs/gui-design.pen`、実装コードは `src/` 配下にあります。  
静的アセットは `src/assets/` と `public/` に配置しています。

## 開発コマンド

リポジトリのルートで `pnpm` を使って実行します。

| コマンド | 内容 |
| :-- | :-- |
| `pnpm install` | 依存関係をインストールします。 |
| `pnpm dev` | Astro の開発サーバーを起動します。 |
| `pnpm build` | 本番用のビルドを `dist/` に出力します。 |
| `pnpm preview` | Astro のプレビューサーバーでビルド結果を確認します。 |
| `pnpm preview:wrangler` | `astro build` 実行後、`wrangler dev` で Cloudflare 想定のローカル確認を行います。 |
| `pnpm lint` | `oxlint` でコードを検査します。 |
| `pnpm lint:fix` | `oxlint` の安全な修正を適用します。 |
| `pnpm fmt` | `oxfmt` でフォーマット差分を検査します。 |
| `pnpm fmt:fix` | `oxfmt` でフォーマットを適用します。 |
| `pnpm astro check` | Astro の診断を実行します。 |

## 技術スタック

- Astro 5
- TypeScript
- Cloudflare Wrangler 4
- oxlint
- oxfmt
- pnpm

## ローカルでの立て方

1. 依存関係をインストールします。

```sh
pnpm install
```

2. 開発サーバーを起動します。

```sh
pnpm dev
```

3. ブラウザで `http://localhost:4321` を開きます。

4. ビルド後の確認が必要な場合は、用途に応じて次を使います。

```sh
pnpm preview
```

または

```sh
pnpm preview:wrangler
```
