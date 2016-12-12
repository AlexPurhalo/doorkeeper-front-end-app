// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Callback from './components/callback';

// Routes definition
export default (
	<Route path="/" component={App}>
		<Route path='/oauth/callback' component={Callback} />
	</Route>
);
