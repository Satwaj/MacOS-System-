import React from 'react'
import Macwindow from './Macwindow'
import "./spotify.scss";

const Spotify = ({windowname,setWindowsState}) => {
  return (
    <Macwindow windowName={windowname} setWindowsState={setWindowsState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{"border-radius":"12px"}}
          src="https://open.spotify.com/embed/playlist/4udjomDQ9hesPxbCrXnb14?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </Macwindow>
  );
}

export default Spotify
