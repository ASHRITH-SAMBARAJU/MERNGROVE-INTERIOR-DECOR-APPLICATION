
export const products = [
  {
    id: "1",
    name: "Minimalist Desk Lamp",
    description:
      "A sleek, adjustable desk lamp with a minimalist design. Features touch-sensitive brightness control and a USB charging port.",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=2000&q=80",
    ],
    category: "Lighting",
    tags: ["desk lamp", "minimalist", "home office"],
    rating: 4.7,
    inventory: 25,
    featured: true,
    newArrival: false,
    bestSeller: false,
  },
  {
    id: "2",
    name: "Modern Ceramic Vase",
    description:
      "Hand-crafted ceramic vase with a modern, asymmetrical design. Perfect for fresh or dried floral arrangements.",
    price: 600,
    images: [
      "https://images.unsplash.com/photo-1648994517762-15aae4c01ce7?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1674492811257-2580e910292c?w=600&auto=format&fit=crop&q=60",
    ],
    category: "Home Decor",
    tags: ["vase", "ceramic", "decor"],
    rating: 4.5,
    inventory: 18,
    featured: false,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "3",
    name: "Wireless Pods",
    description:
      "Sleek wireless earbuds with high-quality audio and active noise cancellation. Comes with a compact charging case.",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1593716686443-b821ac2a45c8?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=600&auto=format&fit=crop&q=60",
    ],
    category: "Electronics",
    tags: ["earbuds", "wireless", "tech"],
    rating: 4.8,
    inventory: 42,
    featured: false,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "4",
    name: "Minimalist Wall Clock",
    description:
      "Modern wall clock with a clean, numberless face and silent movement mechanism. Available in matte black or white finish.",
    price: 399,
    images: [
      "https://images.unsplash.com/photo-1515938541268-cb8a388444b4?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1558603655-491ecfa8324f?w=600&auto=format&fit=crop&q=60",
    ],
    category: "Home Decor",
    tags: ["clock", "wall decor", "minimalist"],
    rating: 4.6,
    inventory: 30,
    featured: false,
    newArrival: false,
    bestSeller: false,
  },
  {
    id: "5",
    name: "Leather Desk Pad",
    description:
      "Premium full-grain leather desk pad that protects your desk while adding a touch of sophistication to your workspace.",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1452601395039-3184bc03cb09?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1674826272753-d11e3c1783ab?w=600&auto=format&fit=crop&q=60",
    ],
    category: "Office",
    tags: ["desk pad", "leather", "office"],
    rating: 4.9,
    inventory: 15,
    featured: false,
    newArrival: true,
    bestSeller: false,
  },
  {
    id: "6",
    name: "Smart Indoor Plant Pot",
    description:
      "Self-watering plant pot with integrated sensors that monitor soil moisture, light, and temperature. Connects to smartphone app for plant care tips.",
    price: 150,
    images: [
      "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1511389026070-a14ae610a1be?auto=format&fit=crop&w=2000&q=80",
    ],
    category: "Home Decor",
    tags: ["plant pot", "smart home", "gardening"],
    rating: 4.4,
    inventory: 20,
    featured: true,
    newArrival: false,
    bestSeller: false,
  },
  {
    id: "7",
    name: "Aesthetic Rug",
    description:
      "Luxuriously soft merino wool aesthetic rug, perfect for adding warmth and texture to any space. Available in multiple colors.",
    price: 1999,
    images: [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&auto=format&fit=crop&q=60",
    ],
    category: "Home Textiles",
    tags: ["rug", "wool", "home"],
    rating: 4.7,
    inventory: 22,
    featured: false,
    newArrival: false,
    bestSeller: true,
  },
  {
    id: "8",
    name: "Minimalist Coffee Mug",
    description:
      "Simple yet elegant ceramic coffee mug with a comfortable handle. Dishwasher and microwave safe.",
    price: 249,
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=2000&q=80",
    ],
    category: "Kitchen",
    tags: ["mug", "ceramic", "kitchen"],
    rating: 4.5,
    inventory: 75,
    featured: false,
    newArrival: false,
    bestSeller: false,
  },
];


// ✅ Optimized filter function
const filterProducts = (key) => products.filter((product) => product[key]);

export const getFeaturedProducts = () => filterProducts("featured");
export const getNewArrivals = () => filterProducts("newArrival");
export const getBestSellers = () => filterProducts("bestSeller");

// ✅ Improved error handling for missing products
export const getProductById = (id) => {
  const product = products.find((product) => product.id === id);
  return product || null;  // Return null if product not found
};

// ✅ Enhanced related products logic
export const getRelatedProducts = (id, limit = 4) => {
  const product = getProductById(id);
  if (!product) return [];

  // Prioritize tag-based matches, then fill with category matches
  const tagMatches = products.filter(
    (p) => p.id !== id && p.tags.some((tag) => product.tags.includes(tag))
  );

  const categoryMatches = products.filter(
    (p) => p.id !== id && p.category === product.category
  );

  // Combine tag + category matches and limit the result
  const combined = [...new Set([...tagMatches, ...categoryMatches])].slice(0, limit);
  return combined;
};
// Add this at the bottom of your products.jsx file
export const getAllProducts = () => products;
