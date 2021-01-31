import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ setCurrentSong, songs, audioRef, isPlaying, setSongs,libraryStatus, setLibraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? 'library-active' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            isPlaying={isPlaying}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            song={song}
            songs={songs}
            setSongs={setSongs}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
