<script>
    import Button from './Button.svelte'

    import { niveaux } from '../../stores'

	export let segment;
</script>

<nav>
    <div class="title">
        <a class="home" href="..">H.GEO</a>
    </div>
	<ul>
		<li><a rel=prefetch class='{segment === "cours" ? "selected" : ""}' href='cours'>Cours</a></li>
		<li><a rel=prefetch class='{segment === "cahiers-de-texte" ? "selected" : ""}' href='cahiers-de-texte'>Cahiers de texte</a></li>
	</ul>

	{#if $niveaux}
    <Button color="primary"
            outline
            on:click={niveaux.next}
    >
        {$niveaux.label}
    </Button>
    {/if}
</nav>

<style>
nav {
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    border-bottom: var(--border);
    font-weight: 500;
    font-size: .875rem;
    padding: 0 1rem;
    background-color: var(--background);
}

.title {
    color: var(--primary);
    margin: 0 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
}

ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-grow: 1;
}

li {
    display: block;
}

.selected {
    position: relative;
    display: inline-block;
}

.selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1rem);
    height: 2px;
    background-color: var(--primary);
    display: block;
    bottom: -1px;
}

a {
    text-decoration: none;
    display: block;
}
a:not(.home) {
    padding: 1rem 0.5rem;
}

@media (max-width: 959px) {
	nav {
		padding: 0;
	}
}
</style>
