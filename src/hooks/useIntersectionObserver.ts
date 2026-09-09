import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverHookOptions {
  threshold?: number | number[];
  rootMargin?: string;
  initialVisible?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverHookOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px', initialVisible = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(initialVisible);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Re-triggers on both entering AND exiting the viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
