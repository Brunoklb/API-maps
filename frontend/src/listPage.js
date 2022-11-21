import { useState } from "react";
import { DisplayMap } from "./displayMap";
import { CenterDetails } from "./centerDetails";

export function ListPage() {
  const [selected, setSelected] = useState();

  return (
    <div className="flex flex-row h-screen">
      <DisplayMap setSelected={setSelected}></DisplayMap>
      <CenterDetails center={selected}></CenterDetails>
    </div>
  );
}
