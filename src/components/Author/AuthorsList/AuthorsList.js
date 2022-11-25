import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthors, resetCurrentAuthor, setCurrentAuthor} from "../../../redux/slices/content/AuthorSlice";
import AppButton from "../../Buttons/AppButton";
import {Slide} from "@mui/material";
import {ListWrapper, StyledDataGrid} from "./styles";
import {setAuthorCardOpen, setNewAuthorCardOpen} from "../../../redux/slices/appState/creatorSlice";

const columns = [
    {
        field: 'name',
        headerName: 'Imię',
        width: 150,
        editable: false,
    },
    {
        field: 'surname',
        headerName: 'Nazwisko',
        width: 200,
        editable: false,
    }
];

const AuthorsList = () => {

    const dispatch = useDispatch()
    const authors = useSelector(state => state.content.author.authorsList.list)
    const open = useSelector(state => state.appState.creator.isAuthorManagerOpen)
    const isNewAuthorCardOpen = useSelector(state => state.appState.creator.newAuthorCard.isOpen)
    const isAuthorCardOpen = useSelector(state => state.appState.creator.authorCard.isOpen)

    const handleAddAuthor = () => {
        dispatch(resetCurrentAuthor())
        if (isAuthorCardOpen) {
            dispatch(setAuthorCardOpen(!isAuthorCardOpen))
        }
        if (!isNewAuthorCardOpen) {
            dispatch(setNewAuthorCardOpen(!isNewAuthorCardOpen))
        }
    }

    const handleRowClick = (author) => {
        dispatch(setCurrentAuthor(author))
        if (!isAuthorCardOpen) {
            dispatch(setAuthorCardOpen(!isAuthorCardOpen))
        }
        if (isNewAuthorCardOpen)
        dispatch(setNewAuthorCardOpen(!isNewAuthorCardOpen))
    }

    useEffect(() => {
        dispatch(fetchAuthors())
    }, [])

    return (
        <Slide direction={"left"} in={open} mountOnEnter unmountOnExit>
            <ListWrapper>
                <StyledDataGrid
                    rows={authors}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableColumnSelector={true}
                    onRowClick={(row) => handleRowClick(row.row)}/>
                <AppButton type={"addAuthor"} iconOnly variant={"filled"}
                           style={{position: "absolute", right: 10, bottom: 60}}
                onClick={handleAddAuthor}/>
            </ListWrapper>
        </Slide>
    )
}

export default AuthorsList