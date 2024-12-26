import { useEffect, useRef, useState } from "react";

type T_Options = {
  root?: Element | Document | null; // if null, the viewport is used
  rootMargin?: string; // the margin around the root
  threshold?: number | number[]; // the percentage of the target that must be visible
};

export const useIntersectionObserver = (options: T_Options) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }
      setIsVisible(entry.isIntersecting);
    }, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return [elementRef, isVisible] as const;
};
