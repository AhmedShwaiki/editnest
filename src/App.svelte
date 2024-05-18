<script lang="ts">
    import './index.css'
    import useTheme from './lib/theme/useTheme'
    import { APP_THEMES } from './lib/theme/themes'
    import { type Note } from './lib/types/note'

    import TextInput from './components/TextInput/TextInput.svelte'
    import Button from './components/Button/Button.svelte'
    import Card from './components/Card/Card.svelte'
    import EditModal from './components/EditModal/EditModal.svelte'

    const { theme, setTheme } = useTheme([APP_THEMES.DARK, APP_THEMES.LIGHT])

    const onClickToggleTheme = () => {
        if ($theme === APP_THEMES.DARK) {
            setTheme(APP_THEMES.LIGHT)
        } else {
            setTheme(APP_THEMES.DARK)
        }
    }

    let notes: Note[] = []
    let currentNote: { title: string; description: string } = { title: '', description: '' }
    let isEditMode = false
</script>

<div class="container">
    <header>
        <Button onClick={onClickToggleTheme}>
            {$theme === APP_THEMES.DARK ? 'Dark' : 'Light'}
        </Button>
    </header>

    <main>
        <div class="input-container">
            <TextInput
                onBlur={note => {
                    notes = [...notes, note]
                }}
            />
        </div>
        <div class="list-container">
            {#each notes as { title, description }}
                <Card
                    {title}
                    {description}
                    onClick={() => {
                        isEditMode = true
                        currentNote = { title, description }
                    }}
                />
            {/each}
        </div>
        {#if isEditMode}
            <EditModal
                note={currentNote}
                onClose={({ title, description }) => {
                    isEditMode = false
                    // update the item with the new values
                    notes = notes.map(note => {
                        if (note.title === currentNote.title) {
                            return { title, description }
                        }

                        return note
                    })
                }}
            />
        {/if}
    </main>

    <footer>
        <!-- Footer content goes here -->
    </footer>
</div>

<style>
    .container {
        margin: 20px 40px;
        width: 100%;
        height: 100%;
    }

    .input-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .list-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 16px;
    }

    :global(body.light) {
        background-color: var(--background-light);
        border-color: var(--border-light);
        color: var(--text-light);
    }

    :global(body.dark) {
        background-color: var(--background-dark);
        border-color: var(--border-dark);
        color: var(--text-dark);
    }
</style>
