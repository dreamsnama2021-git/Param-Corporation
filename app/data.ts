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
  images?: string[];
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
  { name: "Paperweights", slug: "paperweights", description: "Premium desk accessories designed to provide daily brand visibility in clinics, hospitals, and doctor workspaces, making them effective pharma promotional gifts with long-term brand recall." },
  { name: "Tabletops", slug: "tabletops", description: "Interactive and visually engaging doctor consultation tools designed to improve clinic communication, support patient education, and create stronger brand visibility during consultations." },
  { name: "Desk Utility", slug: "desk-utility", description: "Functional doctor utility products, including organizers, prescription holders, pen stands, and desk accessories designed for everyday clinic use while enhancing pharma brand recall." },
  { name: "3D Printed", slug: "3d-printed", description: "Custom 3D anatomical models and branded medical education products designed to simplify medical communication, improve patient understanding, and create stronger scientific brand engagement." },
  { name: "Fibre and Resin Products", slug: "fibre-resin-products", description: "Premium pharma gifting products crafted for durability, visual appeal, and high brand recall—ideal for doctor engagement programs, medical conferences, and healthcare promotions." },
  { name: "Eco Friendly Products", slug: "eco-friendly-products", description: "Sustainable corporate gifting solutions for pharma companies designed for environmentally conscious brand campaigns while maintaining premium functionality and visibility." },
  { name: "LED Tabletops", slug: "led-tabletops", description: "Modern illuminated tabletop branding solutions designed for clinics, waiting areas, and healthcare communication spaces to enhance engagement and visibility." },
  { name: "Indoor Plants", slug: "indoor-plants", description: "Thoughtful and premium doctor gifting solutions designed to create a calming clinic environment while offering memorable brand presence." },
  { name: "Calendars", slug: "calendars", description: "Custom-designed branded calendars created as practical pharma promotional gifts that ensure year-round doctor engagement and consistent brand visibility." },
  { name: "Photo Frames", slug: "photo-frames", description: "Elegant customized photo frames designed to create subtle but long-lasting pharma branding presence in doctors’ clinics and personal workspaces." },
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
  // Categories - Paperweights (IDs: 1-50)
  { id: 1, name: "5 STAR THEME MAGNETIC PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Paper%20Weight.png",
     price: "₹29", category: "paperweights", categoryName: "Paperweights", description: "Elegant crystal paperweight for desk" },
  { id: 2, name: "5 STAR THEME MAGNETIC PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_32%20PM.png",
     price: "₹25", category: "paperweights", categoryName: "Paperweights", description: "Customizable with company logo" },
  // { id: 3, name: "BEPLEX TABLET COMPARISON PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_37%20PM.png",
  //  price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 4, name: "BEPLEX TABLET COMPARISON PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_57%20PM.png",
     price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 5, name: "ACID REFLUX DETAILER PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_04_17%20PM.png",
     price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 6, name: "CUSTOMIZED BP MACHINE SHAPED PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_08_09%20PM.png",
     price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 7, name: "CUSTOMIZED APPLE SHAPED FRAGRANCE PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_09_23%20PM.png",
     price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },
  { id: 8, name: "CLEAR THEME PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_09_31%20PM.png",
     price: "₹29", category: "paperweights", categoryName: "Paperweights", description: "Elegant crystal paperweight for desk" },
  { id: 9, name: "CAPSULE ROCKING PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_09_48%20PM.png",
     price: "₹25", category: "paperweights", categoryName: "Paperweights", description: "Customizable with company logo" },
  { id: 10, name: "CUSTOMIZED BP MACHINE SHAPED PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_10_17%20PM.png",
     price: "₹30", category: "paperweights", categoryName: "Paperweights", description: "Brushed metal desk paperweight" },

  // Categories - Tabletops (IDs: 11-19)
  { id: 11, name: "CUSTOMIZED 1 LAKH DOSES MOMENTO", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_25_07%20PM.png",
     price: "₹599", category: "tabletops", categoryName: "Tabletops", description: "Premium tabletop calendar stand" },
  { id: 12, name: "CUSTOMIZED 15 YEARS MOMENTO", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Table%20Top.png",
     price: "₹899", category: "tabletops", categoryName: "Tabletops", description: "Traditional brass decorative piece" },
  { id: 13, name: "CUSTOMIZED BRAIN & GUTT CONNECTION WOODEN FRAME WITH CLOCK", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/25.png",
     price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 14, name: "CUSTOMIZED DESK CLOCK", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/32.png",
     price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 15, name: "CUSTOMIZED HEART SHAPE COASTER SET", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Urology/15.png",
     price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 16, name: "CUSTOMIZED MAGNETIC DETAILER", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/ENT%20%26%20Respiratory/28.png",
     price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 17, name: "CUSTOMIZED MNEMONIC SLANT PEN HOLDER", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Dermatology/ChatGPT%20Image%20May%2029%2C%202026%2C%2004_39_01%20PM.png",
     price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 18, name: "CUSTOMIZED MOBILE HOLDER", image: "TableTop/CUSTOMIZED MOBILE HOLDER.jpg",
     price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 19, name: "CUSTOMIZED YOGA THEME DESK CLOCK", image: "TableTop/CUSTOMIZED YOGA THEME DESK CLOCK.JPG",
     price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },
  { id: 20, name: "EAR MODEL WITH SAMPLE DESPENSER", image: "TableTop/EAR MODEL WITH SAMPLE DESPENSER.jpg",
     price: "₹1299", category: "tabletops", categoryName: "Tabletops", description: "Medical anatomy tabletop display" },

  // Categories - Desk Utility (IDs: 21-40)
  {
    id: 21, name: "CUSTOMIZED AMBULANCE SHAPED FIRST AID KIT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_16_31%20PM.png",
     price: "₹599", category: "desk-utility", categoryName: "Desk Utility", description: "Multi-functional 3-in-1 desk organizer for pens, mobile, and stationery", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_16_31%20PM.png",
      // "Desk Utility/CUSTOMIZED 3 IN 1 DESK ORGANIZER 2.JPG"
    ]
  },
  {
    id: 22, name: "MULTI BRANDING ROTATING PEN STAND", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_16_58%20PM.png",
     price: "₹899", category: "desk-utility", categoryName: "Desk Utility", description: "Unique ambulance-shaped first aid kit with branding options", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_16_58%20PM.png",
      // "Desk Utility/CUSTOMIZED AMBULANCE SHAPED FIRST AID KIT 2.JPG"
    ]
  },
  {
    id: 23, name: "CUSTOMIZED MOBILE HOLDER WITH PEN HOLDER", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_17_03%20PM.png",
     price: "₹349", category: "desk-utility", categoryName: "Desk Utility", description: "Elegant chit/note container for desk organization", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_17_03%20PM.png",
      // "Desk Utility/CUSTOMIZED CHIT CONTAINER 2.JPG"
    ]
  },
  {
    id: 24, name: "CUSTOMIZED MOBILE HOLDER KEY CHAIN", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_17_09%20PM.png",
     price: "₹449", category: "desk-utility", categoryName: "Desk Utility", description: "Combination chit container and pen stand", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_17_09%20PM.png"
    ]
  },
  {
    id: 25, name: "MULTI UTILITY DESK CLOCK", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_17_51%20PM.png",
     price: "₹299", category: "desk-utility", categoryName: "Desk Utility", description: "Simple and elegant chit/note holder", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_17_51%20PM.png",
      // "Desk Utility/CUSTOMIZED CHIT HOLDER 2.JPG"
    ]
  },
  {
    id: 26, name: "CUSTOMIZED 3 IN 1 DESK ORGANIZER", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2012_56_13%20PM.png",
     price: "₹499", category: "desk-utility", categoryName: "Desk Utility", description: "2-in-1 chit holder with mobile phone stand", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2012_56_13%20PM.png",
      // "Desk Utility/CUSTOMIZED CHIT HOLDER WITH MOBILE HOLDER 2.JPG"
    ]
  },
  {
    id: 27, name: "CUSTOMIZED FOLDABLE CHIT PAD & PEN HOLDER TABLE TOP", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_27%20PM.png",
     price: "₹399", category: "desk-utility", categoryName: "Desk Utility", description: "Beautiful flower-shaped decorative paperweight", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_27%20PM.png",
      // "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/WhatsApp%20Image%202026-05-29%20at%208.20.24%20PM%20(1).jpeg",
      // "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/WhatsApp%20Image%202026-05-29%20at%208.20.24%20PM%20(2).jpeg",
      // "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/WhatsApp%20Image%202026-05-29%20at%208.20.24%20PM.jpeg",
    ]
  },
  {
    id: 28, name: "CUSTOMIZED MOBILE HOLDER WITH VISITING CARD HOLDER", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_22%20PM.png",
     price: "₹649", category: "desk-utility", categoryName: "Desk Utility", description: "Foldable desk organizer with chit pad and pen holder", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_22%20PM.png",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/WhatsApp%20Image%202026-05-29%20at%208.20.24%20PM%20(1).jpeg",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/WhatsApp%20Image%202026-05-29%20at%208.20.24%20PM%20(2).jpeg",
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/WhatsApp%20Image%202026-05-29%20at%208.20.24%20PM.jpeg",
    ]
  },
  {
    id: 29, name: "CUSTOMIZED FLOWER SHAPE PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_16%20PM.png",
     price: "₹299", category: "desk-utility", categoryName: "Desk Utility", description: "Portable foldable mobile phone stand", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_16%20PM.png",
      // "Desk Utility/CUSTOMIZED FOLDABLE MOBILE HOLDER 2.JPG"
    ]
  },
  {
    id: 30, name: "CUSTOMIZED LED CHIT HOLDER", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_05%20PM.png",
     price: "₹549", category: "desk-utility", categoryName: "Desk Utility", description: "Illuminated LED chit holder for enhanced visibility", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Utility/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_05%20PM.png",
      // "Desk Utility/CUSTOMIZED LED CHIT HOLDER 2.JPG"
    ]
  },

  // Categories - 3D Printed (IDs: 31-40)
  { id: 31, name: "AESTHETIC HEART SHAPED FLOWER VASE", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_27_29%20PM.png", price: "₹799", category: "3d-printed", categoryName: "3D Printed", description: "Custom 3D printed desk name plate" },
  { id: 32, name: "CUSTOMIWS BRAND NAME DUAL UTILITY TABLE TOP", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_27_41%20PM.png", price: "₹1499", category: "3d-printed", categoryName: "3D Printed", description: "Pharma branding 3D molecule visualization" },
  // { id: 33, name: "CUSTOMIZED BRAND NAME DUAL UTILITY TABLE TOP", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_28_41%20PM.png", price: "₹1999", category: "3d-printed", categoryName: "3D Printed", description: "Educational 3D printed organ model" },
  { id: 34, name: "CUSTOMIZED G SHAPED SHEET HOLDER", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_28_52%20PM.png", price: "₹899", category: "3d-printed", categoryName: "3D Printed", description: "Custom sheet holder with branding" },
  { id: 35, name: "CUSTOMIZED BRAND NAME SHEET HOLDER", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2001_29_49%20PM.png", price: "₹899", category: "3d-printed", categoryName: "3D Printed", description: "Elegant G-shaped document holder" },
  { id: 36, name: "INFINITY MIRROR", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_00_38%20PM.png", price: "₹2499", category: "3d-printed", categoryName: "3D Printed", description: "Conceptual gut-brain connection art frame" },
  { id: 37, name: "GUTT BRAIN CONNECTION CONCEPTUALISED FRAME", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_01_16%20PM.png", price: "₹1299", category: "3d-printed", categoryName: "3D Printed", description: "Mesmerizing infinity mirror effect" },
  { id: 38, name: "SKIN MODEL", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_03_57%20PM.png", price: "₹699", category: "3d-printed", categoryName: "3D Printed", description: "Unique intestine design pen holder" },
  { id: 39, name: "MITOCHONDRIA PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_04_56%20PM.png", price: "₹699", category: "3d-printed", categoryName: "3D Printed", description: "Anatomy-inspired kidney pen holder" },
  { id: 40, name: "REUMEN MODEL", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_05_02%20PM.png", price: "₹599", category: "3d-printed", categoryName: "3D Printed", description: "Cell biology mitochondria paperweight" },

  // Categories - Fibre and Resin Products (IDs: 41-55)
  {
    id: 41, name: "4 STAGE ENDODONTIC TREATMENT MODEL", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_25%20PM.png",
     price: "₹2499", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Detailed 4-stage endodontic treatment demonstration model for dental education", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_25%20PM.png",
      // "Fibre & Resin/4 STAGE ENDODONTIC TREATMENT MODEL 2.jpg"
    ]
  },
  {
    id: 42, name: "CUSTOMIZED DOCTOR COAT SHAPED PEN STAND", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_31%20PM.png",
     price: "₹599", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Unique doctor coat shaped pen stand - perfect medical desk accessory", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_31%20PM.png",
      // "Fibre & Resin/CUSTOMIZED DOCTOR COAT SHAPED PEN STAND 2.JPG",
      // "Fibre & Resin/CUSTOMIZED DOCTOR COAT SHAPED PEN STAND 3.JPG"
    ]
  },
  {
    id: 43, name: "CUSTOMIZED FIBRE SAMOSA PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_43%20PM.png", price: "₹449", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Fun burger-shaped fibre paperweight for desk decor", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_43%20PM.png"
    ]
  },
  {
    id: 44, name: "CUSTOMIZED FIBRE TEA CUP PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_54%20PM.png", price: "₹399", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Unique samosa-shaped fibre paperweight - quirky desk accessory", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_17_54%20PM.png",
      // "Fibre & Resin/CUSTOMIZED FIBRE SAMOSA PAPERWEIGHT 2.JPG"
    ]
  },
  {
    id: 45, name: "CUSTOMIZED FIBRE VADA PAV PAPERWEIGHT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_18_02%20PM.png", price: "₹449", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Tea cup shaped fibre paperweight for desk decor", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_18_02%20PM.png"
    ]
  },
  {
    id: 46, name: "FINGER EXERCISE MODEL", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_08_59%20PM.png", price: "₹449", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Traditional tea glass shaped fibre paperweight", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_08_59%20PM.png"
    ]
  },
  {
    id: 47, name: "MOTHER-BABY FIBRE TABLE TOP", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_06%20PM.png", price: "₹449", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Mumbai-style vada pav shaped fibre paperweight", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_06%20PM.png",
      // "Fibre & Resin/CUSTOMIZED FIBRE VADA PAV PAPERWEIGHT 2.JPG"
    ]
  },
  {
    id: 48, name: "ORGANS AFFECTED BY DIABETES PEN STAND", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_15%20PM.png", price: "₹499", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Customizable number-shaped paperweight - perfect for birthdays and anniversaries", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_15%20PM.png",
      // "Fibre & Resin/CUSTOMIZED NUMBER SHAPE PAPERWEIGHT 2.JPG"
    ]
  },
  {
    id: 49, name: "TOOTH DECAY REPAIR MODEL", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_33%20PM.png", price: "₹1299", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Therapeutic finger exercise model for rehabilitation", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_33%20PM.png",
      // "Fibre & Resin/FINGER EXERCISE MODEL 2.jpg"
    ]
  },
  {
    id: 50, name: "INTESTINE SHAPED PEN STAND", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_41%20PM.png",
     price: "₹699", category: "fibre-resin-products", categoryName: "Fibre and Resin Products", description: "Anatomy-inspired intestine shaped pen stand for medical professionals", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_41%20PM.png",
      // "Fibre & Resin/INTESTINE SHAPED PEN STAND 2.JPG"
    ]
  },

  // Categories - Eco Friendly (IDs: 51-54)
  // { id: 51, name: "Bamboo Cutlery Set", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Eco%20Friendly%20Products/CUSTOMIZED%20DENTIST%20THEME%20WOODEN%20CLOCK%201.JPG", price: "₹499", category: "eco-friendly-products", categoryName: "Eco Friendly Products", description: "Sustainable bamboo utensils" },
  { id: 52, name: "Seed Paper Diary", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Eco%20Friendly%20Products/CUSTOMIZED%20HEART%20WOODEN%20FRAME%20WITH%20CLOCK.JPG", price: "₹399", category: "eco-friendly-products", categoryName: "Eco Friendly Products", description: "Plantable seed paper notebook" },
  // { id: 53, name: "Jute Laptop Bag", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Eco%20Friendly%20Products/CUSTOMIZED%20MDF%20NUMBER%20PUZZLE%201.JPG", price: "₹999", category: "eco-friendly-products", categoryName: "Eco Friendly Products", description: "Eco-friendly jute carry bag" },
  { id: 54, name: "Recycled Material Planter", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Eco%20Friendly%20Products/CUSTOMIZED%20PREGNANT%20LADY%20WOODEN%20FRAME%20WITH%20CLOCK.JPG", price: "₹299", category: "eco-friendly-products", categoryName: "Eco Friendly Products", description: "Sustainable desk planter made from recycled materials" },

  // Categories - LED Tabletops (IDs: 55-65)
  {
    id: 55, name: "CARDIO LED TABLE TOP", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_15_18%20PM.png",
     price: "₹1899", category: "led-tabletops", categoryName: "LED Tabletops", description: "Illuminated cardio-themed LED tabletop display for medical branding", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_15_18%20PM.png",
      // "LED INPUTS/CARDIO LED TABLE TOP (2).jpg"
    ]
  },
  {
    id: 56, name: "INFINITY MIRROR", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_00_38%20PM.png", price: "₹1999", category: "led-tabletops", categoryName: "LED Tabletops", description: "Dynamic thunder-shaped LED tabletop with customization options", images: [
      "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/3D%20PRINTED/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_00_38%20PM.png",
      // "LED INPUTS/CUSTOMIZED LED THUNDER TABLE TOP 2.JPG",
      // "LED INPUTS/CUSTOMIZED LED THUNDER TABLE TOP 3.JPG"
    ]
  },
  // {
  //   id: 57, name: "HEALTHY KIDNEY VS INFECTED KIDNEY TABLE TOP", image: "LED INPUTS/HEALTHY KIDNEY VS INFECTED KIDNEY TABLE TOP.jpg", price: "₹2499", category: "led-tabletops", categoryName: "LED Tabletops", description: "Educational LED display comparing healthy and infected kidney anatomy", images: [
  //     "LED INPUTS/HEALTHY KIDNEY VS INFECTED KIDNEY TABLE TOP.jpg"
  //   ]
  // },
  // {
  //   id: 58, name: "IUI & IVF PROCEDURE LED TABLE TOP", image: "LED INPUTS/IUI & IVF PROCEDURE LED TABLE TOP.jpg", price: "₹2999", category: "led-tabletops", categoryName: "LED Tabletops", description: "Illuminated educational display showing IUI and IVF procedures", images: [
  //     "LED INPUTS/IUI & IVF PROCEDURE LED TABLE TOP.jpg"
  //   ]
  // },
  // {
  //   id: 59, name: "LED DOCTOR IN-OUT BOX", image: "LED INPUTS/LED DOCTOR IN-OUT BOX 1.JPG", price: "₹1599", category: "led-tabletops", categoryName: "LED Tabletops", description: "LED illuminated doctor availability status board", images: [
  //     "LED INPUTS/LED DOCTOR IN-OUT BOX 1.JPG",
  //     "LED INPUTS/LED DOCTOR IN-OUT BOX 2.JPG"
  //   ]
  // },
  // {
  //   id: 60, name: "STAGES OF OSTEOPOROSIS LED TABLE TOP", image: "LED INPUTS/STAGES OF OSTEOPOROSIS LED TABLE TOP 1.JPG", price: "₹2299", category: "led-tabletops", categoryName: "LED Tabletops", description: "Educational LED display showing progressive stages of osteoporosis", images: [
  //     "LED INPUTS/STAGES OF OSTEOPOROSIS LED TABLE TOP 1.JPG",
  //     "LED INPUTS/STAGES OF OSTEOPOROSIS LED TABLE TOP 2.JPG"
  //   ]
  // },
  // {
  //   id: 61, name: "415 LED TABLE TOP", image: "LED INPUTS/415.jpg", price: "₹1899", category: "led-tabletops", categoryName: "LED Tabletops", description: "LED illuminated tabletop with 415 design", images: [
  //     "LED INPUTS/415.jpg"
  //   ]
  // },
  // {
  //   id: 62, name: "LED TABLE TOP DISPLAY", image: "LED INPUTS/IMG_0328.JPG", price: "₹1799", category: "led-tabletops", categoryName: "LED Tabletops", description: "Premium LED illuminated tabletop display", images: [
  //     "LED INPUTS/IMG_0328.JPG",
  //     "LED INPUTS/IMG_0330.JPG"
  //   ]
  // },
  // {
  //   id: 63, name: "PREMIUM LED TABLE TOP", image: "LED INPUTS/IMG_6995.JPG", price: "₹1999", category: "led-tabletops", categoryName: "LED Tabletops", description: "High-quality LED illuminated tabletop with branding options", images: [
  //     "LED INPUTS/IMG_6995.JPG",
  //     "LED INPUTS/IMG_7003.JPG"
  //   ]
  // },
  // {
  //   id: 64, name: "DECORATIVE LED TABLE TOP", image: "LED INPUTS/IMG_7390.JPG", price: "₹1699", category: "led-tabletops", categoryName: "LED Tabletops", description: "Decorative LED tabletop for modern desk setup", images: [
  //     "LED INPUTS/IMG_7390.JPG",
  //     "LED INPUTS/IMG_7394.JPG"
  //   ]
  // },
  // {
  //   id: 65, name: "LED BRANDING TABLE TOP", image: "LED INPUTS/IMG_8393.JPG", price: "₹1899", category: "led-tabletops", categoryName: "LED Tabletops", description: "Customizable LED tabletop for brand promotion", images: [
  //     "LED INPUTS/IMG_8393.JPG",
  //     "LED INPUTS/IMG_8397.JPG",
  //     "LED INPUTS/IMG_8406.JPG",
  //     "LED INPUTS/IMG_8414.JPG"
  //   ]
  // },
  // {
  //   id: 66, name: "MODERN LED TABLE TOP", image: "LED INPUTS/IMG_9720.JPG", price: "₹1799", category: "led-tabletops", categoryName: "LED Tabletops", description: "Modern sleek LED illuminated tabletop display", images: [
  //     "LED INPUTS/IMG_9720.JPG",
  //     "LED INPUTS/IMG_9724.JPG"
  //   ]
  // },

  // Categories - Indoor Plants (IDs: 67-76)
  { id: 67, name: "AGLAONEMA PLANT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Indoor%20Plant/AGLAONEMA%20PLANT%201.jpeg", price: "₹899", category: "indoor-plants", categoryName: "Indoor Plants", description: "Low maintenance succulent combo" },
  { id: 68, name: "ARECA PALM PLANT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Indoor%20Plant/ARECA%20PALM%20PLANT%201.jpeg", price: "₹649", category: "indoor-plants", categoryName: "Indoor Plants", description: "2-layer lucky bamboo in ceramic pot" },
  { id: 69, name: "CHAMAEDOREA PALM", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Indoor%20Plant/CHAMAEDOREA%20PALM%201.jpeg", price: "₹799", category: "indoor-plants", categoryName: "Indoor Plants", description: "Snake plant for clinic and office air purification" },
  { id: 70, name: "DESSERT ROSE PLANT", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Indoor%20Plant/DESSERT%20ROSE%20PLANT.jpeg", price: "₹799", category: "indoor-plants", categoryName: "Indoor Plants", description: "Snake plant for clinic and office air purification" },
  { id: 71, name: "DIEFFENBACHIA", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Indoor%20Plant/DIEFFENBACHIA%201.jpeg", price: "₹799", category: "indoor-plants", categoryName: "Indoor Plants", description: "Snake plant for clinic and office air purification" },
  // { id: 72, name: "DESSERT ROSE PLANT", image: "Indoor Plant/DESSERT ROSE PLANT.jpeg", price: "₹799", category: "indoor-plants", categoryName: "Indoor Plants", description: "Snake plant for clinic and office air purification" },
  // { id: 73, name: "DIEFFENBACHIA", image: "Indoor Plant/DIEFFENBACHIA 1.jpeg", price: "₹799", category: "indoor-plants", categoryName: "Indoor Plants", description: "Snake plant for clinic and office air purification" },
  // { id: 74, name: "DUMB CANE PLANT", image: "Indoor Plant/DUMB CANE PLANT.jpeg", price: "₹799", category: "indoor-plants", categoryName: "Indoor Plants", description: "Snake plant for clinic and office air purification" },
  // { id: 75, name: "GOLDEN POTHOS PLANT", image: "Indoor Plant/GOLDEN POTHOS PLANT.jpeg", price: "₹799", category: "indoor-plants", categoryName: "Indoor Plants", description: "Snake plant for clinic and office air purification" },
  // { id: 76, name: "JADE PLANT", image: "Indoor Plant/JADE PLANT 3.jpeg", price: "₹799", category: "indoor-plants", categoryName: "Indoor Plants", description: "Snake plant for clinic and office air purification" },

  // Categories - Calendars (IDs: 70-72)
  { id: 70, name: "Matt Calendar", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Cardio/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_24_05%20PM.png", price: "₹299", category: "calendars", categoryName: "Calendars", description: "Medical-focused desk calendar 2025 with important health awareness dates and pharmaceutical brand positioning." },
  { id: 71, name: "Desk Calendar", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Neurology/64.png", price: "₹399", category: "calendars", categoryName: "Calendars", description: "Monthly wall calendar featuring wellness messages, health tips, and seasonal reminders for clinic waiting areas." },
  // { id: 72, name: "Planner Diary Combo", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400", price: "₹599", category: "calendars", categoryName: "Calendars", description: "Complete year planner with monthly calendar views, appointment tracker, and note sections for medical professionals." },
  // Categories - Photo Frames (IDs: 73-95)
  // {
  //   id: 73, name: "BABIES RESIN ART FRAME", image: "Photo Frames/BABIES RESIN ART FRAME 1.JPG",
  //    price: "₹1299", category: "photo-frames", categoryName: "Photo Frames", description: "Beautiful resin art frame featuring baby designs - perfect for pediatric clinics", images: [
  //     "Photo Frames/BABIES RESIN ART FRAME 1.JPG",
  //     "Photo Frames/BABIES RESIN ART FRAME 2.JPG",
  //     "Photo Frames/BABIES RESIN ART FRAME 3.JPG",
  //     "Photo Frames/BABIES RESIN ART FRAME 4.JPG"
  //   ]
  // },
  // {
  //   id: 74, name: "BRAIN RESIN ART FRAME", image: "Photo Frames/BRAIN RESIN ART FRAME 1.JPG",
  //    price: "₹1499", category: "photo-frames", categoryName: "Photo Frames", description: "Neurology-themed resin art frame with brain anatomy design", images: [
  //     "Photo Frames/BRAIN RESIN ART FRAME 1.JPG",
  //     "Photo Frames/BRAIN RESIN ART FRAME 2.JPG"
  //   ]
  // },
  // {
  //   id: 75, name: "CUSTOMIZED DOCTOR'S PRAYER FRAME", image: "Photo Frames/CUSTOMIZED DOCTOR_S PRAYER FRAME.JPG",
  //    price: "₹999", category: "photo-frames", categoryName: "Photo Frames", description: "Customizable prayer frame for doctors' clinics", images: [
  //     "Photo Frames/CUSTOMIZED DOCTOR_S PRAYER FRAME.JPG"
  //   ]
  // },
  // {
  //   id: 76, name: "DENTAL ANATOMICAL PAINTINGS SERIES", image: "Photo Frames/DENTAL ANATOMICAL PAINTINGS SERIES.jpg",
  //    price: "₹1599", category: "photo-frames", categoryName: "Photo Frames", description: "Educational dental anatomy painting series for clinic decor", images: [
  //     "Photo Frames/DENTAL ANATOMICAL PAINTINGS  SERIES.jpg"
  //   ]
  // },
  // {
  //   id: 77, name: "DIABETIC FOOT CONCEPTUALIZED FRAME", image: "Photo Frames/DIABETIC FOOT CONCEPTUALIZED FRAME.jpg",
  //    price: "₹1399", category: "photo-frames", categoryName: "Photo Frames", description: "Conceptual frame illustrating diabetic foot conditions", images: [
  //     "Photo Frames/DIABETIC FOOT CONCEPTUALIZED FRAME.jpg"
  //   ]
  // },
  // {
  //   id: 78, name: "DIABETIC FOOT RESIN ART FRAME", image: "Photo Frames/DIABETIC FOOT RESIN ART FRAME 1.JPG",
  //    price: "₹1499", category: "photo-frames", categoryName: "Photo Frames", description: "Resin art frame depicting diabetic foot anatomy", images: [
  //     "Photo Frames/DIABETIC FOOT RESIN ART FRAME 1.JPG",
  //     "Photo Frames/DIABETIC FOOT RESIN ART FRAME 2.JPG"
  //   ]
  // },
  // {
  //   id: 79, name: "EAR ANATOMY FRAME", image: "Photo Frames/EAR ANATOMY FRAME.jpg",
  //    price: "₹1299", category: "photo-frames", categoryName: "Photo Frames", description: "Educational ear anatomy frame for ENT specialists", images: [
  //     "Photo Frames/EAR ANATOMY FRAME.jpg"
  //   ]
  // },
  // {
  //   id: 80, name: "EMOTION RESIN ART FRAME", image: "Photo Frames/EMOTICON RESIN ART FRAME 1.JPG",
  //    price: "₹1199", category: "photo-frames", categoryName: "Photo Frames", description: "Artistic resin frame depicting human emotions", images: [
  //     "Photo Frames/EMOTICON RESIN ART FRAME 1.JPG",
  //     "Photo Frames/EMOTICON RESIN ART FRAME 2.JPG"
  //   ]
  // },
  // {
  //   id: 81, name: "EXCLUSIVE BONE ANATOMY CHALK BOARD STYLE FRAME", image: "Photo Frames/EXCLUSIVE BONE ANATOMY CHAL BOARD STYLE FRAME.jpg",
  //    price: "₹1699", category: "photo-frames", categoryName: "Photo Frames", description: "Unique chalkboard-style bone anatomy frame", images: [
  //     "Photo Frames/EXCLUSIVE BONE ANATOMY CHAL BOARD STYLE FRAME.jpg"
  //   ]
  // },
  // {
  //   id: 82, name: "EXCLUSIVE BRAIN FLORAL PAINTING FRAME", image: "Photo Frames/EXCLUSIVE BRAIN FLORAL PAINTING FRAME.jpg",
  //    price: "₹1599", category: "photo-frames", categoryName: "Photo Frames", description: "Beautiful brain anatomy with floral painting design", images: [
  //     "Photo Frames/EXCLUSIVE BRAIN FLORAL PAINTING FRAME.jpg"
  //   ]
  // },
  // { id: 83, name: "EXCLUSIVE LIVER FLORAL PAINTING FRAME", image: "Photo Frames/EXCLUSIVE LIVER FLORAL PAINTING FRAME 1.JPG",
  //  price: "₹1599", category: "photo-frames", categoryName: "Photo Frames", description: "Liver anatomy with artistic floral painting", images: [
  //   "Photo Frames/EXCLUSIVE LIVER FLORAL PAINTING FRAME 1.JPG",
  //   "Photo Frames/EXCLUSIVE LIVER FLORAL PAINTING FRAME 2.JPG"
  // ] },
  // { id: 84, name: "EXCLUSIVE TEETH ANATOMY PAINTING FRAME", image: "Photo Frames/EXCLUSIVE TEETH ANATOMY PAINTING FRAME 1.JPG",
  //  price: "₹1499", category: "photo-frames", categoryName: "Photo Frames", description: "Dental anatomy painting frame for clinics", images: [
  //   "Photo Frames/EXCLUSIVE TEETH ANATOMY PAINTING FRAME 1.JPG",
  //   "Photo Frames/EXCLUSIVE TEETH ANATOMY PAINTING FRAME 2.JPG"
  // ] },
  // { id: 85, name: "EXCLUSIVE UTERUS FLORAL PAINTING FRAME", image: "Photo Frames/EXCLUSIVE UTERUS FLORAL PAINTING FRAME 1.JPG",
  //  price: "₹1599", category: "photo-frames", categoryName: "Photo Frames", description: "Uterus anatomy with elegant floral painting", images: [
  //   "Photo Frames/EXCLUSIVE UTERUS FLORAL PAINTING FRAME 1.JPG",
  //   "Photo Frames/EXCLUSIVE UTERUS FLORAL PAINTING FRAME 2.JPG"
  // ] },
  // { id: 86, name: "FEMALE PELVIS RESIN ART FRAME", image: "Photo Frames/FEMALE PELVIS RESIN ART FRAME 1.JPG",
  //  price: "₹1499", category: "photo-frames", categoryName: "Photo Frames", description: "Female pelvis anatomy resin art frame", images: [
  //   "/Photo Frames/FEMALE PELVIS RESIN ART FRAME 1.JPG",
  //   "/Photo Frames/FEMALE PELVIS RESIN ART FRAME 2.JPG"
  // ] },
  // { id: 87, name: "FERTILIZATION RESIN ART FRAME", image: "/Photo Frames/FERTILIZATION RESIN ART FRAME 1.JPG",
  //  price: "₹1699", category: "photo-frames", categoryName: "Photo Frames", description: "Educational fertilization process resin art frame", images: [
  //   "/Photo Frames/FERTILIZATION RESIN ART FRAME 1.JPG",
  //   "/Photo Frames/FERTILIZATION RESIN ART FRAME 2.JPG"
  // ] },
  // { id: 88, name: "MOTHER-BABY ART FRAME", image: "/Photo Frames/MOTHER-BABY ART FRAME 1.JPG",
  //  price: "₹1399", category: "photo-frames", categoryName: "Photo Frames", description: "Heartwarming mother-baby art frame for maternity clinics", images: [
  //   "/Photo Frames/MOTHER-BABY ART FRAME 1.JPG",
  //   "/Photo Frames/MOTHER-BABY ART FRAME 2.JPG"
  // ] },
  // { id: 89, name: "OVARIES RESIN ART FRAME", image: "/Photo Frames/OVARIES RESIN ART FRAME 1.JPG",
  //  price: "₹1499", category: "photo-frames", categoryName: "Photo Frames", description: "Ovary anatomy resin art frame for gynecology clinics", images: [
  //   "/Photo Frames/OVARIES RESIN ART FRAME 1.JPG",
  //   "/Photo Frames/OVARIES RESIN ART FRAME 2.JPG",
  //   "/Photo Frames/OVARIES RESIN ART FRAME 3.JPG"
  // ] },
  // { id: 90, name: "SPINAL CORD RESIN ART FRAME WITH CLOCK", image: "/Photo Frames/SPINAL CORD RESIN ART FRAME WITH CLOCK 1.JPG",
  //  price: "₹1899", category: "photo-frames", categoryName: "Photo Frames", description: "Spinal cord resin art frame with integrated clock", images: [
  //   "/Photo Frames/SPINAL CORD RESIN ART FRAME WITH CLOCK 1.JPG",
  //   "/Photo Frames/SPINAL CORD RESIN ART FRAME WITH CLOCK 2.JPG"
  // ] },
  // { id: 91, name: "SPINAL CORD RESIN ART FRAME", image: "/Photo Frames/SPINAL CORD RESIN ART FRAME.jpg",
  //  price: "₹1499", category: "photo-frames", categoryName: "Photo Frames", description: "Spinal cord anatomy resin art frame", images: [
  //   "/Photo Frames/SPINAL CORD RESIN ART FRAME.jpg"
  // ] },

  // Occasions - Monthly Gifts (IDs: 100-130)
  // January (IDs: 100-101)
  // { id: 100, name: "New Year Celebration Hamper", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400",
  //    price: "₹1999", category: "january", categoryName: "January", description: "Premium hamper with chocolates, wine, and diary", tags: ["newyear", "hamper", "celebration"] },
  // { id: 101, name: "Executive Planner 2025", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400",
  //    price: "₹899", category: "january", categoryName: "January", description: "Premium leather planner with company branding", tags: ["planner", "executive", "branding"] },

  // February (IDs: 102-103)
  // { id: 102, name: "Valentine's Wellness Package", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400",
  //    price: "₹1499", category: "february", categoryName: "February", description: "Self-care hamper with skincare and aromatherapy", tags: ["valentine", "wellness", "selfcare"] },
  // { id: 103, name: "Heart Health Awareness Kit", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400",
  //    price: "₹999", category: "february", categoryName: "February", description: "Heart health educational materials and tools", tags: ["heart", "health", "awareness"] },

  // // March (IDs: 104-105)
  // { id: 104, name: "Women's Day Appreciation Box", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400",
  //    price: "₹2499", category: "march", categoryName: "March", description: "Luxury hamper celebrating women in healthcare", tags: ["womensday", "appreciation", "healthcare"] },
  // { id: 105, name: "Spring Wellness Kit", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400",
  //    price: "₹1299", category: "march", categoryName: "March", description: "Seasonal wellness products for spring", tags: ["spring", "wellness", "seasonal"] },

  // // April (IDs: 106-107)
  // { id: 106, name: "World Health Day Toolkit", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400",
  //    price: "₹899", category: "april", categoryName: "April", description: "Health awareness materials for World Health Day", tags: ["health", "WHO", "awareness"] },
  // { id: 107, name: "Summer Hydration Package", image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400",
  //    price: "₹799", category: "april", categoryName: "April", description: "Reusable water bottles and electrolyte supplements", tags: ["summer", "hydration", "health"] },

  // May (IDs: 108-109)
  { id: 108, name: "Nurses Appreciation Hamper", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/FIBRE%20%26%20RESIN/ChatGPT%20Image%20May%2028%2C%202026%2C%2003_09_06%20PM.png",
     price: "₹1999", category: "may", categoryName: "May", description: "Thank you gifts for nursing staff", tags: ["nurses", "appreciation", "healthcare"] },
  // { id: 109, name: "Summer Sun Care Kit", image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400",
  //    price: "₹1099", category: "may", categoryName: "May", description: "Sunscreens, hats, and summer essentials", tags: ["summer", "sunprotection", "skincare"] },

  // June (IDs: 110-111)
  // { id: 110, name: "Yoga Day Wellness Box", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400",
  //    price: "₹1499", category: "june", categoryName: "June", description: "Yoga mats and wellness accessories", tags: ["yoga", "wellness", "fitness"] },
  // { id: 111, name: "Pre-Monsoon Care Package", image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400",
  //    price: "₹899", category: "june", categoryName: "June", description: "Immunity boosters and rain essentials", tags: ["monsoon", "immunity", "health"] },

  // // July (IDs: 112-115)
  // { id: 112, name: "Doctor's Day Pen Set", image: "/products/CUSTOMIZED CHITS HOLDER.png",
  //    price: "₹1299", category: "july", categoryName: "July", description: "Premium medical-themed pens and diaries", tags: ["doctorsday", "medical", "appreciation"] },
  // { id: 113, name: "Doctor Appreciation Plaque", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400",
  //    price: "₹899", category: "july", categoryName: "July", description: "Thank you plaque for doctors", tags: ["appreciation", "plaque", "gratitude"] },
  // { id: 114, name: "Desk Plant with Quote", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400",
  //    price: "₹649", category: "july", categoryName: "July", description: "Succulent with 'Thank You Doctor' message", tags: ["plants", "doctorsday", "gratitude"] },
  // { id: 115, name: "Monsoon Care Package", image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400",
  //    price: "₹999", category: "july", categoryName: "July", description: "Umbrellas, raincoats, and herbal teas", tags: ["monsoon", "rain", "care"] },

  // // August (IDs: 116-117)
  // { id: 116, name: "Independence Day Corporate Gift", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400",
  //    price: "₹1899", category: "august", categoryName: "August", description: "Patriotic themed corporate hampers", tags: ["independence", "corporate", "india"] },
  // { id: 117, name: "Raksha Bandhan Wellness Hamper", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400",
  //    price: "₹1299", category: "august", categoryName: "August", description: "Health and wellness gifts for siblings", tags: ["rakshabandhan", "wellness", "family"] },

  // // September (IDs: 118-119)
  // { id: 118, name: "Ganesh Chaturthi Celebration Box", image: "https://images.unsplash.com/photo-1573662761572-2c2be631a545?w=400",
  //    price: "₹2499", category: "september", categoryName: "September", description: "Traditional sweets and decor items", tags: ["ganeshchaturthi", "festival", "celebration"] },
  // { id: 119, name: "Teachers Day Gratitude Gift", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400",
  //    price: "₹799", category: "september", categoryName: "September", description: "Thank you gifts for medical educators", tags: ["teachersday", "gratitude", "education"] },

  // // October (IDs: 120-122)
  // { id: 120, name: "Premium Diwali Hamper", image: "https://images.unsplash.com/photo-1573662761572-2c2be631a545?w=400",
  //    price: "₹4999", category: "october", categoryName: "October", description: "Luxury sweets, dry fruits, and decor items", tags: ["diwali", "luxury", "festival"] },
  // { id: 121, name: "Decorative Diya Set", image: "https://images.unsplash.com/photo-1573662761572-2c2be631a545?w=400",
  //    price: "₹599", category: "october", categoryName: "October", description: "Handcrafted brass diyas with branded packaging", tags: ["diya", "diwali", "traditional"] },
  // { id: 122, name: "Dry Fruit Premium Box", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400",
  //    price: "₹2999", category: "october", categoryName: "October", description: "Imported nuts and dried fruits collection", tags: ["dryfruits", "premium", "diwali"] },

  // // November (IDs: 123-124)
  // { id: 123, name: "Diabetes Care Kit", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400",
  //    price: "₹2499", category: "november", categoryName: "November", description: "Glucometer and sugar-free snacks hamper", tags: ["diabetes", "health", "care"] },
  // { id: 124, name: "Children's Day Fun Kit", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400",
  //    price: "₹899", category: "november", categoryName: "November", description: "Educational toys and health-themed games", tags: ["childrensday", "education", "health"] },

  // // December (IDs: 125-127)
  // { id: 125, name: "Christmas Celebration Box", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400",
  //    price: "₹2999", category: "december", categoryName: "December", description: "Cakes, wine, and Christmas decor", tags: ["christmas", "celebration", "festival"] },
  // { id: 126, name: "Year End Planner 2025", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400",
  //    price: "₹999", category: "december", categoryName: "December", description: "Premium planner for the upcoming year", tags: ["planner", "2025", "newyear"] },
  // { id: 127, name: "Winter Care Package", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400",
  //    price: "₹1799", category: "december", categoryName: "December", description: "Warmers, teas, and skincare for winter", tags: ["winter", "care", "warm"] },


  // ==========================================
  // PERSONALIZED GIFTS PRODUCTS (2+ per sub-category)
  // ==========================================

  // Doctor Name Personalization / Photo Frames (IDs: 500-509)
  // {
  //   id: 500, name: "Personalized Doctor Name Photo Frame", image: "/Photo Frames/CUSTOMIZED DOCTOR_S PRAYER FRAME.JPG",
  //    price: "₹899", category: "doctor-name-personalization", categoryName: "Photo Frames", description: "Elegant photo frame with doctor's name engraved - perfect for clinic desk", images: [
  //     "/Photo Frames/CUSTOMIZED DOCTOR_S PRAYER FRAME.JPG"
  //   ], tags: ["personalized", "photo-frame", "doctor-name"]
  // },
  // {
  //   id: 501, name: "Engraved Crystal Photo Frame", image: "/Photo Frames/BRAIN RESIN ART FRAME 1.JPG",
  //    price: "₹1299", category: "doctor-name-personalization", categoryName: "Photo Frames", description: "Premium crystal frame with laser-engraved doctor name and specialisation", images: [
  //     "/Photo Frames/BRAIN RESIN ART FRAME 1.JPG",
  //     "/Photo Frames/BRAIN RESIN ART FRAME 2.JPG"
  //   ], tags: ["personalized", "crystal", "engraved"]
  // },
  // { id: 502, name: "EXCLUSIVE LIVER FLORAL PAINTING FRAME", image: "/Photo Frames/EXCLUSIVE LIVER FLORAL PAINTING FRAME 1.JPG",
  //  price: "₹1599", category: "doctor-name-personalization", categoryName: "Photo Frames", description: "Liver anatomy with artistic floral painting", images: [
  //     "/Photo Frames/EXCLUSIVE LIVER FLORAL PAINTING FRAME 1.JPG",
  //     "/Photo Frames/EXCLUSIVE LIVER FLORAL PAINTING FRAME 2.JPG"
  // ], tags: ["personalized", "crystal", "engraved"] },
  //   { id: 503, name: "EXCLUSIVE TEETH ANATOMY PAINTING FRAME", image: "/Photo Frames/EXCLUSIVE TEETH ANATOMY PAINTING FRAME 1.JPG",
  //  price: "₹1499", category: "doctor-name-personalization", categoryName: "Photo Frames", description: "Dental anatomy painting frame for clinics", images: [
  //     "/Photo Frames/EXCLUSIVE TEETH ANATOMY PAINTING FRAME 1.JPG",
  //     "/Photo Frames/EXCLUSIVE TEETH ANATOMY PAINTING FRAME 2.JPG"
  // ], tags: ["personalized", "crystal", "engraved"] },
  //   { id: 504, name: "EXCLUSIVE UTERUS FLORAL PAINTING FRAME", image: "/Photo Frames/EXCLUSIVE UTERUS FLORAL PAINTING FRAME 1.JPG",
  //  price: "₹1599", category: "doctor-name-personalization", categoryName: "Photo Frames", description: "Uterus anatomy with elegant floral painting", images: [
  //     "/Photo Frames/EXCLUSIVE UTERUS FLORAL PAINTING FRAME 1.JPG",
  //     "/Photo Frames/EXCLUSIVE UTERUS FLORAL PAINTING FRAME 2.JPG"
  // ], tags: ["personalized", "crystal", "engraved"] },
  //   { id: 505, name: "FEMALE PELVIS RESIN ART FRAME", image: "/Photo Frames/FEMALE PELVIS RESIN ART FRAME 1.JPG",
  //  price: "₹1499", category: "doctor-name-personalization", categoryName: "Photo Frames", description: "Female pelvis anatomy resin art frame", images: [
  //     "/Photo Frames/FEMALE PELVIS RESIN ART FRAME 1.JPG",
  //     "/Photo Frames/FEMALE PELVIS RESIN ART FRAME 2.JPG"
  // ], tags: ["personalized", "crystal", "engraved"] },
  //   { id: 506, name: "FERTILIZATION RESIN ART FRAME", image: "/Photo Frames/FERTILIZATION RESIN ART FRAME 1.JPG",
  //  price: "₹1699", category: "doctor-name-personalization", categoryName: "Photo Frames", description: "Educational fertilization process resin art frame", images: [
  //     "/Photo Frames/FERTILIZATION RESIN ART FRAME 1.JPG",
  //     "/Photo Frames/FERTILIZATION RESIN ART FRAME 2.JPG"
  // ], tags: ["personalized", "crystal", "engraved"] },
  //   { id: 507, name: "MOTHER-BABY ART FRAME", image: "/Photo Frames/MOTHER-BABY ART FRAME 1.JPG",
  //  price: "₹1399", category: "doctor-name-personalization", categoryName: "Photo Frames", description: "Heartwarming mother-baby art frame for maternity clinics", images: [
  //     "/Photo Frames/MOTHER-BABY ART FRAME 1.JPG",
  //     "/Photo Frames/MOTHER-BABY ART FRAME 2.JPG"
  // ], tags: ["personalized", "crystal", "engraved"] },
  //   { id: 508, name: "OVARIES RESIN ART FRAME", image: "/Photo Frames/OVARIES RESIN ART FRAME 1.JPG",
  //  price: "₹1499", category: "doctor-name-personalization", categoryName: "Photo Frames", description: "Ovary anatomy resin art frame for gynecology clinics", images: [
  //     "/Photo Frames/OVARIES RESIN ART FRAME 1.JPG",
  //     "/Photo Frames/OVARIES RESIN ART FRAME 2.JPG",
  //     "/Photo Frames/OVARIES RESIN ART FRAME 3.JPG"
  // ], tags: ["personalized", "crystal", "engraved"] },
  //   { id: 509, name: "SPINAL CORD RESIN ART FRAME WITH CLOCK", image: "/Photo Frames/SPINAL CORD RESIN ART FRAME WITH CLOCK 1.JPG",
  //  price: "₹1899", category: "doctor-name-personalization", categoryName: "Photo Frames", description: "Spinal cord resin art frame with integrated clock", images: [
  //     "/Photo Frames/SPINAL CORD RESIN ART FRAME WITH CLOCK 1.JPG",
  //     "/Photo Frames/SPINAL CORD RESIN ART FRAME WITH CLOCK 2.JPG"
  // ], tags: ["personalized", "crystal", "engraved"] },

  // Clinic Branding / Momentos (IDs: 510-519)
//   { id: 510, name: "Custom Clinic Logo Pen Stand", image: "/Desk Utility/CUSTOMIZED PEN HOLDER 1.JPG",
//      price: "₹399", category: "clinic-branding", categoryName: "Momentos", description: "Acrylic pen stand with clinic logo and doctor name printed", tags: ["clinic-branding", "logo", "pen-stand"] },
//   { id: 511, name: "Branded Clinic Wall Clock", image: "/TableTop/CUSTOMIZED DESK CLOCK.JPG",
//      price: "₹999", category: "clinic-branding", categoryName: "Momentos", description: "Wall clock customized with clinic logo, name, and contact details", tags: ["clinic-branding", "clock", "logo"] },
//   { id: 512, name: "Customized Clinic Name Plate", image: "/3dprinted/CUSTOMIZED BRAND NAME SHEET HOLDER 1.JPG",
//      price: "₹799", category: "clinic-branding", categoryName: "Momentos", description: "Elegant acrylic name plate for doctor's clinic with branding", tags: ["clinic-branding", "nameplate", "acrylic"] },
//   { id: 513, name: "Clinic Logo Embossed Diary", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400",
//      price: "₹499", category: "clinic-branding", categoryName: "Momentos", description: "Premium diary with embossed clinic logo and doctor details", tags: ["clinic-branding", "diary", "embossed"] },

//   // Custom Packaging / Trophies (IDs: 520-529)
//   { id: 520, name: "Custom Branded Gift Box", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400",
//      price: "₹1499", category: "custom-packaging", categoryName: "Trophies", description: "Premium gift box with custom branding, ribbon, and inserts", tags: ["packaging", "gift-box", "branded"] },
//   { id: 521, name: "Eco-Friendly Branded Hamper", image: "https://images.unsplash.com/photo-1573662761572-2c2be631a545?w=400",
//      price: "₹1999", category: "custom-packaging", categoryName: "Trophies", description: "Jute hamper bag with screen-printed logo and custom inserts", tags: ["packaging", "eco-friendly", "hamper"] },
//   { id: 522, name: "Luxury Velvet Gift Box Set", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400",
//      price: "₹2499", category: "custom-packaging", categoryName: "Trophies", description: "Premium velvet boxes with gold foil branding - perfect for high-end gifts", tags: ["packaging", "luxury", "velvet"] },

//   // Brand-Specific Messaging (IDs: 530-539)
//   { id: 530, name: "Custom Message Desk Stand", image: "/TableTop/CUSTOMIZED MAGNETIC DETAILER 1.JPG",
//      price: "₹699", category: "brand-specific-messaging", categoryName: "Brand-Specific Messaging", description: "Acrylic desk stand with personalized brand message and doctor appreciation note", tags: ["messaging", "brand", "desk-stand"] },
//   { id: 531, name: "Personalized Thank You Card Set", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400",
//      price: "₹299", category: "brand-specific-messaging", categoryName: "Brand-Specific Messaging", description: "Set of 10 premium cards with custom brand message and envelope", tags: ["messaging", "thank-you", "cards"] },
//   { id: 532, name: "Brand Message Engraved Paperweight", image: "/Paperweights/CLEAR THEME PAPERWEIGHT.JPG",
//      price: "₹449", category: "brand-specific-messaging", categoryName: "Brand-Specific Messaging", description: "Crystal paperweight with laser-engraved brand message and logo", tags: ["messaging", "paperweight", "engraved"] },

//   // Engraved Pens / Personalized Hampers (IDs: 540-549)
//   { id: 540, name: "Premium Engraved Metal Pen", image: "/products/CUSTOMIZED CHITS HOLDER.png",
//      price: "₹599", category: "engraved-pens", categoryName: "Persanalized Hampers", description: "Executive pen with laser engraved doctor name - chrome finish", tags: ["pen", "engraved", "executive"] },
//   { id: 541, name: "Doctor's Day Pen & Diary Set", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400",
//      price: "₹1299", category: "engraved-pens", categoryName: "Persanalized Hampers", description: "Premium leather diary with engraved pen set in gift box", tags: ["pen", "diary", "gift-set"] },
//   { id: 542, name: "Wooden Pen with Name Engraving", image: "/products/CUSTOMIZED CHITS HOLDER.png",
//      price: "₹799", category: "engraved-pens", categoryName: "Persanalized Hampers", description: "Handcrafted rosewood pen with personalized name engraving", tags: ["pen", "wooden", "engraved"] },
//   { id: 543, name: "Personalized Doctor Hamper", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400",
//      price: "₹2999", category: "engraved-pens", categoryName: "Persanalized Hampers", description: "Complete gift hamper with pen, diary, mug, and thank you note", tags: ["hamper", "personalized", "doctor"] },

//   // Custom Mugs / Star Map (IDs: 550-559)
//   { id: 550, name: "Magic Heat Reveal Coffee Mug", image: "https://images.unsplash.com/photo-1514228742587-6f155f924bb5?w=400",
//      price: "₹499", category: "custom-mugs", categoryName: "Star Map", description: "Color changing mug - photo appears when hot liquid is added", tags: ["mug", "magic-mug", "photo"] },
//   { id: 551, name: "Engraved Ceramic Coffee Mug", image: "https://images.unsplash.com/photo-1514228742587-6f155f924bb5?w=400",
//      price: "₹399", category: "custom-mugs", categoryName: "Star Map", description: "Premium ceramic mug with laser engraved doctor name and message", tags: ["mug", "ceramic", "engraved"] },
//   { id: 552, name: "Personalized Star Map Print", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400",
//      price: "₹1499", category: "custom-mugs", categoryName: "Star Map", description: "Custom star map of significant date with doctor name and quote", tags: ["star-map", "personalized", "art-print"] },
//   { id: 553, name: "Birthday Star Map Frame", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400",
//      price: "₹1899", category: "custom-mugs", categoryName: "Star Map", description: "Framed star map showing constellation on doctor's birth date", tags: ["star-map", "birthday", "frame"] },

//   // Photo Gifts / Name Plate (IDs: 560-569)
//   { id: 560, name: "Crystal Photo Engraving Block", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400",
//      price: "₹1299", category: "photo-gifts", categoryName: "Name Plate", description: "3D laser engraved crystal with doctor's photo and name", tags: ["photo", "crystal", "3d-engraving"] },
//   { id: 561, name: "Personalized Photo Collage Frame", image: "/Photo Frames/MOTHER-BABY ART FRAME 1.JPG",
//      price: "₹999", category: "photo-gifts", categoryName: "Name Plate", description: "Multi-photo frame with 6 slots for memorable clinic moments", tags: ["photo", "collage", "frame"] },
//   { id: 562, name: "Custom Acrylic Name Plate", image: "/3dprinted/CUSTOMIZED BRAND NAME SHEET HOLDER 1.JPG",
//      price: "₹599", category: "photo-gifts", categoryName: "Name Plate", description: "Modern acrylic name plate for doctor's cabin with LED option", tags: ["nameplate", "acrylic", "cabin"] },
//   { id: 563, name: "Brass Name Plate for Clinic", image: "/TableTop/CUSTOMIZED 15 YEARS MOMENTO.JPG",
//      price: "₹899", category: "photo-gifts", categoryName: "Name Plate", description: "Traditional brass name plate with doctor's name and specialisation", tags: ["nameplate", "brass", "traditional"] },

//   // Custom Stationery / 3D Printed Plates (IDs: 570-579)
//   { id: 570, name: "Personalized Doctor's Notebook Set", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Personlized/3D%20Plates/3D%201.png",
//      price: "₹599", category: "custom-stationery", categoryName: "3D Printed Plates", description: "Set of 2 notebooks with embossed doctor name and Rx symbol", tags: ["stationery", "notebook", "personalized"] },
//   { id: 571, name: "Custom Prescription Pad Holder", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Personlized/3D%20Plates/3D%202.png",
//      price: "₹449", category: "custom-stationery", categoryName: "3D Printed Plates", description: "Leather holder for prescription pads with custom branding", tags: ["stationery", "prescription", "leather"] },
//   { id: 572, name: "3D Printed Doctor Name Plate", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Personlized/3D%20Plates/3D%203.png",
//      price: "₹799", category: "custom-stationery", categoryName: "3D Printed Plates", description: "3D printed name plate with doctor name and speciality design", tags: ["3d-printed", "nameplate", "custom"] },
//   { id: 573, name: "Custom 3D Printed Award Plaque", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Personlized/3D%20Plates/3D%204.png",
//      price: "₹1499", category: "custom-stationery", categoryName: "3D Printed Plates", description: "3D printed recognition plaque for doctor achievements", tags: ["3d-printed", "award", "plaque"] },
//   { id: 572, name: "3D Printed Doctor Name Plate", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Personlized/3D%20Plates/3D%203.png",
//      price: "₹799", category: "custom-stationery", categoryName: "3D Printed Plates", description: "3D printed name plate with doctor name and speciality design", tags: ["3d-printed", "nameplate", "custom"] },
//   { id: 573, name: "Custom 3D Printed Award Plaque", image: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Personlized/3D%20Plates/3D%204.png ",
//      price: "₹1499", category: "custom-stationery", categoryName: "3D Printed Plates", description: "3D printed recognition plaque for doctor achievements", tags: ["3d-printed", "award", "plaque"] },

//   // Embossed Leather / Personalized Desk Utility (IDs: 580-589)
//   { id: 580, name: "Embossed Leather Card Holder", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
//      price: "₹799", category: "embossed-leather", categoryName: "Personalized Desk Utility", description: "Genuine leather card holder with gold foil embossed initials", tags: ["leather", "card-holder", "embossed"] },
//   { id: 581, name: "Personalized Leather Wallet", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
//      price: "₹1299", category: "embossed-leather", categoryName: "Personalized Desk Utility", description: "Premium leather wallet with doctor name embossing", tags: ["leather", "wallet", "embossed"] },
//   { id: 582, name: "Customized Desk Organizer Set", image: "/Desk Utility/CUSTOMIZED 3 IN 1 DESK ORGANIZER 1.JPG",
//      price: "₹999", category: "embossed-leather", categoryName: "Personalized Desk Utility", description: "Complete desk organizer with pen stand, mobile holder, and name plate", tags: ["desk-utility", "organizer", "custom"] },
//   { id: 583, name: "Personalized Mouse Pad", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
//      price: "₹299", category: "embossed-leather", categoryName: "Personalized Desk Utility", description: "Custom printed mouse pad with doctor name and design", tags: ["desk-utility", "mousepad", "custom"] },

//   // Engraved Keychains / Personalized Gifts (IDs: 590-599)
//   { id: 590, name: "Engraved Metal Keychain", image: "https://images.unsplash.com/photo-1581338834647-b0a407628db1?w=400",
//      price: "₹299", category: "engraved-keychains", categoryName: "Personalized Gifts", description: "Stainless steel keychain with laser engraved doctor name", tags: ["keychain", "metal", "engraved"] },
//   { id: 591, name: "Personalized Stethoscope Keychain", image: "https://images.unsplash.com/photo-1581338834647-b0a407628db1?w=400",
//      price: "₹399", category: "engraved-keychains", categoryName: "Personalized Gifts", description: "Mini stethoscope shaped keychain with custom name engraving", tags: ["keychain", "stethoscope", "medical"] },
//   { id: 592, name: "Customized Rotary Keychain", image: "https://images.unsplash.com/photo-1581338834647-b0a407628db1?w=400",
//      price: "₹449", category: "engraved-keychains", categoryName: "Personalized Gifts", description: "Rotary keychain with hidden compartment and name engraving", tags: ["keychain", "rotary", "custom"] },
//   { id: 593, name: "Personalized Gift Combo Set", image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400",
//      price: "₹1999", category: "engraved-keychains", categoryName: "Personalized Gifts", description: "Complete gift set with keychain, pen, mug, and thank you note", tags: ["gift-set", "combo", "personalized"] },
//   { id: 594, name: "Customized Wooden Keychain", image: "https://images.unsplash.com/photo-1581338834647-b0a407628db1?w=400",
//      price: "₹249", category: "engraved-keychains", categoryName: "Personalized Gifts", description: "Eco-friendly wooden keychain with laser engraved message", tags: ["keychain", "wooden", "eco-friendly"] },
//   // Digital Gifts (IDs: 300-309)
//   { id: 300, name: "Power Bank 20000mAh", image: "https://images.unsplash.com/photo-1619985632461-f33748ef7661?w=400",
//      price: "₹1499", category: "power-banks", categoryName: "Power Banks", description: "High capacity portable charger" },
//   { id: 301, name: "JBL Bluetooth Speaker", image: "https://images.unsplash.com/photo-1608043152269-423db5724e21?w=400",
//      price: "₹2999", category: "bluetooth-speakers", categoryName: "Bluetooth Speakers", description: "Wireless portable speaker" },
//   { id: 302, name: "USB 3.0 64GB Drive", image: "https://images.unsplash.com/photo-1586449480537-3ac15f1d6162?w=400",
//      price: "₹699", category: "usb-drives", categoryName: "USB Drives", description: "Branded metal pen drive" },
//   { id: 303, name: "Wireless Charging Pad", image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=400",
//      price: "₹1299", category: "wireless-chargers", categoryName: "Wireless Chargers", description: "Fast charging Qi pad" },
//   { id: 304, name: "7-inch Digital Frame", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400",
//      price: "₹3999", category: "digital-photo-frames", categoryName: "Digital Photo Frames", description: "Slideshow photo display" },
//   { id: 305, name: "Smart Home Assistant", image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400",
//      price: "₹3499", category: "smart-gadgets", categoryName: "Smart Gadgets", description: "Voice-controlled smart assistant" },
//   { id: 306, name: "Phone Stand with Charger", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
//      price: "₹899", category: "phone-accessories", categoryName: "Phone Accessories", description: "Adjustable stand with wireless charging" },
//   { id: 307, name: "Fitness Tracker Band", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
//      price: "₹1999", category: "fitness-bands", categoryName: "Fitness Bands", description: "Health and activity tracking wearable" },
//   { id: 308, name: "Universal Travel Adapter", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
//      price: "₹1299", category: "travel-adapters", categoryName: "Travel Adapters", description: "Multi-country charging adapter" },
//   { id: 309, name: "Tech Gift Combo", image: "https://images.unsplash.com/photo-1619985632461-f33748ef7661?w=400",
//      price: "₹2499", category: "tech-combos", categoryName: "Tech Combos", description: "Power bank, USB drive, and cable set" },
// ];

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
