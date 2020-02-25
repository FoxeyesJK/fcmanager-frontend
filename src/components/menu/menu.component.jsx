import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import { 
  MenuContainer,
  TitleOptionContainer,
  TitleContainer,
  OptionsContainer,
  UserContainer,
  UserAdminContainer,
  UserLoginContainer,
  InputContainer,
  ButtonContainer,
  ClubName,
  ClubType,
  OptionLink,
  OptionName,
  UserTitle,
  StyledLeagueIcon,
  StyledScheduleIcon,
  StyledSquadIcon,
  StyledAdminIcon
} from './menu.styles.jsx';

import MenuInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { setCurrentUser } from '../../redux/user/user.actions';
import { selectIsAdmin } from '../../redux/user/user.selectors';

const Menu = () => {
  const [user, setUser] = useState({username: null, password: null})
  const isAdmin = useSelector(selectIsAdmin, shallowEqual)

  const dispatch = useDispatch();
  const { username, password } = user;

  const handleLoginClick = event => {
    dispatch(setCurrentUser({username: 'Administrator', password: user.password}))

    if (user.password !== 'fc2020')
      alert('Invalid password.')
  }

  const handleLogoutClick = event => {
    dispatch(setCurrentUser({username: null, password: null}))
  }

  const handleChange = event => {
    const { name, value } = event.target;
  
    setUser({ ...user, [name]: value });
  }

  

  return (
  <MenuContainer>
    <TitleOptionContainer>
      <TitleContainer>
        <ClubName>Northern Valley FC</ClubName>
        <ClubType>football club</ClubType>
      </TitleContainer>
      <OptionsContainer>
        <OptionLink to='/member'>
          <StyledSquadIcon />
          <OptionName>Players</OptionName>
        </OptionLink>
        <OptionLink to='/member-admin'>
          <StyledSquadIcon />
          <OptionName>Players-Admin</OptionName>
        </OptionLink>
        {/* <OptionLink to='/strategy'>
          <StrategyIcon className='icon' />
          <OptionName>Strategy</OptionName>
        </OptionLink>
        <OptionLink to='/payment'>
          <PaymentIcon className='icon' />
          <OptionName>Payment</OptionName>
        </OptionLink> */}
        <OptionLink to='/league'>
          <StyledLeagueIcon/>
          <OptionName>League</OptionName>
        </OptionLink>
        <OptionLink to='/fixture'>
          <StyledScheduleIcon/>
          <OptionName>Fixture</OptionName>
        </OptionLink>
        <OptionLink to='/fixture-admin'>
          <StyledScheduleIcon/>
          <OptionName>Fixture-Admin</OptionName>
        </OptionLink>
        </OptionsContainer>
      </TitleOptionContainer>
      {
        isAdmin ?
        <UserAdminContainer isAdmin>
          <StyledAdminIcon />
          <UserTitle>Adminintrator Access Allowed</UserTitle>
          <ButtonContainer>
            <CustomButton handleClick={handleLogoutClick}>Logout</CustomButton>
          </ButtonContainer>
        </UserAdminContainer> :
        <UserContainer>
          <UserTitle>Administrator</UserTitle>
          <UserLoginContainer>
          <InputContainer>
            <MenuInput
              name='password'
              type='password'
              value={password}
              handleChange={handleChange}
              required
            />
          </InputContainer>
          <ButtonContainer>
            <CustomButton handleClick={handleLoginClick}>Login</CustomButton>
          </ButtonContainer>
          </UserLoginContainer>
        </UserContainer>
      }
  </MenuContainer>
  )
};


export default Menu;