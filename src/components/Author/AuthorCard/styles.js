import styled from "styled-components/macro"

export const AuthorCardWrapper = styled.div`
  width: 400px;
  border-radius: 10px;
  background-color: whitesmoke;
  margin: auto;
  display: flex;
  flex-direction: column;
`

export const ProfilePicContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin: 0 auto;
  }
`

export const AuthorTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  a {
    text-decoration: none;
    color: black;
    padding: 10px;
    transform: translateX(-100%);
  }
`

export const AuthorCardText = styled.div`
  color: #000000;
  padding: 5px;
  box-sizing: border-box;
  font-size: ${({fontSize}) => fontSize ? fontSize : "18px" };
  font-family: Roboto, sans-serif;
`

export const AuthorDescription = styled.div`
  color: #000000;
  padding: 5px;
  box-sizing: border-box;
  font-size: ${({fontSize}) => fontSize ? fontSize : "16px" };
  font-family: Roboto, sans-serif;
  width: 350px;
  height: 100px;
  text-align: justify;
`

export const AuthorTypeContainer = styled.div`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  margin: auto;
`