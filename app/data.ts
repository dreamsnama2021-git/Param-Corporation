// types/categories.ts

export interface CategoryItem {
  name: string;
  slug: string;
  description?: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  price?: string;
  category: string;
  categoryName: string;
  description?: string;
  tags?: string[];
}

// 1. By Industry
export const industries: CategoryItem[] = [
  { name: "Pharma", slug: "pharma", description: "Gifts tailored for the pharmaceutical industry" },
  { name: "Oil and Energy", slug: "oil-and-energy", description: "Corporate gifts for energy sector" },
  { name: "Liquor", slug: "liquor", description: "Premium gifting for liquor industry" },
  { name: "Food and Beverages", slug: "food-and-beverages", description: "Gifts for F&B industry" },
  { name: "IT", slug: "it", description: "Tech and corporate gifts for IT companies" },
  { name: "Cement and Construction", slug: "cement-and-construction", description: "Industrial gifting solutions" },
  { name: "Education", slug: "education", description: "Gifts for educational institutions" },
  { name: "FMCG", slug: "fmcg", description: "Fast-moving consumer goods industry gifts" },
  { name: "Banking and Insurance", slug: "banking-and-insurance", description: "Financial sector corporate gifts" },
  { name: "Hospitality", slug: "hospitality", description: "Gifts for hotels and hospitality" },
  { name: "Media", slug: "media", description: "Media and entertainment industry gifts" },
  { name: "Retail", slug: "retail", description: "Retail sector corporate gifts" },
];

// 2. By Category - Product Categories
export const categories: CategoryItem[] = [
  { name: "Paperweights", slug: "paperweights", description: "Practical and widely used, ideal for doctor tables with strong branding visibility" },
  { name: "Tabletops", slug: "tabletops", description: "Engaging and informative tabletop displays for clinics and consultation desks" },
  { name: "Desk Utility", slug: "desk-utility", description: "Functional items like pen stands, organizers, and multi-utility desk tools for gifting doctors" },
  { name: "3D Printed", slug: "3d-printed", description: "Innovative pharma branding 3D models to visually explain molecules, organs, or concepts" },
  { name: "Fibre and Resin Products", slug: "fibre-resin-products", description: "Premium and durable gifting solutions with high perceived value" },
  { name: "Eco Friendly Products", slug: "eco-friendly-products", description: "Sustainable gifting options like recycled materials and plant-based products" },
  { name: "LED Tabletops", slug: "led-tabletops", description: "Illuminated pharma branding solutions for high visibility and modern appeal" },
  { name: "Indoor Plants", slug: "indoor-plants", description: "Aesthetic and thoughtful doctor gifts that stay long and build daily recall" },
  { name: "Calendars", slug: "calendars", description: "Medical-focused calendars designed as per medical relevance and brand messaging" },
  { name: "Photo Frames", slug: "photo-frames", description: "Personalized and professional frames with pharma branding for clinics and offices" },
  { name: "Pharma Launch Kits", slug: "pharma-launch-kits", description: "Comprehensive branding kits for pharmaceutical product launches and promotions" },
  { name: "Custom Doctor Kits", slug: "custom-doctor-kits", description: "Personalized gift kits tailored for doctors with pharma branding and utilities" },
  { name: "Surgical Tools", slug: "surgical-tools", description: "Branded surgical instruments and tools for medical professionals and hospitals" },
  { name: "Custom Training Models", slug: "custom-training-models", description: "Educational medical models customized for pharma training and demonstrations" },
];

// 3. By Price
export const priceRanges: CategoryItem[] = [
  { name: "Corporate Gifts Under ₹100", slug: "under-100", description: "Budget-friendly gifts under ₹100" },
  { name: "Corporate Gifts Under ₹250", slug: "under-250", description: "Affordable gifts under ₹250" },
  { name: "Corporate Gifts Under ₹500", slug: "under-500", description: "Mid-range gifts under ₹500" },
  { name: "Corporate Gifts Under ₹1000", slug: "under-1000", description: "Premium gifts under ₹1000" },
  { name: "Corporate Gifts Under ₹2000", slug: "under-2000", description: "High-value gifts under ₹2000" },
  { name: "Corporate Gifts Under ₹5000", slug: "under-5000", description: "Luxury gifts under ₹5000" },
];

// 4. By Occasion (Month-wise and key medical/corporate occasions)
export const occasions: CategoryItem[] = [
  // Month-wise breakdown
  { name: "January", slug: "january", description: "New Year and Republic Day gifting" },
  { name: "February", slug: "february", description: "Valentine's Day and Cancer Awareness" },
  { name: "March", slug: "march", description: "Holi and Women's Day celebrations" },
  { name: "April", slug: "april", description: "World Health Day and New Financial Year" },
  { name: "May", slug: "may", description: "Mother's Day and Asthma Awareness" },
  { name: "June", slug: "june", description: "World Environment Day celebrations" },
  { name: "July", slug: "july", description: "Doctor's Day and Monsoon specials" },
  { name: "August", slug: "august", description: "Independence Day and Raksha Bandhan" },
  { name: "September", slug: "september", description: "Nutrition Week and World Heart Day" },
  { name: "October", slug: "october", description: "Diwali and Osteoporosis Awareness" },
  { name: "November", slug: "november", description: "Children's Day and Diabetes Awareness" },
  { name: "December", slug: "december", description: "Christmas and Year-end corporate gifting" },
];

// 5. By Therapy (Medical Specialties - Doctor-Focused & Therapy-Based Gifting)
export const therapies: CategoryItem[] = [
  { name: "Cardiac Care", slug: "cardiac-care", description: "Heart health themed products for cardiology professionals" },
  { name: "Diabetic Care", slug: "diabetic-care", description: "Diabetes management and awareness kits" },
  { name: "Pediatric", slug: "pediatric", description: "Child-friendly items for pediatricians" },
  { name: "General Wellness", slug: "general-wellness", description: "Holistic health and wellness tools" },
  { name: "Dermatology", slug: "dermatology", description: "Skin care gifts for dermatology professionals" },
  { name: "Nephrology", slug: "nephrology", description: "Kidney health and renal care gifts" },
  { name: "Nutrition", slug: "nutrition", description: "Diet and wellness gifts for nutritionists" },
  { name: "Pulmonology", slug: "pulmonology", description: "Respiratory health and lung care gifts" },
  { name: "Hepatology", slug: "hepatology", description: "Liver health and digestive wellness gifts" },
  { name: "Ophthalmology", slug: "ophthalmology", description: "Eye care gifts for vision specialists" },
  { name: "Gastroenterology", slug: "gastroenterology", description: "Digestive health and GI care gifts" },
  { name: "Urology", slug: "urology", description: "Urological health and kidney stone care gifts" },
  { name: "Orthopedics", slug: "orthopedics", description: "Bone and joint health gifts" },
  { name: "Neurology", slug: "neurology", description: "Brain health and neurological care gifts" },
  { name: "Oncology", slug: "oncology", description: "Cancer care and awareness gifts" },
];

// 6. Personalized Gifts (Customized items with doctor name, clinic branding, etc.)
export const personalizedGifts: CategoryItem[] = [
  { name: "Photo Frames", slug: "doctor-name-personalization", description: "Gifts with doctor's name engraved or printed" },
  { name: "Momentos", slug: "clinic-branding", description: "Items customized with clinic logo and details" },
  { name: "Trophies", slug: "custom-packaging", description: "Branded packaging solutions for gifts" },
  { name: "Brand-Specific Messaging", slug: "brand-specific-messaging", description: "Personalized messages and brand communication" },
  { name: "Persanalized Hampers", slug: "engraved-pens", description: "Personalized writing instruments" },
  { name: "Star Map", slug: "custom-mugs", description: "Printed and personalized coffee mugs" },
  { name: "Name Plate", slug: "photo-gifts", description: "Personalized photo items and collages" },
  { name: "3D Printed Plates", slug: "custom-stationery", description: "Branded and personalized stationery sets" },
  { name: "Personalized Desk Utility", slug: "embossed-leather", description: "Personalized leather goods and accessories" },
  { name: "Personalized Gifts", slug: "engraved-keychains", description: "Custom metal and wooden keychains" },
  // { name: "Custom Apparel", slug: "custom-apparel", description: "Personalized T-shirts, caps and clothing" },
  // { name: "Personalized Diaries", slug: "personalized-diaries", description: "Custom notebooks and planners" },
  // { name: "Custom Drinkware", slug: "custom-drinkware", description: "Personalized bottles and sippers" },
  // { name: "Engraved Awards", slug: "engraved-awards", description: "Custom trophies and recognition awards" },
];

// 7. Digital Gifts (Tech and electronic items)
export const digitalGifts: CategoryItem[] = [
  { name: "Power Banks", slug: "power-banks", description: "Portable charging solutions" },
  { name: "Bluetooth Speakers", slug: "bluetooth-speakers", description: "Wireless audio devices" },
  { name: "USB Drives", slug: "usb-drives", description: "Branded storage devices and pen drives" },
  { name: "Wireless Chargers", slug: "wireless-chargers", description: "Cable-free charging pads and stands" },
  { name: "Digital Photo Frames", slug: "digital-photo-frames", description: "Electronic photo displays" },
  { name: "Smart Gadgets", slug: "smart-gadgets", description: "Smart home and office devices" },
  { name: "Phone Accessories", slug: "phone-accessories", description: "Cases, stands and mobile accessories" },
  { name: "Fitness Bands", slug: "fitness-bands", description: "Health tracking wearables" },
  { name: "Travel Adapters", slug: "travel-adapters", description: "Multi-port charging adapters" },
  { name: "Tech Combos", slug: "tech-combos", description: "Digital gift sets and technology combos" },
];

// ==========================================
// ALL PRODUCTS DATA
// ==========================================

export const allProducts: Product[] = [
  // Categories - Paperweights
  { id: 1, name: "5 STAR THEME MAGNETIC PAPERWEIGHT", image: "/Paperweights/5 STAR THEME MAGNETIC PAPERWEIGHT 1.JPG", price: "₹29", category: "paperweights", categoryName: "Paperweights", description: "Elegant crystal paperweight for desk" },
  { id: 2, name: "ACID REFLUX DETAILER PAPERWEIGHT", image: "/Paperweights/ACID REFLUX DETAILER PAPERWEIGHT 1.JPG", price: "₹25", category: "paperweights", categoryName: "Paperweights", description: "Customizable with company logo" },
  { id: 3, name: "BEPLEX TABLET COMPARISON PAPERWEIGHT", image: "/Paperweights/BEPLEX TABLET COMPARISON PAPERWEIGHT 1.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 32, name: "BLADDER PUZZLE PAPERWEIGHT", image: "/Paperweights/BLADDER PUZZLE PAPERWEIGHT.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 33, name: "BRISTOL STOOL CHART PAPERWEIGHT", image: "/Paperweights/BRISTOL STOOL CHART PAPERWEIGHT.jpg", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 34, name: "CAPSULE ROCKING PAPERWEIGHT", image: "/Paperweights/CAPSULE ROCKING PAPERWEIGHT 2.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 35, name: "CLEAR THEME PAPERWEIGHT", image: "/Paperweights/CLEAR THEME PAPERWEIGHT.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 36, name: "CUSTOMIZED APPLE SHAPED FRAGRANCE PAPERWEIGHT", image: "/Paperweights/CUSTOMIZED APPLE SHAPED FRAGRANCE PAPERWEIGHT 1.JPG", price: "₹29", category: "paperweights", categoryName: "Paperweights", description: "Elegant crystal paperweight for desk" },
  { id: 37, name: "CUSTOMIZED BOOK SHAPED PAPERWEIGHT", image: "/Paperweights/CUSTOMIZED BOOK SHAPED PAPERWEIGHT 2.JPG", price: "₹25", category: "paperweights", categoryName: "Paperweights", description: "Customizable with company logo" },
  { id: 38, name: "CUSTOMIZED BP MACHINE SHAPED PAPERWEIGHT", image: "/Paperweights/CUSTOMIZED BP MACHINE SHAPED PAPERWEIGHT.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 39, name: "CUSTOMIZED DENTAL MIRROR PAPERWEIGHT", image: "/Paperweights/CUSTOMIZED DENTAL MIRROR PAPERWEIGHT 1.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 40, name: "CUSTOMIZED FIBRE SAMOSA PAPERWEIGHT", image: "/Paperweights/CUSTOMIZED FIBRE SAMOSA PAPERWEIGHT 1.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 41, name: "CUSTOMIZED LUBIMOIST PACK SHOT SHAPE PAPERWEIGHT", image: "/Paperweights/CUSTOMIZED LUBIMOIST PACK SHOT SHAPE PAPERWEIGHT.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 42, name: "CUSTOMIZED MNEMONIC ROCKING PAPERWEIGHT", image: "/Paperweights/CUSTOMIZED MNEMONIC ROCKING PAPERWEIGHT.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 43, name: "CUSTOMIZED Q PIN SHAPED PAPERWEIGHT", image: "/Paperweights/CUSTOMIZED Q PIN SHAPED PAPERWEIGHT 2.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 44, name: "CUSTOMIZED TRIPLE LAYER TABLET PAPERWEIGHT", image: "/Paperweights/CUSTOMIZED TRIPLE LAYER TABLET PAPERWEIGHT 3.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 45, name: "ENSURE BOTTLE SHAPED PAPERWEIGHT", image: "/Paperweights/ENSURE BOTTLE SHAPED PAPERWEIGHT.jpg", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 46, name: "LIPID PROFILER SHAPE PAPERWEIGHT", image: "/Paperweights/LIPID PROFILER SHAPE PAPERWEIGHT 1.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 47, name: "MOLECULE COMBINATION PAPERWEIGHT", image: "/Paperweights/MOLECULE COMBINATION PAPERWEIGHT 1.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 48, name: "STAGES OF DIABETIC FOOT ULCERS PAPERWEIGHT", image: "/Paperweights/STAGES OF DIABETIC FOOT ULCERS PAPERWEIGHT.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 49, name: "STOMACH PELLET PAPERWEIGHT", image: "/Paperweights/STOMACH PELLET PAPERWEIGHT 1.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 50, name: "SYRUP BOTTLE SHAPE PAPERWEIGHT", image: "/Paperweights/SYRUP BOTTLE SHAPE PAPERWEIGHT 1.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 51, name: "TYPES OD TENDONITIS CUBE SHAPED PAPERWEIGHT", image: "/Paperweights/TYPES OD TENDONITIS CUBE SHAPED PAPERWEIGHT 1.JPG", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 52, name: "TYPES OF KIDNEY STONES ANATOMICAL PAPERWEIGHT", image: "/Paperweights/TYPES OF KIDNEY STONES ANATOMICAL PAPERWEIGHT.jpg", price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  
  // Categories - Tabletops
  { id: 4, name: "CUSTOMIZED 1 LAKH DOSES MOMENTO", image: "/TableTop/CUSTOMIZED 1 LAKH DOSES MOMENTO 1.JPG", price: "₹599", category: "tabletops", categoryName: "Tabletops", description: "Premium tabletop calendar stand" },
  { id: 5, name: "CUSTOMIZED 15 YEARS MOMENTO", image: "/TableTop/CUSTOMIZED 15 YEARS MOMENTO.JPG", price: "₹899", category: "tabletops", categoryName: "Tabletops", description: "Traditional brass decorative piece" },
  { id: 6, name: "CUSTOMIZED BRAIN & GUTT CONNECTION WOODEN FRAME WITH CLOCK", image: "/TableTop/CUSTOMIZED BRAIN & GUTT CONNECTION WOODEN FRAME WITH CLOCK.JPG", price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 53, name: "CUSTOMIZED DESK CLOCK", image: "/TableTop/CUSTOMIZED DESK CLOCK.JPG", price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 54, name: "CUSTOMIZED HEART SHAPE COASTER SET", image: "/TableTop/CUSTOMIZED HEART SHAPE COASTER SET 2.JPG", price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 55, name: "CUSTOMIZED MAGNETIC DETAILER", image: "/TableTop/CUSTOMIZED MAGNETIC DETAILER 1.JPG", price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 56, name: "CUSTOMIZED MNEMONIC SLANT PEN HOLDER", image: "/TableTop/CUSTOMIZED MNEMONIC SLANT PEN HOLDER 2.JPG", price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 57, name: "CUSTOMIZED MOBILE HOLDER", image: "/TableTop/CUSTOMIZED MOBILE HOLDER.jpg", price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 58, name: "CUSTOMIZED YOGA THEME DESK CLOCK", image: "/TableTop/CUSTOMIZED YOGA THEME DESK CLOCK.JPG", price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 59, name: "EAR MODEL WITH SAMPLE DESPENSER", image: "/TableTop/EAR MODEL WITH SAMPLE DESPENSER.jpg", price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  
  // Categories - Desk Utility
  { id: 7, name: "Pen Stand with Clock", image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400", price: "₹449", category: "desk-utility", categoryName: "Desk Utility", description: "Multi-functional desk organizer" },
  { id: 8, name: "Document Tray Set", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400", price: "₹699", category: "desk-utility", categoryName: "Desk Utility", description: "3-tier document organizer" },
  { id: 9, name: "Multi-Utility Desk Tool", image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400", price: "₹399", category: "desk-utility", categoryName: "Desk Utility", description: "All-in-one desk organizer with phone stand" },
  
  // Categories - 3D Printed
  { id: 10, name: "3D Printed Name Plate", image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=400", price: "₹799", category: "3d-printed", categoryName: "3D Printed", description: "Custom 3D printed desk name plate" },
  { id: 11, name: "3D Molecule Model", image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=400", price: "₹1499", category: "3d-printed", categoryName: "3D Printed", description: "Pharma branding 3D molecule visualization" },
  { id: 12, name: "3D Organ Model", image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=400", price: "₹1999", category: "3d-printed", categoryName: "3D Printed", description: "Educational 3D printed organ model" },
  
  // Categories - Fibre and Resin
  { id: 13, name: "Resin Art Coaster Set", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400", price: "₹649", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Handcrafted resin coasters" },
  { id: 14, name: "Fibre Glass Trophy", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400", price: "₹1299", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Modern fibre glass award trophy" },
  { id: 15, name: "Resin Doctor Figurine", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400", price: "₹899", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Premium resin doctor appreciation gift" },
  
  // Categories - Eco Friendly
  { id: 16, name: "Bamboo Cutlery Set", image: "https://images.unsplash.com/photo-1584622651921-47e0e8043693?w=400", price: "₹499", category: "eco-friendly-products", categoryName: "Eco Friendly Products", description: "Sustainable bamboo utensils" },
  { id: 17, name: "Seed Paper Diary", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹399", category: "eco-friendly-products", categoryName: "Eco Friendly Products", description: "Plantable seed paper notebook" },
  { id: 18, name: "Jute Laptop Bag", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", price: "₹999", category: "eco-friendly-products", categoryName: "Eco Friendly Products", description: "Eco-friendly jute carry bag" },
  { id: 19, name: "Recycled Material Planter", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", price: "₹299", category: "eco-friendly-products", categoryName: "Eco Friendly Products", description: "Sustainable desk planter made from recycled materials" },
  
  // Categories - LED Tabletops
  { id: 20, name: "LED Desk Lamp", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", price: "₹1599", category: "led-tabletops", categoryName: "LED Tabletops", description: "Smart LED table lamp with touch control" },
  { id: 21, name: "Illuminated Globe", image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400", price: "₹2499", category: "led-tabletops", categoryName: "LED Tabletops", description: "World globe with LED lighting" },
  { id: 22, name: "LED Branded Display", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", price: "₹1999", category: "led-tabletops", categoryName: "LED Tabletops", description: "Illuminated pharma branding display" },
  
  // Categories - Indoor Plants
  { id: 23, name: "Succulent Set with Pot", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", price: "₹899", category: "indoor-plants", categoryName: "Indoor Plants", description: "Low maintenance succulent combo" },
  { id: 24, name: "Lucky Bamboo Plant", image: "https://images.unsplash.com/photo-1599598425947-d35301f7c396?w=400", price: "₹649", category: "indoor-plants", categoryName: "Indoor Plants", description: "2-layer lucky bamboo in ceramic pot" },
  { id: 25, name: "Air Purifying Plant", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", price: "₹799", category: "indoor-plants", categoryName: "Indoor Plants", description: "Snake plant for clinic and office air purification" },
  
  // Categories - Calendars
  { id: 26, name: "Medical Desk Calendar", image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400", price: "₹299", category: "calendars", categoryName: "Calendars", description: "Medical-focused desk calendar 2025" },
  { id: 27, name: "Wall Calendar with Health Tips", image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400", price: "₹399", category: "calendars", categoryName: "Calendars", description: "Monthly calendar with wellness messages" },
  { id: 28, name: "Planner Diary Combo", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹599", category: "calendars", categoryName: "Calendars", description: "Year planner with monthly calendar" },
  
  // Categories - Photo Frames
  { id: 29, name: "Digital Photo Frame 7 inch", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹3499", category: "photo-frames", categoryName: "Photo Frames", description: "Electronic photo display frame" },
  { id: 30, name: "Collage Photo Frame", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹799", category: "photo-frames", categoryName: "Photo Frames", description: "Multi-photo wooden frame" },
  { id: 31, name: "Branded Photo Frame", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹599", category: "photo-frames", categoryName: "Photo Frames", description: "Clinic branding photo frame" },
  
  // ==========================================
  // THERAPIES - Therapy-Based Gifting
  // ==========================================
  
  // Cardiac Care
  { id: 101, name: "Heart Rate Monitor Watch", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400", price: "₹2499", category: "cardiac-care", categoryName: "Cardiac Care", description: "Advanced ECG and heart rate tracking smartwatch", tags: ["heart", "monitor", "smartwatch"] },
  { id: 102, name: "Healthy Heart Kit", image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400", price: "₹1499", category: "cardiac-care", categoryName: "Cardiac Care", description: "Heart healthy food basket with oats, nuts, and berries", tags: ["healthy", "heart", "food"] },
  { id: 103, name: "Blood Pressure Monitor", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400", price: "₹1999", category: "cardiac-care", categoryName: "Cardiac Care", description: "Digital BP monitor with irregular heartbeat detection", tags: ["medical", "bp", "monitor"] },
  { id: 104, name: "Heart Model Display", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400", price: "₹1799", category: "cardiac-care", categoryName: "Cardiac Care", description: "Anatomical heart model for clinic display", tags: ["anatomy", "model", "educational"] },
  
  // Diabetic Care
  { id: 105, name: "Diabetes Care Kit", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400", price: "₹2499", category: "diabetic-care", categoryName: "Diabetic Care", description: "Glucometer and sugar-free snacks hamper", tags: ["diabetes", "health", "care"] },
  { id: 106, name: "Sugar-Free Snack Hamper", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹1299", category: "diabetic-care", categoryName: "Diabetic Care", description: "Diabetic-friendly healthy snacks collection", tags: ["sugarfree", "snacks", "healthy"] },
  { id: 107, name: "Diabetes Management Guide", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹699", category: "diabetic-care", categoryName: "Diabetic Care", description: "Comprehensive diabetes education booklet", tags: ["education", "guide", "diabetes"] },
  
  // Pediatric
  { id: 108, name: "Educational Toy Set", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400", price: "₹1499", category: "pediatric", categoryName: "Pediatric", description: "STEM toys for children's learning", tags: ["toys", "educational", "children"] },
  { id: 109, name: "Pediatric Sticker Collection", image: "/products/CUSTOMIZED PAPER WEIGHT.png", price: "₹299", category: "pediatric", categoryName: "Pediatric", description: "Fun stickers for young patients", tags: ["kids", "stickers", "fun"] },
  { id: 110, name: "Children's Health Book", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹499", category: "pediatric", categoryName: "Pediatric", description: "Illustrated health education book for kids", tags: ["books", "children", "health"] },
  
  // Dermatology
  { id: 111, name: "Premium Skin Care Kit", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", price: "₹1299", category: "dermatology", categoryName: "Dermatology", description: "Complete skin care gift set with moisturizers and cleansers", tags: ["skincare", "beauty", "wellness"] },
  { id: 112, name: "Sunscreen Protection Combo", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", price: "₹899", category: "dermatology", categoryName: "Dermatology", description: "SPF 50+ sunscreen collection for UV protection", tags: ["sunscreen", "protection", "outdoor"] },
  { id: 113, name: "Dermatology Reference Set", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹1599", category: "dermatology", categoryName: "Dermatology", description: "Medical books and skin condition charts", tags: ["medical", "education", "reference"] },
  
  // Nephrology
  { id: 114, name: "Kidney Health Monitor", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400", price: "₹3499", category: "nephrology", categoryName: "Nephrology", description: "Digital blood pressure and kidney function tracking device", tags: ["medical", "monitor", "health"] },
  { id: 115, name: "Hydration Tracking Bottle", image: "https://images.unsplash.com/photo-1602143407151-7111542b16c9?w=400", price: "₹799", category: "nephrology", categoryName: "Nephrology", description: "Smart water bottle with intake reminders", tags: ["hydration", "smart", "water"] },
  { id: 116, name: "Renal Diet Recipe Book", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹599", category: "nephrology", categoryName: "Nephrology", description: "Kidney-friendly diet guide and meal planner", tags: ["diet", "recipes", "health"] },
  
  // Nutrition
  { id: 117, name: "Protein Gift Box", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400", price: "₹1999", category: "nutrition", categoryName: "Nutrition", description: "Premium protein supplements and shaker set", tags: ["protein", "fitness", "supplements"] },
  { id: 118, name: "Vitamin Combo Pack", image: "https://images.unsplash.com/photo-1584308666744-3c0b9c22406f?w=400", price: "₹1199", category: "nutrition", categoryName: "Nutrition", description: "Essential vitamins A-Z gift set with storage box", tags: ["vitamins", "health", "supplements"] },
  { id: 119, name: "Healthy Snack Hamper", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹1499", category: "nutrition", categoryName: "Nutrition", description: "Assorted nuts, seeds, and dried fruits gift basket", tags: ["healthy", "snacks", "organic"] },
  
  // Pulmonology
  { id: 120, name: "Steam Inhaler", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400", price: "₹699", category: "pulmonology", categoryName: "Pulmonology", description: "Electric steam vaporizer for respiratory therapy", tags: ["steam", "inhaler", "respiratory"] },
  { id: 121, name: "Air Purifier Plant", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", price: "₹899", category: "pulmonology", categoryName: "Pulmonology", description: "Snake plant and peace lily combo for clean air", tags: ["plants", "airpurifier", "natural"] },
  { id: 122, name: "Breathing Exercise Device", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400", price: "₹1299", category: "pulmonology", categoryName: "Pulmonology", description: "Lung capacity trainer with digital tracking", tags: ["breathing", "lungs", "exercise"] },
  
  // Hepatology
  { id: 123, name: "Liver Detox Tea Set", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400", price: "₹799", category: "hepatology", categoryName: "Hepatology", description: "Herbal tea collection with milk thistle and dandelion", tags: ["tea", "detox", "herbal"] },
  { id: 124, name: "Milk Thistle Supplement Kit", image: "https://images.unsplash.com/photo-1584308666744-3c0b9c22406f?w=400", price: "₹1499", category: "hepatology", categoryName: "Hepatology", description: "Premium liver support supplements", tags: ["supplements", "milkthistle", "health"] },
  
  // Ophthalmology
  { id: 125, name: "Blue Light Glasses", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400", price: "₹1299", category: "ophthalmology", categoryName: "Ophthalmology", description: "Anti-glare computer glasses with UV protection", tags: ["glasses", "bluelight", "protection"] },
  { id: 126, name: "Eye Care Kit", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", price: "₹899", category: "ophthalmology", categoryName: "Ophthalmology", description: "Cooling eye masks and drops for strain relief", tags: ["eyecare", "masks", "wellness"] },
  { id: 127, name: "Eye Model Anatomical Display", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400", price: "₹1799", category: "ophthalmology", categoryName: "Ophthalmology", description: "3D eye structure model for educational purposes", tags: ["educational", "model", "anatomy"] },
  
  // Gastroenterology
  { id: 128, name: "Probiotic Wellness Kit", image: "https://images.unsplash.com/photo-1584308666744-3c0b9c22406f?w=400", price: "₹1599", category: "gastroenterology", categoryName: "Gastroenterology", description: "Complete probiotic supplement set", tags: ["probiotics", "digestion", "health"] },
  { id: 129, name: "Herbal Digestive Tea Set", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400", price: "₹699", category: "gastroenterology", categoryName: "Gastroenterology", description: "Chamomile, ginger, and peppermint tea collection", tags: ["tea", "herbal", "digestion"] },
  
  // Urology
  { id: 130, name: "Kidney Stone Prevention Kit", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400", price: "₹1899", category: "urology", categoryName: "Urology", description: "Hydration bundle with citrate supplements", tags: ["kidney", "prevention", "hydration"] },
  { id: 131, name: "Urinary Health Supplement Set", image: "https://images.unsplash.com/photo-1584308666744-3c0b9c22406f?w=400", price: "₹1699", category: "urology", categoryName: "Urology", description: "Cranberry extract and D-mannose supplements", tags: ["supplements", "urinary", "health"] },
  
  // Orthopedics
  { id: 132, name: "Posture Corrector", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400", price: "₹999", category: "orthopedics", categoryName: "Orthopedics", description: "Back support and posture correction device", tags: ["posture", "back", "health"] },
  { id: 133, name: "Bone Health Supplement Set", image: "https://images.unsplash.com/photo-1584308666744-3c0b9c22406f?w=400", price: "₹1699", category: "orthopedics", categoryName: "Orthopedics", description: "Calcium and vitamin D supplements", tags: ["bones", "health", "supplements"] },
  { id: 134, name: "Joint Support Kit", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400", price: "₹1499", category: "orthopedics", categoryName: "Orthopedics", description: "Glucosamine and joint health supplements", tags: ["joints", "health", "supplements"] },
  
  // Neurology
  { id: 135, name: "Stress Relief Kit", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ac8108?w=400", price: "₹999", category: "neurology", categoryName: "Neurology", description: "Aromatherapy and stress management products", tags: ["stress", "relief", "aromatherapy"] },
  { id: 136, name: "Brain Health Supplement", image: "https://images.unsplash.com/photo-1584308666744-3c0b9c22406f?w=400", price: "₹1899", category: "neurology", categoryName: "Neurology", description: "Omega-3 and cognitive support supplements", tags: ["brain", "cognitive", "health"] },
  
  // Oncology
  { id: 137, name: "Pink Ribbon Gift Set", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", price: "₹1499", category: "oncology", categoryName: "Oncology", description: "Cancer awareness themed corporate gifts", tags: ["cancerawareness", "pink", "health"] },
  { id: 138, name: "Wellness Care Package", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹2499", category: "oncology", categoryName: "Oncology", description: "Comfort and wellness items for patients", tags: ["wellness", "care", "comfort"] },
  
  // General Wellness
  { id: 139, name: "Wellness Starter Kit", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹2499", category: "general-wellness", categoryName: "General Wellness", description: "Health-focused gift box for overall wellness", tags: ["wellness", "health", "lifestyle"] },
  { id: 140, name: "Self Care Wellness Box", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", price: "₹2199", category: "general-wellness", categoryName: "General Wellness", description: "Spa and wellness products for self-care", tags: ["selfcare", "wellness", "spa"] },
  
  // ==========================================
  // OCCASIONS - Gifting Based on Occasion
  // ==========================================
  
  // Doctor's Day
  { id: 201, name: "Doctor's Day Pen Set", image: "/products/CUSTOMIZED CHITS HOLDER.png", price: "₹1299", category: "doctors-day", categoryName: "Doctor's Day", description: "Premium medical-themed pens and diaries", tags: ["doctorsday", "medical", "appreciation"] },
  { id: 202, name: "Doctor Appreciation Plaque", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹899", category: "doctors-day", categoryName: "Doctor's Day", description: "Thank you plaque for doctors", tags: ["appreciation", "plaque", "gratitude"] },
  { id: 203, name: "Desk Plant with Quote", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", price: "₹649", category: "doctors-day", categoryName: "Doctor's Day", description: "Succulent with 'Thank You Doctor' message", tags: ["plants", "doctorsday", "gratitude"] },
  
  // Medical Conferences
  { id: 204, name: "Conference Welcome Kit", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹799", category: "medical-conferences", categoryName: "Medical Conferences", description: "Notebook, pen, and essentials for attendees", tags: ["conference", "kit", "medical"] },
  { id: 205, name: "Medical Tote Bag", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", price: "₹499", category: "medical-conferences", categoryName: "Medical Conferences", description: "Branded conference bag for doctors", tags: ["bag", "conference", "branded"] },
  
  // Product Launches
  { id: 206, name: "Launch Event Gift Box", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹1999", category: "product-launches", categoryName: "Product Launches", description: "Premium gift box for product launch attendees", tags: ["launch", "premium", "event"] },
  { id: 207, name: "Branded Launch Kit", image: "/products/CUSTOMIZED CHITS HOLDER.png", price: "₹1499", category: "product-launches", categoryName: "Product Launches", description: "Customized kit with product information", tags: ["launch", "branded", "promotional"] },
  
  // Festive Gifting
  { id: 208, name: "Premium Diwali Hamper", image: "https://images.unsplash.com/photo-1573662761572-2c2be631a545?w=400", price: "₹4999", category: "festive-gifting", categoryName: "Festive Gifting", description: "Luxury sweets, dry fruits, and decor items", tags: ["diwali", "luxury", "festival"] },
  { id: 209, name: "Christmas Celebration Box", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹2999", category: "festive-gifting", categoryName: "Festive Gifting", description: "Cakes, wine, and Christmas decor", tags: ["christmas", "celebration", "festival"] },
  
  // January
  { id: 210, name: "New Year Celebration Hamper", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹1999", category: "january", categoryName: "January", description: "Premium hamper with chocolates, wine, and diary", tags: ["newyear", "hamper", "celebration"] },
  { id: 211, name: "Executive Planner 2025", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹899", category: "january", categoryName: "January", description: "Premium leather planner with company branding", tags: ["planner", "executive", "branding"] },
  
  // July (Doctor's Day & Monsoon)
  { id: 212, name: "Monsoon Care Package", image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400", price: "₹999", category: "july", categoryName: "July", description: "Umbrellas, raincoats, and herbal teas", tags: ["monsoon", "rain", "care"] },
  
  // October (Diwali)
  { id: 213, name: "Decorative Diya Set", image: "https://images.unsplash.com/photo-1573662761572-2c2be631a545?w=400", price: "₹599", category: "october", categoryName: "October", description: "Handcrafted brass diyas with branded packaging", tags: ["diya", "diwali", "traditional"] },
  { id: 214, name: "Dry Fruit Premium Box", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹2999", category: "october", categoryName: "October", description: "Imported nuts and dried fruits collection", tags: ["dryfruits", "premium", "diwali"] },
  
  // November (Diabetes Awareness)
  { id: 215, name: "Diabetes Care Kit", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400", price: "₹2499", category: "november", categoryName: "November", description: "Glucometer and sugar-free snacks hamper", tags: ["diabetes", "health", "care"] },
  
  // December
  { id: 216, name: "Year End Planner 2025", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹999", category: "december", categoryName: "December", description: "Premium planner for the upcoming year", tags: ["planner", "2025", "newyear"] },
  { id: 217, name: "Winter Care Package", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400", price: "₹1799", category: "december", categoryName: "December", description: "Warmers, teas, and skincare for winter", tags: ["winter", "care", "warm"] },
  
  // ==========================================
  // PERSONALIZED GIFTS
  // ==========================================
  
  { id: 301, name: "Engraved Metal Pen", image: "/products/CUSTOMIZED CHITS HOLDER.png", price: "₹599", category: "engraved-pens", categoryName: "Engraved Pens", description: "Premium pen with custom engraving" },
  { id: 302, name: "Custom Magic Mug", image: "https://images.unsplash.com/photo-1514228742587-6f155f924bb5?w=400", price: "₹499", category: "custom-mugs", categoryName: "Custom Mugs", description: "Photo reveals on heating" },
  { id: 303, name: "Crystal Photo Frame", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹899", category: "photo-gifts", categoryName: "Photo Gifts", description: "3D crystal photo engraving" },
  { id: 304, name: "Branded Notebook", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹399", category: "custom-stationery", categoryName: "Custom Stationery", description: "Company logo printed diary" },
  { id: 305, name: "Leather Card Holder", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", price: "₹799", category: "embossed-leather", categoryName: "Embossed Leather", description: "Genuine leather card wallet" },
  { id: 306, name: "Metal Keychain Set", image: "https://images.unsplash.com/photo-1581338834647-b0a407628db1?w=400", price: "₹299", category: "engraved-keychains", categoryName: "Engraved Keychains", description: "Custom engraved metal keychain" },
  { id: 307, name: "Custom T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", price: "₹699", category: "custom-apparel", categoryName: "Custom Apparel", description: "Personalized T-shirt with branding" },
  { id: 308, name: "Personalized Diary", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹599", category: "personalized-diaries", categoryName: "Personalized Diaries", description: "Custom notebook with name embossing" },
  { id: 309, name: "Custom Water Bottle", image: "https://images.unsplash.com/photo-1602143407151-7111542b16c9?w=400", price: "₹449", category: "custom-drinkware", categoryName: "Custom Drinkware", description: "Personalized bottle with doctor name" },
  { id: 310, name: "Engraved Award Trophy", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400", price: "₹1299", category: "engraved-awards", categoryName: "Engraved Awards", description: "Custom trophy with recipient name" },
  
  // Clinic Branding Items
  { id: 311, name: "Clinic Branded Calendar", image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400", price: "₹399", category: "clinic-branding", categoryName: "Clinic Branding", description: "Calendar with clinic logo and details" },
  { id: 312, name: "Clinic Name Plate", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹899", category: "clinic-branding", categoryName: "Clinic Branding", description: "Custom name plate for clinic entrance" },
  { id: 313, name: "Doctor Name Personalized Stethoscope Tag", image: "https://images.unsplash.com/photo-1581338834647-b0a407628db1?w=400", price: "₹199", category: "doctor-name-personalization", categoryName: "Doctor Name Personalization", description: "Engraved stethoscope ID tag" },
  
  // ==========================================
  // DIGITAL GIFTS
  // ==========================================
  
  { id: 401, name: "Power Bank 20000mAh", image: "https://images.unsplash.com/photo-1619985632461-f33748ef7661?w=400", price: "₹1499", category: "power-banks", categoryName: "Power Banks", description: "High capacity portable charger" },
  { id: 402, name: "JBL Bluetooth Speaker", image: "https://images.unsplash.com/photo-1608043152269-423db5724e21?w=400", price: "₹2999", category: "bluetooth-speakers", categoryName: "Bluetooth Speakers", description: "Wireless portable speaker" },
  { id: 403, name: "USB 3.0 64GB Drive", image: "https://images.unsplash.com/photo-1586449480537-3ac15f1d6162?w=400", price: "₹699", category: "usb-drives", categoryName: "USB Drives", description: "Branded metal pen drive" },
  { id: 404, name: "Wireless Charging Pad", image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=400", price: "₹1299", category: "wireless-chargers", categoryName: "Wireless Chargers", description: "Fast charging Qi pad" },
  { id: 405, name: "7-inch Digital Frame", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹3999", category: "digital-photo-frames", categoryName: "Digital Photo Frames", description: "Slideshow photo display" },
  { id: 406, name: "Smart Home Assistant", image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400", price: "₹3499", category: "smart-gadgets", categoryName: "Smart Gadgets", description: "Voice-controlled smart assistant" },
  { id: 407, name: "Phone Stand with Charger", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", price: "₹899", category: "phone-accessories", categoryName: "Phone Accessories", description: "Adjustable stand with wireless charging" },
  { id: 408, name: "Fitness Tracker Band", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400", price: "₹1999", category: "fitness-bands", categoryName: "Fitness Bands", description: "Health and activity tracking wearable" },
  { id: 409, name: "Universal Travel Adapter", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", price: "₹1299", category: "travel-adapters", categoryName: "Travel Adapters", description: "Multi-country charging adapter" },
  { id: 410, name: "Tech Gift Combo", image: "https://images.unsplash.com/photo-1619985632461-f33748ef7661?w=400", price: "₹2499", category: "tech-combos", categoryName: "Tech Combos", description: "Power bank, USB drive, and cable set" },
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

// Helper function to get category by slug
export const getCategoryBySlug = (slug: string): CategoryItem | undefined => {
  const allCategories = [
    ...categories,
    ...therapies,
    ...occasions,
    ...personalizedGifts,
    ...digitalGifts,
    ...industries,
    ...priceRanges
  ];
  return allCategories.find(cat => cat.slug === slug);
};

// Helper function to get products by category slug
export const getProductsByCategory = (slug: string): Product[] => {
  return allProducts.filter(product => product.category === slug);
};

// Helper function to get all categories for sidebar
export const getAllCategoryGroups = () => [
  { title: "Product Categories", data: categories, path: "/categories" },
  { title: "Therapy-Based", data: therapies, path: "/therapy" },
  { title: "Occasions", data: occasions.filter(o => !o.slug.match(/^(january|february|march|april|may|june|july|august|september|october|november|december)$/)), path: "/occasion" },
  { title: "Personalized Gifts", data: personalizedGifts, path: "/personalized-gifts" },
  { title: "Digital Gifts", data: digitalGifts, path: "/digital-gifts" },
];

// Helper function to get combined categories for filtering (all types)
export const getCombinedCategories = () => {
  return [
    ...categories,
    ...therapies,
    ...occasions,
    ...personalizedGifts,
    ...digitalGifts
  ];
};

// Helper function to get all categories combined
export const getAllCategories = () => {
  return {
    industries,
    categories,
    priceRanges,
    occasions,
    therapies,
    personalizedGifts,
    digitalGifts,
    allProducts
  };
};

// Get occasion categories (non-month specific)
export const getOccasionCategories = (): CategoryItem[] => {
  return occasions.filter(o => 
    ['doctors-day', 'medical-conferences', 'product-launches', 'festive-gifting', 
     'brand-campaigns', 'seasonal-campaigns', 'product-promotions', 
     'brand-milestones', 'doctor-engagement-programs'].includes(o.slug)
  );
};

// Get month-wise categories
export const getMonthCategories = (): CategoryItem[] => {
  return occasions.filter(o => 
    ['january', 'february', 'march', 'april', 'may', 'june', 
     'july', 'august', 'september', 'october', 'november', 'december'].includes(o.slug)
  );
};

// Get therapy-based categories
export const getTherapyCategories = (): CategoryItem[] => {
  return therapies;
};

// Total counts
export const categoryCounts = {
  industries: industries.length,
  categories: categories.length,
  priceRanges: priceRanges.length,
  occasions: occasions.length,
  therapies: therapies.length,
  personalizedGifts: personalizedGifts.length,
  digitalGifts: digitalGifts.length,
  totalProducts: allProducts.length
};
