import {ButtonContainer, SliderContainer, VideoContainer} from "./styles";
import VideoLooper from "react-video-looper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import LoopSlider from "./LoopSlider/LoopSlider";
import {resetLoops, setVideoLoopEnd} from "../../../../redux/slices/content/PageEditionSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

const VideoEditor = () => {

    const dispatch = useDispatch()
    const [video, setVideo] = useState("")
    const [duration, setDuration] = useState(0)
    const {id, fileName, loopStart, loopEnd} = useSelector(state => state.content.inEdition.page.video)

    useEffect(() => {
        dispatch(resetLoops)
    }, [video, dispatch])

    const getInitialLoopEnd = (videoURL) => {
        const videoElement = document.createElement('video')
        videoElement.src = videoURL
        videoElement.onloadedmetadata = () => {
            const duration = Number(videoElement.duration.toFixed(0))
            setDuration(duration)
            dispatch(setVideoLoopEnd(duration))
        }
    }

    const handleVideoChange = (event) => {
        event.preventDefault()
        let uploadedVideo = event.target.files[0]
        let videoURL = URL.createObjectURL(uploadedVideo)
        setVideo(videoURL)
        getInitialLoopEnd(videoURL)
    }

    const handleAudioChange = (event) => {
        event.preventDefault()
    }

    return (
        <VideoContainer>
            {(video && loopEnd) ? <VideoLooper source={video}
                                               start={loopStart}
                                               end={loopEnd}
                                               autoPlay={true}
                                               muted={true}
                                               width={"100%"}
                                               height={"100%"}/>
                : <div>Nie dodano</div>}
            <ButtonContainer>
                <input
                    type="file"
                    accept="video/*"
                    style={{ display: "none" }}
                    id="video"
                    onChange={handleVideoChange}
                />
                <label htmlFor="video">
                    <Button
                        startIcon={<AddIcon/>}
                        variant="contained"
                        color="primary"
                        component="span"
                        sx={{marginBottom: "10px"}}>
                        Dodaj Animację
                    </Button>
                </label>
                <input
                    type="file"
                    accept="audio/*"
                    style={{ display: "none" }}
                    id="audio"
                />
                <label htmlFor="audio">
                    <Button
                        startIcon={<AddIcon/>}
                        variant="contained"
                        color="primary"
                        component="span"
                        sx={{marginBottom: "10px"}}>
                        Dodaj Audio
                    </Button>
                </label>
            </ButtonContainer>
            { (video && loopEnd) && <SliderContainer>
                <LoopSlider loopStart={loopStart}
                            loopEnd={loopEnd}
                            duration={duration}/>
            </SliderContainer> }
        </VideoContainer>
    )
}

export default VideoEditor