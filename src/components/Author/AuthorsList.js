import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthors, SetCurrentAuthor} from "../../redux/slices/content/AuthorSlice";
import {ButtonGroup} from "../AuthorManager/NewAuthorCard/styles";
import {ListWrapper, StyledDataGrid} from "./styles";
import AppButton from "../Buttons/AppButton";

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
        width: 150,
        editable: false,
    },
    {
        field: 'description',
        headerName: 'Opis',
        width: 200,
        editable: false
    }
];

const AuthorsList = () => {
    const dispatch = useDispatch()
    const authors = useSelector(state => state.content.author.authorsList.list)

    const handleRowClick = (author) => {
        dispatch(SetCurrentAuthor(author))
    }

    useEffect(() => {
        dispatch(fetchAuthors())
    }, [])

    return (
        <ListWrapper>
            <StyledDataGrid
                rows={authors}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableColumnSelector={true}
                onRowClick={(row) => handleRowClick(row.row)}
            >

            </StyledDataGrid>
            <ButtonGroup style={{padding: "10px 0px"}}>
                <AppButton variant={"addAuthor"}/>
            </ButtonGroup>
        </ListWrapper>
    )
}

export default AuthorsList