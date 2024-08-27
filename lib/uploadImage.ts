"use server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { mkdir } from "fs/promises";

export async function uploadImage(data: FormData) {
  try {
    const file: File | null = data.get("file") as unknown as File;
    if (!file) {
      throw new Error("No file uploaded");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Define the path where the image will be stored within your project
    const uploadDir = join(process.cwd(), "public", "uploads");

    // Create the directory if it doesn't exist
    await mkdir(uploadDir, { recursive: true });

    const filePath = join(uploadDir, file.name);
    await writeFile(filePath, buffer);
    console.log(`Image saved to ${filePath}`);

    const relativePath = `/uploads/${file.name}`;
    return { success: true, path: relativePath };
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}
