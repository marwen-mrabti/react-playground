import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

type T_LazyImageProps = {
  src: string;
  alt: string;
  observerContainer?: Element | Document | null;
  className?: string;
};

export default function LazyImage({
  src,
  alt,
  observerContainer,
  className,
}: T_LazyImageProps) {
  const [imageRef, isVisible] = useIntersectionObserver({
    root: observerContainer || null,
    rootMargin: "0px",
    threshold: 0.75,
  });

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : "https://placehold.co/200"}
      alt={alt}
      loading="lazy"
      className={cn(
        className,
        "h-full w-full object-cover opacity-10 transition-all duration-500 ease-in-out",
        {
          "opacity-100": isVisible,
        },
      )}
    />
  );
}
