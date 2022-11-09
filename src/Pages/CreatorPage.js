import Slider from "../components/Slider/Slider";
import Button from "@mui/material/Button";
import {styled} from "@mui/system"
import {useDispatch, useSelector} from "react-redux";
import {SetIsCreatorOpen} from "../redux/slices/appState/creatorSlice";
import Typography from "@mui/material/Typography";
import {saveBook, setBookInEditionInitialState} from "../redux/slices/content/BookEditionSlice";
import {useEffect} from "react";
import {fetchBooksInCreation} from "../redux/slices/content/BooksInCreationSlice";
import {DisplayNavbar} from "../redux/slices/appState/navbarSlice";
import {useNavigate} from "react-router-dom";

const Wrapper = styled('div')`
  width: 100%;
  min-height: calc(100vh - 72px);
  position: relative;
  overflow-x:hidden; 
`

const CreatorPage = () => {

    const dispatch = useDispatch()
    const open = useSelector(state => state.appState.creator.isCreatorOpen)
    const booksInCreation = useSelector(state => state.content.inCreation)
    const pendingBooks = useSelector (state => state.content.pending)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchBooksInCreation())
    }, [dispatch])

    const handleOpen = () => {
        dispatch(DisplayNavbar(false))
        navigate("/bookEditor")
        // dispatch(SetIsCreatorOpen(true))
        // dispatch(saveBook())
    }
    const handleClose = () => {
        dispatch(SetIsCreatorOpen(false))
        dispatch(saveBook()).then(() => dispatch(setBookInEditionInitialState()))
    }

    return (
        <Wrapper>
            <br/>
            <Typography variant={"button"}
                             fontSize={"18px"} style={{margin: "10px 0 10px 50px", color: "whitesmoke"}}>
                W trakcie tworzenia</Typography>
            {booksInCreation && <Slider books={booksInCreation} type={"inCreation"}/>}

            <Typography variant={"button"}
                        fontSize={"18px"} style={{margin: "10px 0 10px 50px", color: "whitesmoke"}}>
                Oczekujące na publikację</Typography>


            <Button variant={"contained"} color={"primary"} size={"large"}
                sx={{position: "absolute", bottom: "2vh", right: "2vw"}}
                    onClick={handleOpen}
            >NOWA KSIĄŻKA</Button>
            {/*<Modal open={open}>*/}
            {/*    <Box width={"100vw"} height={"100vh"}>*/}
            {/*        <Creator closeCreatorModal={handleClose}/>*/}
            {/*    </Box>*/}
            {/*</Modal>*/}
        </Wrapper>
    )
}

export default CreatorPage;