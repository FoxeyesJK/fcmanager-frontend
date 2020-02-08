import Styled from 'styled-components';

import { MainTableColor, MainBackgroundColor } from '../../global.styles';

export const FixturePreviewContainer = Styled.div`

`;

export const Title = Styled.div`
    font-size: 14px;
    font-weight: bold;
    color: 	#C0C0C0;
    padding: 5px 20px;
`;

export const FixtureItemContainer = Styled.div`
    display: flex;
    justify-content: space-between;
`;
export const TableBody = Styled.div`
    > div:nth-child(odd) {background-color: ${MainTableColor};}
    > div:nth-child(even) {background-color: ${MainBackgroundColor};}
`;
