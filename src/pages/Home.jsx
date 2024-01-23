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
      setError(error.message)
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
      <div className="grid grid-cols-[300px,1fr] flex-grow-1 overflow-auto py-4">
        <div className="text-4xl text-white">Side bar</div>

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
