"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft, Mail, Bug, Lightbulb, Info, MessageSquare, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general",
  })

  const contactTypes = [
    { id: "bug", label: "Bug Report", icon: Bug, color: "#e74c3c", description: "Report issues or problems" },
    { id: "feature", label: "Feature Request", icon: Lightbulb, color: "#f39c12", description: "Suggest new features" },
    {
      id: "info",
      label: "General Information",
      icon: Info,
      color: "#3498db",
      description: "Ask questions or get info",
    },
    {
      id: "feedback",
      label: "App Feedback",
      icon: MessageSquare,
      color: "#9b59b6",
      description: "Share your thoughts",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const selectedType = contactTypes.find((type) => type.id === formData.type)
    const subject = `[${selectedType?.label}] ${formData.subject}`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Type: ${selectedType?.label}

Message:
${formData.message}`

    const mailtoLink = `mailto:info@lweb.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30">
      <header className="border-b border-white/20 bg-white/70 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/images/app-icon.png"
                  alt="BuyVoice App Icon"
                  className="w-10 h-10 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                BuyVoice
              </span>
            </Link>
            <Button
              variant="outline"
              asChild
              className="hover:bg-purple-50 border-purple-200 hover:border-purple-300 transition-all duration-300 bg-transparent"
            >
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-6">
            <Badge
              className="mb-4 border-0 px-4 py-2 text-sm font-medium shadow-lg"
              style={{ backgroundColor: "#f3e8ff", color: "#7c3aed" }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Contact Us
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a bug to report, feature request, or just want to share feedback?
            <br className="hidden md:block" />
            We'd love to hear from you and make BuyVoice even better!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactTypes.map((type, index) => {
            const IconComponent = type.icon
            return (
              <Card
                key={type.id}
                className={`cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group ${
                  formData.type === type.id
                    ? "ring-4 ring-purple-500 shadow-2xl scale-105 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-300"
                    : "hover:shadow-lg shadow-md border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData((prev) => ({ ...prev, type: type.id }))}
              >
                <CardHeader className="text-center pb-4 pt-8">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                      formData.type === type.id ? "ring-2 ring-white shadow-xl" : ""
                    }`}
                    style={{
                      backgroundColor: formData.type === type.id ? type.color : `${type.color}15`,
                    }}
                  >
                    <IconComponent
                      className="w-8 h-8"
                      style={{
                        color: formData.type === type.id ? "white" : type.color,
                      }}
                    />
                  </div>
                  <CardTitle
                    className={`text-lg font-semibold mb-2 ${
                      formData.type === type.id ? "text-purple-800" : "text-gray-900"
                    }`}
                  >
                    {type.label}
                  </CardTitle>
                  <p
                    className={`text-sm leading-relaxed ${
                      formData.type === type.id ? "text-purple-600 font-medium" : "text-gray-500"
                    }`}
                  >
                    {type.description}
                  </p>
                  {formData.type === type.id && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </CardHeader>
              </Card>
            )
          })}
        </div>

        <Card className="max-w-3xl mx-auto shadow-2xl border-2 border-purple-100 overflow-hidden bg-white">
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-1">
            <div className="bg-white rounded-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 pb-8 pt-8 border-b border-purple-100">
                <CardTitle className="flex items-center gap-3 text-2xl text-gray-900">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  Contact Form
                </CardTitle>
                <CardDescription className="text-lg text-gray-700 mt-2 font-medium">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 bg-white">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="block text-base font-bold text-gray-800">Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 text-gray-900 placeholder-gray-500 bg-gray-50 focus:bg-white text-lg"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-base font-bold text-gray-800">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 text-gray-900 placeholder-gray-500 bg-gray-50 focus:bg-white text-lg"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-base font-bold text-gray-800">Subject *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 text-gray-900 placeholder-gray-500 bg-gray-50 focus:bg-white text-lg"
                      value={formData.subject}
                      onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                      placeholder="Brief description of your message"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-base font-bold text-gray-800">Message *</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 resize-none text-gray-900 placeholder-gray-500 bg-gray-50 focus:bg-white text-lg leading-relaxed"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Please provide as much detail as possible..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-5 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-0"
                  >
                    <Send className="w-6 h-6 mr-3" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </div>
          </div>
        </Card>

        <div className="text-center mt-16 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Direct Email</h3>
          <p className="text-gray-600 text-lg">
            You can also reach us directly at{" "}
            <a
              href="mailto:info@lweb.ch"
              className="text-purple-600 hover:text-purple-700 font-semibold underline decoration-2 underline-offset-4 hover:decoration-purple-300 transition-all duration-300"
            >
              info@lweb.ch
            </a>
          </p>
        </div>
      </main>

      <footer className="border-t border-purple-100 mt-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/images/app-icon.png" alt="BuyVoice" className="w-8 h-8 rounded-lg" />
            <span className="text-lg font-semibold text-gray-800">BuyVoice</span>
          </div>
          <p className="text-gray-600">© 2025 Lweb Schweiz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
