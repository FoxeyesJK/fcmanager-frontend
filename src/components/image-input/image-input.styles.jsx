import styled, { css } from 'styled-components';


export const FormInputContainer = styled.div`
  margin: auto;
`;

export const Input = styled.input`
  position: absolute;
  transform: skew(-15deg);
  width: 100px;
  height: 30px;
`;

export const Label = styled.label`
  position: relative;
  border: 1px solid #C0C0C0;
  transform: skew(-15deg);
  background-color: #3e1964;
  color: #C0C0C0;
  width: 100px;
  height: 30px;
  line-height: 30px; 
  display: inline-block;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #4d1f7a;
  }
`;