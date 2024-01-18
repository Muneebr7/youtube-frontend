import Logo from '../../assets/YoutubeLogo.svg'

export default function Register() {
  return (
    <div className="grid place-items-center h-screen ">
        <div className="bg-secondary border border-primary/10 p-12">
          <div className="flex gap-2 items-center justify-center">  
              <img src={Logo} alt="YouTube Logo" className='w-20'/>
              <h1 className='text-white text-5xl'>YouTube</h1>
          </div>

        <p className='text-primary text-lg'>Welcome To Youtube Clone by Muneeb ur Rehman</p>
        
          <div>

      <form className='mt-7 text-primary w-[50rem] flex flex-col gap-2' > 
          <input type="text" placeholder='Enter Your Full Name' className='p-2 w-full rounded-md'/>
          <input type="text" placeholder='Enter Your Username' className='p-2 w-full rounded-md'/>
          <input type="text" placeholder='Enter Email' className='p-2 w-full rounded-md'/>
          <input type="text" placeholder='Enter Password' className='p-2 w-full rounded-md'/>
          <input type="file"  className='p-2 w-full rounded-md'/>
          <input type="file"  className='p-2 w-full rounded-md'/>
        </form>            
          </div>




        </div>
    </div>
  )
}
