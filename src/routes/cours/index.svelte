<script>
    import Grid from '../../components/ui/Grid.svelte'

    import { categories } from '../../stores';

    const formatUrl = path => `/cours/${path}`;
</script>

<section>
    <h1>Cours</h1>

    <Grid links={$categories} {formatUrl} />
</section>

<style>
section {
    flex-grow: 1;
    padding: 1rem 2rem;
}

@media (max-width: 959px) {
	section {
		padding: 0;
	}
}
</style>
