"use client";

import { useEffect, useState } from "react";
import { PAGE_SIZE } from "@/script/const/pagination";
import { useSearchParams } from "next/navigation";
import Card from "./home-card";

function HomePageCard() {
  const [ids, setIds] = useState(Array.from(new Array(PAGE_SIZE), (_, index) => 1 + index));

  const params = useSearchParams();
  const currentPage = Number(params.get("page"));

  useEffect(() => {
    const startId = (currentPage - 1) * PAGE_SIZE + 1;
    setIds(Array.from(new Array(PAGE_SIZE), (_, index) => startId + index));
  }, [currentPage]);

  return ids.map((id) => <Card key={id} value={id} />);
}

export default HomePageCard;
