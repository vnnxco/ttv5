"use client"

import * as React from "react"
import { 
  PlusIcon,
  BotIcon,
  PlayIcon,
  PauseIcon,
  SettingsIcon,
  MoreVerticalIcon,
  ActivityIcon,
  ClockIcon,
  CheckCircleIcon,
  AlertCircleIcon
} from "lucide-react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const agents = [
  {
    id: 1,
    name: "Customer Support Agent",
    description: "Handles customer inquiries and support tickets with empathy and efficiency",
    status: "active",
    lastActive: "2 minutes ago",
    conversations: 24,
    successRate: 98,
    avatar: "🎧",
    bgColor: "bg-blue-500"
  },
  {
    id: 2,
    name: "Sales Assistant",
    description: "Qualifies leads and assists with product recommendations",
    status: "active",
    lastActive: "5 minutes ago",
    conversations: 18,
    successRate: 95,
    avatar: "💼",
    bgColor: "bg-green-500"
  },
  {
    id: 3,
    name: "Technical Support",
    description: "Provides technical assistance and troubleshooting guidance",
    status: "paused",
    lastActive: "1 hour ago",
    conversations: 12,
    successRate: 92,
    avatar: "🔧",
    bgColor: "bg-orange-500"
  },
  {
    id: 4,
    name: "Content Creator",
    description: "Generates creative content and assists with writing tasks",
    status: "active",
    lastActive: "Just now",
    conversations: 31,
    successRate: 97,
    avatar: "✍️",
    bgColor: "bg-purple-500"
  },
  {
    id: 5,
    name: "Data Analyst",
    description: "Analyzes data patterns and provides insights",
    status: "inactive",
    lastActive: "3 days ago",
    conversations: 8,
    successRate: 89,
    avatar: "📊",
    bgColor: "bg-indigo-500"
  },
  {
    id: 6,
    name: "Language Tutor",
    description: "Provides language learning assistance and practice",
    status: "active",
    lastActive: "10 minutes ago",
    conversations: 15,
    successRate: 94,
    avatar: "🌍",
    bgColor: "bg-teal-500"
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <CheckCircleIcon className="h-4 w-4 text-green-500" />
    case 'paused':
      return <PauseIcon className="h-4 w-4 text-yellow-500" />
    case 'inactive':
      return <AlertCircleIcon className="h-4 w-4 text-gray-500" />
    default:
      return <ActivityIcon className="h-4 w-4 text-gray-500" />
  }
}

const getStatusBadge = (status: string) => {
  const variants = {
    active: "bg-green-500/10 text-green-500 border-green-500/20",
    paused: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    inactive: "bg-gray-500/10 text-gray-500 border-gray-500/20"
  }
  
  return (
    <Badge variant="outline" className={`${variants[status as keyof typeof variants]} capitalize`}>
      {getStatusIcon(status)}
      {status}
    </Badge>
  )
}

export function Agents() {
  return (
    <div className="flex flex-col h-full w-full max-w-full overflow-hidden">
      {/* Main content area - scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0 px-4 sm:px-6 lg:px-16 xl:px-24 py-6">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-medium text-white mb-2">
                AI Agents
              </h1>
              <p className="text-gray-400">
                Manage and monitor your AI agents
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 hover:border-gray-500"
              >
                <SettingsIcon className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Create Agent
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-sidebar border-0 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <BotIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sidebar-foreground/70 text-sm">Total Agents</p>
                  <p className="text-sidebar-foreground text-xl font-semibold">6</p>
                </div>
              </div>
            </Card>
            <Card className="bg-sidebar border-0 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 p-2 rounded-lg">
                  <ActivityIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sidebar-foreground/70 text-sm">Active</p>
                  <p className="text-sidebar-foreground text-xl font-semibold">4</p>
                </div>
              </div>
            </Card>
            <Card className="bg-sidebar border-0 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500 p-2 rounded-lg">
                  <ClockIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sidebar-foreground/70 text-sm">Conversations</p>
                  <p className="text-sidebar-foreground text-xl font-semibold">108</p>
                </div>
              </div>
            </Card>
            <Card className="bg-sidebar border-0 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <CheckCircleIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sidebar-foreground/70 text-sm">Success Rate</p>
                  <p className="text-sidebar-foreground text-xl font-semibold">94%</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Card
              key={agent.id}
              className="bg-sidebar border-0 hover:bg-sidebar-accent transition-colors cursor-pointer p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`${agent.bgColor} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0`}>
                    {agent.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sidebar-foreground font-semibold mb-1">
                      {agent.name}
                    </h3>
                    {getStatusBadge(agent.status)}
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-sidebar-foreground/70 hover:text-sidebar-foreground"
                    >
                      <MoreVerticalIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Agent</DropdownMenuItem>
                    <DropdownMenuItem>View Analytics</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <p className="text-sidebar-foreground/70 text-sm mb-4 line-clamp-2">
                {agent.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-sidebar-foreground/70">Last Active</span>
                  <span className="text-sidebar-foreground">{agent.lastActive}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-sidebar-foreground/70">Conversations</span>
                  <span className="text-sidebar-foreground">{agent.conversations}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-sidebar-foreground/70">Success Rate</span>
                  <span className="text-sidebar-foreground">{agent.successRate}%</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-sidebar-border">
                {agent.status === 'active' ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
                  >
                    <PauseIcon className="h-4 w-4 mr-2" />
                    Pause
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
                  >
                    <PlayIcon className="h-4 w-4 mr-2" />
                    Start
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
                >
                  <SettingsIcon className="h-4 w-4 mr-2" />
                  Configure
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}