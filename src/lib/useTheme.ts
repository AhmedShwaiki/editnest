import { writable } from 'svelte/store'

type ThemeOptions = {
    localStorageKey: string
    default: string
    attribute?: string
    onLoadTheme?: (themeName: string) => void
    onSetTheme?: (themeName: string) => void
}

const disableAnimation = () => {
    const css = document.createElement('style')
    css.appendChild(
        document.createTextNode(
            `*{-webkit-transition:none!important;
                -moz-transition:none!important;
                -o-transition:none!important;
                -ms-transition:none!important;
                transition:none!important}`
        )
    )

    document.head.appendChild(css);
    setTimeout(() => {
        document.head.removeChild(css)
    }, 1)
}

export default function useTheme(
    themes: string[],
    options: ThemeOptions = {
        localStorageKey: 'theme',
        default: themes[0],
        onLoadTheme: undefined,
        onSetTheme: undefined
    }
) {
    const storedTheme = localStorage.getItem(options.localStorageKey)
    const initialTheme = storedTheme || themes[0]

    if (options.onLoadTheme) {
        options.onLoadTheme(initialTheme)
    }
    disableAnimation()
    document.body.className = initialTheme

    const theme = writable(initialTheme)
    const setTheme = (newTheme: string) => {
        if (themes.includes(newTheme)) {
            if (options.onSetTheme) {
                options.onSetTheme(newTheme)
            }
            document.body.className = newTheme
            theme.set(newTheme)
            localStorage.setItem(options.localStorageKey, newTheme)
        } else {
            console.warn(`Invalid theme name: ${newTheme}`)
        }
    }

    return { theme, setTheme }
}
