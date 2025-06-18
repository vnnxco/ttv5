"use client"

import * as React from "react"
import { 
  SearchIcon,
  BookOpenIcon,
  FileTextIcon,
  FolderIcon,
  PlusIcon,
  TagIcon,
  ClockIcon,
  UserIcon,
  MoreVerticalIcon,
  StarIcon,
  DownloadIcon,
  ShareIcon
} from "lucide-react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const knowledgeItems = [
  {
    id: 1,
    title: "AI Agent Development Guide",
    type: "Document",
    category: "Development",
    description: "Comprehensive guide for building and deploying AI agents with best practices and examples.",
    author: "Technical Team",
    lastModified: "2 hours ago",
    tags: ["AI", "Development", "Guide"],
    icon: FileTextIcon,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Customer Support Workflows",
    type: "Folder",
    category: "Support",
    description: "Collection of support workflows, templates, and escalation procedures.",
    author: "Support Team",
    lastModified: "1 day ago",
    tags: ["Support", "Workflows", "Templates"],
    icon: FolderIcon,
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "API Integration Handbook",
    type: "Document",
    category: "Technical",
    description: "Step-by-step instructions for integrating with third-party APIs and services.",
    author: "Engineering",
    lastModified: "3 days ago",
    tags: ["API", "Integration", "Technical"],
    icon: BookOpenIcon,
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Training Data Guidelines",
    type: "Document",
    category: "AI/ML",
    description: "Best practices for collecting, cleaning, and preparing training data for AI models.",
    author: "Data Science",
    lastModified: "5 days ago",
    tags: ["Training", "Data", "ML"],
    icon: FileTextIcon,
    color: "bg-orange-500"
  },
  {
    id: 5,
    title: "Security Protocols",
    type: "Folder",
    category: "Security",
    description: "Security guidelines, protocols, and compliance documentation.",
    author: "Security Team",
    lastModified: "1 week ago",
    tags: ["Security", "Compliance", "Protocols"],
    icon: FolderIcon,
    color: "bg-red-500"
  },
  {
    id: 6,
    title: "User Experience Research",
    type: "Document",
    category: "UX",
    description: "User research findings, personas, and design recommendations.",
    author: "UX Team",
    lastModified: "1 week ago",
    tags: ["UX", "Research", "Design"],
    icon: BookOpenIcon,
    color: "bg-pink-500"
  }
]

const categories = [
  "All Categories",
  "Development", 
  "Support",
  "Technical",
  "AI/ML",
  "Security",
  "UX"
]

export function KnowledgeBase() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All Categories")

  const filteredItems = knowledgeItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All Categories" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex flex-col h-full w-full max-w-full overflow-hidden bg-background">
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-medium text-white mb-2">
                    Knowledge Base
                  </h1>
                  <p className="text-gray-400">
                    Access documentation, guides, and resources
                  </p>
                </div>
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Add Document
                </Button>
              </div>

              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sidebar-foreground/40" />
                  <Input
                    placeholder="Search knowledge base..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/40 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap flex-shrink-0 ${
                      selectedCategory === category
                        ? "bg-sidebar-foreground text-sidebar hover:bg-sidebar-foreground/90"
                        : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Knowledge Items Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="group bg-sidebar-accent border-sidebar-border hover:border-sidebar-foreground/20 transition-all duration-200 cursor-pointer p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`${item.color} p-2 rounded-lg flex-shrink-0`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sidebar-foreground font-semibold mb-1 line-clamp-1">
                          {item.title}
                        </h3>
                        <Badge variant="outline" className="text-xs bg-sidebar-foreground/10 text-sidebar-foreground/70 border-sidebar-foreground/20">
                          {item.type}
                        </Badge>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-sidebar-foreground/70 hover:text-sidebar-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <StarIcon className="h-4 w-4 mr-2" />
                          Favorite
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ShareIcon className="h-4 w-4 mr-2" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <DownloadIcon className="h-4 w-4 mr-2" />
                          Download
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <p className="text-sidebar-foreground/70 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs bg-sidebar-foreground/5 text-sidebar-foreground/60 border-sidebar-foreground/10"
                      >
                        <TagIcon className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-sidebar-foreground/60 pt-4 border-t border-sidebar-border">
                    <div className="flex items-center gap-1">
                      <UserIcon className="h-3 w-3" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-3 w-3" />
                      <span>{item.lastModified}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <BookOpenIcon className="h-12 w-12 text-sidebar-foreground/40 mx-auto mb-4" />
                <p className="text-sidebar-foreground/70 mb-4">No documents found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All Categories")
                  }}
                  className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent/80"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}