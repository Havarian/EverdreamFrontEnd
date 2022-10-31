import { styled } from "@mui/system"
import {CloseOutlined} from "@mui/icons-material";

export const CreatorWrapper = styled('div')`
  width: 99%;
  height: 98%;
  left: 0.5%;
  top: 1%;
  display: flex;
  box-sizing: border-box;
  background-color: whitesmoke;
  position: relative;
`

export const SidePanel = styled('div')`
  width: 25%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  background-color: #f0f0f0;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const MainPanel = styled('div')`
  width: 75%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 10px 10px 10px;
  background-color: whitesmoke;
`

export const StyledCloseOutlined = styled(CloseOutlined)`
  position: absolute;
  top: 1%;
  right: 1%;
  cursor: pointer;
`

export const AuthorsContainer = styled(`div`)`
  width: 100%;
  padding: 10px;
  position: relative;
  box-sizing: border-box;
`

export const AuthorNameContainer = styled(`div`)`
  width: 100%;
  padding: 5px;
  position: relative;
  display: flex;
`

export const AuthorName = styled(`div`)`
  font-size: 20px;
`

export const ButtonContainer = styled(`div`)`
  position: absolute;
  bottom: 50px;
  right: 0;
`
