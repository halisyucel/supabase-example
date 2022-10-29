import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../lib/supabase/client';

const Signup = async (req: NextApiRequest, res: NextApiResponse) => {
	const { data, error } = await client.auth.signInWithPassword({
		email: req.body.email,
		password: req.body.password,
	})

	if (error)
		return res.status(400).json({ error: error.message })

	return res.status(200).json(data);
};

export default Signup;