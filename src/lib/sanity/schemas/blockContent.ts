export const blockContent = {
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [{ title: "URL", name: "href", type: "url" }],
          },
        ],
      },
    },
    {
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alt Text" },
        { name: "caption", type: "string", title: "Caption" },
      ],
    },
    {
      name: "videoEmbed",
      title: "Video Embed",
      type: "object",
      fields: [
        { name: "url", title: "Video URL", type: "url" },
        { name: "caption", title: "Caption", type: "string" },
      ],
    },
    {
      name: "gearCallout",
      title: "Gear Callout",
      type: "object",
      fields: [
        { name: "gear", title: "Gear Item", type: "reference", to: [{ type: "gearItem" }] },
        { name: "note", title: "Note", type: "string" },
      ],
    },
    {
      name: "pullQuote",
      title: "Pull Quote",
      type: "object",
      fields: [
        { name: "text", title: "Quote Text", type: "text" },
        { name: "attribution", title: "Attribution", type: "string" },
      ],
    },
  ],
};
