import { NextPage } from 'next';
import { FormEvent, useCallback, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
	const router = useRouter();
	const supabase = useSupabaseClient();
	
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');
	
	const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error)
			return setError(error.message);
		await router.push('/');
	}, [email, password, router, supabase.auth]);

	return (
		<Layout>
			<h2>Login</h2>
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
		</Layout>
	)
};

export default Login;