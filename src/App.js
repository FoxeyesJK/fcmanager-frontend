import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './global.styles';
import {
  AppContainer, 
  Body,
  BodyContainer,
} from './App.styles';

import HomePage from './pages/homepage/homepage.component';
import Member from './pages/member/member.component';
import League from './pages/league/league.component';
import Fixture from './pages/fixture/fixture.component';
import User from './pages/user/user.component';
import Fetching from './components/fetching/fetching.component';
import Header from './components/header/header.component';
import SubHeader from './components/sub-header/sub-header.component';

import Menu from './components/menu/menu.component';


class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <Menu />
        <Fetching />
        <Body>
          <Header />
          <SubHeader />
          <BodyContainer>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/member' component={Member} />
              <Route exact path='/league' component={League} />
              <Route exact path='/fixture' component={Fixture} />
              <Route exact path='/user' component={User} />
            </Switch>
          </BodyContainer>
        </Body>
      </AppContainer>
    );
  }
}

export default App;