# HyRead 書展活動頁通用框架

這份框架依照目前 README 規劃整理：Navbar / Hero / Coupon / Product / Table / Footer，並保留 FAQ、CTA、Banner / 圖文區的擴充位置。

## 檔案結構

```txt
tibe-template-framework/
├── index.html
├── css/
│   └── event-framework.css
├── js/
│   └── event-framework.js
└── images/
```

## 使用方式

1. 將資料夾複製成新活動年份，例如 `2027tibe/`
2. 替換 `images/` 裡的圖片
3. 修改 `index.html` 的文字、連結與區塊順序
4. 只在 `css/event-framework.css` 最上方 `:root` 改主色、背景色、圓角等變數
5. 單次活動才會出現的區塊，放在 `社群活動 / 年度百大` 之後、`活動辦法` 之前

## 圖片命名建議

```txt
logo.png
og.jpg
main_lg.png
main_md.png
main_sm.png
coupon_01.png
coupon_02.png
coupon_03.png
product_gaze_01.png
product_gaze_02.png
bookfair_map.png
```

## 區塊說明

- Layout：Navbar、Footer
- Sections：Hero、Coupon、Product、Table
- 可擴充：FAQ、CTA、Banner / 圖文區
