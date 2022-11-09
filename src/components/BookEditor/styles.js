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
  box-shadow: inset 40vw 0 50vw -100px rgba(0,0,0,.6);
`

export const CoverEditorFormContainer = styled.div`
  width: 40%;
  height: 50%;
  background-color: #688ab6;
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
`
