import React from "react";
import Info from "./componet/detail-info";

type DetailContainerProps = { id: string };

function DetailContainer({ id }: DetailContainerProps) {
  return (
    <section>
      <Info id={id} />
    </section>
  );
}

export default DetailContainer;
