import {
  getConfiguratorReview,
  masterGoogleReviewMeta,
} from "@/lib/master-config-data";

type ConfiguratorReviewCardProps = {
  brandId?: string | null;
  className?: string;
  compact?: boolean;
};

export function ConfiguratorReviewCard({
  brandId,
  className = "",
  compact = false,
}: ConfiguratorReviewCardProps) {
  const review = getConfiguratorReview(brandId);

  return (
    <div
      className={`rounded-[20px] border border-[rgba(176,141,87,0.3)] bg-[#111111] p-4 text-[#F7F5F2] ${className}`.trim()}
    >
      <p className="mb-2 block text-[0.6875rem] uppercase tracking-[0.2em] text-[rgba(247,245,242,0.4)]">
        Ervaring van klanten
      </p>
      <div className="mb-3 flex items-end gap-2">
        <p
          className="text-[2rem] leading-none text-[#B08D57]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          {masterGoogleReviewMeta.score}
        </p>
        <p className="pb-1 text-[0.75rem] leading-[1.4] text-[rgba(247,245,242,0.45)]">
          op basis van {masterGoogleReviewMeta.count} ervaringen
        </p>
      </div>
      <blockquote
        className={
          compact
            ? "mb-2 text-[0.8125rem] leading-[1.55] text-[rgba(247,245,242,0.72)]"
            : "mb-3 text-[0.875rem] leading-[1.65] text-[rgba(247,245,242,0.72)]"
        }
      >
        “{review.quote}”
      </blockquote>
      <p className="text-[0.75rem] text-[rgba(247,245,242,0.42)]">
        — {review.author}, {review.location}
      </p>
    </div>
  );
}
