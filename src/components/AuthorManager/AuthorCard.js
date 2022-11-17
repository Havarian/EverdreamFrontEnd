import * as React from 'react';
import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import fileService from "../../services/content/FileService";
import {Divider, FormControl, InputLabel, Select, Skeleton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import {addAuthor, addAuthors} from "../../redux/slices/content/BookEditionSlice";

export default function AuthorCard({currentAuthor, currentBook}, ...restProps) {

    const {id, profilePictureName, name, surname, email, description, homePageUrl} = currentAuthor
    const bookId = useSelector(state => state.content.inEdition.book.id)
    const [image, setImage] = useState(null)
    const [authorType, setAuthorType] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        setImage(sessionStorage.getItem(profilePictureName))

        if (image == null) {
            fileService.fetchFile(profilePictureName).then(res => {
                sessionStorage.setItem(profilePictureName, res)
                setImage(sessionStorage.getItem(profilePictureName))
            })
        }
    },[image, currentAuthor, profilePictureName])

    const handleAdd = () => {
        console.log([bookId, id, authorType])
        dispatch(addAuthor([bookId, id, authorType]))
    }

    const handleChangeType = (event) => {
        setAuthorType(event.target.value)
    }

    return (
        <>
            <Card sx={{ maxWidth: 400, margin: "auto"}}>
                <CardHeader
                title={name + " " + surname}
                />
                {image ?
                    <CardMedia
                    component="img"
                    height="250"
                    image={`${image}`}
                    alt="Author Picture"
                    >
                    </CardMedia> :
                    <Skeleton variant={"rectangular"} width={"100%"} height={250}/>}
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        O autorze: {description}
                    </Typography>
                    <Divider style={{margin: "5px 5px"}}/>
                    <Typography variant="body2" color="text.secondary">
                        Adres Email: {email}
                    </Typography>
                    <Divider style={{margin: "5px 5px"}}/>
                    <Typography variant="body2" color="text.secondary">
                        Adres strony: {homePageUrl}
                    </Typography>
                </CardContent>
                    <CardActions disableSpacing
                                 style={{display: "flex", justifyContent: "flex-end"}}>
                        <FormControl sx={{ m: 1, minWidth: 200 }} size="small" color={"secondary"}>
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
                        <Button variant={"outlined"}
                                color={"secondary"}
                                onClick={handleAdd}
                        >Dodaj</Button>
                    </CardActions>

        </Card>
        </>
    );
}
