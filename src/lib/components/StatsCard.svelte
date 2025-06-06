<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	export let title: string;
	export let value: string | number;
	export let description: string;
	export let status: 'success' | 'warning' | 'destructive' | 'secondary' = 'secondary';
	export let statusText: string;
</script>

<Card class="transition-all hover:shadow-md">
	<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
		<CardTitle class="text-sm font-medium text-muted-foreground">{title}</CardTitle>
		<Badge variant={status === 'destructive' ? 'destructive' : status === 'warning' ? 'outline' : 'secondary'}>
			{statusText}
		</Badge>
	</CardHeader>
	<CardContent>
		<div class="text-2xl font-bold text-primary">{value}%</div>
		<p class="text-xs text-muted-foreground mt-1">{description}</p>
	</CardContent>
</Card>