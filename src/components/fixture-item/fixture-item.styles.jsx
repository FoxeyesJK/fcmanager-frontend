import Styled, { css } from 'styled-components';
import { MainTableColor, SelectedRowColor } from '../../global.styles';

const selectedMatchRowStyles = css`
    background-color: ${SelectedRowColor} !important;
    border-radius: 5px !important;
    
    > div {
        color: ${MainTableColor} !important;
        font-weight: bold !important;
    }
`;

const getSectedMatchRowStyles = props => {
    if (props.selectedMatchId === props.matchId)
        return selectedMatchRowStyles;
}

export const TableRow = Styled.div`
    text-align: center;
    display: flex;
    cursor: pointer;

    ${getSectedMatchRowStyles}
`;

export const TableData = Styled.div`
    padding: 5px 0;
    &:nth-child(1) {
        text-align: left;
        width: 30%;
        padding-left: 20px;
    }
    &:nth-child(2) {
        text-align: center;
        width: 35%
    }
    &:nth-child(3) {
        text-align: center;
        width: 20%
    }
    &:nth-child(4) {
        text-align: center;
        width: 35%;
    }
`;