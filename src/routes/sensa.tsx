import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sensa")({
  beforeLoad: () => {
    throw redirect({
      to: "/keukenbladen/sensa",
      statusCode: 301,
    });
  },
});
