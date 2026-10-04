import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SearchPage } from "../pages/movies/search-page";

export const Route = createFileRoute("/search")({
  validateSearch: z.object({ query: z.string().catch("") }),
  component: SearchPage,
});
