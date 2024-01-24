import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { loginSchema } from "../utils/schema.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useStore from "../Store.js";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const isLogin = useStore(state => state.isLogin)

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/users/login", {
        email: data.email,
        password: data.password,
      });

      if (res.data.statusCode === 200) {
        isLogin(res.data.data.user)
        const fullName = res.data.data.user.fullName;
        toast.success(`Welcome ${fullName} Login Success`);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
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
            className="p-2 text-sm rounded-md focus:outline-none focus:border focus:border-red-800 text-accent"
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
            className="p-2 text-sm rounded-md focus:outline-none focus:border focus:border-red-800 text-accent"
          />
          {errors.password?.message && (
            <>
              <p className="text-sm text-red-500">{errors.password?.message}</p>
            </>
          )}

          <button
            disabled={isSubmitting}
            className={`self-center mt-2 p-2 px-16 text-white bg-red-700 rounded-md ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
