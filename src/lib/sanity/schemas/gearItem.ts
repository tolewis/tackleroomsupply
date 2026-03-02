export const gearItem = {
  name: "gearItem",
  title: "Gear Item",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt Text" }],
    },
    { name: "categories", title: "Categories", type: "array", of: [{ type: "reference", to: [{ type: "category" }] }] },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "rating", title: "Rating (1-5)", type: "number" },
    { name: "price", title: "Price", type: "string" },
    { name: "pros", title: "Pros", type: "array", of: [{ type: "string" }] },
    { name: "cons", title: "Cons", type: "array", of: [{ type: "string" }] },
    { name: "body", title: "Body", type: "blockContent" },
  ],
};
