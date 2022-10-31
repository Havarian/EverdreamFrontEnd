import {useDispatch, useSelector} from "react-redux";
import Box from "@mui/material/Box";
import {Modal} from "@mui/material";
import {ButtonsContainer, ExpandedCardContainer, Image, ImageUtils, SubtitlesContainer} from "./styles";
import {setIsExpandedCardVisible} from "../../../redux/slices/appState/commonSlice";
import image from "../../../files/img/poranek.png"
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";

const ExpandedCard = (props) => {

    const dispatch = useDispatch()
    const open = useSelector(state => state.appState.commons.isExpandedCardVisible)

    const close = () => {
        dispatch(setIsExpandedCardVisible(false))
    }

    return (
        <Modal open={open} onClose={close} style={{position: "fixed"}}>
            <Box>
                <ExpandedCardContainer>
                    <Image image={image}>
                        <ImageUtils>
                        <ButtonsContainer>
                            <Button><CloseIcon fontSize={"large"}/></Button>
                            <Button><VolumeDownIcon fontSize={"large"}/></Button>
                            <Button><FullscreenIcon fontSize={"large"}/></Button>
                        </ButtonsContainer>
                            <SubtitlesContainer>
                                <p>
                                Kira powoli otworzyła oczy. I zamknęła je z powrotem. Błyskawicznie i natychmiast. Nie podobało jej
                                się to co zobaczyła. To, co lub kogo? Zastanawiała się przez chwilę czy dalej śni czy już się obudziła.
                                Powoli uniosła prawą powiekę by spojrzeć w wielkie żółte błyszczące oko, na wprost jej własnego,
                                bardzo, bardzo blisko. Była tez zupełnie pewna, że widzi również kawałek pokrytego rudą sierścią
                                nosa.
                                </p>
                            </SubtitlesContainer>
                        </ImageUtils>
                    </Image>
                    {/*<InfoContainer>*/}
                    {/*    <DescriptionContainer>*/}
                    {/*        <Typography variant={"h6"} color={"whitesmoke"}>Opis bajki</Typography>*/}
                    {/*        <Typography variant={"body2"} style={{color: "whitesmoke", textAlign: "justify"}}><p>*/}
                    {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tellus augue, sodales*/}
                    {/*            a tempus at, eleifend et justo. Donec tempor, sapien sit amet maximus gravida, mi*/}
                    {/*            eros scelerisque urna, laoreet suscipit ligula ante ut augue. Aliquam erat volutpat.*/}
                    {/*            Donec consequat at tortor sit amet suscipit. Donec finibus ligula in nunc venenatis,*/}
                    {/*            ut pharetra tellus vestibulum. Mauris a varius orci. Duis urna sapien, volutpat vitae*/}
                    {/*            porttitor blandit, scelerisque et enim. Donec tristique ligula ut purus dictum, nec*/}
                    {/*            tristique purus convallis.*/}
                    {/*        </p></Typography>*/}
                    {/*    </DescriptionContainer>*/}
                    {/*    <AuthorsContainer>*/}
                    {/*        <Typography variant={"body1"} style={{color: "whitesmoke"}}>*/}
                    {/*            Tekst: <span style={{fontSize: "20px", fontFamily: "Calibri"}}>Michał Marynowski</span>,*/}
                    {/*            Ilustracje: <span style={{fontSize: "20px", fontFamily: "Calibri"}}>Joanna Kencka</span>*/}
                    {/*        </Typography>*/}
                    {/*    </AuthorsContainer>*/}
                    {/*</InfoContainer>*/}
                </ExpandedCardContainer>
            </Box>
        </Modal>
    )
}

export default ExpandedCard