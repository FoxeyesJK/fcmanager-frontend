import styled, { css } from 'styled-components';
import Select from 'react-select';

import { MainTableColor } from '../../global.styles';

export const HomePageContainer = styled.div`
  width: 300px;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  border-radius: 20px;
    

  div {
    background-color: ${MainTableColor};
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #4d1f7a;
    }
  }

  > div:nth-of-type(1) {
    transform: skew(-15deg);
    &:hover * {
      background-color: #4d1f7a;
    }
  }

  > div:nth-of-type(2) {
      transform: skew(0);
    }

`;
