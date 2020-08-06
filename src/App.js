import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import youtube from './api/youtube'
import SeachBar from './components/SearchBar'
import VideoDetails from './components/VideoDetails'
import VideoList from './components/VideoList'

class App extends Component {
    state ={
        videos:[],
        selectedVideo: null
    }
    onVideoSelect = ( video ) => {
        this.setState({ selectedVideo: video})
    }

    handleSubmit = async ( searchTerm ) => {
        const response = await youtube.get('search', {  params: {
            //part=snippet
            part: 'snippet',
            maxResults: 5, 
            key: [API keys],
            q: searchTerm
        }})
        // console.log( response )
        console.log( response.data.items)
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
    }

    render() {
        const { selectedVideo,  videos} = this.state
        return (
            <Grid justify="center" container spacing={1}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}> 
                            <SeachBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App
