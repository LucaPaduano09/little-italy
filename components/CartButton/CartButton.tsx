"use client";
import React, { useState, useEffect } from "react";
import { RiShoppingCartLine } from "react-icons/ri";

const CartButton = ({ itemsInCart }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (itemsInCart > 0) {
      setAnimate(true);

      // Rimuovi l'animazione dopo 500ms
      const timeout = setTimeout(() => {
        setAnimate(false);
      }, 500);

      // Pulizia dell'effetto per evitare problemi di memoria
      return () => clearTimeout(timeout);
    }
  }, [itemsInCart]);

  return (
    <div
      className={`flex items-center justify-center w-10 h-10 fixed bottom-5 right-3 rounded-full bg-white border-2 border-blue-600 
      ${animate ? "animate-bounce" : ""}`}
    >
      <RiShoppingCartLine
        size={24}
        color="blue"
        className={animate ? "transform scale-110" : ""}
      />
    </div>
  );
};

export default CartButton;
