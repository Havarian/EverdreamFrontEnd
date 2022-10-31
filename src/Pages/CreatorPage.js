import Slider from "../components/Slider";
import Button from "@mui/material/Button";
import {styled} from "@mui/system"
import Creator from "../components/Creator/Creator";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {SetIsCreatorOpen} from "../redux/slices/appState/creatorSlice";
import Typography from "@mui/material/Typography";
import image from "../files/img/1.jpg"
import image2 from "../files/img/2.jpg"
import image3 from "../files/img/4.jpg"
import {saveBook, setNewBook} from "../redux/slices/content/BookEditionSlice";

const Wrapper = styled('div')`
  width: 100%;
  min-height: calc(100vh - 85px);
  position: relative;
  overflow-x:hidden; 
`

const images = [image, image2, image3]

const CreatorPage = () => {

    const dispatch = useDispatch()
    const open = useSelector(state => state.appState.creator.isCreatorOpen)
    const book = useSelector(state => state.content.inEdition.book)

    const handleOpen = () => {
        dispatch(SetIsCreatorOpen(true))
        dispatch(saveBook())
    }
    const handleClose = () => {
        dispatch(SetIsCreatorOpen(false))

    }

    return (

        <Wrapper>
            <br/>
            <Typography variant={"button"}
                             fontSize={"18px"} style={{margin: "10px 0 10px 50px"}}>W trakcie tworzenia</Typography>
            <Slider image={images}/>
            <Typography variant={"button"}
                        fontSize={"18px"} style={{margin: "10px 0 10px 50px"}}>Oczekujące na publikację</Typography>
            {/*<Slider image={images}/>*/}
            <Button variant={"contained"} color={"secondary"} size={"large"}
                sx={{position: "absolute", bottom: "2vh", right: "2vw"}}
                    onClick={handleOpen}
            >NOWA KSIĄŻKA</Button>
            <Modal open={open}>
                <Box width={"100vw"} height={"100vh"}>
                    <Creator closeCreatorModal={handleClose} title={"Królewna śnieżka"}/>
                </Box>
            </Modal>
        </Wrapper>
    )
}

export default CreatorPage;