"use client"

import * as React from "react"
import { useState } from "react"
import { LoginForm } from "./login-form"
import { SignupForm } from "./signup-form"
import { ForgotPasswordForm } from "./forgot-password-form"

type AuthMode = "login" | "signup" | "forgot-password"

export function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("login")

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {mode === "login" && (
            <LoginForm
              onToggleMode={() => setMode("signup")}
              onForgotPassword={() => setMode("forgot-password")}
            />
          )}
          {mode === "signup" && (
            <SignupForm onToggleMode={() => setMode("login")} />
          )}
          {mode === "forgot-password" && (
            <ForgotPasswordForm onBack={() => setMode("login")} />
          )}
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 items-center justify-center p-8">
        <div className="text-center text-white max-w-md">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Welcome to the future of AI
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Build powerful AI agents, manage your knowledge base, and integrate with your favorite tools. 
            Join thousands of teams already using our platform.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-white/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Enterprise Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}