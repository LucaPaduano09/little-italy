import { notFound } from "next/navigation";
import React from "react";
import ProductClient from "./ProductClient";

// Tipi per TypeScript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Funzione asincrona per ottenere i dati del prodotto lato server
async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(process.env.BASE_ENDOPOINT + `product/${id}`);

    if (!res.ok) {
      return null;
    }

    const product: Product = await res.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Componente server-side che fetcha i dati e li passa al componente client-side
const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const product = await getProduct(id);
  console.log(product);

  if (!product) {
    notFound(); // Se il prodotto non viene trovato, mostra la pagina 404
  }

  return (
    <div className="mt-[4rem]">
      {/* Passiamo i dati del prodotto al componente client-side */}
      <ProductClient product={product} />
    </div>
  );
};

export default ProductPage;
