import { useForm } from 'react-hook-form';

function Form() {
   const {register , handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
      
      
        
    };



  return (
    <>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
              <input {...register("fullName")} placeholder='Enter Your Full Name' className='p-2 '/>
              <input {...register("username")} placeholder='Username' className='p-2 '/>
              <input type='email' {...register("email")} placeholder='Enter Your Email' className='p-2 '/>
              <input type='password' {...register("password")} placeholder='Create Password' className='p-2 '/>
              
              <button className='p-2 text-white bg-red-600'>Submit</button>

          </form>
          </>
  )
}

export default Form
