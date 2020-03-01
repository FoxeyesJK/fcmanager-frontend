import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import DatePicker from 'react-widgets/lib/DatePicker';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomDropdown from '../custom-dropdown/custom-dropdown.component';

import { postMembersStart, putMembersStart } from '../../redux/member/member.actions';
import { selectRoles } from '../../redux/role/role.selectors';
import { selectTeams } from '../../redux/team/team.selectors';
import { selectCurrentMemberId, selectMemberItem} from '../../redux/member/member.selectors';
import { selectCurrentLeagueId } from '../../redux/league/league.selectors';

import {
  MemberUpsertContainer,
  FormContainer,
  FormContentContainer,
  TextInputContainer,
  InputContainer,
  DateTimePickerContainer,
  ButtonContainer,
  Title,
  Text,
} from './member-upsert.styles';


const MemberUpsert = () => {
  const member = useSelector(selectMemberItem, shallowEqual)
  const [members, setMembers] = useState(member);

  const { name, email, phone, dob, startedOn, roleId, teamId, clubId } = members;
  const currentMemberId = useSelector(selectCurrentMemberId, shallowEqual)
  const currentLeagueId = useSelector(selectCurrentLeagueId, shallowEqual)
  const teams = useSelector(selectTeams, shallowEqual)
  const roles = useSelector(selectRoles, shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    setMembers(member)
  }, [member]);

  useEffect(() => {
    setMembers(members)
  }, [members]);


const handleSubmit = event => {
  event.preventDefault();

  console.log(currentLeagueId)
  currentMemberId > 0 ? dispatch(putMembersStart({...members, leagueId: currentLeagueId})) : dispatch(postMembersStart({...members, leagueId: currentLeagueId}));
  //dispatch(setCurrentMemberId(undefined))
}

const handleChange = event => {
  const { name, value } = event.target;

  setMembers({ ...members, [name]: value });
}
  
  return (
    <MemberUpsertContainer>
      <Title>Update Player</Title>
      <FormContainer onSubmit={handleSubmit}>
        <FormContentContainer>
        {/* <ImageContainer>
          <ImageInput
            id='photo'
            name='file'
            type='file'
            label='Upload Photo'
            handleChange={handleChange}
          />
        </ImageContainer> */}
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
              name='team'
              value={teamId}
              handleChange={team => setMembers({ ...members, teamId: team.value })}
              options={teams}
              required
            />
          </InputContainer>
          <InputContainer>
            <Text>Role: </Text>
            <CustomDropdown
              name='role'
              value={roleId}
              handleChange={role => setMembers({ ...members, roleId: role.value })}
              options={roles}
              required
            />
          </InputContainer>
          <InputContainer>
            <Text>Joined: </Text>
            <DateTimePickerContainer>
              <DatePicker 
                defaultValue={new Date()} 
                onChange={value => setMembers({ ...members, startedOn: value })}
                value={startedOn !== null ? new Date(startedOn) : new Date()}
              />
            </DateTimePickerContainer>
          </InputContainer>
          <InputContainer>
            <Text>DOB: </Text>
            <DateTimePickerContainer>
              <DatePicker 
                defaultValue={new Date()} 
                onChange={value => setMembers({ ...members, dob: value })}
                value={dob !== null ? new Date(dob) : new Date()}
              />
            </DateTimePickerContainer>
          </InputContainer>
        </TextInputContainer>
        </FormContentContainer>
        <ButtonContainer>
            <CustomButton type='submit'>Save</CustomButton>
          </ButtonContainer>
      </FormContainer>
    </MemberUpsertContainer>
  )
}

export default MemberUpsert;


