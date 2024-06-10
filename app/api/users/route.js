import { NextResponse } from "next/server";
import connect from "../../../db";
import User from "../../../models/User";
export const GET = async (request) => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("error in fetching users - error: " + error, {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  try {
    await connect();
    const { email, newsletter, orders, cart, active } = await request.json();
    await User.create({ email, newsletter, orders, cart, active });
    return new NextResponse("user created successfuly", { status: 201 });
  } catch (error) {
    return new NextResponse("error inserting user" + error, {
      status: 500,
    });
  }
};
