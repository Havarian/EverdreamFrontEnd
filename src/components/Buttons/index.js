import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const style = {
    margin: "5px 5px 5px 5px",
}

export const PlayButton = (props) => {

    return (
        <Button size={props.size}
                variant={"outlined"}
                startIcon={<PlayCircleOutlineIcon/>}
                style={style}>Odtwórz</Button>
    )
}

export const AddToFavButton = (props) => {
    return (
        <Button size={props.size} variant={"outlined"} startIcon={<AddIcon/>} style={style}>Moje bajki</Button>
    )
}

export const MoreButton = (props) => {
    return (
        <Button size={props.size} variant={"outlined"} endIcon={<ExpandMoreIcon/>} style={style}>Więcej</Button>
    )
}

export const EditButton = (props) => {
    return (
        <Button size={props.size} variant={"outlined"} startIcon={<EditOutlinedIcon/>} style={style}>Edytuj</Button>
    )
}

export const DeleteButton = (props) => {
    return (
        <Button size={props.size} variant={"outlined"} startIcon={<DeleteForeverOutlinedIcon/>} style={style}>Usuń</Button>
    )
}

export const SaveButton = (props) => {
    return (
        <Button size={props.size}
                variant={"outlined"}
                startIcon={<SaveAltIcon/>}
                color={props.color}
                style={style}>Zapisz</Button>
    )
}