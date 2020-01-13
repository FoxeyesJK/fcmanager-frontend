import Styled from 'styled-components';

export const FixturePreviewContainer = Styled.div`

`;

export const Title = Styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #A9A9A9;
    padding: 5px 3px;
`;

export const FixtureItemContainer = Styled.div`
    display: flex;
    justify-content: space-between;
`;
export const TableBody = Styled.div`
    > div:nth-child(odd) {background-color: #3e1964;}
    > div:nth-child(even) {background-color: #321450;}
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