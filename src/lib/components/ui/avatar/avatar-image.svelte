<script lang="ts">
	import { Avatar as AvatarPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<AvatarPrimitive.Image class={cn("aspect-square h-full w-full", className)} {...$$restProps} />