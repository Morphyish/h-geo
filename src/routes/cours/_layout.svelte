<script>
	import Loading from '../../components/ui/Loading.svelte'

	import { onMount } from 'svelte'
    import { categories, sections } from '../../stores'

	onMount(async () => {
        categories.fetch()
        sections.fetch()
	})
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
{#if $categories === undefined || $sections === undefined}
    <Loading />
{:else}
    <slot></slot>
{/if}
</main>
