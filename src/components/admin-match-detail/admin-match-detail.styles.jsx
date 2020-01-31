import styled from 'styled-components';
import { TitleColor, MainTableColor, SubTableColor } from '../../global.styles';

export const AdminMatchDetailContainer = styled.div`
    font-size: 16px;
    width: 100%;
    padding: 10px 0px;
`;

export const Table = styled.div`
    background-color: ${MainTableColor};
    padding-top: 5px;
    width: 100%;
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    padding: 5px 3px;
`;
// .admin-match {
//     text-align: center;
//     font-size: 16px;

    // .admin-match-table {
    //     background-color: ${MainTableColor};
    //     width: 500px;
    //     .header {
    //         display: flex;
    //         justify-content: space-between;
    //     }

//         tr {
//             height: 41px;
//         }

//         .admin-match-container:nth-child(odd) {background-color: ${SubTableColor};}
//         .admin-match-container:nth-child(even) {background-color: ${MainTableColor};}
//     }
    
// }