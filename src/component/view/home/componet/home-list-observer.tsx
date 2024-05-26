"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function Observer() {
  const containerRef = useRef(null);

  const intersectionCallback = useCallback(() => {
    console.log("짠");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback);
    containerRef.current && observer.observe(containerRef.current);
  }, [containerRef, intersectionCallback]);

  return (
    <div ref={containerRef} className='bg-red-500'>
      Observer
    </div>
  );
}
