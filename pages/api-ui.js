import { useState } from 'react';

export default function ApiUI() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    const response = await fetch(`/api/${query}`);
    if (response.ok) {
      const result = await response.json();
      setData(result);
    } else {
      setData({ error: 'Failed to fetch data' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">API Data Viewer</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter API endpoint"
        className="border rounded p-2 mb-4 w-full max-w-md"
      />
      <button
        onClick={fetchData}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Fetch Data
      </button>
      {data && (
        <pre className="bg-white p-4 mt-4 rounded shadow w-full max-w-md overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}