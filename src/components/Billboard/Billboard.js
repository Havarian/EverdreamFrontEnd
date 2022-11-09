import {
    BillboardButtonContainer,
    BillboardContainer,
    BillboardDescription,
    BillboardShadow,
    BillboardTextPane,
    BillboardTitle
} from "./styles";
import {AddToFavButton, MoreButton, PlayButton} from "../Buttons/AppButtons";
import {useDispatch} from "react-redux";
import {setIsExpandedCardVisible} from "../../redux/slices/appState/commonSlice";
import {useEffect, useState} from "react";
import fileService from "../../services/content/FileService";


const Billboard = ({book}, ...restProps) => {

    const {title, description, coverImageName} = book
    const [coverImage, setCoverImage] = useState(null);
    const dispatch = useDispatch()

    const moreButtonHandler = () => {
        dispatch(setIsExpandedCardVisible(true))
    }

    useEffect(() => {
        setCoverImage(sessionStorage.getItem(coverImageName))

        if (coverImage == null) {
            fileService.fetchFile(coverImageName).then(res => {
                sessionStorage.setItem(coverImageName, res)
                setCoverImage(sessionStorage.getItem(coverImageName))
            }).catch(err => {
                console.error(err)
            })
        }
    }, [coverImageName])

    return (
        <BillboardContainer image={coverImage}>
            <BillboardShadow>
                <BillboardTextPane>
                    <BillboardTitle>{title}</BillboardTitle>
                    <BillboardButtonContainer>
                        <PlayButton size={"small"}/>
                        <AddToFavButton size={"small"}/>
                        <MoreButton size={"small"} onClick={moreButtonHandler}/>
                    </BillboardButtonContainer>
                    <BillboardDescription>{description}</BillboardDescription>
                </BillboardTextPane>
            </BillboardShadow>
        </BillboardContainer>

    )
}

export default Billboard