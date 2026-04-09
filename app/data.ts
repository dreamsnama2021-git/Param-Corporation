
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

// 2. By Category
export const categories: CategoryItem[] = [
  { name: "Paperweights", slug: "paperweights", description: "Desk paperweights (Rs. 25 to 30 range)" },
  { name: "Tabletops", slug: "tabletops", description: "Tabletop decorations and desk items" },
  // { name: "Appreciation Gifts", slug: "appreciation-gifts", description: "Thank you and recognition gifts" },
  // { name: "Celebration Gifts", slug: "celebration-gifts", description: "Gifts for celebrations and milestones" },
  { name: "Desk Utility", slug: "desk-utility", description: "Desk organization and utility products" },
  { name: "3D Printed", slug: "3d-printed", description: "Custom 3D printed gift items and inputs" },
  { name: "Fibre and Resin Products", slug: "fibre-resin-products", description: "Fibre and resin crafted decorative items" },
  // { name: "Drinkware", slug: "drinkware", description: "Bottles, mugs, and sippers" },
  { name: "Eco Friendly Products", slug: "eco-friendly-products", description: "Sustainable and green gift options" },
  { name: "LED Tabletops", slug: "led-tabletops", description: "LED illuminated tabletop decorations" },
  { name: "Indoor Plants", slug: "indoor-plants", description: "Indoor plants and greenery for gifting" },
  { name: "Calendars", slug: "calendars", description: "Desk and wall calendars for corporate gifting" },
  { name: "Photo Frames", slug: "photo-frames", description: "Photo frames and memory displays" },
  { name: "Employee Gifts", slug: "employee-gifts", description: "Appreciation gifts for employees" },
  { name: "Festive Gifts", slug: "festive-gifts", description: "Festival and holiday gifting" },
  { name: "Gadgets and Electronic Gifts", slug: "gadgets-and-electronic-gifts", description: "Tech gadgets and electronics" },
  { name: "Gift Sets", slug: "gift-sets", description: "Curated gift combinations" },
  { name: "Health and Hygiene", slug: "health-and-hygiene", description: "Wellness and personal care items" },
  { name: "Household Gifts", slug: "household-gifts", description: "Home and kitchen items" },
  { name: "MR Gifts", slug: "mr-gifts", description: "Medical representative gifts" },
  { name: "Office Accessories", slug: "office-accessories", description: "Desk and office essentials" },
  { name: "Premium Gifts", slug: "premium-gifts", description: "Luxury and high-end gifts" },
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

// 4. By Occasion
export const occasions: CategoryItem[] = [
  { name: "Diwali", slug: "diwali", description: "Festival of lights gifts" },
  { name: "Holi", slug: "holi", description: "Festival of colors gifts" },
  { name: "Independence and Republic day", slug: "independence-republic-day", description: "Patriotic corporate gifts" },
  { name: "New Year", slug: "new-year", description: "New year corporate gifting" },
  { name: "World Health Day", slug: "world-health-day", description: "Health awareness gifts" },
  { name: "Asthma Day", slug: "asthma-day", description: "Respiratory care gifts" },
  { name: "Mother's Day", slug: "mothers-day", description: "Gifts for mothers" },
  { name: "Doctor's Day", slug: "doctors-day", description: "Medical professional gifts" },
  { name: "World Environment Day", slug: "world-environment-day", description: "Eco-friendly gifting" },
  { name: "Nutrition Week", slug: "nutrition-week", description: "Health and nutrition gifts" },
  { name: "World Osteoporosis Day", slug: "world-osteoporosis-day", description: "Bone health awareness" },
  { name: "Children's Day", slug: "childrens-day", description: "Gifts for children" },
  { name: "World Diabetes Day", slug: "world-diabetes-day", description: "Diabetes awareness gifts" },
  { name: "World Cancer Day", slug: "world-cancer-day", description: "Cancer awareness gifts" },
  { name: "World Heart Day", slug: "world-heart-day", description: "Cardiac health gifts" },
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

// Helper function to get all categories combined
export const getAllCategories = () => {
  return {
    industries,
    categories,
    priceRanges,
    occasions,
    therapies,
  };
};

// Total counts
export const categoryCounts = {
  industries: industries.length,
  categories: categories.length,
  priceRanges: priceRanges.length,
  occasions: occasions.length,
  therapies: therapies.length,
};
