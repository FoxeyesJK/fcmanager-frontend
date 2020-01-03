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

import Menu from './components/menu/menu.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Menu />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);