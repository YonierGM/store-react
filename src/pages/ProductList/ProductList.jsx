import React, { useEffect, useState } from "react";
import { Card } from "../../components/card/Card";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

export function ProductList() {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
      console.log("Products:", products);
    }
  }, [data]);

  return (
    <>
      <div className="Cards">
        {products.map((product) => (
          <Card
            id={product.id}
            key={product.id}
            image={product.images[0]}
            title={product.title}
            rating={product.rating}
            price={product.price}
            discountPercentage={product.discountPercentage}
            priceAfterDiscount={product.priceAfterDiscount}
            priceBeforeDiscount={product.priceBeforeDiscount}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
}
