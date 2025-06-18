"use client"

import * as React from "react"
import { 
  TrendingUpIcon,
  TrendingDownIcon,
  UsersIcon,
  MessageSquareIcon,
  ClockIcon,
  BarChartIcon,
  PieChartIcon,
  ActivityIcon,
  CalendarIcon,
  FilterIcon
} from "lucide-react"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const analyticsData = {
  overview: [
    {
      title: "Total Conversations",
      value: "12,847",
      change: "+12.5%",
      trend: "up",
      icon: MessageSquareIcon,
      color: "bg-blue-500"
    },
    {
      title: "Active Users",
      value: "3,421",
      change: "+8.2%",
      trend: "up",
      icon: UsersIcon,
      color: "bg-green-500"
    },
    {
      title: "Avg Response Time",
      value: "1.2s",
      change: "-15.3%",
      trend: "down",
      icon: ClockIcon,
      color: "bg-purple-500"
    },
    {
      title: "Success Rate",
      value: "94.7%",
      change: "+2.1%",
      trend: "up",
      icon: ActivityIcon,
      color: "bg-orange-500"
    }
  ],
  topAgents: [
    { name: "Customer Support Agent", conversations: 3247, successRate: 96.2, avgRating: 4.8 },
    { name: "Sales Assistant Bot", conversations: 2891, successRate: 94.1, avgRating: 4.6 },
    { name: "Technical Support AI", conversations: 2156, successRate: 92.8, avgRating: 4.5 },
    { name: "Content Creator Agent", conversations: 1834, successRate: 89.3, avgRating: 4.3 },
    { name: "Data Analytics Bot", conversations: 1567, successRate: 91.7, avgRating: 4.4 }
  ],
  recentActivity: [
    { time: "2 minutes ago", event: "New conversation started", agent: "Customer Support Agent", type: "conversation" },
    { time: "5 minutes ago", event: "Agent training completed", agent: "Sales Assistant Bot", type: "training" },
    { time: "12 minutes ago", event: "Performance threshold exceeded", agent: "Technical Support AI", type: "alert" },
    { time: "18 minutes ago", event: "Integration deployed", agent: "Data Analytics Bot", type: "deployment" },
    { time: "25 minutes ago", event: "Feedback received", agent: "Content Creator Agent", type: "feedback" }
  ]
}

export function Analytics() {
  const [timeRange, setTimeRange] = React.useState("7d")

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'conversation':
        return <MessageSquareIcon className="h-4 w-4 text-blue-500" />
      case 'training':
        return <BarChartIcon className="h-4 w-4 text-green-500" />
      case 'alert':
        return <ActivityIcon className="h-4 w-4 text-orange-500" />
      case 'deployment':
        return <PieChartIcon className="h-4 w-4 text-purple-500" />
      case 'feedback':
        return <UsersIcon className="h-4 w-4 text-pink-500" />
      default:
        return <ActivityIcon className="h-4 w-4 text-gray-500" />
    }
  }

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
                    Analytics
                  </h1>
                  <p className="text-gray-400">
                    Monitor performance and insights across your AI agents
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-32 bg-sidebar-accent border-sidebar-border text-sidebar-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24h">Last 24h</SelectItem>
                      <SelectItem value="7d">Last 7 days</SelectItem>
                      <SelectItem value="30d">Last 30 days</SelectItem>
                      <SelectItem value="90d">Last 90 days</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent/80"
                  >
                    <FilterIcon className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {analyticsData.overview.map((metric, index) => (
                <Card key={index} className="bg-sidebar-accent border-sidebar-border">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-sidebar-foreground/70">
                      {metric.title}
                    </CardTitle>
                    <div className={`${metric.color} p-2 rounded-lg`}>
                      <metric.icon className="h-4 w-4 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-sidebar-foreground mb-1">
                      {metric.value}
                    </div>
                    <div className="flex items-center text-xs">
                      {metric.trend === 'up' ? (
                        <TrendingUpIcon className="h-3 w-3 text-green-500 mr-1" />
                      ) : (
                        <TrendingDownIcon className="h-3 w-3 text-red-500 mr-1" />
                      )}
                      <span className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                        {metric.change}
                      </span>
                      <span className="text-sidebar-foreground/60 ml-1">from last period</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Performing Agents */}
              <Card className="bg-sidebar-accent border-sidebar-border">
                <CardHeader>
                  <CardTitle className="text-sidebar-foreground">Top Performing Agents</CardTitle>
                  <CardDescription className="text-sidebar-foreground/70">
                    Agents ranked by conversation volume and success rate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analyticsData.topAgents.map((agent, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-sidebar border border-sidebar-border">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-medium text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sidebar-foreground font-medium text-sm">{agent.name}</p>
                            <p className="text-sidebar-foreground/60 text-xs">
                              {agent.conversations.toLocaleString()} conversations
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs bg-green-500/10 text-green-500 border-green-500/20">
                              {agent.successRate}%
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-sidebar-foreground/60">
                            <span>★</span>
                            <span>{agent.avgRating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="bg-sidebar-accent border-sidebar-border">
                <CardHeader>
                  <CardTitle className="text-sidebar-foreground">Recent Activity</CardTitle>
                  <CardDescription className="text-sidebar-foreground/70">
                    Latest events and updates across your agents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analyticsData.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-sidebar border border-sidebar-border">
                        <div className="flex-shrink-0 mt-0.5">
                          {getEventIcon(activity.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sidebar-foreground text-sm font-medium">
                            {activity.event}
                          </p>
                          <p className="text-sidebar-foreground/60 text-xs">
                            {activity.agent}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-sidebar-foreground/60 flex-shrink-0">
                          <ClockIcon className="h-3 w-3" />
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 bg-transparent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent/80"
                  >
                    View All Activity
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Chart Placeholder */}
            <Card className="bg-sidebar-accent border-sidebar-border mt-8">
              <CardHeader>
                <CardTitle className="text-sidebar-foreground">Performance Trends</CardTitle>
                <CardDescription className="text-sidebar-foreground/70">
                  Conversation volume and success rates over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-sidebar-border rounded-lg">
                  <div className="text-center">
                    <BarChartIcon className="h-12 w-12 text-sidebar-foreground/40 mx-auto mb-4" />
                    <p className="text-sidebar-foreground/70">Chart visualization would go here</p>
                    <p className="text-sidebar-foreground/50 text-sm">Integration with charting library needed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}