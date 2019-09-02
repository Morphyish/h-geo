<script>
    import { createEventDispatcher } from 'svelte';
    import {createClass} from '../../common/utils';

    export let color;
    export let outline;
    export let className;
    export let type = 'button';

    const dispatch = createEventDispatcher();
</script>

<button {type} class="{createClass(color, className)}" class:outline on:click="{e => dispatch('click', e)}">
    <slot></slot>
</button>

<style>
    button {
        position:relative;
        background-color: transparent;
        cursor: pointer;
        font-weight: 600;
        color: var(--font-color);
        display: flex;
        padding: 0 .5rem;
        margin: 0;
        border: 0;
        border-radius: .25rem;
        min-width: 4rem;
        height: 2.25rem;
        justify-content: center;
        outline: none;
    }

    button:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: .25rem;
        background-color: var(--font-color);
        opacity: 0;
        transition: opacity 150ms cubic-bezier(0,0,.2,.1);
    }

    button:hover:after,
    button:focus:after{
        opacity: .1;
    }

    button:active:after {
        opacity: .25;
    }

    .outline {
        padding: 0 1rem;
        border: 1px solid rgba(var(--font-color-rgb), .4);
    }

    .primary {
        color: var(--primary);
    }

    .primary:after {
        background-color: var(--primary);
    }

    .primary.outline {
        border-color: rgba(var(--primary-rgb), .4);
    }

    .primary.outline:after {
        background-color: var(--primary);
    }

    .danger {
        color: var(--danger);
    }

    .danger:after {
        background-color: var(--danger);
    }

    .danger.outline {
        border-color: rgba(var(--danger-rgb), .4);
    }

    .danger.outline:after {
        background-color: var(--danger);
    }
</style>
