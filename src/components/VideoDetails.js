import React from 'react'
import './Video.css'
function VideoDetails({ video }) {

    if (!video) return <div className="loading"> Loading... </div>

    console.log(video.id.videoId)

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`


    return (
        <div className="video-left">
            <div className="video">
                <iframe src={videoSrc} height="100%" width="100%" title="Video Player"></iframe>
            </div>


            <div className="video-info">
                <div className="video-title">
                    <h2>{video.snippet.title}{video.snippet.channelTitle}</h2>

                    <ul className="title-contents">
                        <li> <i className="fas fa-thumbs-up"></i> </li>
                        <li> <i className="fas fa-thumbs-down"></i> </li>
                        <li> <i className="fas fa-share"></i> Share </li>
                        <li> <i className="fas fa-plus"></i> Save </li>
                        <li> <i className="fas fa-ellipsis-h"></i></li>
                    </ul>
                </div>
                <div className="subscribe">
                    <div className="subscribe-img">

                    </div>
                    <div className="subscribe-contents">

                        <div className="subscribe-info"> {video.snippet.channelTitle}</div>
                        <div className="subscribe-description"> {video.snippet.description} </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetails
