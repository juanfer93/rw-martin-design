import Image from "next/image";
import { PlaceholderImage } from "./PlaceholderImage";

type ServiceImageProps = {
  className?: string;
  src?: string;
  alt?: string;
  label?: string;
};

export function ServiceImage({
  className = "",
  src,
  alt = "",
  label = "IMAGE",
}: ServiceImageProps) {
  if (!src) {
    return <PlaceholderImage className={className} label={label} />;
  }

  const isDataUrl = src.startsWith("data:");

  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl bg-neutral-100",
        "ring-1 ring-inset ring-neutral-200",
        className,
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 520px, 100vw"
        className="object-cover"
        unoptimized={isDataUrl}
      />
    </div>
  );
}
