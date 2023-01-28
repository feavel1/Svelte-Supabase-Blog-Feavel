import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

let loading = false;
let noMoreData = false;
let page = 1;
let data = [];

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

		const { data: newData, error } = await supabase
			.from('posts')
			.select(`*, likes (likes)`)
			.order('created_at', { ascending: false });
		if (error) throw new Error(error.message);

		loading = false;
		noMoreData = newData === data;
		console.log(noMoreData);
		data.push(...newData);

		list.set({ loading, data, noMoreData });
	}
};
