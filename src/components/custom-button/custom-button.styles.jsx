import styled, {css}from 'styled-components';

import { MainTableColor } from '../../global.styles';

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
        background-color: #4d1f7a;
    }
`
//     min-width: 165px;
//     width: auto;
//     height: 50px;
//     letter-spacing: 0.5px;
//     line-height: 50px;
//     padding: 0 35px 0 35px;
//     font-size: 15px;
//     background-color: black;
//     color: white;
//     text-transform: uppercase;
//     font-family: 'Open Sans Condensed';
//     font-weight: bolder;
//     border: none;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
  
//     &:hover {
//       background-color: white;
//       color: black;
//       border: 1px solid black;
//     }
    
//     &.google-sign-in {
//         background-color: #4285f4;
//         color: white;

//         &:hover {
//             background-color: #357ae8;
//             border: none;
//         }
//     }

//     &.inverted {
//       background-color: white;
//       color: black;
//       border: 1px solid black;

//       &:hover {
//         background-color: black;
//         color: white;
//         border: none;
//       }
//     }
//   }
  