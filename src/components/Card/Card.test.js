import { render, screen } from '@testing-library/svelte'
import Card from './Card.svelte'
import { expect } from 'vitest'

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
            description: 'Test description'
        })

        const title = screen.getByText('Test Title')
        const description = screen.getByText('Test description')
        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
    })

    // it('on click calls the onClick handler', async () => {
    //     renderButton({
    //         title: 'Test Title',
    //         description: 'Test description',
    //         onClick: vi.fn();
    //     })
    // })
})
