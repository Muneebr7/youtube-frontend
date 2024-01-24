import axios from 'axios'
import { useEffect, useState ,useRef } from 'react'
import { useParams } from 'react-router-dom'
import VideoPlayer from '../components/VideoPlayer'


export default function SingleVideo() {

    const [videoDetails , setVideoDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const playerRef = useRef(null);

    const {videoId} = useParams()

    const fetchVideoDetails = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`/api/videos/${videoId}`)
            setVideoDetails(res.data.data)
            setLoading(false)
            console.log(res.data.data)
        } catch (error) {
                console.log(error)
                setLoading(false)
        }
    }

    useEffect(()=>{
        fetchVideoDetails()

        return ()=>{
            fetchVideoDetails()
        }
    },[])


    
    

    const videoJsOptions = {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: `${videoDetails?.videoFile}`,
        type: 'video/mp4'
      }]
    };
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // You can handle player events here, for example:
      player.on('waiting', () => {
        videojs.log('player is waiting');
      });
  
      player.on('dispose', () => {
        videojs.log('player will dispose');
      });
    };
  


  return (
    <main className='container p-10'>  
        {
            loading && <p className='text-xl text-white'> Loading...</p>
        }
        
        <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
        
      
    </main>
  )
}
