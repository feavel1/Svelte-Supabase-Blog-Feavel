// @ts-nocheck

import { supabase } from './supabaseClient';

export function getUser() {
	return supabase.auth.user();
}

export async function signOut() {
	const { error } = await supabase.auth.signOut();
	return { data: !error, error };
}

export async function createPost({ content, email, title }) {
	const { data, error } = await supabase.from('posts').insert({ content, email, title });
	return { data, error };
}
