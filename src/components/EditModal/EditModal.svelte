<script lang="ts">
    import Button from './../Button/Button.svelte'
    import throttle from '../../lib/throttle/throttle'
    import Stack from '../../lib/stack/stack'

    export let item: { title: string; description: string } = { title: '', description: '' }
    export let onClose: () => void

    let title = item.title || ''
    let description = item.description || ''
    let pastEdits = new Stack()
    let futureEdits = new Stack()

    // add initial item to past edits
    pastEdits.push({ title, description })

    const close = () => {
        onClose()
    }

    const handleTextChange = throttle(() => {
        pastEdits.push({ title, description })
    }, 500)

    const undo = () => {
        if (pastEdits.size() > 1) {
            futureEdits.push({ title, description })

            pastEdits.pop()
            const { title: pastTitle, description: pastDesc } = pastEdits.peek() as {
                title: string
                description: string
            }

            title = pastTitle
            description = pastDesc
        }
    }

    const redo = () => {
        if (futureEdits.size() > 0) {
            pastEdits.push({ title, description })
            const { title: futureTitle, description: futureDesc } = futureEdits.peek() as {
                title: string
                description: string
            }

            title = futureTitle
            description = futureDesc

            futureEdits.pop()
        }
    }
</script>

<div class="modal" aria-labelledby={`modal-title-${item.title}`} aria-modal="true">
    <div class="content">
        <textarea name="title" bind:value={title} on:input={handleTextChange} />
        <textarea name="description" bind:value={description} on:input={handleTextChange} />

        <Button onClick={close}>Close</Button>
        <Button onClick={undo}>Undo</Button>
        <Button onClick={redo}>Redo</Button>
    </div>
</div>

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        color: black;
        padding: 20px;
    }
</style>
