import Slider from "../components/Slider";
import image from "../files/img/1.jpg"
import Button from "@mui/material/Button";
import {styled} from "@mui/system"
import Creator from "../components/Creator";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {SetIsCreatorOpen} from "../redux/slices/appState/creatorSlice";

const Wrapper = styled('div')`
  width: 100%;
  min-height: calc(100vh - 85px);
  position: relative;
  overflow-x:hidden; 
`

const CreatorPage = () => {

    const dispatch = useDispatch()
    const open = useSelector(state => state.appState.creator.isCreatorOpen)
    const handleOpen = () => {dispatch(SetIsCreatorOpen(true))}
    const handleClose = () => {dispatch(SetIsCreatorOpen(false))}

    return (

        <Wrapper>
            <Slider image={image}/>
            <Slider image={image}/>
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