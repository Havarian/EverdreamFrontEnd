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
import {useDispatch} from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import {addAuthors} from "../../redux/slices/content/BookEditionSlice";

export default function AuthorCard(props) {

    const [image, setImage] = useState(null)
    const [authorType, setAuthorType] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        if (sessionStorage.getItem(props.currentAuthor.profilePictureName)) {
            setImage(sessionStorage.getItem(props.currentAuthor.profilePictureName))
        } else {
            fileService.fetchFile(props.currentAuthor.profilePictureName).then(res => {
                sessionStorage.setItem(props.currentAuthor.profilePictureName, res)
                setImage(sessionStorage.getItem(props.currentAuthor.profilePictureName))
            })
        }
    },[image, props.currentAuthor])

    const handleAdd = () => {
        let author = JSON.parse(JSON.stringify(props.currentAuthor))
        author.type = authorType
        dispatch(addAuthors(author))
    }

    const handleChangeType = (event) => {
        setAuthorType(event.target.value)
    }

    return (
        <>
            <Card sx={{ maxWidth: 400, margin: "auto"}}>
                <CardHeader
                title={props.currentAuthor.name + " " + props.currentAuthor.surname}
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
                        O autorze: {props.currentAuthor.description}
                    </Typography>
                    <Divider style={{margin: "5px 5px"}}/>
                    <Typography variant="body2" color="text.secondary">
                        Adres Email: {props.currentAuthor.email}
                    </Typography>
                    <Divider style={{margin: "5px 5px"}}/>
                    <Typography variant="body2" color="text.secondary">
                        Adres strony: {props.currentAuthor.homePageUrl}
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
                                <MenuItem value={"writer"}>Autor Tekstu</MenuItem>
                                <MenuItem value={"illustrator"}>Autor Ilustracji</MenuItem>
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
