import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import React from 'react'
import ReactDOM from 'react-dom';

import {onAuthChange, router} from '../imports/routes/routes';
import App from '../imports/ui/App';

//Auto auth checker
Tracker.autorun(() => {
  let isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
})

Meteor.startup(() => {
  ReactDOM.render(router, document.getElementById('app'));
})