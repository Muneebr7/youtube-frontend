import LoginForm from "../../components/LoginForm";
import Logo from "../../assets/YoutubeLogo.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="grid h-screen place-items-center">
      <div className="flex flex-col w-1/4 gap-4 p-8 border border-accent rounded-md shadow bg-[#1d1d1d] text-white">
        <div className="flex items-center gap-2 ">
          {" "}
          <img src={Logo} alt="Youtube Logo" className="w-40" />
        </div>
        <p className="text-xl capitalize text-white/70">
          Enter Your Username and Password to Login
        </p>

        {/* Form */}

        <LoginForm />

        <hr className="mt-4 border border-white/30" />

        <div className="flex justify-center w-full mt-4">
          <Link to="/register" className="text-red-600 rounded-md ">
            Click Here to Register
          </Link>
        </div>
      </div>
    </section>
  );
}
