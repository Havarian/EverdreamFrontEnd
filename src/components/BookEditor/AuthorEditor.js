import Box from "@mui/material/Box";
import {Dialog, DialogTitle, Modal} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {SetAuthorManagerOpen} from "../../redux/slices/appState/creatorSlice";
import AuthorsList from "../Author/AuthorsList";
import AuthorManager from "../Author/AuthorManager";

const AuthorEditor = () => {

    const open = useSelector(state => state.appState.creator.isAuthorManagerOpen)
    const dispatch = useDispatch()

    const closeDialog = () => {
        dispatch(SetAuthorManagerOpen(false))
    }

    return (
            <Modal open={open} onClose={closeDialog}>
                <AuthorManager/>
            </Modal>
    )
}

export default AuthorEditor