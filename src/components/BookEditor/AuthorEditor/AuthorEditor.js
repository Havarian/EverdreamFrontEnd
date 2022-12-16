import {Modal} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Box from "@mui/material/Box";
import AppButton from "../../Buttons/AppButton";
import {resetCurrentAuthor} from "../../../redux/slices/content/AuthorSlice";
import Grid from "@mui/material/Grid";
import AuthorCard from "../../Author/AuthorCard/AuthorCard";
import AuthorsList from "../../Author/AuthorsList/AuthorsList";
import NewAuthorCard from "../../Author/AuthorCard/NewAuthorCard";
import {setAuthorCardOpen, setNewAuthorCardOpen} from "../../../redux/slices/appState/creatorSlice";

const AuthorEditor = ({closeModal, setIsModified, ...restProps}) => {

    const open = useSelector(state => state.appState.creator.isAuthorManagerOpen)
    const authorCard = useSelector(state => state.appState.creator.authorCard.isOpen)
    const newAuthorCard = useSelector(state => state.appState.creator.newAuthorCard.isOpen)
    const dispatch = useDispatch()

    const close = () => {
        closeModal()
        dispatch(resetCurrentAuthor())
        dispatch(setAuthorCardOpen(false))
        dispatch(setNewAuthorCardOpen(false))
    }

    return (
            <Modal open={open} onClose={closeModal}>
                <Box>
                    <AppButton type={"back"} iconOnly padding={"0px"} color={"secondary"}
                               style={{position: "absolute", top: 10}}
                               onClick={close}/>
                    <Grid container spacing={2}>
                        <Grid item xs={11} sm={11} md={6} lg={6} xl={6} style={{margin: "auto"}}>
                            {authorCard && <AuthorCard setIsModified={setIsModified}/>}
                            {newAuthorCard && <NewAuthorCard/>}
                        </Grid>
                        <Grid item xs={11} sm={11} md={6} lg={6} xl={6} style={{margin: "auto"}}>
                            <AuthorsList/>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
    )
}

export default AuthorEditor