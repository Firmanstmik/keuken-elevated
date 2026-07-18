import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/neolith")({
  beforeLoad: () => {
    throw redirect({
      to: "/keukenbladen/neolith",
      statusCode: 301,
    });
  },
});
