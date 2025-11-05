function SelectForm({
  title,
  id,
  isLoading,
  options,
  type,
  selectMsg,
  loadingMsg,
}) {
  return (
    <>
      <label>
        <h2 className="my-5 text-2xl font-bold">{title}:</h2>
      </label>
      <select
        className="bg-tertiary rounded-2xl h-10 pl-4 pb-1 border-1 w-full"
        value={id}
        onChange={(e) => setUserEixoId(e.target.value)}
        required
        disabled={isLoading}
      >
        <option value="">{options ? options.nome : selectMsg}</option>
        {type.map((data) => (
          <option key={data.id} value={data.id}>
            {data.nome}
          </option>
        ))}
      </select>
      {isLoading && <p className="text-gray-500">{loadingMsg}</p>}
    </>
  );
}

export default SelectForm;
