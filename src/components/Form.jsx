import { useEffect, useState } from 'react';

function Form() {
    const [form, setForm] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
      });

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({
          fullName: e.target["fullName"].value,
          username: e.target["username"].value,
          email: e.target["email"].value,
          password: e.target["password"].value,
        });
      
        
    };

    useEffect(()=>{
        console.log(form)
    } , [form])

  return (
    <>
           <form
            className="mt-7 text-primary w-[50rem] flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="p-2 w-full rounded-md"
              name="fullName"
            />
            <input
              type="text"
              placeholder="Enter Your Username"
              className="p-2 w-full rounded-md "
              name="username"
            />
            <input
              type="text"
              placeholder="Enter Email"
              className="p-2 w-full rounded-md "
              name="email"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="p-2 w-full rounded-md"
              name="password"
            />
            <input type="file" className="p-2 w-full rounded-md" />
            <input type="file" className="p-2 w-full rounded-md" />

            <button className="p-2 text-white bg-red-500" type="submit">
              Register
            </button>
          </form>
          </>
  )
}

export default Form
