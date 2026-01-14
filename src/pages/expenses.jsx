import React, { useState, useEffect, useContext } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpenseComparison from "../components/Fragments/CardExpenseComparison";
import { expenseService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const { logout } = useContext(AuthContext);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchExpenses = async () => {
    try {
      const data = await expenseService();
      setExpenses(data);
    } catch (err) {
      console.error("Gagal mengambil data expenses:", err);

      // Temporary: gunakan dummy data jika API error
      const dummyData = [
        {
          category: "Housing",
          total_amount: 250,
          percentage_change: 15,
          items: [
            { name: "House Rent", date: "17 May 2023", amount: 230 },
            { name: "Parking", date: "17 May 2023", amount: 20 }
          ]
        },
        {
          category: "Food",
          total_amount: 350,
          percentage_change: -8,
          items: [
            { name: "Grocery", date: "17 May 2023", amount: 230 },
            { name: "Restaurant Bill", date: "17 May 2023", amount: 120 }
          ]
        },
        {
          category: "Transportation",
          total_amount: 50,
          percentage_change: -12,
          items: [
            { name: "Taxi Fare", date: "17 May 2023", amount: 30 },
            { name: "Metro Card Bill", date: "17 May 2023", amount: 20 }
          ]
        },
        {
          category: "Entertainment",
          total_amount: 80,
          percentage_change: -15,
          items: [
            { name: "Movie Ticket", date: "17 May 2023", amount: 30 },
            { name: "iTunes", date: "17 May 2023", amount: 50 }
          ]
        },
        {
          category: "Shopping",
          total_amount: 420,
          percentage_change: 25,
          items: [
            { name: "Shirt", date: "17 May 2023", amount: 230 },
            { name: "Jeans", date: "17 May 2023", amount: 190 }
          ]
        },
        {
          category: "Others",
          total_amount: 50,
          percentage_change: 23,
          items: [
            { name: "Donation", date: "17 May 2023", amount: 30 },
            { name: "Gift", date: "17 May 2023", amount: 20 }
          ]
        }
      ];

      setExpenses(dummyData);

      setSnackbar({
        open: true,
        message: err.msg || "Gagal mengambil data expenses",
        severity: "error"
      });

      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-02">Expenses Comparison</h1>
        </div>
        <CardExpenseComparison data={expenses} />
        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  );
}

export default Expenses;
