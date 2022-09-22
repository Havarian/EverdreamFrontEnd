import {SliderContainer, SliderItem} from "./styles/Slider";
import {useRef} from "react";

const Slider = ({children, ...restProps}) => {

    const itemRef = useRef(null)

    return (
        <SliderContainer>
            <SliderItem ref={itemRef} image={restProps.image}/>
            <SliderItem image={restProps.image}/>
            <SliderItem image={restProps.image}/>
            <SliderItem image={restProps.image}/>
            <SliderItem image={restProps.image}/>
            <SliderItem image={restProps.image}/>
            <SliderItem image={restProps.image}/>
        </SliderContainer>
    )
}

export default Slider;