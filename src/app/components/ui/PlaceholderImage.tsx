export function PlaceholderImage({
  className = "",
  label = "IMAGE",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={[
        "relative grid place-items-center overflow-hidden rounded-2xl bg-neutral-100",
        "ring-1 ring-inset ring-neutral-200",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>
      <span className="text-xs font-semibold tracking-[0.3em] text-neutral-500">
        {label}
      </span>
    </div>
  );
}
