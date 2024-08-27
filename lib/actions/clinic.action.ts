"use server";

import Clinic from "@/database/clinic.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

interface CreateClinicParams {
  name: string;
  address: string;
  phone: string;
  email: string;
  status: string;
  logoImage: string;
  path: string;
}

export async function createClinic(params: CreateClinicParams) {
  try {
    connectToDatabase();
    const { name, address, phone, email, status, logoImage, path } = params;
    const clinic = await Clinic.create({
      name,
      address,
      phone,
      email,
      status,
      logoImage,
    });

    revalidatePath(path);
    return JSON.stringify(clinic);
  } catch (error) {
    console.error(error);
  }
}

export async function getAllClinics() {
  try {
    connectToDatabase();
    const clinics = await Clinic.find({});
    return { clinics };
  } catch (error) {
    console.error(error);
  }
}
