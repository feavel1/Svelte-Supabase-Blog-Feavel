import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

let loading = false;
let noMoreData = false;
let page = 1;

function rangeOfPosts(pageNum: number, size: number) {
	const limit = size ? +size : 3;
	const from = pageNum ? pageNum * limit - 6 : 0;
	const to = pageNum ? from + size - 1 : size - 1;
	return { from, to };
}

let data: ({ content: string } & { created_at: string } & { email: string } & { id: number } & {
	title: string;
} & { likes: { likes: number } | { likes: number }[] | null })[] = [];

const list = writable({
	loading,
	data,
	noMoreData
});

export default {
	subscribe: list.subscribe,
	async fetchMore() {
		if (loading || noMoreData) return;
		loading = true;
		list.set({ loading, data, noMoreData });
		let { from, to } = rangeOfPosts(page++, 6);
		const { data: newData, error } = await supabase
			.from('posts')
			.select(`content, created_at,email, id, title, likes (likes)`)
			.order('created_at', { ascending: false })
			.range(from, to);
		if (error) throw new Error(error.message);
		loading = false;
		noMoreData = newData.length === 0;
		data.push(...newData);
		list.set({ loading, data, noMoreData });
	}
};
