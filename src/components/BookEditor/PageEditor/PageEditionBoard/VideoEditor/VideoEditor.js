import {VideoEditorContainer} from "./styles";
import {useDispatch} from "react-redux";
import {useState} from "react";

const VideoEditor = () => {

    const dispatch = useDispatch()
    const [video, setVideo] = useState(null)
    const [duration, setDuration] = useState(0)

    return (
        <VideoEditorContainer>

        </VideoEditorContainer>
    )
}

export default VideoEditor