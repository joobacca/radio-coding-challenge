"use client";

import React from "react";
import BaseReactPlayer from "react-player/file";

type AudioStreamProps = {
  url: string;
};

function AudioPlayer({ url }: AudioStreamProps) {
  return (
    <BaseReactPlayer
      url={url}
      controls
      playing
      loop
      config={{ forceAudio: true }}
      playsinline
      height={53}
    />
  );
}

export default AudioPlayer;
