import styled from "styled-components/macro"


export const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const CoverEditorContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5%;
  box-sizing: border-box;
`

export const CoverEditorBackground = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  background-image: url("${({coverImage}) => coverImage}");
  background-position: center;
  background-size: cover;
  box-shadow: inset 50vw 0 60vw -100px rgba(0,0,0,.6);
`

export const CoverEditorFormContainer = styled.div`
  width: 40%;
  position: absolute;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width:  800px) {
    width: calc(100% - 40px);
  }
`

export const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  color: white;
  font-family: Roboto, serif;
  font-size: 36px;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  box-sizing: border-box;

  &::placeholder {
    color: white;
    font-size: 24px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  &:focus {
    box-shadow: none;
  }
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  background-color: transparent;
  color: white;
  font-family: Roboto, serif;
  font-size: 18px;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  box-sizing: border-box;
  resize: none;
  
  &::placeholder {
    color: white;
    font-size: 18px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  &:focus {
    box-shadow: none;
  }
`

export const CoverEditorButtonArea = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
`

export const StyledText = styled.div`
  width: 100%;
  color: whitesmoke;
  font-family: Roboto,Calibri, sans-serif;
  font-size: ${({fontSize}) => fontSize ? fontSize : "18px"};
  margin: 5px;
  display: flex;
  align-items: center;
`

export const PagesButton = styled.div`
  height: 5%;
  padding: 10px;
  background-color: rgba(15, 15, 80, .5);
  border: 1px whitesmoke solid;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  transition: 500ms ease-in-out;
  
  & span {
    color: whitesmoke;
    font-size: 1rem;
  }

  &:hover {
    height: 10%;
  }
`

export const CoverButton = styled.div`
  width: 150px
`
