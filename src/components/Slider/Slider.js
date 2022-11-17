import {ArrowButton, SliderArrow, SliderContainer, SliderWrapper} from "./styles";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import SliderItem from "./SliderItem";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = ({books, type}, ...restProps) => {

    const [containerWidth, setContainerWidth] = useState(0)
    const [slideCount, setSlideCount] = useState(0)
    const [totalSlides, setTotalSlides] = useState(0)
    const [translateX, setTranslateX] = useState(0)

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

    const handleSlide = () => {
        console.log(containerWidth, totalSlides)
    }

    return (
        <SliderWrapper>
            <ArrowButton onClick={handleSlide}>
                <ArrowForwardIosIcon style={{fontSize: "50px", color: "white", transform: "rotate(180deg)"}}/>
            </ArrowButton>
            <SliderContainer>
                {
                    books?.map((book) => (
                        <SliderItem key={book.id} book={book} type={type}/>
                    ))
                }
            </SliderContainer>
            <ArrowButton style={{right: 0}}>
                <ArrowForwardIosIcon style={{fontSize: "50px", color: "white"}}/>
            </ArrowButton>
        </SliderWrapper>
    )
}

export default Slider;