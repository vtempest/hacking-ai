<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { testingScenarios } from '$lib/data/dashboard';
	import { Search } from 'lucide-svelte';

	let searchTerm = '';

	$: filteredScenarios = testingScenarios.filter(scenario => {
		return scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			scenario.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			scenario.industry.toLowerCase().includes(searchTerm.toLowerCase());
	});
</script>

<svelte:head>
	<title>Enterprise Scenarios - ZioSec Dashboard</title>
</svelte:head>

<div class="p-6 space-y-6">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Enterprise Testing Scenarios</h1>
			<p class="text-muted-foreground">
				Real-world scenarios for comprehensive LLM security testing.
			</p>
		</div>
		<div class="flex items-center space-x-2">
			<div class="relative">
				<Search class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				<input
					type="text"
					placeholder="Search scenarios..."
					bind:value={searchTerm}
					class="pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
				/>
			</div>
		</div>
	</div>

	<!-- Scenarios Grid -->
	<div class="grid gap-6 md:grid-cols-2">
		{#each filteredScenarios as scenario}
			<Card class="transition-all hover:shadow-md cursor-pointer border-l-4 border-l-orange-500">
				<CardHeader class="pb-3">
					<CardTitle class="text-lg">{scenario.title}</CardTitle>
					<p class="text-sm text-muted-foreground italic">{scenario.context}</p>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground mb-4">{scenario.description}</p>
					<div class="space-y-3">
						<div>
							<span class="text-xs font-medium text-muted-foreground uppercase tracking-wide">Industry</span>
							<div class="mt-1">
								<Badge variant="outline">{scenario.industry}</Badge>
							</div>
						</div>
						<div>
							<span class="text-xs font-medium text-muted-foreground uppercase tracking-wide">Risk Areas</span>
							<div class="flex flex-wrap gap-2 mt-1">
								{#each scenario.riskTags as tag}
									<Badge variant="destructive" class="text-xs">{tag}</Badge>
								{/each}
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>