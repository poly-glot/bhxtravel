import { Builder } from "@builder.io/react";
import Social from "./index";
import * as IconList from "../Icons";

Builder.registerComponent(Social, {
  name: "Social",
  inputs: [
    {
      name: "sociallinks",
      type: "list",
      friendlyName: "Social Links",
      subFields: [
        {
          name: "icon",
          type: "variant",
          friendlyName: "Icon",
          enum: Object.keys(IconList),
        },
        {
          friendlyName: "Link",
          name: "link",
          type: "url",
          defaultValue: "",
        },
      ],
    },
  ],
});
