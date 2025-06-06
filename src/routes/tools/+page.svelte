<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { securityTools } from '$lib/data/dashboard';
	import { Search, Star } from 'lucide-svelte';

	let searchTerm = '';
	let selectedCategory = '';

	$: filteredTools = securityTools.filter(tool => {
		const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			tool.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory = selectedCategory === '' || tool.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	function renderStars(readiness) {
		return Array.from({ length: 5 }, (_, i) => i < readiness);
	}
</script>

<svelte:head>
	<title>Security Testing Tools - ZioSec Dashboard</title>
</svelte:head>

<div class="p-6 space-y-6">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Enterprise Security Testing Tools</h1>
			<p class="text-muted-foreground">
				Comprehensive toolkit for LLM security assessment and testing.
			</p>
		</div>
		<div class="flex items-center space-x-2">
			<div class="relative">
				<Search class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				<input
					type="text"
					placeholder="Search tools..."
					bind:value={searchTerm}
					class="pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
				/>
			</div>
			<select
				bind:value={selectedCategory}
				class="px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
			>
				<option value="">All Categories</option>
				<option value="Vulnerability Scanner">Vulnerability Scanner</option>
				<option value="Testing Framework">Testing Framework</option>
				<option value="Security Platform">Security Platform</option>
				<option value="Red Team Platform">Red Team Platform</option>
				<option value="AI Testing Platform">AI Testing Platform</option>
			</select>
		</div>
	</div>

	<!-- Tools Grid -->
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredTools as tool}
			<Card class="transition-all hover:shadow-md cursor-pointer border-l-4 border-l-primary">
				<CardHeader class="pb-3">
					<div class="space-y-2">
						<CardTitle class="text-lg">{tool.name}</CardTitle>
						<div class="flex flex-wrap gap-2">
							<Badge variant="outline" class="text-xs">{tool.category}</Badge>
							<Badge variant="secondary" class="text-xs">{tool.type}</Badge>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground mb-4">{tool.description}</p>
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<span class="text-sm text-muted-foreground">Enterprise Readiness</span>
							<div class="flex items-center space-x-1">
								{#each renderStars(tool.readiness) as filled}
									<Star class="h-3 w-3 {filled ? 'fill-primary text-primary' : 'text-muted-foreground'}" />
								{/each}
							</div>
						</div>
						<div class="text-xs text-muted-foreground">
							Vendor: {tool.vendor}
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>