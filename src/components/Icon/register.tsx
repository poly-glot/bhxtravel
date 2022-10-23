import { Builder } from "@builder.io/react";
import Icon from "./index";
import * as IconList from "../Icons";

Builder.registerComponent(Icon, {
  name: "Icon",
  inputs: [
    {
      name: "icon",
      type: "variant",
      friendlyName: "Icon",
      enum: Object.keys(IconList),
    },
    {
      name: "width",
      type: "string",
    },
    {
      name: "height",
      type: "string",
    },
  ],
});
