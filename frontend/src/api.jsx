const BASE_URL = "http://localhost:8080";

export const GetPostApiColl = async (page = 1, limit = 5) => {
  const url = `${BASE_URL}/api/post?page=${page}&limit=${limit}`;
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};
