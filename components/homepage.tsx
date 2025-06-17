"use client"

import * as React from "react"
import { 
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
    iconBg: "bg-blue-500",
    iconColor: "text-white"
  },
  { 
    icon: BookOpenIcon, 
    title: "Audiobook", 
    iconBg: "bg-red-500",
    iconColor: "text-white"
  },
  { 
    icon: MessageSquareIcon, 
    title: "Conversational AI", 
    iconBg: "bg-purple-500",
    iconColor: "text-white",
    isClickable: true
  },
  { 
    icon: RadioIcon, 
    title: "Podcast", 
    iconBg: "bg-orange-500",
    iconColor: "text-white"
  },
  { 
    icon: VolumeXIcon, 
    title: "Sound effect", 
    iconBg: "bg-blue-500",
    iconColor: "text-white"
  },
  { 
    icon: VideoIcon, 
    title: "Dubbed video", 
    iconBg: "bg-green-500",
    iconColor: "text-white"
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
    iconBg: "bg-pink-500",
    iconColor: "text-white"
  },
  {
    icon: CopyIcon,
    title: "Clone your Voice",
    description: "Create a realistic digital clone of your voice",
    iconBg: "bg-green-500",
    iconColor: "text-white"
  },
  {
    icon: LibraryIcon,
    title: "Voice Collections",
    description: "Curated AI voices for every use case",
    iconBg: "bg-blue-500",
    iconColor: "text-white"
  }
]

interface HomepageProps {
  onNavigateToChat: () => void
}

export function Homepage({ onNavigateToChat }: HomepageProps) {
  const handleProjectTypeClick = (type: any) => {
    if (type.isClickable && type.title === "Conversational AI") {
      onNavigateToChat()
    }
  }

  return (
    <div className="flex flex-col h-full w-full max-w-full overflow-hidden bg-black">
      {/* Top Banner */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <span className="bg-white text-black text-xs px-2 py-1 rounded-full font-medium">New</span>
          <span className="text-white text-sm">Become an affiliate, earn with every referral</span>
          <span className="text-gray-400">›</span>
        </div>
        <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
          <SettingsIcon className="h-4 w-4" />
        </Button>
      </div>

      {/* Main content area - scrollable */}
      <div className="flex-1 overflow-y-auto min-h-0 px-6 py-6">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-gray-400 text-sm mb-1">My Workspace</p>
              <h1 className="text-white text-3xl font-medium">
                Good afternoon, Ivann
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm">Have a question?</span>
              <Button
                variant="default"
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <MessageSquareIcon className="h-4 w-4 mr-2" />
                Talk to El
              </Button>
            </div>
          </div>

          {/* Project Types Grid */}
          <div className="grid grid-cols-6 gap-4 mb-12">
            {projectTypes.map((type, index) => (
              <Card
                key={index}
                onClick={() => handleProjectTypeClick(type)}
                className={`bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors p-6 aspect-square flex flex-col items-center justify-center text-center ${
                  type.isClickable ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className={`${type.iconBg} p-4 rounded-2xl mb-4`}>
                  <type.icon className={`h-8 w-8 ${type.iconColor}`} />
                </div>
                <p className="text-white text-sm font-medium">{type.title}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-12">
          {/* Latest from the library */}
          <div>
            <h2 className="text-white text-xl font-medium mb-6">Latest from the library</h2>
            <div className="space-y-4">
              {libraryItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${item.bgColor} w-12 h-12 rounded-full flex items-center justify-center text-white text-lg flex-shrink-0`}>
                      {item.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium mb-1">
                        {item.name} · {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
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
            <h2 className="text-white text-xl font-medium mb-6">Create or clone a voice</h2>
            <div className="space-y-4">
              {voiceActions.map((action, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${action.iconBg} p-3 rounded-xl flex-shrink-0`}>
                      <action.icon className={`h-6 w-6 ${action.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-2">{action.title}</h3>
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