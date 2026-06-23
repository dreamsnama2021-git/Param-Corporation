// app/case-studies/[slug]/page.tsx
import Image from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Building2 } from "lucide-react";
import type { Metadata } from "next";

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface CaseStudyData {
  id: number;
  title: string;
  category: string;
  client: string;
  date: string;
  description: string;
  imageUrl: string;
  slug: string;
  stats: { engagement: string; reach: string; products: string };
  challenge?: string;
  solution?: string;
  results?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  contentHtml: string;
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const caseStudies: Record<string, CaseStudyData> = {
  'diabetic-retinopathy-tool': {
    id: 4,
    title: "Diabetic Retinopathy Patient Awareness Tool",
    category: "Patient Education",
    client: "Leading Pharmaceutical Brand",
    date: "2024-02-10",
    description: "Designed and developed an innovative patient awareness solution for diabetic retinopathy, featuring visual education tools and simulation goggles that helped diabetic patients understand the serious consequences of unmanaged diabetes.",
    imageUrl: "https://pub-735dbd7583d74ad5949115d6fdf77023.r2.dev/Case%20Study/case-study%20(1).png",
    slug: "diabetic-retinopathy-tool",
    stats: { engagement: "+85%", reach: "50K+", products: "1" },
    challenge: "The client needed more than just informational content — they wanted a practical and immersive tool that patients could easily understand and relate to. Additionally, the project involved multiple components requiring careful design, development, and large-scale production within a constrained timeline. An ideal execution window of 45 days was initially planned, but due to project timelines, the overall duration was significantly reduced.",
    solution: "We created a dual-sided educational plate showing anatomical comparison and visual representation of clear vs. patchy vision, combined with simulation goggles that allow patients to experience diabetic retinopathy firsthand.",
    results: [
      "Highly engaging and practical patient education tool delivered",
      "Helped doctors explain the condition more effectively",
      "Created strong patient awareness through real-life experience",
      "Successfully executed within 30 days (compressed from 45 days)",
      "Included outstation distribution with premium quality maintained"
    ],
    testimonial: {
      quote: "The patient awareness tool exceeded our expectations. Patients finally understand the seriousness of diabetic retinopathy through the immersive experience.",
      author: "Dr. Sarah Mehta",
      role: "Medical Affairs Director"
    },
    contentHtml: `
      <p><strong>Overview</strong><br />
      A leading pharmaceutical brand approached us to create a patient awareness solution for diabetic retinopathy.<br />
      The goal was to educate diabetic patients in a simple, impactful, and engaging way.<br />
      We needed to highlight the serious consequences of unmanaged diabetes.<br />
      And help patients understand the importance of timely medication and care.</p>
      
      <p><strong>Objective</strong><br />
      To design a patient education tool that simplifies a complex medical condition.<br />
      Clearly explains the impact of diabetic retinopathy on vision.<br />
      Creates a strong, real-life understanding for patients.<br />
      Encourages patients to take diabetes management seriously.</p>
      
      <p><strong>The Challenge</strong><br />
      The project came with two key challenges.</p>
      
      <p><strong>1. Creating Real Impact</strong><br />
      The client needed more than just informational content.<br />
      They wanted a practical and immersive tool that patients could easily understand and relate to.</p>
      
      <p><strong>2. Tight Timelines with Scale</strong><br />
      The project involved multiple components.<br />
      Each required careful design, development, and large-scale production within a constrained timeline.<br />
      Considering the scope, complexity, and approval processes, an ideal execution window of 45 days was initially planned.<br />
      However, due to project timelines, the overall duration was significantly reduced.<br />
      Through proactive planning, close coordination across teams, and optimized production workflows,<br />
      we streamlined processes at every stage — from design approvals to final fabrication.<br />
      Despite the compressed schedule, we successfully delivered the entire project within 30 days.<br />
      Maintaining premium quality, usability, and a refined finish across all deliverables.</p>
      
      <p><strong>Our Approach</strong><br />
      We combined clear visual explanations with real-life simulation.<br />
      This created a more meaningful and immersive experience.<br />
      The goal was to help patients truly understand the seriousness of the condition.<br />
      Understand the consequences of neglecting medication.<br />
      And realize the importance of timely care and medication.</p>
      
      <p><strong>The Solution</strong><br />
      We developed two key components for maximum impact.</p>
      
      <p><strong>1. Visual Education Tool (Display Plate)</strong><br />
      We designed a dual-sided educational plate.<br />
      Side 1: Anatomical comparison of a healthy eye vs. diabetic retinopathy.<br />
      Side 2: Visual representation of clear vision vs. patchy/blurred vision.<br />
      This helped patients visually understand the condition and its impact.</p>
      
      <p><strong>2. Real-Time Experience (Simulation Goggles)</strong><br />
      To enhance engagement, we introduced simulation goggles.<br />
      One side shows clear vision.<br />
      The other side simulates patchy vision caused by diabetic retinopathy.<br />
      This allowed patients to experience the condition firsthand.<br />
      Making the learning far more impactful and memorable.</p>
      
      <p><strong>Execution</strong><br />
      End-to-end design, prototyping, and production.<br />
      Multiple components developed and assembled.<br />
      Focus on durability, usability, and premium finish.<br />
      Coordinated large-scale production and logistics.<br />
      Despite tight timelines, the project was planned, optimized, and executed efficiently without compromising quality.</p>
      
      <p><strong>The Outcome</strong><br />
      Delivered a highly engaging and practical patient education tool.<br />
      Helped doctors explain the condition more effectively.<br />
      Created strong patient awareness through real-life experience.<br />
      Successfully executed and delivered within committed timelines, including outstation distribution.</p>
      
      <p><strong>Key Impact</strong><br />
      → Improved patient understanding and awareness<br />
      → Enhanced doctor-patient communication<br />
      → Delivered a premium, functional, and scalable solution<br />
      → Strengthened brand communication through meaningful engagement</p>
    `
  },
  'ent-strategy': {
    id: 1,
    title: "Transforming ENT Product Line Strategy",
    category: "Medical Communications",
    client: "Leading Pharma Co.",
    date: "2024-03-15",
    description: "Developed comprehensive medical communication strategy for ENT portfolio, resulting in 40% increase in physician engagement and successful launch of 3 new products.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
    slug: "ent-strategy",
    stats: { engagement: "+40%", reach: "2.5M+", products: "3" },
    challenge: "The client faced declining market share in their ENT portfolio due to increased competition and lack of differentiation in their medical communication approach.",
    solution: "We developed a multi-channel medical communication strategy including interactive scientific content, KOL engagement programs, and digital detailing tools.",
    results: [
      "40% increase in physician engagement across all channels",
      "3 new products successfully launched within 12 months",
      "2.5M+ healthcare professionals reached through digital campaigns",
      "85% of targeted physicians reported improved product understanding",
      "25% reduction in time-to-adoption for new products"
    ],
    testimonial: {
      quote: "Zexcel transformed our medical communication approach. Their strategic insights and execution capabilities exceeded our expectations.",
      author: "Dr. Rajesh Kumar",
      role: "Medical Director, Leading Pharma Co."
    },
    contentHtml: `
      <p>The ENT (Ear, Nose, Throat) therapeutic area presented unique challenges.<br />
      These required a sophisticated approach to medical communications.</p>
      
      <p>Our team worked closely with the client's medical affairs and marketing teams.<br />
      Together, we developed a comprehensive strategy that would resonate with specialists across multiple channels.</p>
      
      <p>We began with a thorough analysis of the competitive landscape and physician preferences.<br />
      Our research revealed that ENT specialists valued peer-to-peer education.<br />
      They also preferred data-driven clinical evidence above traditional marketing approaches.</p>
      
      <p><strong>Key initiatives included:</strong></p>
      <p>→ Developing an interactive digital detailing platform with 3D anatomical models<br />
      → Creating a series of KOL-led webinars reaching 5,000+ specialists<br />
      → Designing patient education materials in 8 regional languages<br />
      → Implementing a real-time analytics dashboard for sales team optimization</p>
      
      <p>The campaign exceeded all initial targets.<br />
      Physician engagement increased by 40%.<br />
      Three new products successfully launched.<br />
      The digital detailing platform achieved a 92% satisfaction rate among healthcare professionals.</p>
      
      <p><strong>Key takeaway:</strong><br />
      This case study demonstrates the power of integrated medical communications.<br />
      By combining scientific rigor with innovative digital tools,<br />
      we helped our client achieve breakthrough results in a competitive market.</p>
    `
  },
  'cardio-digital': {
    id: 2,
    title: "Cardio-Diabetes Digital Campaign",
    category: "Digital Marketing",
    client: "Global Healthcare Brand",
    date: "2023-11-20",
    description: "Executed multi-channel digital campaign targeting cardiologists and diabetologists, featuring interactive content and KOL webinars that drove significant prescription growth.",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop",
    slug: "cardio-digital",
    stats: { engagement: "+65%", reach: "5M+", products: "2" },
    challenge: "The client needed to increase awareness and adoption of their cardio-diabetes portfolio in a highly competitive market with established players dominating physician mindshare.",
    solution: "We created an integrated digital campaign combining virtual KOL symposiums, interactive case studies, and AI-powered content personalization.",
    results: [
      "65% increase in HCP engagement with digital content",
      "5M+ impressions across all digital channels",
      "2 flagship products exceeded prescription targets by 30%",
      "92% of participating physicians rated content as 'highly valuable'",
      "40% increase in repeat visits to digital platform"
    ],
    testimonial: {
      quote: "The digital campaign delivered exceptional results. The personalized content approach significantly improved our physician relationships.",
      author: "Priya Sharma",
      role: "Head of Digital Marketing, Global Healthcare Brand"
    },
    contentHtml: `
      <p>The cardio-diabetes therapeutic area is one of the most competitive segments in healthcare.<br />
      Our client needed a breakthrough digital strategy to differentiate their portfolio.<br />
      They needed to capture physician attention in a crowded market.</p>
      
      <p>We developed a three-pillar approach: Education, Engagement, and Analytics.<br />
      Each pillar was designed to address specific challenges in the physician journey.<br />
      From awareness all the way to prescription.</p>
      
      <p><strong>Digital tools deployed:</strong></p>
      <p>→ AI-powered content recommendation engine for personalized physician journeys<br />
      → Virtual symposium platform hosting 12 KOL events with 3,000+ attendees<br />
      → Interactive case study simulator for clinical decision-making practice<br />
      → Mobile-first micro-learning modules for on-the-go education</p>
      
      <p>The campaign achieved remarkable results.<br />
      65% increase in content engagement.<br />
      5+ million impressions generated across all channels.<br />
      Prescription data showed a 30% increase for the two flagship products.</p>
      
      <p><strong>What we learned:</strong><br />
      Personalization proved to be the most effective driver of engagement.<br />
      Physicians who received tailored content recommendations showed 3x higher engagement rates.<br />
      Compared to those who received generic communications.</p>
    `
  },
  'ortho-market-entry': {
    id: 3,
    title: "Orthopedics Market Entry Strategy",
    category: "Brand Strategy",
    client: "Medical Device Company",
    date: "2024-01-10",
    description: "Comprehensive market analysis and launch strategy for orthopedic implants, including surgeon training programs and patient education materials.",
    imageUrl: "https://images.unsplash.com/photo-1551076805-e1869023e561?w=1200&h=800&fit=crop",
    slug: "ortho-market-entry",
    stats: { engagement: "+120%", reach: "1.8M+", products: "5" },
    challenge: "A medical device company was entering the Indian orthopedic implant market and needed a comprehensive strategy to establish their brand presence.",
    solution: "We conducted extensive market research, developed surgeon education programs, and created patient education materials in 12 languages.",
    results: [
      "120% increase in market awareness within 6 months",
      "1.8M+ patients educated through digital and print materials",
      "5 product lines successfully launched",
      "200+ surgeons trained through workshops",
      "Achieved top 3 market position in key segments"
    ],
    testimonial: {
      quote: "Zexcel's market entry strategy was instrumental in our successful launch. Their understanding of the Indian healthcare landscape is unmatched.",
      author: "Michael Chen",
      role: "VP International Markets, Medical Device Company"
    },
    contentHtml: `
      <p>Entering the Indian orthopedic implant market required more than just product registration.<br />
      The client needed to build trust with surgeons.<br />
      Navigate complex regulatory requirements.<br />
      And educate patients about their innovative implant solutions.</p>
      
      <p>Our approach combined market intelligence with practical implementation support.<br />
      We created a phased launch plan.<br />
      This addressed the unique characteristics of the Indian healthcare ecosystem.</p>
      
      <p><strong>Strategic components included:</strong></p>
      <p>→ Market landscape analysis covering 200+ hospitals across 15 cities<br />
      → Surgeon training program with hands-on cadaveric workshops<br />
      → Patient education campaign in 12 Indian languages<br />
      → Digital platform for continuous surgeon engagement and feedback<br />
      → KOL development program identifying and nurturing 50+ key surgeons</p>
      
      <p>The phased launch strategy resulted in successful market entry.<br />
      Minimal disruption during implementation.<br />
      Within 6 months, the client achieved top 3 market position.<br />
      Surpassing established competitors in their target segments.</p>
      
      <p><strong>Sustainable growth systems:</strong><br />
      Beyond the initial launch, we established systems for ongoing market monitoring.<br />
      Competitor intelligence gathering.<br />
      Continuous surgeon education programs.<br />
      Ensuring long-term growth and market leadership.</p>
    `
  }
};

// ─── STATIC PARAMS ───────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

// ─── METADATA ────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  
  if (!study) return { title: "Case Study" };
  
  return {
    title: study.title,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      images: [study.imageUrl],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.description,
      images: [study.imageUrl],
    },
  };
}

// ─── MAIN PAGE COMPONENT ────────────────────────────────────────────────────
export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) return notFound();

  const dateLabel = new Date(study.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="min-h-screen w-full bg-[var(--clr-white)] text-[var(--clr-text-dark)]">
      <div className="mx-auto max-w-[1500px] px-6 pb-8">
        
        {/* Hero Section */}
        <div className="pt-8 lg:pt-8">
          <h1 
            className="text-3xl lg:text-5xl font-extrabold leading-tight max-w-5xl"
            style={{ color: 'var(--clr-accent)' }}
          >
            {study.title}
          </h1>
          
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--clr-text-muted)' }}>
            <div className="flex items-center gap-2">
              <Building2 size={16} />
              <span className="font-semibold">{study.client}</span>
            </div>
            <span className="inline-flex items-center gap-1">
              <Calendar size={14} /> {dateLabel}
            </span>
          </div>
          
          <p className="mt-4 text-lg leading-relaxed max-w-4xl" style={{ color: 'var(--clr-text-muted)' }}>
            {study.description}
          </p>
        </div>

        {/* Cover Image */}
        <div className="mt-10 rounded-2xl w-[50vw] overflow-hidden" style={{ maxHeight: '70vh' }}>
          <div className="relative h-[70vh]">
            <Image
              src={study.imageUrl}
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Main Content - Enhanced Paragraph Fragments Structure */}
        <div className="mt-12 max-w-none">
          <div 
            className="prose prose-lg max-w-none
              prose-p:text-[var(--clr-text-dark)]
              prose-p:leading-[1.8]
              prose-p:mb-6
              prose-p:text-[1.125rem]
              prose-p:tracking-[0.01em]
              prose-p:max-w-[75ch]
              
              prose-br:block
              prose-br:content-['']
              prose-br:mb-2
              
              prose-strong:text-[var(--clr-accent)]
              prose-strong:font-semibold
              prose-strong:inline-block
              prose-strong:mb-2
              
              [&_p]:space-y-2
              [&_p_br]:mb-1
              [&_p_br]:last:mb-0
              
              [&_p:has(strong)]:mt-8
              [&_p:has(strong)]:mb-4
              [&_p:has(strong)]:first:mt-0
              
              [&_p]:text-[var(--clr-text-muted)]
              [&_p:has(strong)]:text-[var(--clr-text-dark)]
            "
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{ __html: study.contentHtml }} 
          />
        </div>

        {/* Back link */}
        <div className="mt-12">
          <NextLink
            href="/case-study"
            className="text-sm underline underline-offset-4 hover:opacity-80 transition-opacity"
            style={{ color: 'var(--clr-primary)' }}
          >
            ← Back to all case studies
          </NextLink>
        </div>
        
      </div>
    </article>
  );
}