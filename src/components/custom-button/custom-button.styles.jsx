import styled from 'styled-components';

import { MainTableColor, HoverRowColor } from '../../global.styles';

export const Button = styled.button`
    border: 1px solid #C0C0C0;
    transform: skew(-15deg);
    background-color: ${MainTableColor};
    color: #C0C0C0;
    width: 100%;
    height: 30px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: ${HoverRowColor};
    }
`