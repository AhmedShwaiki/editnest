<script lang="ts">
    export let title: string
    export let description: string
    export let onClick: () => void
</script>

<div
    class="card"
    role="textbox"
    tabindex={0}
    aria-label="click to edit card with {title}"
    on:click={onClick}
    on:keydown={e => {
        if (e.key === 'Enter') {
            onClick()
        }
    }}
>
    <h3>{title}</h3>

    <p>{description}</p>
</div>

<style>
    .card {
        padding: 16px;
        border: var(--border-light);
        box-shadow: var(--classic-grey);
        border-radius: 4px;
        width: 600px;
    }

    :global(body.dark) .card {
        border: var(--border-dark);
    }
</style>
