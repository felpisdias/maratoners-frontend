import './../styles/Form.css';

import React,{ useEffect, useState } from 'react';

function Register() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [series, setSeries] = useState('');
	const [instaUser, setInstaUser] = useState('');
	const [longitude, setLongitude] = useState('');
	const [latitude, setLatitude] = useState('');
	const [bio, setBio] = useState('');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;

				setLatitude(latitude);
				setLongitude(longitude);
			},
			(err) => {
				console.log(err);
			},
			{
				timeout: 30000,
			}
		);
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();
	};

	return (
		<div id="Form">
			<strong id="title">
				Cadastrar-se
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
					<label htmlFor="name">Nome</label>
					<input
						placeholder="Digite seu nome"
						name="name"
						id="name"
						required
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div className="input-block">
					<label htmlFor="series">Séries</label>
					<input
						placeholder="Digite suas séries favoritas, separe-as por ,"
						name="series"
						id="series"
						required
						value={series}
						onChange={e => setSeries(e.target.value)}
					/>
				</div>

				<div className="input-block">
					<label htmlFor="instaUser">Usuário do instagram</label>
					<input
						placeholder="Digite o seu usuário do instagram"
						name="instaUser"
						id="instaUser"
						value={instaUser}
						onChange={e => setInstaUser(e.target.value)}
					/>
				</div>
				<div className="input-group">
					<div className="coords">
						<label htmlFor="longitude">Longitude</label>
						<input
							type="number"
							name="longitude"
							id="longitude"
							required
							value={longitude}
							onChange={e => setLongitude(e.target.value)}
						/>
					</div>
					<div className="coords">
						<label htmlFor="latitude">Latitude</label>
						<input
							type="number"
							name="latitude"
							id="latitude"
							required
							value={latitude}
							onChange={e => setLatitude(e.target.value)}
						/>
					</div>
				</div>
				<div className="input-block">
					<label htmlFor="bio">Bio</label>
					<textarea
						placeholder="Conte um pouco sobre você"
						name="bio"
						id="bio"
						rows="3"
						value={bio}
						onChange={e => setBio(e.target.value)}
					/>
				</div>
				<button className="submit" type="submit">Cadastrar-se</button>
			</form>
		</div>
	);
}

export default Register;
