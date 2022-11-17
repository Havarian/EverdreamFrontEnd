import {ButtonText, StyledButton} from "./styles";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const AppButton = ({variant, onClick}, ...restProps) => {

    const renderButton = () => {
        switch (variant) {
            case ("play") : return <><PlayCircleOutlineIcon/>
                <ButtonText>ODTWÓRZ</ButtonText></>;
            case ("addToFav") : return <><AddIcon/>
                <ButtonText>ULUBIONE</ButtonText></>;
            case ("more") : return <><ExpandMoreIcon/>
                <ButtonText>WIĘCEJ</ButtonText></>;
            case ("delete") : return <><DeleteForeverOutlinedIcon/>
                <ButtonText>USUŃ</ButtonText></>
            case ("edit") : return <><EditOutlinedIcon/>
                <ButtonText>EDYTUJ</ButtonText></>
            case ("save") : return <><SaveAltIcon/>
                <ButtonText>ZAPISZ</ButtonText></>
            case ("addImage") : return <><AddPhotoAlternateIcon/>
                <ButtonText>DODAJ GRAFIKĘ OKŁADKI</ButtonText></>
        }
    }

    return (

        <StyledButton onClick={onClick}>
            {renderButton()}
        </StyledButton>
    )
}

export default AppButton