import {
    CoverEditorBackground,
    CoverEditorButtonArea,
    CoverEditorContainer,
    CoverEditorFormContainer,
    StyledInput, StyledText,
    StyledTextArea
} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useLayoutEffect, useState} from "react";
import altCover from "../../files/img/noImage.jpg"
import fileService from "../../services/content/FileService";
import {setCoverImageName, setDescription, setIsSaved, setTitle} from "../../redux/slices/content/BookEditionSlice";
import AppButton from "../Buttons/AppButton";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";

const CoverEditor = ({isModified, setIsModified}) => {

    const {title, description, coverImageName, authors} = useSelector(state => state.content.inEdition.book)
    const writers = authors.filter(author => author.type.includes("WRITER"))
    const illustrators = authors.filter(author => author.type.includes("ILLUSTRATOR"))


    const dispatch = useDispatch()
    const [selectedFile, setSelectedFile] = useState()
    const [previewImage, setPreviewImage] = useState(null)

    const handleAddPicture = (event) => {
        event.preventDefault()
        let img = event.target.files[0]
        setSelectedFile(img)
        fileService.uploadFile(img)
            .then(res => {
                dispatch(setCoverImageName(res))
                setIsModified(true)})
            .catch(err => console.error(err))
    }

    useEffect(() => {
        if (selectedFile) {
            setPreviewImage(URL.createObjectURL(selectedFile))
        }
        if (!isModified) {
            if (coverImageName === null) {
                setPreviewImage(altCover)
            } else {
                setPreviewImage(sessionStorage.getItem(coverImageName))
                if (previewImage === null) {
                    fileService.fetchFile(coverImageName)
                        .then(res => {
                            sessionStorage.setItem(coverImageName, res)
                            setPreviewImage(sessionStorage.getItem(coverImageName))})
                        .catch(err => {console.error(err)})
                }
            }
        }
    }, [selectedFile, coverImageName, isModified])

    return (
        <CoverEditorContainer>
            <CoverEditorBackground coverImage={previewImage}>
                <CoverEditorFormContainer>
                    <StyledInput
                        name={"title"}
                        placeholder={"Tytuł Książki"}
                        value={`${title ? title : ""}`}
                        onChange={(title) => {
                            dispatch(setTitle(title.target.value))
                            setIsModified(true)
                        }}
                        />
                    <CoverEditorButtonArea>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleAddPicture}
                            id="coverImage"
                        />
                        <label htmlFor="coverImage" >
                            <AppButton variant={"addImage"}/>
                        </label>
                    </CoverEditorButtonArea>
                    <StyledTextArea
                        name={"description"}
                        placeholder={"Opis ksiażki"}
                        value={`${description ? description : ""}`}
                        rows={5}
                        maxlength={500}
                        onChange={(desc) => {
                            dispatch(setDescription(desc.target.value))
                            setIsModified(true)
                        }}
                        />
                    <StyledText>Tekst: </StyledText>
                    <StyledText>Grafika: </StyledText>
                </CoverEditorFormContainer>
            </CoverEditorBackground>
            <Box>
                {/*<Modal open={}>*/}

                {/*</Modal>*/}
            </Box>
        </CoverEditorContainer>
    )
}

export default CoverEditor