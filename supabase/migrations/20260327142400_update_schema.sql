/*
  # Update Products Table Schema for Taxonomy Support
  
  ## Changes
  - Add `sub_category` (text) to `products` table
  - Add `material` (text) to `products` table for filtering
  - Add `style` (text) to `products` table for filtering
  - Add `dimensions_w` (numeric), `dimensions_h` (numeric), `dimensions_d` (numeric) to `products` table
  - Add `is_outlet` (boolean) for clearance logic
  - Add `discount_percentage` (numeric) for promo logic
*/

-- Add new columns to products table
ALTER TABLE products 
  ADD COLUMN IF NOT EXISTS sub_category text,
  ADD COLUMN IF NOT EXISTS material text,
  ADD COLUMN IF NOT EXISTS style text,
  ADD COLUMN IF NOT EXISTS dimensions_w numeric,
  ADD COLUMN IF NOT EXISTS dimensions_h numeric,
  ADD COLUMN IF NOT EXISTS dimensions_d numeric,
  ADD COLUMN IF NOT EXISTS is_outlet boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS discount_percentage numeric DEFAULT 0;

-- Update sample products with new taxonomy
UPDATE products SET category = 'Living', sub_category = 'Sofas', material = 'Fabric', style = 'Modern' WHERE name = 'Copenhagen Sofa';
UPDATE products SET category = 'Living', sub_category = 'Dining', material = 'Wood', style = 'Minimalist' WHERE name = 'Stockholm Dining Table';
UPDATE products SET category = 'Bedroom', sub_category = 'Adult sets', material = 'Wood', style = 'Modern' WHERE name = 'Helsinki Bed Frame';
UPDATE products SET category = 'Living', sub_category = 'Wall Units', material = 'Wood', style = 'Contemporary' WHERE name = 'Bergen Bookshelf';
UPDATE products SET category = 'Living', sub_category = 'Dining', material = 'Wood', style = 'Modern' WHERE name = 'Trondheim Coffee Table';
UPDATE products SET category = 'Living', sub_category = 'Sofas', material = 'Fabric', style = 'Contemporary' WHERE name = 'Oslo Lounge Chair';
