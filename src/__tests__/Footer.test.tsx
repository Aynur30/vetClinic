import { render } from '@testing-library/react'
import Footer from '../shared/ui/Footer/Footer'
import "@testing-library/jest-dom";

describe('Footer', () => {
    it('renders the correct text', () => {
        const { getByText } = render(<Footer />)
        const footerElement = getByText('Сеть ветеринарных клиник Sweet Pets')
        expect(footerElement).toBeInTheDocument()
    })
})