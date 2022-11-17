import styled from "styled-components/macro"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

export const StyledSliderItem = styled.div`
  width: 300px;
  height: 168px;
  background-image: url("${({image}) => image}");
  background-size: cover;
  background-position: center;
   //flex: 0 0 20vw;
  text-align: center;
  transition: ease-in-out;
  transition-duration: 400ms;
  position: relative;
  @media (max-width: 900px){
    width: 200px;
    height: 120px;
   }
  //@media (max-width: 600px){
  //  width: 120px;
  //  height: 80px;
  //}
`

export const ItemButtonContainer = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: none;
`

export const ArrowButton = styled.div`
  height: 100%;
  width: 50px;
  background-color: rgba(0,0,0,.5);
  position:absolute;
  display: flex;
  vertical-align: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 10;
`

export const SliderWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
`

export const SliderContainer = styled.div`
  position: relative;
  gap: 8px;
  display: flex;
  padding: 0 0 0 0.6vw;
  transform: translateX(0);
  &:hover ${StyledSliderItem}{
    transform: translateX(-25%);
  }
  
    ${StyledSliderItem}:first-child {
      :hover {
        transform: scale(1.5) translateX(15%);
        border: whitesmoke 0.02vw solid;
        z-index: 5;
      }
      :hover ~${StyledSliderItem} {
        transform: translateX(47%);
      }
    }

  ${StyledSliderItem}:last-child {
    :hover {
      transform: scale(1.5) translateX(-15%);
      border: whitesmoke 0.02vw solid;
      z-index: 1;
    }
  }
    
    ${StyledSliderItem} {
      :hover {
        transform: scale(1.5);
        border: whitesmoke 0.02vw solid;
        ${ItemButtonContainer} {
          display: block;
        }
      }
      :hover ~${StyledSliderItem} {
        transform: translateX(25%);
      }
    }
`

