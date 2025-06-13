import { AppSidebar } from '@/components/app-sidebar'
import { AiChat } from '@/components/ai-chat'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset className="overflow-hidden">
        <SiteHeader />
        <div className="flex flex-1 flex-col min-h-0 overflow-hidden">
          <div className="flex flex-1 flex-col gap-4 md:gap-6 overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 w-full min-w-0">
              <AiChat />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}