# HER_BYCLAUDE Implementation Plan: Luxury Home Design Update

## 1. Headline (H1)
**"La tua casa, come l'hai sempre immaginata"**

Emotional, first-person aspiration. Keep it short — max 8 words on two lines.

**Eyebrow text (above H1):**
`ARREDAMENTO · CUCINE · OUTLET`
Uppercase, 11px, wide tracking (0.15em). Sets category context before the headline.

**Primary CTA:**
`Scopri i nostri prodotti →`
Dark fill, light text. Square-ish corners (2–4px radius). Uppercase with letter-spacing.

**Secondary CTA:**
`Richiedi un preventivo`
Outline style. Sits beside primary — gives a softer path for browsers not ready to buy.

## 2. Hero Image Guidance
- **Layout:** Full-bleed, 100vw × 85–100vh.
- **Visual:** Warm-toned kitchen or living room photo, soft natural light.
- **Overlay:** Dark gradient overlay on bottom 60% so headline text stays legible (`linear-gradient(to top, rgba(30,18,10,0.75), transparent)`).
- **Source:** Unsplash queries: "italian kitchen warm light", "modern living room wood", "cucina moderna legno".
- **Performance:** Use `object-fit: cover` on an `<img>` or set as CSS `background-image` with `background-size: cover`.

## 3. Typography

### Display / Headings
**Cormorant Garamond**
*Arredamento su misura per la tua famiglia*
Weight 300–400. Never bold. Italic for accents. Google Fonts, free.

### Body / UI Text
**Outfit**
*Da oltre 20 anni aiutiamo le famiglie a trasformare la propria casa in un luogo unico.*
`SCOPRI LA COLLEZIONE  →`
Weight 400 body, 500 buttons/labels. Clean, modern, pairs well with Cormorant.

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Outfit:wght@400;500&display=swap');
```

### Type Scale
- **Hero H1:** Cormorant Garamond, 56–72px desktop / 36px mobile, weight 300
- **Section H2:** Cormorant Garamond, 40px, weight 400
- **Card titles:** Cormorant Garamond, 22px, weight 400
- **Body text:** Outfit, 16px, weight 400, line-height 1.7
- **Labels / caps:** Outfit, 11–12px, weight 500, letter-spacing 0.12em, uppercase

## 4. Color Palette

### CSS Variables
```css
:root {
  --color-cream:      #F5EFE6;   /* page background */
  --color-warm-white: #FBF8F4;   /* card surfaces */
  --color-wood:       #A0724A;   /* accent, icon fills */
  --color-espresso:   #2C2219;   /* primary text, dark CTAs */
  --color-stone:      #6B5B4E;   /* secondary text */
  --color-border:     #E0D5C8;   /* subtle dividers */
}
```

### Usage Guidelines

#### Backgrounds
- **Page body:** `--color-cream`
- **Cards / nav / footer:** `--color-warm-white`
- **Hero (behind image):** `--color-espresso`

#### Text & Accents
- **All body / heading:** `--color-espresso`
- **Muted / secondary:** `--color-stone`
- **Hover accents, icons:** `--color-wood`
- **Dividers:** `--color-border`
