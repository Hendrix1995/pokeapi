"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { END_ID, PAGE_GROUP_SIZE, PAGE_SIZE } from "@/script/const/pagination";

function HomePagination() {
  const router = useRouter();
  const params = useSearchParams();

  const [pageGroup, setPageGroup] = useState(1);

  const currentPage = Number(params.get("page"));
  const totalPages = Math.ceil(END_ID / PAGE_SIZE);
  const lastPageGroup = Math.ceil(totalPages / PAGE_GROUP_SIZE);

  const handleClickPage = (page: number) => {
    router.push(`?page=${page}`, { scroll: false });
    window.scrollTo({ top: 410, behavior: "smooth" });
  };

  const handleClickArrow = (type: "back" | "front") => {
    if (type === "front" && pageGroup > 1) {
      setPageGroup((pageGroupPrev) => pageGroupPrev - 1);
    }

    if (type === "back" && pageGroup !== lastPageGroup) {
      setPageGroup((pageGroupPrev) => pageGroupPrev + 1);
    }
  };

  const pageGroups = useMemo(() => {
    let arr = [];
    const startPage = (pageGroup - 1) * PAGE_GROUP_SIZE + 1;
    const endPage = startPage + PAGE_GROUP_SIZE - 1;
    for (let i = startPage; i <= endPage; i++) {
      if (i > totalPages) break;
      arr.push(i);
    }
    return arr;
  }, [pageGroup]);

  useEffect(() => {
    if (!currentPage) {
      router.push("?page=1", { scroll: false });
    }
  }, []);

  return (
    <section className='bg-white mt-8'>
      <ul className='flex justify-center items-center gap-2'>
        <li
          className='cursor-pointer'
          style={{ color: pageGroup === 1 ? "#dddddd" : "black" }}
          onClick={() => handleClickArrow("front")}
        >
          ◀
        </li>
        {pageGroups.map((page) => {
          const isActive = currentPage === page;

          return (
            <li
              className='px-2 text-center rounded-4'
              style={{
                backgroundColor: isActive ? "#f4f4f4" : "white",
                fontWeight: isActive ? 700 : 400,
                cursor: isActive ? "default" : "pointer",
                border: isActive ? "1px solid #dddddd" : "none",
              }}
              key={page}
              onClick={() => handleClickPage(page)}
            >
              {page}
            </li>
          );
        })}
        <li
          className='cursor-pointer'
          style={{ color: pageGroup === lastPageGroup ? "#dddddd" : "black" }}
          onClick={() => handleClickArrow("back")}
        >
          ▶
        </li>
      </ul>
    </section>
  );
}

export default HomePagination;
