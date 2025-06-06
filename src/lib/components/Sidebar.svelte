<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { currentUser } from '$lib/data/user';
	import {
		BarChart3,
		Shield,
		Sword,
		Wrench,
		Syringe,
		Building,
		TrendingUp,
		Settings,
		LogOut,
		ChevronLeft,
		ChevronRight
	} from 'lucide-svelte';

	export let collapsed = false;

	const navigation = [
		{ name: 'Overview', href: '/', icon: BarChart3 },
		{ name: 'OWASP Top 10', href: '/vulnerabilities', icon: Shield },
		{ name: 'Attack Techniques', href: '/techniques', icon: Sword },
		{ name: 'Testing Tools', href: '/tools', icon: Wrench },
		{ name: 'Payload Library', href: '/payloads', icon: Syringe },
		{ name: 'Enterprise Scenarios', href: '/scenarios', icon: Building },
		{ name: 'Risk Assessment', href: '/risk', icon: TrendingUp }
	];

	function toggleSidebar() {
		collapsed = !collapsed;
	}

	function navigateTo(href: string) {
		goto(href);
	}

	function handleSettings() {
		// Placeholder for settings functionality
		console.log('Settings clicked');
	}

	function handleSignOut() {
		// Placeholder for sign out functionality
		console.log('Sign out clicked');
	}
</script>

<div class={cn(
	"flex h-screen flex-col border-r bg-card transition-all duration-300",
	collapsed ? "w-16" : "w-64"
)}>
	<!-- Header -->
	<div class="flex h-16 items-center justify-between border-b px-4">
		{#if !collapsed}
			<div class="flex items-center space-x-2">
				<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
					🛡️
				</div>
				<span class="text-lg font-semibold">ZioSec</span>
			</div>
		{/if}
		<Button variant="ghost" size="icon" on:click={toggleSidebar} class="h-8 w-8">
			{#if collapsed}
				<ChevronRight class="h-4 w-4" />
			{:else}
				<ChevronLeft class="h-4 w-4" />
			{/if}
		</Button>
	</div>

	<!-- User Profile -->
	<div class="border-b p-4">
		<div class="flex items-center space-x-3">
			<Avatar class="h-10 w-10">
				<AvatarImage src={currentUser.avatar} alt={currentUser.name} />
				<AvatarFallback>{currentUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
			</Avatar>
			{#if !collapsed}
				<div class="flex-1 min-w-0">
					<p class="text-sm font-medium truncate">{currentUser.name}</p>
					<p class="text-xs text-muted-foreground truncate">{currentUser.role}</p>
					<Badge variant="outline" class="mt-1 text-xs">
						{currentUser.securityClearance}
					</Badge>
				</div>
			{/if}
		</div>
	</div>

	<!-- Navigation -->
	<nav class="flex-1 space-y-1 p-2">
		{#each navigation as item}
			<button
				on:click={() => navigateTo(item.href)}
				class={cn(
					"w-full flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors text-left",
					$page.url.pathname === item.href
						? "bg-primary text-primary-foreground"
						: "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
				)}
			>
				<svelte:component this={item.icon} class="h-4 w-4 shrink-0" />
				{#if !collapsed}
					<span class="ml-3">{item.name}</span>
				{/if}
			</button>
		{/each}
	</nav>

	<!-- User Stats -->
	{#if !collapsed}
		<div class="border-t p-4">
			<div class="space-y-2">
				<div class="flex justify-between text-xs">
					<span class="text-muted-foreground">Tests Completed</span>
					<span class="font-medium">{currentUser.testsCompleted}</span>
				</div>
				<div class="flex justify-between text-xs">
					<span class="text-muted-foreground">Vulnerabilities Found</span>
					<span class="font-medium">{currentUser.vulnerabilitiesFound}</span>
				</div>
				<div class="flex justify-between text-xs">
					<span class="text-muted-foreground">Last Login</span>
					<span class="font-medium">{currentUser.lastLogin.toLocaleDateString()}</span>
				</div>
			</div>
		</div>
	{/if}

	<!-- Footer Actions -->
	<div class="border-t p-2">
		<Button 
			variant="ghost" 
			size="sm" 
			class={cn("w-full justify-start", collapsed && "px-2")}
			on:click={handleSettings}
		>
			<Settings class="h-4 w-4" />
			{#if !collapsed}
				<span class="ml-3">Settings</span>
			{/if}
		</Button>
		<Button 
			variant="ghost" 
			size="sm" 
			class={cn("w-full justify-start", collapsed && "px-2")}
			on:click={handleSignOut}
		>
			<LogOut class="h-4 w-4" />
			{#if !collapsed}
				<span class="ml-3">Sign Out</span>
			{/if}
		</Button>
	</div>
</div>