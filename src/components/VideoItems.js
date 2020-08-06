import React from 'react'
import { Grid, Paper, Typography} from '@material-ui/core'

export default function VideoItems({ video, onVideoSelect }) {
    return (
        <Grid>
            <Paper style={{cursor:"pointer"}} onClick={ ()=> { onVideoSelect(video) }}>
                <img src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
            </Paper>
            <Typography variant="subtitle1">
                {video.snippet.title}
            </Typography>

        </Grid>
    )
}
