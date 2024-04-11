<script lang="ts">
    import './index.css'
    // import CardList from './lib/CardList.svelte'
    import TextInput from './components/TextInput/TextInput.svelte'
    import Button from './components/Button/Button.svelte'
    import Card from './components/Card/Card.svelte'
    import useTheme from './lib/useTheme'
    import { APP_THEMES } from './lib/constants'

    const { theme, setTheme } = useTheme([APP_THEMES.DARK, APP_THEMES.LIGHT])

    const onClickToggleTheme = () => {
        if ($theme === APP_THEMES.DARK) {
            setTheme(APP_THEMES.LIGHT)
        } else {
            setTheme(APP_THEMES.DARK)
        }
    }

    let items: { title: string; description: string }[] = []
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
                    items = [...items, note]
                }}
            />
        </div>
        <div class="list-container">
            {#each items as { title, description }}
                <Card {title} {description} />
            {/each}
        </div>
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
