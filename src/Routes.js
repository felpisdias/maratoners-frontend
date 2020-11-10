import React from 'react';

import Login from './views/Login';
import Register from './views/Register';
import PageNotFound from './views/PageNotFound';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={App} />
				<Route path="/login" exact={true} component={Login} />
				<Route path="/cadastro" component={Register} />
				<Route path='*' component={PageNotFound} />
			</Switch>
		</ BrowserRouter>
	);
}

export default Routes;
