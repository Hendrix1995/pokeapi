import BackButton from "@/component/common/common-back-button";
import TitleSection from "@/component/common/common-title-section";
import InfoSection from "@/component/view/detail/component/detail-info-section";
import React from "react";

type DetailPageProps = { params: { id: string } };

export default function DetailPage({ params }: DetailPageProps) {
  return (
    <main className='relative py-12 px-8 flex flex-col items-center gap-16'>
      <TitleSection />
      <InfoSection id={params.id} />
      <BackButton />
    </main>
  );
}
