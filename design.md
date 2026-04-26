# PGFinder UI Design System

## 🧭 Product Summary

PGFinder is a mobile-first, location-based marketplace for discovering gas sellers, filling stations, and requesting gas delivery.

The UI should feel:
- Fast
- Trustworthy
- Local-first (Nigeria-focused UX)
- Simple and action-driven

---

## 🎯 Design Principles

- **Clarity First** → Prices, availability, and distance must be instantly visible
- **Speed** → Minimal steps to complete an order
- **Trust** → Ratings, verification badges, and transparency
- **Mobile-First** → Optimized for low-end smartphones
- **Map-Centric UX** → Location is core to the experience

---

## 🎨 Visual Style

### Colors
- Primary: Deep Green (#0B8F3A) → Energy / Gas / Trust
- Secondary: Yellow (#FFC107) → Visibility / Alerts
- Accent: Dark Blue (#0D1B2A) → Depth / UI contrast
- Background: Light Gray (#F8F9FA)
- Text: Dark (#212529)

### Typography
- Font: Poppins
- Headings: Bold
- Body: Regular
- Buttons: Medium

### UI Feel
- Clean cards
- Soft shadows
- Rounded corners (8px–12px)
- Minimal clutter

---

## 🧱 Core Layout Structure

### Global Layout

- Top Navigation (Logo, Search, Profile)
- Main Content Area
- Bottom Navigation (Mobile):
  - Home
  - Search
  - Orders
  - Profile

---

## 📱 Pages & UI Components

---

### 🏠 1. Home Page

#### Purpose
Quick access to nearby gas sellers and search

#### Sections
- Hero Section:
  - Location selector
  - Search input ("Find gas near you...")
- Quick Actions:
  - “Order Gas”
  - “Find Filling Stations”
- Nearby Sellers List
- Map Preview

#### Components
- SearchBar
- LocationSelector
- SellerCard
- MapPreviewCard

---

### 🔎 2. Search Results Page

#### Layout
Split view:
- Top: Filters
- Middle: Seller list
- Optional: Toggle Map View

#### Filters
- Price range
- Distance
- Availability
- Service type (delivery/refill)

#### Seller Card Includes
- Seller name
- Price per kg
- Distance
- Availability badge
- Rating
- CTA: “View Details”

---

### 🗺️ 3. Map View

#### Features
- Interactive map (Google Maps)
- Pins for:
  - Gas sellers
  - Filling stations
- Bottom sheet with selected seller details

#### Components
- MapCanvas
- MapPin
- BottomSheetCard

---

### 🏪 4. Seller Detail Page

#### Sections
- Seller info (name, rating, verification badge)
- Price display
- Available services:
  - Delivery
  - Pickup & refill
- Reviews
- CTA:
  - “Order Now”

---

### 🛒 5. Checkout Page

#### Flow
- Select service type
- Enter delivery details
- Select/auto-assign rider
- Price breakdown:
  - Gas cost
  - Delivery fee
  - Platform fee
- CTA: “Confirm Order”

#### Components
- ServiceSelector
- AddressForm
- PriceBreakdown
- ConfirmButton

---

### 🚚 6. Order Tracking Page

#### Features
- Live map tracking
- Rider info
- Status updates:
  - Order placed
  - Rider assigned
  - In transit
  - Delivered

#### Components
- TrackingMap
- StatusStepper
- RiderInfoCard

---

### 📊 7. Seller Dashboard

#### Sections
- Overview (earnings, orders)
- Manage pricing
- Toggle availability
- Orders list

#### Components
- StatsCard
- OrdersTable
- ToggleSwitch
- PricingForm

---

### 🏍️ 8. Rider Dashboard

#### Sections
- Active jobs
- Earnings summary
- Job requests (accept/reject)

#### Components
- JobCard
- EarningsWidget
- AcceptRejectButtons

---

### ⛽ 9. Filling Stations Page

#### Layout
- List + Map toggle

#### Card Includes
- Station name
- Fuel types (LPG, CNG, petrol)
- Price
- Distance

---

### 👤 10. Profile Page

#### Sections
- User info
- Order history
- Saved addresses
- Settings

---

## 🔐 Trust & Safety UI

- Verified badge (green check)
- Ratings (stars)
- Reviews section
- Safety tips banner

---

## 📢 Ads UI

- Sponsored seller cards (highlighted)
- “Promoted” tag
- Top placement in search

---

## ⚡ UX Flows

### Primary Flow (Customer)
1. Open app
2. Search or view nearby sellers
3. Select seller
4. Choose service
5. Checkout
6. Track order

---

### Seller Flow
1. Login
2. Update price & availability
3. Receive order
4. Fulfill request

---

### Rider Flow
1. Accept job
2. Navigate to seller
3. Deliver gas
4. Mark complete

---

## 📐 Responsive Behavior

### Mobile (Primary)
- Bottom navigation
- Full-width cards
- Map as full screen

### Desktop
- Sidebar navigation
- Split-screen (map + list)

---

## 🧩 Component Naming Convention

- `Card/*`
- `UI/*`
- `Map/*`
- `Forms/*`
- `Dashboard/*`

---

## 🚀 MVP UI Scope

### Phase 1
- Home
- Search results
- Seller details

### Phase 2
- Checkout
- Tracking
- Rider UI

### Phase 3
- Payments UI
- Ads UI
- Premium listings

---

## 🎯 Key UX Metrics

- Time to find seller (< 10s)
- Time to complete order (< 2 mins)
- Clicks to checkout (≤ 5)