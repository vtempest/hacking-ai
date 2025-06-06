<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { attackTechniques } from '$lib/data/dashboard';
	import { Search } from 'lucide-svelte';

	let searchTerm = '';
	let selectedComplexity = '';

	$: filteredTechniques = attackTechniques.filter(technique => {
		const matchesSearch = technique.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			technique.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesComplexity = selectedComplexity === '' || technique.complexity === selectedComplexity;
		return matchesSearch && matchesComplexity;
	});

	function getComplexityColor(complexity: string) {
		switch (complexity) {
			case 'Low': return 'secondary';
			case 'Medium': return 'outline';
			case 'High': return 'destructive';
			default: return 'secondary';
		}
	}
</script>

<svelte:head>
	<title>Attack Techniques - ZioSec Dashboard</title>
</svelte:head>

<div class="p-6 space-y-6">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Attack Techniques & Methodologies</h1>
			<p class="text-muted-foreground">
				Explore various attack vectors and their effectiveness against LLM systems.
			</p>
		</div>
		<div class="flex items-center space-x-2">
			<div class="relative">
				<Search class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				<input
					type="text"
					placeholder="Search techniques..."
					bind:value={searchTerm}
					class="pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
				/>
			</div>
			<select
				bind:value={selectedComplexity}
				class="px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
			>
				<option value="">All Complexity Levels</option>
				<option value="Low">Low</option>
				<option value="Medium">Medium</option>
				<option value="High">High</option>
			</select>
		</div>
	</div>

	<!-- Techniques Grid -->
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredTechniques as technique}
			<Card class="transition-all hover:shadow-md cursor-pointer border-l-4 border-l-primary">
				<CardHeader class="pb-3">
					<div class="flex items-start justify-between">
						<CardTitle class="text-lg">{technique.name}</CardTitle>
						<Badge variant={getComplexityColor(technique.complexity)}>
							{technique.complexity}
						</Badge>
					</div>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground mb-4">{technique.description}</p>
					<div class="space-y-2">
						<div class="flex items-center justify-between text-sm">
							<span class="text-muted-foreground">Success Rate</span>
							<span class="font-medium">{technique.successRate}%</span>
						</div>
						<div class="w-full bg-secondary rounded-full h-2">
							<div 
								class="bg-primary h-2 rounded-full transition-all duration-300" 
								style="width: {technique.successRate}%"
							></div>
						</div>
						<div class="text-xs text-muted-foreground">
							Category: {technique.category}
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>