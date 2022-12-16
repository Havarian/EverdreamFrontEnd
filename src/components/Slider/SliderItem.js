import {ItemButtonContainer, StyledSliderItem} from "./styles";
import {useLayoutEffect, useRef, useState} from "react";
import fileService from "../../services/content/FileService";
import {PlayButton} from "../Buttons/AppButtons";
import {Skeleton} from "@mui/material";
import altCover from "../../files/img/noImage.jpg"
import {setBookInEdition} from "../../redux/slices/content/BookEditionSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import AppButton from "../Buttons/AppButton";
import {DisplayNavbar} from "../../redux/slices/appState/navbarSlice";

const SliderItem = ({category, book, setItemWidth}, ...restProps) => {

    const [coverImage, setCoverImage] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const itemRef = useRef()

    useLayoutEffect(() => {
        if (book.coverImageName === null) {
            setCoverImage(altCover)
        } else {
            if (sessionStorage.getItem(book.coverImageName) !== null) {
                setCoverImage(sessionStorage.getItem(book.coverImageName))
            } else {
                fileService.fetchFile(book.coverImageName)
                    .then(res => {
                        sessionStorage.setItem(book.coverImageName, res)
                        setCoverImage(res)})
                    .catch(err => console.error(err))
            }
        }
        setItemWidth(itemRef.current.clientWidth)
    }, [coverImage, book.coverImageName])

    const handleEdit = () => {
        dispatch(setBookInEdition(book))
        navigate("/bookEditor")
        dispatch(DisplayNavbar(false))

    }

    return (
        <StyledSliderItem image={coverImage} ref={itemRef}>
            {coverImage ?
                <img src={`${coverImage}`} alt=""/> :
                        <Skeleton variant={"rectangular"} animation={"wave"} width={"100%"} height={"100%"}/>
            }
            <ItemButtonContainer>
                {category === "inCreation" ?
                    <AppButton type={"edit"} onClick={handleEdit} color={"secondary"}/> : null}
                {category === "published" ?
                    <PlayButton size={"small"} book={book}/> : null}
            </ItemButtonContainer>
        </StyledSliderItem>
    )
}

export default SliderItem