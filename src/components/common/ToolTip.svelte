<script lang="ts">
/**
 * Credits: https://svelte.dev/repl/dd6754a2ad0547c5b1c1ea37c0293fef?version=3.55.1
*/
	export let title = '';
	export let icon = '';
	let isHovered = false;
	let x: number;
	let y: number;
	
	function mouseOver(event:any) {
		isHovered = true;
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseMove(event: any) {
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseLeave() {
		isHovered = false;
	}

</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<span
    class="inline"
	on:mouseover={mouseOver}
    on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}>
	<slot />
</span>

{#if isHovered}
	<div style="top: {y}px; left: {x}px;" class="flex flex-wrap items-center gap-2 absolute px-4 py-1 text-lg font-medium border-2 border-matty-50 bg-matty-900 text-matty-50">
		{#if icon !== ''}
			<span class="material-symbols-rounded">{icon}</span>
		{/if}
		{title}
	</div>
{/if}