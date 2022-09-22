import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthors, ResetCurrentAuthor} from "../../redux/slices/content/AuthorSlice";
import AuthorCard from "./AuthorCard";
import AuthorDataGrid from "./AuthorDataGrid";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NewAuthorCard from "./NewAuthorCard";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";


const AuthorManager = () => {

    const dispatch = useDispatch()
    const authors = useSelector(state => state.content.author.authorsList.list)
    const [currentAuthor, setCurrentAuthor] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const handleOpen = () => {
        setModalOpen(true)
        dispatch(ResetCurrentAuthor())}
    const handleClose = () => {
        setModalOpen(false)
        dispatch(ResetCurrentAuthor())}

    useEffect(() => {
        dispatch(fetchAuthors())
    },[dispatch, currentAuthor])

    return (
        <>
            <Grid container spacing={2} sx={{padding: "20px"}}>
                <Grid item xl={6}>
                    {currentAuthor &&
                    <AuthorCard currentAuthor={currentAuthor}></AuthorCard>}
                </Grid>
                <Grid item xl={6}>
                    <Typography sx={{margin: "5px"}}>Wybierz Autora:</Typography>
                    <AuthorDataGrid authors={authors} setCurrentAuthor={setCurrentAuthor} open={handleOpen}></AuthorDataGrid>

                </Grid>
            </Grid>
            <Modal open={modalOpen} close={modalOpen}>
                <Box width={"600px"} height={"60vh"} style={{position: "absolute", left: "50%", top: "35%", transform: "translate(-50%, -50%)"}}>
                    <NewAuthorCard close={handleClose}/>
                </Box>
            </Modal>
        </>
    )
}

export default AuthorManager