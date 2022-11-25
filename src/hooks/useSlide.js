import {useEffect, useState} from "react";
import {convertLength} from "@mui/material/styles/cssUtils";

const useSlide = (containerWidth, itemWidth, totalSlides) => {

    const [distance, setDistance] = useState(0)
    const [totalInViewport, setTotalInViewport] = useState(0)
    const [viewed, setViewed] = useState(0)

    useEffect(() => {
        setTotalInViewport(Math.floor(containerWidth / itemWidth))
    },[containerWidth, itemWidth])

    const handleSlideLeft = () => {
        setViewed(viewed - totalInViewport)
        setDistance(distance + totalInViewport * itemWidth)
    }

    const handleSlideRight = () => {
        setViewed(viewed + totalInViewport)
        setDistance(distance - totalInViewport * itemWidth)
    }

    const slideProps = {
        style: {transform: `translateX(${distance}px)`}
    }

    const hasPrev = distance < 0
    const hasNext = (viewed + totalInViewport) < totalSlides

    return {handleSlideLeft, handleSlideRight, slideProps, hasPrev, hasNext}
}

export default useSlide