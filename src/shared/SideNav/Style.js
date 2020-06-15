import styled from "styled-components";

export const SideNavContainer = styled.div`
  height: 100%;
  width: 320px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #ffffff;
  box-shadow: -10px 0 25px 0 rgba(0, 0, 0, 0.13);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  display: ${props => (props.show === true ? "block" : "none")};
`;

export const CloseButton = styled.a`
position: absolute;
top: 5px;
right: 10px;
`;

export const Title = styled.div`
margin-left: 90px;
margin-top: -30px;
width: 94px;
height: 35px;
font-family: Roboto;
font-size: 30px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.17;
letter-spacing: 1.5px;
text-align: left;
color: #595959;
`;

export const FiltreIcon = styled.div`
  background-color: #ffe8c9;
  margin-left: 20px;
  margin-top: -5px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  text-align: center;
`;


export const InputFiltre = styled.input`
margin-left: 30px;
margin-top: 40px;
border-radius: 0;
outline: none;
box-shadow: none;
background: transparent;
border: 0;
border-bottom: 2px solid gray;
font-size: 20px;

&:focus {
  border-bottom-color: #ff9300;
}
`;


export const SearchContainer = styled.div`

`;

export const SearchWapper = styled.div`

`;

export const SearchInput = styled.input`
padding: 12px 24px;
transition: transform 250ms ease-in-out;
font-family: Roboto;
line-height: 18px;
color: #575756;
border: none;
border-bottom: 1px solid;
background-color: transparent;
background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
background-repeat: no-repeat;
background-size: 18px 18px;
background-position: 95% center;
transition: all 250ms ease-in-out;
backface-visibility: hidden;
transform-style: preserve-3d;
margin-left: 50px;
margin-top: 30px;

&::placeholder {
  text-transform: uppercase;
  font-family: Roboto;
  color: #aaaaaa;
}

&:hover,
&:focus {
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #ff9300;
    border-radius: 0;
    background-position: 100% center;
}
`;










