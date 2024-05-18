import { fireEvent, render, screen } from '@testing-library/svelte'

import App from './App.svelte'

const renderApp = props => {
    return render(App, { ...props })
}

const { getByRole, getAllByRole, getByText, getByLabelText } = screen

describe('App', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    test('renders app', () => {
        renderApp()

        expect(getByRole('contentinfo')).toBeInTheDocument()
        expect(getByRole('banner')).toBeInTheDocument()
        expect(getByRole('main')).toBeInTheDocument()

        expect(document.body.classList).toContain('dark')
        expect(getByRole('button', { name: 'Dark' })).toBeInTheDocument()

        expect(getByRole('textbox')).toBeInTheDocument()
    })

    test('test saving a note', async () => {
        renderApp()

        // open modal
        await fireEvent.click(getByRole('textbox'))
        const [titleInput, descInput] = getAllByRole('textbox')

        // enter data
        await fireEvent.input(titleInput, { target: { value: 'New note title' } })
        await fireEvent.input(descInput, { target: { value: 'New note description' } })

        await fireEvent.blur(titleInput)
        await fireEvent.blur(descInput)

        // data exists in a card
        expect(getByLabelText('click to edit card with New note title')).toBeInTheDocument()
        expect(getByText('New note title')).toBeInTheDocument()
        expect(getByText('New note description')).toBeInTheDocument()
    })

    test('changes the theme on switch theme', async () => {
        const { container: body } = renderApp()
        const initialTheme = body.classList.contains('dark') ? 'dark' : 'light'
        console.log(initialTheme)
        const themeButton = getByRole('button', { name: /dark|light/i })
        await fireEvent.click(themeButton)

        const newTheme = body.classList.contains('dark') ? 'dark' : 'light'
        console.log(newTheme)
        expect(newTheme).not.toBe(initialTheme)
    })
})
