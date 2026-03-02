import { createClient } from "@sanity/client";
import { sanityConfig } from "./env";

export const client = createClient({
  ...sanityConfig,
  stega: { enabled: false },
});

export async function sanityFetch<T>(query: string, params?: Record<string, unknown>): Promise<T> {
  return client.fetch<T>(query, params ?? {});
}
