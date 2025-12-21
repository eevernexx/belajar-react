import React from "react";
import Card from "../Elements/Card";
import { bills } from "../../data";

export default function CardUpcomingBill() {
  return (
    <div className="sm:col-span-4">
      <Card
        title="Upcoming Bill"
        link={true}
        desc={
          <div className="flex flex-col justify-around h-full">
            {bills.map((item) => (
              <div key={item.id} className="flex justify-between pt-3 pb-3">
                <div className="flex">
                  <div className="bg-special-bg p-4 rounded-lg flex flex-col">
                    <span className="text-xs">{item.month}</span>
                    <span className="text-2xl font-bold">{item.date}</span>
                  </div>
                  <div className="ms-4">
                    <div className="mb-1">{item.icon}</div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-xs">Last Charge - {item.lastCharge}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="py-2 px-4 border border-gray-05 rounded-lg font-bold">
                    ${item.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
}
