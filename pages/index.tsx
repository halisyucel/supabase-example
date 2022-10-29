import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<div>
			<h1>Home</h1>
			<hr />
			<ul>
				<li>
					<Link href={'/auth/signup'}>
						Sign up
					</Link>
				</li>
				<li>
					<Link href={'/auth/login'}>
						Login
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Home;