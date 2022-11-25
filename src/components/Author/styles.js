import styled from "styled-components/macro"
// import {styled} from "@mui/system"
import {DataGrid} from "@mui/x-data-grid";

export const AuthorManagerWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const ListWrapper = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 2vw;
    background-color: #688ab6;
`

export const StyledDataGrid = styled(DataGrid) ({
    height: "90%",
    width: "40vw"
})
