const API_URL = "http://localhost:5000/api/expenses";

export const getExpenses = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const createExpense = async (expenseData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(expenseData)
  });

  return await response.json();
};

export const deleteExpense = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  return await response.json();
};

export const getExpenseStats = async () => {
  const response = await fetch(`${API_URL}/stats`);
  return await response.json();
};