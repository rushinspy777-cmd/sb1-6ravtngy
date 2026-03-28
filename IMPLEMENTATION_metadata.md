# Website Metadata & Social Optimization Plan

This document outlines the strategy to replace generic Vercel previews with a professional, brand-consistent identity and implement a comprehensive metadata system for **AM Mida**.

## 1. 🎨 Asset Generation & Branding
To establish a premium presence across all platforms, we will generate and implement the following assets:

### A. Professional Snapshot (OG Image)
- **Goal**: Replace default Vercel screenshots with a curated "hero snapshot" of the website's aesthetic.
- **Strategy**: Use an image that showcases the main brand value (Italian premium furniture) with the logo overlayed.
- **Implementation**: Save as `og-image.jpg` in the assets directory.
- **Design Specs**: 1200x630px (Standard for WA, FB, LI).

### B. Favicon & Identity Set
- **Favicon**: Clean, minimalist version of the AM Mida logo.
- **Apple Touch Icon**: 180x180px for iOS home screens.
- **Manifest**: `manifest.webmanifest` for PWA features.

## 2. 🕵️ SEO & Meta Implementation
We will update `index.html` to include a robust set of tags optimized for reach and premium feel.

### Meta Tags
- **Title**: `AM Mida | Arredamento Completo e Cucine ad Agropoli - Design Italiano`
- **Description**: `Qualità e risparmio hanno trovato casa. Dal 1966, AM Mida arreda la tua casa con cucine su misura e mobili di alta qualità al miglior rapporto qualità-prezzo.`
- **Keywords**: `Arredamento Agropoli, Cucine su misura Salerno, Mobili outlet Italia, AM Mida design.`
- **Theme Color**: `#1E120A` (Matching the brand's Espresso color).

### Open Graph (Social Sharing)
- `og:type`: `website`
- `og:url`: `https://ammida.it` (or verified production URL)
- `og:title`: Same as Page Title.
- `og:description`: Optimized snippet for social previews.
- `og:image`: Path to the generated snapshot.

### Twitter Cards
- `twitter:card`: `summary_large_image`
- `twitter:title`: Same as Title.
- `twitter:description`: Same as Description.
- `twitter:image`: Same as OG Image.

## 3. 🚀 Implementation Steps

1. **Asset Creation**:
   - Generate `og-image.jpg` representing the website's interior design essence.
   - Generate `favicon.ico` and `apple-touch-icon.png`.
2. **Structural Update**:
   - Update `<head>` in `index.html` with all new tags.
   - Inject the path to the newly created assets.
3. **Vercel Optimization**:
   - Ensure the `og:image` path is absolute (preferred by Vercel/Social crawlers).
   - Use the `metadata` property if the project scales to multi-route with a library like `react-helmet-async` (optional for now, index.html is prioritized).

## 4. 📝 Italian SEO Strategy
Since the website is in Italian, we will ensure:
- `html lang="it"` is correctly set (Done).
- Metadata values are localized to capture regional search intent (Agropoli, Salerno, Italy).

## 5. ✅ Implementation Checklist

- [ ] **Asset Generation**:
  - [ ] Generate high-res `og-image.jpg` (1200x630px).
  - [ ] Generate `favicon.ico` (32x32px).
  - [ ] Generate `apple-touch-icon.png` (180x180px).
- [ ] **Structural Updates**:
  - [ ] Update `<title>` tag for SEO.
  - [ ] Add `<meta name="description">` with Italian keyword focus.
  - [ ] Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`).
  - [ ] Add Twitter Card tags.
  - [ ] Set `theme-color` meta tag.
- [ ] **Verification**:
  - [ ] Test local preview of metadata tags.
  - [ ] Verify asset paths in `index.html`.
  - [ ] (After push) Check social previews via tools (e.g., [OpenGraph.xyz](https://www.opengraph.xyz)).

---
> [!NOTE]
> Once this plan is approved, I will proceed with generating the visual assets and updating the code.
--end--