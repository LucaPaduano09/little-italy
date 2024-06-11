import { NextResponse } from "next/server";
import connect from "../../../../db";
import Product from "../../../../models/Product";

export const GET = async (req, res) => {
  const url = req.url;
  const id = url.replace("http://localhost:3000/api/product/", "");
  if (!id) {
    return new NextResponse("Id non passato", { status: 400 });
  }

  try {
    await connect();
    const product = await Product.findById(id);
    console.log(id);
    if (product) {
      return new NextResponse(JSON.stringify(product), { status: 200 });
    } else {
      return new NextResponse("Product not found", { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
