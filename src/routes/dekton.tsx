import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dekton")({
  beforeLoad: () => {
    throw redirect({
      to: "/keukenbladen/dekton",
      statusCode: 301,
    });
  },
});
