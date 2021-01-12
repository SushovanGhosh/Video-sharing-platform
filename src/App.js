import React from 'react'
import SearchBar from './components/SearchBar'
import Youtube from './components/Youtube';
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'

class App extends React.Component{

    state={videos: [], selectedVideo: null}

    onTermSubmit = async term =>{
        const response = await Youtube.get('/search', {
            params:{
                q: term
            }
        })
        this.setState({videos: response.data.items})
        console.log(response.data.items)
    } 
    
    onSelectedVideo = video =>{
        this.setState({selectedVideo: video})
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                Found: {this.state.videos.length} 
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList onSelectedVideo = {this.onSelectedVideo} videos={this.state.videos} />           
            </div>
        )
    }
}

export default App
