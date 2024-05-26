import React from "react";
import Info from "./componet/detail-info";

type Props = { id: string };

function DetailContainer({ id }: { Props }) {
  return (
    <section>
      <Info id={id} />
    </section>
  );
}

export default DetailContainer;
