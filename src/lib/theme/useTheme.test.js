import { afterEach, describe, expect, it } from 'vitest'

import useTheme from './useTheme'

const mockThemes = ['theme1', 'theme2']

describe('useTheme', () => {
    afterEach(() => {
        localStorage.clear()
    })

    it('sets the theme with default options', () => {
        localStorage.clear()
        const { setTheme } = useTheme(mockThemes)

        setTheme('theme1')
        expect(localStorage.getItem('theme')).toBe('theme1')

        setTheme('theme2')
        expect(localStorage.getItem('theme')).toBe('theme2')

        setTheme('invalid')
        expect(localStorage.getItem('theme')).toBe('theme2')
    })

    it('sets the theme with given options', () => {
        localStorage.clear()
        const onLoadTheme = vi.fn()
        const onSetTheme = vi.fn()
        const { setTheme } = useTheme(mockThemes, {
            localStorageKey: 'themeKey',
            default: 'theme1',
            onLoadTheme,
            onSetTheme
        })

        expect(onLoadTheme).toHaveBeenCalledTimes(1)
        expect(onLoadTheme).toHaveBeenCalledWith('theme1')

        setTheme('theme2')

        expect(onSetTheme).toHaveBeenCalledWith('theme2')
        expect(onSetTheme).toHaveBeenCalledTimes(1)
    })
})
