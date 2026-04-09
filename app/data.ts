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

// 2. By Category (DO NOT TOUCH - AS REQUESTED)
export const categories: CategoryItem[] = [
  { name: "Paperweights", slug: "paperweights", description: "Desk paperweights (Rs. 25 to 30 range)" },
  { name: "Tabletops", slug: "tabletops", description: "Tabletop decorations and desk items" },
  { name: "Desk Utility", slug: "desk-utility", description: "Desk organization and utility products" },
  { name: "3D Printed", slug: "3d-printed", description: "Custom 3D printed gift items and inputs" },
  { name: "Fibre and Resin Products", slug: "fibre-resin-products", description: "Fibre and resin crafted decorative items" },
  { name: "Eco Friendly Products", slug: "eco-friendly-products", description: "Sustainable and green gift options" },
  { name: "LED Tabletops", slug: "led-tabletops", description: "LED illuminated tabletop decorations" },
  { name: "Indoor Plants", slug: "indoor-plants", description: "Indoor plants and greenery for gifting" },
  { name: "Calendars", slug: "calendars", description: "Desk and wall calendars for corporate gifting" },
  { name: "Photo Frames", slug: "photo-frames", description: "Photo frames and memory displays" },
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

// 4. By Occasion (Month-wise)
export const occasions: CategoryItem[] = [
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

// 5. By Therapy (Medical Specialties)
export const therapies: CategoryItem[] = [
  { name: "Dermatology", slug: "dermatology", description: "Skin care gifts for dermatology professionals" },
  { name: "Nephrology", slug: "nephrology", description: "Kidney health and renal care gifts" },
  { name: "Nutrition", slug: "nutrition", description: "Diet and wellness gifts for nutritionists" },
  { name: "Cardiology", slug: "cardiology", description: "Heart health gifts for cardiac care" },
  { name: "Pulmonology", slug: "pulmonology", description: "Respiratory health and lung care gifts" },
  { name: "Hepatology", slug: "hepatology", description: "Liver health and digestive wellness gifts" },
  { name: "Ophthalmology", slug: "ophthalmology", description: "Eye care gifts for vision specialists" },
  { name: "Gastroenterology", slug: "gastroenterology", description: "Digestive health and GI care gifts" },
  { name: "Urology", slug: "urology", description: "Urological health and kidney stone care gifts" },
];

// 6. Personalized Gifts (Customized items)
export const personalizedGifts: CategoryItem[] = [
  { name: "Engraved Pens", slug: "engraved-pens", description: "Personalized writing instruments" },
  { name: "Custom Mugs", slug: "custom-mugs", description: "Printed and personalized coffee mugs" },
  { name: "Photo Gifts", slug: "photo-gifts", description: "Personalized photo items and collages" },
  { name: "Custom Stationery", slug: "custom-stationery", description: "Branded and personalized stationery sets" },
  { name: "Embossed Leather", slug: "embossed-leather", description: "Personalized leather goods and accessories" },
  { name: "Engraved Keychains", slug: "engraved-keychains", description: "Custom metal and wooden keychains" },
  { name: "Custom Apparel", slug: "custom-apparel", description: "Personalized T-shirts, caps and clothing" },
  { name: "Personalized Diaries", slug: "personalized-diaries", description: "Custom notebooks and planners" },
  { name: "Custom Drinkware", slug: "custom-drinkware", description: "Personalized bottles and sippers" },
  { name: "Engraved Awards", slug: "engraved-awards", description: "Custom trophies and recognition awards" },
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

// 8. All Products Data (Mapped to categories above)
export const allProducts: Product[] = [
  // Categories - Paperweights
  { id: 1, name: "Crystal Glass Paperweight", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400", price: "₹299", category: "paperweights", categoryName: "Paperweights", description: "Elegant crystal paperweight for desk" },
  { id: 2, name: "Corporate Logo Paperweight", image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400", price: "₹349", category: "paperweights", categoryName: "Paperweights", description: "Customizable with company logo" },
  
  // Categories - Tabletops
  { id: 3, name: "Executive Desk Calendar", image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400", price: "₹599", category: "tabletops", categoryName: "Tabletops", description: "Premium tabletop calendar stand" },
  { id: 4, name: "Brass Table Decor", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹899", category: "tabletops", categoryName: "Tabletops", description: "Traditional brass decorative piece" },
  
  // Categories - Desk Utility
  { id: 5, name: "Pen Stand with Clock", image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400", price: "₹449", category: "desk-utility", categoryName: "Desk Utility", description: "Multi-functional desk organizer" },
  { id: 6, name: "Document Tray Set", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400", price: "₹699", category: "desk-utility", categoryName: "Desk Utility", description: "3-tier document organizer" },
  
  // Categories - 3D Printed
  { id: 7, name: "3D Printed Name Plate", image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=400", price: "₹799", category: "3d-printed", categoryName: "3D Printed", description: "Custom 3D printed desk name plate" },
  { id: 8, name: "3D Printed Mobile Stand", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", price: "₹499", category: "3d-printed", categoryName: "3D Printed", description: "Ergonomic mobile holder" },
  
  // Categories - Fibre and Resin
  { id: 9, name: "Resin Art Coaster Set", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400", price: "₹649", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Handcrafted resin coasters" },
  { id: 10, name: "Fibre Glass Trophy", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400", price: "₹1299", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Modern fibre glass award trophy" },
  
  // Categories - Eco Friendly
  { id: 11, name: "Bamboo Cutlery Set", image: "https://images.unsplash.com/photo-1584622651921-47e0e8043693?w=400", price: "₹499", category: "eco-friendly-products", categoryName: "Eco Friendly Products", description: "Sustainable bamboo utensils" },
  { id: 12, name: "Seed Paper Diary", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹399", category: "eco-friendly-products", categoryName: "Eco Friendly Products", description: "Plantable seed paper notebook" },
  { id: 13, name: "Jute Laptop Bag", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", price: "₹999", category: "eco-friendly-products", categoryName: "Eco Friendly Products", description: "Eco-friendly jute carry bag" },
  
  // Categories - LED Tabletops
  { id: 14, name: "LED Desk Lamp", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", price: "₹1599", category: "led-tabletops", categoryName: "LED Tabletops", description: "Smart LED table lamp with touch control" },
  { id: 15, name: "Illuminated Globe", image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400", price: "₹2499", category: "led-tabletops", categoryName: "LED Tabletops", description: "World globe with LED lighting" },
  
  // Categories - Indoor Plants
  { id: 16, name: "Succulent Set with Pot", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", price: "₹899", category: "indoor-plants", categoryName: "Indoor Plants", description: "Low maintenance succulent combo" },
  { id: 17, name: "Lucky Bamboo Plant", image: "https://images.unsplash.com/photo-1599598425947-d35301f7c396?w=400", price: "₹649", category: "indoor-plants", categoryName: "Indoor Plants", description: "2-layer lucky bamboo in ceramic pot" },
  
  // Categories - Calendars
  { id: 18, name: "Executive Table Calendar", image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400", price: "₹299", category: "calendars", categoryName: "Calendars", description: "Premium desk calendar 2024" },
  { id: 19, name: "Planner Diary Combo", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹599", category: "calendars", categoryName: "Calendars", description: "Year planner with monthly calendar" },
  
  // Categories - Photo Frames
  { id: 20, name: "Digital Photo Frame 7 inch", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹3499", category: "photo-frames", categoryName: "Photo Frames", description: "Electronic photo display frame" },
  { id: 21, name: "Collage Photo Frame", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹799", category: "photo-frames", categoryName: "Photo Frames", description: "Multi-photo wooden frame" },
  
  // ==========================================
  // THERAPIES - COMPREHENSIVE DATA ADDED BELOW
  // ==========================================
  
  // Therapies - Dermatology (Skin Care)
  { id: 101, name: "Premium Skin Care Kit", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", price: "₹1299", category: "dermatology", categoryName: "Dermatology", description: "Complete skin care gift set with moisturizers and cleansers", tags: ["skincare", "beauty", "wellness"] },
  { id: 102, name: "Sunscreen Protection Combo", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", price: "₹899", category: "dermatology", categoryName: "Dermatology", description: "SPF 50+ sunscreen collection for UV protection", tags: ["sunscreen", "protection", "outdoor"] },
  { id: 103, name: "Dermatology Reference Set", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹1599", category: "dermatology", categoryName: "Dermatology", description: "Medical books and skin condition charts for professionals", tags: ["medical", "education", "reference"] },
  { id: 104, name: "UV Monitor Device", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400", price: "₹2499", category: "dermatology", categoryName: "Dermatology", description: "Portable UV index detector with smartphone connectivity", tags: ["tech", "uv", "monitoring"] },
  { id: 105, name: "Aloe Vera Plant Set", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", price: "₹699", category: "dermatology", categoryName: "Dermatology", description: "Natural aloe vera plants for skin healing and office decor", tags: ["natural", "plants", "healing"] },
  
  // Therapies - Nephrology (Kidney Health)
  { id: 106, name: "Kidney Health Monitor", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400", price: "₹3499", category: "nephrology", categoryName: "Nephrology", description: "Digital blood pressure and kidney function tracking device", tags: ["medical", "monitor", "health"] },
  { id: 107, name: "Hydration Tracking Bottle", image: "https://images.unsplash.com/photo-1602143407151-7111542b16c9?w=400", price: "₹799", category: "nephrology", categoryName: "Nephrology", description: "Smart water bottle with intake reminders and LED display", tags: ["hydration", "smart", "water"] },
  { id: 108, name: "Renal Diet Recipe Book", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹599", category: "nephrology", categoryName: "Nephrology", description: "Kidney-friendly diet guide and meal planner", tags: ["diet", "recipes", "health"] },
  { id: 109, name: "Wellness Hamper for Kidney Health", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹1999", category: "nephrology", categoryName: "Nephrology", description: "Curated gift set with low-sodium snacks and herbal teas", tags: ["wellness", "hamper", "organic"] },
  { id: 110, name: "Medical Grade Water Purifier", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", price: "₹1299", category: "nephrology", categoryName: "Nephrology", description: "Portable water filter for clean hydration on the go", tags: ["purifier", "water", "medical"] },
  
  // Therapies - Nutrition
  { id: 111, name: "Protein Gift Box", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400", price: "₹1999", category: "nutrition", categoryName: "Nutrition", description: "Premium protein supplements and shaker set", tags: ["protein", "fitness", "supplements"] },
  { id: 112, name: "Vitamin Combo Pack", image: "https://images.unsplash.com/photo-1584308666744-3c0b9c22406f?w=400", price: "₹1199", category: "nutrition", categoryName: "Nutrition", description: "Essential vitamins A-Z gift set with storage box", tags: ["vitamins", "health", "supplements"] },
  { id: 113, name: "Smart Nutrition Scale", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400", price: "₹2499", category: "nutrition", categoryName: "Nutrition", description: "Digital food scale with calorie calculator app", tags: ["smart", "scale", "diet"] },
  { id: 114, name: "Healthy Snack Hamper", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹1499", category: "nutrition", categoryName: "Nutrition", description: "Assorted nuts, seeds, and dried fruits gift basket", tags: ["healthy", "snacks", "organic"] },
  { id: 115, name: "Meal Prep Container Set", image: "https://images.unsplash.com/photo-1514228742587-6f155f924bb5?w=400", price: "₹899", category: "nutrition", categoryName: "Nutrition", description: "BPA-free portion control containers with recipe guide", tags: ["mealprep", "containers", "diet"] },
  
  // Therapies - Cardiology (Heart Health)
  { id: 116, name: "Heart Rate Monitor Watch", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400", price: "₹2499", category: "cardiology", categoryName: "Cardiology", description: "Advanced ECG and heart rate tracking smartwatch", tags: ["heart", "monitor", "smartwatch"] },
  { id: 117, name: "Healthy Heart Kit", image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400", price: "₹1499", category: "cardiology", categoryName: "Cardiology", description: "Heart healthy food basket with oats, nuts, and berries", tags: ["healthy", "heart", "food"] },
  { id: 118, name: "Blood Pressure Monitor", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400", price: "₹1999", category: "cardiology", categoryName: "Cardiology", description: "Digital BP monitor with irregular heartbeat detection", tags: ["medical", "bp", "monitor"] },
  { id: 119, name: "Stress Relief Kit", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400", price: "₹999", category: "cardiology", categoryName: "Cardiology", description: "Aromatherapy set for stress management and heart health", tags: ["stress", "relief", "aromatherapy"] },
  { id: 120, name: "Cardiac Emergency Kit", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400", price: "₹1299", category: "cardiology", categoryName: "Cardiology", description: "Portable first aid kit with aspirin and emergency contacts", tags: ["emergency", "firstaid", "medical"] },
  
  // Therapies - Pulmonology (Respiratory)
  { id: 121, name: "Steam Inhaler", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400", price: "₹699", category: "pulmonology", categoryName: "Pulmonology", description: "Electric steam vaporizer for respiratory therapy", tags: ["steam", "inhaler", "respiratory"] },
  { id: 122, name: "Air Purifier Plant", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", price: "₹899", category: "pulmonology", categoryName: "Pulmonology", description: "Snake plant and peace lily combo for clean air", tags: ["plants", "airpurifier", "natural"] },
  { id: 123, name: "Breathing Exercise Device", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400", price: "₹1299", category: "pulmonology", categoryName: "Pulmonology", description: "Lung capacity trainer with digital progress tracking", tags: ["breathing", "lungs", "exercise"] },
  { id: 124, name: "HEPA Air Purifier", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", price: "₹3999", category: "pulmonology", categoryName: "Pulmonology", description: "Desktop HEPA filter for clinic and office use", tags: ["purifier", "hepa", "airquality"] },
  { id: 125, name: "Essential Oil Diffuser", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ac8108?w=400", price: "₹1499", category: "pulmonology", categoryName: "Pulmonology", description: "Ultrasonic diffuser with eucalyptus and peppermint oils", tags: ["aromatherapy", "oils", "wellness"] },
  
  // Therapies - Hepatology (Liver Health)
  { id: 126, name: "Liver Detox Tea Set", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400", price: "₹799", category: "hepatology", categoryName: "Hepatology", description: "Herbal tea collection with milk thistle and dandelion", tags: ["tea", "detox", "herbal"] },
  { id: 127, name: "Healthy Liver Diet Guide", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹699", category: "hepatology", categoryName: "Hepatology", description: "Comprehensive diet plan book for liver health", tags: ["diet", "book", "health"] },
  { id: 128, name: "Milk Thistle Supplement Kit", image: "https://images.unsplash.com/photo-1584308666744-3c0b9c22406f?w=400", price: "₹1499", category: "hepatology", categoryName: "Hepatology", description: "Premium liver support supplements with vitamin complex", tags: ["supplements", "milkthistle", "health"] },
  { id: 129, name: "Non-Alcoholic Wine Set", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400", price: "₹1999", category: "hepatology", categoryName: "Hepatology", description: "Gourmet alcohol-free wine for liver-conscious gifting", tags: ["beverage", "alcoholfree", "gourmet"] },
  { id: 130, name: "Organic Food Hamper", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹2499", category: "hepatology", categoryName: "Hepatology", description: "Liver-friendly organic foods and snacks collection", tags: ["organic", "food", "healthy"] },
  
  // Therapies - Ophthalmology (Eye Care)
  { id: 131, name: "Blue Light Glasses", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400", price: "₹1299", category: "ophthalmology", categoryName: "Ophthalmology", description: "Anti-glare computer glasses with UV protection", tags: ["glasses", "bluelight", "protection"] },
  { id: 132, name: "Eye Care Kit", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", price: "₹899", category: "ophthalmology", categoryName: "Ophthalmology", description: "Cooling eye masks and drops for strain relief", tags: ["eyecare", "masks", "wellness"] },
  { id: 133, name: "LED Desk Lamp with Eye Protection", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", price: "₹2499", category: "ophthalmology", categoryName: "Ophthalmology", description: "Adjustable desk light with anti-flicker technology", tags: ["lighting", "desk", "protection"] },
  { id: 134, name: "Eye Model Anatomical Display", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400", price: "₹1799", category: "ophthalmology", categoryName: "Ophthalmology", description: "3D eye structure model for educational purposes", tags: ["educational", "model", "anatomy"] },
  { id: 135, name: "Screen Time Tracker", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400", price: "₹999", category: "ophthalmology", categoryName: "Ophthalmology", description: "Device to monitor and limit screen exposure time", tags: ["tech", "screentime", "health"] },
  
  // Therapies - Gastroenterology (Digestive Health)
  { id: 136, name: "Probiotic Wellness Kit", image: "https://images.unsplash.com/photo-1584308666744-3c0b9c22406f?w=400", price: "₹1599", category: "gastroenterology", categoryName: "Gastroenterology", description: "Complete probiotic supplement set with digestive enzymes", tags: ["probiotics", "digestion", "health"] },
  { id: 137, name: "Herbal Digestive Tea Set", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400", price: "₹699", category: "gastroenterology", categoryName: "Gastroenterology", description: "Chamomile, ginger, and peppermint tea collection", tags: ["tea", "herbal", "digestion"] },
  { id: 138, name: "Gut Health Recipe Book", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹899", category: "gastroenterology", categoryName: "Gastroenterology", description: "Cookbook with recipes for healthy gut microbiome", tags: ["recipes", "cookbook", "guthealth"] },
  { id: 139, name: "Bamboo Fiber Dinner Set", image: "https://images.unsplash.com/photo-1584622651921-47e0e8043693?w=400", price: "₹1499", category: "gastroenterology", categoryName: "Gastroenterology", description: "Eco-friendly dining set for mindful eating", tags: ["dinnerware", "bamboo", "ecofriendly"] },
  { id: 140, name: "Portion Control Plate Set", image: "https://images.unsplash.com/photo-1514228742587-6f155f924bb5?w=400", price: "₹1199", category: "gastroenterology", categoryName: "Gastroenterology", description: "Sectioned plates for balanced meal portions", tags: ["portions", "plates", "diet"] },
  
  // Therapies - Urology
  { id: 141, name: "Kidney Stone Prevention Kit", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400", price: "₹1899", category: "urology", categoryName: "Urology", description: "Hydration bundle with citrate supplements and bottles", tags: ["kidney", "prevention", "hydration"] },
  { id: 142, name: "Smart Hydration Bottle", image: "https://images.unsplash.com/photo-1602143407151-7111542b16c9?w=400", price: "₹1299", category: "urology", categoryName: "Urology", description: "Water bottle with intake tracking and reminders", tags: ["water", "smartbottle", "hydration"] },
  { id: 143, name: "Urinary Health Supplement Set", image: "https://images.unsplash.com/photo-1584308666744-3c0b9c22406f?w=400", price: "₹1699", category: "urology", categoryName: "Urology", description: "Cranberry extract and D-mannose supplements", tags: ["supplements", "urinary", "health"] },
  { id: 144, name: "Urology Reference Guide", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹2499", category: "urology", categoryName: "Urology", description: "Medical atlas with latest urological procedures", tags: ["medical", "reference", "book"] },
  { id: 145, name: "Wellness Hamper for Urology", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹2199", category: "urology", categoryName: "Urology", description: "Curated health foods and wellness products", tags: ["wellness", "hamper", "health"] },
  
  // Personalized Gifts
  { id: 201, name: "Engraved Metal Pen", image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400", price: "₹599", category: "engraved-pens", categoryName: "Engraved Pens", description: "Premium pen with custom engraving" },
  { id: 202, name: "Custom Magic Mug", image: "https://images.unsplash.com/photo-1514228742587-6f155f924bb5?w=400", price: "₹499", category: "custom-mugs", categoryName: "Custom Mugs", description: "Photo reveals on heating" },
  { id: 203, name: "Crystal Photo Frame", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹899", category: "photo-gifts", categoryName: "Photo Gifts", description: "3D crystal photo engraving" },
  { id: 204, name: "Branded Notebook", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹399", category: "custom-stationery", categoryName: "Custom Stationery", description: "Company logo printed diary" },
  { id: 205, name: "Leather Card Holder", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", price: "₹799", category: "embossed-leather", categoryName: "Embossed Leather", description: "Genuine leather card wallet" },
  { id: 206, name: "Metal Keychain Set", image: "https://images.unsplash.com/photo-1581338834647-b0a407628db1?w=400", price: "₹299", category: "engraved-keychains", categoryName: "Engraved Keychains", description: "Custom engraved metal keychain" },
  
  // Digital Gifts
  { id: 301, name: "Power Bank 20000mAh", image: "https://images.unsplash.com/photo-1619985632461-f33748ef7661?w=400", price: "₹1499", category: "power-banks", categoryName: "Power Banks", description: "High capacity portable charger" },
  { id: 302, name: "JBL Bluetooth Speaker", image: "https://images.unsplash.com/photo-1608043152269-423db5724e21?w=400", price: "₹2999", category: "bluetooth-speakers", categoryName: "Bluetooth Speakers", description: "Wireless portable speaker" },
  { id: 303, name: "USB 3.0 64GB Drive", image: "https://images.unsplash.com/photo-1586449480537-3ac15f1d6162?w=400", price: "₹699", category: "usb-drives", categoryName: "USB Drives", description: "Branded metal pen drive" },
  { id: 304, name: "Wireless Charging Pad", image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=400", price: "₹1299", category: "wireless-chargers", categoryName: "Wireless Chargers", description: "Fast charging Qi pad" },
  { id: 305, name: "7-inch Digital Frame", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹3999", category: "digital-photo-frames", categoryName: "Digital Photo Frames", description: "Slideshow photo display" },
  
   // Occasions - January (New Year & Republic Day)
  { id: 401, name: "New Year Celebration Hamper", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹1999", category: "january", categoryName: "January", description: "Premium hamper with chocolates, wine, and diary", tags: ["newyear", "hamper", "celebration"] },
  { id: 402, name: "Republic Day Tricolor Combo", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400", price: "₹1299", category: "january", categoryName: "January", description: "Saffron, white, and green themed corporate gifts", tags: ["republicday", "tricolor", "patriotic"] },
  { id: 403, name: "Executive Planner 2025", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹899", category: "january", categoryName: "January", description: "Premium leather planner with company branding", tags: ["planner", "executive", "branding"] },
  { id: 404, name: "Desk Calendar Premium", image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400", price: "₹599", category: "january", categoryName: "January", description: "Wooden base calendar with motivational quotes", tags: ["calendar", "desk", "motivational"] },
  { id: 405, name: "Wellness Starter Kit", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹2499", category: "january", categoryName: "January", description: "Health-focused gift box for New Year resolutions", tags: ["wellness", "health", "newyear"] },
  
  // Occasions - February (Valentine's & Cancer Awareness)
  { id: 406, name: "Pink Ribbon Gift Set", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", price: "₹1499", category: "february", categoryName: "February", description: "Cancer awareness themed corporate gifts", tags: ["cancerawareness", "pink", "health"] },
  { id: 407, name: "Heart Healthy Hamper", image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400", price: "₹1899", category: "february", categoryName: "February", description: "Valentine's special with healthy treats", tags: ["valentine", "healthy", "heart"] },
  { id: 408, name: "Red Velvet Cake Box", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400", price: "₹799", category: "february", categoryName: "February", description: "Premium cakes and confectionery gift set", tags: ["cake", "valentine", "sweet"] },
  { id: 409, name: "Rose Gold Pen Set", image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400", price: "₹1299", category: "february", categoryName: "February", description: "Elegant rose gold finish writing instruments", tags: ["pen", "rosegold", "elegant"] },
  { id: 410, name: "Self Care Wellness Box", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", price: "₹2199", category: "february", categoryName: "February", description: "Spa and wellness products for self-love", tags: ["selfcare", "wellness", "spa"] },
  
  // Occasions - March (Holi & Women's Day)
  { id: 411, name: "Holi Color Hamper Organic", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0ec?w=400", price: "₹699", category: "march", categoryName: "March", description: "Natural herbal gulal with sweets and thandai", tags: ["holi", "colors", "festival"] },
  { id: 412, name: "Women's Day Special Hamper", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", price: "₹1599", category: "march", categoryName: "March", description: "Empowerment themed gifts for women employees", tags: ["womensday", "empowerment", "appreciation"] },
  { id: 413, name: "Spring Festival Combo", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", price: "₹1299", category: "march", categoryName: "March", description: "Spring themed floral gifts and plants", tags: ["spring", "floral", "plants"] },
  { id: 414, name: "Organic Sweets Box", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹999", category: "march", categoryName: "March", description: "Chemical-free traditional Indian sweets", tags: ["sweets", "organic", "traditional"] },
  { id: 415, name: "Waterproof Gadget Case", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", price: "₹899", category: "march", categoryName: "March", description: "Protection for devices during Holi celebrations", tags: ["waterproof", "gadgets", "protection"] },
  
  // Occasions - April (Health Day & Financial Year)
  { id: 416, name: "Health Checkup Kit", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400", price: "₹2499", category: "april", categoryName: "April", description: "Basic health monitoring devices and vouchers", tags: ["health", "checkup", "wellness"] },
  { id: 417, name: "Financial Year Planner", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹799", category: "april", categoryName: "April", description: "Tax planner and financial organizer", tags: ["financial", "planner", "tax"] },
  { id: 418, name: "Stress Relief Kit", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ac8108?w=400", price: "₹1499", category: "april", categoryName: "April", description: "Aromatherapy and stress management products", tags: ["stressrelief", "aromatherapy", "wellness"] },
  { id: 419, name: "Healthy Snack Subscription", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹2999", category: "april", categoryName: "April", description: "3-month healthy snack delivery service", tags: ["healthy", "snacks", "subscription"] },
  { id: 420, name: "Fitness Band Corporate", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400", price: "₹1999", category: "april", categoryName: "April", description: "Health tracking wearable with company logo", tags: ["fitness", "tracker", "health"] },
  
  // Occasions - May (Mother's Day & Asthma Day)
  { id: 421, name: "Mother's Day Care Package", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", price: "₹1899", category: "may", categoryName: "May", description: "Wellness products and spa vouchers for mothers", tags: ["mothersday", "care", "wellness"] },
  { id: 422, name: "Air Purifying Plants Set", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", price: "₹1299", category: "may", categoryName: "May", description: "Best indoor plants for asthma and allergies", tags: ["plants", "airpurifier", "health"] },
  { id: 423, name: "Organic Tea Collection", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400", price: "₹999", category: "may", categoryName: "May", description: "Caffeine-free herbal teas for respiratory health", tags: ["tea", "herbal", "organic"] },
  { id: 424, name: "Handcrafted Jewelry Box", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹1699", category: "may", categoryName: "May", description: "Artisanal jewelry organizer for Mother's Day", tags: ["jewelry", "handcrafted", "gift"] },
  { id: 425, name: "Essential Oil Diffuser", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ac8108?w=400", price: "₹1399", category: "may", categoryName: "May", description: "Aromatherapy diffuser with eucalyptus oil", tags: ["aromatherapy", "diffuser", "wellness"] },
  
  // Occasions - June (Environment Day)
  { id: 426, name: "Zero Waste Starter Kit", image: "https://images.unsplash.com/photo-1584622651921-47e0e8043693?w=400", price: "₹1499", category: "june", categoryName: "June", description: "Sustainable living essentials and bamboo products", tags: ["zerowaste", "sustainable", "eco"] },
  { id: 427, name: "Plantable Seed Paper Set", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", price: "₹699", category: "june", categoryName: "June", description: "Stationery that grows into plants", tags: ["seedpaper", "plantable", "eco"] },
  { id: 428, name: "Solar Powered Gadgets", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400", price: "₹2499", category: "june", categoryName: "June", description: "Eco-friendly tech powered by solar energy", tags: ["solar", "eco", "tech"] },
  { id: 429, name: "Recycled Material Bag", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", price: "₹899", category: "june", categoryName: "June", description: "Stylish bags made from recycled plastic", tags: ["recycled", "bags", "eco"] },
  { id: 430, name: "Organic Gardening Kit", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400", price: "₹1199", category: "june", categoryName: "June", description: "Seeds, tools, and pots for office gardening", tags: ["gardening", "organic", "plants"] },
  
  // Occasions - July (Doctor's Day)
  { id: 431, name: "Doctor's Day Pen Set", image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400", price: "₹1299", category: "july", categoryName: "July", description: "Premium medical-themed pens and diaries", tags: ["doctorsday", "medical", "appreciation"] },
  { id: 432, name: "Monsoon Care Package", image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400", price: "₹999", category: "july", categoryName: "July", description: "Umbrellas, raincoats, and herbal teas", tags: ["monsoon", "rain", "care"] },
  { id: 433, name: "Medical Reference Books", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹2999", category: "july", categoryName: "July", description: "Latest medical journals and reference guides", tags: ["medical", "books", "reference"] },
  { id: 434, name: "Sanitizer and Wellness Kit", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400", price: "₹799", category: "july", categoryName: "July", description: "Hygiene essentials for healthcare workers", tags: ["sanitizer", "hygiene", "wellness"] },
  { id: 435, name: "Desk Plant with Quote", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400", price: "₹649", category: "july", categoryName: "July", description: "Succulent with 'Thank You Doctor' message", tags: ["plants", "doctorsday", "gratitude"] },
  
  // Occasions - August (Independence Day)
  { id: 436, name: "Tiranga Gift Hamper", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400", price: "₹1599", category: "august", categoryName: "August", description: "Tricolor themed premium corporate gifts", tags: ["independenceday", "tiranga", "patriotic"] },
  { id: 437, name: "Freedom Fighter Biography Set", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹1899", category: "august", categoryName: "August", description: "Books on Indian independence leaders", tags: ["books", "history", "patriotic"] },
  { id: 438, name: "Khadi Product Collection", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", price: "₹1499", category: "august", categoryName: "August", description: "Handwoven khadi bags and accessories", tags: ["khadi", "handwoven", "traditional"] },
  { id: 439, name: "Flag Themed Desk Set", image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400", price: "₹999", category: "august", categoryName: "August", description: "Patriotic desk organizers and stationery", tags: ["desk", "patriotic", "office"] },
  { id: 440, name: "Independence Day Sweets", image: "https://images.unsplash.com/photo-1561361573-7c8a6405e1ca?w=400", price: "₹899", category: "august", categoryName: "August", description: "Tricolor barfi and traditional Indian sweets", tags: ["sweets", "tricolor", "traditional"] },
  
  // Occasions - September (Nutrition Week)
  { id: 441, name: "Healthy Eating Guide Book", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹799", category: "september", categoryName: "September", description: "Nutrition guide with meal planning templates", tags: ["nutrition", "healthy", "guide"] },
  { id: 442, name: "Protein Bar Assortment", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400", price: "₹1299", category: "september", categoryName: "September", description: "Assorted protein bars and health snacks", tags: ["protein", "healthy", "snacks"] },
  { id: 443, name: "World Heart Day Kit", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400", price: "₹2499", category: "september", categoryName: "September", description: "BP monitor and heart healthy food basket", tags: ["heart", "health", "monitor"] },
  { id: 444, name: "Superfood Hamper", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹1999", category: "september", categoryName: "September", description: "Chia, quinoa, and organic superfoods", tags: ["superfood", "organic", "healthy"] },
  { id: 445, name: "Meal Prep Container Set", image: "https://images.unsplash.com/photo-1514228742587-6f155f924bb5?w=400", price: "₹1199", category: "september", categoryName: "September", description: "BPA-free containers for healthy meal planning", tags: ["mealprep", "containers", "healthy"] },
  
  // Occasions - October (Diwali & Osteoporosis)
  { id: 446, name: "Premium Diwali Hamper", image: "https://images.unsplash.com/photo-1573662761572-2c2be631a545?w=400", price: "₹4999", category: "october", categoryName: "October", description: "Luxury sweets, dry fruits, and decor items", tags: ["diwali", "luxury", "festival"] },
  { id: 447, name: "Bone Health Supplement Set", image: "https://images.unsplash.com/photo-1584308666744-3c0b9c22406f?w=400", price: "₹1699", category: "october", categoryName: "October", description: "Calcium and vitamin D for osteoporosis prevention", tags: ["bones", "health", "supplements"] },
  { id: 448, name: "Decorative Diya Set", image: "https://images.unsplash.com/photo-1573662761572-2c2be631a545?w=400", price: "₹599", category: "october", categoryName: "October", description: "Handcrafted brass diyas with branded packaging", tags: ["diya", "diwali", "traditional"] },
  { id: 449, name: "Festive Office Decor Kit", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400", price: "₹2499", category: "october", categoryName: "October", description: "Rangoli kits, lights, and wall hangings", tags: ["decor", "festive", "office"] },
  { id: 450, name: "Dry Fruit Premium Box", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹2999", category: "october", categoryName: "October", description: "Imported nuts and dried fruits collection", tags: ["dryfruits", "premium", "diwali"] },
  
  // Occasions - November (Children's Day & Diabetes Day)
  { id: 451, name: "Educational Toy Set", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400", price: "₹1499", category: "november", categoryName: "November", description: "STEM toys for children's learning", tags: ["toys", "educational", "children"] },
  { id: 452, name: "Diabetes Care Kit", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400", price: "₹2499", category: "november", categoryName: "November", description: "Glucometer and sugar-free snacks hamper", tags: ["diabetes", "health", "care"] },
  { id: 453, name: "Childhood Memory Book", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹899", category: "november", categoryName: "November", description: "Photo album and memory keeping kit", tags: ["memory", "children", "nostalgia"] },
  { id: 454, name: "Healthy Kids Snack Box", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹799", category: "november", categoryName: "November", description: "Nutritious snacks for children", tags: ["kids", "snacks", "healthy"] },
  { id: 455, name: "Coloring Stationery Set", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400", price: "₹699", category: "november", categoryName: "November", description: "Art supplies and creative materials", tags: ["art", "stationery", "creative"] },
  
  // Occasions - December (Christmas & Year End)
  { id: 456, name: "Christmas Celebration Box", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400", price: "₹2999", category: "december", categoryName: "December", description: "Cakes, wine, and Christmas decor", tags: ["christmas", "celebration", "festival"] },
  { id: 457, name: "Year End Planner 2025", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹999", category: "december", categoryName: "December", description: "Premium planner for the upcoming year", tags: ["planner", "2025", "newyear"] },
  { id: 458, name: "Winter Care Package", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400", price: "₹1799", category: "december", categoryName: "December", description: "Warmers, teas, and skincare for winter", tags: ["winter", "care", "warm"] },
  { id: 459, name: "Corporate Gift Hampers", image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400", price: "₹3999", category: "december", categoryName: "December", description: "Luxury hampers for year-end corporate gifting", tags: ["corporate", "luxury", "yearend"] },
  { id: 460, name: "Gratitude Journal Set", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹899", category: "december", categoryName: "December", description: "Year review and thank you notes collection", tags: ["journal", "gratitude", "reflection"] },

];

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
  { title: "Categories", data: categories, path: "/categories" },
  { title: "Therapy", data: therapies, path: "/therapy" },
  { title: "Personalized Gifts", data: personalizedGifts, path: "/personalized-gifts" },
  { title: "Occasion", data: occasions, path: "/occasion" },
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
