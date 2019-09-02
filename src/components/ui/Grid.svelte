<script>
    export let links = []
    export let formatUrl = path => path
</script>

<div class="grid">
    {#each links as link (link.id)}
        <a href={formatUrl(link.path)}>
            {link.label}
        </a>
    {/each}
</div>

<style>
    .grid {
        display: flex;
        flex-wrap: wrap;
    }
    a {
        display: block;
        width: calc(50% - 2rem - 3px);
        margin: 1rem;
        height: 5rem;
        line-height: 5rem;
        font-weight: 500;
        text-align: center;
        text-decoration: none;
        border: var(--border);
        border-radius: .25rem;
    }
    a:hover,
    a:active {
        border: 1px solid var(--primary);
        color: var(--primary);
    }

    @media (max-width: 599px) {
        a {
            width: calc(100% - 2rem - 2px);
        }
    }
</style>
