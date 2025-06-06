<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import VulnerabilityCard from '$lib/components/VulnerabilityCard.svelte';
	import { vulnerabilities } from '$lib/data/dashboard';
	import { Search, Filter } from 'lucide-svelte';

	let searchTerm = '';
	let selectedRisk = '';

	$: filteredVulnerabilities = vulnerabilities.filter(vuln => {
		const matchesSearch = vuln.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			vuln.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesRisk = selectedRisk === '' || vuln.riskLevel === selectedRisk;
		return matchesSearch && matchesRisk;
	});
</script>

<svelte:head>
	<title>OWASP LLM Top 10 - ZioSec Dashboard</title>
</svelte:head>

<div class="p-6 space-y-6">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">OWASP LLM Top 10 Vulnerabilities</h1>
			<p class="text-muted-foreground">
				Comprehensive overview of the most critical LLM security vulnerabilities.
			</p>
		</div>
		<div class="flex items-center space-x-2">
			<div class="relative">
				<Search class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				<input
					type="text"
					placeholder="Search vulnerabilities..."
					bind:value={searchTerm}
					class="pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
				/>
			</div>
			<select
				bind:value={selectedRisk}
				class="px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
			>
				<option value="">All Risk Levels</option>
				<option value="Critical">Critical</option>
				<option value="High">High</option>
				<option value="Medium">Medium</option>
				<option value="Low">Low</option>
			</select>
		</div>
	</div>

	<!-- Vulnerabilities Grid -->
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredVulnerabilities as vulnerability}
			<VulnerabilityCard {vulnerability} />
		{/each}
	</div>

	{#if filteredVulnerabilities.length === 0}
		<Card>
			<CardContent class="flex flex-col items-center justify-center py-12">
				<div class="text-center">
					<h3 class="text-lg font-semibold mb-2">No vulnerabilities found</h3>
					<p class="text-muted-foreground">Try adjusting your search criteria.</p>
				</div>
			</CardContent>
		</Card>
	{/if}
</div>