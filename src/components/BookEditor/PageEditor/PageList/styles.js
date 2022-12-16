import styled from "styled-components/macro"

export const ListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`

export const StyledListHeader = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #282c34;
  display: flex;
  gap: 4px;
`

export const StyledListItem = styled.div`
  width: 100%;
  margin-left: 10px;
  padding: 10px 10px 10px 30px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #282c34;
  display: flex;
  gap: 4px;
  transition: 200ms ease-in-out;
  position: relative;

  &:hover {
    background-color: #e7e6e6;
  }
`

export const ListButton = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`