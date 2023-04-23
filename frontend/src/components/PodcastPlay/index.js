import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../Headers/Header.js";
import PodcastCard from "../Podcasts/PodcastCard";
import HomePodcasts from "../Podcasts/HomePodcasts";
import Player from "../audio-player/AudioPlayer.js";
import { useSelector } from "react-redux";
// for reducers
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../State/index.js";
import { tracks } from "../data/tracks.js";
import { BsMusicNoteBeamed } from "react-icons/bs";

const PodcastPlay = () => {
  const dispatch = useDispatch();
  const { updateTrackIndex, updateIsPlaying } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const trackIndex = useSelector((state) => state.trackIndex);
  const isPlaying = useSelector((state) => state.isPlaying);
  const { state } = useLocation();
  const playId = state.id;
  console.log("trackIndex is ", trackIndex);
  const currentTrack = tracks[playId - 1];
  const playSong = () => {
    updateTrackIndex(playId - 1);
    updateIsPlaying(true);
    console.log(trackIndex);
  };
  return (
    <div className="podcastWrapper">
      {" "}
      <div className="audio-info">
        <div className="audio-image-wrapper">
          {currentTrack.thumbnail ? (
            <img
              className="audio-image"
              src={currentTrack.thumbnail}
              alt="audio avatar"
            />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className="audio-text">
          <div className="audio-title">{currentTrack.title}</div>
          <div className="audio-author">{currentTrack.author}</div>
          <button onClick={playSong}>Play new song</button>
        </div>
      </div>
      <div className="homeFooter">
        <Player></Player>
      </div>
    </div>
  );
};

export default PodcastPlay;
