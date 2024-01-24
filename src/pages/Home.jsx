import { useEffect, useState } from "react";

import VideoCard from "../components/layouts/VideoCard";
import axios from "axios";
import HomeIcon from '../assets/Home.svg'
import subscriptionIcon from '../assets/subscription.svg'
import useStore from "../Store";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState(null);
  
  const fetchVideos = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/videos/");
      setVideos(res.data.data);
      
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
    return () => fetchVideos();
  }, []);


  return (
    <div className="flex flex-col max-h-screen">
  

      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto py-4 px-4 md:px-0">


        {/* SideBar */}

        
        <aside className="flex-col hidden gap-8 px-2 md:flex">

          <div className="flex flex-col items-center justify-center gap-2 text-white rounded-lg cursor-pointer">
            <img src={HomeIcon} alt="" />
            <a href="/" className="text-[8px] ">Home</a>
          </div>
         
          <div className="flex flex-col items-center justify-center gap-2 text-white rounded-lg cursor-pointer">
            <img src={subscriptionIcon} alt="" />
            <a href="/" className="text-[8px] ">Subscription</a>
          </div>

        </aside>

        {/* Right Side */}

        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] p-5">
          {error && <p className="text-4xl text-white"> {error}</p>}
          {loading ? (
            <p className="text-4xl text-white">loading....</p>
          ) : (
            videos?.map((item) => (
              <div key={item._id}>
                <VideoCard
                  title={item.title}
                  thumbnailUrl={item.thumbnail}
                  channelId={item.owner}
                  videoId={item._id}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
