"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SingleProduct = (product: any) => {
  const [prod, setProd] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
  });
  useEffect(() => {
    if (product.product) {
      setProd(product.product);
    }
  }, [product.product]);
  //   console.log(product);
  return (
    <div className="w-full mt-[4rem] flex justify-center items-center flex-col">
      <Image
        src={"/" + prod?.image}
        alt={prod?.name}
        width={200}
        height={200}
      />
      <h1>{prod?.name}</h1>
      <p>{prod?.description}</p>
      <p>{prod?.price}</p>
    </div>
  );
};

export default SingleProduct;
