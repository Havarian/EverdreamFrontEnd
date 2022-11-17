import {ButtonGroup, Container, Image, NameContainer} from "./styles";
import TextField from "@mui/material/TextField";
import {Paper} from "@mui/material";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";
import FileService from "../../../services/content/FileService";
import {useDispatch, useSelector} from "react-redux";
import {
    saveAuthor,
    SetDescription,
    SetEmail,
    SetHomepageUrl,
    SetName,
    SetProfilePictureName,
    SetSurname
} from "../../../redux/slices/content/AuthorSlice";
import {useState} from "react";

const NewAuthorCard = (props) => {

    const dispatch = useDispatch()
    const author = useSelector(state => state.content.author.currentAuthor)
    const [image, setImage] = useState(null)

    const handleAddPicture = (event) => {
        event.preventDefault()
        let img = event.target.files[0]
        FileService.uploadFile(img).then(res =>
        {
            dispatch(SetProfilePictureName(res))
            setImage(URL.createObjectURL(img))
        })
    }

    const handleSave = () => {
        dispatch(saveAuthor({author}))
        props.close()
    }

    return (
        <Paper elevation={2}>
            <Container>
                <NameContainer>
                    <TextField
                        required
                        size={"small"}
                        color={"secondary"}
                        label={"Imię"}
                        name={"name"}
                        placeholder={"Imię autora"}
                        sx={{margin: "0px 5px 5px 0px", flex: 2}}
                        onChange={(name) => dispatch(SetName(name.target.value))}
                    />
                    <TextField
                        required
                        size={"small"}
                        color={"secondary"}
                        label={"Nazwisko"}
                        name={"name"}
                        placeholder={"Nazwisko autora"}
                        sx={{margin: "0px 0px 5px 5px", flex: 3}}
                        onChange={(surname) => dispatch(SetSurname(surname.target.value))}
                    />
                </NameContainer>
                <Image image={`${image}`}>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        id="profilePicture"
                        onChange={handleAddPicture}
                    />
                    <label htmlFor="profilePicture">
                        <Button
                            startIcon={<AddIcon/>}
                            variant="contained"
                            color="primary"
                            component="span"
                            size={"small"}
                            style={{position: "absolute", bottom: "10px", right: "10px"}}>
                            Dodaj Zdjęcie
                        </Button>
                    </label>
                </Image>
                <TextField
                    required
                    multiline
                    rows={5}
                    color={"secondary"}
                    name={"description"}
                    label={"O autorze"}
                    placeholder={"Krótki opis osoby autora"}
                    sx={{margin: "5px 0px", width: "100%"}}
                    onChange={(desc) => dispatch(SetDescription(desc.target.value))}
                />
                <TextField
                    required
                    size={"small"}
                    color={"secondary"}
                    label={"Adres Email"}
                    name={"email"}
                    placeholder={"Adres email autora"}
                    sx={{margin: "5px 0px", width: "100%"}}
                    onChange={(email) => dispatch(SetEmail(email.target.value))}
                />
                <TextField
                    size={"small"}
                    color={"secondary"}
                    label={"Adres strony internetowej"}
                    name={"homePageUrl"}
                    placeholder={"Adres strony internetowej"}
                    sx={{margin: "5px 0px", width: "100%"}}
                    onChange={(homePage) => dispatch(SetHomepageUrl(homePage.target.value))}
                />
                <ButtonGroup>
                    <Button variant={"outlined"}
                            color={"secondary"}
                            size={"small"}
                            startIcon={<SaveAltIcon/>}
                            sx={{margin: "5px 5px"}}
                            onClick={props.close}>Anuluj</Button>
                    <Button variant={"outlined"}
                            color={"secondary"}
                            size={"small"}
                            startIcon={<SaveAltIcon/>}
                            sx={{margin: "5px 0px"}}
                            onClick={handleSave}>Zapisz</Button>
                </ButtonGroup>
            </Container>
        </Paper>
    )
}

export default NewAuthorCard