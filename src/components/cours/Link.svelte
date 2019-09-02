<script>
    import Button from '../ui/Button.svelte'

    export let link
</script>

<a class="content" href={link.url} target="_blank">
    {link.label}
</a>

<style>

    .content:hover {
        background: rgba(0, 0, 0, .03);
    }

    .content {
        display: flex;
        align-items: center;
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: .25rem 0;
        padding: .5rem 1rem;
        border-radius: .125rem;
    }
</style>
