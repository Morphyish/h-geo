<script context="module">
    import { goto } from '@sapper/app'

    export async function preload({ params }) {
        return params
    }
</script>

<script>
    import SideNav from '../../components/ui/SideNav.svelte'
    import Loading from '../../components/ui/Loading.svelte'
    import Entry from '../../components/cahiers-de-texte/Entry.svelte'

    import { classes, entries } from '../../stores'

    export let slug = ''

    let currentClasse

    $: {
        currentClasse = $classes.find(classe => classe.path === slug)
        if ($classes.length && currentClasse === undefined) {
            goto('/cahiers-de-texte')
        } else {
            entries.load(currentClasse)
        }
    }
</script>

<div class="sidenav-wrapper">
    {#if $classes && currentClasse}
        <SideNav url="/cahiers-de-texte/" path={currentClasse.path} links={$classes} />
    {/if}
</div>

<div class="content-wrapper">
    <div class="content">
        {#if currentClasse}
            <h1>{currentClasse.label}</h1>

            {#if $entries === undefined}
                <Loading />
            {:else}
                {#each $entries as entry (entry.id)}
                    <Entry {entry} />
                {:else}
                    <div class="empty">Ce cahier de texte est actuellement vide.</div>
                {/each}
            {/if}
        {/if}
    </div>
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
        flex-grow: 1;
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
    }
</style>
