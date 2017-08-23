import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Roster from './components/Roster';
import Schedule from './components/Schedule';

export default (
	<Switch>
		<Route exact path='/' component={Home}></Route>
		<Route path='/roster' component={() => {
			return(
				<Roster>
					<h1>Test</h1>
					
				</Roster>
			)

		}}></Route>
		<Route path='/schedule' component={Schedule}></Route>
	</Switch>
)