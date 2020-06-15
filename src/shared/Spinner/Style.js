import styled from "styled-components";

export const LoadingSpinner = styled.div`
width: 28px;
height: 28px;
position: relative;
padding: 4px 0 0 4px;
overflow: hidden;
-webkit-animation-duration: 1000ms;
-webkit-animation-iteration-count: infinite;
-webkit-animation-timing-function: steps(8, end);
-webkit-animation-name: rotate;
-moz-animation-duration: 1000ms;
-moz-animation-iteration-count: infinite;
-moz-animation-timing-function: steps(8, end);
-moz-animation-name: rotate;
-ms-animation-duration: 1000ms;
-ms-animation-iteration-count: infinite;
-ms-animation-timing-function: steps(8, end);
-ms-animation-name: rotate;
animation-duration: 1000ms;
animation-iteration-count: infinite;
animation-timing-function: steps(8, end);
animation-name: rotate;
transform: rotate(360deg);
`;

export const LoadingBall = styled.div`
width: 6px;
height: 6px;
border-radius: 100%;
position: absolute;
-webkit-transform-origin: 12px 12px;
-moz-transform-origin: 12px 12px;
-ms-transform-origin: 12px 12px;
transform-origin: 12px 12px;
background: #0072c6;
`;

export const LoadingContainer = styled.div`
width: 32px;
height: 32px;
display: block;
vertical-align: top;
margin-left: auto;
margin-right: auto;
`;