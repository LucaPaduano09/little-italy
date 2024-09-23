"use client";

import React, { useState, useEffect } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux"; // Se utilizzi redux per lo stato del carrello

const CheckoutPage = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const [totalAmount, setTotalAmount] = useState(0);
  const deliveryFees = 5.99;
  useEffect(() => {
    const calculateTotal = () => {
      let total = cartItems.reduce(
        (sum: any, item: any) => sum + item.price * item.quantity,
        0
      );
      total += deliveryFees;
      setTotalAmount(total);
    };
    calculateTotal();
  }, [cartItems]);

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalAmount.toFixed(2), // Totale del carrello
            currency_code: "EUR", // Imposta la valuta
          },
        },
      ],
    });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      console.log("Transaction completed by " + details.payer.name.given_name);
      // Puoi fare un redirect a una pagina di successo o mostrare una conferma
    });
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "EUR", // Specifica la valuta qui
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1>Checkout</h1>
        <p>Totale: €{totalAmount.toFixed(2)}</p>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={(err: any) => {
            console.error("Errore di pagamento PayPal:", err);
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default CheckoutPage;
