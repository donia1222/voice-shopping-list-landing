import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/app-icon.png" alt="VoiceList App Icon" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold text-gray-900">VoiceList</span>
            </Link>
            <Button variant="outline" asChild>
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al inicio</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
            {`Privacy Policy Voice Shopping list

Last updated: 01.05.2025

Introduction

If you have further questions or require more information about our Privacy Policy, please do not hesitate to contact us.

Information Collection and Subscriptions

Voice Shopping list does not collect personally identifiable information from users. For subscriptions, we use a service provider (e.g., RevenueCat), which assigns an anonymous identifier for each user. This identifier is not used to personally identify the user.

The information collected for subscriptions is solely for processing payments and managing subscriptions efficiently. This information is treated with the highest confidentiality and security.

Use of Information

We use the anonymous subscription information for the following purposes:

• To process payment transactions.
• To manage active and expired subscriptions.
• To provide technical support and customer assistance.
• To enhance the quality of our app and services.

Data Storage

Subscription data, while anonymous, is stored securely and is accessible only by authorized personnel and our subscription service provider.

Sharing Personal Information

We do not share any personally identifiable information because we do not collect such information. Anonymous subscription information is not shared with third parties except for the purposes of processing payments and managing subscriptions as described.

User Rights

Users may inquire about whether DogMentor holds personal data about them, request correction of incorrect data, or request deletion of personal data under certain circumstances, even though we do not collect personally identifiable data.

Changes to This Privacy Policy

We reserve the right to make changes to this Privacy Policy at any time. If we decide to change our privacy policy, we will post those changes on this page.

Security

Our company takes reasonable precautions to protect our site and information. For example we restrict access to personally identifiable information to employees, contractors and vendors subject to non-disclosure requirements.

Our company also uses commonly used practices and technical controls to protect the information in our possession or control. These practices and controls include, but are not limited to, encrypting the transfer of personal information over the internet, using firewalls and intrusion detection systems and maintaining strict technical controls and procedures to ensure data integrity.

We periodically review our processes and systems to verify compliance with industry best practices and to ensure the highest level of security for our website.

Cookie Policy and other similar tracking technologies (GDPR and non GDPR)

When you visit Hundezonen we may send cookies or other similar tracking technologies to your computer or to any other device you use. We use cookies and similar tracking technologies to track user's preferences and to know how he uses our services.

A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.

For further information visit allaboutcookies.org

Cookies are used for user identification and proper assignment of historical user data collected during previous visits.

Both temporary cookie files (session cookies) and persistent cookies are used. Users may delete or remove cookies for the browser at any time or block cookies from being installed on its device. However this may affect the operation of our services or even result in its blocking.

Contact

If you have any questions regarding this Privacy Policy, you can contact us:

Via email: info@foodscan AI

Imagenes & Icons Flaticon
Plan: Freepik Premium
Name: roberto
Email: info@lweb.ch
https://www.freepikcompany.com/

Terms & policies freepikcompany:
https://www.freepikcompany.com/es/privacidad

Terms & policies Revnuecat:
https://www.revenuecat.com/privacy/

Terms & policies Open Ai:
https://openai.com/policies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Lweb Schweiz. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
              <Link href="/privacy-policy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
