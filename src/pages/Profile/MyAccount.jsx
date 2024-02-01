import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import useStore from "../../Store";

export default function MyAccount() {

    const {isAuth} = useStore()
    const {username} = useParams()

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async () => {
      try {
        const response = await axios.get(`/api/users/channel/${username}`);
        return response?.data?.data
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(()=>{
    console.log(user)
  },[user])

  


  return (
    <section className=" max-w-[1100px] flex flex-col gap-4 mx-auto">
      <img
        src={user?.coverImage}
        alt={username}
        className="object-cover h-[210px] w-full mx-auto"
      />

      <div className="flex gap-8">
        <img
          src={user?.avatar}
          alt={username}
          className="object-cover h-40 rounded-full"
        />
        {/* Account  Details */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-white">{user?.fullName}</h1>

          <div className="flex gap-2">
          <span className="text-sm capitalize text-white/80">
            @{username}
          </span>
          <span className="text-sm capitalize text-white/80">
            Subscribers {user?.subscribersCount}
          </span>
          <span className="text-sm capitalize text-white/80">
            Subscribs To {user?.subscribeTo}
          </span>
          </div>

        {
            isAuth && <button className="p-2 mt-auto text-sm rounded-md bg-secondary text-white/90">
            Edit Profile
          </button>
        }
          
        </div>
      </div>

      <div className="mt-2 border-t border-white/30">
        <ul className="flex gap-8 mt-2 text-md text-white/90">
          <li> All Videos </li>
          <li> Playlist </li>
        </ul>
      </div>
    </section>
  );
}
