import React from 'react';

function CardExpenseItem({ name, date, amount }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
      <div>
        <div className="text-sm font-bold text-gray-700">{name}</div>
      </div>
      <div className="text-right">
        <div className="text-base font-semibold text-gray-900">${amount}</div>
        <div className="text-xs text-gray-400">{date}</div>
      </div>
    </div>
  );
}

export default CardExpenseItem;
