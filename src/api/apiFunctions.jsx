const domain =
  import.meta.env.VITE_MODE === "prod"
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API;

const loginAPI = async (payload) => {
  const response = await fetch(`${domain}/api/author-login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

const reloginAPI = async (token) => {
  const response = await fetch(`${domain}/api/author-re-login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

const getPostsAPI = async () => {
  const response = await fetch(`${domain}/api/posts/author`);
  const data = await response.json();
  return data;
};

const getPostAPI = async (id) => {
  const response = await fetch(`${domain}/api/posts/${id}`);
  const data = await response.json();
  return data;
};

const editPostAPI = async (payload, id, token) => {
  const response = await fetch(`${domain}/api/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

const deletePostAPI = async (id, token) => {
  await fetch(`${domain}/api/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return;
};

const createPostAPI = async (payload, token) => {
  const response = await fetch(`${domain}/api/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

export {
  loginAPI,
  reloginAPI,
  getPostsAPI,
  getPostAPI,
  editPostAPI,
  deletePostAPI,
  createPostAPI,
};
