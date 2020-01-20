import React from 'react';

import {
  MemberAddContainer,
  FormContainer,
  InputContainer,
  Text,
  Input
} from './member-add.styles';

import FormInput from '../form-input/form-input.component';

const MemberAdd = ({ }) => {
  //const { name, email, imageUrl } = item;
  return (
    <MemberAddContainer>
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
          <FormInput
            name='title'
            type='text'
            value='text'
            handleChange='text'
            required
          />
        </InputContainer>
      </FormContainer>
    </MemberAddContainer>
  )
}

export default MemberAdd;

