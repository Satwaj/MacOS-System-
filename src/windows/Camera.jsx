import React, { useEffect, useRef, useState } from "react";
import Macwindow from "./Macwindow";
import "./camera.scss";

const Camera = ({ windowname, setWindowsState }) => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const [recording, setRecording] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      });
  }, []);

  const startRecording = () => {
    const stream = videoRef.current.srcObject;
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorderRef.current = mediaRecorder;
    chunksRef.current = [];

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunksRef.current.push(e.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "recording.webm";
      a.click();

      URL.revokeObjectURL(url);
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <Macwindow windowName={windowname} setWindowsState={setWindowsState}>
      <div className="camera-window">
        <video ref={videoRef} autoPlay playsInline />

        <div className="camera-controls">
          {!recording ? (
            <button className="record" onClick={startRecording}>
              ⏺ Record
            </button>
          ) : (
            <button className="stop" onClick={stopRecording}>
              ⏹ Stop
            </button>
          )}
        </div>
      </div>
    </Macwindow>
  );
};

export default Camera;
