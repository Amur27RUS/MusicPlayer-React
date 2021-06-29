import React from 'react';
import LibrarySong from "./LibrarySong";

const Library = ({ isLibOpen, isPlaying, audioRef, songs, setCurrentSong}) => {


    return(
        <div className={`library ${isLibOpen ? 'active-lib' : ''}`}>
            <h2>Library</h2>
            <div className={'library-songs'}>
                {songs.map(song =>{
                    return <LibrarySong isPlaying={isPlaying} audioRef={audioRef} setCurrentSong={setCurrentSong} key={song.id} song={song} songs={songs}/>
                })}

            </div>

        </div>
    );
}

export default Library;