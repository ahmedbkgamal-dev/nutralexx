"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Menu,
  X,
  Shield,
  Clock,
  TrendingUp,
  FileText,
  Lock,
  Pill,
  Droplet,
  Box,
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function NeutrexLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    dosageForm: "",
    quantity: "",
    description: "",
  });

  // NOTE: Removed Facebook Pixel & Google Analytics injections per user's request.

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // NOTE: Removed fbq('track','Lead') call per user's request.
    alert("تم إرسال طلبك بنجاح! سنتواصل معك قريباً");
  };

  const whyChooseUs = [
    {
      icon: Box,
      title: "حلول متكاملة من الألف للياء",
      description:
        "نقدم خدمات كاملة من تطوير التركيبة وحتى التسليم النهائي على الرف",
    },
    {
      icon: Shield,
      title: "امتثال كامل للمعايير الدولية",
      description: "التزام صارم بـ GMP وISO وHACCP وجميع التراخيص المطلوبة",
    },
    {
      icon: TrendingUp,
      title: "مرونة في حجم الدُفعات",
      description: "نلبي احتياجاتك سواء كانت كميات صغيرة للاختبار أو إنتاج ضخم",
    },
    {
      icon: Clock,
      title: "وقت للتسويق أسرع",
      description: "عمليات مُحسّنة لتسريع الوصول إلى السوق وتحقيق ميزة تنافسية",
    },
    {
      icon: FileText,
      title: "شفافية وتقارير دورية",
      description: "تحديثات مستمرة في كل مرحلة مع تقارير مفصلة عن الجودة",
    },
    {
      icon: Lock,
      title: "سرية تامة ومضمونة",
      description: "اتفاقيات NDA صارمة لحماية تركيباتك ومعلوماتك التجارية",
    },
  ];

  const capabilities = [
    { type: "أقراص (Tablets)", capacity: "200 مليون قرص/سنوياً", icon: Pill },
    {
      type: "كبسولات (Capsules)",
      capacity: "150 مليون كبسولة/سنوياً",
      icon: Pill,
    },
    {
      type: "مساحيق (Powders)",
      capacity: "50 طن/سنوياً",
      icon: Sparkles,
    },
    { type: "سوائل (Liquids)", capacity: "10 مليون زجاجة/سنوياً", icon: Droplet },
    { type: "كريمات (Creams)", capacity: "5 مليون أنبوب/سنوياً", icon: Box },
    { type: "ساشيه (Sachets)", capacity: "100 مليون كيس/سنوياً", icon: Box },
  ];

  const services = [
    {
      title: "البحث والتطوير (R&D)",
      description:
        "فريق متخصص لتطوير تركيبات مبتكرة وآمنة تلبي احتياجات السوق المستهدف",
    },
    {
      title: "التسجيل والامتثال",
      description:
        "إدارة كاملة لعمليات التسجيل الدوائي والحصول على الموافقات التنظيمية",
    },
    {
      title: "التصنيع والتعبئة",
      description: "خطوط إنتاج حديثة بأعلى معايير الجودة والكفاءة الإنتاجية",
    },
    {
      title: "التغليف والعلامة التجارية",
      description: "تصميم وطباعة عبوات احترافية تعكس هوية علامتك التجارية",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "اتفاقية السرية (NDA)",
      description: "توقيع اتفاقية سرية لحماية معلوماتك وتركيباتك",
    },
    {
      number: "2",
      title: "تطوير الصياغة",
      description: "تصميم التركيبة المثالية مع الاختبارات المعملية",
    },
    {
      number: "3",
      title: "الاعتماد والموافقة",
      description: "مراجعة واعتماد العينات والمواصفات النهائية",
    },
    {
      number: "4",
      title: "التسجيل الدوائي",
      description: "إدارة عملية التسجيل لدى الجهات التنظيمية",
    },
    {
      number: "5",
      title: "التصنيع والإنتاج",
      description: "بدء الإنتاج وفق أعلى معايير الجودة",
    },
    {
      number: "6",
      title: "التسليم والشحن",
      description: "تغليف وشحن المنتجات إلى وجهتك المحددة",
    },
  ];

  const packagingTypes = [
    {
      name: "بليستر (Blister)",
      description: "عبوات بليستر للأقراص والكبسولات",
    },
    { name: "HDPE", description: "عبوات بلاستيكية عالية الكثافة للمساحيق" },
    { name: "Stick-Pack", description: "أكياس أحادية الجرعة للمساحيق والحبيبات" },
    { name: "أنابيب (Tubes)", description: "أنابيب للكريمات والجل" },
  ];

  const faqs = [
    {
      question: "ما هو الحد الأدنى لكمية الطلب (MOQ)؟",
      answer:
        "يختلف الحد الأدنى حسب نوع المنتج والشكل الدوائي. للأقراص والكبسولات عادة يبدأ من 50,000 وحدة، بينما المساحيق من 500 كجم. يمكننا مناقشة احتياجاتك الخاصة.",
    },
    {
      question: "هل تقدمون خدمة Private Label؟",
      answer:
        "نعم، نقدم خدمة Private Label كاملة تشمل التصنيع والتعبئة والتغليف بعلامتك التجارية الخاصة، مع إمكانية تصميم العبوات حسب هويتك البصرية.",
    },
    {
      question: "كيف تحمون سرية التركيبات؟",
      answer:
        "نوقع اتفاقية سرية (NDA) قانونية ملزمة قبل بدء أي مشروع، ولدينا بروتوكولات أمان صارمة لحماية جميع المعلومات والتركيبات الخاصة بعملائنا.",
    },
    {
      question: "هل تساعدون في التسجيل الدوائي؟",
      answer:
        "نعم، لدينا فريق متخصص في الشؤون التنظيمية يساعدك في إعداد الملفات وإتمام إجراءات التسجيل لدى الجهات المختصة في بلدك المستهدف.",
    },
    {
      question: "كم يستغرق إنتاج وتسليم الطلب؟",
      answer:
        "يعتمد على تعقيد المنتج ووضع التسجيل. في المتوسط، من 8-16 أسبوعاً من اعتماد العينة النهائية حتى التسليم، شاملة التصنيع والتعبئة والشحن.",
    },
  ];

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Tajawal', sans-serif" }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1
                className="text-2xl font-black"
                style={{ color: "#D4AF37" }}
              >
                نيوترا ليكس
              </h1>
            </div>

            <nav className="hidden md:block">
              <div className="flex items-baseline space-x-8 space-x-reverse">
                <a
                  href="#why-us"
                  className="text-foreground transition-colors hover:text-[#D4AF37]"
                >
                  لماذا نيوترا ليكس
                </a>
                <a
                  href="#capabilities"
                  className="text-foreground transition-colors hover:text-[#D4AF37]"
                >
                  قدراتنا
                </a>
                <a
                  href="#services"
                  className="text-foreground transition-colors hover:text-[#D4AF37]"
                >
                  خدماتنا
                </a>
                <a
                  href="#rfq"
                  className="text-foreground transition-colors hover:text-[#D4AF37]"
                >
                  طلب عرض سعر
                </a>
              </div>
            </nav>

            <div className="hidden md:block">
              <Button
                className="text-white hover:opacity-90"
                style={{ backgroundColor: "#D4AF37" }}
              >
                اتصل بنا
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-[#D4AF37]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 border-top border-border px-2 pb-3 pt-2">
                <a
                  href="#why-us"
                  className="block px-3 py-2 text-foreground hover:text-[#D4AF37]"
                >
                  لماذا نيوترا ليكس
                </a>
                <a
                  href="#capabilities"
                  className="block px-3 py-2 text-foreground hover:text-[#D4AF37]"
                >
                  قدراتنا
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-foreground hover:text-[#D4AF37]"
                >
                  خدماتنا
                </a>
                <a
                  href="#rfq"
                  className="block px-3 py-2 text-foreground hover:text-[#D4AF37]"
                >
                  طلب عرض سعر
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-muted/30 to-background py-20 lg:py-32">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
              نيوترا ليكس — شريكك الموثوق لتصنيع الأدوية والمكمّلات الغذائية{" "}
              <span style={{ color: "#D4AF37" }}>
                (OEM/ODM/Private Label)
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              من الفكرة إلى الرفّ: تطوير تركيبات، تسجيل، تصنيع، تعبئة وتغليف،
              ولوجستيات — بمعايير جودة عالمية وخصوصية كاملة
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="px-8 py-6 text-lg text-white hover:opacity-90"
                style={{ backgroundColor: "#D4AF37" }}
              >
                اطلب عرض سعر الآن
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg"
                style={{ borderColor: "#D4AF37", color: "#D4AF37" }}
                onClick={() =>
                  window.open("https://wa.me/966536446506", "_blank")
                }
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                تواصل عبر واتساب
              </Button>
            </div>

            <div className="mt-12">
              <p className="mb-4 text-sm text-muted-foreground">
                موثوق من قبل أكثر من 100 شركة في الشرق الأوسط وأفريقيا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="bg-muted/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-foreground sm:text-4xl">
              لماذا تختارنا؟
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              نجمع بين الخبرة والجودة والمرونة لنكون شريكك المثالي
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="border-border transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "#D4AF37", opacity: 0.1 }}
                  >
                    <item.icon className="h-6 w-6" style={{ color: "#D4AF37" }} />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section id="capabilities" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-foreground sm:text-4xl">
              قدراتنا التصنيعية
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              خطوط إنتاج متطورة بطاقات عالية تلبي احتياجاتك
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, index) => (
              <Card
                key={index}
                className="border-border bg-muted/10 text-center transition-all hover:scale-105"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <cap.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {cap.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-2xl font-black"
                    style={{ color: "#D4AF37" }}
                  >
                    {cap.capacity}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-muted/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-foreground sm:text-4xl">
              خدماتنا المتكاملة
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              حلول شاملة من التطوير حتى التسليم
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Shield className="mx-auto mb-6 h-16 w-16" style={{ color: "#D4AF37" }} />
            <h2 className="mb-6 text-3xl font-black text-foreground sm:text-4xl">
              الجودة والاعتمادات
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
              نلتزم بأعلى المعايير العالمية في كل مرحلة من مراحل التصنيع. مصنعنا
              معتمد من:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <div
                  className="mb-2 flex h-20 w-20 items-center justify-center rounded-full text-2xl font-black text-white"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  GMP
                </div>
                <p className="text-sm text-muted-foreground">
                  ممارسات التصنيع الجيدة
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="mb-2 flex h-20 w-20 items-center justify-center rounded-full text-2xl font-black text-white"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  ISO
                </div>
                <p className="text-sm text-muted-foreground">
                  الأيزو 9001 و 22000
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="mb-2 flex h-20 w-20 items-center justify-center rounded-full text-2xl font-black text-white"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  HACCP
                </div>
                <p className="text-sm text-muted-foreground">
                  تحليل المخاطر ونقاط التحكم الحرجة
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-foreground sm:text-4xl">
              خطوات العمل معنا
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              عملية واضحة وشفافة من البداية للنهاية
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-border text-center">
                <CardHeader>
                  <div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-3xl font-black text-white"
                    style={{ backgroundColor: "#D4AF37" }}
                  >
                    {step.number}
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-foreground sm:text-4xl">
              أنواع التغليف المتاحة
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              خيارات تغليف متنوعة تناسب كل أنواع المنتجات
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden border-border">
              <div className="h-48 w-full bg-muted">
                <img
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Professional pharmaceutical blister packaging with aluminum foil and transparent plastic showing tablets inside, clean white medical background&id=uwgulf1@gmail.com&customer_id=cus_TEjSdAPkwFiEbS"
                  alt="عبوة بليستر احترافية للأدوية مع رقائق الألمنيوم والبلاستيك الشفاف تظهر الأقراص بداخلها على خلفية طبية بيضاء نظيفة"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-center">
                  {packagingTypes[0].name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {packagingTypes[0].description}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border">
              <div className="h-48 w-full bg-muted">
                <img
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=High density polyethylene HDPE white plastic bottle container for pharmaceutical powder supplements with secure cap on clean medical background&id=uwgulf1@gmail.com&customer_id=cus_TEjSdAPkwFiEbS"
                  alt="عبوة بلاستيكية بيضاء من البولي إيثيلين عالي الكثافة HDPE لمساحيق المكملات الدوائية مع غطاء محكم على خلفية طبية نظيفة"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-center">
                  {packagingTypes[1].name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {packagingTypes[1].description}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border">
              <div className="h-48 w-full bg-muted">
                <img
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Modern stick pack sachets for single dose powder supplements arranged neatly showing sealed aluminum foil packaging on white medical background&id=uwgulf1@gmail.com&customer_id=cus_TEjSdAPkwFiEbS"
                  alt="أكياس ستيك باك حديثة للمساحيق أحادية الجرعة مرتبة بشكل أنيق تظهر التغليف المحكم برقائق الألمنيوم على خلفية طبية بيضاء"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-center">
                  {packagingTypes[2].name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {packagingTypes[2].description}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border">
              <div className="h-48 w-full bg-muted">
                <img
                  src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Pharmaceutical cream tubes with screw caps for topical ointments and gels displayed vertically on clean white medical surface&id=uwgulf1@gmail.com&customer_id=cus_TEjSdAPkwFiEbS"
                  alt="أنابيب كريم دوائية مع أغطية لولبية للمراهم والجل الموضعية معروضة عمودياً على سطح طبي أبيض نظيف"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-center">
                  {packagingTypes[3].name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {packagingTypes[3].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-foreground sm:text-4xl">
              الأسئلة الشائعة
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              إجابات على أكثر الأسئلة تكراراً
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold">
                      {faq.question}
                    </CardTitle>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                      style={{ color: "#D4AF37" }}
                    />
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <p className="leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ Form */}
      <section id="rfq" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-foreground sm:text-4xl">
              اطلب عرض سعر الآن
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              املأ النموذج وسنتواصل معك خلال 24 ساعة
            </p>
          </div>

          <Card className="mx-auto max-w-2xl border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="fullName">الاسم الكامل *</Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">اسم الشركة *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">رقم الهاتف *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="country">الدولة *</Label>
                    <Input
                      id="country"
                      required
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dosageForm">الشكل الدوائي المطلوب *</Label>
                    <Select
                      value={formData.dosageForm}
                      onValueChange={(value) =>
                        setFormData({ ...formData, dosageForm: value })
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="اختر الشكل الدوائي" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tablets">أقراص</SelectItem>
                        <SelectItem value="capsules">كبسولات</SelectItem>
                        <SelectItem value="powders">مساحيق</SelectItem>
                        <SelectItem value="liquids">سوائل</SelectItem>
                        <SelectItem value="creams">كريمات</SelectItem>
                        <SelectItem value="sachets">ساشيه</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="quantity">الكمية المطلوبة *</Label>
                  <Input
                    id="quantity"
                    required
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className="mt-2"
                    placeholder="مثال: 100,000 وحدة"
                  />
                </div>

                <div>
                  <Label htmlFor="description">
                    وصف قصير للمنتج والمتطلبات
                  </Label>
                  <Textarea
                    id="description"
                    rows={5}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="mt-2"
                    placeholder="أخبرنا عن تفاصيل المنتج، التركيبة المطلوبة، أو أي متطلبات خاصة..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 text-lg text-white"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  إرسال الطلب
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3
                className="mb-4 text-2xl font-black"
                style={{ color: "#D4AF37" }}
              >
                نيوترا ليكس
              </h3>
              <p className="mb-4 text-muted-foreground">
                شريكك الموثوق لتصنيع الأدوية والمكملات الغذائية بمعايير جودة
                عالمية
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-foreground">معلومات التواصل</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="ml-2 mt-1 h-5 w-5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                  <span className="text-muted-foreground">
                    +966 53 644 6506
                  </span>
                </li>
                <li className="flex items-start">
                  <Mail className="ml-2 mt-1 h-5 w-5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                  <span className="text-muted-foreground">
                    info@neutrex.com
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="ml-2 mt-1 h-5 w-5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                  <span className="text-muted-foreground">
                    الرياض، المملكة العربية السعودية
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-foreground">ساعات العمل</h4>
              <p className="mb-2 text-muted-foreground">
                الأحد - الخميس: 8:00 ص - 5:00 م
              </p>
              <p className="text-muted-foreground">
                الجمعة - السبت: مغلق
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between border-t border-border pt-8 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 نيوترا ليكس. جميع الحقوق محفوظة.
            </p>
            <div className="mt-4 flex space-x-6 space-x-reverse sm:mt-0">
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-[#D4AF37]"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-[#D4AF37]"
              >
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/966536446506"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}
