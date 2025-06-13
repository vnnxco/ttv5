import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  CreditCard, 
  ShoppingBag 
} from 'lucide-react';

export function NavMain() {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, current: true, href: '#' },
    { name: 'Analytics', icon: BarChart3, current: false, href: '#' },
    { name: 'Customers', icon: Users, current: false, href: '#' },
    { name: 'Products', icon: ShoppingBag, current: false, href: '#' },
    { name: 'Billing', icon: CreditCard, current: false, href: '#' },
    { name: 'Settings', icon: Settings, current: false, href: '#' }
  ];

  return (
    <div className="space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              item.current
                ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <Icon
              className={`mr-3 h-5 w-5 ${
                item.current 
                  ? 'text-blue-500' 
                  : 'text-gray-400 group-hover:text-gray-500'
              }`}
            />
            {item.name}
          </a>
        );
      })}
    </div>
  );
}