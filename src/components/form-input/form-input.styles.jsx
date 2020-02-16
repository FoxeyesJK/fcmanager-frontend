import styled, { css } from 'styled-components';
import { MainTableColor, MainBackgroundColor, HoverRowColor } from '../../global.styles';

export const FormInputContainer = styled.div`
  width: 100%;

`;

export const Input = styled.input`
  width: 100%;
  text-align: center;
  background-color: ${MainBackgroundColor};
  border: solid 1px ${MainBackgroundColor};
  border-radius: 7px;
  height: 30px;
  color: #FFFFFF;
  text-align: left;
  padding: 10px;
`;

export const Label = styled.label`

`;