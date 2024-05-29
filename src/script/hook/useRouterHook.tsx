"use client";

import { ReadonlyURLSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

type UseRouterPushProps = {
  prams: { key: string; value: string }[];
  isRedirect?: boolean;
  isScroll?: boolean;
};

export function useRouterPush({ prams, isRedirect = false, isScroll = true }: UseRouterPushProps) {
  const router = useRouter();
  const pathname = usePathname();

  const push = useCallback(() => {
    if (prams.length > 1) {
      const andPrams = prams.slice(1, prams.length).map((pram) => `&${pram.key}=${pram.value}`);
      const path = `${pathname}?${prams[0].key}=${prams[0].value}${andPrams}`;

      router.push(path, { scroll: isRedirect });
    } else {
      router.push(`${pathname}?${prams[0].key}=${prams[0].value}`, { scroll: isRedirect });
    }
    isScroll && window.scrollTo({ top: 410, behavior: "smooth" });
  }, [isRedirect, isScroll, pathname, prams, router]);

  return { push: () => push() };
}

export function useReplaceHome() {
  const router = useRouter();
  const pathname = usePathname();

  const replace = useCallback(() => {
    router.replace(`${pathname}?page=1`);
  }, [pathname, router]);

  return { replace: () => replace() };
}

export const useCreateQueryString = (searchParams: ReadonlyURLSearchParams) => {
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return { createQueryString };
};
