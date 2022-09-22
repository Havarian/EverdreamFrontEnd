import {
    AuthorName,
    AuthorNameContainer,
    CreatorWrapper,
    MainPanel,
    SidePanel,
    StyledCloseOutlined
} from "./styles/Creator";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Divider, Modal} from "@mui/material";
import CoverCreator from "./CoverCreator";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {removeAuthors, setCoverImageName, setDescription, setTitle} from "../../redux/slices/content/BookEditionSlice";
import fileService from "../../services/content/FileService";
import AuthorManager from "../Author/AuthorManager";
import PageManager from "./PageManager";
import Box from "@mui/material/Box";

const Creator = (props) => {

    const dispatch = useDispatch();
    const [authorManager, setAuthorManager] = useState(false)
    const [image, setImage] = useState()
    const [open, setOpen] = useState(false)

    const book = useSelector(state => state.content.inEdition)

    const writers = book.authors.filter(author => author.type.includes("writer"))
    const illustrators = book.authors.filter(author => author.type.includes("illustrator"))

    const openPageManager = () => {
        setOpen(true)
    }
    const closePageManager = () => {
        setOpen(false)
    }

    const toggleAuthorManager = () => {
        if (authorManager) {
            setAuthorManager(false)
        } else {
            setAuthorManager(true)
        }
    }

    const handleAddPicture = (event) => {
        event.preventDefault()
        let img = event.target.files[0]
        fileService.uploadFile(img)
            .then(res => {dispatch(setCoverImageName(res))
                            setImage(URL.createObjectURL(img))})
    }

    useEffect(() => {
    },[dispatch, writers, illustrators])

    return (
        <CreatorWrapper>
            <SidePanel>
                <TextField  fullWidth
                            size={"small"}
                            color={"secondary"}
                            label={"Tytuł Książki"}
                            name={"title"}
                            placeholder={`${book.title ? book.title: "Tytuł Ksiażki"}`}
                            margin={"dense"}
                            onChange={(title) => dispatch(setTitle(title.target.value))}/>
                <TextField  fullWidth
                            multiline
                            rows={5}
                            size={"small"}
                            color={"secondary"}
                            name={"description"}
                            label={"Opis Książki"}
                            placeholder={`${book.description ? book.description: "Tytuł Ksiażki"}`}
                            margin={"dense"}
                            onChange={(desc) => dispatch(setDescription(desc.target.value))}/>
                <Divider style={{margin: "10px"}}/>
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleAddPicture}
                    id="file"
                />
                <label htmlFor="file" >
                    <Button variant="outlined"
                            color="secondary"
                            size={"small"}
                            component="span">
                        Dodaj Grafikę Okładki
                    </Button>
                </label>
                <Divider style={{margin: "10px"}}/>
                    <Typography>Autorzy:
                        <Button variant={"outlined"}
                                color={"secondary"}
                                size={"small"}
                                sx={{position: "absolute", right: 10}}
                                onClick={toggleAuthorManager}>
                            {authorManager ? <ArrowBackIosIcon fontSize={"10px"}/> : <ArrowForwardIosIcon fontSize={"10px"}/> }
                            {/*<AddIcon fontSize={"10px"}/>*/}
                        </Button>
                    </Typography>
                <Divider style={{margin: "10px"}}/>
                    <Typography style={{marginLeft: "10px"}}>Tekst:</Typography>
                {writers.map(writer =>
                    <AuthorNameContainer>
                        <AuthorName>
                            {writer.name} {writer.surname}
                        </AuthorName>
                        <Button color={"secondary"}
                                variant={"outlined"}
                                size={"small"}
                                sx={{position: "absolute", right: 10}}
                                onClick={() => dispatch(removeAuthors(writer.id))}
                        >Usuń</Button>
                    </AuthorNameContainer>)}
                    <Divider style={{margin: "10px"}}/>
                    <Typography style={{marginLeft: "10px"}}>Grafika:</Typography>
                {illustrators.map(illustrator =>
                    <AuthorNameContainer key={illustrator.id}>
                        <AuthorName>
                            {illustrator.name} {illustrator.surname}
                        </AuthorName>
                        <Button color={"secondary"}
                                variant={"outlined"}
                                size={"small"}
                                sx={{position: "absolute", right: 10}}
                                onClick={() => dispatch(removeAuthors(illustrator.id))}
                        >Usuń</Button>
                    </AuthorNameContainer>)}
                <Button variant={"outlined"} color={"secondary"} size={"small"} onClick={openPageManager}>Dodaj Strony</Button>
            </SidePanel>

            <MainPanel>
                {!authorManager && <CoverCreator book={book} coverImage={image}></CoverCreator>}
                {authorManager && <AuthorManager style={{height: 100}}/>}
            </MainPanel>
            <StyledCloseOutlined fontSize={"large"} onClick={props.closeCreatorModal}/>

            <Modal open={open}>
                <Box>
                    <PageManager close={closePageManager}/>
                </Box>
            </Modal>
        </CreatorWrapper>

    )
}

export default Creator