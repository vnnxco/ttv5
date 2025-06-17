"use client"

import * as React from "react"
import { 
  PlusIcon,
  MicIcon,
  BookOpenIcon,
  MessageSquareIcon,
  RadioIcon,
  VolumeXIcon,
  VideoIcon,
  SparklesIcon,
  CopyIcon,
  LibraryIcon,
  SettingsIcon
} from "lucide-react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const projectTypes = [
  { 
    icon: MicIcon, 
    title: "Instant speech", 
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  { 
    icon: BookOpenIcon, 
    title: "Audiobook", 
    color: "text-red-400",
    bgColor: "bg-red-500/10"
  },
  { 
    icon: MessageSquareIcon, 
    title: "Conversational AI", 
    color: "text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  { 
    icon: RadioIcon, 
    title: "Podcast", 
    color: "text-orange-400",
    bgColor: "bg-orange-500/10"
  },
  { 
    icon: VolumeXIcon, 
    title: "Sound effect", 
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  { 
    icon: VideoIcon, 
    title: "Dubbed video", 
    color: "text-green-400",
    bgColor: "bg-green-500/10"
  }
]

const libraryItems = [
  {
    id: 1,
    name: "Ate Namie",
    title: "Tagalog and Filipino Narrator",
    description: "Namie Voice is a captivating narrator, blending warmth and...",
    avatar: "🥥",
    bgColor: "bg-orange-500"
  },
  {
    id: 2,
    name: "Dok Jim",
    title: "The Good Doctor Storyteller",
    description: "Dok Jim's voice exudes warmth, empathy, and wisdom, perfect for...",
    avatar: "🩺",
    bgColor: "bg-blue-500"
  },
  {
    id: 3,
    name: "Prof. Francisco",
    title: "Filipino Teacher and Educator of AI",
    description: "Prof. Francisco is a passionate AI educator whose voice exudes...",
    avatar: "🌱",
    bgColor: "bg-green-500"
  },
  {
    id: 4,
    name: "Super VM",
    title: "Voice of Hope & the Unheard",
    description: "He sounds like a brave Super VoiceMaster with a heart full of...",
    avatar: "🌸",
    bgColor: "bg-pink-500"
  },
  {
    id: 5,
    name: "Tiya Maria MaKuwento",
    title: "A 45-Year-Old Storyteller of...",
    description: "Tiya Maria MaKuwento is a seasoned 45-year-old storyteller...",
    avatar: "🌸",
    bgColor: "bg-pink-500"
  }
]

const voiceActions = [
  {
    icon: SparklesIcon,
    title: "Voice Design",
    description: "Design an entirely new voice from a text prompt",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10"
  },
  {
    icon: CopyIcon,
    title: "Clone your Voice",
    description: "Create a realistic digital clone of your voice",
    color: "text-green-400",
    bgColor: "bg-green-500/10"
  },
  {
    icon: LibraryIcon,
    title: "Voice Collections",
    description: "Curated AI voices for every use case",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  }
]

interface HomepageProps {
  onNavigateToChat: () => void
}

export function Homepage({ onNavigateToChat }: HomepageProps) {
  return (
    <div className="flex flex-col h-full w-full max-w-full overflow-hidden">
      {/* Main content area - scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0 px-4 sm:px-6 py-6">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">My Workspace</p>
              <h1 className="text-2xl sm:text-3xl font-medium text-white">
                Good afternoon, Tails
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <SettingsIcon className="h-4 w-4" />
              </Button>
              <Button
                onClick={onNavigateToChat}
                variant="outline"
                size="sm"
                className="bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700"
              >
                <MessageSquareIcon className="h-4 w-4 mr-2" />
                Talk to El
              </Button>
            </div>
          </div>

          {/* Project Types Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {projectTypes.map((type, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer p-6 aspect-square flex flex-col items-center justify-center text-center"
              >
                <div className={`${type.bgColor} p-3 rounded-lg mb-3`}>
                  <type.icon className={`h-6 w-6 ${type.color}`} />
                </div>
                <p className="text-sm text-gray-300 font-medium">{type.title}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Latest from the library */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">Latest from the library</h2>
            <div className="space-y-4">
              {libraryItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className={`${item.bgColor} w-10 h-10 rounded-full flex items-center justify-center text-white font-medium flex-shrink-0`}>
                      {item.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium mb-1">
                        {item.name} · {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Create or clone a voice */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">Create or clone a voice</h2>
            <div className="space-y-4">
              {voiceActions.map((action, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${action.bgColor} p-3 rounded-lg flex-shrink-0`}>
                      <action.icon className={`h-6 w-6 ${action.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">{action.title}</h3>
                      <p className="text-gray-400 text-sm">{action.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}