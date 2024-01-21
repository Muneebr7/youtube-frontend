import { useForm } from "react-hook-form";
import { registerSchema } from "../utils/schema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import axios from "axios";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "/api/users/register",
        {
          fullName: data.fullName,
          email: data.email,
          username: data.username,
          password: data.password,
          avatar: data.avatar[0],
          coverImage : data.coverImage[0]
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div>
          <span> Upload Avatar </span>
          <input type="file" {...register("avatar")} />
          {errors.avatar?.message && (
            <p className="text-sm text-red-500">{errors.avatar?.message}</p>
          )}

<input type="file" {...register("coverImage")} />
        </div>

        <input
          {...register("fullName")}
          placeholder="Enter Your Full Name"
          className="p-2 "
        />
        {errors.fullName?.message && (
          <>
            <p className="text-sm text-red-500">{errors.fullName?.message}</p>
          </>
        )}
        <input
          {...register("username")}
          placeholder="Username"
          className="p-2 "
        />
        {errors.username?.message && (
          <>
            <p className="text-sm text-red-500">{errors.username?.message}</p>
          </>
        )}
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

        <button className="p-2 text-white bg-red-600 ">Submit</button>
      </form>
    </>
  );
}

export default Form;
