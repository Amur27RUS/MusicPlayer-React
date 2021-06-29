import React, {useState, useRef} from "react";
import './styles/app.scss';

import Player from "./components/Player";
import Song from "./components/Song";
import musicList from './util';
import Library from "./components/Library";
import Nav from "./components/Nav";


function App() {
    const [songs, setSongs] = useState(musicList());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeInfo, setTimeInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0
    });
    const [isLibOpen, setIsLibOpen] = useState(false);

    const audioRef =  useRef(null);

    const songEndHandler = () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        setCurrentSong(songs[(currentIndex + 1) % songs.length]);

    }

    const timeUpdateHandler = (e) => {

        const roundedCurrent = Math.round(e.target.currentTime);
        const roundedDuration = Math.round(e.target.duration);

        const animationPercentage = Math.round((roundedCurrent/roundedDuration) * 100);

        setTimeInfo({...timeInfo, currentTime: e.target.currentTime, duration: e.target.duration, animationPercentage: animationPercentage})

    }


  return (
    <div className={`App ${isLibOpen ? 'library-active' : ''}`}>
      <Nav isLibOpen={isLibOpen} setIsLibOpen={setIsLibOpen}/>
      <Song currentSong={currentSong} />
      <Player songs={songs} setCurrentSong={setCurrentSong} timeInfo={timeInfo} setTimeInfo={setTimeInfo} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library isLibOpen={isLibOpen} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} />

        <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} onEnded={songEndHandler} ref={audioRef} src={currentSong.audio}/>
    </div>
  );
}

export default App;
