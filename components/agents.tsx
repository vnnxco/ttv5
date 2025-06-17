"use client"

import * as React from "react"
import { 
  PlusIcon,
  SearchIcon,
  FilterIcon,
  XIcon,
  ExternalLinkIcon
} from "lucide-react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const templates = [
  {
    id: 1,
    title: "Customer Support Agent",
    description: "Get started with customer support automation in seconds.",
    author: "Acme Inc",
    category: "AI",
    image: "🎧",
    bgColor: "bg-white",
    textColor: "text-black"
  },
  {
    id: 2,
    title: "Sales Assistant Bot",
    description: "A sales assistant built for lead qualification and conversion.",
    author: "Acme Inc", 
    category: "AI",
    image: "💼",
    bgColor: "bg-gray-900",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Technical Support AI",
    description: "A full-featured, technical support AI agent built by Acme Inc!",
    author: "Acme Inc",
    category: "AI", 
    image: "🔧",
    bgColor: "bg-blue-500",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "Content Creator Agent",
    description: "Make beautiful websites with Content AI and creative automation.",
    author: "Acme Inc",
    category: "Starter",
    image: "✍️",
    bgColor: "bg-white",
    textColor: "text-black"
  },
  {
    id: 5,
    title: "Data Analytics Bot",
    description: "An analytics dashboard built on data insights and Cloudinary.",
    author: "Acme Inc",
    category: "Ecommerce",
    image: "📊",
    bgColor: "bg-gray-900",
    textColor: "text-white"
  },
  {
    id: 6,
    title: "Language Learning Tutor",
    description: "A language learning platform built by Acme Inc",
    author: "Acme Inc",
    category: "SaaS",
    image: "🌍",
    bgColor: "bg-white",
    textColor: "text-black"
  }
]

const categories = [
  { name: "AI", count: 2 },
  { name: "Starter", count: 1 },
  { name: "Ecommerce", count: 1 },
  { name: "SaaS", count: 1 },
  { name: "Blog", count: 0 },
  { name: "Portfolio", count: 0 }
]

export function Agents() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
  const [showFilters, setShowFilters] = React.useState(false)

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSearchTerm("")
  }

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(template.category)
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex flex-col h-full w-full max-w-full overflow-hidden bg-sidebar">
      {/* Main content area - scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0 px-4 sm:px-6 lg:px-16 xl:px-24 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-sidebar-foreground mb-4">
            AI Agent templates
            <br />
            and themes
          </h1>
          <p className="text-lg text-sidebar-foreground/70 max-w-2xl mx-auto">
            Discover AI agent templates, starters, and themes to jumpstart your automation or chatbot build.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar - Filters */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="space-y-6">
                {/* Filter Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-sidebar-foreground">Filter Templates</h3>
                  {(selectedCategories.length > 0 || searchTerm) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-sidebar-foreground/70 hover:text-sidebar-foreground"
                    >
                      <XIcon className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>

                {/* Search */}
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sidebar-foreground/50" />
                  <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/50"
                  />
                </div>

                {/* Use Case Categories */}
                <div>
                  <h4 className="text-sm font-medium text-sidebar-foreground mb-3">Use Case</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category.name}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.name)}
                          onChange={() => toggleCategory(category.name)}
                          className="w-4 h-4 rounded border-sidebar-border bg-sidebar-accent text-blue-500 focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-sm text-sidebar-foreground group-hover:text-sidebar-foreground/80">
                          {category.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Templates Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => (
                  <Card
                    key={template.id}
                    className="group bg-sidebar-accent border-sidebar-border hover:border-sidebar-foreground/20 transition-all duration-200 cursor-pointer overflow-hidden"
                  >
                    {/* Template Preview */}
                    <div className={`${template.bgColor} ${template.textColor} aspect-video flex items-center justify-center text-4xl relative`}>
                      <div className="text-6xl">{template.image}</div>
                      <div className="absolute top-3 left-3">
                        <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">A</span>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 bg-black/20 hover:bg-black/40 text-white"
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Template Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-sidebar-foreground mb-2 group-hover:text-blue-400 transition-colors">
                        {template.title}
                      </h3>
                      <p className="text-sm text-sidebar-foreground/70 mb-3 line-clamp-2">
                        {template.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-sidebar-foreground/60">
                          <span>by</span>
                          <span className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full"></div>
                            {template.author}
                          </span>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity text-sidebar-foreground/60 hover:text-sidebar-foreground"
                        >
                          <ExternalLinkIcon className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredTemplates.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-sidebar-foreground/70">No templates found matching your criteria.</p>
                  <Button
                    variant="ghost"
                    onClick={clearFilters}
                    className="mt-2 text-sidebar-foreground/70 hover:text-sidebar-foreground"
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}