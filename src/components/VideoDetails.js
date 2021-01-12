import React from 'react'

const VideoDetails = ({video}) =>{

    if(!video)
        return <div></div>

    const videoSnip = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <div className="ui segment">
            <div className="ui embed">
                <iframe title={video.snippet.title} src={videoSnip} />
            </div>
            <h4 className="ui header">{video.snippet.title}</h4>
            {video.snippet.description}
        </div>
    )
}

export default VideoDetails