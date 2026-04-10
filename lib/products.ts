export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isBestSeller: boolean;
  discount: number;
  freeShipping: boolean;
  inStock: boolean;
  stockCount: number;
  materials: string[];
  dimensions?: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "hand-carved-cedar-bowl",
    name: "Hand-Carved Cedar Bowl",
    price: 89.99,
    originalPrice: 119.99,
    description: "A stunning hand-carved cedar bowl, made from locally sourced Wyoming cedar.",
    longDescription: "Each bowl is unique — hand-carved from locally sourced Wyoming cedar by our master craftsman. The natural grain and warm tones of cedar make every piece one-of-a-kind. Perfect as a fruit bowl, décor piece, or a heartfelt gift for someone special.",
    images: [
      "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Wood Art",
    rating: 4.9,
    reviewCount: 34,
    isNew: false,
    isBestSeller: true,
    discount: 25,
    freeShipping: true,
    inStock: true,
    stockCount: 7,
    materials: ["Wyoming Cedar"],
    dimensions: "10\" diameter × 4\" deep",
    tags: ["wood", "bowl", "cedar", "kitchen", "decor"],
  },
  {
    id: "2",
    slug: "wyoming-wildlife-quilt",
    name: "Wyoming Wildlife Quilt",
    price: 249.00,
    description: "Hand-stitched quilt featuring Wyoming wildlife — elk, bison, and eagles.",
    longDescription: "Lovingly hand-stitched by our team, this heirloom-quality quilt celebrates the majestic wildlife of Wyoming. Featuring elk, bison, and soaring eagles against a warm patchwork background. Made from 100% cotton, it's as cozy as it is beautiful — perfect for the bedroom or as a wall hanging.",
    images: [
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4098367/pexels-photo-4098367.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Quilts",
    rating: 5.0,
    reviewCount: 18,
    isNew: false,
    isBestSeller: true,
    discount: 0,
    freeShipping: true,
    inStock: true,
    stockCount: 3,
    materials: ["100% Cotton", "Polyester fill"],
    dimensions: "60\" × 80\" (Queen throw)",
    tags: ["quilt", "wildlife", "wyoming", "bedding", "gift"],
  },
  {
    id: "3",
    slug: "leather-western-wallet",
    name: "Leather Western Wallet",
    price: 59.99,
    description: "Hand-tooled genuine leather bifold wallet with Wyoming bucking horse motif.",
    longDescription: "Crafted from full-grain leather and hand-tooled with the iconic Wyoming bucking horse, this bifold wallet is built to last a lifetime. Features 6 card slots, a cash divider, and an ID window. Each wallet is hand-finished with natural beeswax for lasting protection.",
    images: [
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Leather",
    rating: 4.8,
    reviewCount: 52,
    isNew: false,
    isBestSeller: false,
    discount: 0,
    freeShipping: false,
    inStock: true,
    stockCount: 15,
    materials: ["Full-grain leather", "Beeswax finish"],
    dimensions: "4.5\" × 3.5\" (folded)",
    tags: ["leather", "wallet", "western", "gift", "accessory"],
  },
  {
    id: "4",
    slug: "hand-thrown-pottery-mug",
    name: "Hand-Thrown Pottery Mug",
    price: 38.00,
    originalPrice: 45.00,
    description: "Rustic hand-thrown ceramic mug glazed in warm Wyoming earth tones.",
    longDescription: "Each mug is hand-thrown on the wheel and glazed with our signature earthy tones inspired by Wyoming's landscapes — sage green, sandstone, and sky blue. Microwave and dishwasher safe. No two are exactly alike, making yours truly one of a kind.",
    images: [
      "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Pottery",
    rating: 4.7,
    reviewCount: 89,
    isNew: true,
    isBestSeller: false,
    discount: 15,
    freeShipping: false,
    inStock: true,
    stockCount: 22,
    materials: ["Stoneware clay", "Food-safe glaze"],
    dimensions: "14 oz capacity",
    tags: ["pottery", "mug", "ceramic", "kitchen", "gift"],
  },
  {
    id: "5",
    slug: "turquoise-silver-earrings",
    name: "Turquoise & Silver Earrings",
    price: 72.00,
    description: "Sterling silver drop earrings set with genuine turquoise stones.",
    longDescription: "Handcrafted by our silversmith using sterling silver wire and genuine turquoise stones sourced from the American Southwest. Each pair features the timeless combination of silver and turquoise — a nod to the Western heritage of Wyoming. Nickel-free and hypoallergenic.",
    images: [
      "https://images.pexels.com/photos/2916537/pexels-photo-2916537.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2916537/pexels-photo-2916537.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Jewelry",
    rating: 4.9,
    reviewCount: 41,
    isNew: true,
    isBestSeller: false,
    discount: 0,
    freeShipping: false,
    inStock: true,
    stockCount: 9,
    materials: ["Sterling silver", "Genuine turquoise"],
    dimensions: "1.5\" drop length",
    tags: ["jewelry", "earrings", "turquoise", "silver", "western"],
  },
  {
    id: "6",
    slug: "wood-burned-wyoming-sign",
    name: "Wood-Burned Wyoming Sign",
    price: 115.00,
    description: "Custom wood-burned sign featuring 'Wyoming' in rustic script with mountain scene.",
    longDescription: "A beautiful piece of wall art featuring 'Wyoming' in hand-burned rustic script, surrounded by a detailed mountain and pine tree scene. Made from smooth pine, finished with a clear protective coat. Makes a perfect gift for Wyoming lovers or anyone who calls this great state home.",
    images: [
      "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Wood Art",
    rating: 4.8,
    reviewCount: 27,
    isNew: false,
    isBestSeller: true,
    discount: 0,
    freeShipping: true,
    inStock: true,
    stockCount: 5,
    materials: ["Pine wood", "Clear protective finish"],
    dimensions: "18\" × 12\"",
    tags: ["wood", "sign", "wyoming", "decor", "wall art", "gift"],
  },
  {
    id: "7",
    slug: "hand-stitched-throw-pillow",
    name: "Hand-Stitched Throw Pillow",
    price: 64.00,
    description: "Cozy throw pillow with hand-embroidered Wyoming mountain sunset scene.",
    longDescription: "Add a touch of Wyoming warmth to any room with this hand-embroidered throw pillow. The mountain sunset scene is stitched with vibrant cotton thread on natural linen. Pillow insert included. Machine washable cover with a hidden zipper.",
    images: [
      "https://images.pexels.com/photos/4098367/pexels-photo-4098367.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Textiles",
    rating: 4.6,
    reviewCount: 15,
    isNew: false,
    isBestSeller: false,
    discount: 0,
    freeShipping: false,
    inStock: true,
    stockCount: 11,
    materials: ["Linen cover", "Cotton fill", "Cotton thread"],
    dimensions: "18\" × 18\"",
    tags: ["pillow", "embroidery", "textile", "home", "decor"],
  },
  {
    id: "8",
    slug: "antler-coat-rack",
    name: "Antler Coat Rack",
    price: 185.00,
    description: "Rustic wall-mounted coat rack made from naturally shed elk antlers.",
    longDescription: "Sourced from naturally shed elk antlers found across the Wyoming range, each coat rack is one-of-a-kind. Mounted on a reclaimed barn wood base, this piece holds 3–4 coats or hats with ease. No elk were harmed — sheds are collected after the antlers are naturally dropped each spring.",
    images: [
      "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Home Décor",
    rating: 5.0,
    reviewCount: 8,
    isNew: true,
    isBestSeller: false,
    discount: 0,
    freeShipping: true,
    inStock: true,
    stockCount: 2,
    materials: ["Naturally shed elk antlers", "Reclaimed barn wood"],
    dimensions: "24\" wide × 12\" tall",
    tags: ["antler", "coat rack", "rustic", "decor", "wyoming"],
  },
];

export const categories = [
  { name: "All", value: "all" },
  { name: "Wood Art", value: "Wood Art" },
  { name: "Quilts", value: "Quilts" },
  { name: "Pottery", value: "Pottery" },
  { name: "Jewelry", value: "Jewelry" },
  { name: "Leather", value: "Leather" },
  { name: "Textiles", value: "Textiles" },
  { name: "Home Décor", value: "Home Décor" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isBestSeller).slice(0, 4);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew).slice(0, 4);
}
