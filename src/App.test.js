import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

test("User can submit form with all inputs", async () => {
  render(<App />);

  const firstNameInput = screen.getByPlaceholderText(/edd/i);
  const lastNameInput = screen.getByPlaceholderText(/burke/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitBtn = screen.getByRole('button');

  
  
  act(()=>{
    fireEvent.change(firstNameInput, {target: {value: 'Wade'}})
    fireEvent.change(lastNameInput, {target: {value: 'Watts'}})
    fireEvent.change(emailInput, {target: {value: 'wade@test.com'}})
    fireEvent.change(messageInput, {target: {value: 'ready player one'}})
    fireEvent.click(submitBtn)
    })

    //these tests are not working
    const successMessage = await screen.findByTestId('result');
    expect(successMessage).toBeInTheDocument();

    console.log(successMessage)

    // console.log(successMessage);
});


// test('Form errors on empty required values', ()=>{
//   render(<App />);

//   const submitBtn = screen.getByRole("button", /submit/i)
//   console.log(submitBtn);
//   fireEvent.click(submitBtn);

  
//   // const fnameError = screen.getAllByText(/Looks like there was an error: required/i);
//   // console.log(fnameError);
  

// })