import styled from "styled-components";

export const Icon = styled.button`
  background: ${props => (props.color ? props.color : "#E3E5E3")};
  color: ${props => (props.color === "transparent" ? "gray" : (props.color !== "#fff" ? "#fff" : "#854e56"))};
  padding: 0.4em 0.6em;
  border: 1px solid ${props => (props.color !== "#fff" ? "#fff" : "#854e56")};
  border-radius: 5px;
  outline:none;
`;

export const Group = styled.div`
margin:0 auto;
display:block;
position:relative;
display:inline-block;
vertical-align:right;
margin-left: 770px;
`;