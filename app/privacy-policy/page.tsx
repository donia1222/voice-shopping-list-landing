import Link from "next/link"
import { ArrowLeft, XCircle, Lock, EyeOff, DollarSign, Home, Mic, CreditCard, ExternalLink, Shield, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPolicyPage() {
  const privacyData = {
    header: {
      title: "Privacy Policy",
      subtitle: "Your Privacy is Our Priority",
      lastUpdated: "September 2025"
    },
    summary: {
      title: "Summary: We Don't Store Anything",
      subtitle: "Your privacy in 4 clear points:",
      points: [
        { icon: XCircle, color: "#e74c3c", text: "No accounts created" },
        { icon: Lock, color: "#9b59b6", text: "No personal data requested (name, email, phone, addresses)" },
        { icon: EyeOff, color: "#3498db", text: "No behavioral analytics or personalized advertising" },
        { icon: DollarSign, color: "#ff6b35", text: "No data sales" }
      ],
      footer: "Everything remains on your device. We store absolutely nothing."
    },
    sections: [
      {
        title: "Data Storage",
        icon: Home,
        color: "#9b59b6",
        content: [
          {
            subtitle: "🏠 100% Local Storage",
            text: "All your shopping lists, voice recordings processing, and settings are stored exclusively on your device. We have no access to this information."
          },
          {
            subtitle: "☁️ No Cloud Servers",
            text: "We don't have databases or cloud servers that store your personal information. Your data never leaves your device unless you choose to export or share it."
          },
          {
            subtitle: "👤 No User Accounts",
            text: "The app works without creating user accounts, meaning we don't collect or store personal identification information like names, email addresses, or phone numbers."
          }
        ]
      },
      {
        title: "Voice Processing with AI",
        icon: Mic,
        color: "#ff6b35",
        content: [
          {
            subtitle: "🤖 Anonymous Processing",
            text: "Voice messages sent to AI are processed anonymously through ChatGPT API. No personal information is included in these requests."
          },
          {
            subtitle: "💬 No Voice Storage",
            text: "We don't store voice recordings or conversation history on our servers. All voice data remains on your device."
          },
          {
            subtitle: "📸 Image Analysis",
            text: "Images analyzed by AI are processed temporarily and are not stored on external servers."
          }
        ]
      },
      {
        title: "Subscriptions",
        icon: CreditCard,
        color: "#3498db",
        content: [
          {
            subtitle: "💳 Purchase Management",
            text: "Purchases are managed by Apple App Store / Google Play. To validate your subscription we use RevenueCat, sending only:"
          },
          {
            subtitle: "📊 RevenueCat Data:",
            text: "• A random identifier, limited to the app (app-scoped, doesn't personally identify you)\n• Purchase receipt provided by Apple/Google\n\nPurpose: This ID is used exclusively to manage subscription (activate/restore) and is not linked to your real identity."
          }
        ]
      },
      {
        title: "Third Party Services",
        icon: ExternalLink,
        color: "#2ecc71",
        content: [
          {
            subtitle: "🔗 External Services",
            text: "The app may send data to external services (e.g. ChatGPT for voice processing, RevenueCat for subscriptions). This data is processed anonymously and doesn't allow personal identification."
          },
          {
            subtitle: "📋 Privacy Policies:",
            text: "• OpenAI: https://openai.com/policies\n• RevenueCat: https://www.revenuecat.com/privacy\n• App stores for distribution and payments"
          }
        ]
      },
      {
        title: "Data Security",
        icon: Shield,
        color: "#e74c3c",
        content: [
          {
            subtitle: "🔒 Device Security",
            text: "Since all data is stored locally on your device, data security depends on your device's security measures. We recommend using device encryption and secure lock screens."
          }
        ]
      },
      {
        title: "Contact",
        icon: Mail,
        color: "#95a5a6",
        content: [
          {
            subtitle: "📧 Questions?",
            text: "If you have questions about this Privacy Policy, contact us at: info@lweb.ch"
          }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9ff' }}>
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/app-icon.png" alt="BuyVoice App Icon" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold text-gray-900">BuyVoice</span>
            </Link>
            <Button variant="outline" asChild>
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 border-0" style={{ backgroundColor: '#f3e8ff', color: '#7c3aed' }}>
            {privacyData.header.lastUpdated}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#4c1d95' }}>
            {privacyData.header.title}
          </h1>
          <p className="text-xl mb-8" style={{ color: '#7c3aed' }}>
            {privacyData.header.subtitle}
          </p>
        </div>
      </section>

      {/* Summary Section */}
      <section className="container mx-auto px-4 pb-16">
        <Card
          className="max-w-4xl mx-auto border-0"
          style={{
            backgroundColor: 'white',
            borderLeftWidth: '4px',
            borderLeftColor: '#9b59b6',
            boxShadow: '0 2px 8px rgba(155, 89, 182, 0.1)'
          }}
        >
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#4c1d95' }}>
              {privacyData.summary.title}
            </CardTitle>
            <CardDescription className="text-lg" style={{ color: '#6b7280' }}>
              {privacyData.summary.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {privacyData.summary.points.map((point, index) => {
                const IconComponent = point.icon
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${point.color}20` }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: point.color }}
                      />
                    </div>
                    <p className="font-medium" style={{ color: '#374151' }}>{point.text}</p>
                  </div>
                )
              })}
            </div>
            <div className="text-center p-6 bg-white rounded-xl border-t" style={{ borderTopColor: '#e5e7eb' }}>
              <p className="text-lg font-semibold" style={{ color: '#4c1d95' }}>
                {privacyData.summary.footer}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Detailed Sections */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {privacyData.sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <Card
                key={index}
                className="border-0 hover:shadow-xl transition-shadow bg-white"
                style={{ boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)' }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${section.color}20` }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: section.color }}
                      />
                    </div>
                    <CardTitle className="text-xl font-bold" style={{ color: '#1f2937' }}>
                      {section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="rounded-lg p-6" style={{ backgroundColor: '#f8f9ff' }}>
                      <h4 className="font-semibold mb-3 text-lg" style={{ color: '#1f2937' }}>
                        {item.subtitle}
                      </h4>
                      <p className="leading-relaxed whitespace-pre-line" style={{ color: '#4b5563' }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16" style={{ backgroundColor: '#f3e8ff' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center" style={{ color: '#6b7280' }}>
            <p>© 2024 Lweb Schweiz. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link
                href="/"
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: '#6b7280' }}
              >
                Home
              </Link>
              <Link
                href="/privacy-policy"
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: '#6b7280' }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: '#6b7280' }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
