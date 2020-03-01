import React, { useState } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';
import { selectIsAdmin } from '../../redux/user/user.selectors';

import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'

import { 
  UserPage,
  UserContainer,
  UserAdminContainer,
  UserLoginContainer,
  InputContainer,
  InputText,
  ButtonContainer,
  UserTitle
} from './user.styles.jsx';



const User = () => {
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
    <UserPage>
        {
        isAdmin ?
        <UserAdminContainer isAdmin>
          <UserTitle>Logged in as Adminintrator</UserTitle>
          <ButtonContainer>
            <CustomButton handleClick={handleLogoutClick}>Logout</CustomButton>
          </ButtonContainer>
        </UserAdminContainer> :
        <UserContainer>
          <UserTitle>Administrator Login</UserTitle>
          <UserLoginContainer>
          <InputContainer>
            <InputText>Password</InputText>
            <FormInput
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
    </UserPage>
    )
}

export default User;