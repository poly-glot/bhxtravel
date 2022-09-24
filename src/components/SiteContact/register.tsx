import { Builder } from "@builder.io/react";
import SiteContact from "./index";
import * as IconList from "../Icons";

Builder.registerComponent(SiteContact, {
  name: "Header Contact",
  inputs: [
    {
      name: "contacts",
      type: "list",
      friendlyName: "Contacts",
      subFields: [
        {
          friendlyName: "Heading",
          name: "heading",
          type: "string",
          defaultValue: "",
        },
        {
          friendlyName: "Sub Heading",
          name: "subheading",
          type: "string",
          defaultValue: "",
        },
        {
          name: "icon",
          type: "variant",
          friendlyName: "Icon",
          enum: Object.keys(IconList),
        },
      ],
    },
  ],
});
