import React from 'react';

import './../App.css';
import './../styles/Global.css';
import './../styles/Login.css';

function Login() {
	return (
		<div id="Login">
			<strong>
				Cadastrar-se
			</strong>
			<form>
				<div class="input-block">
					<label htmlFor="email">Email</label>
					<input placeholder="Digite seu email" name="email" id="email" required/>
				</div>
				<div class="input-block">
					<label htmlFor="name">Nome</label>
					<input placeholder="Digite seu nome" name="name" id="name" required/>
				</div>
				<div class="input-block">
					<label htmlFor="series">Séries</label>
					<input placeholder="Digite suas séries favoritas, separe-as por ," name="series" id="series" required/>
				</div>

				<div class="input-block">
					<label htmlFor="instaUser">Usuário do instagram</label>
					<input placeholder="Digite o seu usuário do instagram" name="instaUser" id="instaUser"/>
				</div>
				<div class="input-group">
					<div class="coords">
						<label htmlFor="longitude">Longitude</label>
						<input type="number" name="longitude" id="longitude" required/>
					</div>
					<div class="coords">
						<label htmlFor="latitude">Latitude</label>
						<input type="number" name="latitude" id="latitude" required/>
					</div>
				</div>
				<div class="input-block bio">
					<label htmlFor="bio">Bio</label>
					<textarea placeholder="Conte um pouco sobre você" name="bio" id="bio" rows="3" />
				</div>
				<button class="save" size="lg" block variant="outline-success" type="submit">Cadastrar-se</button>
			</form>
		</div>
	);
}

export default Login;
