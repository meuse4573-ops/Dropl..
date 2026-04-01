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
            <span className="text-2xl font-title text-white">Dropl</span>
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
            Meet Dropl, the simplest way to sell digital products globally.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#a8a8a8] mb-8 max-w-lg leading-relaxed"
          >
            Upload your product. Share your link. Get paid by buyers anywhere in the world — automatically, instantly, every time.
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
              <div className="text-[10px] text-white/40 font-mono">dropl.com/dropl</div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-blue-500" />
              <div>
                <div className="text-sm font-medium text-white">Dropl Designs</div>
                <div className="text-[10px] text-white/40">Products · Subscribers · Earnings</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-white">Notion Finance Template</div>
                  <div className="text-[10px] text-white/40">$19</div>
                </div>
                <button className="px-3 py-1 rounded-lg bg-white text-black text-[10px] font-bold">Buy now</button>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-white">Brand Identity Kit</div>
                  <div className="text-[10px] text-white/40">$29</div>
                </div>
                <button className="px-3 py-1 rounded-lg bg-white text-black text-[10px] font-bold">Buy now</button>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
              <div className="text-[10px] text-white/40 uppercase tracking-widest">Total Earnings</div>
              <div className="text-lg font-title text-white">$1,240 <span className="text-[10px] font-sans opacity-40 font-normal">earned this month</span></div>
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
        <span className="font-medium text-[#d9f5fd]">Payments powered by</span>
        <span className="font-bold text-white">Paddle</span>
        <span className="opacity-30">·</span>
        <span>Built for creators selling to the whole world.</span>
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {['Notion', 'Google Drive', 'Canva', 'Beehiiv', 'ConvertKit', 'Gumroad'].map((logo) => (
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
          { title: "Built for the global creator.", desc: "Gumroad was designed for a different internet. We are built for the one creators actually live in — TikTok bios, global buyers, instant delivery, zero complexity." },
          { title: "Grounded in your earnings.", desc: "Every feature exists to help you make more money. Your storefront, your email list, your affiliates — all working while you create." },
          { title: "Engineered to grow with you.", desc: "Start free with zero monthly cost. Upgrade only when your revenue justifies it. We grow when you grow — that is the only business model that makes sense." },
          { title: "Transparent by design.", desc: "See exactly what you earn, what we take, and when you get paid. No hidden fees, no fine print, no surprises on payout day." }
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
        <span className="block">1 storefront.</span>
        <span className="block opacity-70">Unlimited products.</span>
        <span className="block opacity-40">The whole world buying.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {[
          { icon: <Share2 className="w-8 h-8 text-[#a8a8a8]" />, title: "One link. Every product.", desc: "Share a single storefront URL everywhere. Every product you have ever made, in one place, always updated." },
          { icon: <Layout className="w-8 h-8 text-[#a8a8a8]" />, title: "Instant delivery. Every time.", desc: "The second a payment clears, the buyer gets their file. No manual steps. No delays. No support tickets about missing files." },
          { icon: <Monitor className="w-8 h-8 text-[#a8a8a8]" />, title: "Your audience, owned by you.", desc: "Every buyer and freebie download becomes a subscriber. Build your list automatically without touching a single form." }
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
          { label: "PAYMENTS", title: "Paddle as your payment layer.", desc: "Every transaction runs through Paddle — the global Merchant of Record. That means fraud protection, chargeback handling, and buyer trust built in from day one.", img: "badge_security" },
          { label: "TAX & COMPLIANCE", title: "Global tax handled automatically.", desc: "VAT, GST, and sales tax across 200+ countries calculated and remitted by Paddle. You never file a tax return for a single foreign sale.", img: "badge_compliance" },
          { label: "DELIVERY", title: "Files stored and delivered securely.", desc: "Every uploaded file is stored privately. Download links are time-limited and single-use. Your products cannot be shared or pirated through the delivery link.", img: "badge_hosting" }
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
          { color: "bg-[#2c150c]", title: "Sell your product on every platform at once.", desc: "Share one link — your storefront works on TikTok, Instagram, YouTube, Twitter, newsletters, and anywhere else you exist. Buyers land and buy without friction no matter where they came from." },
          { color: "bg-[#032b35]", title: "Turn every sale into a second sale.", desc: "The moment a buyer completes their purchase, they see a timed offer for your next product at a discount. One click. No re-entering card details. Their wallet is already open." },
          { color: "bg-[#1d2c0c]", title: "Go live in under 15 minutes. No developer needed.", desc: "Create your account, upload your first product, set your price, and share your link. That is the entire setup. Anyone can do it — no technical knowledge required." },
          { color: "bg-[#361e02]", title: "Set your price your way. Fixed, flexible, or free.", desc: "Charge a fixed price, let buyers pay what they want with a minimum, or make it completely free to build your email list. You decide how every product is sold." },
          { color: "bg-[#2c150c]", title: "Build your email list on autopilot.", desc: "Every buyer is automatically added to your subscriber list. Offer a freebie at $0 and capture emails from people who are not yet ready to buy. Then broadcast to all of them when your next product drops." },
          { color: "bg-[#032b35]", title: "See exactly where your revenue comes from.", desc: "Track every sale, every subscriber, every affiliate referral, and every discount code used. Your dashboard tells the full story so you always know what is working." },
          { color: "bg-[#1d2c0c]", title: "Your storefront updates the moment you do.", desc: "Add a new product and it appears on your storefront instantly. Edit a price, change a cover image, unpublish a product — everything syncs in real time with no cache delays." }
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
          <p className="text-2xl text-black/50 font-title">From account to first sale in minutes.</p>
        </div>

        {[
          { step: "01", title: "Upload your product.", desc: "Add your file — PDF, ZIP, MP3, Notion link, Google Drive link, anything digital. Write a title, add a cover image, set your price. Done.", img: "feed", accent: true },
          { step: "02", title: "Make it yours.", desc: "Set your price, add a product description, choose a cover image, and set up your upsell offer. Your storefront reflects your brand instantly.", img: "customize" },
          { step: "03", title: "Share your link.", desc: "Copy your storefront URL — dropl.com/yourname — and drop it in every bio, every video, every post. It is the only link you will ever need.", img: "test" },
          { step: "04", title: "Get paid.", desc: "Watch the sales come in. Files deliver automatically, your list grows by itself, and your earnings land in your bank on schedule.", img: "run", accent: true }
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
          <h3 className="common-title text-black text-3xl mb-2">Ready to start selling?</h3>
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
      <h2 className="common-title text-5xl mb-4">Real creators, real revenue.</h2>
      <p className="text-2xl text-white/50 font-title mb-20">See what happens when selling gets simple.</p>

      <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[560px]">
        {[
          { 
            name: "Antonin Raffarin", 
            role: "Digital Creator", 
            company: "Dropl User", 
            quote: "I made my first sale 11 minutes after signing up. I had been putting off selling my template for months because every other platform felt complicated. This just worked.",
            img: "afs_foil"
          },
          { 
            name: "Geoffrey Safar", 
            role: "Notion Architect", 
            company: "Dropl User", 
            quote: "The upsell feature alone doubled my average order value in the first week. I set it up once and it runs itself.",
            img: "emma"
          },
          { 
            name: "Jimmy Cohen", 
            role: "Template Designer", 
            company: "Dropl User", 
            quote: "I moved everything here from Gumroad. The global payments and automatic tax handling saved me hours every month.",
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
                  “{item.quote}”
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
      subtext: "+ 10% per sale, no monthly fee",
      features: [
        { text: "Your own storefront at dropl.io/username", included: true },
        { text: "Unlimited products", included: true },
        { text: "Automatic file delivery by email", included: true },
        { text: "Discount codes", included: true },
        { text: "Email list up to 100 subscribers", included: true },
        { text: "Email broadcasts (locked)", included: false },
        { text: "Upsell pages (locked)", included: false },
        { text: "Affiliate system (locked)", included: false },
      ],
      cta: "Get started →",
      note: "No credit card required",
      featured: false,
      order: "order-2 md:order-1"
    },
    {
      name: "Pro",
      badge: "Most Popular",
      price: "$99",
      subtext: "per month + 5% per sale",
      features: [
        { text: "Everything in Starter", included: true },
        { text: "Unlimited email subscribers", included: true },
        { text: "Email broadcasts to all buyers", included: true },
        { text: "Thank-you page upsells with countdown timer", included: true },
        { text: "Full affiliate system with commission tracking", included: true },
        { text: "Discount codes with usage limits", included: true },
        { text: "Dashboard analytics", included: true },
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
      price: "$199",
      subtext: "per month + 3% per sale",
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Lowest platform fee — only 3% per sale", included: true },
        { text: "Custom domain for your storefront", included: true },
        { text: "Remove Dropl branding", included: true },
        { text: "Advanced analytics and export", included: true },
        { text: "Dedicated account support", included: true },
        { text: "Early access to new features", included: true },
        { text: "Multiple team members", included: true },
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
          <p className="text-2xl text-black/50 font-title">Pricing that makes sense as you grow.</p>
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
            { q: "Is it really free to start?", a: "Yes. Create your account, upload products, and start selling with zero monthly cost. We take 10% on each sale — and only when you actually earn." },
            { q: "How do buyers pay? What about international buyers?", a: "Buyers pay with card, PayPal, Apple Pay, or Google Pay. Paddle handles the checkout and supports buyers in over 200 countries with local currency display." },
            { q: "What kinds of products can I sell?", a: "Anything digital — PDFs, ZIP files, MP3s, Notion templates, Google Drive links, Figma files, video links. If you can put it in a file or a URL, you can sell it here." },
            { q: "Do I have to handle taxes for international sales?", a: "No. Paddle is the Merchant of Record. They calculate, collect, and remit VAT and sales tax in every country on your behalf. You never touch it." },
            { q: "What happens if I want to cancel?", a: "No long-term contracts. Cancel anytime. Your storefront data, product files, and subscriber list are yours — export them whenever you want." }
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
        <h2 className="common-title text-black text-4xl md:text-6xl mb-6">Start selling on Dropl today.</h2>
        <p className="text-xl text-black/50 mb-10 max-w-2xl mx-auto">Join thousands of creators already on the waitlist. Early signups get priority access and locked-in pricing at launch.</p>
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
          <div>© 2025 Dropl. All rights reserved.</div>
        </div>
        <div className="text-[15vw] font-title text-black/5 leading-none text-center select-none">Dropl</div>
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
          { name: "Paddle", desc: "Payments" },
          { name: "Notion", desc: "Sell Notion templates directly" },
          { name: "Google Drive", desc: "Deliver Drive files automatically" },
          { name: "Canva", desc: "Sell your Canva designs" },
          { name: "ConvertKit", desc: "Sync your subscriber list" },
          { name: "Beehiiv", desc: "Connect your newsletter" },
          { name: "Zapier", desc: "Automate anything" },
          { name: "Lemon Squeezy", desc: "Migrate in one click" }
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
          <h2 className="common-title text-4xl mb-4">Your orbit of revenue.</h2>
          <p className="text-2xl text-white/50 font-title">Dropl connects creators with buyers worldwide.</p>
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
          <span className="text-2xl font-title text-white">Dropl</span>
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
            By continuing, you agree to Dropl's <br />
            <a href="#" className="text-white hover:underline">Terms of Service</a> and <a href="#" className="text-white hover:underline">Privacy Policy</a>.
          </p>
        </motion.div>
      </main>

      <footer className="relative z-10 py-8 text-center text-[10px] text-[#a8a8a8] uppercase tracking-widest">
        © 2025 Dropl · All rights reserved
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
    { id: 1, label: 'Storefront' },
    { id: 2, label: 'Audience' },
    { id: 3, label: 'First Product' }
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
          <span className="text-2xl font-title text-white">Dropl</span>
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
                  <h1 className="common-title text-3xl md:text-4xl mb-3">Set up your storefront</h1>
                  <p className="text-[#a8a8a8] text-sm leading-relaxed">
                    This is your public page. Buyers will land here from your TikTok, Instagram, and every link you share.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Display Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name or brand name"
                      value={formData.displayName}
                      onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Your Dropl URL</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">dropl.io/</div>
                      <input 
                        type="text" 
                        placeholder="yourname"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-[72px] pr-10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
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
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">What do you sell?</label>
                    <div className="flex flex-wrap gap-2">
                      {['Digital Templates', 'eBooks / PDFs', 'Music / Audio', 'Courses / Guides', 'Other digital files'].map((option) => (
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
                  <h1 className="common-title text-3xl md:text-4xl mb-3">Tell us about your audience</h1>
                  <p className="text-[#a8a8a8] text-sm leading-relaxed">
                    Help us personalise your Dropl dashboard for how you actually create.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Where do you create content?</label>
                    <div className="flex flex-wrap gap-2">
                      {['TikTok', 'Instagram', 'YouTube', 'Twitter / X', 'Newsletter', 'Podcast', "I don't create content"].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            const current = formData.platforms;
                            if (option === "I don't create content") {
                              setFormData({ ...formData, platforms: current.includes(option) ? [] : [option] });
                            } else {
                              const filtered = current.filter(p => p !== "I don't create content");
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

                  {!formData.platforms.includes("I don't create content") && (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Paste your main channel link</label>
                        <input 
                          type="url" 
                          placeholder="https://tiktok.com/@yourhandle"
                          value={formData.channelLink}
                          onChange={(e) => setFormData({ ...formData, channelLink: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                        />
                        <p className="text-[10px] text-[#a8a8a8] ml-1">We'll use this to set up your storefront bio.</p>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">How big is your audience?</label>
                        <div className="flex flex-wrap gap-2">
                          {['Under 1K', '1K – 10K', '10K – 100K', '100K+'].map((option) => (
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
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Have you sold digital products before?</label>
                    <div className="flex flex-wrap gap-2">
                      {['Yes, on Gumroad or similar', 'Yes, manually via DMs', 'No, this is my first time'].map((option) => (
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
                  <h1 className="common-title text-3xl md:text-4xl mb-3">Upload your first product</h1>
                  <p className="text-[#a8a8a8] text-sm leading-relaxed">
                    You are one step away from your first sale. Creators who upload on day one earn 3x faster.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Product Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Notion Finance Template"
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Price</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">$</div>
                      <input 
                        type="number" 
                        placeholder="19"
                        disabled={formData.isFree}
                        value={formData.isFree ? '0' : formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div className="flex items-center gap-2 ml-1 mt-2">
                      <button 
                        onClick={() => setFormData({ ...formData, isFree: !formData.isFree })}
                        className={`w-8 h-4 rounded-full relative transition-colors ${formData.isFree ? 'bg-[#ff007f]' : 'bg-white/20'}`}
                      >
                        <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${formData.isFree ? 'left-4.5' : 'left-0.5'}`} />
                      </button>
                      <span className="text-[10px] text-[#a8a8a8] uppercase tracking-wider">Make it free</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Upload your file</label>
                    <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                      <Upload className="w-6 h-6 text-white/20 group-hover:text-white/40 mx-auto mb-3 transition-colors" />
                      <div className="text-sm text-white mb-1">Drag and drop your file here</div>
                      <div className="text-[10px] text-[#a8a8a8]">PDF · ZIP · MP3 · DOCX · or paste a link below</div>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Or paste a Google Drive / Notion link"
                      value={formData.productLink}
                      onChange={(e) => setFormData({ ...formData, productLink: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={nextStep}
                      className="common-button common-button-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group"
                    >
                      Publish my first product <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={nextStep}
                      className="w-full text-center mt-4 text-xs text-[#a8a8a8] hover:text-white transition-colors"
                    >
                      I'll do this later
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
                <h1 className="common-title text-3xl md:text-4xl mb-4">Your store is live at dropl.io/{formData.username || 'username'} 🎉</h1>
                <p className="text-[#a8a8a8] text-sm mb-10 leading-relaxed">
                  Congratulations! You're ready to start selling. Your dashboard is now set up and waiting for your first sale.
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
        © 2025 Dropl · All rights reserved
      </footer>
    </div>
  );
};

const isPro = false;

import Dashboard from './Dashboard';

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
