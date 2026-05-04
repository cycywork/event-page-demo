# 活動頁框架使用說明

## 1. 專案目的
此 `template/` 目錄提供一份可重用的活動頁骨架，目標是：
- 快速建立新年度活動頁。
- 將共用版型拆成可維護的 HTML/CSS/JS。
- 降低每次切版的重工成本。

## 2. 檔案結構

```text
template/
├── index.html
├── README.md
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── sections.css
│   └── utilities.css
├── js/
│   └── main.js
└── images/
    ├── hero/
    ├── common/
    ├── coupon/
    ├── product/
    └── booklist/
```

## 3. class 命名規則
- `l-`：layout（版面骨架）
- `s-`：section（頁面區塊）
- `c-`：component（可重用元件）
- `u-`：utility（單一職責工具類）
- `js-`：JavaScript hook（給 JS 綁定，不承載視覺）
- `is-`：state（狀態類，例如展開、固定）

> 建議：避免用 `#id` 做樣式主體，盡量以 class 管理。

## 4. 新活動製作流程
1. 複製 `template/` 成新年度目錄（例如 `2027tibe/`）。
2. 在 `index.html` 替換 SEO 與 OG 資訊（title/description/image/url）。
3. 依活動需求調整 sections 順序與內容。
4. 放入對應圖片到 `images/` 子資料夾。
5. 如需新樣式，優先加在 `sections.css`（區塊）或 `components.css`（元件）。
6. 最後做靜態檢查（檔案路徑、RWD、按鈕錨點）。

## 5. 如何更換主題色
主題色集中在 `css/base.css` 的 CSS 變數：
- `--bg`
- `--surface`
- `--surface-soft`
- `--text`
- `--muted`
- `--primary`
- `--primary-strong`
- `--border`

只需調整上述變數即可整體換色，不用逐段改 CSS。

## 6. 各 section 使用說明
- `#hero`：主視覺與主標題，建議含活動檔期與主 CTA。
- `#coupon`：優惠卡片區，適合放分檔期促銷。
- `#product`：商品推薦或分類入口。
- `#award`：得獎公告表格（可替換資料列）。
- `#booklist`：書單/榜單展示。
- `#notice`：活動辦法與限制條款。
- `header .sns`：社群分享入口（Facebook/LINE）。
- `.floatboard`：快速導覽（TOP/Notice）。
- `footer`：版權與客服資訊。
