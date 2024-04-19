<script lang="ts">
    import { onMount } from 'svelte'

    export let inputPlaceholder: string = 'Title'
    export let textAreaPlaceholder: string = 'Write something'
    export let maxScrollHeight: number = 500
    export let onBlur: (target: { title: string; description: string }) => void

    let isCollapsed = true
    let title: string
    let description: string
    let textAreaElement: HTMLTextAreaElement
    let containerRef: HTMLElement

    onMount(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    })

    const handleClickOutside = (event: MouseEvent) => {
        if (!containerRef?.contains(event.target as Node)) {
            isCollapsed = true

            if (title.trim() && description.trim()) {
                onBlur({ title: title, description: description })
            }
            title = ''
            description = ''
        }
    }

    const handleAutoSizeTextArea = () => {
        if (textAreaElement?.scrollHeight < maxScrollHeight /* max scroll height*/) {
            textAreaElement.style.height = '0px'
            textAreaElement.style.height = textAreaElement.scrollHeight + 'px'
        }
    }

    $: description, textAreaElement, handleAutoSizeTextArea()
</script>

<div class="container" bind:this={containerRef}>
    <input
        bind:value={title}
        type="text"
        placeholder={inputPlaceholder}
        on:click={() => (isCollapsed = false)}
    />
    {#if !isCollapsed}
        <textarea
            bind:this={textAreaElement}
            placeholder={textAreaPlaceholder}
            bind:value={description}
        />
    {/if}
</div>

<style>
    .container {
        display: flex;
        align-self: center;
        flex-direction: column;
        min-width: 600px;
        margin: 24px;
        border-radius: 4px;
        padding: 10px;
        box-shadow: var(--classic-grey);
        border: var(--border-light);
    }

    :global(body.dark) .container {
        border: var(--border-dark);
    }

    input,
    textarea {
        padding: 10px;
        outline: none;
        border: 1px solid var(--border-light);
        background-color: var(--background-light);
    }

    textarea {
        resize: none;
    }

    input {
        font-size: var(--subheader-font-size);
    }

    :global(body.dark) input,
    :global(body.dark) textarea {
        border-color: var(--border-dark);
        background-color: var(--background-dark);
        color: var(--text-dark);
    }
</style>
