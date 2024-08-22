import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

interface RequestFields {
  name: string;
  email: string;
  password: string;
  username: string;
}
export async function POST(req: NextRequest) {
  try {
    const { name, email, password, username } = await req.json();
    const hashpassword = await bcrypt.hash(password, 10);
    await connectToDatabase();
    await User.create({
      name,
      email,
      password: hashpassword,
      username,
    });

    return NextResponse.json(
      { message: "User Registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error registering user" },
      { status: 500 }
    );
  }
}
