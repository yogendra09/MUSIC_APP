import React from "react";
import ReactAudioPlayer from "react-audio-player";

const CurrentSong = () => {
  return (
    <div>
      <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls  controlsList volume="10"/>
    </div>
  );
};

export default CurrentSong;
