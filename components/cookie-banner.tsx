"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="bg-white/95 backdrop-blur-sm border shadow-lg">
        <div className="p-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Cookie className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Cookie Notice</h3>
              <p className="text-sm text-gray-600 mb-4">
                We use cookies to enhance your experience and analyze site usage. By continuing to use this site, you
                consent to our use of cookies.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={acceptCookies} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Accept
                </Button>
                <Button onClick={declineCookies} variant="outline" size="sm" className="bg-transparent">
                  Decline
                </Button>
              </div>
            </div>
            <Button
              onClick={declineCookies}
              variant="ghost"
              size="sm"
              className="p-1 h-auto w-auto text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
