export const adventure = {
  name: "adventure",
  title: "Adventure",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    {
      name: "category",
      title: "Activity Category",
      type: "string",
      options: {
        list: [
          { title: "Fishing", value: "fishing" },
          { title: "Hiking", value: "hiking" },
          { title: "Camping", value: "camping" },
          { title: "Hunting", value: "hunting" },
          { title: "Kayaking", value: "kayaking" },
        ],
      },
    },
    {
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
          { title: "Expert", value: "expert" },
        ],
      },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt Text" }],
    },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "body", title: "Body", type: "blockContent" },
  ],
};
