import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioWaveform = () => {
  return (
    <div className="rounded-lg p-2 sm:p-4 opacity-80"> {/* Riduci il padding su dispositivi mobili */}
      <ReactAudioPlayer
        src="/audio/audio.mp3"
        autoPlay={false} 
        controls 
        className="w-full opaque"
      />
    </div>
  );
};

export default AudioWaveform;