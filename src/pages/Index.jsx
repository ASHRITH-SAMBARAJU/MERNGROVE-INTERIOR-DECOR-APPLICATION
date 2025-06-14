
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Layout from "@/components/layout/Layout";
// import ProductCard from "@/components/product/ProductCard";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Heart, Plus } from "lucide-react";
// import { getFeaturedProducts, getNewArrivals } from "@/data/products";
// import { useCart } from "@/context/CartContext";
// import { toast } from "sonner";

// const Index = () => {
//   const featuredProducts = getFeaturedProducts();
//   const newArrivals = getNewArrivals();
//   const { addItem } = useCart();

//   const [favorites, setFavorites] = useState(new Set());

//   const toggleFavorite = (id) => {
//     const newFavorites = new Set(favorites);
//     if (newFavorites.has(id)) {
//       newFavorites.delete(id);
//       toast.info("Removed from favorites");
//     } else {
//       newFavorites.add(id);
//       toast.success("Added to favorites");
//     }
//     setFavorites(newFavorites);
//   };

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative h-[90vh] flex items-center overflow-hidden">
//         <div className="absolute inset-0 -z-10">
//           <img
//             src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//             alt="Modern living room with minimalist design"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>
//         </div>

//         <div className="container px-6 md:px-12">
//           <div className="max-w-xl space-y-6">
//             <h1 className="text-4xl md:text-6xl font-medium leading-tight">
//               Modern design for modern living
//             </h1>
//             <p className="text-lg opacity-80">
//               Discover our curated collection of minimalist products designed to enhance your everyday life.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link to="/products" className="w-full sm:w-auto">
//                 <Button size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-black/90">
//                   Shop Now
//                 </Button>
//               </Link>

//               <Link to="/about" className="w-full sm:w-auto">
//                 <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-white/90">
//                   Our Story
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16 px-6 md:px-12">
//         <div className="container">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl md:text-3xl font-medium">Featured Products</h2>

//             <Link to="/products" className="flex items-center gap-1">
//               <Button className="bg-black text-white hover:bg-black/90" variant="ghost" size="sm">
//                 View all <ArrowRight className="h-4 w-4" />
//               </Button>
//             </Link>
//           </div>

//           {/* Grid with 3 Images */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredProducts.slice(0, 3).map((product) => (
//               <div
//                 key={product.id}
//                 className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 bg-white"
//               >
//                 {/* Heart Button at Top-Right */}
//                 <button
//                   className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
//                     favorites.has(product.id)
//                       ? "bg-red-500 text-white"
//                       : "bg-gray-200 text-gray-600"
//                   } hover:bg-red-600 transition`}
//                   onClick={() => toggleFavorite(product.id)}
//                 >
//                   <Heart className="w-5 h-5" />
//                 </button>

//                 <Link to={`/products/${product.id}`} className="block">
//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     className="w-full h-[350px] object-cover transition-transform duration-300 hover:scale-105"
//                     loading="lazy"
//                   />
//                 </Link>

//                 <div className="p-6">
//                   <h3 className="text-lg font-medium">{product.name}</h3>
//                   <p className="text-muted-foreground">₹{product.price.toLocaleString()}</p>

//                   {/* Unified "Add to Cart" Button with Plus Icon */}
//                   <Button
//                     className="w-full bg-black text-white hover:bg-black/90 mt-4"
//                     onClick={() => {
//                       addItem(product, 1);
//                       toast.success(`${product.name} added to cart`);
//                     }}
//                   >
//                     <Plus className="w-5 h-5 mr-2" /> Add to Cart
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* New Arrivals */}
//       <section className="bg-muted py-24 px-6 md:px-12">
//         <div className="container">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-medium">New Arrivals</h2>
//               <p className="mt-4 opacity-80">
//                 Discover the latest trends and styles in our newest collection.
//               </p>

//               <Link to="/new-arrivals" className="w-full sm:w-auto">
//                 <Button className="bg-black text-white hover:bg-black/90 mt-6">
//                   Shop New Arrivals
//                 </Button>
//               </Link>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {newArrivals.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="bg-muted py-24 px-6 md:px-12">
//         <div className="container mx-auto max-w-3xl text-center">
//           <h2 className="text-3xl font-medium mb-4">Stay Inspired</h2>
//           <p className="text-muted-foreground mb-8">
//             Subscribe to our newsletter for exclusive offers and design inspiration.
//           </p>

//           <form className="flex flex-col sm:flex-row gap-3 justify-center">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
//               required
//             />

//             <Button type="submit" className="bg-black text-white hover:bg-black/90">
//               Subscribe
//             </Button>
//           </form>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Index;
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Plus } from "lucide-react";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavourtiesContext";  
import { toast } from "sonner";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const { addItem } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();  // Use favorites globally

  const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
      toast.info(`${product.name} removed from favorites`);
    } else {
      addToFavorites(product);
      toast.success(`${product.name} added to favorites`);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Modern living room with minimalist design"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>
        </div>

        <div className="container px-6 md:px-12">
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-medium leading-tight">
              Modern design for modern living
            </h1>
            <p className="text-lg opacity-80">
              Discover our curated collection of minimalist products designed to enhance your everyday life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-black/90">
                  Shop Now
                </Button>
              </Link>

              <Link to="/about" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-white/90">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 md:px-12">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-medium">Featured Products</h2>

            <Link to="/products" className="flex items-center gap-1">
              <Button className="bg-black text-white hover:bg-black/90" variant="ghost" size="sm">
                View all <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Grid with 3 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 bg-white"
              >
                {/* Heart Button using FavoritesContext */}
                <button
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
                    isFavorite(product.id) ? "bg-red-500 text-white" : "bg-gray-200 text-gray-600"
                  } hover:bg-red-600 transition`}
                  onClick={() => toggleFavorite(product)}
                >
                  <Heart className="w-5 h-5" />
                </button>

                <Link to={`/products/${product.id}`} className="block">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-[350px] object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </Link>

                <div className="p-6">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-muted-foreground">₹{product.price.toLocaleString()}</p>

                  {/* Add to Cart Button */}
                  <Button
                    className="w-full bg-black text-white hover:bg-black/90 mt-4"
                    onClick={() => {
                      addItem(product, 1);
                      toast.success(`${product.name} added to cart`);
                    }}
                  >
                    <Plus className="w-5 h-5 mr-2" /> Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-muted py-24 px-6 md:px-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-medium">New Arrivals</h2>
              <p className="mt-4 opacity-80">
                Discover the latest trends and styles in our newest collection.
              </p>

              <Link to="/new-arrivals" className="w-full sm:w-auto">
                <Button className="bg-black text-white hover:bg-black/90 mt-6">
                  Shop New Arrivals
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
