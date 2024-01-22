import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { loginSchema } from "../utils/schema.js";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) });


  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        "/api/users/login",
        {
          email: data.email,
          password: data.password,
        },
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };


  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full gap-3"
      >
        {/* Form Wrapper */}

        <div className="flex flex-col w-full gap-3 mt-4">
          <input
            {...register("email")}
            placeholder="Enter Your Email"
            className="p-2 "
          />
          {errors.email?.message && (
            <>
              <p className="text-sm text-red-500">{errors.email?.message}</p>
            </>
          )}
          <input
            type="password"
            {...register("password")}
            placeholder="Create Password"
            className="p-2 "
          />
          {errors.password?.message && (
            <>
              <p className="text-sm text-red-500">{errors.password?.message}</p>
            </>
          )}

          <button
            disabled={isSubmitting}
            className="self-center p-2 px-16 text-white bg-red-600"
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
