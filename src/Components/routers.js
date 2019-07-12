import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Email from '../Screens/email';
import Index from '../Screens/index';
import Password from '../Screens/password';
import RaceTime from '../Screens/raceTime';
import Races from '../Screens/races';
import TrackDetail from '../Screens/trackDetail';
import Settings from '../Screens/settings';

const AUTH = [
  { key: 'password',  component: Password},
  { key: 'index',     component: Index},
]

const MAIN = [
  { key: 'email',          component: Email},
  { key: 'racetime',       component: RaceTime},
  { key: 'races',          component: Races},
  { key: 'trackdetail',    component: TrackDetail},
  { key: 'settings',       component: Settings},
]

export const AuthPage = props => (
  <Router>
    <Stack key='root'>
     { AUTH.map(a => (<Scene key={a.key} component={a.component} hideNavBar />))}
     <Scene key="signin" component={Index} update={(res)=>props.logIn(res)} hideNavBar />
    </Stack>
  </Router>
)

export const MainPage = props => {

  return(
  <Router>
    <Stack key='root'>
    { MAIN.map(a => (<Scene key={a.key} component={a.component} hideNavBar />))}
    </Stack>
  </Router>)
}