# HERO_BENTO_PLAN

Replace the current full-screen Hero carousel with a high-end, 4-tile Bento grid featuring "Luxury Boutique" aesthetics. This change will modernize the landing experience with a structured, visually hierarchical layout.

## User Review Required

> [!IMPORTANT]
> The current carousel and its associated hotspots will be completely removed. If any hotspot functionality needs to be preserved in the new grid, please clarify. I will assume for now that each grid tile is a link to its respective category or a general shop page.

> [!NOTE]
> The "Luxury Boutique" vibe will be achieved using a combination of `Playfair Display` (serif) for titles and `Inter` (sans-serif) for labels/UI, as already configured in the project.

## Proposed Changes

### Hero Component Refactor

#### [MODIFY] [Hero.tsx](file:///c:/Users/wave/OneDrive/Документы/website lessons/repos/furn-ptotov1.0/sb1-6ravtngy/src/components/Hero/Hero.tsx)
- **Structure**: Replace the `AnimatePresence` carousel with a CSS Grid (Tailwind).
  - Desktop: `grid-cols-3` layout.
  - Mobile: `grid-cols-1` (stacked).
- **Tiles**:
  - **Tile 1 (Large)**: "Soggiorno Moderno" (Living Room). Desktop: `md:col-span-2 md:row-span-2`.
  - **Tile 2 (Medium)**: "Cucine d'Autore" (Kitchens). Desktop: `md:col-span-1 md:row-span-1`.
  - **Tile 3 (Small)**: "Outdoor & Giardino" (Backyard). Desktop: `md:col-span-1 md:row-span-1` (Nested or bottom row).
  - **Tile 4 (Small)**: "Ufficio & Smart Working" (Office). Desktop: `md:col-span-1 md:row-span-1`.
  - *Grid Detail*:
    - Main container: `grid md:grid-cols-3 md:grid-rows-2 h-[85vh] gap-4`
    - Tile 1: `md:col-span-2 md:row-span-2` (Spans left 2/3 and both rows)
    - Tile 2: `md:col-span-1 md:row-span-1` (Top right)
    - Nested Grid for Tile 3 & 4: The 3rd column's bottom slot will be split into two small squares.
    - So Tile 2 (top right), then a nested `grid grid-cols-2 gap-4` in the bottom-right slot?
    - User said: "Tile 3 (Small/Square): Outdoor & Giardino", "Tile 4 (Small/Square): Ufficio & Smart Working".
    - Layout:
      ```
      [ Tile 1 (L) ] [ Tile 2 (M) ]
      [            ] [ Tile 3 (S) ] [ Tile 4 (S) ]
      ```
      Wait, if Tile 3 and 4 are side-by-side in the Bottom-Right slot, they are 1/6 width each.

- **Aesthetics**:
  - Image: `object-cover` with `group-hover:scale-110` transition.
  - Overlay: Subtle gradient overlay for text legibility.
  - Text:
    - Label (Category): Sans-serif, uppercase, tracking-[0.2em], text-xs.
    - Title: Serif (Playfair Display), leading-tight.
  - Hover: Subtle scale of the entire tile or just the image.

- **Clean Up**:
  - Completely remove all carousel logic (slides, state, intervals, arrows, hotspots).
  - Remove linear progress navigation.
  - Remove Ken Burns animation logic.

### Data Layer

#### [MODIFY] [data.ts](file:///c:/Users/wave/OneDrive/Документы/website lessons/repos/furn-ptotov1.0/sb1-6ravtngy/src/constants/data.ts)
- Remove `HERO_SLIDES` and the `Slide` / `Hotspot` interfaces if no longer used.
- (Optional) Export a new `BENTO_TILES` array if we want to keep it data-driven, or hardcode it in `Hero.tsx` as requested for now.

### Technical Implementation Details

- **Animations**:
  - Use `framer-motion` for entrance.
  - Hook into `@studio-freight/react-lenis` by using standard `motion` props (since Lenis handles the scroll smoothness, these will appear very fluid).
  - Stagger Children: Fade in and slide up slightly.
  - High performance transitions.

## Verification Plan

### Automated Tests
- N/A.

### Manual Verification
- Verify responsiveness on mobile (stacked vertical layout).
- Verify the 2/3 width ratio on desktop for Tile 1.
- Check smooth hover effects on all tiles.
- Verify text legibility against Unsplash images.
- Ensure the old carousel code is fully purged.
