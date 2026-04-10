"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  ShoppingCart,
  Star,
  ChevronLeft,
  ChevronRight,
  Check,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export interface ProductCardProps {
  id?: string;
  slug?: string;
  name?: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  images?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  discount?: number;
  freeShipping?: boolean;
  category?: string;
}

export function ProductCard({
  id = "1",
  slug = "product",
  name = "Handcrafted Item",
  price = 49.99,
  originalPrice,
  rating = 4.8,
  reviewCount = 12,
  images = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  ],
  isNew = false,
  isBestSeller = false,
  discount = 0,
  freeShipping = false,
  category = "",
}: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { addItem } = useCart();

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAddedToCart) return;
    setIsAddingToCart(true);
    setTimeout(() => {
      addItem({ id, name, price, image: images[0], slug });
      setIsAddingToCart(false);
      setIsAddedToCart(true);
      setTimeout(() => setIsAddedToCart(false), 2000);
    }, 600);
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden group bg-card text-card-foreground shadow hover:shadow-lg transition-all duration-300 rounded-xl">
      {/* Image carousel */}
      <Link href={`/shop/${slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`${name} - View ${currentImageIndex + 1}`}
            className="object-cover w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-primary w-4" : "bg-primary/30"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                />
              ))}
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && <Badge className="bg-blue-500 hover:bg-blue-500/90">New</Badge>}
            {isBestSeller && <Badge className="bg-amber-600 hover:bg-amber-600/90">Best Seller</Badge>}
            {discount > 0 && <Badge className="bg-rose-500 hover:bg-rose-500/90">-{discount}%</Badge>}
          </div>

          {/* Wishlist */}
          <Button
            variant="secondary"
            size="icon"
            className={`absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm ${
              isWishlisted ? "text-rose-500" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-rose-500" : ""}`} />
          </Button>
        </div>
      </Link>

      <CardContent className="p-4">
        <div className="space-y-2">
          {category && (
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{category}</p>
          )}
          <Link href={`/shop/${slug}`}>
            <h3 className="font-semibold line-clamp-1 hover:text-primary transition-colors">{name}</h3>
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">({reviewCount} reviews)</span>
            {freeShipping && (
              <span className="text-xs text-emerald-600 ml-auto">Free shipping</span>
            )}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full btn-shine"
          onClick={handleAddToCart}
          disabled={isAddingToCart || isAddedToCart}
        >
          {isAddingToCart ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Adding...</>
          ) : isAddedToCart ? (
            <><Check className="mr-2 h-4 w-4" />Added to Cart</>
          ) : (
            <><ShoppingCart className="mr-2 h-4 w-4" />Add to Cart</>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
