import { NextPage } from 'next';
import { FormEvent, useCallback, useState } from 'react';
import axios from 'axios';

const Login: NextPage = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');
	const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		axios({
			method: 'POST',
			url: '/api/auth/login',
			data: {
				email,
				password,
			}
		})
			.then(({ data }) => {
				console.log(data);
			})
			.catch(({ response }) => {
				setError(response.data.message);
			});
	}, [email, password]);
	return (
		<div>
			<h1>Login</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<label>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<button type="submit">Login</button>
			</form>
			<div style={{
					color: 'red',
					fontStyle: 'italic',
					marginTop: '1rem'
			}}>
				{error}
			</div>
		</div>
	)
};

export default Login;