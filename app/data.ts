// data/giftCategories.ts

export interface CategoryItem {
  name: string;
  slug: string;
  description?: string;
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
  { name: "Dermatology", slug: "dermatology", description: "Skin care gifts" },
  { name: "Nephrology", slug: "nephrology", description: "Kidney health gifts" },
  { name: "Nutrition", slug: "nutrition", description: "Diet and wellness gifts" },
  { name: "Cardiology", slug: "cardiology", description: "Heart health gifts" },
  { name: "Pulmonology", slug: "pulmonology", description: "Respiratory gifts" },
  { name: "Hepatology", slug: "hepatology", description: "Liver health gifts" },
  { name: "Ophthalmology", slug: "ophthalmology", description: "Eye care gifts" },
  { name: "Gastroenterology", slug: "gastroenterology", description: "Digestive health gifts" },
  { name: "Urology", slug: "urology", description: "Urological gifts" },
];

// 6. Personalized Gifts (Customized items)
export const personalizedGifts: CategoryItem[] = [
  { name: "Engraved Pens", slug: "engraved-pens", description: "Personalized writing instruments" },
  { name: "Custom Mugs", slug: "custom-mugs", description: "Printed and personalized coffee mugs" },
  { name: "Photo Gifts", slug: "photo-gifts", description: "Personalized photo items and collages" },
  // { name: "Custom Stationery", slug: "custom-stationery", description: "Branded and personalized stationery sets" },
  // { name: "Embossed Leather", slug: "embossed-leather", description: "Personalized leather goods and accessories" },
  // { name: "Engraved Keychains", slug: "engraved-keychains", description: "Custom metal and wooden keychains" },
  // { name: "Custom Apparel", slug: "custom-apparel", description: "Personalized T-shirts, caps and clothing" },
  // { name: "Personalized Diaries", slug: "personalized-diaries", description: "Custom notebooks and planners" },
  // { name: "Custom Drinkware", slug: "custom-drinkware", description: "Personalized bottles and sippers" },
  // { name: "Engraved Awards", slug: "engraved-awards", description: "Custom trophies and recognition awards" },
];

// 7. Digital Gifts (Tech and electronic items)
export const digitalGifts: CategoryItem[] = [
  { name: "Power Banks", slug: "power-banks", description: "Portable charging solutions" },
  { name: "Bluetooth Speakers", slug: "bluetooth-speakers", description: "Wireless audio devices" },
  // { name: "USB Drives", slug: "usb-drives", description: "Branded storage devices and pen drives" },
  // { name: "Wireless Chargers", slug: "wireless-chargers", description: "Cable-free charging pads and stands" },
  // { name: "Digital Photo Frames", slug: "digital-photo-frames", description: "Electronic photo displays" },
  // { name: "Smart Gadgets", slug: "smart-gadgets", description: "Smart home and office devices" },
  // { name: "Phone Accessories", slug: "phone-accessories", description: "Cases, stands and mobile accessories" },
  // { name: "Fitness Bands", slug: "fitness-bands", description: "Health tracking wearables" },
  // { name: "Travel Adapters", slug: "travel-adapters", description: "Multi-port charging adapters" },
  // { name: "Tech Combos", slug: "tech-combos", description: "Digital gift sets and technology combos" },
];

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
};
