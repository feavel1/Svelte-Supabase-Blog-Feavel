# Feavel's music camp

This is a web page for feavel to write about music, philosophy and other things that happen.

Also users can login and post their own information which can be commented and liked.

In the future this project might also support Stripe and payments,

But currently everything is free software

## Tech used

### Engine:

- Svelte Kit

- Mdsvex

### Styling:

- Tailwindcss

- Daisyui

# Gen Types snippet

```bash
npx supabase gen types typescript --project-id "fjalaldupduxpjneeqht" --schema public > src/lib/supabase.ts
```

```
src
├── lib //组件文件夹
│   ├── components
│   │   ├── ui
│   │   │   ├── Cards
│   │   │   │   ├── PostCard.svelte
│   │   │   │   ├── ChatCard.svelte
│   │   │   │   ├── PageBlock.svelte
│   │   │   │   ├── PageTransition.svelte
│   │   │   │   ├── ChatMessage.svelte
│   │   │   │   └── InView.svelte
│   │   │   ├── Auth
│   │   │   │   ├── Account.svelte
│   │   │   │   ├── Login.svelte
│   │   │   │   └── UserPosts.svlete
│   │   │   ├── Badges
│   │   │   │   ├── CommentLikes.svelte
│   │   │   │   ├── PostLikes.svelte
│   │   │   │   ├── New.svelte
│   │   │   │   ├── Wip.svelte
│   │   │   │   ├── HamburgerIcon.svelte
│   │   │   │   ├── ThemeChanger.svelte
│   │   │   │   └── Spinner
│   │   │   │       └── Jellyfish.svelte
│   │   │   └── Footer
│   │   │       ├── Logo.svelte
│   │   │       └── Footer.svelte
│   │   ├── layouts
│   │   │   ├── NavBar.svelte
│   │   │   ├── PostLayout.svelte
│   │   │   └── LearnLayout.svelte
│   │   └── scripts
│   │       ├── codeHighlighter.js
│   │       └── FetchPosts.svelte
│   └── supabaseLib
│       ├── supabaseTypes.ts
│       └── supabaseClient.ts
├── routes //页面链接🔗
│   ├── +page.svelte //主页文件
│   │   ├── home
│   │   │   └── +page.md
│   │   ├── my-account
│   │   │   └── +page.md
│   │   ├── community
│   │   │   ├── +page.md
│   │   │   ├── [postId]
│   │   │   │   └── +page.svelte
│   │   │   ├── createPost
│   │   │   │   └── +page.svelte
│   │   │   ├── editPost
│   │   │   │   └── [editPostId]
│   │   │   │       └── +page.svelte
│   │   │   └── guide
│   │   │       ├── contribute
│   │   │       │   └── +page.md
│   │   │       ├── markDownDemo
│   │   │       │   └── +page.md
│   │   │       └── +page.md
│   │   ├── learn
│   │   │   └── +page.md
│   │   └── chat
│   │       └── +page.md
│   ├── +layout.ts
│   ├── +layout.svelte
│   ├── +layout.server.ts
│   └── +error.svelte
├── app.css
├── app.html
├── hooks.client.ts
└── hooks.server.ts
```