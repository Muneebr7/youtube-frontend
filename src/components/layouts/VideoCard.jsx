import React from 'react'

export default function VideoCard({videoId, title, channelId, views , postedAt, duration, thumbnailUrl, videoUrl }) {
  return (
    <div className='flex flex-col gap-2 text-white'>
        <a href={`video/${videoId}`} className='relative aspect-video'>
            <img src={thumbnailUrl} className='block object-cover w-full h-[190px] rounded-xl' />
            <div className='absolute p-2 bottom-1 right-.5 text-sm'>
            {duration}
            </div>
        </a>

        <div className='flex gap-2'>          
            <div>
                    <a href={videoId} className='text-sm font-bold'> {title}</a>
            </div>
        </div>

    </div>
  )
}
