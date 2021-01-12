import axios from 'axios'

const KEY = "AIzaSyCITwlMsHb61TUy8pwOFad1jh2Dl3U4ZjU"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
})