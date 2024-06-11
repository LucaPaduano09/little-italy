"use client";
import { Button, Image } from "@nextui-org/react";
import { notFound, useParams, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const page = () => {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch the product data from your API
      fetch(`http://localhost:3000/api/product/${id}`, {
        method: "GET",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);
  return (
    <div className="mt-[4rem]">
      {product && (
        <div className="flex flex-col items-center justify-center">
          <div>
            <Image src={"/" + product?.image} />
          </div>
          <div className="w-[90vw]">
            <h1 className="text-xl">{product?.name}</h1>
            <p>{product?.description}</p>
            <p>{"€" + product?.price}</p>
          </div>
          <div className="h-[100px] flex items-center justify-center w-[90vw]">
            <Button variant="solid" color="primary" className="w-full">
              Aggiungi al carrello
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
