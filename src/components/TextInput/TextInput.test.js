import { fireEvent, render, screen } from '@testing-library/svelte'
import TextInput from './TextInput.svelte'

const { queryAllByRole } = screen

const renderTextInput = props => {
    render(TextInput, {
        onBlur: vi.fn(),
        ...props
    })
}

const elements = {
    textarea: () => queryAllByRole('textbox')[1],
    input: () => queryAllByRole('textbox')[0]
}

describe('TextInput', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('renders TextInput', () => {
        renderTextInput()

        expect(elements.input()).toBeInTheDocument()
        // default title
        expect(elements.input().placeholder).toBe('Title')
        // text area is collapsed initially
        expect(elements.textarea()).toBeUndefined()
    })

    it('passes placeholder props to input', () => {
        const customTitlePlaceholder = 'My Custom Title'
        renderTextInput({ inputPlaceholder: customTitlePlaceholder })

        expect(elements.input().placeholder).toBe(customTitlePlaceholder)
    })

    it('expands text area on input click', async () => {
        renderTextInput()
        await fireEvent.click(elements.input())

        expect(elements.textarea()).toBeInTheDocument()
    })
})
