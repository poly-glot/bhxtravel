import { Builder } from "@builder.io/react";
import QuoteForm from "./index";

Builder.registerComponent(QuoteForm, {
  name: "QuoteForm",
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
