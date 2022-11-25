import {ArrowButton, SliderArrow, SliderContainer, SliderWrapper} from "./styles";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import SliderItem from "./SliderItem";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useSlide from "../hooks/useSlide";

const Slider = ({books, type}, ...restProps) => {

    const [containerWidth, setContainerWidth] = useState(0)
    const [itemWidth, setItemWidth] = useState(0)
    const [totalSlides, setTotalSlides] = useState(0)
    const containerRef = useRef()

    const {
        handleSlideLeft,
        handleSlideRight,
        slideProps,
        hasNext,
        hasPrev
    } = useSlide(containerWidth, itemWidth, totalSlides, )

    const onResize = (event) => {
        setContainerWidth(window.innerWidth)
    }

    useLayoutEffect(() => {
        setContainerWidth(window.innerWidth)
        window.addEventListener("resize", onResize)
        setTotalSlides(books?.length)
        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [containerWidth, books, window])

    return (
        <SliderWrapper>
            {hasPrev && <ArrowButton onClick={handleSlideLeft}>
                <ArrowForwardIosIcon style={{fontSize: "50px", color: "white", transform: "rotate(180deg)"}}/>
            </ArrowButton>}
            <SliderContainer ref={containerRef} {...slideProps}>
                {
                    books?.map((book) => (
                        <SliderItem key={book.id} book={book} type={type} setItemWidth={setItemWidth}/>
                    ))
                }
            </SliderContainer>
            {hasNext && <ArrowButton style={{right: 0}} onClick={handleSlideRight}>
                <ArrowForwardIosIcon style={{fontSize: "50px", color: "white"}}/>
            </ArrowButton>}
        </SliderWrapper>
    )
}

export default Slider;