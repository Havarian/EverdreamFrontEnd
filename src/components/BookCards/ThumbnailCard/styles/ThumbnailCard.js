import styled from "styled-components/macro"

export const ThumbnailCardContainer = styled.div`
  height: 11.25vw;
  background-image: url("${({image}) => image}");
  background-size: cover;
  background-position: center;
  display: flex;
  flex: 0 0 20vw;
  text-align: center;
  margin: 0 0.2vw;
  transition: ease-in-out;
  transition-duration: 400ms;

  @media (max-width: 600px){
    flex: 0 0 32vw;
    height: 18vw;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
`


