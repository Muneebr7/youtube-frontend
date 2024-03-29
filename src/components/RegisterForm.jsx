import { useForm } from "react-hook-form";
import { registerSchema } from "../utils/schema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import axios from "axios";
import UserSvg from "../assets/user.svg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCover] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        "/api/users/register",
        {
          fullName: data.fullName,
          email: data.email,
          username: data.username,
          password: data.password,
          avatar: data.avatar[0],
          coverImage: data.coverImage[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.statusCode === 200) {
        toast.success("Success");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data?.message);
      navigate("/login");
      console.log(error.response.data);
    }
  };

  const handleFiles = (e, file) => {
    const image = e.target.files[0];

    if (image) {
      const fileUrl = URL.createObjectURL(image);

      if (file === "avatar") {
        setAvatar(fileUrl);
      }
      if (file === "coverImage") {
        setCover(fileUrl);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full gap-3"
      >
        {/* Cover Image and Avatar Image */}
        <div className="relative w-full p-20 mt-6 border">
          <div className="absolute bottom-[-20px] z-10 grid w-32 h-32 p-4 overflow-hidden bg-white rounded-full left-10 place-items-center">
            <img
              src={avatar ? avatar : UserSvg}
              alt="Upload avatar"
              className="absolute inset-0 object-cover w-full h-full rounded-full"
            />
            <input
              type="file"
              {...register("avatar")}
              className="absolute inset-0 z-50 rounded-full opacity-0 cursor-pointer"
              onChange={(e) => handleFiles(e, "avatar")}
            />
          </div>

          {/* Cover Image */}
          <div className="absolute inset-0 z-0 flex items-end justify-center">
            {coverImage && (
              <>
                <img src={coverImage} className="object-cover w-full h-full" />
              </>
            )}
            {!coverImage ? (
              <>
                <p className="ml-20 text-white/70"> Please Upload Cover Image </p>
              </>
            ) : (
              ""
            )}
            <input
              type="file"
              {...register("coverImage")}
              className="absolute inset-0 z-50 rounded-full opacity-0 cursor-pointer"
              onChange={(e) => handleFiles(e, "coverImage")}
            />
          </div>
        </div>

        {/* Form Wrapper */}

        <div className="flex flex-col w-full gap-4 mt-6">
          {errors.avatar?.message && (
            <p className="text-sm text-red-500">{errors.avatar?.message}</p>
          )}

          {errors.coverImage?.message && (
            <p className="text-sm text-red-500">{errors.coverImage?.message}</p>
          )}

          <input
            {...register("fullName")}
            placeholder="Enter Your Full Name"
            className="p-2 text-sm rounded-md focus:outline-none focus:border focus:border-red-800 text-accent"
          />
          {errors.fullName?.message && (
            <>
              <p className="text-sm text-red-500">{errors.fullName?.message}</p>
            </>
          )}
          <input
            {...register("username")}
            placeholder="Username"
            className="p-2 text-sm rounded-md focus:outline-none focus:border focus:border-red-800 text-accent"
          />
          {errors.username?.message && (
            <>
              <p className="text-sm text-red-500">{errors.username?.message}</p>
            </>
          )}
          <input
            {...register("email")}
            placeholder="Enter Your Email"
            className="p-2 text-sm rounded-md focus:outline-none focus:border focus:border-red-800 text-accent "
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
            className="p-2 text-sm rounded-md focus:outline-none focus:border focus:border-red-800 text-accent "
          />
          {errors.password?.message && (
            <>
              <p className="text-sm text-red-500">{errors.password?.message}</p>
            </>
          )}

          <button
            disabled={isSubmitting}
            className={`self-center p-2 px-16 text-white bg-red-600 rounded-md ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
