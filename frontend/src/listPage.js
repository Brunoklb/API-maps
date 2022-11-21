import { AddForm } from "./addForm";
import { DisplayMap } from "./displayMap";

export function ListPage() {
  return (
    <div className="flex flex-row h-screen">
      <DisplayMap></DisplayMap>
      <AddForm></AddForm>
    </div>
  );
}
