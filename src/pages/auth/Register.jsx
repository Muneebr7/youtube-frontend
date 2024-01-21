
import Logo from "../../assets/YoutubeLogo.svg";
import Form from "../../components/Form";

export default function Register() {
 
  return (
    <div className="grid h-screen place-items-center ">
      <div className="p-12 border bg-secondary border-primary/10">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="YouTube Logo" className="w-20" />
          <h1 className="text-5xl text-white">YouTube</h1>
        </div>

        <p className="my-4 text-lg text-primary">
          Welcome To Youtube Clone by Muneeb ur Rehman
        </p>

        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
