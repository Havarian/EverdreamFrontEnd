import styled from "styled-components/macro";
import {DataGrid} from "@mui/x-data-grid";

export const ListWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 500px;
  margin: auto;
`
export const StyledDataGrid = styled(DataGrid)({
    backgroundColor: "whitesmoke",
    overflowX: "hidden",
})