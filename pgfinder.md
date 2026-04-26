# PGFinder (PetroGasCheck)

## 📌 Product Overview

PGFinder is a location-based marketplace that connects customers with nearby gas retailers, filling stations, and verified dispatch riders for gas purchase and delivery.

### Core Capabilities
- Discover nearby gas sellers and filling stations
- Compare prices and availability in real time
- Request gas delivery or refill services
- Connect with verified riders for logistics

### Objective
Digitize and streamline the informal gas distribution ecosystem, especially in urban areas.

---

## 🎯 Product Goals

### Primary Goals
- Enable users to quickly find nearby gas sellers and filling stations
- Provide real-time visibility into gas availability and pricing
- Facilitate safe and reliable gas delivery services
- Create a trusted marketplace connecting customers, sellers, and riders

### Secondary Goals
- Increase visibility for small gas retailers
- Provide additional revenue streams via ads and platform fees
- Build a scalable logistics-enabled marketplace

---

## 👥 Target Users

### 1. Customers
- Households
- Small businesses
- Individuals needing gas refill or delivery

### 2. Gas Sellers
- Local gas shops
- Street retailers

### 3. Filling Stations
- Larger fuel stations offering LPG, CNG, petrol

### 4. Dispatch Riders
- Independent riders
- Logistics providers

---

## 🧩 Core Features

### 🔎 1. Search & Discovery

#### Description
Users can search and discover nearby gas sellers and filling stations.

#### Functionalities
- Location-based search
- Map and list view
- Display:
  - Price per kg/litre
  - Availability status
  - Distance

#### Frontend Pages
- `/` (Home / Search)
- `/search`
- `/map`

#### Components
- SearchBar
- FilterPanel
- MapView
- SellerCard

#### Backend Modules
- Location API integration
- Search & filtering system

---

### 🚚 2. Delivery & Refill Request System

#### Description
Users can request gas delivery or refill services.

#### User Flow
1. Select gas seller
2. Choose service:
   - Pickup & refill
   - Direct delivery
3. Assign rider (auto/manual)
4. Track order
5. Complete payment

#### Frontend Pages
- `/seller/[id]`
- `/checkout`
- `/track-order`

#### Components
- ServiceSelector
- OrderSummary
- TrackingMap

#### Backend Modules
- Order creation system
- Rider assignment logic
- Order tracking module

---

### 🏪 3. Gas Seller Dashboard

#### Description
Dashboard for gas sellers to manage their offerings.

#### Functionalities
- Set price
- Toggle availability
- Add services (refill, pickup, delivery)
- Receive and manage orders

#### Frontend Pages
- `/dashboard/seller`
- `/dashboard/seller/orders`

#### Components
- PricingManager
- AvailabilityToggle
- OrdersTable

#### Backend Modules
- Inventory system
- Order management system

---

### ⛽ 4. Filling Station Module

#### Description
Allows stations to publish fuel availability and pricing.

#### Functionalities
- Display fuel types (LPG, CNG, petrol)
- Show pricing and availability
- Location visibility

#### Frontend Pages
- `/stations`
- `/stations/[id]`

#### Backend Modules
- Station profile system
- Fuel listing module

---

### 🏍️ 5. Dispatch Rider System

#### Description
Riders handle logistics between customers and sellers.

#### Functionalities
- Accept/reject requests
- Navigation support
- Earnings tracking

#### Frontend Pages
- `/dashboard/rider`
- `/dashboard/rider/jobs`

#### Backend Modules
- Job assignment system
- Earnings module

---

### 📢 6. Advertisement System

#### Description
Allows sellers to promote their listings.

#### Functionalities
- Sponsored listings
- Priority placement

#### Backend Modules
- Ad placement engine
- Payment integration for ads

---

## 💰 Transaction Model

### Pricing Structure


- Gas price → Set by seller
- Delivery fee → Set by rider
- Platform fee → Set by platform

### Backend Modules
- Pricing engine
- Fee calculation logic

---

## 💸 Monetization Strategy

- Commission per transaction (5–15%)
- Delivery service fees
- Paid advertisements
- Premium seller listings

### Deliverables
- Payment gateway integration
- Commission tracking system

---

## 🔐 Trust, Safety & Compliance

### Key Measures
- Seller verification (KYC)
- Rider verification (ID, vehicle details)
- Ratings and reviews
- Order tracking
- Safety guidelines

### Backend Modules
- Verification system
- Review & rating system
- Safety compliance module

---

## 🚀 MVP Roadmap

### Phase 1 – Discovery Only
**Goal:** Validate demand

Features:
- Search nearby gas sellers
- View price and availability
- Contact seller

Pages:
- Home
- Search results

---

### Phase 2 – Marketplace Enablement
**Goal:** Enable transactions

Features:
- Order placement
- Rider system
- Delivery tracking

Pages:
- Checkout
- Order tracking

---

### Phase 3 – Monetization & Scale
**Goal:** Generate revenue

Features:
- Payments
- Ads system
- Premium listings

---

## 📊 Success Metrics (KPIs)

- Number of active users
- Number of listed gas sellers
- Daily/weekly transactions
- Average delivery time
- Customer satisfaction ratings
- Revenue per transaction

---

## ⚠️ Risks & Mitigation

| Risk | Mitigation |
|------|-----------|
| Safety concerns | Verification + strict guidelines |
| Trust issues | Ratings + reviews |
| Rider reliability | Performance tracking |
| Price inconsistency | Transparent pricing |

---

## 🧱 Technical Stack

### Frontend
- Next.js

### Backend
- FastAPI / Django

### Database
- PostgreSQL

### Integrations
- Google Maps API

### Hosting
- DigitalOcean