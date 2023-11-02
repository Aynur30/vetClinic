import { render, screen, fireEvent } from '@testing-library/react'
import NewsWidget from '../widgets/News/NewsWidget'
import '@testing-library/jest-dom'

describe('NewsWidget Test', () => {
  it('render news widget', () => {
    render(<NewsWidget id={1} title="text" content="text" published={true} />)
    const img = screen.getByTestId('image')
    expect(img).toBeInTheDocument()
    const title = screen.getByTestId('title')
    expect(title).toBeInTheDocument()
    const content = screen.getByTestId('content')
    expect(content).toBeInTheDocument()
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)
  })
})
