import {ButtonText, StyledButton} from "./styles";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const AppButton = ({variant, onClick, iconSize, ...restProps}) => {

    const renderButton = () => {
        switch (variant) {
            case ("play") : return <><PlayCircleOutlineIcon sx={{fontSize: iconSize}}/>
                <ButtonText>ODTWÓRZ</ButtonText></>;
            case ("addToFav") : return <><AddIcon sx={{fontSize: iconSize}}/>
                <ButtonText>ULUBIONE</ButtonText></>;
            case ("more") : return <><ExpandMoreIcon sx={{fontSize: iconSize}}/>
                <ButtonText>WIĘCEJ</ButtonText></>;
            case ("delete") : return <><DeleteForeverOutlinedIcon sx={{fontSize: iconSize}}/>
                <ButtonText>USUŃ</ButtonText></>
            case ("edit") : return <><EditOutlinedIcon sx={{fontSize: iconSize}}/>
                <ButtonText>EDYTUJ</ButtonText></>
            case ("save") : return <><SaveAltIcon sx={{fontSize: iconSize}}/>
                <ButtonText>ZAPISZ</ButtonText></>
            case ("addImage") : return <><AddPhotoAlternateIcon sx={{fontSize: iconSize}}/>
                <ButtonText>DODAJ GRAFIKĘ OKŁADKI</ButtonText></>
            case ("addAuthor") : return <><AddIcon sx={{fontSize: iconSize}}/>
                <ButtonText>NOWY AUTOR</ButtonText></>
            case("add") : return <><AddIcon sx={{fontSize: iconSize}}/></>
            case("remove") : return <><RemoveOutlinedIcon sx={{fontSize: iconSize}}/></>
        }
    }

    return (

        <StyledButton onClick={onClick} {...restProps}>
            {renderButton()}
        </StyledButton>
    )
}

export default AppButton