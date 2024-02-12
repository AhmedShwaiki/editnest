<script lang="ts">
    export let onClick: (event: MouseEvent) => void
</script>

<button class="standard-button" on:click={onClick}>
    <slot />
</button>

<style>
    .standard-button {
        border-radius: 4px;
        padding: 0.5rem;
        cursor: pointer;
    }

    :global(body.light) button {
        border: var(--border-light);
        background-color: var(--accent-light);
        color: var(--text-light);

        &:hover {
            border-color: var(--border-dark);
        }
    }

    :global(body.dark) button {
        border: var(--border-dark);
        background-color: var(--accent-dark);
        color: var(--text-dark);

        &:hover {
            border-color: var(--border-light);
        }
    }
</style>
