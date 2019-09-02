<script>
	import Loading from '../../components/ui/Loading.svelte'

	import { onMount } from 'svelte'
    import { classes, niveaux } from '../../stores'

	onMount(async () => {
        classes.fetch()
	})

    $: classes.load($niveaux)
</script>

<style>
main {
    display: flex;
    padding: 1rem 2rem;
    justify-content: center;
}

@media (max-width: 959px) {
	main {
		flex-direction: column;
	}
}
</style>

<main>
{#if $classes === undefined}
    <Loading />
{:else}
    <slot></slot>
{/if}
</main>
