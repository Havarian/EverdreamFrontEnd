import {
    BillboardButtonContainer,
    BillboardContainer,
    BillboardDescription,
    BillboardShadow,
    BillboardTextPane,
    BillboardTitle
} from "./styles";
import {AddToFavButton, MoreButton, PlayButton} from "../Buttons";


const Billboard = (props) => {

    return (
        <BillboardContainer image={props.image}>
            <BillboardShadow>
                <BillboardTextPane>
                    <BillboardTitle>{props.book.title}</BillboardTitle>
                    <BillboardButtonContainer>
                        <PlayButton size={"small"}/>
                        <AddToFavButton size={"small"}/>
                        <MoreButton size={"small"}/>
                    </BillboardButtonContainer>
                    <BillboardDescription>{props.book.description}</BillboardDescription>
                </BillboardTextPane>
            </BillboardShadow>
        </BillboardContainer>

    )
}

export default Billboard