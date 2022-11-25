import styled, {css} from "styled-components/macro"

export const StyledButton = styled.div`
  //padding: 6px 16px;
  padding: ${({padding}) => padding ? padding : "6px 16px"};
  box-sizing: border-box;
  margin: 8px;
  background: transparent;
  border: whitesmoke 1px solid;
  color: whitesmoke;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-content: baseline;
    
    &:hover {
      background-color: rgba(255,255,255, .4);
      border-color: #282c34;
    }
  
  @media (max-width: 800px) {
    padding: 4px 24px;
  }
`

export const ButtonText = styled.div`
  margin-left: 8px;
  
  @media (max-width: 800px) {
    display: none;
  }
`