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
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"


const privacyPolicyTextEn = `Privacy Policy Manual Shopping list

Last updated: 10.07.2024

Introduction

If you have further questions or require more information about our Privacy Policy, please do not hesitate to contact us.

Information Collection and Subscriptions

Manual Shopping list does not collect personally identifiable information from users. For subscriptions, we use a service provider (e.g., RevenueCat), which assigns an anonymous identifier for each user. This identifier is not used to personally identify the user.

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
limitations under the License.`

const privacyPolicyTextEs = `Política de Privacidad Lista de Compras Manual

Última actualización: 10.07.2024

Introducción

Si tiene más preguntas o requiere más información sobre nuestra Política de Privacidad, no dude en contactarnos.

Recopilación de Información y Suscripciones

La Lista de Compras Manual no recopila información de identificación personal de los usuarios. Para las suscripciones, utilizamos un proveedor de servicios (por ejemplo, RevenueCat), que asigna un identificador anónimo para cada usuario. Este identificador no se utiliza para identificar personalmente al usuario.

La información recopilada para las suscripciones es únicamente para procesar pagos y gestionar suscripciones de manera eficiente. Esta información se trata con la máxima confidencialidad y seguridad.

Uso de la Información

Utilizamos la información anónima de suscripción para los siguientes propósitos:

• Para procesar transacciones de pago.
• Para gestionar suscripciones activas y vencidas.
• Para proporcionar soporte técnico y asistencia al cliente.
• Para mejorar la calidad de nuestra aplicación y servicios.

Almacenamiento de Datos

Los datos de suscripción, aunque anónimos, se almacenan de forma segura y solo son accesibles por personal autorizado y nuestro proveedor de servicios de suscripción.

Compartir Información Personal

No compartimos ninguna información de identificación personal porque no recopilamos dicha información. La información anónima de suscripción no se comparte con terceros excepto para los propósitos de procesar pagos y gestionar suscripciones como se describe.

Derechos del Usuario

Los usuarios pueden consultar si DogMentor posee datos personales sobre ellos, solicitar la corrección de datos incorrectos, o solicitar la eliminación de datos personales bajo ciertas circunstancias, aunque no recopilamos datos de identificación personal.

Cambios a Esta Política de Privacidad

Nos reservamos el derecho de hacer cambios a esta Política de Privacidad en cualquier momento. Si decidimos cambiar nuestra política de privacidad, publicaremos esos cambios en esta página.

Seguridad

Nuestra empresa toma precauciones razonables para proteger nuestro sitio e información. Por ejemplo, restringimos el acceso a información de identificación personal a empleados, contratistas y proveedores sujetos a requisitos de no divulgación.

Nuestra empresa también utiliza prácticas comúnmente utilizadas y controles técnicos para proteger la información en nuestra posesión o control. Estas prácticas y controles incluyen, pero no se limitan a, encriptar la transferencia de información personal a través de internet, usar firewalls y sistemas de detección de intrusiones y mantener controles técnicos estrictos y procedimientos para asegurar la integridad de los datos.

Revisamos periódicamente nuestros procesos y sistemas para verificar el cumplimiento con las mejores prácticas de la industria y para asegurar el más alto nivel de seguridad para nuestro sitio web.

Política de Cookies y otras tecnologías de seguimiento similares (GDPR y no GDPR)

Cuando visita Hundezonen, podemos enviar cookies u otras tecnologías de seguimiento similares a su computadora o a cualquier otro dispositivo que use. Utilizamos cookies y tecnologías de seguimiento similares para rastrear las preferencias del usuario y para saber cómo usa nuestros servicios.

Una cookie es un archivo que contiene un identificador (una cadena de letras y números) que es enviado por un servidor web a un navegador web y es almacenado por el navegador. El identificador es entonces enviado de vuelta al servidor cada vez que el navegador solicita una página del servidor.

Para más información visite allaboutcookies.org

Las cookies se utilizan para la identificación del usuario y la asignación adecuada de datos históricos del usuario recopilados durante visitas anteriores.

Se utilizan tanto archivos de cookies temporales (cookies de sesión) como cookies persistentes. Los usuarios pueden eliminar o quitar cookies del navegador en cualquier momento o bloquear la instalación de cookies en su dispositivo. Sin embargo, esto puede afectar el funcionamiento de nuestros servicios o incluso resultar en su bloqueo.

Contacto

Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos:

Vía email: info@foodscan AI

Imágenes e Iconos Flaticon
Plan: Freepik Premium
Nombre: roberto
Email: info@lweb.ch
https://www.freepikcompany.com/

Términos y políticas freepikcompany:
https://www.freepikcompany.com/es/privacidad

Términos y políticas Revnuecat:
https://www.revenuecat.com/privacy/

Términos y políticas Open Ai:
https://openai.com/policies

Licenciado bajo la Licencia Apache, Versión 2.0 (la "Licencia");
no puede usar este archivo excepto en cumplimiento con la Licencia.
Puede obtener una copia de la Licencia en

http://www.apache.org/licenses/LICENSE-2.0

A menos que sea requerido por la ley aplicable o acordado por escrito, el software
distribuido bajo la Licencia se distribuye "TAL COMO ES",
SIN GARANTÍAS O CONDICIONES DE NINGÚN TIPO, ya sean expresas o implícitas.
Vea la Licencia para el idioma específico que rige los permisos y
limitaciones bajo la Licencia.`

const termsOfServiceTextEn = `Terms and Conditions

Chat GPT Open AI

The App integrates OpenAI API (https://beta.openai.com/docs/api-reference),

API terms & policies are available at https://openai.com/api/policies/service-terms/.

When you share your User Content* you agree to comply with the terms of OpenAI Sharing & Publication Policy.
User Content is any content generated by AI via the App, as well as your input content.

-The responses are generated with Chat GPT 3-5 Turbo / GPT4o, Each answer is individually generated for each user, and they are not stored by us.

-The images are analyzed with OpenAI's vision technology. Your images are sent for analysis as anonymous and are received as anonymous. At no point are the images linked to your identity.

Imagenes & Icons (Flatico Premium Suscripción): 
https://www.freepikcompany.com/

Terms and Conditions:
 
Article 1 - General scope and object of the agreement

The following terms and conditions (T&C) govern the relationship between you as a client and our company while interacting through our website https://buyvoice.app and/or on our application BuyVoice.

Navigating and/or interacting on our website and/or application means that you expressly agree to these T&C without reserve or objection.

Our company has the right to modify or to adapt these T&C at any time and without prior notice. These T&C are directly applicable as soon as they are published on our website and/or application and/or sent to you by any means.

Please read these Terms and Conditions carefully before using, interacting or accessing our website and/or application.

By agreeing to these T&C you grant us that you have reached at least the legal majority in your country, state or province of residence. If you are a minor you grant us that you have all the rights and consent from your legal representatives to use our services. If you have not reached the legal majority then you must not use our Services.

You are not entitled to use our services, website and/or application for any illegal or unauthorized purposes.

You must not try to hack, alter the use or functions of our services, send viruses or lead or try to lead any other kind of attack towards our services. You must not try to attempt at our services' integrity either.

Article 2 - Content and Intellectual property

The content provided in our Services might be accessible for free or not. Some content might be required to be logged in or to have a valid paid subscription (IAP, restricted contents or sections).

If some content requires you to have an account or to be registered, please refer to the Article 4 « Registration Process » to know of to access our Services.

The contents of our Services are intended for personal, non-commercial use. All materials available on our Services are protected by copyrights and/or intellectual property rights.

In addition to that some content might be protected by some other rights such as, trademark, patents, trade secrets, database right, sui generis rights and other intellectual or proprietary rights.

The user of our Services is not allowed to reproduce totally or partially any content that is made available through our Services. The user will also not reproduce any of our logo, name, visual identity and so on, he will also not try to reproduce, copy or produce mere copy of our Services.

The user will not modify, copy, paste, translate, sell, exploit or transmit for free or not any of the content, text, photo, pictures, drawing, audio content, podcast or any content that is available on our Services.

Article 3 - Subscription and payment (duration, recurring payment, auto renewal)

Price

The applicable subscription fees are shown before concluding the ordering process.

Please check how the Apple Store and the Google Store handle tax management and prices.

Any changes in taxes will be directly applicable to the subscriptions.

Regarding fee changes or modification, our company reserves the right to change any fee or tariff at any time and without prior notice.

Payment and Fees

Available payment methods will be shown to the client upon subscription, electronic payment will be shown only if available.

Payment methods can vary.

All of your banking details, credit card details and other payment methods are encrypted and are never stored on our website and/or application. We use third-party solutions to process your payment.

We reserve the right to modify at any time any fees, if you do not agree with the price change you can stop using our Services at any time before renewal payment occurs.

In App Purchases (IAP) to access restricted content

If you have subscribed through a third party such as Google Play, Apple App Store or any other third party, these Terms and Conditions might not apply to you. In that case you contract for such products will be with the third party and not with our Company. 

Our Company will not be liable for any claims related to purchases made through a third party, you must contact that third party directly.

Our Company will have no liability or responsibility regarding any issues or difficulties regarding IAP purchases as they are done through third-party platforms.

Restoring your subscription, digital contents or In App Purchases

If you have made In App Purchases (IAP) through a third party you might be able to restore your previous purchases that you have already made. This can be done using the link within our Application and/or website.

Article 4 - Registration process

Our company might or might not require our client to first register to enable the client to access some part or the whole application and/or website.

Each registration is intended for one user only and you are prohibited from sharing your credentials or your account with anyone.

We may cancel or suspend your access to our Services if you share your credentials.

Please notify us immediately at info@lweb.ch if you think that your credentials are compromised.

Registration

If registration is required to access our website and/or application then the client must first enroll itself by creating an account. To do so the client must fill in the registry form available on our website and/or application. The client will choose a login and a password linked to a valid email address.

By doing so the client agrees that he will keep his credential confidential, secure at all times and that he will not communicate them to any third-party.

The client must keep its credential confidential at all times and must not share its credentials with anyone.

Our company will not be held liable or responsible for any unauthorized use, modification or access on the client's account even if fraudulent access is made using the client's account or banking details.

Signing In with third parties authentication, including but not limited to, « Sign-in with Apple », Facebook and Twitter authentication

These third-party services might be implemented within our application and/or website to help you sign-in alongside creating an account directly on our Services.

You can either choose to register an account directly via the embedded registry form within our application and/or website or you can use third-party authentication mechanisms.

These third-party providers are not linked with our company and hence you must check and read their privacy policies and other legally binding documents that rule their services.

By using third-party authentication mechanisms, you are allowing third-party applications and/or platforms to access some of your personal data, the relationship between you and the platform is outside any kind of control of our company.

Article 5 - Warranties

The content provided by our Services is provided to the user « as it is » and « as available », we cannot guarantee that the content provided will be exact, true, or error-free. The user accesses our content at its own risks.

We will not be held responsible if any content on our Services is inaccurate or mistaken.

Article 6 - Content moderation and user generated content

If our user uploads, posts or submits any type of content on the Services you represent to us that you have all the necessary legal rights to upload, post or submit such content.

You shall not publish, distribute or upload any content that is, abusive, fake news, obscene, pornographic, illegal.

In addition to that you shall not try to impersonate anyone else or use a fake identity in order to use, access or publish any content on our Services.

You shall not use our Services to transmit any kind of malware, viruses, crypto lockers, ransomware or spyware.

Users will not threaten or verbally abuse other users nor will they spam the Services. User will use respectfully language, you will not try to abuse or discriminate based on race, religion, nationality, sexual gender or preference, age, disability and so on. Hate speech is prohibited.

Our Company has the right to delete, modify, censor and delete a client's content or account if any of the rules above are violated. This will be done without any prior justification or notice. The client will not receive any compensation.

Article 7 - Liability

Our company will not be liable in case of network disruption, viruses, outside access, fraudulent use of payment methods or any other kind or type of technical issue or fraudulent access.

Article 8 - Third-Party links and external links

Some of the contents available on our website and/or application can include materials from third-parties and outside sources. Third-party links on our websites and/or applications can direct you to outside of our control websites that are not affiliated with us. We are not responsible nor liable for controlling or examining the content or accuracy of third-party websites or outside sources.

Hence we are not liable nor responsible for any damages or misuse while accessing third-party links or external links or sources on our website and/or application.

Please read carefully our privacy policy regarding how to deal with third-party privacy policy, terms and conditions and cookie policy.

Article 9 - Disclaimer of warranties

While using our website and/or application you grant us that we will not be held liable or responsible if data on our services is not accurate, true, complete or correct. The information and data given on our services is given as illustrational and informational only and must not be used for making decisions. Further advice and information must be sought before making any serious decision. You are using our services at your own risk.

Our company reserves the right to modify and/or delete any content on our services without prior notice, but our company has no obligation to update any content available on our services.

Also our company does not guarantee that the use of our services will be error-free, timely, secure or uninterrupted. The client agrees that we can remove services from time to time or add new ones without prior notice.

Our services are delivered and provided to clients « as is » and « as available » for use, without any warranties or conditions of any kind.

In no case our company's staff, employees, personnel, agents, interns and so on, are not liable for any loss, claim, injury, any indirect or direct damage, incidental, punitive or special damages of any kind or type. This includes loss of profits, lots of revenues, lots of data or savings, whether based on tort law, contract, liability or otherwise.

Article 10 - Indemnification

You as a client of our company agree to indemnify, defend and hold us harmless from any claim or demand, this includes attorney's fee made by any third-party due to your breach of these T&C or any other document that is binding between you and our company.

Article 11 - Severability

If any part, article or document of these T&C or of any other binding document between you and our company is determined by a competent jurisdiction to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law.

The unenforceable portion shall be deemed to be severed from these T&C such determination will not affect the validity and enforceability of any other remaining provisions.

Article 12 - Termination

All of the obligations and liabilities of the parties that occurred before the termination date shall survive the termination of this agreement.

These T&C are effective unless terminated either by our company or by the client.

The client can notify our company that he no longer wants to use our services or he can simply stop using and/or access our services, websites and/or application.

Our company can terminate this agreement at its sole discretion at any time and without prior notice, the client will hence remain liable for any remaining amounts due to our company.

Article 13 - Governing Law and Venue

The present T&C are ruled by Swiss Law.

Any issue arising from these T&C regarding, but not limited to, their validity, interpretation, execution, consequences and so on will be pleaded in front of the relevant jurisdiction.

The relevant jurisdiction is Switzerland.

Article 14 - Contact information

If you have any question regarding these Terms and Conditions you can contact us directly at: info@lweb.ch.

Cancellation and refunds

If our User cancels his subscription, the cancellation will only occur for future charges associated with that subscription. You can notify us of your cancellation at any time and this cancellation will occur at the end of your current billing period.

You will not receive a refund for the current billing cycle, users will continue to have the same access and benefits of your products for the remainder of the current billing period.

You might be able to get a partial or a full refund depending on where you live and based on the applicable legislation and regulation.

Our Company reserves the right to issue refunds or credits at our sole discretion.

If IAP are made within our Services you must check the Store Terms and Conditions on how to manage and get your refund or cancellation. You can check their condition at https://support.apple.com/en-ph/HT204084 for Apple or at https://support.google.com/googleplay/answer/2479637?hl=en for Google.`

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
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)
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

  // Add currency logic
  const getCurrency = (lang: Language) => {
    return lang === "en" ? "$" : "€"
  }

  const getPrice = (lang: Language) => {
    return lang === "en" ? "2.99" : "2.99"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-blue-50/70 backdrop-blur-sm">
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 shadow-md">
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center mb-20 pt-6">
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

      {/* Privacy Policy Modal */}

      {/* Terms of Service Modal */}

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
  )
}
