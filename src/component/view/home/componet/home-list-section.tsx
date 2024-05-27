"use client";

import React, { useEffect, useState } from "react";
import Card from "./home-card";
import { PAGE_SIZE } from "@/script/const/pagination";
import { useSearchParams } from "next/navigation";

export default function ListSection() {
  const params = useSearchParams();
  const currentPage = Number(params.get("page"));
  const [ids, setIds] = useState(Array.from(new Array(PAGE_SIZE), (_, index) => 1 + index));

  useEffect(() => {
    const startId = (currentPage - 1) * PAGE_SIZE + 1;
    setIds(Array.from(new Array(PAGE_SIZE), (_, index) => startId + index));
  }, [currentPage]);

  return (
    <section>
      <ul className='flex justify-center flex-wrap gap-4'>
        {ids?.map((id) => {
          return <Card key={id} id={id} />;
        })}
      </ul>
    </section>
  );
}
