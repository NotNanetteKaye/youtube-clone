import React from 'react';
import axios from 'axios';

const GetRelatedVideos = () => {

    const [relatedVideos, setRelatedVideos] = useState([]);

    const GetRelatedResults = async () => {
        try {
            let response = await axios.get(
              `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=5`
            );
            setRelatedVideos(response.data.items);
          } catch (error) {
            console.log(error.response.data);
          }
    }

    return (
        <div>

        </div>
    )
}

export default GetRelatedVideos