import {PageEditorContainer, VideoContainer, VideoSettings} from "./styles/PageEditor";
import {useState} from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
// import VideoLooper from "react-video-looper";
// import video from "../../../../files/Video.mp4"
import Box from "@mui/material/Box";
const PageEditor = () => {

    const [loopStart, setLoopStart] = useState()
    const [loopEnd, setLoopEnd] = useState()

    return (
        <PageEditorContainer>
            <VideoContainer>
                <Box>
                {/*<VideoLooper source={video} start={0.00} end={4.00} loopCount={2}/>*/}
                </Box>
                <input
                    type="file"
                    accept="video/*"
                    style={{ display: "none" }}
                    id="video"
                />
                <label htmlFor="video">
                    <Button
                        startIcon={<AddIcon/>}
                        variant="contained"
                        color="primary"
                        component="span"
                        size={"small"}
                        style={{position: "absolute", bottom: "10px", right: "10px"}}>
                        Dodaj Animację
                    </Button>
                </label>
            </VideoContainer>
            <VideoSettings>

            </VideoSettings>
        </PageEditorContainer>
    )
}

export default PageEditor