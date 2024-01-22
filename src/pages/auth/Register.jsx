
import Logo from "../../assets/YoutubeLogo.svg";
import Form from "../../components/Form";

export default function Register() {
 
  return (
    <>
        <section className="grid h-screen place-items-center">

        <div className="flex flex-col w-1/3 gap-1 p-8 border rounded-md shadow bg-white/90 shadow-white/90">  
        <div className="flex items-center gap-2"> <img src={Logo} alt="Youtube Logo"  className="w-12"/> <span className="text-2xl font-bold capitalize">Youtube</span> </div>
            <p className="text-xl text-gray-800 capitalize">Please enter your details to register</p>

        {/* Form */}

        <Form />

        </div>

        

        </section>
    
    
    </>
  );
}
