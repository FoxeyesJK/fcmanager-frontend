import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import ImageInput from '../image-input/image-input.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';

import { postMembersStart, putMembersStart } from '../../redux/member/member.actions';

import {
  MemberUpsertContainer,
  FormContainer,
  FormContentContainer,
  ImageContainer,
  TextInputContainer,
  InputContainer,
  DateTimePickerContainer,
  ButtonContainer,
  Title,
  Text,
} from './member-upsert.styles';


const MemberUpsert = ({ type, postMembersStart, putMembersStart, member}) => {
  const [members, setMembers] = useState(member);

  const { name, email, phone, dob, roleId, clubId } = members;

  useEffect(() => {
    console.log('im called');
    console.log(members);
    setMembers(members)
  }, [members]);

const handleSubmit = type => event => {
  event.preventDefault();
  console.log('hi')
  console.log(members)
  type == 'add' ? postMembersStart(members) : putMembersStart(members);
}

const handleChange = event => {
  const { name, value } = event.target;

  setMembers({ ...members, [name]: value });
}
  
  return (
    <MemberUpsertContainer>
      <Title>{type == 'add' ? 'Add Player' : 'Edit Player'}</Title>
      <FormContainer onSubmit={handleSubmit(type)}>
        <FormContentContainer>
        <ImageContainer>
          <ImageInput
            id='photo'
            name='file'
            type='file'
            label='Upload Photo'
            handleChange={handleChange}
          />
        </ImageContainer>
        <TextInputContainer>
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
            <Text>Team: </Text>
            <CustomDropdown/>
          </InputContainer>
          <InputContainer>
            <Text>Role: </Text>
            <CustomDropdown/>
          </InputContainer>
          <InputContainer>
            <Text>Joined: </Text>
            <DateTimePickerContainer>
              <DateTimePicker defaultValue={new Date()} />
            </DateTimePickerContainer>
          </InputContainer>
          <InputContainer>
            <Text>BOA: </Text>
            <DateTimePickerContainer>
              <DateTimePicker defaultValue={new Date()} />
            </DateTimePickerContainer>
          </InputContainer>
        </TextInputContainer>
        </FormContentContainer>
        <ButtonContainer>
            <CustomButton>Save</CustomButton>
          </ButtonContainer>
      </FormContainer>
    </MemberUpsertContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  postMembersStart: (members) => dispatch(postMembersStart(members)),
  putMembersStart: (members) => dispatch(putMembersStart(members))
})

export default connect(null, mapDispatchToProps)(MemberUpsert);

