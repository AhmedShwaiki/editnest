<script lang="ts">
    // Component notes:
    // 2- why and can we just use the stack in the application for the history using a button?
    // 3- how can we change the styles of the below to meet with the following:
    // a- height of the containers should grow until max limit
    // b- the user will scroll after the limit is overflow
    // input and text area must have state isFocused

    export let inputPlaceholder: string = 'Title'
    export let textAreaPlaceholder: string = 'Write something'
    let isInputFocused = false
    let ref: HTMLTextAreaElement
</script>

<div class="container">
    <input type="text" placeholder={inputPlaceholder} on:focus={() => (isInputFocused = true)} />
    {#if isInputFocused}
        <textarea bind:this={ref} placeholder={textAreaPlaceholder} />
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        min-height: 70px;
        min-width: 600px;
        margin: 24px;
        border-radius: 4px;
        padding: 10px;
    }

    :global(body.dark) .container {
        border: var(--border-dark);
    }

    :global(body.light) .container {
        border: var(--border-light);
    }

    :global(body.light),
    :global(body.dark) * {
        transition: background-color var(--animation-duration) ease-in-out;
    }

    :global(body.light) textarea {
        background-color: var(--background-light);
        color: var(--text-light);
    }

    :global(body.dark) textarea {
        background-color: var(--background-dark);
        color: var(--text-dark);
    }

    :global(body.dark) input {
        background-color: var(--background-dark);
        color: var(--text-dark);
    }

    :global(body.light) input {
        background-color: var(--background-light);
        color: var(--text-light);
    }

    input,
    textarea {
        padding: 10px;
    }

    input {
        font-size: var(--subheader-font-size);
    }

    textarea {
        resize: none;
    }

    input:focus,
    textarea:focus {
        outline: none;
    }
</style>
