import React, { useState } from 'react';
import { User, Settings, LogOut, Bell, HelpCircle, ChevronUp } from 'lucide-react';

export function NavUser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <div className="flex items-center flex-1">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="ml-3 text-left">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
        <ChevronUp className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <User className="w-4 h-4 mr-3" />
            Profile
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Settings className="w-4 h-4 mr-3" />
            Settings
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Bell className="w-4 h-4 mr-3" />
            Notifications
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <HelpCircle className="w-4 h-4 mr-3" />
            Help
          </a>
          <div className="border-t border-gray-200 my-1"></div>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Sign out
          </a>
        </div>
      )}
    </div>
  );
}