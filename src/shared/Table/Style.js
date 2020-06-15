import styled from "styled-components";

export const TableContainer = styled.div`
width: 100%;
background: #fff;
display: -webkit-box;
display: -webkit-flex;
display: -moz-box;
display: -ms-flexbox;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
margin-bottom: 50px;
margin-top: 100px;
`;

export const TableWapper = styled.div`
width: 1170px;
position: relative;
padding-top: 60px;
border-radius: 5px;
box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
background-color: var(--white);
`;

export const TableHead = styled.div`
position: absolute;
font-family: Roboto;
font-size: 16px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #5a5a5a;
width: 100%;
top: 0;
left: 0;

& th {
    padding-top: 18px;
    padding-bottom: 18px;
    width: 10%;
  }

& table {
    width: 100%;
}
`;

export const TableBody = styled.div`
background-color: #fff;
justify-content: center;
align-items: center;
font-family: Roboto;
font-weight: 300;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #5a5a5a;
width: 100%;
margin-top: 2px;
padding-bottom: 10px;

& td {
    padding-top: 18px;
    padding-bottom: 18px;
    width: 10%;
  }

& tr {
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
  background-color: var(--white);
}  

& table {
    width: 100%;
}
`;