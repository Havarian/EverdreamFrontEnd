import styled from "styled-components/macro"

export const ExpandedCardContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  background-color: whitesmoke;
  border: 2px solid whitesmoke;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

export const Image = styled.div`
  width: 100%;
  height: 600px;
  background-image: url("${({image}) => image}");
  background-size: cover;
  background-position: center;
  position: relative;
  
`

export const Title = styled.div`
  font-size: 2rem;
  color: whitesmoke;
  flex-grow: 7;
  text-align: right;
`

export const ImageUtils = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  //background: linear-gradient(0deg, rgba(38, 38, 38, 1) 20%, rgba(255, 255, 255, 0) 70%);
  display: flex;
`

export const SubtitlesContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 20px 40px 20px 20px;
  box-sizing: border-box;
  color: whitesmoke;
  background-color: rgba(0,0,0,0.4);
`

export const ButtonsContainer = styled.div`
  
`

export const InfoContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  position: relative;
  background-color: rgba(38, 38, 38, 1);
`

export const DescriptionContainer = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  
`

export const AuthorsContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  box-sizing: border-box;
`