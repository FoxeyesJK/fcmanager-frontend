import styled from 'styled-components';
import { SubBackgroundColor } from '../../global.styles';

export const UserPage = styled.div`
    width: 400px;
    padding: 20px;
    margin: auto;

    @media screen and (max-width: 500px) {
        width: 100%;
      }
`;

export const UserContainer = styled.div`
    background-color: ${SubBackgroundColor}
    padding: 20px;
`;

export const UserAdminContainer = styled.div`

`;

export const UserTitle = styled.div`
  font-size: 16px;
  padding: 5px;
  text-align: center;
`;

export const UserLoginContainer = styled.div`
    margin: auto;
`;

export const InputContainer = styled.div`

`;

export const InputText = styled.div`
`;

export const ButtonContainer = styled.div`
    margin: auto;
    width: 50%;
    padding: 10px;
`;

