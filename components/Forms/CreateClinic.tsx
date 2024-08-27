"use client";
import React, { useState } from "react";
import { ChangeEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formClinicSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { uploadImage } from "@/lib/uploadImage";
import { createClinic } from "@/lib/actions/clinic.action";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Swal from "sweetalert2";

const CreateClinic = () => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    console.log("file=> ", file);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const uploadResponse = await uploadImage(formData);

      if (uploadResponse.success) {
        setImageUrl(uploadResponse.path); // Store the relative image path
        console.log("Image URL=>", uploadResponse.path);
      }
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };

  const form = useForm<z.infer<typeof formClinicSchema>>({
    resolver: zodResolver(formClinicSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
      status: "",
      logoImage: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formClinicSchema>) {
    setIsSubmitting(true);

    try {
      if (!imageUrl) {
        throw new Error("Image upload failed. Please try again.");
      }

      await createClinic({
        name: values.name,
        address: values.address,
        phone: values.phone,
        email: values.email,
        status: values.status,
        logoImage: imageUrl,
        path: "/clinic",
      });
      Swal.fire({
        title: "Success",
        text: "تم انشاء عيادة بنجاح",
        icon: "success",
      });

      router.push("/clinic");
    } catch (error) {}
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-6 bg-white shadow-md rounded-lg"
      >
        {/* اسم العيادة */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">
                اسم العيادة
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="أدخل اسم العيادة"
                  className="border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600 mt-1" />
            </FormItem>
          )}
        />

        {/* العنوان */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">
                العنوان
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="أدخل العنوان"
                  className="border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600 mt-1" />
            </FormItem>
          )}
        />

        {/* رقم الهاتف */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">
                رقم الهاتف
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="أدخل رقم الهاتف"
                  className="border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600 mt-1" />
            </FormItem>
          )}
        />

        {/* الايميل */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">
                الايميل
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="أدخل البريد الإلكتروني"
                  type="email"
                  className="border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600 mt-1" />
            </FormItem>
          )}
        />

        {/* حالة العيادة */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">
                حالة العيادة
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:border-green-500 focus:ring focus:ring-green-200">
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white border border-gray-300 rounded-md shadow-sm">
                    <SelectItem value="active">فعال</SelectItem>
                    <SelectItem value="inactive">غير فعال</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-red-600 mt-1" />
            </FormItem>
          )}
        />

        {/* Add image  */}
        {/* Image */}
        {imageUrl ? (
          <div className="">
            <div className="border-2 w-[100px] border-orange-400">
              <Image
                src={imageUrl}
                alt="Image Story"
                width={100}
                height={100}
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        {/* logo */}
        <FormField
          control={form.control}
          name="logoImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">
                صورة الشعار
              </FormLabel>
              <FormControl>
                <Input
                  accept="image/*"
                  type="file"
                  className="border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
                  {...field}
                  onChange={handleFileChange}
                />
              </FormControl>
              <FormMessage className="text-red-600 mt-1" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150 ease-in-out"
        >
          ارسال
        </Button>
      </form>
    </Form>
  );
};

export default CreateClinic;
