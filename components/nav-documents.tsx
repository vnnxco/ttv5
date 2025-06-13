import React from 'react';
import { FileText, File, Download, Share2, Archive } from 'lucide-react';

export function NavDocuments() {
  const documents = [
    { name: 'Reports', icon: FileText, count: 23, color: 'text-blue-600' },
    { name: 'Invoices', icon: File, count: 156, color: 'text-green-600' },
    { name: 'Contracts', icon: FileText, count: 8, color: 'text-purple-600' },
    { name: 'Archives', icon: Archive, count: 45, color: 'text-gray-600' }
  ];

  return (
    <div className="space-y-1">
      <div className="px-3 py-2">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Documents
        </h3>
      </div>
      {documents.map((doc) => {
        const Icon = doc.icon;
        return (
          <a
            key={doc.name}
            href="#"
            className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900"
          >
            <Icon className={`mr-3 h-5 w-5 ${doc.color} group-hover:text-gray-900`} />
            <span className="flex-1">{doc.name}</span>
            <span className="ml-3 inline-block py-0.5 px-2 text-xs bg-gray-200 rounded-full text-gray-800 group-hover:bg-gray-300">
              {doc.count}
            </span>
          </a>
        );
      })}
      
      <div className="px-3 py-2 border-t border-gray-200 mt-4">
        <div className="flex items-center space-x-2">
          <button className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Download className="w-4 h-4 mr-2" />
            Download
          </button>
          <button className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}