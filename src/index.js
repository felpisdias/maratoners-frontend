import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import './styles/Global.css';

import TopBar from './components/TopBar';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
	<div>
		<TopBar />
    	<Routes />
	</div>
  </React.StrictMode>,
  document.getElementById('root')
);
