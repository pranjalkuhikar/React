import { useState, useEffect } from "react";

const Eight = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlerChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm.trim().length > 0) {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api.github.com/search/repositories?q=${encodeURIComponent(
              searchTerm
            )}`
          );
          const data = await response.json();
          setResults(data.items || []);
        } catch (error) {
          console.error("Error fetching search results:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
      }
    };

    const debounceTimeout = setTimeout(fetchSearchResults, 500);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  return (
    <div className="border border-slate-400 p-5 rounded-lg">
      <h1 className="text-4xl underline mb-4">GitHub Repository Search</h1>
      <input
        type="text"
        placeholder="Search GitHub repositories"
        onChange={handlerChange}
        className="bg-transparent rounded-md border p-2"
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-4 list-none">
          {results.map((repo) => (
            <div
              key={repo.id}
              className="py-2 border-b border-gray-200 last:border-none"
            >
              <a
                href={repo.html_url}
                target="_blank"
                className="text-slate-300 hover:text-blue-800"
              >
                {repo.full_name}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Eight;
