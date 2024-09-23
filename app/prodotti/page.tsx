import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import SelectComponent from "@/components/SelectComponent/SelectComponent";

async function getProducts() {
  const res = await fetch(process.env.BASE_ENDOPOINT + "products", {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const page = async () => {
  const product = await getProducts();
  const headingClasses =
    "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small";
  return (
    <>
      <div className="mt-[4rem]">
        <SelectComponent products={product} />
      </div>
    </>
  );
};

export default page;
