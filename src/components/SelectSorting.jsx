import { useTasks } from "../context/ContextProvider";

function SelectSorting() {
  const { setSortby } = useTasks();
  return (
    <select
      onChange={(e) => setSortby(e.target.value)}
      className="mx-2 cursor-pointer hover:bg-yellow-600 hover:text-yellow-50 w-fit p-2 
      outline-none ring-1 ring-yellow-600 rounded-md"
    >
      <option value="asc">Sort A-Z</option>
      <option value="desc">Sort Z-A</option>
      <option value="checked">Sort By More Importance</option>
      <option value="sooner">Sort By Date</option>
    </select>
  );
}

export default SelectSorting;
