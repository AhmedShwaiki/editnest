import { fireEvent, render, screen } from '@testing-library/svelte'

import Card from './Card.svelte'

const { getByText, getByRole } = screen

const renderCard = props => {
    render(Card, { ...props })
}

describe('Card', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('renders card', () => {
        renderCard({
            title: 'Test Title',
            description: 'Test description',
            onClick: vi.fn()
        })

        const title = getByText('Test Title')
        const description = getByText('Test description')

        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
    })

    it('on click calls the onClick handler', async () => {
        const onClickSpy = vi.fn()
        renderCard({
            title: 'Test Title',
            description: 'Test description',
            onClick: onClickSpy
        })

        await fireEvent.click(getByRole('textbox'))
        expect(onClickSpy).toHaveBeenCalledTimes(1)
    })
})
