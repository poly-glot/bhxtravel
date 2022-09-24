import { Builder } from "@builder.io/react";
import Cta from "./index";

Builder.registerComponent(Cta, {
  name: "Cta",
  inputs: [
    {
      name: "text",
      type: "text",
      defaultValue: "Click me!",
      bubble: true,
    },
    {
      name: "link",
      type: "url",
      bubble: true,
    },
    {
      name: "openLinkInNewTab",
      type: "boolean",
      defaultValue: false,
      friendlyName: "Open link in new tab",
    },
  ],
  static: true,
  noWrap: true,
});
