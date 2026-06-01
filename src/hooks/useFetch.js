// Import React hooks
import { useState, useEffect } from "react";

function useFetch(url) {

  // Store fetched data
  const [data, setData] = useState([]);

  // Track loading status
  const [loading, setLoading] = useState(true);

  // Store error messages
  const [error, setError] = useState("");

  useEffect(() => {

    // Function to fetch data from API
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, [url]); // Runs when URL changes

  return { data, loading, error };
}

export default useFetch;
