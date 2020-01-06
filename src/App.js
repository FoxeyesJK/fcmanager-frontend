import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Member from './pages/member/member.component';
import Strategy from './pages/strategy/strategy.component';
import League from './pages/league/league.component';
import Schedule from './pages/schedule/schedule.component';
import AdminLeague from './pages/admin-league/admin-league.component';
import AdminMember from './pages/admin-member/admin-member.component';
import Test from './components/test/test.component';

import Menu from './components/menu/menu.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Test />
        <div className='body'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/member' component={Member} />
            <Route exact path='/strategy' component={Strategy} />
            <Route exact path='/league' component={League} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/admin-league' component={AdminLeague} />
            <Route exact path='/admin-member' component={AdminMember} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;