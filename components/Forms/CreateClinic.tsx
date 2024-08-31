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
      governorate: "",
      specialization: "",
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
        governorate: values.governorate,
        specialization: values.specialization,
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
        {/* التخصص */}

        <FormField
          control={form.control}
          name="specialization"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">
                تخصص العيادة
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:border-green-500 focus:ring focus:ring-green-200">
                      <SelectValue placeholder="اختر التخصص" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white border border-gray-300 rounded-md shadow-sm">
                    <SelectItem value="اسنان">اسنان</SelectItem>
                    <SelectItem value="باطنية">باطنية</SelectItem>
                    <SelectItem value="قلب">قلب</SelectItem>
                    <SelectItem value="عظام">عظام</SelectItem>
                    <SelectItem value="اطفال">اطفال</SelectItem>
                    <SelectItem value="نسائية وتوليد">نسائية وتوليد</SelectItem>
                    <SelectItem value="جلدية">جلدية</SelectItem>
                    <SelectItem value="عيون">عيون</SelectItem>
                    <SelectItem value="أنف وأذن وحنجرة">
                      أنف وأذن وحنجرة
                    </SelectItem>
                    <SelectItem value="أعصاب">أعصاب</SelectItem>
                    <SelectItem value="مسالك بولية">مسالك بولية</SelectItem>
                    <SelectItem value="جراحة عامة">جراحة عامة</SelectItem>
                    <SelectItem value="تجميل">تجميل</SelectItem>
                    <SelectItem value="طب العائلة">طب العائلة</SelectItem>
                    <SelectItem value="غدد صماء">غدد صماء</SelectItem>
                    <SelectItem value="أورام">أورام</SelectItem>
                    <SelectItem value="روماتيزم">روماتيزم</SelectItem>
                    <SelectItem value="طب نفسي">طب نفسي</SelectItem>
                    <SelectItem value="طب الطوارئ">طب الطوارئ</SelectItem>
                    <SelectItem value="تغذية">تغذية</SelectItem>
                    <SelectItem value="جهاز هضمي">جهاز هضمي</SelectItem>
                    <SelectItem value="صدرية">صدرية</SelectItem>
                    <SelectItem value="أمراض الدم">أمراض الدم</SelectItem>
                    <SelectItem value="تخدير">تخدير</SelectItem>
                    <SelectItem value="أمراض معدية">أمراض معدية</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-red-600 mt-1" />
            </FormItem>
          )}
        />

        {/* المحافظة */}

        <FormField
          control={form.control}
          name="governorate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-700">
                المحافظة
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 focus:border-green-500 focus:ring focus:ring-green-200">
                      <SelectValue placeholder="اختر المحافظة" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white border border-gray-300 rounded-md shadow-sm">
                    <SelectItem value="بغداد">بغداد</SelectItem>
                    <SelectItem value="أربيل">أربيل</SelectItem>
                    <SelectItem value="الأنبار">الأنبار</SelectItem>
                    <SelectItem value="بابل">بابل</SelectItem>
                    <SelectItem value="البصرة">البصرة</SelectItem>
                    <SelectItem value="دهوك">دهوك</SelectItem>
                    <SelectItem value="القادسية">القادسية</SelectItem>
                    <SelectItem value="ديالى">ديالى</SelectItem>
                    <SelectItem value="ذي قار">ذي قار</SelectItem>
                    <SelectItem value="السليمانية">السليمانية</SelectItem>
                    <SelectItem value="صلاح الدين">صلاح الدين</SelectItem>
                    <SelectItem value="كركوك">كركوك</SelectItem>
                    <SelectItem value="كربلاء">كربلاء</SelectItem>
                    <SelectItem value="ميسان">ميسان</SelectItem>
                    <SelectItem value="المثنى">المثنى</SelectItem>
                    <SelectItem value="النجف">النجف</SelectItem>
                    <SelectItem value="نينوى">نينوى</SelectItem>
                    <SelectItem value="واسط">واسط</SelectItem>
                  </SelectContent>
                </Select>
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
