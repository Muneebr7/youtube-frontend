import { z } from "zod";


const registerSchema = z.object({
    fullName : z.string().min(1, "Full Name is Required"),
    username : z.string().min(6, "username Lenght should be 6 or more"),
    email : z.string().email("Invalid Email"),
    password : z.string().min(8, "password must be 8 character")
}).required("All Fields are Required");


export { registerSchema}