import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUpForm from "../widgets/Forms/SignUpForm";

const onSubmit = jest.fn();

describe('test show component SignUpForm', () => {
    it('test render', () => {
        const { getByPlaceholderText } = render(<SignUpForm onSubmit={onSubmit} />)
        const input_1 = getByPlaceholderText('Full name');
        expect(input_1).toBeInTheDocument();
        const input_2 = getByPlaceholderText('Email Address');
        expect(input_2).toBeInTheDocument();
        const input_3 = getByPlaceholderText('Password');
        expect(input_3).toBeInTheDocument();
        const input_4 = getByPlaceholderText('Confirm Password');
        expect(input_4).toBeInTheDocument();
        const btn = screen.getByText('Get Started');
        expect(btn).toBeInTheDocument();
        fireEvent.click(btn)
    })
})