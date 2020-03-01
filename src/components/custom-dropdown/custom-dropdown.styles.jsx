import styled from 'styled-components';
import Select from 'react-select';

import { MainBackgroundColor, BorderColor } from '../../global.styles';

export const Dropdown = styled.div`
    width: 100%;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  border-radius: 20px;
  div {
    background-color: ${MainBackgroundColor};
    color: white;
    cursor: pointer;

    &:hover {
      background-color: ${MainBackgroundColor};
    }
  }

  > div:nth-of-type(1) {
    transform: skew(-15deg);
    border: solid 1px ${BorderColor}
    &:hover * {
      background-color: ${MainBackgroundColor};
    }
  }

  > div:nth-of-type(2) {
      transform: skew(0);
    }
`;

export const RequiredInput = styled.input`
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
`;

