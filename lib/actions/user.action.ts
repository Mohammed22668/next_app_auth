"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import bcrypt from "bcryptjs";
interface RequestFields {
  name: string;
  email: string;
  password: string;
  username: string;
}

export async function createUser(params: RequestFields) {
  try {
    connectToDatabase();
    const { name, username, email, password } = params;
    const hashpassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      username,
      email,
      password: hashpassword,
    });

    return JSON.stringify(user);
  } catch (error) {
    console.error(error);
  }
}

interface UserExistsParams {
  username: string;
  email: string;
}

export async function userExists(params: UserExistsParams) {
  try {
    connectToDatabase();
    const { username, email } = params;
    const user = await User.findOne({ $or: [{ username }, { email }] });
    return user ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getUserCount() {
  try {
    connectToDatabase();
    const userCount = await User.find().countDocuments();
    return { userCount };
  } catch (error) {
    console.log(error);
  }
}
