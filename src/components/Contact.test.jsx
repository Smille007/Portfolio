import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact", () => {
  test("renders the contact form fields and submit button", () => {
    render(<Contact />);

    expect(
      screen.getByRole("heading", { name: /contact me for details/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /submit/i })
    ).toBeInTheDocument();
  });

  test("uses the correct form action and method", () => {
    render(<Contact />);

    const form = document.querySelector("form");

    expect(form).toHaveAttribute("action", "https://getform.io/f/bolmwlga");
    expect(form).toHaveAttribute("method", "POST");
  });
});
