import React from "react";
import Card from "./home-card";
import Observer from "./home-list-observer";

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default async function ListSection() {
  return (
    <section>
      <ul className='flex justify-center flex-wrap gap-4'>
        {ids.map((id) => {
          return <Card key={id} id={id} />;
        })}
      </ul>
      <Observer />
    </section>
  );
}
