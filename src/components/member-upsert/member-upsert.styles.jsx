import styled from 'styled-components';

import { TitleColor, MainBackgroundColor, SubBackgroundColor, BorderColor } from '../../global.styles';

export const MemberUpsertContainer = styled.div`
    width: 400px; //600px for photo upload
    background-color: ${SubBackgroundColor};
    margin: 20px;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin: 0;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px;

    @media screen and (max-width: 800px) {
        padding: 0 10px;
    }
`;

export const ImageContainer = styled.div`
    background-color: ${MainBackgroundColor};
    border: solid 1px ${BorderColor};
    border-radius: 7px;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    text-align: center;
`;

export const TextInputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 20px;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        padding: 5px 0;
    }
`;

export const DateTimePickerContainer = styled.div`
    width: 100%;
    margin: auto;
`;

export const ButtonContainer = styled.div`
    margin: auto;
    width: 200px;
    text-align: center;
    padding: 20px;
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: ${TitleColor};
    padding: 5px;

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const Text = styled.div`
    width: 100px;
    padding: 0 10px;
    margin: auto;
`;