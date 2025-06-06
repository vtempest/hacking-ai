<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import StatsCard from '$lib/components/StatsCard.svelte';
	import VulnerabilityCard from '$lib/components/VulnerabilityCard.svelte';
	import { dashboardStats, vulnerabilities } from '$lib/data/dashboard';
	import { currentUser } from '$lib/data/user';
	import { Search, Download, Play, FileText, Zap, BarChart3 } from 'lucide-svelte';

	const topVulnerabilities = vulnerabilities.slice(0, 3);
</script>

<svelte:head>
	<title>ZioSec Dashboard - LLM Security Testing Platform</title>
</svelte:head>

<div class="p-6 space-y-6">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Security Dashboard</h1>
			<p class="text-muted-foreground">
				Welcome back, {currentUser.name}. Here's your LLM security overview.
			</p>
		</div>
		<div class="flex items-center space-x-2">
			<Button variant="outline" size="sm">
				<Download class="mr-2 h-4 w-4" />
				Export Report
			</Button>
			<div class="flex items-center space-x-2 text-sm">
				<div class="h-2 w-2 bg-green-500 rounded-full"></div>
				<span class="text-muted-foreground">Connected</span>
			</div>
		</div>
	</div>

	<!-- Stats Grid -->
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
		<StatsCard
			title="Critical Vulnerabilities"
			value={dashboardStats.criticalVulnerabilities}
			description="Organizations vulnerable to prompt injection"
			status="destructive"
			statusText="High Risk"
		/>
		<StatsCard
			title="Security Tool Adoption"
			value={dashboardStats.securityToolAdoption}
			description="Enterprises using LLM security tools"
			status="warning"
			statusText="Low Coverage"
		/>
		<StatsCard
			title="Attack Success Rate"
			value={dashboardStats.attackSuccessRate}
			description="Direct prompt injection attempts"
			status="destructive"
			statusText="Critical"
		/>
		<StatsCard
			title="GenAI Adoption 2026"
			value={dashboardStats.genAiAdoption2026}
			description="Predicted enterprise adoption"
			status="secondary"
			statusText="Growing"
		/>
	</div>

	<!-- Quick Actions -->
	<Card>
		<CardHeader>
			<CardTitle>Quick Assessment Actions</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
				<Button class="justify-start">
					<Search class="mr-2 h-4 w-4" />
					Start Vulnerability Scan
				</Button>
				<Button variant="outline" class="justify-start">
					<FileText class="mr-2 h-4 w-4" />
					Generate Testing Checklist
				</Button>
				<Button variant="outline" class="justify-start">
					<Zap class="mr-2 h-4 w-4" />
					Test Payload Library
				</Button>
				<Button variant="outline" class="justify-start">
					<BarChart3 class="mr-2 h-4 w-4" />
					Create Risk Report
				</Button>
			</div>
		</CardContent>
	</Card>

	<!-- Top Vulnerabilities -->
	<div>
		<div class="flex items-center justify-between mb-4">
			<h2 class="text-2xl font-bold tracking-tight">Critical Vulnerabilities</h2>
			<Button variant="outline" size="sm">View All</Button>
		</div>
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each topVulnerabilities as vulnerability}
				<VulnerabilityCard {vulnerability} />
			{/each}
		</div>
	</div>

	<!-- Recent Activity -->
	<Card>
		<CardHeader>
			<CardTitle>Recent Security Activity</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="space-y-4">
				<div class="flex items-center space-x-4">
					<div class="h-2 w-2 bg-red-500 rounded-full"></div>
					<div class="flex-1">
						<p class="text-sm font-medium">Critical vulnerability detected in customer chatbot</p>
						<p class="text-xs text-muted-foreground">2 hours ago</p>
					</div>
				</div>
				<div class="flex items-center space-x-4">
					<div class="h-2 w-2 bg-yellow-500 rounded-full"></div>
					<div class="flex-1">
						<p class="text-sm font-medium">Prompt injection test completed</p>
						<p class="text-xs text-muted-foreground">4 hours ago</p>
					</div>
				</div>
				<div class="flex items-center space-x-4">
					<div class="h-2 w-2 bg-green-500 rounded-full"></div>
					<div class="flex-1">
						<p class="text-sm font-medium">Security assessment report generated</p>
						<p class="text-xs text-muted-foreground">1 day ago</p>
					</div>
				</div>
			</div>
		</CardContent>
	</Card>
</div>