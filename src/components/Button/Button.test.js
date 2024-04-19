import { render, screen } from '@testing-library/svelte'
import Button from './Button.svelte'
import { expect } from 'vitest'

const renderButton = props => {
    render(Button, { ...props })
}

describe('Button', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    test('shows button with text when rendered', () => {
        renderButton({
            onClick: () => {}
        })

        const button = screen.getByRole('button')
        expect(button).toBeInstanceOf(HTMLButtonElement)
    })

    test('calls the onClick function when clicked', async () => {
        const onClickSpy = vi.fn()

        renderButton({
            onClick: onClickSpy
        })

        const button = screen.getByRole('button')
        await button.click()

        expect(onClickSpy).toHaveBeenCalledTimes(1)
    })
})
