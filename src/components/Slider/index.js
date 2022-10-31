import {ItemButton, ItemButtonContainer, SliderContainer, SliderItem} from "./styles/Slider";
import {useRef} from "react";
import ThumbnailCard from "../BookCards/ThumbnailCard/ThumbnailCard";
import {EditButton} from "../Buttons";
import {ButtonsContainer} from "../BookCards/ExpandedCard/styles";

const Slider = ({children, image}, ...restProps) => {

    const [image1, image2, image3] = image

    const itemRef = useRef(null)

    return (
        <SliderContainer>
            {/*<ThumbnailCard image={image}></ThumbnailCard>*/}
            {/*<ThumbnailCard image={image}></ThumbnailCard>*/}
            {/*<ThumbnailCard image={image}></ThumbnailCard>*/}
            {/*<ThumbnailCard image={image}></ThumbnailCard>*/}
            <SliderItem image={image1}>
                <ItemButtonContainer>
                    <EditButton/>
                </ItemButtonContainer>
            </SliderItem>
            <SliderItem image={image3}>
                <ItemButtonContainer>
                    <EditButton/>
                </ItemButtonContainer>
            </SliderItem>
        </SliderContainer>
    )
}

export default Slider;