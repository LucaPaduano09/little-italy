import { NextResponse } from "next/server";
import connect from "../../../../db";
import Product from "../../../../models/Product";

export const GET = async (req) => {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop(); // Ottieni solo l'ID dal percorso

  if (!id) {
    return new NextResponse("Id non passato", { status: 400 });
  }

  try {
    await connect();
    const product = await Product.findById(id);

    if (product) {
      return new NextResponse(JSON.stringify(product), { status: 200 });
    } else {
      return new NextResponse("Product not found", { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
};
