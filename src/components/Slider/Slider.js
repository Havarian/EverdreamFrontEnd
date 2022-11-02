import {SliderContainer} from "./styles";
import {useRef} from "react";
import SliderItem from "./SliderItem";

const Slider = ({books, type}, ...restProps) => {

    const itemRef = useRef(null)

    return (
        <SliderContainer>
            {
                books?.map((book) => (
                    <SliderItem book={book} type={type}/>
                ))
            }
        </SliderContainer>
    )
}

export default Slider;