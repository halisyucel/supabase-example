import type { AppProps } from 'next/app';
import { FC, useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'

import '../styles/globals.css';

const App: FC<AppProps<{ initialSession: Session }>> = ({ Component, pageProps }) => {
	const [supabaseClient] = useState(() => createBrowserSupabaseClient());

	return (
		<SessionContextProvider
			supabaseClient={supabaseClient}
			initialSession={pageProps.initialSession}
		>
			<Component {...pageProps} />
		</SessionContextProvider>
	);
}

export default App;