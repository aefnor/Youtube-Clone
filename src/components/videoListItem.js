import React from 'react'

//Pulling properties off the props object
const VideoListItem = ({video, onVideoSelect}) =>{
    //identical to the above if you were passing in (props) instead of {video}
    // const video = props.video
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return(
        //onClick is the callback
        <li onClick={() => onVideoSelect(video)}className = 'list-group-item'>
            <div className = 'video-list media'>
            {/* ================================== */}
                <div className = 'media-left'>
                    <img className = "media-object" src={imageUrl}/>
                </div>

                <div className='media-body'>
                    <div className='media-heading'>
                        {video.snippet.title}
                    </div>
                </div>
            {/* ================================== */}
            </div>

        </li>
    )
};
export default VideoListItem