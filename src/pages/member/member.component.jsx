import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import _ from 'lodash';

import {
  MemberPage,
  MemberContainer,
  TitleContainer,
  Title
} from './member.styles';

import MemberPreview from '../../components/member-preview/member-preview.component';
import MemberUpsert from '../../components/member-upsert/member-upsert.component';
import { selectMembers, selectTeamMembers, selectCurrentMemberId } from '../../redux/member/member.selectors';
import { selectIsAdmin } from '../../redux/user/user.selectors';
import { setCurrentMemberId, addNewMember, deleteMembersStart } from '../../redux/member/member.actions';

import CustomIcon from '../../components/custom-icon-button/custom-icon-button.component';


const Member = () => {
  //const [button, setButton] = useState({ memberId: 0, type: '' })

  //const { memberId, type } = button;

  const dispatch = useDispatch();
  const currentMemberId = useSelector(selectCurrentMemberId, shallowEqual)
  const member = useSelector(selectMembers, shallowEqual)
  const [members, setMembers] = useState(member);
  const teamMembers = useSelector(selectTeamMembers, shallowEqual)
  const isAdmin = useSelector(selectIsAdmin, shallowEqual)

  const newMember = {
    id: 0,
    clubId: 1,
    teamId: 0,
    roleId: 0,
    startedOn: new Date(),
    dob: new Date(),
    phone: '',
    email: '',
    name: '',
  }


  useEffect(() => {
    setMembers(members)
  }, [currentMemberId]);

  
  const handleClick = (id, type) => {
    //setButton({ memberId: id, type: type });
    if (id === 0)
      dispatch(addNewMember(newMember))

    if (type === 'delete')
    {
      dispatch(deleteMembersStart(id))
    }
    dispatch(setCurrentMemberId(id))
  }
  
  
  return (
    <MemberPage>
      <TitleContainer>
        <Title>PLAYERS</Title>          
        {isAdmin ? <CustomIcon type='add' id={0} handleClick={handleClick} />: null}
      </TitleContainer>
      {/* {
      currentMemberId > 0 ?
        members
        .filter(member => member.id === currentMemberId)
        .map(member => 
        <MemberUpsert member={member} />) : null
        } */}
        {
          currentMemberId >= 0 ?
          <MemberUpsert /> : null
        }
      <MemberContainer>
      {
        currentMemberId === undefined &&
          teamMembers.value().map(({ ...otherMemberProps }, index) => (
            <MemberPreview key={index} {...otherMemberProps} handleClick={handleClick}/>
          ))
      }
      </MemberContainer>
    </MemberPage>
  )
}

export default Member;

