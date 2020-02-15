import Styled, { css } from 'styled-components';
import { SelectedRowColor } from '../../global.styles';

const selectedMatchRowStyles = css`
    background-color: ${ SelectedRowColor} !important;
    border-radius: 5px !important;
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
        text-align: center;
        width: 25%;
    }
    &:nth-child(2) {
        text-align: left;
        width: 40%
        padding-left: 10px;
    }
    &:nth-child(3) {
        text-align: center;
        width: 20%
    }
    &:nth-child(4) {
        text-align: left;
        width: 35%;
        padding-left: 10px;
    }
`;