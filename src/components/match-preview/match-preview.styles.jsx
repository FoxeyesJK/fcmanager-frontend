import Styled from 'styled-components';

import { TitleColor } from '../../global.styles';

export const MatchPreviewContainer = Styled.div`

`;

export const Title = Styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    padding: 5px 3px;
`;

export const MatchItemContainer = Styled.div`
    display: flex;
    justify-content: space-between;
`;



// .match-preview {
//     .title {
//         text-decoration: underline;
//         margin-bottom: 0;
//         margin-top: 20px;
//     }
//     .preview {
//         display: flex;
//         justify-content: space-between;
//     }
// }