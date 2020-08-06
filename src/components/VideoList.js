import React from 'react'
import VideoItems from './VideoItems'

export default function VideoList( { videos, onVideoSelect } ) {

    const listOfVideo = videos.map( (video, id) => <VideoItems key={id} video={video} onVideoSelect={onVideoSelect}/>)
        
    return listOfVideo
}

