export function AddForm() {
  return (
    <div className="p-4 flex flex-col gap-2 shadow z-10 h-full justify-center">
      <h1 className="text-lg">Adicionar Hemonúcleo</h1>
      <form action="post" className="flex flex-col gap-2 p-2">
        <label>
          Nome <span className="text-red-500">*</span>
          <input type="text" id="name" required />
        </label>
        <label>
          Email
          <input type="email" id="email" />
        </label>
        <button
          type="submit"
          className="text-white bg-blue-500 rounded-lg p-1 mt-4 active:scale-[95%] transition-all hover:bg-blue-600 duration-100"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
