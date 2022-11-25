import {Slide} from "@mui/material";
import {AuthorCardWrapper, ProfilePicContainer} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    resetCurrentAuthor, saveAuthor, setCurrentAuthor,
    setDescription, setEmail,
    setHomepageUrl,
    setName, setProfilePictureName,
    setSurname
} from "../../../redux/slices/content/AuthorSlice";
import fileService from "../../../services/content/FileService";
import noAvatar from "../../../files/img/NoAvatar.png"
import AppButton from "../../Buttons/AppButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {setNewAuthorCardOpen} from "../../../redux/slices/appState/creatorSlice";

const NewAuthorCard = () => {

    const dispatch = useDispatch()
    const open = useSelector(state => state.appState.creator.newAuthorCard.isOpen)
    const author = useSelector(state => state.content.author.currentAuthor)
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewImage, setPreviewImage] = useState (null)
    const [isModified, setIsModified] = useState(false)

    const handleSave = () => {
        console.log("method", author)
        dispatch(saveAuthor())
    }

    const handleAddPicture = (event) => {
        event.preventDefault()
        let img = event.target.files[0]
        setSelectedFile(img)
        fileService.uploadFile(img)
            .then(res => {
                dispatch(setProfilePictureName(res))})
            .catch(error => console.error(error))
        setIsModified(true)
    }

    const handleClose = () => {
        dispatch(setNewAuthorCardOpen(false))
        dispatch(resetCurrentAuthor())
    }

    useEffect(() => {
        if (selectedFile) {
            setPreviewImage(URL.createObjectURL(selectedFile))
        }

        if (!isModified) {
            if (author.profilePictureName === null) {
                setPreviewImage(noAvatar)
            } else {
                setPreviewImage(sessionStorage.getItem(author.profilePictureName))
                if (previewImage === null){
                    fileService.fetchFile(author.profilePictureName)
                        .then(res => {
                            sessionStorage.setItem(author.profilePictureName, res)
                            setPreviewImage(res)})
                        .catch(error => console.error(error))
                }
            }
        }
    }, [selectedFile, author.profilePictureName, isModified])

    return (
        <Slide direction={"right"} in={open} mountOnEnter unmountOnExit>
            <AuthorCardWrapper>
                <ProfilePicContainer>
                    {previewImage ? <img src={`${previewImage}`} alt={"author profile picture"}/> :
                        <img src={noAvatar} alt={"no author profile picture"}/>}
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleAddPicture}
                        id={"authorProfilePic"}
                    />
                    <label htmlFor={"authorProfilePic"} >
                        <AppButton type={"addImage"} iconOnly variant={"filled"}
                                   style={{position: "absolute", right: "55px", bottom: "45px"}}
                                   component={"span"}
                        />
                    </label>
                </ProfilePicContainer>
                <Box component="form" sx={{padding: "10px"}}>
                    <TextField
                        margin={"dense"}
                        required
                        fullWidth
                        id="name"
                        label="Imię"
                        name="name"
                        variant="outlined"
                        size="small"
                        autoFocus
                        onChange={(event) => {
                            dispatch(setName(event.target.value))
                        }}/>
                    <TextField
                        margin={"dense"}
                        required
                        fullWidth
                        id="surname"
                        label="Nazwisko"
                        name="surname"
                        variant="outlined"
                        size="small"
                        onChange={(event) => {
                            dispatch(setSurname(event.target.value))
                        }}/>
                    <TextField
                        margin={"dense"}
                        required
                        fullWidth
                        id="description"
                        label="Opis"
                        name="description"
                        variant="outlined"
                        size="small"
                        multiline
                        rows={4}
                        onChange={(event) => {
                            dispatch(setDescription(event.target.value))
                        }}/>
                    <TextField
                        margin={"dense"}
                        required
                        fullWidth
                        id="webPageUrl"
                        label="Strona Autora"
                        name="webPageUrl"
                        variant="outlined"
                        size="small"
                        onChange={(event) => {
                            dispatch(setHomepageUrl(event.target.value))
                        }}/>
                    <TextField
                        margin={"dense"}
                        required
                        fullWidth
                        id="email"
                        label="e-mail"
                        name="email"
                        variant="outlined"
                        size="small"
                        onChange={(event) => {
                            dispatch(setEmail(event.target.value))
                        }}/>
                </Box>
                <Box component="div" sx={{display: "flex", flexDirection: "row-reverse", padding: "10px"}}>
                    <AppButton type={"close"} variant={"filled"} onClick={handleClose}/>
                    <AppButton type={"save"} variant={"filled"} onClick={handleSave}/>
                </Box>
            </AuthorCardWrapper>
        </Slide>
    )
}

export default NewAuthorCard