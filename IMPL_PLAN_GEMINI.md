# Implementation Plan: AM Mida Furniture E-commerce Prototype (IMPL_PLAN_GEMINI.md)

**Role:** Expert Web Implementation Architect  
**Objective:** Migrate and prototype a high-conversion furniture e-commerce site for "AM Mida" (ammida.it), optimizing for "Value for Money" messaging and premium user experience.

---

## 1. Sitemap & Taxonomy
Establish a clear, intuitive navigation structure based on core furniture categories.

- [x] **Kitchen (Cucine)**
  - [x] Modern (Moderne)
  - [x] Classic (Classiche)
  - [x] Built-in Appliances (Elettrodomestici da Incasso)
- [x] **Living (Zona Giorno)**
  - [x] Sofas (Divani)
  - [x] Wall Units (Pareti Attrezzate)
  - [x] Sideboards (Madie)
  - [x] Dining (Tavoli e Sedie)
- [x] **Bedroom (Zona Notte)**
  - [x] Adult sets (Camere Matrimoniali)
  - [x] Children’s (Camerette)
  - [x] Mattresses (Materassi)
- [x] **Office (Ufficio)**
  - [x] Desks (Scrivanie)
  - [x] Task Seating (Sedute Operative)
  - [x] Storage (Librerie e Contenitori)
- [x] **Utility/Other**
  - [x] Entryway (Ingressi)
  - [x] Bathroom (Bagno)
  - [x] Security Doors (Porte Blindate)

---

## 2. Functional Requirements
Enhance the shopping experience with specific conversion-driven features.

- [ ] **Urgency Badging: "Pronta Consegna"**
  - [ ] Logic to display "Pronta Consegna" (In Stock) badge on product cards.
  - [ ] Visual styling for the badge (e.g., green accent/pulse effect for visibility).
- [ ] **Advanced Filtering System**
  - [ ] **Material:** Wood, Laminate, Metal, Fabric.
  - [ ] **Style:** Modern, Classic, Contemporary, Minimalist.
  - [ ] **Dimensions:** Width, Height, Depth sliders or range toggles.
- [ ] **Lead Generation (High-Ticket Items)**
  - [ ] Implementation of "Request a Quote" CTA on Kitchen product pages.
  - [ ] Implementation of "Book a Design Consultation" CTA for entire room sets.
  - [ ] Integrated lead capture modal with WhatsApp/Email options.

---

## 3. Development Phases
A structured roadmap for technical execution.

### Phase 1: Core Architecture & Navigation Setup
- [ ] Initialize project with React, Vite, and Tailwind CSS.
- [ ] Implement responsive Mega-Menu navigation for all 5 pillars.
- [ ] Setup Breadcrumb logic for deep category nesting.
- [ ] Configure Supabase/Database schema for Product categories.

### Phase 2: Product Data Mapping & Templating
- [ ] Design "Bulky Furniture" product page template (High-res gallery focus).
- [ ] Map product data fields: Dimensions, Technical Specs, Material variants.
- [ ] Create reusable ProductCard component with Urgency Badge support.
- [ ] Implement dynamic routing for categories and sub-categories.

### Phase 3: "Outlet" & "Promo" Logic
- [ ] Implement Discount Badge logic (Percentage vs. Fixed amount).
- [ ] Create a dedicated "Outlet" section for clearance items.
- [ ] Add "Flash Sale" countdown components for promotional periods.
- [ ] Finalize "Value for Money" messaging across the UI (e.g., "Best Price Guaranteed" badges).

---

## 4. Performance Goals
Ensuring a seamless and fast experience for high-resolution assets.

- [ ] **Mobile Responsiveness**
  - [ ] Mobile-first navigation (Sticky bottom menu or optimized drawer).
  - [ ] Touch-friendly product filters and gallery swipes.
- [ ] **Image Optimization**
  - [ ] Implement NextGen formats (WebP/AVIF) for furniture galleries.
  - [ ] Lazy loading for off-screen product images.
  - [ ] Adaptive image sizing based on device DPI.
- [ ] **SEO & Load Speed**
  - [ ] Optimize First Contentful Paint (FCP) below 1.5s.
  - [ ] Semantic HTML5 for product hierarchy (H1 categories, Schema.org markup).

---

## Technical Stack Recommendation
- **Frontend:** React + Tailwind CSS (Primary)
- **State Management:** TanStack Query (for product fetching/filtering)
- **Backend/DB:** Supabase (for product catalog and lead capture)
- **Animations:** Framer Motion (for premium micro-interactions)
- **Image CDN:** Cloudinary or Supabase Storage with transform presets
