import React from 'react'
import { Paper, Typography } from '@material-ui/core'

function VideoDetails( { video } ) {

    if(!video) return<div> Loading... </div>  

    console.log(video.id.videoId)

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

   
    return (
        <>
        <h1> This is from VideoDetails component </h1>
        <Paper style={{height: "70%"}}>
            <iframe src={videoSrc} height="100%" width="100%" title="Video Player"></iframe>
        </Paper>
    

        <Paper stype={{padding: "15px"}}>
            <Typography variant="h4">  {video.snippet.title}{video.snippet.channelTitle} </Typography>
            <Typography variant="subtitle1"> {video.snippet.channelTitle} </Typography>
            <Typography variant="subtitle2"> {video.snippet.description} </Typography>
        </Paper>
        </> 
    )
}

export default VideoDetails
