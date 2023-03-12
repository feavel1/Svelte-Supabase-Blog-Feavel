<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import BackTo from '../ui/BackTo.svelte';

	export let title = '标题';
	export let author = '作者';
	export let date = '日期';
</script>

<SvelteSeo
	title="Feavel的部落 - {title}"
	description="."
	openGraph={{
		title: title + ' - Feavel的部落',
		description: '点击Feavel的部落中查看关于此内容的帖子',
		url: 'https://feavel.com',
		type: 'website'
	}}
	jsonLd={{
		'@type': 'Article',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://feavel.com'
		},
		headline: title,
		image: ['img-link.png', 'img-link.png', 'img-link.png'],
		datePublished: date,
		dateModified: date,
		author: {
			'@type': 'Person',
			name: author
		},
		publisher: {
			'@type': 'Organization',
			name: 'FEAVEL的部落',
			logo: {
				'@type': 'ImageObject',
				url: 'img-link.png'
			}
		}
	}}
/>

<div class="w-full max-w-3xl">
	<BackTo />
	<h1 class="my-0 text-5xl font-extrabold md:text-6xl">{title}</h1>
	<p class="my-0">by {author}, {date}</p>

	<div class="divider " />
	<div class="prose-lg prose md:prose-xl first-letter:text-cyan-300">
		<slot />
	</div>
</div>
