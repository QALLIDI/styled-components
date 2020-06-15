import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 15px;
  border-radius: 13px;
  background: #b2ebf2;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
     margin: -1.4px;
    background: #00bcd4;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 15px;
  &:checked + ${CheckBoxLabel} {
    background: #f0f0f0;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      background: #ffffff;
      margin: -1.4px;
      margin-left: 25px;
      transition: 0.2s;
    }
  }
`;
