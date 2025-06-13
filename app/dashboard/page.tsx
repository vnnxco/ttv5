import React from 'react';
import { SiteHeader } from '../../components/site-header';
import { AppSidebar } from '../../components/app-sidebar';
import { SectionCards } from '../../components/section-cards';
import { ChartAreaInteractive } from '../../components/chart-area-interactive';
import { DataTable } from '../../components/data-table';
import dashboardData from './data.json';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
            
            <SectionCards data={dashboardData.analytics} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartAreaInteractive 
                data={dashboardData.chartData}
                title="Revenue & User Growth"
              />
              <ChartAreaInteractive 
                data={dashboardData.userActivity}
                title="User Activity (24h)"
                type="activity"
              />
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <DataTable 
                  title="Recent Transactions"
                  data={dashboardData.recentTransactions}
                />
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Top Products
                  </h3>
                  <div className="space-y-3">
                    {dashboardData.topProducts.map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.sales} sales</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            ${product.revenue.toLocaleString()}
                          </p>
                          <p className={`text-sm ${product.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            +{product.growth}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {dashboardData.notifications.map((notification) => (
                      <div key={notification.id} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === 'user' ? 'bg-blue-500' :
                          notification.type === 'payment' ? 'bg-green-500' :
                          'bg-yellow-500'
                        }`} />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm">
                            {notification.title}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {notification.message}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}