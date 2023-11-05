import { NextResponse } from "next/server";
import connect from "../../../db";
import Product from "../../../models/Product";

// export const GET = async (request) => {
//   // try {
//   //   await connect();
//   //   const products = Product.find();
//   //   console.log(products);
//   //   throw new NextResponse(
//   //     "correctly responded from mongo, here's your products",
//   //     { status: 200 }
//   //   );
//   // } catch (error) {
//   //   throw new NextResponse("error in fetching products - error: " + error, {
//   //     status: 500,
//   //   });
//   //   console.log(error);
//   // }
// };
