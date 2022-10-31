import styled from "styled-components/macro"
import {ThumbnailCardContainer} from "../../BookCards/ThumbnailCard/styles";

export const SliderItem = styled.div`
   height: 11.25vw;
  background-image: url("${({image}) => image}");
  background-size: cover;
  background-position: center;
   flex: 0 0 20vw;
   text-align: center;
   margin: 0 0.2vw;
   transition: ease-in-out;
   transition-duration: 400ms;
  position: relative;

   @media (max-width: 600px){
     flex: 0 0 32vw;
     height: 18vw;
   }
`

export const ItemButtonContainer = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: none;
`


export const SliderContainer = styled.div`
  display: flex;
  padding: 0.3vw 0.6vw 1vw 0.6vw;
  // &:hover ${SliderItem}{
  //   transform: translateX(-25%);
  // }
  
    ${SliderItem}:first-child {
      :hover {
        transform: scale(1.5) translateX(15%);
        border: whitesmoke 0.02vw solid;
        z-index: 5;
      }
      // :hover ~${SliderItem} {
      //   transform: translateX(47%);
      // }
    }

  ${SliderItem}:last-child {
    :hover {
      transform: scale(1.5) translateX(-15%);
      border: whitesmoke 0.02vw solid;
      z-index: 1;
    }
  }
    
    ${SliderItem} {
      :hover {
        transform: scale(1.5);
        border: whitesmoke 0.02vw solid;
        ${ItemButtonContainer} {
          display: block;
        }
      }
      // :hover ~${SliderItem} {
      //   transform: translateX(25%);
      // }
    }
`

