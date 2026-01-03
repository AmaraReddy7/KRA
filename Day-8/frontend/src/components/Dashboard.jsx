import { useEffect, useState } from "react";
import { getProtectedData } from "../api/api";

export default function Dashboard({ token }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    getProtectedData(token).then(setData);
  }, [token]);

  return (
    <div>
      <h2>Dashboard (Protected)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
