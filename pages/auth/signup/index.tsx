import { NextPage } from 'next';
import { FormEvent, useCallback, useState } from 'react';
import axios from 'axios';

const Signup: NextPage = () => {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');
	const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		axios({
			method: 'POST',
			url: '/api/auth/signup',
			data: {
				firstName,
				lastName,
				email,
				password,
			}
		})
			.then(({ data }) => {
				console.log(data);
			})
			.catch(({ response }) => {
				setError(response.data.error);
			});

	}, [firstName, lastName, email, password]);
	return (
		<div>
			<h1>Sign up</h1>
			<hr/>
			<form onSubmit={handleSubmit}>
				<label>
					<input
						type={'text'}
						placeholder={'First name'}
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</label>
				<label>
					<input
						type={'text'}
						placeholder={'Last name'}
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</label>
				<label>
					<input
						type={'email'}
						placeholder={'Email'}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					<input
						type={'password'}
						placeholder={'Password'}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<button type={'submit'}>Sign up</button>
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
}

export default Signup;