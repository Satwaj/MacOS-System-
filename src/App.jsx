import React from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./windows/Github";
import Note from "./windows/Note";
import Resume from "./windows/Resume";
import Spotify from "./windows/Spotify";
import Cli from "./windows/Cli";
import { useState } from "react";

function App() {
  const [windowsState, setwindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setwindowsState} />
      {windowsState.github && (
        <Github
          windowName="github"
          windowsState={windowsState}
          setWindowsState={setwindowsState}
        />
      )}
      {windowsState.note && (
        <Note
          windowName="note"
          windowsState={windowsState}
          setWindowsState={setwindowsState}
        />
      )}
      {windowsState.resume && (
        <Resume
          windowName="resume"
          windowsState={windowsState}
          setWindowsState={setwindowsState}
        />
      )}
      {windowsState.spotify && (
        <Spotify
          windowName="spotify"
          windowsState={windowsState}
          setWindowsState={setwindowsState}
        />
      )}
      {windowsState.cli && (
        <Cli
          windowName="cli"
          windowsState={windowsState}
          setWindowsState={setwindowsState}
        />
      )}
    </main>
  );
}

export default App;
