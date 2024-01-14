<script lang="ts">
    import { onMount } from 'svelte'

    export let inputPlaceholder: string = 'Title'
    export let textAreaPlaceholder: string = 'Write something'
    export let maxScrollHeight: number = 500

    let isCollapsed = true
    let inputValue: string
    let textAreaValue: string
    let textAreaElement: HTMLTextAreaElement

    onMount(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    })

    const handleClickOutside = (event: MouseEvent) => {
        const container = document.querySelector('.container')
        if (!container?.contains(event.target as Node)) {
            isCollapsed = true
        }
    }

    const handleAutoSizeTextArea = () => {
        if (textAreaElement?.scrollHeight < maxScrollHeight /* max scroll height*/) {
            textAreaElement.style.height = '0px'
            textAreaElement.style.height = textAreaElement.scrollHeight + 'px'
        }
    }

    $: textAreaValue, textAreaElement, handleAutoSizeTextArea()
</script>

<div class="container">
    <input
        bind:value={inputValue}
        type="text"
        placeholder={inputPlaceholder}
        on:click={() => (isCollapsed = false)}
    />
    {#if !isCollapsed}
        <textarea
            bind:this={textAreaElement}
            placeholder={textAreaPlaceholder}
            bind:value={textAreaValue}
        />
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
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

    :global(body.dark) textarea {
        background-color: var(--background-dark);
        color: var(--text-dark);
    }

    :global(body.dark) input {
        background-color: var(--background-dark);
        color: var(--text-dark);
    }

    input,
    textarea {
        transition: background-color var(--animation-duration) ease-in-out;
        padding: 10px;
        outline: none;
    }

    input {
        font-size: var(--subheader-font-size);
    }

    textarea {
        resize: none;
    }
</style>
