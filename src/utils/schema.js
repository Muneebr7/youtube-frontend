import { z } from "zod";
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const registerSchema = z
  .object({
    fullName: z.string().min(1, "Full Name is Required"),
    username: z.string().min(6, "username Lenght should be 6 or more"),
    email: z.string().email("Invalid Email"),
    password: z.string().min(8, "password must be 8 character"),
    avatar: z
      .any()
      .refine((file) => file?.length !== 0, "Avatar is Required")
      .refine(
        (file) => file && ACCEPTED_IMAGE_TYPES.includes(file[0]?.type),
        "Only Images are Allowed"
      ),
      coverImage: z
      .any()
      .refine((file) => file?.length !== 0, "Avatar is Required")
      .refine(
        (file) => file && ACCEPTED_IMAGE_TYPES.includes(file[0]?.type),
        "Only Images are Allowed"
      ),
  })
  .required("All Fields are Required");

export { registerSchema };
