import React from 'react';
import {
	BrowserRouter as Router
} from 'react-router-dom';
import App from './App';

const Routes = () => {
	return (
		<Router>
			<div>
				<App />
			</div>
		</Router>
	);
};

export default Routes;
