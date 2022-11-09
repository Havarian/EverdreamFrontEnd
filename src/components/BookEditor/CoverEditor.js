import {CoverEditorBackground, CoverEditorContainer, CoverEditorFormContainer} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import altCover from "../../files/img/noImage.jpg"
import fileService from "../../services/content/FileService";
import {setTitle} from "../../redux/slices/content/BookEditionSlice";
import TextField from "@mui/material/TextField";

const CoverEditor = () => {

    const dispatch = useDispatch()

    const book = useSelector(state => state.content.inEdition.book)
    const [coverImage, setCoverImage] = useState(null)

    useEffect(() => {
        if (book.coverImageName === null) {
            setCoverImage(altCover)
        } else {
            setCoverImage(sessionStorage.getItem(book.coverImageName))

            if (coverImage === null) {
                fileService.fetchFile(book.coverImageName)
                    .then(res => {
                        sessionStorage.setItem(book.coverImageName, res)
                        setCoverImage(res)})
                    .catch(err => {
                        console.error(err)
                    })
            }
        }
    }, [coverImage])

    return (
        <CoverEditorContainer>
            <CoverEditorBackground coverImage={coverImage}>
                <CoverEditorFormContainer>
                    <TextField  size={"medium"}
                                color={"secondary"}
                                name={"title"}
                                value={`${book.title ? book.title : ""}`}
                                placeholder={`${book.title ? "" : "Tytuł Ksiażki"}`}
                                label="Tytuł Książki"
                                margin={"dense"}
                                variant={"standard"}
                                // style={{backgroundColor: "whitesmoke", color: "white"}}
                                onChange={(title) => dispatch(setTitle(title.target.value))}/>
                </CoverEditorFormContainer>
            </CoverEditorBackground>
        </CoverEditorContainer>
    )
}

export default CoverEditor