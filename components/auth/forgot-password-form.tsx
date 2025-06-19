"use client"

import * as React from "react"
import { useState } from "react"
import { ArrowUpCircleIcon, ArrowLeftIcon, LoaderIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/hooks/use-auth"

interface ForgotPasswordFormProps {
  onBack: () => void
}

export function ForgotPasswordForm({ onBack }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error("Please enter your email address")
      return
    }

    setIsLoading(true)
    const { error } = await resetPassword(email)
    
    if (error) {
      toast.error(error.message)
    } else {
      setIsSubmitted(true)
      toast.success("Password reset email sent!")
    }
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <ArrowUpCircleIcon className="h-6 w-6 text-black" />
          </div>
          <span className="text-xl font-semibold text-white">Acme Inc.</span>
        </div>

        <div className="mb-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-white mb-2">
            Check your email
          </h1>
          <p className="text-gray-400">
            We've sent a password reset link to <span className="text-white">{email}</span>
          </p>
        </div>

        <Button
          onClick={onBack}
          variant="outline"
          className="w-full bg-gray-800 border-gray-700 text-white hover:bg-gray-700 hover:text-white"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to login
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <ArrowUpCircleIcon className="h-6 w-6 text-black" />
        </div>
        <span className="text-xl font-semibold text-white">Acme Inc.</span>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white mb-2">
          Forgot your password?
        </h1>
        <p className="text-gray-400">
          Enter your email address and we'll send you a link to reset your password
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-white text-black hover:bg-gray-100 font-medium"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <LoaderIcon className="h-4 w-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send reset link"
          )}
        </Button>
      </form>

      <Button
        onClick={onBack}
        variant="ghost"
        className="w-full mt-4 text-gray-400 hover:text-white hover:bg-gray-800"
      >
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Back to login
      </Button>
    </div>
  )
}