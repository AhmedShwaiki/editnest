<script lang="ts">
    import './index.css'
    import CardList from './lib/CardList.svelte'
    import TextInput from './lib/TextInput.svelte'
    import Button from './lib/Button.svelte'

    let isDarkMode = JSON.parse(localStorage.getItem('darkMode') || 'false')
    $: toggleColorScheme(isDarkMode)
    let allowTransition = false

    function toggleColorScheme(enableDarkMode = false) {
        document.body.classList.remove('color-transition')

        if (enableDarkMode) {
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        }

        // prevent transition effect on page load
        if (allowTransition) {
            document.body.classList.add('color-transition')
        }
        localStorage.setItem('darkMode', isDarkMode.toString())
    }
</script>

<header>
    <Button
        onClick={() => {
            if (!allowTransition) {
                allowTransition = true
            }

            isDarkMode = !isDarkMode
        }}
    >
        {isDarkMode ? 'Dark' : 'Light'}
    </Button>
</header>

<main>
    <div class="root">
        <TextInput />
        <CardList />
    </div>
</main>

<footer>
    <!-- Footer content goes here -->
</footer>

<style>
    .root {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    :global(.dark) {
        background-color: var(--background-dark);
        border-color: var(--border-dark);
    }

    :global(.light) {
        background-color: var(--background-light);
        border-color: var(--border-light);
    }

    :global(.color-transition) {
        transition: background-color var(--animation-duration) ease-in-out;
    }
</style>
