import { useForm } from "react-hook-form";
import { registerSchema } from "../utils/schema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import axios from "axios";
import UserSvg from "../assets/user.svg";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCover] = useState(null);

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

      console.log(res.data);
    } catch (error) {
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

  const handleCover = (e) => {
    const coverFile = e.target.files[0];
    if (coverFile) {
      const coverImageUrl = URL.createObjectURL(coverFile);
      setCover(coverImageUrl);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full gap-3"
      >
        <div className="relative w-full p-20 mt-6 border border-gray-300">
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
                <p className="text-black"> Please Upload Cover Image </p>
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

        <div className="flex flex-col w-full gap-3 mt-4">
          {errors.avatar?.message && (
            <p className="text-sm text-red-500">{errors.avatar?.message}</p>
          )}

          {errors.coverImage?.message && (
            <p className="text-sm text-red-500">{errors.avatar?.message}</p>
          )}

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

          <button className="self-center p-2 px-16 text-white bg-red-600">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
