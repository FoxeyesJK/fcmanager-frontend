import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import {
  MemberAddContainer,
  FormContainer,
  InputContainer,
  DateTimePickerContainer,
  ButtonContainer,
  Title,
  Text,
  Input
} from './member-add.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const MemberAdd = ({ }) => {
  //const { name, email, imageUrl } = item;
  return (
    <MemberAddContainer>
      <Title>Add Player</Title>
      <FormContainer>
        <InputContainer>
          <Text>Name: </Text>
          <FormInput
            name='title'
            type='text'
            value='text'
            handleChange='text'
            required
          />
        </InputContainer>
        <InputContainer>
          <Text>Email: </Text>
          <FormInput
            name='title'
            type='text'
            value='text'
            handleChange='text'
            required
          />
        </InputContainer>
        <InputContainer>
          <Text>Phone: </Text>
          <FormInput
            name='title'
            type='text'
            value='text'
            handleChange='text'
            required
          />
        </InputContainer>
        <InputContainer>
          <Text>BOA: </Text>
          <DateTimePickerContainer>
            <DateTimePicker defaultValue={new Date()} />
          </DateTimePickerContainer>
        </InputContainer>
        <ButtonContainer>
          <CustomButton>Save</CustomButton>
        </ButtonContainer>
      </FormContainer>
    </MemberAddContainer>
  )
}

export default MemberAdd;

