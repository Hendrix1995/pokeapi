"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function Observer() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const router = useRouter();
  const containerRef = useRef(null);

  const intersectionCallback = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        router.push(`?page=${Number(page) + 1}`, { scroll: false });
      }
    },
    [router]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback);
    containerRef.current && observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [containerRef, intersectionCallback]);

  return (
    <div ref={containerRef} className='bg-red-500'>
      Observer
    </div>
  );
}
