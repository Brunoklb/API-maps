import { baseURL } from "./baseUrl";

export function AddForm({ position }) {
  return (
    <div className="p-4 flex flex-col gap-2 shadow z-10 h-full justify-center">
      <h1 className="text-lg">Adicionar Hemonúcleo</h1>
      <form
        action={baseURL + '/bloodCenters'}
        method="post" className="flex flex-col gap-2 p-2">
        <label>
          Nome <span className="text-red-500" title="obrigatório">*</span>
          <input type="text" id="name" required />
        </label>
        <label>
          Email
          <input type="email" id="email" />
        </label>
        <input type='hidden' id="lat" value={position?.lat}></input>
        <input type='hidden' id="lng" value={position?.lng}></input>
        <button
          type="submit"
          disabled={!position}
          className="text-white bg-blue-500 rounded-lg p-1 mt-4 active:scale-[95%] transition-all hover:bg-blue-600 duration-100 disabled:saturate-[.2] disabled:hover:bg-blue-500"
        >
          Enviar
        </button>
        {!position &&
          <div>Clique no mapa para selecionar o local</div>}
      </form>
    </div>
  );
}
