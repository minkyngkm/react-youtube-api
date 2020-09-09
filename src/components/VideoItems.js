import React from 'react'
import './Video.css'

export default function VideoItems({ video, onVideoSelect }) {
    return (
        <div className="video-items">
            <div className="video-items-img">  
                <img src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
            </div>
           
            <div className="video-items-text">
                {video.snippet.title}
            </div>

        </div>
    )
}
