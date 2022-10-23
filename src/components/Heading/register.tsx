import { Builder } from "@builder.io/react";
import Heading from "./index";

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [
    {
      name: "heading",
      type: "string",
    },
    {
      name: "category",
      type: "variant",
      friendlyName: "Heading Type",
      enum: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    {
      name: "colour",
      type: "variant",
      friendlyName: "Colour",
      enum: ["primary", "secondary", "blue", "purple", "white"],
    },
    {
      name: "noBottomMargin",
      type: "boolean",
    },
  ],
});
