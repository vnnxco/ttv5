import React from 'react';
import { Plus, Bookmark, Clock, Star, Trash2 } from 'lucide-react';

export function NavSecondary() {
  const secondaryItems = [
    { name: 'Favorites', icon: Star, count: 12 },
    { name: 'Recent', icon: Clock, count: 8 },
    { name: 'Bookmarks', icon: Bookmark, count: 3 },
    { name: 'Trash', icon: Trash2, count: 5 }
  ];

  return (
    <div className="space-y-1">
      <div className="px-3 py-2">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Quick Access
        </h3>
      </div>
      {secondaryItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href="#"
            className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
          >
            <Icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
            <span className="flex-1">{item.name}</span>
            {item.count > 0 && (
              <span className="ml-3 inline-block py-0.5 px-2 text-xs bg-gray-200 rounded-full text-gray-800 group-hover:bg-gray-300">
                {item.count}
              </span>
            )}
          </a>
        );
      })}
      
      <div className="px-3 py-2 border-t border-gray-200 mt-4">
        <button className="w-full inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Plus className="w-4 h-4 mr-2" />
          Create New
        </button>
      </div>
    </div>
  );
}