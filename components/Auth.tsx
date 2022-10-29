import {FC, Fragment} from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Link from 'next/link';

const Auth: FC = () => {
	const session = useSession();
	const supabase = useSupabaseClient();

	return (
		<ul>
			{session ? (
				<li>
					<Link href={'/account'}>
						account
					</Link>
				</li>
				) : (
				<Fragment>
					<li>
						<Link href={'/auth/signup'}>
							signup
						</Link>
					</li>
					<li>
						<Link href={'/auth/login'}>
							login
						</Link>
					</li>
				</Fragment>
			)}
		</ul>
	)
}

export default Auth;