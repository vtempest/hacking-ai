<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { FileText, Download, CheckCircle } from 'lucide-svelte';

	let checkedItems = new Set();
	
	const riskItems = [
		{ label: 'Regulatory Fines', level: 'High', color: 'destructive' },
		{ label: 'Reputation Damage', level: 'High', color: 'destructive' },
		{ label: 'Operational Disruption', level: 'Medium', color: 'outline' },
		{ label: 'Customer Trust Loss', level: 'Critical', color: 'destructive' }
	];

	const checklistItems = [
		{
			id: 1,
			title: 'Prompt Injection Testing',
			description: 'Test for direct and indirect prompt injection vulnerabilities',
			priority: 'Critical'
		},
		{
			id: 2,
			title: 'Output Validation',
			description: 'Verify proper sanitization of LLM outputs',
			priority: 'High'
		},
		{
			id: 3,
			title: 'Data Leakage Assessment',
			description: 'Check for unintended disclosure of training data',
			priority: 'Critical'
		},
		{
			id: 4,
			title: 'Access Control Review',
			description: 'Validate authentication and authorization mechanisms',
			priority: 'High'
		},
		{
			id: 5,
			title: 'Rate Limiting Tests',
			description: 'Assess DoS protection and resource management',
			priority: 'Medium'
		},
		{
			id: 6,
			title: 'Model Robustness',
			description: 'Test model behavior under adversarial inputs',
			priority: 'High'
		}
	];

	function toggleCheck(id: number) {
		if (checkedItems.has(id)) {
			checkedItems.delete(id);
		} else {
			checkedItems.add(id);
		}
		checkedItems = checkedItems;
	}

	$: completedCount = checkedItems.size;
	$: progressPercentage = (completedCount / checklistItems.length) * 100;

	function getPriorityColor(priority: string) {
		switch (priority) {
			case 'Critical': return 'destructive';
			case 'High': return 'outline';
			case 'Medium': return 'secondary';
			default: return 'secondary';
		}
	}
</script>

<svelte:head>
	<title>Risk Assessment - ZioSec Dashboard</title>
</svelte:head>

<div class="p-6 space-y-6">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Risk Assessment & Compliance</h1>
			<p class="text-muted-foreground">
				Comprehensive risk analysis and security testing checklist.
			</p>
		</div>
		<div class="flex items-center space-x-2">
			<Button>
				<FileText class="mr-2 h-4 w-4" />
				Generate Assessment Report
			</Button>
			<Button variant="outline">
				<Download class="mr-2 h-4 w-4" />
				Export Testing Checklist
			</Button>
		</div>
	</div>

	<!-- Business Impact Assessment -->
	<Card>
		<CardHeader>
			<CardTitle>Business Impact Assessment</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{#each riskItems as item}
					<div class="flex items-center justify-between p-3 bg-background border rounded-lg">
						<span class="font-medium">{item.label}</span>
						<Badge variant={item.color}>{item.level}</Badge>
					</div>
				{/each}
			</div>
		</CardContent>
	</Card>

	<!-- Security Testing Checklist -->
	<Card>
		<CardHeader>
			<div class="flex items-center justify-between">
				<CardTitle>Security Testing Checklist</CardTitle>
				<div class="text-sm text-muted-foreground">
					{completedCount}/{checklistItems.length} completed
				</div>
			</div>
			<div class="w-full bg-secondary rounded-full h-2 mt-2">
				<div 
					class="bg-primary h-2 rounded-full transition-all duration-300" 
					style="width: {progressPercentage}%"
				></div>
			</div>
		</CardHeader>
		<CardContent>
			<div class="space-y-3">
				{#each checklistItems as item}
					<div class="flex items-start space-x-3 p-3 bg-background border rounded-lg hover:border-primary transition-colors">
						<button
							class="mt-1 h-5 w-5 rounded border-2 border-input flex items-center justify-center transition-colors {checkedItems.has(item.id) ? 'bg-primary border-primary text-primary-foreground' : ''}"
							on:click={() => toggleCheck(item.id)}
						>
							{#if checkedItems.has(item.id)}
								<CheckCircle class="h-3 w-3" />
							{/if}
						</button>
						<div class="flex-1 min-w-0">
							<div class="flex items-center justify-between">
								<h4 class="font-medium">{item.title}</h4>
								<Badge variant={getPriorityColor(item.priority)} class="text-xs">
									{item.priority}
								</Badge>
							</div>
							<p class="text-sm text-muted-foreground mt-1">{item.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</CardContent>
	</Card>
</div>