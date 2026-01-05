interface user {
  id: number;
  name: string;
}

async function fetchUser(userId: number) {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error(`http error status: ${response.status}`);
    }
    return (await response.json()) as user;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to fetch user:", error.message);
    }
    throw error;
  }
}
