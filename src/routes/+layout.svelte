<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import '../app.css';
	let { children } = $props();
</script>

{#snippet Tab({ route, title }: { route: string; title: string })}
	<a
		role="tab"
		class="tab"
		class:tab-active={route === page.url.pathname}
		onclick={() => goto(route)}
		href={undefined}>{title}</a
	>
{/snippet}

<div class="flex h-screen w-screen items-center justify-center">
	<div class="card max-h-[75%] min-h-96 w-full max-w-5xl bg-base-200">
		<div class="card-title">
			<div role="tablist" class="tabs tabs-bordered tabs-lg w-full">
				{@render Tab({ route: '/', title: 'About' })}
				{@render Tab({ route: '/experience', title: 'Experience' })}
				{@render Tab({ route: '/projects', title: 'Projects' })}
				{@render Tab({ route: '/contact', title: 'Contact' })}
			</div>
		</div>
		<div class="card-body">
			{@render children()}
		</div>
	</div>
</div>
