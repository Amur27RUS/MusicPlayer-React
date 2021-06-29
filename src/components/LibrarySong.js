import React from "react";

const LibrarySong = ({ isPlaying, audioRef, song, setCurrentSong, songs }) =>{

    const changeSongHandler = () =>{
        songs.map((song) =>{
            return song.active = false;
        })
        song.active = true;

        setCurrentSong(song);
        if(isPlaying){
            const audioPromise = audioRef.current.play();
            if(audioPromise !== undefined){
                audioPromise.then((audio) =>{
                    audioRef.current.play();
                })
            }
        }
    }

    return(
        <div onClick={changeSongHandler} className={`library-song ${song.active ? 'selectedSong' : ''}`}>
            <img alt={'songCover'} src={song.cover}/>
            <div className={'song-description'}>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;