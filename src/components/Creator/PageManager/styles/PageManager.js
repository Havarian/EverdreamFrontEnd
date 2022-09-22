import styled from "styled-components/macro"

export const PageCreatorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
`

export const PageListContainer = styled.div`
  width: 30%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
`

export const PageEditContainer = styled.div`
  width: 70%;
  background-color: whitesmoke;
`

export const PageListItem = styled.div`
  padding: 4px;
  margin: 4px 4px 4px ${({marginLeft}) => marginLeft};
`