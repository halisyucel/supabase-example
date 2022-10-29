import { NextPage } from 'next';
import { FormEvent, useCallback, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';

const Signup: NextPage = () => {
	const router = useRouter();
	const supabase = useSupabaseClient();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');

	const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { error } = await supabase.auth.signUp({ email, password });
		if (error)
			return setError(error.message);
		await router.push('/');
	}, [email, password, router, supabase.auth]);

	return (
		<Layout>
			<h1>Sign up</h1>
			<form onSubmit={handleSubmit}>
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
		</Layout>
	)
}

export default Signup;