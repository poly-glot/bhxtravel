import { Builder } from "@builder.io/react";
import Social from "./index";

Builder.registerComponent(Social, {
  name: "List",
  inputs: [
    {
      name: "items",
      type: "list",
      friendlyName: "Items",
      subFields: [
        {
          friendlyName: "Text",
          name: "text",
          type: "richText",
          defaultValue: "",
        },
      ],
    },
  ],
});
