import {Slider} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setVideoLoopEnd, setVideoLoopStart} from "../../../../../redux/slices/content/PageEditionSlice";

const LoopSlider = ({loopStart, loopEnd, duration}) => {

    const dispatch = useDispatch()
    const [value, setValue] = useState([loopStart, loopEnd])
    const minDistance = 1

    const handleLoopChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
            dispatch(setVideoLoopStart(Math.min(newValue[0], value[1] - minDistance)))
            dispatch(setVideoLoopEnd(value[1]))
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
            dispatch(setVideoLoopStart(value[0]))
            dispatch(setVideoLoopEnd(Math.max(newValue[1], value[0] + minDistance)))
        }
    };

    const valueText = (value) => {
        return `${value}s`
    }

    return (
        <Slider
            value={value}
            max={duration}
            valueLabelDisplay={"auto"}
            getAriaValueText={valueText}
            onChange={handleLoopChange}
        />
    )
}

export default LoopSlider