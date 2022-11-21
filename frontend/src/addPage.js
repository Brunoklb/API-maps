import { useState } from "react";
import { AddForm } from "./addForm";
import { InsertMap } from "./insertMap";

export function AddPage() {
    const [position, setPosition] = useState()

    return <div className="flex flex-row h-screen">
        <InsertMap
            position={position}
            setPosition={setPosition}>
        </InsertMap>
        <AddForm position={position}></AddForm>
    </div>
}