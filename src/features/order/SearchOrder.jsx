import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search by ID"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="focus:ring-opacity-50 rounded-full bg-yellow-100 px-4 py-3 text-sm transition-all duration-125 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:outline-none sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
