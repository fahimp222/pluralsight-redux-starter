import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/app';
import HopePage from './components/home/HomePage.react';
import ScheduleAssistPage from './components/scheduel_assist/ScheduleAssistPage.react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HopePage}/>
    <Route path="schedule_assist" component={ScheduleAssistPage} />
  </Route>
);
