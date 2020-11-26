import React from 'react';
import {
  Navbar,
} from 'reactstrap';

import '../styles/TopBar.css';

function Header() {

	return (
		<Navbar className="topbar" color="red" expand="xs">
			<div className="link-topbar">
				<a href="http://localhost:3000/cadastro">Cadastrar-se</a>
			</div>

			<div className="link-topbar">
				<a href="http://localhost:3000/">Maratoners</a>
			</div>

			<div className="link-topbar">
				<a href="http://localhost:3000/construction">Perfil</a>
			</div>

			<div className="link-topbar">
				<a href="http://localhost:3000/login">Login</a>
			</div>
		</Navbar>
	);
}

export default Header;