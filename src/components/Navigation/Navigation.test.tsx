import React from "react";
import { render, screen } from "@testing-library/react";

import Navigation from "./index";

describe.skip("<Navigation/> Tests", () => {
  it("Should render", () => {
    const links = [
      {
        text: "Link 1",
        url: "/link1",
      },
    ];

    render(<Navigation links={links} />);

    expect(screen.getByText("Link 1")).toBeInTheDocument();
  });
});
