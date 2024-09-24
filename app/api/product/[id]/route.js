import { NextResponse } from "next/server";
import connect from "../../../../db";
import Product from "../../../../models/Product";

export const GET = async (req, res) => {
  const url = req.url;
  const id = url.replace(
    `${process.env.NEXT_PUBLIC_BASE_ENDPOINT}` + "/product/",
    ""
  );
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
    return new NextResponse("Internal error: " + error, { status: 500 });
  }
};
