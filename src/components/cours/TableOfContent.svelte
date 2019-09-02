<script>
    export let currentCategory
    export let currentSections = []

    const formatUrl = anchor => `/cours/${currentCategory.path}#${anchor}`
</script>

<div class="table-of-content desktop-only">
    {#if currentCategory}
        <div class="title">Contenu</div>
        {#each currentSections as section (section.id)}
            <a href={formatUrl(section.path)}>{section.label}</a>
        {/each}
    {/if}
</div>

<style>
    .table-of-content {
        font-size: .875rem;
        padding: .5rem 1rem;
        border-left: 4px solid var(--primary);
    }

    .title {
        font-weight: 700;
        margin-bottom: .75rem;
    }

    a {
        display: block;
        margin-bottom: .5rem;
        text-decoration: none;
        color: rgba(0, 0, 0, .54);
    }

    a:hover,
    a:active {
        color: var(--primary);
    }
</style>
