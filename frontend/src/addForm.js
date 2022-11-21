import { api } from "./api";
import { RequiredIndicator } from "./requiredIndicator";

export function AddForm({ position }) {

  async function handleSumbit(e) {
    e.preventDefault()
    const data = new FormData(e.target);
    await api.post('/bloodCenters', data)
  }

  return (
    <div className="p-4 flex flex-col gap-2 shadow z-10 h-full justify-center">
      <h1 className="text-lg">Adicionar Hemonúcleo</h1>
      <form
        onSubmit={handleSumbit}
        className="flex flex-col gap-2 p-2">
        <label>
          Nome <RequiredIndicator></RequiredIndicator>
          <input type="text" name="name" required />
        </label>
        <label>
          Email <RequiredIndicator></RequiredIndicator>
          <input type="email" name="email" defaultValue={null} />
        </label>
        {position &&
          <>
            <input
              name="lat"
              type='hidden'
              value={position.lat()}></input>
            <input
              name="lng"
              type='hidden'
              value={position.lng()}></input>
          </>
        }
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
    </div >
  );
}
