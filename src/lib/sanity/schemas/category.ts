// Sanity schema definition for Category
// Import defineType/defineField from 'sanity' when using in Sanity Studio
export const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "description", title: "Description", type: "text" },
  ],
};
