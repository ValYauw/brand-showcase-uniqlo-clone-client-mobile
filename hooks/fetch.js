import { useEffect, useState } from "react";

export default function useFetch(entrypoint) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = `http://localhost:3000${entrypoint}`;

    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (!res.ok) throw json;
        setData(json);
      } catch(err) {
        console.log(err);
      }
    })();

  }, [])

  return { isLoading, data };
}