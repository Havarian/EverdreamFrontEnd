import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {EditorContainer, PagesButton} from "./styles";
import Button from "@mui/material/Button";
import {CloseOutlined} from "@mui/icons-material";
import Box from "@mui/material/Box";
import {useState} from "react";
import ConfirmCloseEditor from "./ConfirmationComponents/ConfirmCloseEditor";
import {DisplayNavbar} from "../../redux/slices/appState/navbarSlice";
import CoverEditor from "./CoverEditor/CoverEditor";
import PageEditor from "./PageEditor/PageEditor";
import {setCoverEditorOpen, setPageEditorOpen} from "../../redux/slices/appState/creatorSlice";

const BookEditor = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [isModified, setIsModified] = useState(false)
    const isCoverEditorOpen = useSelector(state => state.appState.creator.coverEditor.isOpen)
    const isPageEditorOpen = useSelector(state => state.appState.creator.pageEditor.isOpen)

    const handleCloseEditor = () => {
        if (isModified) {
            setOpen(true)
        } else {
            dispatch(DisplayNavbar(true))
            navigate("/creatorPage")
        }
    }

    const toggleEditors = () => {
        dispatch(setCoverEditorOpen(!isCoverEditorOpen))
        dispatch(setPageEditorOpen(!isPageEditorOpen))
    }


    return (
        <EditorContainer>
            <PagesButton
                onClick={toggleEditors}
                style={{top: 0, right: "10%"}}>
                {isCoverEditorOpen && <span>STRONY</span>}
                {isPageEditorOpen && <span>OKŁADKA</span>}
            </PagesButton>

            {isCoverEditorOpen && <CoverEditor isModified={isModified} setIsModified={setIsModified}/>}
            {isPageEditorOpen && <PageEditor/>}

            <Button size={"small"}
                    sx={{position: "absolute", top: "1%", right: "1%"}}
                    color={"secondary"}
                    onClick={handleCloseEditor}>
                <CloseOutlined/>
            </Button>
            <Box>
                <ConfirmCloseEditor open={open} setOpen={setOpen} setIsModified={setIsModified}/>
            </Box>
        </EditorContainer>
    )
}

export default BookEditor