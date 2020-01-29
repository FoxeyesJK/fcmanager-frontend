import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import ImageInput from '../image-input/image-input.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';

import { postMembersStart } from '../../redux/member/member.actions';

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


const MemberUpsert = ({ type, postMembersStart, member}) => {
  const [members, setMembers] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    roleId: 1,
    clubId: 1
  });

  const { name, email, phone, dob, roleId, clubId } = member != null ? member : members;

  useEffect(() => {
    console.log('im called');
    setMembers(member)
  }, []);

const handleSubmit = type => event => {
  event.preventDefault();
  const { payload } = members;
  postMembersStart(members)
  //id == 0 ? postMembersStart(members) : putMembersStart(members);
}

const handleChange = event => {
  const { name, value } = event.target;

  setMembers({ ...members, [name]: value });
}
  
  return (
    <MemberUpsertContainer>
      <Title>{type == 'add' ? 'Add Player' : 'Edit Player'}</Title>
      <FormContainer onSubmit={handleSubmit({type})}>
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
            <CustomDropdown
            
            />
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
  postMembersStart: (members) => dispatch(postMembersStart(members))//(console.log(members)) //dispatch(postMembersStart({members})))
})

export default connect(null, mapDispatchToProps)(MemberUpsert);

