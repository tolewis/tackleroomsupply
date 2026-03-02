import { groq } from "next-sanity";

// Articles
export const allArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    "categories": categories[]->{ _id, title, slug },
    "author": author->{ name, image }
  }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    mainImage,
    "categories": categories[]->{ _id, title, slug },
    "author": author->{ name, image, bio }
  }
`;

export const articleSlugsQuery = groq`
  *[_type == "article" && defined(slug.current)][].slug.current
`;

// Adventures
export const allAdventuresQuery = groq`
  *[_type == "adventure"] | order(title asc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    mainImage,
    difficulty
  }
`;

export const adventuresByCategoryQuery = groq`
  *[_type == "adventure" && category == $category] | order(title asc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    mainImage,
    difficulty
  }
`;

export const adventureCategoriesQuery = groq`
  array::unique(*[_type == "adventure"].category)
`;

// Gear
export const allGearQuery = groq`
  *[_type == "gearItem"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    rating,
    price,
    "categories": categories[]->{ _id, title, slug }
  }
`;

export const gearBySlugQuery = groq`
  *[_type == "gearItem" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    mainImage,
    rating,
    price,
    pros,
    cons,
    "categories": categories[]->{ _id, title, slug }
  }
`;

export const gearSlugsQuery = groq`
  *[_type == "gearItem" && defined(slug.current)][].slug.current
`;

// Gallery
export const allGalleryQuery = groq`
  *[_type == "galleryImage"] | order(_createdAt desc) {
    _id,
    title,
    image,
    caption,
    location,
    "categories": categories[]->{ _id, title }
  }
`;

// Categories
export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`;

// Authors
export const authorBySlugQuery = groq`
  *[_type == "author" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    image,
    bio
  }
`;

// Homepage
export const homepageQuery = groq`{
  "featuredArticles": *[_type == "article"] | order(publishedAt desc)[0...6] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    "categories": categories[]->{ _id, title, slug },
    "author": author->{ name, image }
  },
  "categories": *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
}`;
