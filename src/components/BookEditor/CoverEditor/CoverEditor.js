import {
    CoverEditorBackground,
    CoverEditorButtonArea,
    CoverEditorContainer,
    CoverEditorFormContainer,
    StyledInput,
    StyledText,
    StyledTextArea
} from "../styles";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import altCover from "../../../files/img/noImage.jpg"
import fileService from "../../../services/content/FileService";
import {removeAuthor, setCoverImageName, setDescription, setTitle} from "../../../redux/slices/content/BookEditionSlice";
import AppButton from "../../Buttons/AppButton";
import {setAuthorManagerOpen} from "../../../redux/slices/appState/creatorSlice";
import AuthorEditor from "../AuthorEditor/AuthorEditor";
import Button from "@mui/material/Button";

const CoverEditor = ({isModified, setIsModified}) => {

    const {id, title, description, coverImageName, authors} = useSelector(state => state.content.inEdition.book)
    const writers = authors.filter(author => author.type.includes("WRITER"))
    const illustrators = authors.filter(author => author.type.includes("ILLUSTRATOR"))

    const dispatch = useDispatch()
    const [selectedFile, setSelectedFile] = useState()
    const [previewImage, setPreviewImage] = useState(null)

    const openModal = () => {
        dispatch(setAuthorManagerOpen(true))
    }
    const closeModal = () => {
        dispatch(setAuthorManagerOpen(false))
    }

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


    const renderAuthorName = (author) => {
        return (
            <StyledText key={author.id} fontSize={"14px"}>{author.name} {author.surname}
                <AppButton type={"remove"} iconSize={"12px"} padding={"0 10px"} color={"secondary"} onClick={() => {
                    dispatch(removeAuthor({bookId: id, authorId: author.id, type: author.type}))
                }}/>
            </StyledText>
        )
    }

    useEffect(() => {
        if (selectedFile) {
            setPreviewImage(URL.createObjectURL(selectedFile))
        }
        if (!isModified) {
            if (coverImageName === null) {
                setPreviewImage(altCover)
            } else {
                if (sessionStorage.getItem(coverImageName) !== null) {
                    setPreviewImage(sessionStorage.getItem(coverImageName))
                } else {
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
                            id={"image"}
                        />
                        <label htmlFor={"image"} >
                            <AppButton type={"addImage"}
                                       variant={"outlined"}
                                       color={"secondary"}
                                       component={"span"}/>
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
                    <StyledText>Autorzy
                        <AppButton type={"add"} padding={"0px 10px"} iconOnly color={"secondary"} iconSize={"20px"} onClick={openModal}/>
                    </StyledText>
                    <StyledText fontSize={"12px"}>Tekst:</StyledText>
                    {writers?.map(writer => renderAuthorName(writer))}
                    <StyledText fontSize={"12px"}>Grafika:</StyledText>
                    {illustrators?.map(illustrator => renderAuthorName(illustrator))}
                </CoverEditorFormContainer>
            </CoverEditorBackground>
            <AuthorEditor closeModal={closeModal} setIsModified={setIsModified}/>
        </CoverEditorContainer>
    )
}

export default CoverEditor