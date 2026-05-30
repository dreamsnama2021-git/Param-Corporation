// Utility functions for image handling

export const DUMMY_IMAGES = [
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Therepy/Hepatology/Paper%20Weight.png",
  "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Categories/Paperweights/ChatGPT%20Image%20May%2028%2C%202026%2C%2002_02_32%20PM.png",
  // ... (rest of your DUMMY_IMAGES array)
] as const;

export const getDummyImage = (key: string, index: number): string => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = ((hash << 5) - hash) + key.charCodeAt(i);
    hash |= 0;
  }
  const idx = (Math.abs(hash) + index) % DUMMY_IMAGES.length;
  return DUMMY_IMAGES[idx];
};

export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[&]/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const getImageQuality = (size: 'thumbnail' | 'small' | 'medium' | 'large'): number => {
  const qualityMap = {
    thumbnail: 50,
    small: 65,
    medium: 75,
    large: 85,
  };
  return qualityMap[size];
};