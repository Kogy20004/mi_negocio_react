import { useEffect, useState } from "react";
import { getAllProducts } from "../api/Products.api";
import { ProductCard } from "./ProductCard";

export function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const res = await getAllProducts();
      setProducts(res.data);
    }
    loadProducts();
  });
  
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
        
      ))}
      
    </div>
  );
}
