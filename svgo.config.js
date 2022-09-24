module.exports = {
  plugins: [
    {
      name: "sortAttrs",
    },
    {
      name: "removeXMLNS",
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "path:fill",
      },
    },
  ],
  js2svg: {
    pretty: true,
    indent: 2,
  },
};
