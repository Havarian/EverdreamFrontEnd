import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {EditorContainer} from "./styles";
import Button from "@mui/material/Button";
import {CloseOutlined} from "@mui/icons-material";
import Box from "@mui/material/Box";
import {useState} from "react";
import ConfirmCloseEditor from "./ConfirmCloseEditor";
import {DisplayNavbar} from "../../redux/slices/appState/navbarSlice";
import CoverEditor from "./CoverEditor";

const BookEditor = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [isChanged, setIstChanged] = useState(false)

    const handleCloseEditor = () => {
        if (isChanged) {
            setOpen(true)
        } else {
            dispatch(DisplayNavbar(true))
            navigate("/creatorPage")
        }
    }

    return (
        <EditorContainer>

            <CoverEditor></CoverEditor>

            <Button size={"small"}
                    sx={{position: "absolute", top: "1%", right: "1%"}}
                    color={"secondary"}
                    onClick={handleCloseEditor}>
                <CloseOutlined/>
            </Button>
            <Box>
                <ConfirmCloseEditor open={open} setOpen={setOpen}/>
            </Box>
        </EditorContainer>
    )
}

export default BookEditor