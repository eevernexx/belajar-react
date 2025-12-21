import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBeakdown from "../components/Fragments/CardExpenseBeakdown";
import { transactions, balances, goals, expensesStatistics } from "../data";

function dashboard() {
    console.log(transactions);

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
            </MainLayout>
        </>
    );
}

export default dashboard;