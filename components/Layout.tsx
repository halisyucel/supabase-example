import {FC, Fragment, ReactNode} from 'react';
import Auth from './Auth';

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<header>
				<h1>Next.js App with Supabase</h1>
				<Auth />
			</header>
			<main>
				{children}
			</main>
		</Fragment>
	)
}

export default Layout;
export type { LayoutProps };