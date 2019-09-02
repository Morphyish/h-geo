<script>
	import Nav from '../components/ui/Nav.svelte'
	import Footer from '../components/ui/Footer.svelte'

	import { onMount } from 'svelte'
    import { niveaux } from '../stores'

	export let segment;

	onMount(async () => {
        niveaux.fetch()
	})
</script>

<Nav {segment} />

<slot></slot>

<Footer />
