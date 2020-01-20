import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import {
  MemberUpsertContainer,
  FormContainer,
  InputContainer,
  DateTimePickerContainer,
  ButtonContainer,
  Title,
  Text,
  Input
} from './member-upsert.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


const MemberUpsert = ({ id, type }) => {
  const [members, setMembers] = useState({
    name: '',
    email: '',
    phone: '',
    dob: ''
  });

  const { name, email, phone, dob } = members;

  useEffect(() => {
    console.log('im called');
  //   const fetchMember = async() => {
  //     const res = await fetch('url');
  //     const members = await res.json()
  //     setMember(member[0]);

  //     fetchMember()
  // }
  })

const handleSubmit = type => event => {
  event.preventDefault();

  if (type == 'add')
  {
    axios
    .post(`url`)
    .then(res => {
      console.log(res.data);
    })
  }else if (type == 'edit')
  {
    axios
    .put(`url`)
    .then(res => {
      console.log(res.data);
    })
  }else if (type == 'delete')
  {
    axios
    .patch(`url`)
    .then(res => {
      console.log(res.data);
    })

  }
}

const handleChange = event => {
  const { name, value } = event.target;

  setMembers({ ...members, [name]: value });
}
  
  return (
    <MemberUpsertContainer>
      <Title>{type == 'add' ? 'Add Player' : 'Edit Player'}</Title>
      <FormContainer onSubmit={handleSubmit({type})}>
        <InputContainer>
          <Text>Name: </Text>
          <FormInput
            name='name'
            type='text'
            value={name}
            handleChange={handleChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <Text>Email: </Text>
          <FormInput
            name='email'
            type='text'
            value={email}
            handleChange={handleChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <Text>Phone: </Text>
          <FormInput
            name='phone'
            type='text'
            value={phone}
            handleChange={handleChange}
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
    </MemberUpsertContainer>
  )
}

export default MemberUpsert;

