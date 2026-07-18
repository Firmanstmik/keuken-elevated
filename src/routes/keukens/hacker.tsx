import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/keukens/hacker")({
  beforeLoad: () => {
    throw redirect({ to: "/keukens/ai-kuchen" });
  },
});
