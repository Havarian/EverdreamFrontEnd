import {
    BillboardButtonContainer,
    BillboardContainer,
    BillboardDescription,
    BillboardShadow,
    BillboardTextPane,
    BillboardTitle
} from "./styles";
import {AddToFavButton, MoreButton, PlayButton} from "../Buttons";
import {useDispatch} from "react-redux";
import {setIsExpandedCardVisible} from "../../redux/slices/appState/commonSlice";


const Billboard = ({image, book}, ...restProps) => {

    const {title, description} = book

    const dispatch = useDispatch()
    const openModal = () => {
        console.log("dziaje")
        dispatch(setIsExpandedCardVisible(true))
    }

    return (
        <BillboardContainer image={image}>
            <BillboardShadow>
                <BillboardTextPane>
                    <BillboardTitle>{title}</BillboardTitle>
                    <BillboardButtonContainer>
                        <PlayButton size={"small"}/>
                        <AddToFavButton size={"small"}/>
                        <MoreButton size={"small"} onClick={openModal}/>
                    </BillboardButtonContainer>
                    <BillboardDescription>{description}</BillboardDescription>
                </BillboardTextPane>
            </BillboardShadow>
        </BillboardContainer>

    )
}

export default Billboard