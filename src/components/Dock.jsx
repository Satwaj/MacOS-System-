import React from "react";
import "./dock.scss";

const Dock = ({  setWindowsState }) => {
  return (
    <footer className="dock">


      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="" />
      </div>


      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, note: true }));
        }}
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="" />
      </div>


      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: true }));
        }}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>


      <div
        onClick={() => {
          window.open("https://calendar.google.com/", "_blank");
        }}
        className="icon calender"
      >
        <img src="/doc-icons/calender.svg" alt="" />
      </div>


      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="" />
      </div>


      <div
        onClick={() => {
          window.open("mailto:satwajbachhav04@gmail.com", "_blank");
        }}
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/satwaj-bachhav-50825a281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          );
        }}
        className="icon link"
      >
        <img src="/doc-icons/link.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, cli: true }));
        }}
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>

      <div
      onClick={()=>{
        setWindowsState((state)=>({
          ...state, camera: true}));
      }}
      
      className="icon camera">
        <img src="/public/doc-icons/apple.svg" alt="" />
      </div>




    </footer>
  );
};

export default Dock;
