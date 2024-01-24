import { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import VideoCard from "../components/layouts/VideoCard";
import axios from "axios";

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
      <Header />
      <div className="grid grid-cols-[300px,1fr] flex-grow-1 overflow-auto py-4 px-4 md:px-0">


        {/* SideBar */}

        
        <aside className="flex-col hidden gap-4 px-5 text-white md:flex">

          <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>

            <a href="#" className="text-xl capitalize">Liked Videos</a>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
</svg>





            <a href="#" className="text-xl capitalize">Subscriptions</a>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>

            <a href="#" className="text-xl capitalize">Watch History</a>
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
