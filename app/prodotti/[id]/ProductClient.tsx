"use client"; // Questo permette di usare hook client-side come useParams, useDispatch

import { Button, Image } from "@nextui-org/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/slices/cartSlice";
import { isMobile } from "react-device-detect";

// Tipi per TypeScript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Componente client-side che riceve i dati del prodotto come prop
const ProductClient = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); // Stato per la quantità

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: quantity })); // Aggiungi la quantità al prodotto
    setQuantity(1); // Resetta la quantità dopo l'aggiunta
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Non permettere quantità inferiori a 1
  };

  return (
    <div className="flex flex-col w-[100vw] items-center justify-center md:flex-row ">
      <div className="h-400 md:h-700 md:flex-1">
        <Image
          src={"/" + product?.image}
          isZoomed
          style={{ width: "50vw", height: isMobile ? "400px" : "90vh" }}
        />
      </div>
      <div className="flex flex-col md:flex-1">
        <div className="w-[90vw] md:w-[unset]">
          <h1 className="text-xl">{product?.name}</h1>
          <p>{product?.description}</p>
          <p>{"€" + product?.price}</p>
        </div>
        <div className="flex items-center h-[100px] justify-center w-[90vw] md:w-[unset] md:justify-start">
          <Button onClick={() => decreaseQuantity()} disabled={quantity <= 1}>
            -
          </Button>
          <span className="mx-2">{quantity}</span> {/* Mostra la quantità */}
          <Button onClick={() => increaseQuantity()}>+</Button>
        </div>
        <div className="h-[100px] flex items-center justify-center w-[90vw] md:w-[50%]">
          <Button
            variant="solid"
            color="primary"
            className="w-full"
            onClick={() => handleAddToCart()}
          >
            Aggiungi al carrello
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductClient;
