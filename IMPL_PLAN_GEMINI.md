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

- [x] **Urgency Badging: "Pronta Consegna"**
  - [x] Logic to display "Pronta Consegna" (In Stock) badge on product cards.
  - [x] Visual styling for the badge (e.g., green accent/pulse effect for visibility).
- [x] **Advanced Filtering System**
  - [x] **Material:** Wood, Laminate, Metal, Fabric.
  - [x] **Style:** Modern, Classic, Contemporary, Minimalist.
  - [x] **Dimensions:** Width, Height, Depth sliders or range toggles.
- [x] **Lead Generation (High-Ticket Items)**
  - [x] Implementation of "Request a Quote" CTA on Kitchen product pages.
  - [x] Implementation of "Book a Design Consultation" CTA for entire room sets.
  - [x] Integrated lead capture modal with WhatsApp/Email options.

---

## 3. Development Phases
A structured roadmap for technical execution.

### Phase 1: Core Architecture & Navigation Setup
- [x] Initialize project with React, Vite, and Tailwind CSS.
- [x] Implement responsive Mega-Menu navigation for all 5 pillars.
- [x] Setup Breadcrumb logic for deep category nesting.
- [x] Configure Supabase/Database schema for Product categories.

### Phase 2: Product Data Mapping & Templating
- [x] Design "Bulky Furniture" product page template (High-res gallery focus).
- [x] Map product data fields: Dimensions, Technical Specs, Material variants.
- [x] Create reusable ProductCard component with Urgency Badge support.
- [x] Implement dynamic routing for categories and sub-categories.

### Phase 3: "Outlet" & "Promo" Logic
- [x] Implement Discount Badge logic (Percentage vs. Fixed amount).
- [x] Create a dedicated "Outlet" section for clearance items.
- [x] Add "Flash Sale" countdown components for promotional periods.
- [x] Finalize "Value for Money" messaging across the UI (e.g., "Best Price Guaranteed" badges).

---

## 4. Performance Goals
Ensuring a seamless and fast experience for high-resolution assets.

- [x] **Mobile Responsiveness**
  - [x] Mobile-first navigation (Sticky bottom menu or optimized drawer).
  - [x] Touch-friendly product filters and gallery swipes.
- [x] **Image Optimization**
  - [x] Implement NextGen formats (WebP/AVIF) for furniture galleries.
  - [x] Lazy loading for off-screen product images.
  - [x] Adaptive image sizing based on device DPI.
- [x] **SEO & Load Speed**
  - [x] Optimize First Contentful Paint (FCP) below 1.5s.
  - [x] Semantic HTML5 for product hierarchy (H1 categories, Schema.org markup).

---

## Technical Stack Recommendation
- **Frontend:** React + Tailwind CSS (Primary)
- **State Management:** TanStack Query (for product fetching/filtering)
- **Backend/DB:** Supabase (for product catalog and lead capture)
- **Animations:** Framer Motion (for premium micro-interactions)
- **Image CDN:** Cloudinary or Supabase Storage with transform presets
