import React from 'react';
import CardExpenseItem from '../Elements/CardExpenseItem';
import CircularProgress from '@mui/material/CircularProgress';
import Icon from '../Elements/Icon';

const categoryIcons = {
  'Housing': <Icon.House />,
  'Food': <Icon.Food />,
  'Transportation': <Icon.Transport />,
  'Entertainment': <Icon.Gamepad />,
  'Shopping': <Icon.Shopping />,
  'Others': <Icon.Other />
};

const getCategoryIcon = (category) => {
  return categoryIcons[category] || <Icon.Other />;
};

function CardExpenseComparison({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-64 text-primary">
        <CircularProgress color="inherit" size={50} />
        <div className="mt-4">Loading Data</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((category, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
          {/* Header dengan icon, kategori, dan persentase */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-gray-400 text-4xl">
                {getCategoryIcon(category.category)}
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">{category.category}</div>
                <div className="text-2xl font-bold text-gray-900">${category.total_amount}</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className={`text-sm font-semibold ${
                category.percentage_change >= 0 ? 'text-red-500' : 'text-green-500'
              }`}>
                {category.percentage_change}%
              </span>
              <span className={`text-sm ${
                category.percentage_change >= 0 ? 'text-red-500' : 'text-green-500'
              }`}>
                {category.percentage_change >= 0 ? '↑' : '↓'}
              </span>
            </div>
          </div>

          <div className="text-xs text-gray-400 mb-4">Compare to the last month</div>

          {/* List items */}
          <div className="space-y-0 border-t border-gray-100 pt-2">
            {category.items.map((item, itemIndex) => (
              <CardExpenseItem
                key={itemIndex}
                name={item.name}
                date={item.date}
                amount={item.amount}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardExpenseComparison;
