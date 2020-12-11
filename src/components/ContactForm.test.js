import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import ContactForm from "./ContactForm"

test("renders ContactForm component without errors", () =>{
    render(<ContactForm/>)
})
test("user can fill out form", ()=>{
    render(<ContactForm/>)
    const firstInput = screen.getByLabelText(/first name/i)
    const lastInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    const button = screen.getByRole("button",{name:/submit/i})
    userEvent.type(firstInput, "Brad")
    userEvent.type(lastInput, "Dion")
    userEvent.type(emailInput, "boy@blueberry.com")
    userEvent.type(messageInput, "this test is so weird")
    userEvent.click(button)

    // const myName = screen.getByText(/Brad/i)
    // expect (myName).toBeInTheDocument()
})