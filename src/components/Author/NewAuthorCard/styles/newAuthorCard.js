import styled from "styled-components/macro"

export const Container = styled.div`
  max-width: 100%;
  height: auto;
  background-color: whitesmoke;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
`

export const NameContainer = styled.div`
  width: 100%;
  display: flex;
`

export const Image = styled.div`
  width: 100%;
  margin: 5px auto 5px auto;
  height: 300px;
  background-image: url("${({image}) => image}");
  background-size: cover;
  background-position: center;
  position: relative;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`