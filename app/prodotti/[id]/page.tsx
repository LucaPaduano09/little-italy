import SingleProduct from "@/components/SingleProduct/SingleProduct";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";

async function getProducts() {
  const res = await fetch(process.env.BASE_ENDOPOINT + "/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const page = async () => {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  const id = fullUrl.replace("http://localhost:3000/prodotti/", "");
  const products = await getProducts();
  const singleProduct = products.filter((pr: any) => pr._id === id);
  return (
    <div className="mt-[4rem]">
      {singleProduct && <SingleProduct product={singleProduct[0]} />}
    </div>
  );
};

export default page;
