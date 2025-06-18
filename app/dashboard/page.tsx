"use client"

import { useState } from 'react'
import { AppSidebar } from '@/components/app-sidebar'
import { AiChat } from '@/components/ai-chat'
import { Homepage } from '@/components/homepage'
import { Agents } from '@/components/agents'
import { KnowledgeBase } from '@/components/knowledge-base'
import { Analytics } from '@/components/analytics'
import { Integrations } from '@/components/integrations'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function Page() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'chat' | 'agents' | 'knowledge-base' | 'analytics' | 'integrations'>('dashboard')

  const handleNavigateToChat = () => {
    setCurrentView('chat')
  }

  const handleNavigateToDashboard = () => {
    setCurrentView('dashboard')
  }

  const handleNavigateToAgents = () => {
    setCurrentView('agents')
  }

  const handleNavigateToKnowledgeBase = () => {
    setCurrentView('knowledge-base')
  }

  const handleNavigateToAnalytics = () => {
    setCurrentView('analytics')
  }

  const handleNavigateToIntegrations = () => {
    setCurrentView('integrations')
  }

  return (
    <SidebarProvider>
      <AppSidebar 
        variant="inset" 
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
        onNavigateToChat={handleNavigateToChat}
      />
      <SidebarInset className="flex flex-col h-screen overflow-hidden">
        <div className="sticky top-0 z-50 bg-background rounded-t-xl overflow-hidden flex-shrink-0">
          <SiteHeader currentView={currentView} />
        </div>
        <div className="flex-1 min-h-0 overflow-hidden">
          {currentView === 'dashboard' ? (
            <Homepage onNavigateToChat={handleNavigateToChat} />
          ) : currentView === 'chat' ? (
            <AiChat />
          ) : currentView === 'agents' ? (
            <Agents />
          ) : currentView === 'knowledge-base' ? (
            <KnowledgeBase />
          ) : currentView === 'analytics' ? (
            <Analytics />
          ) : currentView === 'integrations' ? (
            <Integrations />
          ) : (
            <Homepage onNavigateToChat={handleNavigateToChat} />
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}