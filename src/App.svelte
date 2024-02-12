<script lang="ts">
    import './index.css'
    // import CardList from './lib/CardList.svelte'
    import TextInput from './components/TextInput/TextInput.svelte'
    import Button from './components/Button/Button.svelte'
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

<header>
    <Button onClick={onClickToggleTheme}>
        {$theme === APP_THEMES.DARK ? 'Dark' : 'Light'}
    </Button>
</header>

<main>
    <div class="container">
        <TextInput
            onBlur={note => {
                items = [...items, note]
                // push this value into the notes array above
            }}
        />
        <!-- TODO: <CardList /> -->
        <ul>
            {#each items as item}
                <li>{item.title} x {item.description}</li>
            {/each}
        </ul>
    </div>
</main>

<footer>
    <!-- Footer content goes here -->
</footer>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    :global(body.light) {
        background-color: var(--background-light);
        border-color: var(--border-light);
    }

    :global(body.dark) {
        background-color: var(--background-dark);
        border-color: var(--border-dark);
    }
</style>
