import React, { useState, useEffect, useContext } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBeakdown from "../components/Fragments/CardExpenseBeakdown";
import { transactions, balances, expensesStatistics } from "../data";
import { goalService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function dashboard() {
    const [goals, setGoals] = useState({});
    const { logout } = useContext(AuthContext);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const fetchGoals = async () => {
        try {
            const data = await goalService();
            setGoals(data);
        } catch (err) {
            console.error("Gagal mengambil data goals:", err);
            setSnackbar({ open: true, message: err.msg || "Gagal mengambil data goals", severity: "error" });
            if (err.status === 401) {
                logout();
            }
        }
    };

    useEffect(() => {
        fetchGoals();
    }, []);

    return (
        <>
            <MainLayout>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                    <CardBalance data={balances} />
                    <CardGoal data={goals} />
                    <CardUpcomingBill />
                    <CardRecentTransaction data={transactions} />
                    <CardStatistic data={expensesStatistics} />
                    <CardExpenseBeakdown />
                </div>
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

export default dashboard;