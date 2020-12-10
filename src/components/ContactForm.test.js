import React from "react";
import {render, screen} from "@testing-libray/react";
import userEvent from "@testing-library/user-event"
import ContactForm from "./ContactForm"

test("renders ContactForm component without errors", () =>{
    render(<ContactForm/>)
})