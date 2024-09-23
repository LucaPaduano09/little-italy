"use client";

import { Button, Image, Link } from "@nextui-org/react";
import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { addItem, removeItem, deleteItem } from "../../redux/slices/cartSlice";
import Cookies from "js-cookie";
import PayPalCheckout from "@/components/PayPalCheckout/PayPalCheckout";

const Page = () => {
  const cartState = useSelector((state: any) => state?.cart?.items);
  const [total, setTotal] = useState<number>(0);
  const deliveryFees = 5.99;
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartState) {
      let sum = 0;
      cartState.forEach((item: any) => {
        sum +=
          (typeof item.price === "string"
            ? parseFloat(item.price)
            : item.price) * item.quantity;
      });
      Cookies.set("cart", JSON.stringify(cartState), { expires: 7 });
      setTotal(sum);
    }
  }, [cartState]);

  const handleCheckout = () => {
    if (session) {
      router.push("/pagamento");
    } else {
      router.push("/login");
    }
  };

  const uniqueItems = useMemo(() => {
    return cartState.reduce((acc: any, item: any) => {
      const existingItem = acc.find((i: any) => i._id === item._id);
      if (existingItem) {
        existingItem.quantity += item.quantity; // Incrementa la quantità
      } else {
        acc.push({ ...item }); // Aggiungi nuovo oggetto
      }
      return acc;
    }, []);
  }, [cartState]);

  const handleDecreaseItem = (item: any) => {
    if (item.quantity > 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(deleteItem(item));
    }
  };
  return uniqueItems.length ? (
    <div className="mt-[4rem] p-2 w-full">
      <div className="w-full mt-10">
        {uniqueItems.map((item: any) => (
          <div
            className="flex items-center justify-center flex-col"
            key={item._id}
          >
            <div className="flex items-center justify-start w-full">
              <Image src={item.image} width={100} height={100} />
              <div className="ml-4">
                <h1>
                  {item.name} (x{item.quantity || 1})
                </h1>
                <p>{item.description}</p>
                <p>{"€" + item.price}</p>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <Button onClick={() => handleDecreaseItem(item)}>-</Button>
              {/* <span className="mx-2">{item.quantity || 1}</span> */}
              <Button
                onClick={() => dispatch(addItem({ ...item, fromCart: true }))}
              >
                +
              </Button>
            </div>
            <div className="w-[90%] h-[1px] bg-slate-200 my-4"></div>
          </div>
        ))}
      </div>
      <div className="w-full mt-8 flex items-center justify-center flex-col">
        <div className="flex items-start justify-between w-full flex-col">
          <div className="flex items-start justify-between w-full">
            <h1>Subtotal:</h1>
            <p>{"€" + total.toFixed(2)}</p>
          </div>
          <div className="flex items-start justify-between w-full">
            <h1>Delivery fees:</h1>
            <p>{"€ " + deliveryFees}</p>
          </div>
          <div className="flex items-start justify-between w-full">
            <h1>Total:</h1>
            <p>{"€ " + (total + deliveryFees).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 w-[100%] flex items-center justify-center">
        <PayPalCheckout></PayPalCheckout>
      </div>
    </div>
  ) : (
    <div className="mt-[4rem] p-2 w-full">
      <p>Il carrello è vuoto.</p>
      <Button variant="shadow" as={Link} href="/prodotti">
        Vai ai prodotti
      </Button>
    </div>
  );
};

export default Page;
