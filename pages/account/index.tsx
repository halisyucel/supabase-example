import { NextPage } from 'next';
import Layout from '../../components/Layout';
import { useCallback } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

const Account: NextPage = () => {
	const router = useRouter();
	const supabase = useSupabaseClient();

	const handleLogout = useCallback(async () => {
		await supabase.auth.signOut();
		await router.push('/');
	}, [router, supabase.auth]);

	return (
		<Layout>
			<h2>Account</h2>
			<ul>
				<li>
					<button onClick={handleLogout}>logout</button>
				</li>
			</ul>
		</Layout>
	);
}

export default Account;