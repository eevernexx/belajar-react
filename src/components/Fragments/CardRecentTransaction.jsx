import React, { useState } from "react";
import Card from "../Elements/Card";

function CardRecentTransaction(props) {
  const { data } = props;
  const tabs = ["All", "Revenue", "Expense"];
  const [active, setActive] = useState("All");

  // Filter data berdasarkan tab yang aktif
  const filteredData = data && data.filter((transaction) => {
    if (active === "All") {
      return true;
    }
    return transaction.type === active;
  });

  const handleTabClick = (tab) => {
    setActive(tab);
  };

  return (
    <div className="sm:col-span-4 sm:row-span-2">
      <Card
        title="Recent Transactions"
        link="/transactions"
        desc={
          <>
            <div className="mb-4 border-b border-gray-05">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 pb-2 font-bold relative ${
                    active === tab
                      ? "text-primary"
                      : "text-gray-01"
                  }`}
                  value={tab}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                  {active === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
                  )}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {filteredData && filteredData.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-05 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-special-bg flex items-center justify-center rounded-lg">
                      {transaction.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-02">{transaction.transactionName}</div>
                      <div className="text-sm text-gray-03">{transaction.shopName}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-02">${transaction.amount}</div>
                    <div className="text-xs text-gray-03">{transaction.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      />
    </div>
  );
}

export default CardRecentTransaction;
