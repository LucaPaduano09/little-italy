import { NextResponse } from "next/server";
import connect from "../../../db";
import Product from "../../../models/Product";

export const GET = async (request) => {
  try {
    await connect();
    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("error in fetching products - error: " + error, {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  try {
    await connect();
    const { name, description, category, price } = await request.json();
    await Product.create({ name, description, category, price });
    return new NextResponse("product created successfuly", { status: 201 });
  } catch (error) {
    return new NextResponse("error inserting products" + error, {
      status: 500,
    });
  }
};
