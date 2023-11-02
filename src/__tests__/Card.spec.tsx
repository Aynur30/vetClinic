import { render, screen } from '@testing-library/react'
import Card from '../shared/Card/Card'
import '@testing-library/jest-dom'

describe('Card test', ()=> {
    it("Card renders", ()=> {
        render(<Card data={{label:"TEST LABEL", text: "TEST TEXT"}} />)
        const labelText = screen.getByText("TEST LABEL")
        expect(labelText).toBeInTheDocument()
        const textValue = screen.getByText("TEST TEXT")
        expect(textValue).toBeInTheDocument()
    })
})