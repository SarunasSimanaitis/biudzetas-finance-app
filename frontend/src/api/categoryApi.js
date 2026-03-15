const API_URL = "http://localhost:5000/api/categories";

export const getCategories = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const createCategory = async (categoryData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(categoryData)
  });

  return await response.json();
};

export const deleteCategory = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  return await response.json();
};