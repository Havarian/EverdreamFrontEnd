import styled from "styled-components";

export const BillboardContainer = styled.div`
  width: 100%;
  height: 40vw;
  margin: auto;
  background-position: center;
  background-size: cover;
  background-image: url("${({image}) => image}");
  position: relative;
`

export const BillboardShadow = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  position: relative;
  background: linear-gradient(90deg, rgba(0,0,0,0.8) 20%, rgba(255,255,255,0) 70%);
  display: block;
`

export const BillboardTextPane = styled.div`
  width: 50%;
  height: auto;
  position: absolute;
  padding: 30px 45px;
  box-sizing: border-box;
  bottom: 0;
`

export const BillboardTitle = styled.div`
  max-width: 30vw;
  font-size: 2rem;
  color: whitesmoke;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`
export const BillboardButtonContainer = styled.div`
  width: 100%;
  display: flex;
`

export const BillboardDescription = styled.div`
  font-size: 1.2rem;
  max-width: 100vw;
  text-align: justify;
  color: whitesmoke;
  margin: 20px 0 20px 0;
  
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`
