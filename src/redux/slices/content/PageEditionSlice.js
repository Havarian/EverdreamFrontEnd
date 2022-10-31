import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: "",
    text: "",
    description: "",
    parentPageId: "",
    video: {
        id: "",
        fileName: "",
        loopStart: 0.00,
        loopEnd: null
    },
    audio: [{
        id: "",
        fileName: ""
    }]
}

const PageEditionSlice = createSlice({
    name: "page",
    initialState: initialState,
    reducers: {
        newPage: (state) => {
            return initialState
        },
        setPageText: (state, action) => {
            state.text = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        },
        setParentPageId: (state, action) => {
            state.parentPageId = action.payload
        },
        setVideo: (state, action) => {
            state.video = action.payload
        },
        setVideoLoopStart: (state, action) => {
            state.video.loopStart = action.payload
        },
        setVideoLoopEnd: (state, action) => {
            state.video.loopEnd = action.payload
        },
        resetLoops: (state) => {
            state.video.setVideoLoopStart = 0
            state.video.loopEnd = null
        },
        addAudio: (state, action) => {
            state.audio.push(action.payload)
        }
    }
})

export const {newPage,setParentPageId, setDescription ,resetLoops, setVideoLoopEnd, setVideoLoopStart, setParentPageNo, setVideo, setCrossPage,
    addAudio, setPageText, setPageNo} = PageEditionSlice.actions
export default PageEditionSlice.reducer