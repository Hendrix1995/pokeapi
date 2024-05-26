import React from "react";
import TitleSection from "./componet/home-title-section";
import SearchSection from "./componet/home-search-section";
import ListSection from "./componet/home-list-section";

type Props = {};

function HomeContainer({}: Props) {
  return (
    <section className='py-12 px-8 flex flex-col items-center gap-8'>
      <TitleSection />
      <SearchSection />
      <ListSection />
    </section>
  );
}

export default HomeContainer;
