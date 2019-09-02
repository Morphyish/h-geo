<script>
	import Grid from '../components/ui/Grid.svelte'

	const links = [
		{
			id: 0,
			path: 'cours',
			label: 'Cours',
		},
		{
			id: 1,
			path: 'cahiers-de-texte',
			label: 'Cahiers de texte',
		},
	]
</script>

<main>
	<div class="homesplash_wrapper">
		<img class="homesplash" src="homesplash.jpg" alt="h-geo banner" />
	</div>

	<Grid {links} />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		padding: 1rem 2rem;
		justify-content: center;
	}

	.homesplash_wrapper {
		text-align: center;
	}

	.homesplash {
		max-width: 100%;
		height: auto;
	}
</style>
