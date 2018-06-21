//create new component should produce some html
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/searchbar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/videoList'
import VideoDetail from './components/videoDetail'
import _ from 'lodash'

const YOUTUBE_API_KEY = 'AIzaSyDdE_qNcfc61jy73jIWtWTdKjE5OQhme2E';



//made sure it is put into the dom somehow
//es6 syntax
class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null,
        }
        this.videoSearch('Lasers');
    }

    videoSearch(term){
        //data visible instantly
        YTSearch({ key: YOUTUBE_API_KEY, term: term }, (videos) => {
            // when key and value are the same condense from
            // this.setState({videos: videos})
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }


    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            {/* Passing prop videos to the video list component and giving it the state of the current video array */}
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>    
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));