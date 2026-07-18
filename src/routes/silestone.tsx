import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/silestone")({
  beforeLoad: () => {
    throw redirect({
      to: "/keukenbladen/silestone",
      statusCode: 301,
    });
  },
});
