import React from "react";
import Card from "../Elements/Card";
import { expensesBreakdowns } from "../../data";

export default function CardExpenseBeakdown() {
  return (
    <div className="sm:col-span-8">
      <Card
        title="Expenses Breakdown"
        desc={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expensesBreakdowns.map((expense) => (
              <div key={expense.id} className="flex items-center justify-between bg-special-bg p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    {expense.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-03">{expense.category}</div>
                    <div className="font-bold text-gray-02">${expense.amount}</div>
                    <div className="text-xs font-semibold flex items-center gap-1">
                      <span className={expense.trend === 'down' ? 'text-green-500' : 'text-red-500'}>
                        {expense.percentage}%
                      </span>
                      <span className={expense.trend === 'down' ? 'text-green-500' : 'text-red-500'}>
                        {expense.arrow}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-gray-03">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
}
