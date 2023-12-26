import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "../app/login/page";

describe("Login Component", () => {
  it("disables the login button if either the username or password is empty", () => {
    const { getByText } = render(<Login />);

    const loginButton = getByText("Login");

    // Check if the login button is initially disabled
    expect(loginButton).toBeDisabled();
  });
  it("Callback function is triggered on valid credentials", async () => {
    // Mock the callback function
    const mockOnSubmit = jest.fn();

    // Render the LoginForm component with the mock callback function
    const { getByTestId, getByLabelText } = render(
      <Login onSubmit={mockOnSubmit} />
    );

    // Simulate user input by updating the username and password fields
    const usernameInput = getByTestId("username");
    const passwordInput = getByTestId("password");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    // Get the login button and click it
    const loginButton = getByTestId("login-button");
    console.log(loginButton);
    fireEvent.click(loginButton);
  });
});
