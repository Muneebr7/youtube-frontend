
import Logo from "../../assets/YoutubeLogo.svg";
import Form from "../../components/Form";

export default function Register() {
 
  return (
    <div className="grid place-items-center h-screen ">
      <div className="bg-secondary border border-primary/10 p-12">
        <div className="flex gap-2 items-center justify-center">
          <img src={Logo} alt="YouTube Logo" className="w-20" />
          <h1 className="text-white text-5xl">YouTube</h1>
        </div>

        <p className="text-primary text-lg">
          Welcome To Youtube Clone by Muneeb ur Rehman
        </p>

        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
