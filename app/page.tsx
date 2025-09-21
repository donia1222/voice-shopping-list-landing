"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Bell, MapPin, Smartphone, Star, Download, Share2, Edit3, DollarSign } from "lucide-react"
import { ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import CookieBanner from "@/components/cookie-banner"
import { Language, translations, languageNames } from "@/lib/translations"




export default function LandingPage() {
  // Detectar idioma del navegador automáticamente
  const detectBrowserLanguage = (): Language => {
    if (typeof window === 'undefined') return "en"

    const browserLang = navigator.language || navigator.languages?.[0] || "en"
    const langCode = browserLang.split('-')[0].toLowerCase()

    // Mapear códigos de idioma a nuestros idiomas soportados
    const supportedLanguages: Record<string, Language> = {
      'en': 'en', // English
      'es': 'es', // Español
      'de': 'de', // Deutsch (Alemán)
      'it': 'it', // Italiano
      'fr': 'fr', // Français (Francés)
      'tr': 'tr', // Türkçe (Turco)
      'pt': 'pt', // Português (Portugués)
      'ru': 'ru', // Русский (Ruso)
      'ar': 'ar', // العربية (Árabe)
      'hu': 'hu', // Magyar (Húngaro)
      'ja': 'ja', // 日本語 (Japonés)
      'hi': 'hi', // हिंदी (Hindi)
      'nl': 'nl'  // Nederlands (Neerlandés/Holandés)
    }

    return supportedLanguages[langCode] || "en" // Default a inglés si no se encuentra
  }

  const [currentLanguage, setCurrentLanguage] = useState<Language>("en")
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const t = translations[currentLanguage]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Remove the openEmailClient function
  // const openEmailClient = () => {
  //   window.location.href = "mailto:info@lweb.ch?subject=BuyVoice Support"
  // }

  // Add carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Detectar idioma del navegador al cargar la página
  useEffect(() => {
    const detectedLanguage = detectBrowserLanguage()
    setCurrentLanguage(detectedLanguage)
    console.log(`🌍 Idioma detectado: ${detectedLanguage} (navegador: ${navigator.language})`)
  }, [])

  // Add useEffect for auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Header scroll behavior
  useEffect(() => {
    let prevScrollY = 0

    const controlHeader = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsHeaderVisible(false)
      } else if (currentScrollY < prevScrollY) {
        // Scrolling up
        setIsHeaderVisible(true)
      }

      prevScrollY = currentScrollY
    }

    window.addEventListener('scroll', controlHeader)

    return () => {
      window.removeEventListener('scroll', controlHeader)
    }
  }, [])

  // Add currency logic
  const getCurrency = (lang: Language) => {
    return lang === "en" ? "$" : "€"
  }

  const getPrice = (lang: Language) => {
    return lang === "en" ? "2.99" : "2.99"
  }

  return (
    <>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: 'white',
        zIndex: 9999,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-80%)',
        transition: 'transform 0.3s ease-in-out'
      }}>
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/images/app-icon.png" alt="BuyVoice App Icon" className="w-12 h-12 rounded-lg" />
            <span className="text-xl font-bold text-gray-900">BuyVoice</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer font-medium"
              >
                {t.features}
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer font-medium"
              >
                {t.pricing}
              </button>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer font-medium"
              >
                {t.contact}
              </Link>
            </div>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm border-purple-200/50 hover:bg-white/80"
                >
                  <Globe className="w-4 h-4 text-purple-600" />
                  <span>{languageNames[currentLanguage].code}</span>
                  <ChevronDown className="w-4 h-4 text-purple-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur-sm border-purple-200/50">
                {Object.entries(languageNames).map(([code, lang]) => (
                  <DropdownMenuItem
                    key={code}
                    onClick={() => setCurrentLanguage(code as Language)}
                    className={currentLanguage === code ? "bg-yellow-50/80" : "hover:bg-purple-50/60"}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-blue-50/70 backdrop-blur-sm">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center mb-20 pt-28">
        <Badge className="mb-4 bg-blue-100/80 text-blue-800 hover:bg-blue-100/90 border-0 backdrop-blur-sm">
          {t.voicePowered}
        </Badge>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
          {t.heroTitle}
          <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t.heroTitleAccent}
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">{t.heroDescription}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-400/90 via-blue-500/90 to-purple-600/90 hover:from-purple-500/90 hover:via-blue-600/90 hover:to-purple-700/90 text-white px-8 py-3 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a
              href="https://apps.apple.com/app/voice-shopping-list/id6505125372"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5 mr-2 text-white" />
              {t.downloadIOS}
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 bg-white/60 backdrop-blur-sm border-purple-200/50 hover:bg-white/80 text-purple-700 hover:text-purple-800"
            asChild
          >
            <a
              href="https://apps.apple.com/app/voice-shopping-list/id6505125372"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              {t.viewAppStore}
            </a>
          </Button>
        </div>
        <CookieBanner />
        {/* Hero Image - Phone Mockup */}
        <div className="relative max-w-[280px] sm:max-w-xs mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl ring-1 ring-purple-200/20">
            <div className="bg-black rounded-[2rem] overflow-hidden relative">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                <img src="/0x0ss.png" alt="Manual shopping list interface" className="w-full h-auto flex-shrink-0" />
                <img src="/IMG_3175.PNG" alt="Shopping list management" className="w-full h-auto flex-shrink-0" />
                <img src="/IMG_3181.PNG" alt="Price estimation feature" className="w-full h-auto flex-shrink-0" />
              </div>
              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">{t.powerfulFeatures}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">{t.featuresDescription}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Manual Input */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm hover:bg-white/80 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                <Edit3 className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">{t.voiceRecognition}</CardTitle>
              <CardDescription className="text-gray-600">{t.voiceRecognitionDesc}</CardDescription>
            </CardHeader>
          </Card>

          {/* Photo Digitization */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm hover:bg-white/80 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-300/20 to-purple-400/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                <Camera className="w-6 h-6 text-purple-500" />
              </div>
              <CardTitle className="text-xl text-gray-900">{t.photoDigitization}</CardTitle>
              <CardDescription className="text-gray-600">{t.photoDigitizationDesc}</CardDescription>
            </CardHeader>
          </Card>

          {/* Smart Notifications */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm hover:bg-white/80 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                <Bell className="w-6 h-6 text-blue-500" />
              </div>
              <CardTitle className="text-xl text-gray-900">{t.smartNotifications}</CardTitle>
              <CardDescription className="text-gray-600">{t.smartNotificationsDesc}</CardDescription>
            </CardHeader>
          </Card>

          {/* List Management */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm hover:bg-white/80 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-300/20 to-purple-400/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                <Edit3 className="w-6 h-6 text-purple-500" />
              </div>
              <CardTitle className="text-xl text-gray-900">{t.listManagement}</CardTitle>
              <CardDescription className="text-gray-600">{t.listManagementDesc}</CardDescription>
            </CardHeader>
          </Card>

          {/* Sharing */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm hover:bg-white/80 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                <Share2 className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">{t.shareCollaborate}</CardTitle>
              <CardDescription className="text-gray-600">{t.shareCollaborateDesc}</CardDescription>
            </CardHeader>
          </Card>

          {/* Price Estimates */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm hover:bg-white/80 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-300/20 to-purple-400/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">{t.priceEstimates}</CardTitle>
              <CardDescription className="text-gray-600">{t.priceEstimatesDesc}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Multi-Language Support Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-800 border-0 px-4 py-2 backdrop-blur-sm">
            🌍 {t.globalSupport}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.availableLanguages}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.globalSupportDesc}</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-purple-100">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(languageNames).map(([code, lang]) => (
              <div
                key={code}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:bg-purple-50 ${
                  currentLanguage === code ? 'bg-purple-100 ring-2 ring-purple-300' : 'hover:scale-105'
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900 text-sm">{lang.name}</span>
                  <span className="text-xs text-gray-500">{lang.code}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              🎯 <strong>{t.autoDetected}</strong>
            </p>
            <div className="flex justify-center">
              <Badge className="bg-green-100 text-green-800 border-0">
                ✅ {t.currentlyViewing} <strong>{languageNames[currentLanguage].name}</strong>
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-blue-50/60 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-800 border-0 px-4 py-2 backdrop-blur-sm">
              💰 Smart Price Insights
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-purple-700 bg-clip-text text-transparent mb-6 text-balance">
              {t.knowPrices}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">{t.knowPricesDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/60 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/80 to-purple-500/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Zurich</CardTitle>
                <CardDescription className="text-gray-600">Premium pricing estimates</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  $45.20
                </div>
                <p className="text-sm text-gray-500 mt-2">Average weekly groceries</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/60 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/80 to-purple-500/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">New York</CardTitle>
                <CardDescription className="text-gray-600">Real-time price data</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  $38.75
                </div>
                <p className="text-sm text-gray-500 mt-2">Average weekly groceries</p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/60 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/80 to-purple-500/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">London</CardTitle>
                <CardDescription className="text-gray-600">Local market prices</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  $42.10
                </div>
                <p className="text-sm text-gray-500 mt-2">Average weekly groceries</p>
              </CardContent>
            </Card>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-200/30 rounded-full opacity-40 animate-pulse"></div>
        </div>
      </section>

      {/* iOS Widget Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.widgetTitle}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.widgetDescription}</p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-sm">
            <img src="/widget.png" alt="BuyVoice iOS Widget" className="w-full h-auto rounded-3xl shadow-2xl" />
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.quickAccess}</h3>
              <p className="text-gray-600">{t.quickAccessDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">{t.useAllFeatures}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">{t.useAllFeaturesDesc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-purple-200/30 bg-white/60 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">{t.freeVersion}</CardTitle>
              <CardDescription className="text-gray-600">{t.freeVersionDesc}</CardDescription>
              <div className="text-4xl font-bold text-gray-900 mt-4">{getCurrency(currentLanguage)}0</div>
              <p className="text-gray-600">{t.foreverFree}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  {t.allVoiceFeatures}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  {t.pushNotifications}
                </li>
              </ul>
     
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-400/50 relative bg-white/70 backdrop-blur-sm">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-600 text-white">
              {t.mostPopular}
            </Badge>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">{t.premium}</CardTitle>
              <CardDescription className="text-gray-600">{t.premiumDesc}</CardDescription>
              <div className="text-4xl font-bold text-gray-900 mt-4">
                {getCurrency(currentLanguage)}
                {getPrice(currentLanguage)}
              </div>
              <p className="text-gray-600">{t.perMonth}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  {t.allFreeFeatures}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  {t.noAdsExperience}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  {t.voiceFeatures}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  {t.photoDigitization.split(" (")[0]}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  {t.priceEstimates.split(" (")[0]}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  {t.prioritySupport}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  {t.earlyAccess}
                </li>
              </ul>
            
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-blue-600/90 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">{t.readyTransform}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">{t.readyTransformDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600/90 text-white hover:bg-purple-700 hover:text-white px-8 py-3 backdrop-blur-sm shadow-lg [&>a]:text-white [&>a>*]:text-white"
              asChild
            >
              <a
                href="https://apps.apple.com/app/voice-shopping-list/id6505125372"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2 text-white" />
                {t.downloadIOS}
              </a>
            </Button>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer id="contact" className="bg-gray-900/95 backdrop-blur-sm text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/images/app-icon.png" alt="BuyVoice App Icon" className="w-8 h-8 rounded-lg" />
                <span className="text-xl font-bold">BuyVoice</span>
              </div>
              <p className="text-gray-400">{t.tagline}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {t.home}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {t.features}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {t.pricing}
                  </button>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {t.contact}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t.legal}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    {t.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white transition-colors">
                    {t.termsOfService}
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white transition-colors">
                    {t.support}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Footer Info */}
          <div className="border-t border-gray-800/50 mt-8 pt-8">
            <div className="grid md:grid-cols-3 gap-4 text-center md:text-left text-gray-400 text-sm">
              <div>
                <h4 className="font-semibold mb-2">{t.imageCredits}</h4>
                <p>{t.imageCreditsText}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t.websiteDesign}</h4>
                <a
                  href="https://lweb.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  lweb.ch
                </a>
              </div>
              <div className="text-center">
                <p>{t.copyright}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
