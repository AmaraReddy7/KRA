const API_BASE = "http://localhost:3000/api";

export const registerUser = async (data) => {
  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    return await res.json();
  } catch (err) {
    console.error("FETCH ERROR:", err.message);
    throw err;
  }
};
