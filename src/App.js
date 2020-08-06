import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import youtube from './api/youtube'
import SeachBar from './components/SearchBar'
import VideoDetails from './components/VideoDetails'

class App extends Component {

    handleSubmit = async ( searchTerm ) => {
        const response = await youtube.get('search', {  params: {
            //part=snippet
            part: 'snippet',
            maxResults: 5, 
            key: [API keys]
            q : searchTerm
        }})
        // console.log( response )
        console.log( response.data.items)
    }

    render() {
        
        return (
            <Grid justify="center" container spacing={1}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}> 
                            <SeachBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* Video lists */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App
