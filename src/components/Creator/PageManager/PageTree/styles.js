import styled from "styled-components/macro"

export const PageTreeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
`

export const TreeButtonWrapper = styled.div`
  width: auto;
  padding: 5px 5px 5px ${({paddingLeft}) => paddingLeft + "px" || "5px"};
  display: flex;
  border-radius: 5px;

  :hover {
    background-color: #e7e7e7;
    cursor: pointer;
  }
`

export const TreeButtonText = styled.div`
  color: #575757;
  font-size: 1rem;
  margin: auto 30px auto 10px;
  font-family: "Roboto", serif;
`