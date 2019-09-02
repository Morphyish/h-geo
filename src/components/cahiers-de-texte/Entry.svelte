<script>
    import { formatDate } from '../../common/utils'

    export let entry
</script>

<div class="container">
    <div class="date-wrapper">
        <span class="date">{formatDate(entry.date.toDate())}</span>
    </div>
    <div class="content-wrapper">
        <div class="content sequence">
            <div class="content-title">Séquence</div>
            <div class="markdown">{@html entry.content}</div>
        </div>
        <div class="content travail">
            <div class="content-title">Evaluations et Travail</div>
            <div class="markdown">{@html entry.exercices}</div>
        </div>
    </div>
</div>

<style>
.container {
    margin: 2rem 0;
}
.date-wrapper {
    position: relative;
}
.date-wrapper:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    z-index: -1;
    height: 1px;
    background-color: var(--font-color);
    opacity: .3;
}
.date {
    font-weight: 600;
    line-height: 24px;
    text-transform: capitalize;
    color: var(--primary);
    background-color: var(--background);
    margin-left: 1rem;
    padding: 0 .5rem;
}
.content-wrapper {
    display: flex;
    flex-wrap: wrap;
}
.content.sequence {
    flex-grow: 2;
    flex-basis: 1px;
}
.content.travail {
    flex-grow: 1;
    flex-basis: 1px;
}
.content-title {
    font-size: .875rem;
    font-weight: 600;
    text-transform: uppercase;
    margin: 1rem 0;
    white-space: nowrap;
}
.markdown {
    margin: 0 2rem;
}

.markdown :global(h4),
.markdown :global(h5),
.markdown :global(h6) {
    font-weight: 600;
}

.markdown :global(h4) {
    color: #e53935;
}
.markdown :global(h5) {
    color: #ff9800;
}
.markdown :global(h6) {
    color: #43a047;
}
</style>
