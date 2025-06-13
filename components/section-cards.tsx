import React from 'react';
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Target } from 'lucide-react';

interface Analytics {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  conversion: number;
  growth: number;
}

interface SectionCardsProps {
  data: Analytics;
}

export function SectionCards({ data }: SectionCardsProps) {
  const cards = [
    {
      title: 'Total Users',
      value: data.totalUsers.toLocaleString(),
      change: '+12.5%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-blue-500',
      description: 'Total registered users'
    },
    {
      title: 'Active Users',
      value: data.activeUsers.toLocaleString(),
      change: '+8.2%',
      changeType: 'increase',
      icon: Target,
      color: 'bg-green-500',
      description: 'Monthly active users'
    },
    {
      title: 'Revenue',
      value: `$${data.revenue.toLocaleString()}`,
      change: '+15.3%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'bg-purple-500',
      description: 'Total revenue this month'
    },
    {
      title: 'Conversion Rate',
      value: `${data.conversion}%`,
      change: '-0.5%',
      changeType: 'decrease',
      icon: ShoppingCart,
      color: 'bg-orange-500',
      description: 'Average conversion rate'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const isIncrease = card.changeType === 'increase';
        const TrendIcon = isIncrease ? TrendingUp : TrendingDown;
        
        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {card.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-1">
                  {card.value}
                </p>
                <div className="flex items-center">
                  <TrendIcon className={`w-4 h-4 mr-1 ${
                    isIncrease ? 'text-green-500' : 'text-red-500'
                  }`} />
                  <span className={`text-sm font-medium ${
                    isIncrease ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {card.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    vs last month
                  </span>
                </div>
              </div>
              <div className={`${card.color} rounded-lg p-3`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 border-t pt-3">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}