import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app";

export const goalService = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/goals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data[0];
  } catch (error) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};

export const expenseService = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/expenses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Full response:", response.data);

    // Handle different response structures
    const expensesData = response.data.data || response.data;

    // Transform API data to match component structure
    const transformedData = expensesData.map(expense => ({
      category: expense.category.charAt(0).toUpperCase() + expense.category.slice(1),
      total_amount: expense.amount,
      percentage_change: expense.trend === 'up' ? expense.percentage : -expense.percentage,
      items: expense.detail.map(detail => ({
        name: detail.item,
        date: detail.date,
        amount: detail.amount
      }))
    }));

    return transformedData;
  } catch (error) {
    console.error("Full error object:", error);
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);

    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg || error.message || "Network error",
    };
  }
};
