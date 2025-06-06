<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let sidebarCollapsed = false;
</script>

<ModeWatcher />

<div class="flex h-screen bg-background">
	<Sidebar bind:collapsed={sidebarCollapsed} />
	<main class="flex-1 overflow-auto">
		<slot />
	</main>
</div>