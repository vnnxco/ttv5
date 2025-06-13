import React from 'react';
import { NavMain } from './nav-main';
import { NavSecondary } from './nav-secondary';
import { NavDocuments } from './nav-documents';
import { NavUser } from './nav-user';
import { useMobile } from '../hooks/use-mobile';

export function AppSidebar() {
  const isMobile = useMobile();
  
  if (isMobile) {
    return null; // Hide sidebar on mobile, would typically use a drawer/overlay
  }

  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="font-semibold text-gray-900">Dashboard</span>
        </div>
      </div>
      
      <nav className="px-3 space-y-1">
        <NavMain />
        <div className="pt-4">
          <NavSecondary />
        </div>
        <div className="pt-4">
          <NavDocuments />
        </div>
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <NavUser />
      </div>
    </aside>
  );
}