import styled from "styled-components";

export const Nav = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 2em;
position: fixed;
left: 0;
top: 0;
z-index: 100;
width: 100%;
box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
background-color: var(--white);
background: white;
`;

export const Logo = styled.a`

`;

export const Nom = styled.h1`
font-family: Roboto;
font-size: 20px;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
font-weight: bold;
color: #ec7c00;
float:right;
`;

export const Prenom = styled.h1`
font-family: Roboto;
font-size: 20px;
font-weight: 300;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #505050;
float:left;
margin-right: 7px;
`;

export const Label = styled.div`
float: right;
max-width: 840px;
height: 62px;
display: table-cell;
padding-top: 17px;
vertical-align: middle;
`;

export const Avatar = styled.div`

`;


