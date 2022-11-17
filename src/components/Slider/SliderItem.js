import {ItemButtonContainer, StyledSliderItem} from "./styles";
import {useEffect, useState} from "react";
import fileService from "../../services/content/FileService";
import {EditButton, PlayButton} from "../Buttons/AppButtons";
import {Skeleton} from "@mui/material";
import altCover from "../../files/img/noImage.jpg"
import {setBookInEdition} from "../../redux/slices/content/BookEditionSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import AppButton from "../Buttons/AppButton";
import {DisplayNavbar} from "../../redux/slices/appState/navbarSlice";

const SliderItem = ({type, book}, ...restProps) => {

    const [coverImage, setCoverImage] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (book.coverImageName === null) {
            setCoverImage(altCover)
        } else {
            setCoverImage(sessionStorage.getItem(book.coverImageName))
            if (coverImage == null) {
                fileService.fetchFile(book.coverImageName)
                    .then(res => {
                        sessionStorage.setItem(book.coverImageName, res)
                        setCoverImage(res)})
                    .catch(err => console.error(err))
            }
        }
    }, [coverImage, book.coverImageName])

    const handleEdit = () => {
        dispatch(setBookInEdition(book))
        navigate("/bookEditor")
        dispatch(DisplayNavbar(false))

    }

    return (
        <>
            { coverImage ?
                <StyledSliderItem image={coverImage}>
                    <ItemButtonContainer>
                        {type === "inCreation" ?
                            <AppButton variant={"edit"} onClick={handleEdit}/> : null}
                        {type === "published" ?
                            <PlayButton size={"small"} book={book}/> : null}
                    </ItemButtonContainer>
                </StyledSliderItem>
                :
                <Skeleton variant={"rectangular"} animation={"wave"} width={"20vw"} height={"11.25vw"}/>
            }
        </>
    )
}

export default SliderItem