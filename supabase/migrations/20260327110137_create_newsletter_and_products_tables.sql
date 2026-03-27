/*
  # Create Newsletter and Products Tables

  ## New Tables
  
  ### `newsletter_subscribers`
  - `id` (uuid, primary key) - Unique identifier for each subscriber
  - `email` (text, unique, not null) - Subscriber's email address
  - `subscribed_at` (timestamptz, default now()) - Timestamp when user subscribed
  - `is_active` (boolean, default true) - Whether subscription is active
  - `created_at` (timestamptz, default now()) - Record creation timestamp
  
  ### `products`
  - `id` (uuid, primary key) - Unique identifier for each product
  - `name` (text, not null) - Product name
  - `description` (text) - Product description
  - `price` (numeric, not null) - Product price
  - `category` (text, not null) - Product category
  - `image_url` (text) - URL to product image
  - `is_featured` (boolean, default false) - Whether product is featured
  - `stock` (integer, default 0) - Available stock quantity
  - `created_at` (timestamptz, default now()) - Record creation timestamp
  - `updated_at` (timestamptz, default now()) - Last update timestamp
  
  ## Security
  - Enable RLS on both tables
  - Newsletter subscribers: Public can insert (subscribe), only authenticated users can read
  - Products: Public can read, only authenticated users can modify
*/

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric NOT NULL,
  category text NOT NULL,
  image_url text,
  is_featured boolean DEFAULT false,
  stock integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Newsletter subscribers policies
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- Products policies
CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
  ON products
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample products
INSERT INTO products (name, description, price, category, image_url, is_featured, stock) VALUES
  ('Oslo Lounge Chair', 'A contemporary lounge chair with clean lines and exceptional comfort. Features premium upholstery and solid wood frame.', 1299, 'Seating', 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800', true, 15),
  ('Copenhagen Sofa', 'Scandinavian-inspired three-seater sofa with plush cushions and elegant design. Perfect for modern living spaces.', 2899, 'Seating', 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800', true, 8),
  ('Stockholm Dining Table', 'Solid oak dining table with minimalist design. Seats 6-8 people comfortably with timeless appeal.', 1899, 'Tables', 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800', true, 12),
  ('Helsinki Bed Frame', 'Platform bed frame crafted from sustainable hardwood. Features low-profile design and superior stability.', 2199, 'Bedroom', 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800', true, 10),
  ('Bergen Bookshelf', 'Modular bookshelf system with adjustable shelves. Combines functionality with architectural elegance.', 899, 'Storage', 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800', true, 20),
  ('Trondheim Coffee Table', 'Low-profile coffee table with walnut finish. Features hidden storage compartment and modern silhouette.', 799, 'Tables', 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800', true, 18)
ON CONFLICT (id) DO NOTHING;
