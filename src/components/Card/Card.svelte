<script lang="ts">
    export let title: string
    export let description: string
</script>

<div class="card">
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
        /* height: fit-content;
        overflow: hidden;
        text-wrap: break-word; */
    }

    :global(body.dark) .card {
        border: var(--border-dark);
    }
</style>
