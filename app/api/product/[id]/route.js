import { NextResponse } from "next/server";
import connect from "../../../../db";
import Product from "../../../../models/Product";

export const GET = async (req) => {
  try {
    // Estrai l'URL e l'ID del prodotto
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    // Verifica se l'ID è valido
    if (!id) {
      return new NextResponse("Id non passato", { status: 400 });
    }

    // Connessione al database
    await connect();

    // Cerca il prodotto nel database
    const product = await Product.findById(id);

    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    // Ritorna il prodotto trovato
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal server error: " + error.message }),
      { status: 500 }
    );
  }
};
