import styled from "styled-components";

export const Button = styled.button`
  background: ${props => (props.color ? props.color : "#E3E5E3")};
  color: ${props => (props.color !== "#fff" ? "#fff" : "#854e56")};
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0.4em;
  padding: 0.5em 1em;
  border: 1px solid ${props => (props.color !== "#fff" ? "#fff" : "#854e56")};
  border-radius: 5px;
  outline:none;
`;
