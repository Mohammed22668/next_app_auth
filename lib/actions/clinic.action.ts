"use server";

import Clinic from "@/database/clinic.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

interface CreateClinicParams {
  name: string;
  governorate: string;
  specialization: string;
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
    const {
      name,
      governorate,
      specialization,
      address,
      phone,
      email,
      status,
      logoImage,
      path,
    } = params;
    const clinic = await Clinic.create({
      name,
      governorate,
      specialization,
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

export async function getClinicCount() {
  try {
    connectToDatabase();
    const clinicCount = await Clinic.find().countDocuments();
    return { clinicCount };
  } catch (error) {
    console.log(error);
  }
}

export async function deleteClinic(_id: string) {
  try {
    connectToDatabase();
    const clinic = await Clinic.findByIdAndDelete(_id);
    return JSON.stringify(clinic);
  } catch (error) {
    console.error(error);
  }
}
