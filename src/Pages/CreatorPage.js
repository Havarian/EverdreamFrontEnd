import Slider from "../components/Slider/Slider";
import Button from "@mui/material/Button";
import {styled} from "@mui/system"
import Creator from "../components/Creator/Creator";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {SetIsCreatorOpen} from "../redux/slices/appState/creatorSlice";
import Typography from "@mui/material/Typography";
import {saveBook} from "../redux/slices/content/BookEditionSlice";
import {useEffect} from "react";
import {fetchBooksInCreation} from "../redux/slices/content/BooksInCreationSlice";

const Wrapper = styled('div')`
  width: 100%;
  min-height: calc(100vh - 85px);
  position: relative;
  overflow-x:hidden; 
`

const CreatorPage = () => {

    const dispatch = useDispatch()
    const open = useSelector(state => state.appState.creator.isCreatorOpen)
    const booksInCreation = useSelector(state => state.content.inCreation)
    const pendingBooks = useSelector (state => state.content.pending)

    useEffect(() => {
        dispatch(fetchBooksInCreation())
    }, )

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
            {booksInCreation && <Slider books={booksInCreation} type={"inCreation"}/>}

            <Typography variant={"button"}
                        fontSize={"18px"} style={{margin: "10px 0 10px 50px"}}>Oczekujące na publikację</Typography>


            <Button variant={"contained"} color={"secondary"} size={"large"}
                sx={{position: "absolute", bottom: "2vh", right: "2vw"}}
                    onClick={handleOpen}
            >NOWA KSIĄŻKA</Button>
            <Modal open={open}>
                <Box width={"100vw"} height={"100vh"}>
                    <Creator closeCreatorModal={handleClose}/>
                </Box>
            </Modal>
        </Wrapper>
    )
}

export default CreatorPage;