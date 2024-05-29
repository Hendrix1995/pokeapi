"use client";

import React from "react";
import Card from "./home-card";
import { useSearchParams } from "next/navigation";
import HomePageCard from "./home-list-card";
import HomeTypeCard from "./home-type-card";

export default function CardListSection() {
  const params = useSearchParams();
  const currentPage = Number(params.get("page"));
  const currentSearch = params.get("search");
  const currentType = params.get("type");

  return (
    <section>
      <ul className='flex justify-center flex-wrap gap-4'>
        {/* search 타입 카드 */}
        {(currentSearch?.length || 0) > 0 && <Card key={currentSearch} value={currentSearch as string} />}

        {/* type 타입 카드 */}
        {(currentType?.length || 0) > 0 && <HomeTypeCard />}

        {/* page 타입 카드 */}
        {Number(currentPage) > 0 && !currentType && <HomePageCard />}
      </ul>
    </section>
  );
}
