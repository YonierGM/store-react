import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import { CardFooter } from "../CardFooter/CardFooter";
import { useCart } from "../../components/cart/CartContext";
import { SetAmount } from "../SetAmount/SetAmount";
import { useAmount } from "../../hooks/useAmount";

import { AiFillCreditCard } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

import "./ProductDetail.css";
import { Cart } from "../cart/Cart";
import { Spinner } from "../spinner/Spinner";

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { product, loading } = useProduct(id);

  const [image, setImage] = useState(null); // Estado para la imagen principal
  const [amount, setAmount] = useState(1); // Estado para la cantidad

  useEffect(() => {
    if (product && product.images) {
      setImage(product.images[0]); // Inicializa con la primera imagen
    }
  }, [product]);

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  function addAmout() {
    setAmount((prevAmount) => prevAmount + 1);
  }

  function subtractAmount() {
    setAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
  }

  return (
    <>
      <div className="ContentDetail">
        <div className="Images">
          <div className="Principal">
            <img src={image} alt={product.title} />
          </div>
          <div className="Galeria">
            {product.images.map((img, index) => (
              <img
                onClick={() => setImage(img)}
                className={img === image ? "active" : ""}
                key={index}
                src={img}
                alt={`${product.title} ${index}`}
              />
            ))}
          </div>
        </div>
        <div className="Info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <CardFooter
            rating={product.rating}
            price={product.price}
            discountPercentage={product.discountPercentage}
            priceAfterDiscount={product.priceAfterDiscount}
            priceBeforeDiscount={product.priceBeforeDiscount}
          />
          <div className="Buy">
            <button className="Button">
              <AiFillCreditCard />
              Comprar
            </button>
            <div className="AddCart">
              <SetAmount
                amount={amount}
                onAdd={addAmout}
                onSubtract={subtractAmount}
              />
              <button
                onClick={() => {
                  addToCart(product, amount);
                }}
                className="AddToCart Button"
              >
                <FaCartShopping />
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
