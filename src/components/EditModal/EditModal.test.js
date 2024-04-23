import { fireEvent, render, screen } from '@testing-library/svelte'

import EditModal from './EditModal.svelte'

const { getByRole, getAllByRole } = screen

const renderEditModal = props => {
    render(EditModal, { ...props })
}

const mockNote = {
    title: 'Test Note',
    description: 'Test description'
}

describe('EditModal', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('renders modal', () => {
        renderEditModal({
            note: mockNote,
            onClose: vi.fn()
        })

        const textAreas = getAllByRole('textbox')

        const titleTextArea = textAreas[0]
        const descriptionTextArea = textAreas[1]

        expect(titleTextArea.name).toBe('title')
        expect(descriptionTextArea.name).toBe('description')

        getByRole('button', { name: 'Close' })
        getByRole('button', { name: 'Undo' })
        getByRole('button', { name: 'Redo' })
    })

    it('calls onClose when close button clicked', async () => {
        const onCloseSpy = vi.fn()

        renderEditModal({
            note: mockNote,
            onClose: onCloseSpy
        })

        await fireEvent.click(getByRole('button', { name: 'Close' }))
        expect(onCloseSpy).toHaveBeenCalledTimes(1)
    })
})
