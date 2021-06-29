import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({ setCurrentSong, songs, timeInfo, setTimeInfo, audioRef, currentSong, isPlaying, setIsPlaying}) =>{

    useEffect(()=>{
        songs.map((song) => {
            if(song.id === currentSong.id){
                song.active = true;
            }else{
                song.active = false;
            }
        })

        if(isPlaying){
            const audioPromise = audioRef.current.play();
            if(audioPromise !== undefined){
                audioPromise.then((audio) =>{
                    audioRef.current.play();
                })
            }
        }

    });

    const formatTime = (time) => {
        return(
            Math.floor(time/60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }

    const playSongHandler = () =>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const dragHandler = (e) =>{
        setTimeInfo({...timeInfo, currentTime: e.target.value})
        audioRef.current.currentTime = e.target.value;
    }

    const skipTrackHandler = async (direction) =>{
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'forward'){
           await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }else if(direction === 'back'){
            if(currentIndex !== 0){
                setCurrentSong(songs[(currentIndex - 1)]);
            }else{
                setCurrentSong(songs[songs.length-1]);
            }
        }
    }

    const trackAnim = {
        transform: `translate(${timeInfo.animationPercentage}%)`
    }

    return(
        <div className={'player'}>
            <div className={'time-control'}>
                <p>{formatTime(timeInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className={'track'}>
                    <input onChange={dragHandler} type={'range'} min={0} max={timeInfo.duration || 0} value={timeInfo.currentTime}/>
                    <div style={trackAnim} className={'animate-track'}></div>
                </div>
                <p>{formatTime(timeInfo.duration)}</p>
            </div>

            <div className={'play-control'}>
                <FontAwesomeIcon className={'skip-back'} onClick={() => skipTrackHandler('back')} size={'2x'} icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className={'play'} size={'2x'} icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className={'skip-forward'} onClick={() => skipTrackHandler('forward')} size={'2x'} icon={faAngleRight}/>
            </div>
        </div>
    );
}

export default Player;