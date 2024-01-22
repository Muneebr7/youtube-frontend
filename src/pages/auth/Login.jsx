import LoginForm from "../../components/LoginForm"
import Logo from "../../assets/YoutubeLogo.svg";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <section className="grid h-screen place-items-center">

    <div className="flex flex-col w-1/4 gap-1 p-8 border rounded-md shadow bg-white/90 shadow-white/90">  
    <div className="flex items-center gap-2"> <img src={Logo} alt="Youtube Logo"  className="w-12"/> <span className="text-2xl font-bold capitalize">Youtube</span> </div>
        <p className="text-xl text-gray-800 capitalize">Enter Your Username and Password to Login</p>

    {/* Form */}

    <LoginForm />

    <hr className="mt-4 border border-gray-300" />

      <div className="flex justify-center w-full mt-4">
          <Link to="/register" className="font-bold text-red-600">Click Here to Register</Link>
      </div>
    

    </div>

    

    </section>
  )
}
