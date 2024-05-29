import TitleSection from "@/component/common/common-title-section";
import CardListSection from "@/component/view/home/component/home-card-list-section";
import HomePagination from "@/component/view/home/component/home-pagination";
import SearchSection from "@/component/view/home/component/home-search-section";

export default async function Home() {
  return (
    <main className='py-12 px-8 flex flex-col items-center gap-8'>
      <TitleSection />
      <SearchSection />
      <CardListSection />
      <HomePagination />
    </main>
  );
}
