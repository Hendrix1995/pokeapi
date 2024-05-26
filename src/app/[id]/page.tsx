import DetailContainer from "@/component/view/detail/detail-container";
import React from "react";

type Props = { params: { id: string } };

export default function DetailPage({ params }: Props) {
  return (
    <main>
      <DetailContainer id={params.id} />
    </main>
  );
}
