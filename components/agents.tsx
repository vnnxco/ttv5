"use client"

import * as React from "react"
import { 
  SearchIcon,
  XIcon,
  ExternalLinkIcon
} from "lucide-react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

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
  { name: "AI", count: 3 },
  { name: "Starter", count: 1 },
  { name: "Ecommerce", count: 1 },
  { name: "SaaS", count: 1 },
  { name: "Blog", count: 0 },
  { name: "Portfolio", count: 0 }
]

export function Agents() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])

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
    <div className="flex flex-col h-full w-full max-w-full overflow-hidden">
      {/* Main content area - scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0 px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sidebar-foreground mb-4 leading-tight">
            AI Agent templates
            <br />
            and themes
          </h1>
          <p className="text-base sm:text-lg text-sidebar-foreground/70 max-w-2xl mx-auto">
            Discover AI agent templates, starters, and themes to jumpstart your automation or chatbot build.
          </p>
        </div>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Main Content - Templates Grid */}
            <div className="flex-1 order-2 xl:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => (
                  <Card
                    key={template.id}
                    className="group bg-sidebar-accent border-sidebar-border hover:border-sidebar-foreground/30 transition-all duration-200 cursor-pointer overflow-hidden"
                  >
                    {/* Template Preview */}
                    <div className={`${template.bgColor} ${template.textColor} aspect-video flex items-center justify-center text-4xl relative`}>
                      <div className="text-5xl sm:text-6xl">{template.image}</div>
                      <div className="absolute top-3 left-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">A</span>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7 sm:h-8 sm:w-8 bg-black/20 hover:bg-black/40 text-white"
                        >
                          <ExternalLinkIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Template Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-sidebar-foreground mb-2 group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                        {template.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-sidebar-foreground/70 mb-3 line-clamp-2">
                        {template.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-sidebar-foreground/60">
                          <span>by</span>
                          <span className="flex items-center gap-1">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full"></div>
                            <span className="hidden sm:inline">{template.author}</span>
                            <span className="sm:hidden">Acme</span>
                          </span>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-5 w-5 sm:h-6 sm:w-6 opacity-0 group-hover:opacity-100 transition-opacity text-sidebar-foreground/60 hover:text-sidebar-foreground"
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
                  <p className="text-sidebar-foreground/70 mb-4">No templates found matching your criteria.</p>
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent/80"
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>

            {/* Right Sidebar - Filters */}
            <div className="w-full xl:w-80 flex-shrink-0 order-1 xl:order-2">
              <div className="bg-sidebar-accent rounded-lg border border-sidebar-border p-6 sticky top-4">
                {/* Filter Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-sidebar-foreground">Filter Templates</h3>
                  {(selectedCategories.length > 0 || searchTerm) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-sidebar-foreground/70 hover:text-sidebar-foreground h-8 px-2"
                    >
                      <XIcon className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>

                {/* Search */}
                <div className="relative mb-6">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sidebar-foreground/50" />
                  <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-sidebar border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Use Case Categories */}
                <div>
                  <h4 className="text-sm font-medium text-sidebar-foreground mb-4">Use Case</h4>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <label
                        key={category.name}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.name)}
                          onChange={() => toggleCategory(category.name)}
                          className="w-4 h-4 rounded border-sidebar-border bg-sidebar text-blue-500 focus:ring-blue-500 focus:ring-2 focus:ring-offset-0"
                        />
                        <span className="text-sm text-sidebar-foreground group-hover:text-sidebar-foreground/80 flex-1">
                          {category.name}
                        </span>
                        <span className="text-xs text-sidebar-foreground/50">
                          {category.count}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Active Filters */}
                {selectedCategories.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-sidebar-border">
                    <h4 className="text-sm font-medium text-sidebar-foreground mb-3">Active Filters</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategories.map((category) => (
                        <Button
                          key={category}
                          variant="outline"
                          size="sm"
                          onClick={() => toggleCategory(category)}
                          className="h-7 px-2 text-xs bg-sidebar border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
                        >
                          {category}
                          <XIcon className="h-3 w-3 ml-1" />
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}