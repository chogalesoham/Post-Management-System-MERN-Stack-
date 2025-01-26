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
export const GetSinglePostApiColl = async (id) => {
  const url = `${BASE_URL}/api/post/${id}`;
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

export const CreatePostApiColl = async (postobj) => {
  const url = `${BASE_URL}/api/post`;
  try {
    const formData = new FormData();

    for (let key in postobj) {
      formData.append(key, postobj[key]);
    }
    const options = {
      method: "POST",
      body: formData,
    };
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in CreatePostApiColl:", error);
    throw error;
  }
};

export const UpadtePostApiColl = async (postobj, id) => {
  const url = `${BASE_URL}/api/post/${id}`;
  try {
    const formData = new FormData();

    for (let key in postobj) {
      formData.append(key, postobj[key]);
    }
    const options = {
      method: "PUT",
      body: formData,
    };
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in CreatePostApiColl:", error);
    throw error;
  }
};

export const DeletePostApiColl = async (id) => {
  const url = `${BASE_URL}/api/post/${id}`;
  try {
    const options = {
      method: "DELETE",
    };
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in CreatePostApiColl:", error);
    throw error;
  }
};
