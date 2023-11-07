"use client";
import {
  Image,
  Link,
  Select,
  SelectItem,
  SelectSection,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const SelectComponent = (product: any) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState(product.products);
  useEffect(() => {
    console.log(selectedCategory);
    if (selectedCategory !== "all") {
      setProducts(
        product.products.filter((pr: any) => pr.category === selectedCategory)
      );
    } else {
      setProducts(product.products);
    }
    // products = products.filter((pr: any) => pr.category === selectedCategory);
  }, [selectedCategory]);

  const headingClasses =
    "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small";
  return (
    <>
      <Select
        label="Filter by category"
        placeholder="Select a product"
        className="max-w-xs mt-2 mb-5 ml-2"
        scrollShadowProps={{
          isEnabled: false,
        }}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <SelectItem key="all">All</SelectItem>
        <SelectItem key="Drinks">Beer</SelectItem>

        <SelectItem key="Pasta">Pasta</SelectItem>
      </Select>
      {products?.map((pr: any) => (
        <div className="w-full flex items-center justify-center flex-col mb-7">
          <Link
            href={"/prodotti/" + pr._id}
            className="w-full flex items-center justify-center flex-col text-black"
          >
            <Image width={200} height={200} src={pr.image} />
            <h1 className="font-bold">{pr.name}</h1>
            <p>{pr.description}</p>
            <p>{pr.price}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SelectComponent;
