import {
    AuthorCardText,
    AuthorCardWrapper,
    AuthorDescription,
    AuthorTextContainer,
    AuthorTypeContainer,
    ProfilePicContainer
} from "./styles";
import {Divider, FormControl, InputLabel, Select, Slide} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import noAvatar from "../../../files/img/NoAvatar.png"
import MenuItem from "@mui/material/MenuItem";
import AppButton from "../../Buttons/AppButton";
import fileService from "../../../services/content/FileService";
import {addAuthor} from "../../../redux/slices/content/BookEditionSlice";
import {resetCurrentAuthor} from "../../../redux/slices/content/AuthorSlice";
import {Skeleton} from "@mui/lab";
import {setAuthorCardOpen} from "../../../redux/slices/appState/creatorSlice";

const AuthorCard = ({setIsModified}) => {

    const {id, profilePictureName, name, surname, email,
        description, homePageUrl} = useSelector(state => state.content.author.currentAuthor)
    const currentBook = useSelector(state => state.content.inEdition.book)

    const open = useSelector(state => state.appState.creator.authorCard.isOpen)
    const [image, setImage] = useState(null)
    const [authorType, setAuthorType] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        if (sessionStorage.getItem(profilePictureName) !== null){
            setImage(sessionStorage.getItem(profilePictureName))
        } else {
            fileService.fetchFile(profilePictureName).then(res => {
                sessionStorage.setItem(profilePictureName, res)
                setImage(sessionStorage.getItem(profilePictureName))})
        }

    }, [id, profilePictureName])

    const handleChangeType = (event) => {
        setAuthorType(event.target.value)
    }

    const handleAdd = () => {
        dispatch(addAuthor([currentBook.id, id, authorType]))
        dispatch(resetCurrentAuthor())
        setIsModified(true)
        dispatch(setAuthorCardOpen(false))
    }

    return (
        <Slide direction={"right"} in={open} mountOnEnter unmountOnExit>
            <AuthorCardWrapper>
                <ProfilePicContainer>
                    {image ? <img src={`${image}`} alt={"no author profile"}/> :
                        <Skeleton></Skeleton>}
                </ProfilePicContainer>
                <AuthorTextContainer>
                    <AuthorCardText fontSize={"20px"}>
                        {name}
                    </AuthorCardText>
                    <AuthorCardText fontSize={"20px"}>
                        {surname}
                    </AuthorCardText>
                    <AuthorDescription>
                        {description}
                    </AuthorDescription>
                    {homePageUrl && <a href={`${homePageUrl}`}>Strona Autora</a>}
                </AuthorTextContainer>
                <Divider/>
                <AuthorCardText style={{padding: "10px 0px 0px 25px"}}>Książka: {currentBook.title}</AuthorCardText>
                <AuthorTypeContainer>
                    <AuthorCardText>Autor: </AuthorCardText>
                    <FormControl sx={{ m: 1, minWidth: 150 }} size="small" color={"secondary"}>
                        <InputLabel id="demo-select-small">Typ Autora</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={authorType}
                            label="Typ Autora"
                            onChange={handleChangeType}
                        >
                            <MenuItem value={"WRITER"}>Autor Tekstu</MenuItem>
                            <MenuItem value={"ILLUSTRATOR"}>Autor Ilustracji</MenuItem>
                        </Select>
                    </FormControl>
                    <AppButton type={"add"} variant={"filled"} onClick={handleAdd}></AppButton>
                </AuthorTypeContainer>
            </AuthorCardWrapper>
        </Slide>
    )
}

export default AuthorCard