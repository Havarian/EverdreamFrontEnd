import {Dialog, DialogActions, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {DisplayNavbar} from "../../redux/slices/appState/navbarSlice";
import {saveBook, setBookInEditionInitialState} from "../../redux/slices/content/BookEditionSlice";

const ConfirmCloseEditor = ({open, setOpen}, ...restProps) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClose = () => {
        setOpen(false)
    }

    const handleDiscard = () => {
        setOpen(false)
        navigate("/creatorPage")
        dispatch(setBookInEditionInitialState)
        dispatch(DisplayNavbar(true))
    }

    const handleSave = () => {
        setOpen(false)
        navigate("/creatorPage")
        dispatch(saveBook)
        dispatch(DisplayNavbar(true))
    }

    return (
        <>
            <Dialog open={open}
                    close={handleClose}>
                <DialogTitle>
                    {"Zapisać zmiany okładki przed zamknięciem?"}
                </DialogTitle>
                <DialogActions>
                    <Button color={"success"} onClick={handleSave}>Zapisz</Button>
                    <Button color={"error"} onClick={handleDiscard}>Odrzuć</Button>
                    <Button color={"secondary"} onClick={handleClose}>Anuluj</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ConfirmCloseEditor