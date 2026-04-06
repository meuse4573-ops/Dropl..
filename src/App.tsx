import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Play, 
  Check, 
  Share2, 
  Layout, 
  Monitor, 
  ArrowUpRight,
  Menu,
  X,
  Globe,
  Upload,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Users,
  Tag,
  Zap,
  Mail,
  BarChart3,
  Wallet,
  Settings,
  LogOut,
  ExternalLink,
  MoreVertical,
  Search,
  Trash2
} from 'lucide-react';

// --- Components ---

const Header = ({ onNavigate }: { onNavigate: (view: 'landing' | 'login' | 'signup') => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="absolute inset-0 backdrop-blur-md bg-black/30 [mask-image:linear-gradient(180deg,black_0%,black_40%,transparent_100%)] pointer-events-none" />
      <div className="page-wrapper flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('landing')}>
            <span className="text-2xl font-title text-white">SponsorAI</span>
            <ChevronRight className="w-4 h-4 text-white rotate-90 group-hover:-rotate-90 transition-transform" />
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {['Why us', 'Features', 'How it works', 'Integrations', 'Creators', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-3 py-1.5 text-sm font-medium text-[#a8a8a8] hover:text-white hover:bg-white/10 rounded-lg transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => onNavigate('login')}
            className="common-button common-button-secondary-glass px-4 py-2 text-sm"
          >
            Log in
          </button>
          <button 
            onClick={() => onNavigate('signup')}
            className="common-button common-button-primary px-4 py-2 text-sm"
          >
            Get started
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ onNavigate }: { onNavigate: (view: 'landing' | 'login' | 'signup') => void }) => (
  <section className="relative pt-32 pb-16 overflow-hidden min-h-[90vh] flex items-center">
    {/* Hero Background Gradient */}
    <div className="hero-gradient" />

    <div className="page-wrapper relative z-10 w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="common-title text-5xl lg:text-7xl mb-6"
          >
            Your AI agent that negotiates brand deals while you create.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#a8a8a8] mb-8 max-w-lg leading-relaxed"
          >
            Stop drowning in DMs and email threads. Our AI researches brands, negotiates rates, and closes deals — automatically. You focus on content, we handle the business.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate('signup')}
                className="common-button common-button-primary px-6 py-3 text-base flex items-center gap-2"
              >
                Get started →
              </button>
              <button className="common-button common-button-secondary-dark px-6 py-3 text-base flex items-center gap-2">
                Watch demo ▷
              </button>
            </div>
            <div className="text-xs text-[#a8a8a8] font-medium">
              Free to join · No credit card required
            </div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full lg:w-1/2 flex justify-end"
        >
          <div className="relative glass-card p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl max-w-md w-full transform lg:translate-x-12">
            <div className="flex items-center justify-between mb-4 pb-2 border-bottom border-white/5">
              <div className="text-[10px] text-white/40 font-mono">sponsorai.co/yourname</div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-blue-500" />
              <div>
                <div className="text-sm font-medium text-white">Your Brand Agent</div>
                <div className="text-[10px] text-white/40">Active Deals · Negotiations · Revenue</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-white">Nike Collaboration</div>
                  <div className="text-[10px] text-white/40">$5,000 · Negotiating</div>
                </div>
                <button className="px-3 py-1 rounded-lg bg-white text-black text-[10px] font-bold">View</button>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-white">Spotify Partnership</div>
                  <div className="text-[10px] text-white/40">$3,500 · Awaiting Approval</div>
                </div>
                <button className="px-3 py-1 rounded-lg bg-white text-black text-[10px] font-bold">View</button>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
              <div className="text-[10px] text-white/40 uppercase tracking-widest">Deal Value Secured</div>
              <div className="text-lg font-title text-white">$12,400 <span className="text-[10px] font-sans opacity-40 font-normal">this month</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Customers = () => (
  <section className="py-16 border-t border-white/5">
    <div className="page-wrapper">
      <p className="text-center text-sm mb-10 flex items-center justify-center gap-2 flex-wrap">
        <span className="font-medium text-[#d9f5fd]">Intelligence powered by</span>
        <span className="font-bold text-white">NeMo Guardrails</span>
        <span className="opacity-30">·</span>
        <span>Built for creators ready to monetize their influence.</span>
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {['TikTok', 'Instagram', 'YouTube', 'Twitter', 'Newsletter', 'Podcast'].map((logo) => (
          <span key={logo} className="text-xl font-title text-white">{logo}</span>
        ))}
      </div>
    </div>
  </section>
);

const Why = () => (
  <section id="why" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://hugo.ai/_ipx/w_2800&f_png/components/home/HomeWhy/background_stars.png" 
        alt="Stars" 
        className="w-full h-full object-cover opacity-50"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="page-wrapper relative z-10">
      <div className="text-center mb-24 relative">
        <h2 className="text-[15vw] lg:text-[18vw] font-title leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/10 via-[#d8e7fd] to-white/10 [text-shadow:0_0_120px_#0745a2] opacity-50">
          Why?
        </h2>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
           <img 
            src="https://hugo.ai/_ipx/_/components/home/HomeWhy/logo_glass.svg" 
            alt="Logo Glass" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Built for the modern creator.", desc: "Old agencies move slow and take 20%. We move at the speed of your content — AI-powered, instant responses, zero bureaucracy." },
          { title: "Grounded in your value.", desc: "Every negotiation is backed by your real audience data. We argue for your worth based on metrics, not guesswork." },
          { title: "Engineered to close deals.", desc: "Our AI doesn't just reply — it persuades. Using principled negotiation tactics to secure better rates and terms." },
          { title: "Transparent by design.", desc: "See every brand researched, every email drafted, every negotiation strategy. You approve everything before it sends." }
        ].map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl text-white mb-4 font-medium">{card.title}</h3>
            <p className="text-[#a8a8a8] leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Solutions = () => (
  <section id="solutions" className="py-24">
    <div className="page-wrapper">
      <h2 className="common-title text-6xl lg:text-8xl mb-20">
        <span className="block">1 AI agent.</span>
        <span className="block opacity-70">Unlimited brand deals.</span>
        <span className="block opacity-40">The whole world sponsoring.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {[
          { icon: <Share2 className="w-8 h-8 text-[#a8a8a8]" />, title: "One inbox. Every opportunity.", desc: "All brand DMs and emails centralized. The AI reads, categorizes, and prioritizes so you never miss a high-value deal." },
          { icon: <Layout className="w-8 h-8 text-[#a8a8a8]" />, title: "Instant research. Every brand.", desc: "Before any reply, the AI deep-researches the brand — PR history, marketing spend, competitor moves, sentiment analysis." },
          { icon: <Monitor className="w-8 h-8 text-[#a8a8a8]" />, title: "Your deals, owned by you.", desc: "Every conversation tracked in your CRM. Never repeat yourself, never miss a follow-up, always know where deals stand." }
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-6">
            {item.icon}
            <div>
              <h3 className="text-white font-medium mb-2">{item.title}</h3>
              <p className="text-[#a8a8a8] leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px w-full bg-white/10 mb-20" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "RESEARCH", title: "Tavily as your intelligence layer.", desc: "Every brand analysis runs through Tavily — real-time web search, news aggregation, and social sentiment. You know more than they expect.", img: "badge_security" },
          { label: "NEGOTIATION", title: "Principled negotiation on autopilot.", desc: "The AI argues for mutual wins but stays firm on your creative control and timeline. No low-ball acceptance — ever.", img: "badge_compliance" },
          { label: "CRM", title: "Relationship memory that never forgets.", desc: "Every touchpoint stored. The AI remembers what you promised, what they offered, and when to follow up for maximum close rate.", img: "badge_hosting" }
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 h-[260px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#707070]">{item.label}</span>
              <img src={`https://hugo.ai/_ipx/s_80x80/components/home/HomeSolutions/${item.img}.svg`} alt={item.label} className="w-16 h-16" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h3 className="text-lg text-white mb-2 font-medium">{item.title}</h3>
              <p className="text-sm text-[#a8a8a8]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-24 bg-white text-black rounded-t-[40px] md:rounded-t-[80px]">
    <div className="page-wrapper">
      <div className="text-center mb-16 md:mb-32 sticky top-[10vh] z-10 py-4 bg-white/80 backdrop-blur-sm">
        <h2 className="common-title text-black text-3xl md:text-6xl mb-4 leading-tight">Everything you need.<br className="md:hidden" /> Nothing you don't.</h2>
        <p className="text-lg md:text-2xl text-black/40 font-title italic">Here is what makes it work.</p>
      </div>

      <div className="relative flex flex-col gap-[60px] md:gap-[120px] pb-32">
        {[
          { color: "bg-[#2c150c]", title: "Research every brand before you reply.", desc: "The AI scans news, social sentiment, competitor sponsorships, and recent PR. You walk into every conversation knowing exactly what they need and what they have paid others." },
          { color: "bg-[#032b35]", title: "Negotiate like you have a team behind you.", desc: "Draft responses that argue your worth using real audience metrics. The AI suggests counter-offers, timeline protections, and creative control clauses — automatically." },
          { color: "bg-[#1d2c0c]", title: "Go live in under 15 minutes. No manager needed.", desc: "Connect your email and DMs. The AI starts categorizing opportunities immediately. No hiring, no training, no 20% agency cut." },
          { color: "bg-[#361e02]", title: "Set your boundaries. Fixed, flexible, or firm.", desc: "Set minimum rates, blocked brands, and non-negotiable terms. The AI enforces your rules in every conversation while staying polite and professional." },
          { color: "bg-[#2c150c]", title: "Build your sponsor pipeline on autopilot.", desc: "Every brand that reaches out is scored 1-10 for fit. High scores get fast responses. Low scores get polite declines. Your time is protected." },
          { color: "bg-[#032b35]", title: "See exactly where your revenue comes from.", desc: "Track every deal in negotiation, every closed contract, every pending payment. Your dashboard shows the full pipeline so you always know what's closing next." },
          { color: "bg-[#1d2c0c]", title: "Your agent updates the moment you do.", desc: "Change your rates, update your media kit, adjust your availability — every active negotiation reflects your new terms instantly." }
        ].map((card, i) => (
          <div 
            key={i} 
            className={`sticky top-[25vh] md:top-[30vh] w-full min-h-[400px] md:min-h-[500px] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl ${card.color} text-white transition-all duration-700 ease-in-out flex items-center justify-center text-center`}
            style={{ 
              zIndex: i + 1,
              transform: `translateY(${i * 16}px)`
            }}
          >
            {/* Content Layer */}
            <div className="relative z-10 p-8 md:p-24 max-w-4xl">
              <h3 className="common-title text-3xl md:text-6xl mb-6 md:mb-10 leading-[1.1] tracking-tight">{card.title}</h3>
              <p className="text-white/80 text-base md:text-2xl leading-relaxed font-sans font-light max-w-3xl mx-auto">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-white text-black border-t border-black/5">
    <div className="page-wrapper">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-3 text-center lg:text-left">
          <h3 className="common-title text-black text-4xl mb-2">Four steps.</h3>
          <p className="text-2xl text-black/50 font-title">From setup to first deal in minutes.</p>
        </div>

        {[
          { step: "01", title: "Connect your channels.", desc: "Link your email, Instagram DMs, and any inbox where brands reach out. The AI monitors everything 24/7 so no opportunity slips through.", img: "feed", accent: true },
          { step: "02", title: "Set your rules.", desc: "Define your minimum rates, preferred brand categories, and non-negotiables. The AI uses these to score opportunities and negotiate on your behalf.", img: "customize" },
          { step: "03", title: "Let the AI work.", desc: "When a brand reaches out, the AI researches them, drafts a response, and negotiates terms. You get a notification to approve before anything sends.", img: "test" },
          { step: "04", title: "Approve and earn.", desc: "Review the AI's work, hit approve, and watch deals close. The AI handles follow-ups, contract reminders, and relationship maintenance.", img: "run", accent: true }
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm shadow-sm ${item.accent ? 'bg-black text-white' : 'bg-[#ebebeb] text-black'}`}>
                {item.step}
              </div>
              <div className="h-px flex-grow bg-[#e0e0e0]" />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">{item.title}</h4>
              <p className="text-[#707070] text-sm leading-relaxed">{item.desc}</p>
            </div>
            <div className="aspect-square bg-[#f5f5f5] rounded-2xl overflow-hidden shadow-inner relative">
              <img 
                src={`https://hugo.ai/_ipx/w_2800&f_png/components/home/HomeHow/${item.img}.webp`} 
                alt={item.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#f5f5f5]/50 pointer-events-none" />
            </div>
          </div>
        ))}

        <div className="lg:col-span-3 flex flex-col items-center text-center mt-12">
          <h3 className="common-title text-black text-3xl mb-2">Ready to automate your deals?</h3>
          <p className="text-black/50 text-xl font-title mb-8">Try it yourself in under 5 minutes.</p>
          <div className="flex flex-col items-center gap-4">
            <button className="common-button common-button-primary px-8 py-4 text-lg flex items-center gap-2">
              Get started →
            </button>
            <div className="text-xs text-[#707070]">
              Free to join · No credit card required
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section id="case-studies" className="py-24 bg-black text-white">
    <div className="page-wrapper">
      <h2 className="common-title text-5xl mb-4">Real creators, real deals.</h2>
      <p className="text-2xl text-white/50 font-title mb-20">See what happens when negotiation gets intelligent.</p>

      <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[560px]">
        {[
          { 
            name: "Priya Sharma", 
            role: "Lifestyle Creator", 
            company: "SponsorAI User", 
            quote: "I closed my first $5K brand deal 3 days after setting this up. The AI negotiated a 40% higher rate than I would have asked for myself.",
            img: "afs_foil"
          },
          { 
            name: "Marcus Chen", 
            role: "Tech Reviewer", 
            company: "SponsorAI User", 
            quote: "The research feature is insane. The AI knew the brand's Q3 marketing goals before I even replied. I sounded like I had a whole team behind me.",
            img: "emma"
          },
          { 
            name: "Sofia Rodriguez", 
            role: "Fitness Coach", 
            company: "SponsorAI User", 
            quote: "I used to spend 4 hours a day on brand emails. Now I spend 15 minutes reviewing what the AI drafted. My content quality went up, my income doubled.",
            img: "spidervo"
          }
        ].map((item, i) => (
          <div 
            key={i}
            className="group relative flex-1 hover:flex-[2.5] transition-all duration-500 ease-out rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={`https://hugo.ai/_ipx/w_2800&f_png/components/home/HomeCases/${item.img}.webp`} 
                alt={item.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>

            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="text-white font-title text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.company}
                </div>
                <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="max-w-xl">
                <p className="text-white text-lg leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white">{item.name}</span>
                  <span className="text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">· {item.role}</span>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-md [mask-image:linear-gradient(0deg,black_0%,black_25%,transparent_100%)] pointer-events-none transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = ({ onNavigate }: { onNavigate: (view: 'landing' | 'login' | 'signup') => void }) => {
  const plans = [
    {
      name: "Starter",
      badge: "Free",
      price: "$0",
      subtext: "5% of closed deals, no monthly fee",
      features: [
        { text: "AI email monitoring & triage", included: true },
        { text: "Basic brand research (5/month)", included: true },
        { text: "Draft response generation", included: true },
        { text: "Deal value tracking", included: true },
        { text: "Up to 10 active negotiations", included: true },
        { text: "Advanced negotiation tactics (locked)", included: false },
        { text: "CRM relationship history (locked)", included: false },
        { text: "Priority brand scoring (locked)", included: false },
      ],
      cta: "Get started →",
      note: "No credit card required",
      featured: false,
      order: "order-2 md:order-1"
    },
    {
      name: "Pro",
      badge: "Most Popular",
      price: "$49",
      subtext: "per month + 3% of closed deals",
      features: [
        { text: "Everything in Starter", included: true },
        { text: "Unlimited brand research", included: true },
        { text: "Advanced negotiation tactics", included: true },
        { text: "Full CRM with relationship memory", included: true },
        { text: "Brand fit scoring (1-10)", included: true },
        { text: "Multi-channel DM monitoring", included: true },
        { text: "Contract deadline tracking", included: true },
        { text: "Priority support", included: true },
      ],
      cta: "Get started →",
      note: "No credit card required",
      featured: true,
      order: "order-1 md:order-2"
    },
    {
      name: "Business",
      badge: "Business",
      price: "$149",
      subtext: "per month + 1% of closed deals",
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Lowest success fee — only 1%", included: true },
        { text: "Custom negotiation playbooks", included: true },
        { text: "Team collaboration (3 seats)", included: true },
        { text: "White-label agent responses", included: true },
        { text: "API access for custom workflows", included: true },
        { text: "Dedicated account strategist", included: true },
        { text: "Early access to new AI models", included: true },
      ],
      cta: "Get started →",
      note: "No credit card required",
      featured: false,
      order: "order-3 md:order-3"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-[#fde2d9] to-white text-black rounded-t-[24px]">
      <div className="page-wrapper">
        <div className="text-center mb-20">
          <h2 className="common-title text-black text-5xl mb-4">No surprises, no hidden fees.</h2>
          <p className="text-2xl text-black/50 font-title">Pricing that makes sense as you earn.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`flex flex-col glass-card p-8 text-white border-none relative ${plan.order} ${plan.featured ? 'bg-[#032b35] scale-105 z-10 shadow-2xl ring-2 ring-white/20' : 'bg-[#1c1c1c]'}`}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-title mb-1">{plan.name}</h3>
                  <p className="text-xs font-medium opacity-60">{plan.name} plan</p>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-lg text-xs font-medium">
                  {plan.badge}
                </div>
              </div>

              <div className="mb-8">
                <div className="font-title text-6xl mb-2">{plan.price}</div>
                <div className="text-sm opacity-60">{plan.subtext}</div>
              </div>

              <div className="flex-grow mb-10">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex gap-3 text-sm ${feature.included ? 'text-white' : 'text-white/30'}`}>
                      {feature.included ? (
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <button 
                  onClick={() => onNavigate('signup')}
                  className={`common-button w-full py-4 text-lg flex items-center justify-center gap-2 ${plan.featured ? 'common-button-primary' : 'bg-white text-black hover:bg-white/90'}`}
                >
                  {plan.cta}
                </button>
                <p className="text-center text-[10px] opacity-40 mt-4 uppercase tracking-widest">{plan.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = ({ onNavigate }: { onNavigate: (view: 'landing' | 'login' | 'signup') => void }) => (
  <section id="faq" className="py-24 bg-black text-white">
    <div className="page-wrapper">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <h2 className="common-title text-5xl mb-4">Got questions?</h2>
          <p className="text-2xl text-white/50 font-title mb-8">We have the answers.</p>
          <button 
            onClick={() => onNavigate('signup')}
            className="common-button common-button-primary px-6 py-3 text-sm flex items-center gap-2"
          >
            Ask us a question →
          </button>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-12">
          {[
            { q: "Is it really free to start?", a: "Yes. Connect your email, set your preferences, and start receiving AI-drafted responses with zero monthly cost. We only take a small percentage when you actually close a deal." },
            { q: "How does the AI know what to say?", a: "You set your rules — minimum rates, brand categories, tone preferences. The AI researches each brand and drafts responses that match your voice and protect your interests. You approve everything before it sends." },
            { q: "What channels does it monitor?", a: "Currently email and Instagram DMs. We're adding Twitter/X DMs, TikTok messages, and LinkedIn soon. All centralized in one dashboard." },
            { q: "Can I edit what the AI writes?", a: "Absolutely. Every draft is presented for your approval. Edit it, approve it, or reject it. You're always in control." },
            { q: "What if I already have a manager?", a: "Many creators use SponsorAI alongside their manager to handle initial outreach and negotiation, freeing the manager to focus on high-value partnerships and strategy." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4 overflow-hidden">
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex justify-end"
              >
                <div className="bg-black border border-[#383838] rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
                  <p className="text-white text-lg">{item.q}</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="flex justify-start"
              >
                <div className="bg-gradient-to-b from-[#1c1c1c] to-[#383838] rounded-2xl rounded-tl-sm p-4 max-w-[80%] shadow-xl border border-white/5">
                  <p className="text-white text-lg">{item.a}</p>
                </div>
              </motion.div>
              {i < 4 && <div className="h-px w-full bg-white/10 mt-8" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-24 pb-12 bg-white text-black">
    <div className="page-wrapper">
      <div className="mb-24 text-center">
        <h2 className="common-title text-black text-4xl md:text-6xl mb-6">Start closing brand deals today.</h2>
        <p className="text-xl text-black/50 mb-10 max-w-2xl mx-auto">Join thousands of creators automating their sponsorships. Early signups get priority access and locked-in pricing at launch.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="common-button common-button-primary px-8 py-4 text-lg">Get started →</button>
          <button className="common-button bg-[#ebebeb] text-black px-8 py-4 text-lg">Watch demo ▷</button>
        </div>
        <p className="mt-4 text-xs text-black/40">Free to join · No credit card required</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-sm uppercase tracking-widest text-black/30">Product</p>
          {['Why us', 'Features', 'How it works', 'Integrations', 'Pricing'].map(item => (
            <a key={item} href="#" className="font-title text-2xl text-[#707070] hover:text-black transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-sm uppercase tracking-widest text-black/30">Company</p>
          {['About', 'Blog', 'Changelog', 'Contact'].map(item => (
            <a key={item} href="#" className="font-title text-2xl text-[#707070] hover:text-black transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-sm uppercase tracking-widest text-black/30">Social</p>
          {['X (Twitter)', 'TikTok', 'Instagram', 'LinkedIn'].map(item => (
            <a key={item} href="#" className="font-title text-2xl text-[#707070] hover:text-black transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#707070] text-sm">Have questions?</p>
          <button className="common-button bg-[#ebebeb] text-black px-6 py-3 text-sm flex items-center justify-between w-full">
            Contact us <ChevronRight className="w-4 h-4 text-[#8c8c8c]" />
          </button>
        </div>
      </div>

      <div className="border-t border-black/10 pt-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#8c8c8c]">
          <div className="flex items-center gap-2 bg-[#ebebeb] px-3 py-1.5 rounded-lg text-black cursor-pointer">
            <span>🇺🇸</span> English (United States) <ChevronRight className="w-3 h-3 rotate-90" />
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black">Terms & conditions</a>
            <span>·</span>
            <a href="#" className="hover:text-black">Privacy policy</a>
          </div>
          <div>© 2025 SponsorAI. All rights reserved.</div>
        </div>
        <div className="text-[15vw] font-title text-black/5 leading-none text-center select-none">SponsorAI</div>
      </div>
    </div>
  </footer>
);

const Integrations = () => (
  <section id="integrations" className="py-24 bg-black text-white">
    <div className="page-wrapper">
      <div className="text-center mb-20">
        <h2 className="common-title text-5xl mb-4">Works with the tools creators already use.</h2>
        <p className="text-xl text-white/60">Connect your existing workflow or start fresh. Everything plays nicely together.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
        {[
          { name: "NeMo Guardrails", desc: "AI Safety" },
          { name: "Tavily", desc: "Web Research" },
          { name: "Gmail", desc: "Email Inbox" },
          { name: "Instagram", desc: "DM Monitoring" },
          { name: "Notion", desc: "Deal Tracking" },
          { name: "Zapier", desc: "Automate Anything" },
          { name: "Slack", desc: "Team Notifications" },
          { name: "Hugging Face", desc: "AI Hosting" }
        ].map((item, i) => (
          <div key={i} className="glass-card p-6 text-center">
            <div className="text-lg font-bold mb-1">{item.name}</div>
            <div className="text-xs text-white/40">{item.desc}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-24">
        <div className="flex-1">
          <img 
            src="https://hugo.ai/components/home/HomeIntegrations/orbit_intelligence.webp" 
            alt="Orbit Revenue" 
            className="w-full h-auto max-w-md mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1">
          <h2 className="common-title text-4xl mb-4">Your orbit of brand deals.</h2>
          <p className="text-2xl text-white/50 font-title">SponsorAI connects creators with global sponsors automatically.</p>
        </div>
      </div>
    </div>
  </section>
);

const AuthPage = ({ initialMode, onBack, onComplete }: { initialMode: 'login' | 'signup', onBack: () => void, onComplete: () => void }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'signup') {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#ff007f]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#0070f3]/10 blur-[120px] rounded-full" />
      </div>

      <header className="relative z-10 py-8 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={onBack}>
          <span className="text-2xl font-title text-white">SponsorAI</span>
          <ChevronRight className="w-4 h-4 text-white rotate-90 group-hover:-rotate-90 transition-transform" />
        </div>
        <button 
          onClick={onBack}
          className="text-sm text-[#a8a8a8] hover:text-white transition-colors flex items-center gap-2"
        >
          <X className="w-4 h-4" /> Close
        </button>
      </header>

      <main className="flex-1 relative z-10 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="glass-card p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="text-center mb-10">
              <h1 className="common-title text-3xl md:text-4xl mb-3">
                {mode === 'login' ? 'Welcome back' : 'Create your account'}
              </h1>
              <p className="text-[#a8a8a8] text-sm">
                {mode === 'login' 
                  ? "Don't have an account? " 
                  : "Already have an account? "}
                <button 
                  onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                  className="text-white hover:underline font-medium"
                >
                  {mode === 'login' ? 'Sign up' : 'Log in'}
                </button>
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {mode === 'signup' && (
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              )}
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider">Password</label>
                  {mode === 'login' && (
                    <button className="text-[10px] text-[#a8a8a8] hover:text-white uppercase tracking-wider">Forgot password?</button>
                  )}
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <button className="common-button common-button-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group">
                {mode === 'login' ? 'Log in' : 'Create account'}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-4 text-[#a8a8a8] tracking-widest">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 hover:bg-white/10 transition-colors text-sm font-medium">
                <Globe className="w-4 h-4" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 hover:bg-white/10 transition-colors text-sm font-medium">
                <Share2 className="w-4 h-4" /> SSO
              </button>
            </div>
          </div>

          <p className="text-center mt-8 text-[10px] text-[#a8a8a8] uppercase tracking-widest leading-relaxed">
            By continuing, you agree to SponsorAI's <br />
            <a href="#" className="text-white hover:underline">Terms of Service</a> and <a href="#" className="text-white hover:underline">Privacy Policy</a>.
          </p>
        </motion.div>
      </main>

      <footer className="relative z-10 py-8 text-center text-[10px] text-[#a8a8a8] uppercase tracking-widest">
        © 2025 SponsorAI · All rights reserved
      </footer>
    </div>
  );
};

const OnboardingFlow = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    displayName: '',
    username: '',
    whatDoYouSell: '',
    platforms: [] as string[],
    channelLink: '',
    audienceSize: '',
    soldBefore: '',
    productName: '',
    price: '19',
    isFree: false,
    productLink: ''
  });

  const nextStep = () => setStep(prev => prev + 1);

  const steps = [
    { id: 1, label: 'Profile' },
    { id: 2, label: 'Channels' },
    { id: 3, label: 'Preferences' }
  ];

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-8 mt-10">
      {steps.map((s) => (
        <div key={s.id} className="flex flex-col items-center gap-2">
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${step === s.id ? 'bg-[#ff007f] scale-125' : 'bg-white/20'}`} />
          <span className={`text-[10px] uppercase tracking-widest font-medium transition-colors ${step === s.id ? 'text-white' : 'text-white/30'}`}>
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#ff007f]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#0070f3]/10 blur-[120px] rounded-full" />
      </div>

      <header className="relative z-10 py-8 px-6 md:px-12">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-title text-white">SponsorAI</span>
          <ChevronRight className="w-4 h-4 text-white rotate-90" />
        </div>
      </header>

      <main className="flex-1 relative z-10 flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-md"
            >
              <div className="glass-card p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="text-center mb-10">
                  <h1 className="common-title text-3xl md:text-4xl mb-3">Set up your profile</h1>
                  <p className="text-[#a8a8a8] text-sm leading-relaxed">
                    This is how brands will see you. Your AI agent will use this to negotiate on your behalf.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Creator Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name or channel name"
                      value={formData.displayName}
                      onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Your SponsorAI URL</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">sponsorai.co/</div>
                      <input 
                        type="text" 
                        placeholder="yourname"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-[88px] pr-10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                      />
                      {formData.username && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          {formData.username.length > 3 ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <X className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                    <p className="text-[10px] text-[#a8a8a8] ml-1">This cannot be changed later. Choose carefully.</p>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">What is your niche?</label>
                    <div className="flex flex-wrap gap-2">
                      {['Lifestyle', 'Tech', 'Fitness', 'Finance', 'Gaming', 'Education', 'Fashion', 'Other'].map((option) => (
                        <button
                          key={option}
                          onClick={() => setFormData({ ...formData, whatDoYouSell: option })}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${formData.whatDoYouSell === option ? 'bg-white text-black border-white' : 'bg-white/5 text-[#a8a8a8] border-white/10 hover:border-white/30'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={nextStep}
                    disabled={!formData.displayName || !formData.username || !formData.whatDoYouSell}
                    className="common-button common-button-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                {renderStepIndicator()}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-md"
            >
              <div className="glass-card p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="text-center mb-10">
                  <h1 className="common-title text-3xl md:text-4xl mb-3">Connect your channels</h1>
                  <p className="text-[#a8a8a8] text-sm leading-relaxed">
                    Link where brands reach out. The AI will monitor these 24/7 for sponsorship opportunities.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Where do you create content?</label>
                    <div className="flex flex-wrap gap-2">
                      {['TikTok', 'Instagram', 'YouTube', 'Twitter / X', 'Newsletter', 'Podcast', "I don't create content yet"].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            const current = formData.platforms;
                            if (option === "I don't create content yet") {
                              setFormData({ ...formData, platforms: current.includes(option) ? [] : [option] });
                            } else {
                              const filtered = current.filter(p => p !== "I don't create content yet");
                              if (filtered.includes(option)) {
                                setFormData({ ...formData, platforms: filtered.filter(p => p !== option) });
                              } else {
                                setFormData({ ...formData, platforms: [...filtered, option] });
                              }
                            }
                          }}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${formData.platforms.includes(option) ? 'bg-white text-black border-white' : 'bg-white/5 text-[#a8a8a8] border-white/10 hover:border-white/30'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {!formData.platforms.includes("I don't create content yet") && (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Paste your main channel link</label>
                        <input 
                          type="url" 
                          placeholder="https://instagram.com/yourhandle"
                          value={formData.channelLink}
                          onChange={(e) => setFormData({ ...formData, channelLink: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                        />
                        <p className="text-[10px] text-[#a8a8a8] ml-1">We'll use this to build your media kit.</p>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">How big is your audience?</label>
                        <div className="flex flex-wrap gap-2">
                          {['Under 1K', '1K – 10K', '10K – 100K', '100K – 500K', '500K+'].map((option) => (
                            <button
                              key={option}
                              onClick={() => setFormData({ ...formData, audienceSize: option })}
                              className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${formData.audienceSize === option ? 'bg-white text-black border-white' : 'bg-white/5 text-[#a8a8a8] border-white/10 hover:border-white/30'}`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="space-y-3">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Have you done brand deals before?</label>
                    <div className="flex flex-wrap gap-2">
                      {['Yes, many', 'A few small ones', 'No, this is my first time'].map((option) => (
                        <button
                          key={option}
                          onClick={() => setFormData({ ...formData, soldBefore: option })}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${formData.soldBefore === option ? 'bg-white text-black border-white' : 'bg-white/5 text-[#a8a8a8] border-white/10 hover:border-white/30'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={nextStep}
                      className="common-button common-button-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group"
                    >
                      Continue <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={nextStep}
                      className="w-full text-center mt-4 text-xs text-[#a8a8a8] hover:text-white transition-colors"
                    >
                      Skip for now
                    </button>
                  </div>
                </div>
                {renderStepIndicator()}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-md"
            >
              <div className="glass-card p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="text-center mb-10">
                  <h1 className="common-title text-3xl md:text-4xl mb-3">Set your negotiation rules</h1>
                  <p className="text-[#a8a8a8] text-sm leading-relaxed">
                    Tell the AI your boundaries. It will enforce these in every conversation.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Minimum deal size ($)</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">$</div>
                      <input 
                        type="number" 
                        placeholder="500"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                    <p className="text-[10px] text-[#a8a8a8] ml-1">The AI will decline offers below this amount.</p>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Brands you won't work with</label>
                    <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                      <Plus className="w-6 h-6 text-white/20 group-hover:text-white/40 mx-auto mb-2 transition-colors" />
                      <div className="text-sm text-white mb-1">Add blocked categories</div>
                      <div className="text-[10px] text-[#a8a8a8]">e.g. Gambling, Adult, Crypto</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Required lead time</label>
                    <div className="flex flex-wrap gap-2">
                      {['1 week', '2 weeks', '1 month', 'Flexible'].map((option) => (
                        <button
                          key={option}
                          onClick={() => setFormData({ ...formData, productLink: option })}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${formData.productLink === option ? 'bg-white text-black border-white' : 'bg-white/5 text-[#a8a8a8] border-white/10 hover:border-white/30'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={nextStep}
                      className="common-button common-button-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group"
                    >
                      Activate my agent <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={nextStep}
                      className="w-full text-center mt-4 text-xs text-[#a8a8a8] hover:text-white transition-colors"
                    >
                      I'll set this up later
                    </button>
                  </div>
                </div>
                {renderStepIndicator()}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md"
            >
              <div className="glass-card p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check className="w-10 h-10 text-green-500" />
                </div>
                <h1 className="common-title text-3xl md:text-4xl mb-4">Your AI agent is live at sponsorai.co/{formData.username || 'username'} 🎉</h1>
                <p className="text-[#a8a8a8] text-sm mb-10 leading-relaxed">
                  Congratulations! Your agent is now monitoring for brand opportunities. You'll receive your first draft within 24 hours.
                </p>
                <button 
                  onClick={onComplete}
                  className="common-button common-button-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group"
                >
                  Go to my dashboard <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative z-10 py-8 text-center text-[10px] text-[#a8a8a8] uppercase tracking-widest">
        © 2025 SponsorAI · All rights reserved
      </footer>
    </div>
  );
};

const isPro = false;

import Dashboard from '../Dashboard';

export default function App() {
  const [view, setView] = useState<'landing' | 'login' | 'signup' | 'onboarding' | 'dashboard'>('landing');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  if (view === 'login' || view === 'signup') {
    return <AuthPage initialMode={view} onBack={() => setView('landing')} onComplete={() => setView('onboarding')} />;
  }

  if (view === 'onboarding') {
    return <OnboardingFlow onComplete={() => setView('dashboard')} />;
  }

  if (view === 'dashboard') {
    return <Dashboard onLogout={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-black selection:bg-[#e0e0e0] selection:text-black">
      <Header onNavigate={setView} />
      <main className="relative z-10">
        <Hero onNavigate={setView} />
        <Customers />
        <Why />
        <Solutions />
        <Features />
        <HowItWorks />
        <Integrations />
        <CaseStudies />
        <Pricing onNavigate={setView} />
        <FAQ onNavigate={setView} />
      </main>
      <Footer />
    </div>
  );
}
