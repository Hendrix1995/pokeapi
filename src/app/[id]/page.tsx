import DetailContainer from "@/component/view/detail/detail-container";
import TitleSection from "@/component/view/home/componet/home-title-section";
import React from "react";

type DetailPageProps = { params: { id: string } };

export default function DetailPage({ params }: DetailPageProps) {
  return (
    <main>
      <TitleSection />
      <DetailContainer id={params.id} />
    </main>
  );
}
