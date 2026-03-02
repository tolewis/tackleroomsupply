"use client";

import {
  PortableText as SanityPortableText,
  type PortableTextComponents,
} from "next-sanity";
import NextLink from "next/link";
import { urlFor } from "@/lib/sanity/image";

/* eslint-disable @typescript-eslint/no-explicit-any */

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-heading text-3xl font-bold mt-12 mb-4 text-text-primary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-2xl font-semibold mt-10 mb-3 text-text-primary">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-heading text-xl font-semibold mt-8 mb-2 text-text-primary">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-6 my-6 italic text-text-secondary">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed text-text-secondary">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-text-secondary">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-text-secondary">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-text-primary">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-surface-raised px-1.5 py-0.5 text-sm font-mono text-ember-400">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover underline underline-offset-4"
          >
            {children}
          </a>
        );
      }
      return (
        <NextLink href={href} className="text-accent hover:text-accent-hover underline underline-offset-4">
          {children}
        </NextLink>
      );
    },
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ""}
            className="rounded-lg w-full"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-text-muted">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    videoEmbed: ({ value }: any) => {
      if (!value?.url) return null;
      return (
        <figure className="my-8">
          <div className="aspect-video rounded-lg overflow-hidden bg-surface-raised">
            <iframe
              src={value.url}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              loading="lazy"
              title={value.caption || "Embedded video"}
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-text-muted">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    pullQuote: ({ value }: any) => (
      <aside className="my-10 py-6 border-y border-border">
        <blockquote className="font-heading text-2xl font-semibold text-text-primary text-center italic">
          &ldquo;{value.text}&rdquo;
        </blockquote>
        {value.attribution && (
          <p className="mt-3 text-center text-sm text-text-muted">
            &mdash; {value.attribution}
          </p>
        )}
      </aside>
    ),
    gearCallout: ({ value }: any) => (
      <aside className="my-8 rounded-lg border border-ember-500/25 bg-ember-500/5 p-6">
        <p className="font-heading text-sm font-semibold text-ember-400 mb-1">Gear Pick</p>
        {value.note && <p className="text-text-secondary text-sm">{value.note}</p>}
      </aside>
    ),
  },
};

interface PortableTextProps {
  value: any;
}

export function PortableTextRenderer({ value }: PortableTextProps) {
  if (!value) return null;
  return (
    <div className="prose-unhook">
      <SanityPortableText value={value} components={components} />
    </div>
  );
}
