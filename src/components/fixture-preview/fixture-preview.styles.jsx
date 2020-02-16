import Styled, { css } from 'styled-components';

import { MainTableColor, MainBackgroundColor, HoverRowColor } from '../../global.styles';

export const FixturePreviewContainer = Styled.div`

`;

export const Title = Styled.div`
    font-size: 14px;
    font-weight: bold;
    color: 	#E4BF3F;
    padding: 5px 20px;
`;

export const FixtureItemContainer = Styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TableBody = Styled.div`
    > div:nth-child(odd) {background-color: ${MainTableColor};}
    > div:nth-child(even) {background-color: ${MainBackgroundColor};}

    > div:hover { 
        background-color: ${HoverRowColor}
        > div {
            color : #FFFFFF;
            font-weight: bold;
        }
    }
`;
