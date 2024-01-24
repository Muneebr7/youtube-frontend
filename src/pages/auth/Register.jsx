
import { Link } from "react-router-dom";
import Logo from "../../assets/YoutubeLogo.svg";
import Form from "../../components/RegisterForm";


export default function Register() {
 
  return (
    <>
        <section className="grid h-screen place-items-center">

        <div className="flex flex-col w-1/3 gap-4 p-8 border border-accent rounded-md shadow bg-[#1d1d1d] text-white/80">  
        <div className="flex items-center gap-2"> <img src={Logo} alt="Youtube Logo"  className="w-40"/> </div>
            <p className="text-xl capitalize">Please enter your details to register</p>

        {/* Form */}

        <Form />


        <hr className="mt-4 border border-white/30" />

<div className="flex justify-center w-full mt-4">
    <Link to="/login" className="text-red-600">Already registered? Login now..</Link>
</div>

        </div>

        

        </section>
    
    
    </>
  );
}
