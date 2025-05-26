"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic, Camera, Bell, MapPin, Smartphone, Star, Download, Share2, Edit3, DollarSign } from "lucide-react"
import { ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Language = "en" | "es" | "de" | "it" | "fr"

const translations = {
  en: {
    features: "Features",
    pricing: "Pricing",
    contact: "Contact",
    voicePowered: "🎤 Voice-Powered Shopping",
    heroTitle: "Create Shopping Lists",
    heroTitleAccent: " by Voice",
    heroDescription:
      "Speak and we'll do the rest. Say phrases like \"tomorrow I'm going to buy chicken, tomatoes, and onions\" and our AI will select the ingredients for your list. Forget typing!",
    downloadIOS: "Download for iOS",
    viewAppStore: "View on App Store",
    powerfulFeatures: "Powerful Features for Smart Shopping",
    featuresDescription: "Everything you need to organize your shopping efficiently and never forget an item again.",
    voiceRecognition: "Voice Recognition",
    voiceRecognitionDesc:
      "Simply speak your shopping needs naturally. Our AI understands context and creates organized lists automatically.",
    photoDigitization: "Photo Digitization",
    photoDigitizationDesc:
      "Take a photo of handwritten lists and we'll digitize them instantly. Convert any paper list to digital format. (Premium feature)",
    smartNotifications: "Smart Notifications",
    smartNotificationsDesc:
      "Receive push notifications to remind you of your purchases. Never forget important items again.",
    listManagement: "Easy List Management",
    listManagementDesc:
      "Create, save, edit, and organize your shopping lists effortlessly. Keep everything perfectly organized.",
    shareCollaborate: "Share & Collaborate",
    shareCollaborateDesc:
      "Share your lists with family and friends. Collaborate on shopping and keep everyone in sync.",
    priceEstimates: "Price Estimates",
    priceEstimatesDesc:
      "Get price estimates for your lists in different cities like Zurich, New York, and more. Plan your budget effectively. (Premium feature)",
    knowPrices: "Know the Prices in Your City",
    knowPricesDesc:
      "Want to know how much your list will cost in Zurich, New York, or any other city? Our app offers price estimates to plan your budget. Always be prepared!",
    useAllFeatures: "Use All Features Without Barriers",
    useAllFeaturesDesc:
      "Our app is completely free thanks to ads. You can subscribe to remove ads and support the maintenance and updates of the app.",
    freeVersion: "Free Version",
    freeVersionDesc: "Perfect for getting started",
    foreverFree: "Forever free",
    premium: "Premium",
    premiumDesc: "Support the app development",
    perMonth: "per month",
    mostPopular: "Most Popular",
    allVoiceFeatures: "All voice features",
    pushNotifications: "Push notifications",
    includesAds: "Includes ads",
    downloadFree: "Download Free",
    allFreeFeatures: "All free features",
    noAdsExperience: "No ads experience",
    prioritySupport: "Priority support",
    earlyAccess: "Early access to features",
    supportDevelopment: "Support development",
    subscribeNow: "Subscribe Now",
    readyTransform: "Ready to Transform Your Shopping?",
    readyTransformDesc:
      "Join thousands of users who have already simplified their shopping with VoiceList. Download now and experience the future of shopping lists.",
    quickLinks: "Quick Links",
    home: "Home",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    support: "Support",
    copyright: "© 2024 Lweb Schweiz. All rights reserved.",
    tagline: "The smart way to create and manage your shopping lists with the power of voice.",
  },
  es: {
    features: "Características",
    pricing: "Precios",
    contact: "Contacto",
    voicePowered: "🎤 Compras por Voz",
    heroTitle: "Crea Listas de Compras",
    heroTitleAccent: " por Voz",
    heroDescription:
      'Habla y nosotros nos encargamos del resto. Di frases como "mañana voy a comprar pollo, tomates y cebollas" y nuestra IA seleccionará los ingredientes para tu lista. ¡Olvídate de escribir!',
    downloadIOS: "Descargar para iOS",
    viewAppStore: "Ver en App Store",
    powerfulFeatures: "Características Poderosas para Compras Inteligentes",
    featuresDescription:
      "Todo lo que necesitas para organizar tus compras de manera eficiente y nunca olvidar un artículo.",
    voiceRecognition: "Reconocimiento de Voz",
    voiceRecognitionDesc:
      "Simplemente habla tus necesidades de compra de forma natural. Nuestra IA entiende el contexto y crea listas organizadas automáticamente.",
    photoDigitization: "Digitalización de Fotos",
    photoDigitizationDesc:
      "Toma una foto de listas escritas a mano y las digitalizaremos al instante. Convierte cualquier lista en papel a formato digital. (Característica Premium)",
    smartNotifications: "Notificaciones Inteligentes",
    smartNotificationsDesc:
      "Recibe notificaciones push para recordarte tus compras. Nunca olvides artículos importantes otra vez.",
    listManagement: "Gestión Fácil de Listas",
    listManagementDesc:
      "Crea, guarda, edita y organiza tus listas de compras sin esfuerzo. Mantén todo perfectamente organizado.",
    shareCollaborate: "Compartir y Colaborar",
    shareCollaborateDesc:
      "Comparte tus listas con familia y amigos. Colabora en las compras y mantén a todos sincronizados.",
    priceEstimates: "Estimaciones de Precios",
    priceEstimatesDesc:
      "Obtén estimaciones de precios para tus listas en diferentes ciudades como Zurich, Nueva York y más. Planifica tu presupuesto efectivamente. (Característica Premium)",
    knowPrices: "Conoce los Precios en tu Ciudad",
    knowPricesDesc:
      "¿Quieres saber cuánto costará tu lista en Zurich, Nueva York o cualquier otra ciudad? Nuestra app ofrece estimaciones de precios para planificar tu presupuesto. ¡Siempre está preparado!",
    useAllFeatures: "Usa Todas las Características Sin Barreras",
    useAllFeaturesDesc:
      "Nuestra app es completamente gratuita gracias a los anuncios. Puedes suscribirte para eliminar anuncios y apoyar el mantenimiento y actualizaciones de la app.",
    freeVersion: "Versión Gratuita",
    freeVersionDesc: "Perfecto para empezar",
    foreverFree: "Gratis para siempre",
    premium: "Premium",
    premiumDesc: "Apoya el desarrollo de la app",
    perMonth: "por mes",
    mostPopular: "Más Popular",
    allVoiceFeatures: "Todas las características de voz",
    pushNotifications: "Notificaciones push",
    includesAds: "Incluye anuncios",
    downloadFree: "Descargar Gratis",
    allFreeFeatures: "Todas las características gratuitas",
    noAdsExperience: "Experiencia sin anuncios",
    prioritySupport: "Soporte prioritario",
    earlyAccess: "Acceso temprano a características",
    supportDevelopment: "Apoyar desarrollo",
    subscribeNow: "Suscribirse Ahora",
    readyTransform: "¿Listo para Transformar tus Compras?",
    readyTransformDesc:
      "Únete a miles de usuarios que ya han simplificado sus compras con VoiceList. Descarga ahora y experimenta el futuro de las listas de compras.",
    quickLinks: "Enlaces Rápidos",
    home: "Inicio",
    legal: "Legal",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    support: "Soporte",
    copyright: "© 2024 Lweb Schweiz. Todos los derechos reservados.",
    tagline: "La forma inteligente de crear y gestionar tus listas de compras con el poder de la voz.",
  },
  de: {
    features: "Funktionen",
    pricing: "Preise",
    contact: "Kontakt",
    voicePowered: "🎤 Sprachgesteuerte Einkäufe",
    heroTitle: "Erstelle Einkaufslisten",
    heroTitleAccent: " per Sprache",
    heroDescription:
      'Sprechen Sie und wir erledigen den Rest. Sagen Sie Sätze wie "morgen kaufe ich Hähnchen, Tomaten und Zwiebeln" und unsere KI wählt die Zutaten für Ihre Liste aus. Vergessen Sie das Tippen!',
    downloadIOS: "Für iOS herunterladen",
    viewAppStore: "Im App Store ansehen",
    powerfulFeatures: "Leistungsstarke Funktionen für intelligentes Einkaufen",
    featuresDescription:
      "Alles was Sie brauchen, um Ihre Einkäufe effizient zu organisieren und nie wieder einen Artikel zu vergessen.",
    voiceRecognition: "Spracherkennung",
    voiceRecognitionDesc:
      "Sprechen Sie einfach Ihre Einkaufsbedürfnisse natürlich aus. Unsere KI versteht den Kontext und erstellt automatisch organisierte Listen.",
    photoDigitization: "Foto-Digitalisierung",
    photoDigitizationDesc:
      "Fotografieren Sie handgeschriebene Listen und wir digitalisieren sie sofort. Wandeln Sie jede Papierliste in ein digitales Format um. (Premium-Funktion)",
    smartNotifications: "Intelligente Benachrichtigungen",
    smartNotificationsDesc:
      "Erhalten Sie Push-Benachrichtigungen, um Sie an Ihre Einkäufe zu erinnern. Vergessen Sie nie wieder wichtige Artikel.",
    listManagement: "Einfache Listenverwaltung",
    listManagementDesc:
      "Erstellen, speichern, bearbeiten und organisieren Sie Ihre Einkaufslisten mühelos. Halten Sie alles perfekt organisiert.",
    shareCollaborate: "Teilen & Zusammenarbeiten",
    shareCollaborateDesc:
      "Teilen Sie Ihre Listen mit Familie und Freunden. Arbeiten Sie beim Einkaufen zusammen und halten Sie alle synchron.",
    priceEstimates: "Preisschätzungen",
    priceEstimatesDesc:
      "Erhalten Sie Preisschätzungen für Ihre Listen in verschiedenen Städten wie Zürich, New York und mehr. Planen Sie Ihr Budget effektiv. (Premium-Funktion)",
    knowPrices: "Kennen Sie die Preise in Ihrer Stadt",
    knowPricesDesc:
      "Möchten Sie wissen, wie viel Ihre Liste in Zürich, New York oder einer anderen Stadt kosten wird? Unsere App bietet Preisschätzungen zur Budgetplanung. Seien Sie immer vorbereitet!",
    useAllFeatures: "Nutzen Sie alle Funktionen ohne Barrieren",
    useAllFeaturesDesc:
      "Unsere App ist dank Werbung völlig kostenlos. Sie können sich anmelden, um Werbung zu entfernen und die Wartung und Updates der App zu unterstützen.",
    freeVersion: "Kostenlose Version",
    freeVersionDesc: "Perfekt für den Einstieg",
    foreverFree: "Für immer kostenlos",
    premium: "Premium",
    premiumDesc: "Unterstützen Sie die App-Entwicklung",
    perMonth: "pro Monat",
    mostPopular: "Am beliebtesten",
    allVoiceFeatures: "Alle Sprachfunktionen",
    pushNotifications: "Push-Benachrichtigungen",
    includesAds: "Enthält Werbung",
    downloadFree: "Kostenlos herunterladen",
    allFreeFeatures: "Alle kostenlosen Funktionen",
    noAdsExperience: "Werbefreie Erfahrung",
    prioritySupport: "Prioritätssupport",
    earlyAccess: "Früher Zugang zu Funktionen",
    supportDevelopment: "Entwicklung unterstützen",
    subscribeNow: "Jetzt abonnieren",
    readyTransform: "Bereit, Ihr Einkaufen zu transformieren?",
    readyTransformDesc:
      "Schließen Sie sich Tausenden von Benutzern an, die ihre Einkäufe bereits mit VoiceList vereinfacht haben. Laden Sie jetzt herunter und erleben Sie die Zukunft der Einkaufslisten.",
    quickLinks: "Schnelle Links",
    home: "Startseite",
    legal: "Rechtliches",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    support: "Support",
    copyright: "© 2024 Lweb Schweiz. Alle Rechte vorbehalten.",
    tagline: "Der intelligente Weg, Ihre Einkaufslisten mit der Kraft der Sprache zu erstellen und zu verwalten.",
  },
  it: {
    features: "Caratteristiche",
    pricing: "Prezzi",
    contact: "Contatto",
    voicePowered: "🎤 Shopping Vocale",
    heroTitle: "Crea Liste della Spesa",
    heroTitleAccent: " con la Voce",
    heroDescription:
      'Parla e noi facciamo il resto. Dì frasi come "domani comprerò pollo, pomodori e cipolle" e la nostra IA selezionerà gli ingredienti per la tua lista. Dimentica di digitare!',
    downloadIOS: "Scarica per iOS",
    viewAppStore: "Visualizza su App Store",
    powerfulFeatures: "Caratteristiche Potenti per Shopping Intelligente",
    featuresDescription:
      "Tutto ciò di cui hai bisogno per organizzare i tuoi acquisti in modo efficiente e non dimenticare mai un articolo.",
    voiceRecognition: "Riconoscimento Vocale",
    voiceRecognitionDesc:
      "Parla semplicemente delle tue esigenze di shopping in modo naturale. La nostra IA comprende il contesto e crea liste organizzate automaticamente.",
    photoDigitization: "Digitalizzazione Foto",
    photoDigitizationDesc:
      "Scatta una foto di liste scritte a mano e le digitalizzeremo istantaneamente. Converti qualsiasi lista cartacea in formato digitale. (Caratteristica Premium)",
    smartNotifications: "Notifiche Intelligenti",
    smartNotificationsDesc:
      "Ricevi notifiche push per ricordarti dei tuoi acquisti. Non dimenticare mai più articoli importanti.",
    listManagement: "Gestione Facile delle Liste",
    listManagementDesc:
      "Crea, salva, modifica e organizza le tue liste della spesa senza sforzo. Mantieni tutto perfettamente organizzato.",
    shareCollaborate: "Condividi e Collabora",
    shareCollaborateDesc:
      "Condividi le tue liste con famiglia e amici. Collabora negli acquisti e mantieni tutti sincronizzati.",
    priceEstimates: "Stime dei Prezzi",
    priceEstimatesDesc:
      "Ottieni stime dei prezzi per le tue liste in diverse città come Zurigo, New York e altro. Pianifica il tuo budget efficacemente. (Caratteristica Premium)",
    knowPrices: "Conosci i Prezzi nella Tua Città",
    knowPricesDesc:
      "Vuoi sapere quanto costerà la tua lista a Zurigo, New York o in qualsiasi altra città? La nostra app offre stime dei prezzi per pianificare il tuo budget. Sii sempre preparato!",
    useAllFeatures: "Usa Tutte le Caratteristiche Senza Barriere",
    useAllFeaturesDesc:
      "La nostra app è completamente gratuita grazie agli annunci. Puoi abbonarti per rimuovere gli annunci e supportare la manutenzione e gli aggiornamenti dell'app.",
    freeVersion: "Versione Gratuita",
    freeVersionDesc: "Perfetto per iniziare",
    foreverFree: "Gratis per sempre",
    premium: "Premium",
    premiumDesc: "Supporta lo sviluppo dell'app",
    perMonth: "al mese",
    mostPopular: "Più Popolare",
    allVoiceFeatures: "Tutte le caratteristiche vocali",
    pushNotifications: "Notifiche push",
    includesAds: "Include annunci",
    downloadFree: "Scarica Gratis",
    allFreeFeatures: "Tutte le caratteristiche gratuite",
    noAdsExperience: "Esperienza senza annunci",
    prioritySupport: "Supporto prioritario",
    earlyAccess: "Accesso anticipato alle caratteristiche",
    supportDevelopment: "Supporta lo sviluppo",
    subscribeNow: "Abbonati Ora",
    readyTransform: "Pronto a Trasformare i Tuoi Acquisti?",
    readyTransformDesc:
      "Unisciti a migliaia di utenti che hanno già semplificato i loro acquisti con VoiceList. Scarica ora e sperimenta il futuro delle liste della spesa.",
    quickLinks: "Link Rapidi",
    home: "Home",
    legal: "Legale",
    privacyPolicy: "Politica sulla Privacy",
    termsOfService: "Termini di Servizio",
    support: "Supporto",
    copyright: "© 2024 Lweb Schweiz. Tutti i diritti riservati.",
    tagline: "Il modo intelligente per creare e gestire le tue liste della spesa con il potere della voce.",
  },
  fr: {
    features: "Fonctionnalités",
    pricing: "Tarifs",
    contact: "Contact",
    voicePowered: "🎤 Shopping Vocal",
    heroTitle: "Créez des Listes de Courses",
    heroTitleAccent: " par la Voix",
    heroDescription:
      'Parlez et nous nous occupons du reste. Dites des phrases comme "demain je vais acheter du poulet, des tomates et des oignons" et notre IA sélectionnera les ingrédients pour votre liste. Oubliez la saisie !',
    downloadIOS: "Télécharger pour iOS",
    viewAppStore: "Voir sur l'App Store",
    powerfulFeatures: "Fonctionnalités Puissantes pour un Shopping Intelligent",
    featuresDescription:
      "Tout ce dont vous avez besoin pour organiser vos courses efficacement et ne jamais oublier un article.",
    voiceRecognition: "Reconnaissance Vocale",
    voiceRecognitionDesc:
      "Exprimez simplement vos besoins de courses naturellement. Notre IA comprend le contexte et crée des listes organisées automatiquement.",
    photoDigitization: "Numérisation de Photos",
    photoDigitizationDesc:
      "Prenez une photo de listes manuscrites et nous les numériserons instantanément. Convertissez n'importe quelle liste papier en format numérique. (Fonctionnalité Premium)",
    smartNotifications: "Notifications Intelligentes",
    smartNotificationsDesc:
      "Recevez des notifications push pour vous rappeler vos achats. N'oubliez plus jamais d'articles importants.",
    listManagement: "Gestion Facile des Listes",
    listManagementDesc:
      "Créez, sauvegardez, modifiez et organisez vos listes de courses sans effort. Gardez tout parfaitement organisé.",
    shareCollaborate: "Partager et Collaborer",
    shareCollaborateDesc:
      "Partagez vos listes avec la famille et les amis. Collaborez sur les courses et gardez tout le monde synchronisé.",
    priceEstimates: "Estimations de Prix",
    priceEstimatesDesc:
      "Obtenez des estimations de prix pour vos listes dans différentes villes comme Zurich, New York et plus. Planifiez votre budget efficacement. (Fonctionnalité Premium)",
    knowPrices: "Connaissez les Prix dans Votre Ville",
    knowPricesDesc:
      "Voulez-vous savoir combien votre liste coûtera à Zurich, New York ou dans toute autre ville ? Notre app offre des estimations de prix pour planifier votre budget. Soyez toujours préparé !",
    useAllFeatures: "Utilisez Toutes les Fonctionnalités Sans Barrières",
    useAllFeaturesDesc:
      "Notre app est entièrement gratuite grâce aux publicités. Vous pouvez vous abonner pour supprimer les publicités et soutenir la maintenance et les mises à jour de l'app.",
    freeVersion: "Version Gratuite",
    freeVersionDesc: "Parfait pour commencer",
    foreverFree: "Gratuit pour toujours",
    premium: "Premium",
    premiumDesc: "Soutenez le développement de l'app",
    perMonth: "par mois",
    mostPopular: "Le Plus Populaire",
    allVoiceFeatures: "Toutes les fonctionnalités vocales",
    pushNotifications: "Notifications push",
    includesAds: "Inclut des publicités",
    downloadFree: "Télécharger Gratuitement",
    allFreeFeatures: "Toutes les fonctionnalités gratuites",
    noAdsExperience: "Expérience sans publicités",
    prioritySupport: "Support prioritaire",
    earlyAccess: "Accès anticipé aux fonctionnalités",
    supportDevelopment: "Soutenir le développement",
    subscribeNow: "S'abonner Maintenant",
    readyTransform: "Prêt à Transformer Vos Courses ?",
    readyTransformDesc:
      "Rejoignez des milliers d'utilisateurs qui ont déjà simplifié leurs courses avec VoiceList. Téléchargez maintenant et découvrez l'avenir des listes de courses.",
    quickLinks: "Liens Rapides",
    home: "Accueil",
    legal: "Légal",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions de Service",
    support: "Support",
    copyright: "© 2024 Lweb Schweiz. Tous droits réservés.",
    tagline: "La façon intelligente de créer et gérer vos listes de courses avec le pouvoir de la voix.",
  },
}

const languageNames = {
  en: { flag: "🇺🇸", name: "English", code: "EN" },
  es: { flag: "🇪🇸", name: "Español", code: "ES" },
  de: { flag: "🇩🇪", name: "Deutsch", code: "DE" },
  it: { flag: "🇮🇹", name: "Italiano", code: "IT" },
  fr: { flag: "🇫🇷", name: "Français", code: "FR" },
}

export default function LandingPage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en")
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/images/app-icon.png" alt="VoiceList App Icon" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold text-gray-900">VoiceList</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                {t.features}
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                {t.pricing}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                {t.contact}
              </button>
            </div>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>{languageNames[currentLanguage].code}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {Object.entries(languageNames).map(([code, lang]) => (
                  <DropdownMenuItem
                    key={code}
                    onClick={() => setCurrentLanguage(code as Language)}
                    className={currentLanguage === code ? "bg-blue-50" : ""}
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">{t.voicePowered}</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {t.heroTitle}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.heroTitleAccent}
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">{t.heroDescription}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            asChild
          >
            <a
              href="https://apps.apple.com/app/voice-shopping-list/id6505125372"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5 mr-2" />
              {t.downloadIOS}
            </a>
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3" asChild>
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

        {/* Hero Image - Phone Mockup */}
        <div className="relative max-w-sm mx-auto">
          {/* Phone Frame */}
          <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
            {/* Phone Screen */}
            <div className="bg-black rounded-[2rem] overflow-hidden">
              <img
                src="/images/hero-voice.jpg"
                alt="Create a shopping list with Voice - App interface"
                className="w-full h-auto"
              />
            </div>
            {/* Phone Details */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.powerfulFeatures}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.featuresDescription}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Voice Recognition */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">{t.voiceRecognition}</CardTitle>
              <CardDescription>{t.voiceRecognitionDesc}</CardDescription>
            </CardHeader>
          </Card>

          {/* Photo Digitization */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">{t.photoDigitization}</CardTitle>
              <CardDescription>{t.photoDigitizationDesc}</CardDescription>
            </CardHeader>
          </Card>

          {/* Smart Notifications */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">{t.smartNotifications}</CardTitle>
              <CardDescription>{t.smartNotificationsDesc}</CardDescription>
            </CardHeader>
          </Card>

          {/* List Management */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Edit3 className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-xl">{t.listManagement}</CardTitle>
              <CardDescription>{t.listManagementDesc}</CardDescription>
            </CardHeader>
          </Card>

          {/* Sharing */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-pink-600" />
              </div>
              <CardTitle className="text-xl">{t.shareCollaborate}</CardTitle>
              <CardDescription>{t.shareCollaborateDesc}</CardDescription>
            </CardHeader>
          </Card>

          {/* Price Estimates */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle className="text-xl">{t.priceEstimates}</CardTitle>
              <CardDescription>{t.priceEstimatesDesc}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Price Comparison Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.knowPrices}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.knowPricesDesc}</p>
          </div>

          <div className="flex justify-center mb-12">
            <img
              src="/images/price-features.png"
              alt="Price comparison and estimation features"
              className="max-w-md mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <CardTitle>Zurich</CardTitle>
                <CardDescription>Premium pricing estimates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">$45.20</div>
                <p className="text-sm text-gray-600">Average weekly groceries</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <CardTitle>New York</CardTitle>
                <CardDescription>Real-time price data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">$38.75</div>
                <p className="text-sm text-gray-600">Average weekly groceries</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <CardTitle>London</CardTitle>
                <CardDescription>Local market prices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">$42.10</div>
                <p className="text-sm text-gray-600">Average weekly groceries</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.useAllFeatures}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.useAllFeaturesDesc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t.freeVersion}</CardTitle>
              <CardDescription>{t.freeVersionDesc}</CardDescription>
              <div className="text-4xl font-bold text-gray-900 mt-4">$0</div>
              <p className="text-gray-600">{t.foreverFree}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-2" />
                  {t.allVoiceFeatures}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-2" />
                  {t.pushNotifications}
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="w-5 h-5 mr-2">📱</span>
                  {t.includesAds}
                </li>
              </ul>
              <Button className="w-full mt-6" variant="outline" asChild>
                <a
                  href="https://apps.apple.com/app/voice-shopping-list/id6505125372"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.downloadFree}
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-500 relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">{t.mostPopular}</Badge>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t.premium}</CardTitle>
              <CardDescription>{t.premiumDesc}</CardDescription>
              <div className="text-4xl font-bold text-gray-900 mt-4">$1.99</div>
              <p className="text-gray-600">{t.perMonth}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-2" />
                  {t.allFreeFeatures}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-2" />
                  {t.noAdsExperience}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-2" />
                  {t.photoDigitization.split(" (")[0]}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-2" />
                  {t.priceEstimates.split(" (")[0]}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-2" />
                  {t.prioritySupport}
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-green-500 mr-2" />
                  {t.earlyAccess}
                </li>
              </ul>
              <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {t.subscribeNow}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.readyTransform}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t.readyTransformDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3" asChild>
              <a
                href="https://apps.apple.com/app/voice-shopping-list/id6505125372"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.downloadIOS}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              asChild
            >
              <a
                href="https://apps.apple.com/app/voice-shopping-list/id6505125372"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.viewAppStore}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/images/app-icon.png" alt="VoiceList App Icon" className="w-8 h-8 rounded-lg" />
                <span className="text-xl font-bold">VoiceList</span>
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
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {t.contact}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t.legal}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t.privacyPolicy}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t.termsOfService}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t.support}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
