import { Builder } from "@builder.io/react";
import Navigation from "./index";

Builder.registerComponent(Navigation, {
  name: "Navigation",
  inputs: [
    {
      name: "links",
      type: "list",
      friendlyName: "Links",
      subFields: [
        {
          name: "text",
          type: "string",
          defaultValue: "Link Text",
        },
        {
          name: "url",
          type: "string",
          defaultValue: "Link Url",
        },
      ],
    },
  ],
});
