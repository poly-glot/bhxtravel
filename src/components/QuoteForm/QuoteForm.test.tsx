import React from "react";
import fetchMock from "jest-fetch-mock";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QuoteForm from "./index";

describe("<QuoteForm />", () => {
  it("should render", () => {
    render(<QuoteForm />);
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  describe("Form Submission", () => {
    describe.each`
      doReturn     | pickup          | dropOff         | departureDate   | departureTime | returnDate      | returnTime | name            | email                | phone       | luggage | numPassenger | reason        | hearAboutUs | errorMessage
      ${"one-way"} | ${"London"}     | ${"Birmingham"} | ${"2022-01-01"} | ${"11:00"}    | ${""}           | ${""}      | ${"Test User1"} | ${"test@tester.com"} | ${"123456"} | ${"1"}  | ${"1"}       | ${"Football"} | ${"Bing"}   | ${"An unexpected error occurred."}
      ${"return"}  | ${"Birmingham"} | ${"London"}     | ${"2022-01-01"} | ${"11:00"}    | ${"2022-01-01"} | ${"23:00"} | ${"Test User2"} | ${"test@tester.com"} | ${"123456"} | ${"1"}  | ${"1"}       | ${"Football"} | ${"Bing"}   | ${""}
    `(
      "When pickup is $pickup, user is $name & departure date is $departureDate",
      ({
        doReturn,
        pickup,
        dropOff,
        departureDate,
        departureTime,
        returnDate,
        returnTime,
        name,
        email,
        phone,
        luggage,
        numPassenger,
        reason,
        hearAboutUs,
        errorMessage,
      }) => {
        afterEach(() => {
          fetchMock.resetMocks();
        });

        it("Should submit the form", async () => {
          // Arrange mock Response
          let status = 200;
          let message = { success: true, error: "" };

          if (errorMessage) {
            message = { success: false, error: errorMessage };
            status = 400;
          }

          fetchMock.mockResponseOnce(JSON.stringify(message), { status });

          const user = userEvent.setup();
          render(<QuoteForm />);

          // Arrange - Fill the Quote form
          await user.type(
            screen.getByLabelText("Pickup Point", { exact: false }),
            pickup
          );

          await user.type(
            screen.getByLabelText("Drop off point or destination", {
              exact: false,
            }),
            dropOff
          );

          await user.click(
            doReturn == "one-way"
              ? screen.getByLabelText("One way")
              : screen.getByLabelText("Return")
          );

          await user.type(
            screen.getByLabelText("Departure Date", { exact: false }),
            departureDate
          );

          await user.type(
            screen.getByLabelText("Departure Time", { exact: false }),
            departureTime
          );

          await user.type(
            screen.getByLabelText("Return Date", { exact: false }),
            returnDate
          );

          await user.type(
            screen.getByLabelText("Return Time", { exact: false }),
            returnTime
          );

          await user.type(
            screen.getByLabelText("Name", { exact: false }),
            name
          );
          await user.type(
            screen.getByLabelText("Email", { exact: false }),
            email
          );
          await user.type(
            screen.getByLabelText("Phone", { exact: false }),
            phone
          );
          await user.type(
            screen.getByLabelText("Luggage", { exact: false }),
            luggage
          );
          await user.type(
            screen.getByLabelText("Number Of Passenger", { exact: false }),
            numPassenger
          );

          await user.selectOptions(
            screen.getByLabelText("Reason for trip", { exact: false }),
            reason
          );

          await user.selectOptions(
            screen.getByLabelText("How did you hear about us?", {
              exact: false,
            }),
            hearAboutUs
          );

          await user.click(
            screen.getByLabelText("booking terms and conditions", {
              exact: false,
            })
          );

          await fireEvent.submit(screen.getByTestId("form"));

          expect(fetch).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({
              body: JSON.stringify({
                pickup,
                departureDate,
                departureTime,
                returnDate,
                returnTime,
                dropOff,
                name,
                email,
                phone,
                luggage,
                numPassenger,
                reason,
                hearAboutUs,
                terms: true,
                doReturn,
              }),
            })
          );

          await waitFor(() => {
            expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
          });

          if (errorMessage) {
            expect(screen.getByText(errorMessage)).toBeInTheDocument();
          }

          if (!errorMessage) {
            expect(screen.getByTestId("success")).toBeInTheDocument();
          }
        });
      }
    );
  });
});
