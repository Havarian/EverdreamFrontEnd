import {ButtonText, StyledButton} from "./styles";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from "@mui/material/Button";
import PostAddIcon from '@mui/icons-material/PostAdd';

const AppButton = ({type, onClick, iconSize, iconOnly,children, ...restProps}) => {

    const renderButton = () => {
        switch (type) {
            case ("play") : return <><PlayCircleOutlineIcon sx={{fontSize: iconSize}}/>
                {!iconOnly && <ButtonText>ODTWÓRZ</ButtonText>}</>;
            case ("addToFav") : return <><AddIcon sx={{fontSize: iconSize}}/>
                {!iconOnly && <ButtonText>ULUBIONE</ButtonText>}</>;
            case ("more") : return <><ExpandMoreIcon sx={{fontSize: iconSize}}/>
                {!iconOnly && <ButtonText>WIĘCEJ</ButtonText>}</>;
            case ("delete") : return <><DeleteForeverOutlinedIcon sx={{fontSize: iconSize}}/>
                {!iconOnly && <ButtonText>USUŃ</ButtonText>}</>
            case ("edit") : return <><EditOutlinedIcon sx={{fontSize: iconSize}}/>
                {!iconOnly && <ButtonText>EDYTUJ</ButtonText>}</>
            case ("save") : return <><SaveAltIcon sx={{fontSize: iconSize}}/>
                {!iconOnly && <ButtonText>ZAPISZ</ButtonText>}</>
            case ("addImage") : return <><AddPhotoAlternateIcon sx={{fontSize: iconSize}}/>
                {!iconOnly && <ButtonText>DODAJ GRAFIKĘ OKŁADKI</ButtonText>}</>
            case ("addAuthor") : return <><PersonAddIcon sx={{fontSize: iconSize}}/>
                {!iconOnly && <ButtonText>NOWY AUTOR</ButtonText>}</>
            case ("addPage") : return <><PostAddIcon sx={{fontSize: iconSize}}/>
                {!iconOnly && <ButtonText>DODAJ STRONĘ</ButtonText>}</>
            case ("close") : return <><CloseIcon sx={{fontSize: iconSize}}/>
                {!iconOnly && <ButtonText>ZAMKNIJ</ButtonText>}</>
            case ("back") : return <><KeyboardBackspaceIcon sx={{fontSize: iconSize}}/>
                {!iconOnly && <ButtonText>WSTECZ</ButtonText>}</>
            case("add") : return <><AddIcon sx={{fontSize: iconSize}}/></>
            case("remove") : return <><RemoveOutlinedIcon sx={{fontSize: iconSize}}/></>
            default: return <>{children}</>
        }
    }

    return (
        <Button onClick={onClick} {...restProps}>
            {renderButton()}
        </Button>
    )
}

export default AppButton