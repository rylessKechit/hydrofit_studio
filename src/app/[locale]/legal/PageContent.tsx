"use client";

import { useLocale } from "@/lib/i18n";
import { brandify } from "@/lib/brandify";

const text = {
  fr: {
    heroTag: "Transparence & Confiance",
    heroTitle: "Mentions ",
    heroTitleHighlight: "Légales",
    companyInfoTitle: "Informations sur la ",
    companyInfoHighlight: "Société",
    companyNameLabel: "Raison Sociale :",
    companyNameValue: "Hydrafit Studio LLC",
    tradeLicenseLabel: "Licence Commerciale :",
    tradeLicenseValue: "Département de l'Économie et du Tourisme de Dubai",
    registeredAddressLabel: "Adresse du Siège :",
    registeredAddressValue:
      "Nakheel Mall, Niveau 2, Palm Jumeirah, Dubai, Émirats Arabes Unis",
    emailLabel: "E-mail :",
    phoneLabel: "Téléphone :",
    termsTitle: "Conditions ",
    termsHighlight: "d'Utilisation",
    termsP1:
      "En accédant et en utilisant le site web de Hydrafit Studio (www.hydrafitstudio.com), vous acceptez et vous engagez à respecter les termes et dispositions du présent accord.",
    termsP2:
      "Tout le contenu de ce site, y compris les textes, graphiques, logos, images et logiciels, est la propriété de Hydrafit Studio LLC et est protégé par les lois sur le droit d'auteur des Émirats Arabes Unis et internationales.",
    termsP3:
      "Hydrafit Studio se réserve le droit de modifier ces conditions à tout moment. L'utilisation continue du site après toute modification constitue l'acceptation des conditions révisées.",
    termsP4:
      "Les tarifs, les horaires des cours et la disponibilité affichés sur ce site sont susceptibles d'être modifiés sans préavis. Bien que nous nous efforcions d'assurer l'exactitude, Hydrafit Studio ne garantit pas que toutes les informations sont à jour en permanence.",
    privacyTitle: "Politique de ",
    privacyHighlight: "Confidentialité",
    privacySection1Title: "1. Informations que Nous Collectons",
    privacySection1P1:
      "Nous collectons les informations que vous fournissez directement, y compris votre nom, adresse e-mail, numéro de téléphone et coordonnées de paiement lorsque vous réservez des cours, achetez des abonnements ou nous contactez.",
    privacySection1P2:
      "Nous pouvons également collecter automatiquement des données techniques, telles que votre adresse IP, le type de navigateur, les informations sur l'appareil et le comportement de navigation via des cookies et technologies similaires.",
    privacySection2Title: "2. Comment Nous Utilisons Vos Informations",
    privacySection2Items: [
      "Pour traiter les réservations et gérer votre abonnement",
      "Pour communiquer les horaires des cours, promotions et mises à jour",
      "Pour améliorer nos services et personnaliser votre expérience",
      "Pour nous conformer aux obligations légales en vertu de la loi des EAU",
      "Pour traiter les paiements de manière sécurisée via nos prestataires de paiement",
    ],
    privacySection3Title: "3. Protection des Données",
    privacySection3P:
      "Nous mettons en œuvre des mesures de sécurité conformes aux standards de l'industrie pour protéger vos données personnelles. Toutes les transactions de paiement sont chiffrées à l'aide de la technologie SSL. Nous nous conformons au Décret-Loi Fédéral des EAU n° 45 de 2021 sur la Protection des Données Personnelles et à ses réglementations d'application.",
    privacySection4Title: "4. Partage des Données",
    privacySection4P:
      "Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager des données avec des prestataires de services de confiance qui nous aident à exploiter notre site web, à traiter les paiements ou à vous servir, à condition qu'ils s'engagent à garder ces informations confidentielles.",
    privacySection5Title: "5. Cookies",
    privacySection5P:
      "Notre site web utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers stockés sur votre appareil qui nous aident à comprendre comment vous interagissez avec notre site. Vous pouvez contrôler les préférences de cookies via les paramètres de votre navigateur. La désactivation des cookies peut affecter certaines fonctionnalités du site.",
    privacySection6Title: "6. Vos Droits",
    privacySection6Items: [
      "Accéder aux données personnelles que nous détenons à votre sujet",
      "Demander la correction de données inexactes",
      "Demander la suppression de vos données personnelles",
      "Retirer votre consentement aux communications marketing",
      "Demander la portabilité des données le cas échéant",
    ],
    privacySection6P:
      "Pour exercer l'un de ces droits, contactez-nous à ",
    bookingTitle: "Politique de Réservation & ",
    bookingHighlight: "d'Annulation",
    bookingP1:
      "Toutes les réservations de cours sont soumises à disponibilité. Les réservations peuvent être effectuées via notre site web, notre application mobile ou directement au studio.",
    bookingP2:
      "Les annulations doivent être faites au moins 6 heures avant l'heure du cours prévue. Les annulations tardives ou absences entraîneront une déduction de cours de votre pack.",
    bookingP3:
      "Les packs de cours sont valables pour la durée spécifiée au moment de l'achat et ne sont pas transférables. Les packs expirés ne peuvent être ni remboursés ni prolongés.",
    bookingP4:
      "Les abonnements mensuels illimités se renouvellent automatiquement sauf annulation au moins 7 jours avant la date de renouvellement.",
    liabilityTitle: "Clause de ",
    liabilityHighlight: "Non-Responsabilité",
    liabilityP1:
      "La participation aux cours de fitness aquatique se fait à vos propres risques. En réservant un cours, vous confirmez que vous êtes en condition physique adaptée pour participer et que vous avez communiqué tout problème de santé pertinent à notre personnel.",
    liabilityP2:
      "Hydrafit Studio ne saurait être tenu responsable de toute blessure, perte ou dommage résultant de la participation à nos cours ou de l'utilisation de nos installations, sauf dans les cas où cette responsabilité ne peut être exclue par la loi.",
    liabilityP3:
      "Nous recommandons de consulter un professionnel de santé avant de commencer tout nouveau programme de fitness, en particulier si vous avez des problèmes de santé préexistants.",
    lastUpdated: "Dernière mise à jour : Février 2026",
    legalContactText:
      "Pour toute question concernant ces mentions légales, contactez-nous à ",
  },
  en: {
    heroTag: "Transparency & Trust",
    heroTitle: "Legal ",
    heroTitleHighlight: "Notice",
    companyInfoTitle: "Company ",
    companyInfoHighlight: "Information",
    companyNameLabel: "Company Name:",
    companyNameValue: "Hydrafit Studio LLC",
    tradeLicenseLabel: "Trade License:",
    tradeLicenseValue: "Dubai Department of Economy and Tourism",
    registeredAddressLabel: "Registered Address:",
    registeredAddressValue:
      "Nakheel Mall, Level 2, Palm Jumeirah, Dubai, United Arab Emirates",
    emailLabel: "Email:",
    phoneLabel: "Phone:",
    termsTitle: "Terms of ",
    termsHighlight: "Use",
    termsP1:
      "By accessing and using the Hydrafit Studio website (www.hydrafitstudio.com), you accept and agree to be bound by the terms and provisions of this agreement.",
    termsP2:
      "All content on this website, including text, graphics, logos, images, and software, is the property of Hydrafit Studio LLC and is protected by UAE and international copyright laws.",
    termsP3:
      "Hydrafit Studio reserves the right to modify these terms at any time. Continued use of the website following changes constitutes acceptance of the revised terms.",
    termsP4:
      "Pricing, class schedules, and availability displayed on this website are subject to change without prior notice. While we strive to ensure accuracy, Hydrafit Studio does not guarantee that all information is current at all times.",
    privacyTitle: "Privacy ",
    privacyHighlight: "Policy",
    privacySection1Title: "1. Information We Collect",
    privacySection1P1:
      "We collect information you provide directly, including your name, email address, phone number, and payment details when you book classes, purchase memberships, or contact us.",
    privacySection1P2:
      "We may also collect technical data automatically, such as your IP address, browser type, device information, and browsing behavior through cookies and similar technologies.",
    privacySection2Title: "2. How We Use Your Information",
    privacySection2Items: [
      "To process bookings and manage your membership",
      "To communicate class schedules, promotions, and updates",
      "To improve our services and personalize your experience",
      "To comply with legal obligations under UAE law",
      "To process payments securely through our payment providers",
    ],
    privacySection3Title: "3. Data Protection",
    privacySection3P:
      "We implement industry-standard security measures to protect your personal data. All payment transactions are encrypted using SSL technology. We comply with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data and its implementing regulations.",
    privacySection4Title: "4. Data Sharing",
    privacySection4P:
      "We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist in operating our website, processing payments, or servicing you, provided they agree to keep this information confidential.",
    privacySection5Title: "5. Cookies",
    privacySection5P:
      "Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you interact with our site. You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionality of the website.",
    privacySection6Title: "6. Your Rights",
    privacySection6Items: [
      "Access the personal data we hold about you",
      "Request correction of inaccurate data",
      "Request deletion of your personal data",
      "Withdraw consent for marketing communications",
      "Request data portability where applicable",
    ],
    privacySection6P: "To exercise any of these rights, contact us at ",
    bookingTitle: "Booking & Cancellation ",
    bookingHighlight: "Policy",
    bookingP1:
      "All class bookings are subject to availability. Bookings can be made through our website, mobile app, or directly at the studio.",
    bookingP2:
      "Cancellations must be made at least 6 hours before the scheduled class time. Late cancellations or no-shows will result in a class deduction from your pack.",
    bookingP3:
      "Class packs are valid for the duration specified at the time of purchase and are non-transferable. Expired packs cannot be refunded or extended.",
    bookingP4:
      "Monthly unlimited memberships auto-renew unless cancelled at least 7 days before the renewal date.",
    liabilityTitle: "Liability ",
    liabilityHighlight: "Disclaimer",
    liabilityP1:
      "Participation in aquatic fitness classes is at your own risk. By booking a class, you confirm that you are in suitable physical condition to participate and have disclosed any relevant health conditions to our staff.",
    liabilityP2:
      "Hydrafit Studio shall not be liable for any injury, loss, or damage arising from participation in our classes or use of our facilities, except where such liability cannot be excluded by law.",
    liabilityP3:
      "We recommend consulting a healthcare professional before beginning any new fitness program, particularly if you have pre-existing health conditions.",
    lastUpdated: "Last updated: February 2026",
    legalContactText:
      "For questions regarding these legal terms, contact us at ",
  },
  ar: {
    heroTag: "الشفافية والثقة",
    heroTitle: "الإشعار ",
    heroTitleHighlight: "القانوني",
    companyInfoTitle: "معلومات ",
    companyInfoHighlight: "الشركة",
    companyNameLabel: "اسم الشركة:",
    companyNameValue: "هايدرافيت ستوديو ذ.م.م",
    tradeLicenseLabel: "الرخصة التجارية:",
    tradeLicenseValue: "دائرة الاقتصاد والسياحة في دبي",
    registeredAddressLabel: "العنوان المسجل:",
    registeredAddressValue:
      "نخيل مول، الطابق الثاني، نخلة جميرا، دبي، الإمارات العربية المتحدة",
    emailLabel: "البريد الإلكتروني:",
    phoneLabel: "الهاتف:",
    termsTitle: "شروط ",
    termsHighlight: "الاستخدام",
    termsP1:
      "بدخولك واستخدامك لموقع هايدرافيت ستوديو (www.hydrafitstudio.com)، فإنك توافقين وتلتزمين بشروط وأحكام هذه الاتفاقية.",
    termsP2:
      "جميع المحتويات على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والصور والبرمجيات، هي ملك لشركة هايدرافيت ستوديو ذ.م.م ومحمية بموجب قوانين حقوق النشر في الإمارات والقوانين الدولية.",
    termsP3:
      "تحتفظ هايدرافيت ستوديو بالحق في تعديل هذه الشروط في أي وقت. يُعتبر الاستمرار في استخدام الموقع بعد إجراء التعديلات قبولاً بالشروط المعدّلة.",
    termsP4:
      "الأسعار وجداول الحصص والتوافر المعروضة على هذا الموقع قابلة للتغيير دون إشعار مسبق. على الرغم من حرصنا على ضمان الدقة، لا تضمن هايدرافيت ستوديو أن جميع المعلومات محدّثة في جميع الأوقات.",
    privacyTitle: "سياسة ",
    privacyHighlight: "الخصوصية",
    privacySection1Title: "١. المعلومات التي نجمعها",
    privacySection1P1:
      "نجمع المعلومات التي تقدمينها مباشرة، بما في ذلك اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وتفاصيل الدفع عند حجز الحصص أو شراء العضويات أو التواصل معنا.",
    privacySection1P2:
      "قد نجمع أيضاً بيانات تقنية تلقائياً، مثل عنوان IP الخاص بك ونوع المتصفح ومعلومات الجهاز وسلوك التصفح من خلال ملفات تعريف الارتباط والتقنيات المماثلة.",
    privacySection2Title: "٢. كيف نستخدم معلوماتك",
    privacySection2Items: [
      "لمعالجة الحجوزات وإدارة عضويتك",
      "للتواصل بشأن جداول الحصص والعروض الترويجية والتحديثات",
      "لتحسين خدماتنا وتخصيص تجربتك",
      "للامتثال للالتزامات القانونية بموجب قانون الإمارات",
      "لمعالجة المدفوعات بأمان عبر مزودي خدمات الدفع لدينا",
    ],
    privacySection3Title: "٣. حماية البيانات",
    privacySection3P:
      "نطبّق إجراءات أمنية وفقاً لمعايير الصناعة لحماية بياناتك الشخصية. جميع معاملات الدفع مشفّرة باستخدام تقنية SSL. نلتزم بالمرسوم الاتحادي بقانون رقم ٤٥ لسنة ٢٠٢١ بشأن حماية البيانات الشخصية ولوائحه التنفيذية.",
    privacySection4Title: "٤. مشاركة البيانات",
    privacySection4P:
      "لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك البيانات مع مزودي خدمات موثوقين يساعدون في تشغيل موقعنا أو معالجة المدفوعات أو خدمتك، شريطة موافقتهم على الحفاظ على سرية هذه المعلومات.",
    privacySection5Title: "٥. ملفات تعريف الارتباط",
    privacySection5P:
      "يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح. ملفات تعريف الارتباط هي ملفات صغيرة تُخزّن على جهازك تساعدنا في فهم كيفية تفاعلك مع موقعنا. يمكنك التحكم في تفضيلات ملفات تعريف الارتباط عبر إعدادات المتصفح. قد يؤثر تعطيل ملفات تعريف الارتباط على بعض وظائف الموقع.",
    privacySection6Title: "٦. حقوقك",
    privacySection6Items: [
      "الاطلاع على البيانات الشخصية التي نحتفظ بها عنك",
      "طلب تصحيح البيانات غير الدقيقة",
      "طلب حذف بياناتك الشخصية",
      "سحب الموافقة على الاتصالات التسويقية",
      "طلب نقل البيانات حيثما ينطبق ذلك",
    ],
    privacySection6P: "لممارسة أي من هذه الحقوق، تواصلي معنا على ",
    bookingTitle: "سياسة الحجز ",
    bookingHighlight: "والإلغاء",
    bookingP1:
      "جميع حجوزات الحصص تخضع للتوافر. يمكن إجراء الحجوزات عبر موقعنا الإلكتروني أو تطبيق الهاتف أو مباشرة في الاستوديو.",
    bookingP2:
      "يجب إجراء الإلغاء قبل ٦ ساعات على الأقل من موعد الحصة المحدد. الإلغاء المتأخر أو عدم الحضور سيؤدي إلى خصم حصة من باقتك.",
    bookingP3:
      "باقات الحصص صالحة للمدة المحددة وقت الشراء وغير قابلة للتحويل. الباقات المنتهية لا يمكن استردادها أو تمديدها.",
    bookingP4:
      "العضويات الشهرية غير المحدودة تُجدد تلقائياً ما لم يتم إلغاؤها قبل ٧ أيام على الأقل من تاريخ التجديد.",
    liabilityTitle: "إخلاء ",
    liabilityHighlight: "المسؤولية",
    liabilityP1:
      "المشاركة في حصص اللياقة المائية تكون على مسؤوليتك الخاصة. بحجزك لحصة، تؤكدين أنك في حالة بدنية مناسبة للمشاركة وأنك أفصحتِ عن أي حالات صحية ذات صلة لفريقنا.",
    liabilityP2:
      "لا تتحمل هايدرافيت ستوديو المسؤولية عن أي إصابة أو خسارة أو ضرر ناتج عن المشاركة في حصصنا أو استخدام مرافقنا، إلا في الحالات التي لا يمكن فيها استبعاد هذه المسؤولية بموجب القانون.",
    liabilityP3:
      "ننصح باستشارة أخصائي رعاية صحية قبل البدء في أي برنامج لياقة جديد، خاصة إذا كانت لديكِ حالات صحية سابقة.",
    lastUpdated: "آخر تحديث: فبراير ٢٠٢٦",
    legalContactText:
      "للاستفسارات حول هذه الشروط القانونية، تواصلي معنا على ",
  },
} as const;

export default function LegalPageContent() {
  const locale = useLocale();
  const t = text[locale];

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="pt-32 pb-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-tiffany text-xs uppercase tracking-[0.3em] mb-6">
            {t.heroTag}
          </span>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl tracking-wide leading-none">
            {t.heroTitle}
            <span className="text-tiffany">{t.heroTitleHighlight}</span>
          </h1>
        </div>
      </section>

      {/* ====== LEGAL CONTENT ====== */}
      <section className="py-16 pb-32 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Company Information */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6">
              {t.companyInfoTitle}
              <span className="text-tiffany">{t.companyInfoHighlight}</span>
            </h2>
            <div className="space-y-3 text-gray leading-relaxed">
              <p>
                <span className="text-white font-semibold">
                  {t.companyNameLabel}
                </span>{" "}
                {brandify(t.companyNameValue)}
              </p>
              <p>
                <span className="text-white font-semibold">
                  {t.tradeLicenseLabel}
                </span>{" "}
                {t.tradeLicenseValue}
              </p>
              <p>
                <span className="text-white font-semibold">
                  {t.registeredAddressLabel}
                </span>{" "}
                {t.registeredAddressValue}
              </p>
              <p>
                <span className="text-white font-semibold">
                  {t.emailLabel}
                </span>{" "}
                <a
                  href="mailto:legal@hydrafitstudio.com"
                  className="text-tiffany hover:underline"
                >
                  legal@hydrafitstudio.com
                </a>
              </p>
              <p>
                <span className="text-white font-semibold">
                  {t.phoneLabel}
                </span>{" "}
                +971 4 XXX XXXX
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-white/10 mb-16" />

          {/* Terms of Use */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6">
              {t.termsTitle}
              <span className="text-tiffany">{t.termsHighlight}</span>
            </h2>
            <div className="space-y-4 text-gray leading-relaxed">
              <p>{brandify(t.termsP1)}</p>
              <p>{brandify(t.termsP2)}</p>
              <p>{brandify(t.termsP3)}</p>
              <p>{brandify(t.termsP4)}</p>
            </div>
          </div>

          <div className="w-full h-px bg-white/10 mb-16" />

          {/* Privacy Policy */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6">
              {t.privacyTitle}
              <span className="text-tiffany">{t.privacyHighlight}</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {t.privacySection1Title}
                </h3>
                <div className="space-y-2 text-gray leading-relaxed">
                  <p>{t.privacySection1P1}</p>
                  <p>{t.privacySection1P2}</p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {t.privacySection2Title}
                </h3>
                <ul className="space-y-2 text-gray leading-relaxed list-disc list-inside">
                  {t.privacySection2Items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {t.privacySection3Title}
                </h3>
                <p className="text-gray leading-relaxed">
                  {t.privacySection3P}
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {t.privacySection4Title}
                </h3>
                <p className="text-gray leading-relaxed">
                  {t.privacySection4P}
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {t.privacySection5Title}
                </h3>
                <p className="text-gray leading-relaxed">
                  {t.privacySection5P}
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {t.privacySection6Title}
                </h3>
                <ul className="space-y-2 text-gray leading-relaxed list-disc list-inside">
                  {t.privacySection6Items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray leading-relaxed mt-2">
                  {t.privacySection6P}
                  <a
                    href="mailto:privacy@hydrafitstudio.com"
                    className="text-tiffany hover:underline"
                  >
                    privacy@hydrafitstudio.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-white/10 mb-16" />

          {/* Booking & Cancellation Policy */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6">
              {t.bookingTitle}
              <span className="text-tiffany">{t.bookingHighlight}</span>
            </h2>
            <div className="space-y-4 text-gray leading-relaxed">
              <p>{t.bookingP1}</p>
              <p>{t.bookingP2}</p>
              <p>{t.bookingP3}</p>
              <p>{t.bookingP4}</p>
            </div>
          </div>

          <div className="w-full h-px bg-white/10 mb-16" />

          {/* Liability Disclaimer */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6">
              {t.liabilityTitle}
              <span className="text-tiffany">{t.liabilityHighlight}</span>
            </h2>
            <div className="space-y-4 text-gray leading-relaxed">
              <p>{t.liabilityP1}</p>
              <p>{brandify(t.liabilityP2)}</p>
              <p>{t.liabilityP3}</p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray">{t.lastUpdated}</p>
            <p className="text-sm text-gray mt-2">
              {t.legalContactText}
              <a
                href="mailto:legal@hydrafitstudio.com"
                className="text-tiffany hover:underline"
              >
                legal@hydrafitstudio.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
