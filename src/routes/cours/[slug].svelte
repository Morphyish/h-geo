<script context="module">
	export async function preload({ params }) {
        return params
	}
</script>

<script>
	import SideNav from '../../components/ui/SideNav.svelte'
	import Loading from '../../components/ui/Loading.svelte'
    import Link from '../../components/cours/Link.svelte'
    import TableOfContent from '../../components/cours/TableOfContent.svelte'

    import { categories, sections, links, niveaux } from '../../stores'

    export let slug = ''

    let currentCategory;

    $: currentCategory = $categories.find(cat => cat.path === slug)
    $: currentSections = $sections[(currentCategory || {}).id] || []
    $: links.load($niveaux, currentCategory)
</script>

<div class="sidenav-wrapper">
{#if $categories && currentCategory}
    <SideNav url="/cours/" path={currentCategory.path} links={$categories} />
{/if}
</div>

<div class="content-wrapper">
    <div class="content">
    {#if currentCategory}
        <h1>{currentCategory.label}</h1>

        {#if $links === undefined}
            <Loading />
        {:else}
            {#each currentSections as section (section.id)}
            <section>
                <h2 id={section.path}>{section.label}</h2>

                {#each $links as link (link.id)}
                    {#if link.id_section === section.id}
                    <Link link={link} />
                    {/if}
                {/each}
            </section>
            {/each}
        {/if}
    {/if}
    </div>

    <nav>
        <TableOfContent {currentCategory} {currentSections} />
    </nav>
</div>

<style>
.sidenav-wrapper {
    min-width: 15rem;
}
.content-wrapper {
    display: flex;
    flex-grow: 1;
    margin: 1rem 2rem;
}
.content {
    margin-right: 2rem;
    flex-grow: 1;
}
section {
    margin: 2rem;
}

@media (max-width: 959px) {
    .content {
        margin-right: 0;
    }
}

@media (max-width: 599px) {
	.content-wrapper {
        margin: 1rem 0;
	}
    section {
        margin: 1rem;
    }
}
</style>
