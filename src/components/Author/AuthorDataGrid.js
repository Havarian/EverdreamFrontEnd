import {DataGrid} from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import {ButtonGroup} from "./NewAuthorCard/styles/newAuthorCard";
import {AddOutlined} from "@mui/icons-material";

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

const AuthorDataGrid = (props) => {

    const handleRowClick = (author) => {
        props.setCurrentAuthor(author)
    }

    return (
        <div style={{ height: "80vh", width: '100%' }}>
            <DataGrid
                rows={props.authors}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableColumnSelector={true}
                onRowClick={(row) => handleRowClick(row.row)}
            />
            <ButtonGroup style={{padding: "10px 0px"}}>
                <Button variant={"outlined"}
                        color={"secondary"}
                        onClick={props.open}
                        startIcon={<AddOutlined/>}
                >Nowy Autor</Button>
            </ButtonGroup>
        </div>
    )
}

export default AuthorDataGrid