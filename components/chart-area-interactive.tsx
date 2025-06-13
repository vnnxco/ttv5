import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Activity } from 'lucide-react';

interface ChartData {
  month?: string;
  time?: string;
  users?: number;
  revenue?: number;
  conversion?: number;
  active?: number;
}

interface ChartAreaInteractiveProps {
  data: ChartData[];
  title: string;
  type?: 'revenue' | 'activity';
}

export function ChartAreaInteractive({ data, title, type = 'revenue' }: ChartAreaInteractiveProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const maxValue = Math.max(...data.map(d => type === 'activity' ? d.active || 0 : d.revenue || 0));
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center space-x-2">
          {type === 'activity' ? (
            <Activity className="w-5 h-5 text-blue-600" />
          ) : (
            <BarChart3 className="w-5 h-5 text-blue-600" />
          )}
        </div>
      </div>
      
      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between space-x-1">
          {data.map((item, index) => {
            const value = type === 'activity' ? item.active || 0 : item.revenue || 0;
            const height = (value / maxValue) * 100;
            const label = type === 'activity' ? item.time : item.month;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-full rounded-t-md transition-all duration-300 cursor-pointer ${
                    activeIndex === index
                      ? 'bg-blue-600'
                      : 'bg-blue-100 hover:bg-blue-200'
                  }`}
                  style={{ height: `${height}%` }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {activeIndex === index && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                      {type === 'activity' 
                        ? `${value.toLocaleString()} active users`
                        : `$${value.toLocaleString()}`
                      }
                    </div>
                  )}
                </div>
                <div className="mt-2 text-xs text-gray-500 text-center">
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {type === 'activity' 
              ? data.reduce((sum, item) => sum + (item.active || 0), 0).toLocaleString()
              : `$${data.reduce((sum, item) => sum + (item.revenue || 0), 0).toLocaleString()}`
            }
          </div>
          <div className="text-sm text-gray-500">
            {type === 'activity' ? 'Total Active' : 'Total Revenue'}
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">
            <TrendingUp className="w-5 h-5 inline mr-1" />
            +12.5%
          </div>
          <div className="text-sm text-gray-500">Growth</div>
        </div>
      </div>
    </div>
  );
}