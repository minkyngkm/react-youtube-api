import React, { Component } from 'react'
import youtube from './api/youtube'
import Header from './components/Header'
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
            key: "AIzaSyCHPJ1nrDXH5jooUoJ2tpqUKI-MAW9nC38",
            q: searchTerm
        }})
        // console.log( response )
        console.log( response.data.items)
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
    }

    componentDidMount(){
        this.handleSubmit("Seoul")
    }
    

    render() {
        const { selectedVideo,  videos} = this.state
        return (
            <div className="App">
                <Header> <SeachBar onFormSubmit={this.handleSubmit}/></Header>
                <main className="main">
                    <VideoDetails video={selectedVideo}/>
                    <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                </main>
            </div>
        )
    }
}

export default App
