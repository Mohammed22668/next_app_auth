import * as z from "zod";

export const formClinicSchema = z.object({
  name: z.string().min(1, {
    message: "يجب ان يكون الاسم اكثر من حرف",
  }),
  governorate: z.string(),
  specialization: z.string(),

  address: z.string().min(1, {
    message: "يجب ان يكون الاسم اكثر من حرف",
  }),

  phone: z.string(),
  email: z.string().email({
    message: "يجب ان يكون الايميل بالصيغة الصحيحة",
  }),
  status: z.string(),
  logoImage: z.string(),
});
