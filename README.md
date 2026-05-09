<div align="center">

# GPA 計算機

<img width="200" src="public/icon.png" alt="logo">

#### 快速計算 GPA，分數太低別怪我...

</div>

## 特色

1. 快速計算 GPA
2. 支援暗黑模式
3. 支援 RWD
4. 支援 GPA 4.3 與百分制（依臺科規則）

## 如何使用

### [→ 網址點我 ←](https://gpa-calculator.vicwen.app/)

根據積分個數與成績來快速計算 GPA。

## 本機開發

```bash
pnpm install
pnpm dev
```

## 建置

```bash
pnpm build
```

## 相關事項

1. 本專案僅前端，不用擔心你的超高 GPA 會被我看到。
2. 本專案是以 GPA 4.3 標準為計算基礎。
3. 有任何 bug 或建議，歡迎開 Issue 或 PR。

## Tech Stack

- [Vite](https://vite.dev/) - Build tool and dev server
- [React 18](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Development language
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Reusable component patterns
- [Radix UI](https://www.radix-ui.com/) - Accessible headless UI primitives
- [Lucide React](https://lucide.dev/) - Icon library
- [pnpm](https://pnpm.io/) - Package manager
- [GitHub Pages](https://pages.github.com/) - Deployment platform

## Update Log 更新日誌

- 2024/09/26
  - 新增百分制（依臺科規則）
  - 新增注意事項
  - 簡化單個檔案內容
  - 新增 metadata 資料
- 2024/06/12
  - 剔除非必要計分模式（v1、v3）
  - 將 package tool `npm` 改成 `bun`
  - 修改 spaghetti code
  - 修改計分 table
- 2024/01/10
  - 更名為：「臺科大 GPA 計算機」
  - 修改 GPA 計算方式（新增 D、E）
- 2024/01/01
  - 新增 v3（Thanks for @BWsix）
  - 新增個人資訊
- 2023/12/31
  - [修復 bug](https://github.com/viiccwen/GPA-calculator/issues/1)：錯誤引用 index 而導致的 bug 和 crash
  - 支持 RWD
- 2023/12/29 - 新增 v2
- 2023/12/28 - 新增 v1
