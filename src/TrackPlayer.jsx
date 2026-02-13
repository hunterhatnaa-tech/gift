import { useState, useRef} from 'react';
import './TrackPlayer.css';

const tracks = [
    {
        title: "Never Let Go",
        artist: "LNGSHOT",
        src: "./LNGSHOT-NeverLetGo.mp3",
    },
    {
        title: "Love Yourself",
        artist: "Justin Bieber",
        src: "./JustinBieber-LoveYourself.mp3",
    },
    {
        title: "Treat You Better",
        artist: "Shawn Mendes",
        src: "./ShawnMendes-TreatYouBetter.mp3",
    },
    {
        title: "Moonstruck",
        artist: "ENHYPEN",
        src: "./ENHYPEN-Moonstruck.mp3",
    },
    {
        title: "Dandelions (Cover)",
        artist: "Ruth B.",
        src: "./dandelions.mp3",
    },
    {
        title: "Butter",
        artist: "BTS",
        src: "./BTS-Butter.mp3",
    },
    {
        title: "That Should Be Me",
        artist: "Justin Bieber",
        src: "./JustinBieber-ThatShouldBeMe.mp3",
    },
    {
        title: "Stitches",
        artist: "Shawn Mendes",
        src: "./ShawnMendes-Stitches.mp3",
    },
    {
        title: "Shout Out",
        artist: "ENHYPEN",
        src: "./ENHYPEN-ShoutOut.mp3",
    },
    {
        title: "Mercy",
        artist: "Shawn Mendes",
        src: "./ShawnMendes-Mercy.mp3",
    },
];

function TrackPlayer() {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlayed] = useState(false);
    const audioRef = useRef(new Audio(tracks[0].src));

    const playTrack = (index) => {
        audioRef.current.pause();
        audioRef.current = new Audio(tracks[index].src);
        setCurrentTrack(index);
        if(isPlaying) audioRef.current.play();
    };

    const togglePlayPause = () => {
        if(isPlaying){
            setIsPlayed(false);
            audioRef.current.pause();
        }else{
            setIsPlayed(true);
            audioRef.current.play();
        }
    };

    const nextTrack = () => {
        const nextIndex = (currentTrack + 1) % tracks.length;
        playTrack(nextIndex);
    };

    const prevTrack = () => {
        const nextIndex = (currentTrack - 1 + tracks.length) % tracks.length;
        playTrack(nextIndex);
    };


    return (
        <div class="background">
            <div class="music-player">
                <div class="song-info">
                    <h2 id="song-title">{tracks[currentTrack].title}</h2>
                    <span id="artist-name">{tracks[currentTrack].artist}</span>
                </div>
                <div class="controls">
                    <button className="btn-control" onClick={prevTrack}>⏮</button>
                    <button className="btn-control play-btn" id="play-pause" onClick={togglePlayPause}>{isPlaying?"⏸" : "▶"}</button>
                    <button className="btn-control" onClick={nextTrack}>⏭</button>
                </div>
            </div>
        </div>
    )
}

export default TrackPlayer
