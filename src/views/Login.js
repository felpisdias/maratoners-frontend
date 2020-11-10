import './../styles/Form.css';
import './../styles/Global.css';

import React, {useState} from 'react';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
	};
	return (
		<div id="Form">
			<strong id="title">
				Bem vindo Maratoner
			</strong>
				<form onSubmit={handleSubmit}>
					<div className="input-block">
						<label htmlFor="email">Email</label>
						<input
							placeholder="Digite seu email"
							name="email"
							id="email"
							required
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="input-block">
						<label htmlFor="name">Senha</label>
						<input
							placeholder="Digite sua senha"
							name="password"
							id="password"
							required
							type="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<button className="submit" type="submit">Login</button>
			</form>
			<div id="register">
				<strong id="title">
					Ainda não tem conta ? Cadastre-se
				</strong>
				<button className="submit">
					<a className="submit" href="http://localhost:3000/cadastro">Cadastrar-se</a>
				</button>
			</div>
		</div>
	);
}

export default Login;