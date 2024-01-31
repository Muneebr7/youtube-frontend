import { useEffect } from "react"
import useStore from "../../Store"

export default function MyAccount() {

const { user } = useStore()

useEffect(()=>{
        console.log(user)
},[])


  return (
    <section className=" max-w-[1100px] flex flex-col gap-4 mx-auto">

            <img src={user?.coverImage} alt={user?.username} className="object-cover h-[210px] w-full mx-auto"/>
            
            <div className="flex gap-8">
                        <img src={user?.avatar} alt={user?.username} className="object-cover h-40 rounded-full" />
                         {/* Account  Details */}
                            <div className="flex flex-col gap-2">
                                    <h1 className="text-4xl font-bold text-white">{user?.fullName}</h1>
                                    <h3 className="text-sm capitalize text-white/80"> @{user?.username}</h3>

                                    <button className="p-2 mt-auto text-sm rounded-md bg-secondary text-white/90">Edit Profile</button>
                        </div>
            </div>

            <div className="mt-2 border-t border-white/30">
                        <ul className="flex gap-8 mt-2 text-md text-white/90">
                            <li> All Videos  </li>
                            <li> Playlist </li>
                        </ul>

            </div>

     
    </section>
  )
}
