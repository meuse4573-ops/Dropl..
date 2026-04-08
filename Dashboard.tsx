import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Mail,
  Users, 
  Link2,
  Send,
  Zap,
  DollarSign,
  BarChart3, 
  FileText,
  CreditCard,
  Settings, 
  HelpCircle, 
  Bell, 
  User,
  Search,
  Plus,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Menu,
  X,
  Globe,
  Shield,
  LogOut,
  Smartphone,
  Twitter,
  Youtube,
  Instagram,
  Star,
  TrendingUp,
  Filter,
  Download,
  AlertCircle,
  CheckCircle2,
  Inbox,
  Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Page = 'overview' | 'inbox' | 'brands' | 'deals' | 'outreach' | 'agent' | 'earnings' | 'analytics' | 'mediakit' | 'payouts' | 'discover' | 'templates' | 'settings' | 'help' | 'notifications' | 'profile';

export default function Dashboard({ onLogout }: { onLogout?: () => void }) {
  const [activePage, setActivePage] = useState<Page>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [agentActive, setAgentActive] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'overview',  label: 'Home',       icon: LayoutDashboard },
    { id: 'inbox',     label: 'Inbox',       icon: Mail },
    { id: 'brands',    label: 'Brands',      icon: Users },
    { id: 'deals',     label: 'Deals',       icon: Link2 },
    { id: 'outreach',  label: 'Outreach',    icon: Send },
    { id: 'agent',     label: 'Agent',       icon: Zap },
    { id: 'earnings',  label: 'Earnings',    icon: DollarSign },
    { id: 'analytics', label: 'Analytics',   icon: BarChart3 },
    { id: 'mediakit',  label: 'Media Kit',   icon: FileText },
    { id: 'payouts',   label: 'Payouts',     icon: CreditCard },
  ];

  const bottomNavItems = [
    { id: 'discover',  label: 'Discover',   icon: Search },
    { id: 'templates', label: 'Templates',  icon: FileText },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'overview':   return <OverviewPage />;
      case 'inbox':      return <InboxPage />;
      case 'brands':     return <BrandsPage />;
      case 'deals':      return <DealsPage />;
      case 'outreach':   return <OutreachPage />;
      case 'agent':      return <AgentPage agentActive={agentActive} setAgentActive={setAgentActive} />;
      case 'earnings':   return <EarningsPage />;
      case 'analytics':  return <AnalyticsPage />;
      case 'mediakit':   return <MediaKitPage />;
      case 'payouts':    return <PayoutsPage />;
      case 'discover':   return <OverviewPage />;
      case 'templates':  return <InboxPage />;
      case 'settings':   return <SettingsPage />;
      case 'help':       return <HelpPage />;
      case 'notifications': return <NotificationsPage />;
      case 'profile':    return <ProfilePage />;
      default:           return <OverviewPage />;
    }
  };

  return (
    <div className="flex h-screen bg-bg text-text font-sans selection:bg-maroon selection:text-white">
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isSidebarOpen && window.innerWidth < 1024 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ 
          width: isSidebarOpen ? 280 : 0,
          opacity: isSidebarOpen ? 1 : 0,
          x: isSidebarOpen ? 0 : -280
        }}
        className="fixed lg:relative z-50 h-full bg-black border-r border-white/10 flex flex-col overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="h-16 flex items-center px-4 border-b border-white/10">
          <div className="w-8 h-8 bg-pink rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
            S
          </div>
          <span className="flex-1 text-center text-white font-medium text-sm">SponsorAI</span>
          <button onClick={() => setIsSidebarOpen(false)} className="p-1 text-white/70 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id as Page);
                  if (window.innerWidth < 1024) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-6 py-4 border-b border-white/10 transition-all duration-300 group ${
                  activePage === item.id 
                    ? 'text-pink' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-colors duration-300 ${activePage === item.id ? 'text-pink' : 'group-hover:text-white'}`} />
                <span className="text-sm font-medium tracking-wide">{item.label}</span>
                {item.id === 'inbox' && (
                  <span className="ml-auto text-[10px] font-bold bg-pink/20 text-pink px-2 py-0.5 rounded-full">3</span>
                )}
                {item.id === 'agent' && agentActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col border-t border-white/10">
            {bottomNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id as Page);
                  if (window.innerWidth < 1024) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-6 py-4 border-b border-white/10 transition-all duration-300 group ${
                  activePage === item.id 
                    ? 'text-pink' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-colors duration-300 ${activePage === item.id ? 'text-pink' : 'group-hover:text-white'}`} />
                <span className="text-sm font-medium tracking-wide">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 mt-auto border-t border-white/10">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink to-pink-dim flex items-center justify-center text-white font-bold text-xs">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold truncate text-white">Jane Doe</div>
              <div className="text-[10px] text-white/50 truncate">jane@sponsorai.co</div>
            </div>
            <button 
              onClick={() => setActivePage('profile')}
              className="p-1.5 hover:bg-white/5 rounded-lg text-white/50 hover:text-white transition-all"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Header */}
        <header className="h-16 border-b border-border bg-bg/80 backdrop-blur-xl flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            {!isSidebarOpen && (
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 hover:bg-black/[0.03] rounded-lg transition-all text-text-muted hover:text-text"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
            <div className="hidden md:flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 w-64 lg:w-96 group focus-within:border-pink/30 transition-all duration-300">
              <Search className="w-4 h-4 text-text-dim group-focus-within:text-pink transition-colors" />
              <input 
                type="text" 
                placeholder="Search brands, deals, inbox..." 
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-text-dim"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="text-[10px] text-text-dim font-mono border border-border px-1.5 rounded bg-black/[0.02]">⌘K</span>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <div className="hidden sm:flex items-center gap-3 mr-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-dim">Agent</span>
              <button 
                onClick={() => setAgentActive(!agentActive)}
                className={`w-9 h-5 rounded-full relative transition-all duration-500 ${agentActive ? 'bg-pink shadow-[0_0_10px_rgba(244,114,182,0.4)]' : 'bg-surface-3'}`}
              >
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-500 ${agentActive ? 'left-5' : 'left-1'}`} />
              </button>
            </div>

            <button 
              onClick={() => setActivePage('notifications')}
              className="p-2 hover:bg-black/[0.03] rounded-full relative group transition-all"
            >
              <Bell className="w-5 h-5 text-text-muted group-hover:text-text transition-colors" />
              {notifications > 0 && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-pink rounded-full border-2 border-bg" />
              )}
            </button>
            
            <div className="h-8 w-px bg-border mx-1" />
            
            <button 
              onClick={() => setActivePage('outreach')}
              className="flex items-center gap-2 bg-pink hover:bg-pink/80 text-white px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(244,114,182,0.4)] hover:shadow-[0_4px_25px_rgba(244,114,182,0.5)] hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Pitch</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// ─── OVERVIEW PAGE ────────────────────────────────────────────────────────────

function OverviewPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl lg:text-5xl font-display italic mb-3 tracking-tight">Good morning, Jane.</h1>
          <p className="text-text-muted text-sm lg:text-base max-w-md leading-relaxed">Your AI agent is active and monitoring your inbox. Here's your sponsorship snapshot.</p>
        </div>
        <div className="flex items-center gap-1 bg-surface border border-border p-1 rounded-xl">
          <button className="px-5 py-2 bg-black/[0.04] rounded-lg text-[10px] font-bold uppercase tracking-widest">Today</button>
          <button className="px-5 py-2 hover:bg-black/[0.02] rounded-lg text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-text-muted transition-all">7D</button>
          <button className="px-5 py-2 hover:bg-black/[0.02] rounded-lg text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-text-muted transition-all">30D</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard label="Total Deal Value"    value="$12,480.00" change="+18.5%" trend="up" />
        <StatCard label="Deals Closed"        value="14"         change="+3"     trend="up" />
        <StatCard label="Avg. Deal Size"      value="$891.00"    change="+12.4%" trend="up" />
        <StatCard label="Agent Win Rate"      value="68%"        change="+4.2%"  trend="up" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-surface border border-border rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink/10 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
          <div className="flex items-center justify-between mb-10 relative z-10">
            <div>
              <h3 className="font-bold text-lg tracking-tight">Earnings Overview</h3>
              <p className="text-xs text-text-muted mt-1">Monthly deal value closed by your agent</p>
            </div>
            <button className="text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-pink flex items-center gap-1.5 transition-all">
              Full Report <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="h-72 w-full flex items-end justify-between gap-3 px-2 relative z-10">
            {[40, 65, 45, 80, 55, 90, 75, 60, 85, 50, 70, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 group/bar">
                <div className="w-full relative">
                  <div 
                    className="w-full bg-black/[0.03] group-hover/bar:bg-pink/40 rounded-t-lg transition-all duration-700 ease-out" 
                    style={{ height: `${h}%` }}
                  />
                  {i === 11 && (
                    <div className="absolute inset-0 bg-pink/20 blur-xl opacity-50" />
                  )}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-tighter text-text-dim group-hover/bar:text-text-muted transition-colors">{['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Feed */}
        <div className="bg-surface border border-border rounded-3xl p-8 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg tracking-tight">Live Feed</h3>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-pink animate-pulse" />
              <div className="w-1 h-1 rounded-full bg-pink animate-pulse delay-75" />
              <div className="w-1 h-1 rounded-full bg-pink animate-pulse delay-150" />
            </div>
          </div>
          <div className="space-y-7 flex-1">
            <ActivityItem 
              icon={Mail} 
              title="New inquiry: NordVPN" 
              time="2 mins ago" 
              amount="High" 
              color="text-green" 
            />
            <ActivityItem 
              icon={Zap} 
              title="Agent drafted reply" 
              time="3 mins ago" 
              amount="Pending" 
              color="text-blue" 
            />
            <ActivityItem 
              icon={CheckCircle2} 
              title="Deal closed: Notion" 
              time="1 hour ago" 
              amount="+$1,200" 
              color="text-green" 
            />
            <ActivityItem 
              icon={AlertCircle} 
              title="Inquiry spam: Casino X" 
              time="3 hours ago" 
              amount="Blocked" 
              color="text-pink" 
            />
          </div>
          <button className="w-full mt-10 py-3 text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-text border-t border-border pt-6 transition-all duration-300">
            View All Activity
          </button>
        </div>
      </div>

      {/* Active Deals Table */}
      <div className="bg-surface border border-border rounded-3xl overflow-hidden">
        <div className="p-8 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg tracking-tight">Active Negotiations</h3>
            <p className="text-xs text-text-muted mt-1">Deals your agent is currently managing</p>
          </div>
          <button className="text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-text transition-all">View All Deals</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.2em] text-text-dim border-b border-border">
                <th className="px-8 py-5 font-bold">Brand</th>
                <th className="px-8 py-5 font-bold">Fit Score</th>
                <th className="px-8 py-5 font-bold">Offer Value</th>
                <th className="px-8 py-5 font-bold">Status</th>
                <th className="px-8 py-5 font-bold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <DealRow brand="NordVPN"       score="9/10" value="$1,800.00" status="Negotiating" />
              <DealRow brand="Squarespace"   score="8/10" value="$950.00"   status="Awaiting Reply" />
              <DealRow brand="Skillshare"    score="7/10" value="$600.00"   status="Draft Ready" />
              <DealRow brand="Raycon Audio"  score="5/10" value="$400.00"   status="Under Review" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────

function StatCard({ label, value, change, trend }: { label: string, value: string, change: string, trend: 'up' | 'down' }) {
  return (
    <div className="bg-surface border border-border p-6 rounded-2xl hover:border-maroon-bright/20 transition-all duration-300 group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-maroon-bright/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="text-[10px] uppercase tracking-[0.15em] text-text-dim mb-4 group-hover:text-text-muted transition-colors font-bold">{label}</div>
      <div className="flex items-end justify-between relative z-10">
        <div className="text-3xl font-display font-medium tracking-tight">{value}</div>
        <div className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full ${
          trend === 'up' ? 'bg-green-dim text-green' : 'bg-red-dim text-red'
        }`}>
          {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {change}
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ icon: Icon, title, time, amount, color }: { icon: any, title: string, time: string, amount: string, color: string }) {
  return (
    <div className="flex items-center gap-5 group cursor-pointer">
      <div className="w-11 h-11 bg-black/[0.03] border border-border rounded-xl flex items-center justify-center group-hover:bg-maroon/10 group-hover:border-maroon-bright/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-text-dim group-hover:text-text transition-colors" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-bold truncate group-hover:text-maroon-bright transition-colors">{title}</div>
        <div className="text-[10px] uppercase tracking-wider text-text-dim mt-0.5">{time}</div>
      </div>
      <div className={`text-xs font-bold font-mono ${color}`}>{amount}</div>
    </div>
  );
}

function DealRow({ brand, score, value, status }: { brand: string, score: string, value: string, status: string }) {
  const statusColor = status === 'Negotiating' ? 'bg-green-dim text-green' : status === 'Draft Ready' ? 'bg-blue/10 text-blue' : 'bg-black/[0.03] text-text-dim';
  return (
    <tr className="group hover:bg-black/[0.01] transition-all duration-300 cursor-pointer">
      <td className="px-8 py-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black/[0.03] border border-border rounded-xl flex items-center justify-center text-[10px] font-bold text-text-dim group-hover:border-border-bright transition-all">{brand.slice(0,2).toUpperCase()}</div>
          <span className="text-sm font-bold group-hover:text-maroon-bright transition-colors">{brand}</span>
        </div>
      </td>
      <td className="px-8 py-5 text-sm font-bold font-mono text-pink">{score}</td>
      <td className="px-8 py-5 text-sm font-bold font-mono">{value}</td>
      <td className="px-8 py-5">
        <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${statusColor}`}>{status}</span>
      </td>
      <td className="px-8 py-5 text-right">
        <button className="p-2 hover:bg-black/[0.05] rounded-lg text-text-dim hover:text-text transition-all">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}

// ─── INBOX PAGE ───────────────────────────────────────────────────────────────

function InboxPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display italic tracking-tight">Inbox</h1>
          <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Brand inquiries triaged by your agent</p>
        </div>
        <button className="bg-maroon-bright text-white px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-[0_4px_20px_rgba(159,18,57,0.2)] hover:scale-105 transition-all">
          <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      <div className="bg-surface border border-border rounded-3xl overflow-hidden">
        <div className="p-5 border-b border-border flex gap-2 bg-black/[0.01]">
          <button className="px-5 py-2 bg-black/[0.04] rounded-full text-[10px] font-bold uppercase tracking-widest">All</button>
          <button className="px-5 py-2 hover:bg-black/[0.02] rounded-full text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-text-muted transition-all">High Priority</button>
          <button className="px-5 py-2 hover:bg-black/[0.02] rounded-full text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-text-muted transition-all">Follow-up</button>
          <button className="px-5 py-2 hover:bg-black/[0.02] rounded-full text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-text-muted transition-all">Spam</button>
        </div>
        <div className="divide-y divide-border">
          {[
            { brand: 'NordVPN',      subject: 'Partnership opportunity for Q4 campaign', time: '2 mins ago',  priority: 'High Priority', score: 9, unread: true },
            { brand: 'Squarespace',  subject: 'Interested in a 3-month sponsorship deal', time: '1 hour ago', priority: 'High Priority', score: 8, unread: true },
            { brand: 'Skillshare',   subject: 'Creator collab — education niche fit',      time: '3 hours ago',priority: 'Follow-up',    score: 7, unread: true },
            { brand: 'Raycon Audio', subject: 'Product gifting + affiliate partnership',   time: '1 day ago',  priority: 'Review',        score: 5, unread: false },
            { brand: 'Casino Royale','subject': 'Sponsored post request',                  time: '2 days ago', priority: 'Spam',          score: 1, unread: false },
          ].map((item, i) => (
            <div key={i} className={`p-8 flex items-start gap-6 hover:bg-black/[0.01] transition-all cursor-pointer group ${item.unread ? 'bg-black/[0.01]' : ''}`}>
              <div className={`w-2.5 h-2.5 mt-2 rounded-full shrink-0 transition-transform group-hover:scale-125 ${item.unread ? 'bg-maroon-bright shadow-[0_0_10px_rgba(159,18,57,0.5)]' : 'bg-transparent border border-border'}`} />
              <div className="w-12 h-12 bg-black/[0.03] border border-border rounded-xl flex items-center justify-center text-[10px] font-bold text-text-dim shrink-0 group-hover:border-border-bright transition-all">{item.brand.slice(0,2).toUpperCase()}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm group-hover:text-maroon-bright transition-colors">{item.brand}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-text-dim font-bold shrink-0 ml-4">{item.time}</span>
                </div>
                <p className="text-sm text-text-muted truncate mb-2">{item.subject}</p>
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest ${
                    item.priority === 'High Priority' ? 'bg-green-dim text-green' :
                    item.priority === 'Spam' ? 'bg-red-dim text-red' :
                    'bg-black/[0.03] text-text-dim'
                  }`}>{item.priority}</span>
                  <span className="text-[10px] text-text-dim font-bold uppercase tracking-wider">Fit Score: <span className="text-pink">{item.score}/10</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── BRANDS PAGE ──────────────────────────────────────────────────────────────

function BrandsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Brand CRM</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Your complete brand relationship history</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface border border-border rounded-3xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg tracking-tight">All Brands</h3>
            <div className="flex items-center gap-2">
              <button className="p-2.5 hover:bg-black/[0.03] rounded-xl border border-border transition-all"><Search className="w-4 h-4 text-text-dim" /></button>
              <button className="p-2.5 hover:bg-black/[0.03] rounded-xl border border-border transition-all"><Filter className="w-4 h-4 text-text-dim" /></button>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { name: 'NordVPN',     stage: 'Negotiating',  deals: 2, value: '$3,400' },
              { name: 'Notion',      stage: 'Closed',       deals: 3, value: '$2,800' },
              { name: 'Squarespace', stage: 'Contacted',    deals: 1, value: '$950'   },
              { name: 'Skillshare',  stage: 'Draft Ready',  deals: 1, value: '$600'   },
              { name: 'Raycon',      stage: 'Under Review', deals: 0, value: '$0'     },
            ].map((brand, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-surface-2 border border-border rounded-2xl group hover:border-border-bright transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-black/[0.03] border border-border flex items-center justify-center text-[10px] font-bold text-text-dim group-hover:bg-maroon/5 group-hover:text-maroon-bright transition-all">{brand.name.slice(0,2).toUpperCase()}</div>
                  <div>
                    <div className="text-sm font-bold group-hover:text-maroon-bright transition-colors">{brand.name}</div>
                    <div className="text-[10px] text-text-dim font-mono uppercase tracking-wider">{brand.deals} deal{brand.deals !== 1 ? 's' : ''} · {brand.value}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                    brand.stage === 'Closed' ? 'bg-green-dim text-green' :
                    brand.stage === 'Negotiating' ? 'bg-blue/10 text-blue' :
                    'bg-black/[0.03] text-text-dim'
                  }`}>{brand.stage}</span>
                  <button className="text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-maroon-bright transition-all">View History</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-surface border border-border rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue/5 blur-[60px] -mr-16 -mt-16" />
            <h3 className="font-bold text-lg tracking-tight mb-6">Brand Insights</h3>
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-muted uppercase tracking-wider font-bold">New this month</span>
                <span className="text-lg font-display italic text-green">+8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-muted uppercase tracking-wider font-bold">Avg. deal value</span>
                <span className="text-lg font-display italic text-blue">$891</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-muted uppercase tracking-wider font-bold">Repeat brands</span>
                <span className="text-lg font-display italic text-maroon-bright">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DEALS PAGE ───────────────────────────────────────────────────────────────

function DealsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Deals</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Track your active negotiations</p>
      </div>
      <div className="bg-surface border border-border rounded-3xl overflow-hidden">
        <div className="p-5 border-b border-border flex gap-2 bg-black/[0.01]">
          <button className="px-5 py-2 bg-black/[0.04] rounded-full text-[10px] font-bold uppercase tracking-widest">All Deals</button>
          <button className="px-5 py-2 hover:bg-black/[0.02] rounded-full text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-text-muted transition-all">Active</button>
          <button className="px-5 py-2 hover:bg-black/[0.02] rounded-full text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-text-muted transition-all">Closed</button>
        </div>
        <div className="p-20 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-black/[0.02] border border-border rounded-2xl flex items-center justify-center mb-6">
            <Link2 className="w-10 h-10 text-text-dim" />
          </div>
          <h3 className="text-2xl font-display italic mb-3">Your deals pipeline</h3>
          <p className="text-text-muted max-w-md leading-relaxed">Every brand negotiation your agent handles will appear here, with full draft history and approval controls.</p>
        </div>
      </div>
    </div>
  );
}

// ─── OUTREACH PAGE ────────────────────────────────────────────────────────────

function OutreachPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Outreach</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Your proactive brand pitches</p>
      </div>
      <div className="bg-surface border border-border rounded-3xl p-12 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(159,18,57,0.03),transparent_70%)]" />
        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          <div className="w-full lg:w-80 aspect-[4/5] bg-surface-2 border border-border rounded-3xl flex items-center justify-center relative overflow-hidden group-hover:border-maroon-bright/20 transition-all duration-500">
            <Send className="w-16 h-16 text-text-dim group-hover:scale-110 group-hover:text-maroon-bright transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <button className="w-full py-3 bg-white text-black rounded-xl text-[10px] uppercase tracking-widest font-bold">New Campaign</button>
            </div>
          </div>
          <div className="flex-1 space-y-10">
            <div>
              <h3 className="text-4xl font-display italic mb-4 tracking-tight">Your outreach campaigns</h3>
              <p className="text-text-muted text-lg leading-relaxed max-w-2xl">Your agent researches brands that match your niche, drafts personalised cold pitches, and waits for your approval before anything is sent.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="px-6 py-3 bg-black/[0.02] border border-border rounded-2xl">
                <div className="text-[10px] text-text-dim uppercase tracking-widest font-bold mb-1">Pitches Sent</div>
                <div className="text-sm font-mono text-maroon-bright">12 this month</div>
              </div>
              <div className="px-6 py-3 bg-black/[0.02] border border-border rounded-2xl">
                <div className="text-[10px] text-text-dim uppercase tracking-widest font-bold mb-1">Reply Rate</div>
                <div className="text-sm font-bold">41%</div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="bg-text text-bg px-8 py-3 rounded-full text-xs font-bold hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                Start New Campaign
              </button>
              <button className="px-8 py-3 border border-border rounded-full text-xs font-bold hover:bg-black/[0.03] transition-all flex items-center gap-2">
                <ExternalLink className="w-4 h-4" /> View Sent Pitches
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── AGENT PAGE ───────────────────────────────────────────────────────────────

function AgentPage({ agentActive, setAgentActive }: { agentActive: boolean, setAgentActive: (v: boolean) => void }) {
  const [inboxMonitor,  setInboxMonitor]  = useState(true);
  const [brandResearch, setBrandResearch] = useState(true);
  const [autoDrafter,   setAutoDrafter]   = useState(false);
  const [followUp,      setFollowUp]      = useState(true);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">AI Agent</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Control what your agent does on your behalf</p>
      </div>

      {/* Master toggle */}
      <div className="bg-surface border border-border rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink/10 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
        <div className="flex items-center justify-between relative z-10">
          <div>
            <h3 className="font-bold text-xl tracking-tight mb-1">Agent Status</h3>
            <p className="text-sm text-text-muted">Your agent is {agentActive ? 'actively monitoring your inbox and negotiating on your behalf.' : 'currently paused. No actions will be taken.'}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className={`text-[10px] font-bold uppercase tracking-widest ${agentActive ? 'text-green' : 'text-text-dim'}`}>{agentActive ? 'Online' : 'Paused'}</span>
            <button 
              onClick={() => setAgentActive(!agentActive)}
              className={`w-14 h-7 rounded-full relative transition-all duration-500 ${agentActive ? 'bg-pink shadow-[0_0_15px_rgba(244,114,182,0.5)]' : 'bg-surface-3'}`}
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-500 shadow ${agentActive ? 'left-8' : 'left-1'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Sub-agent controls */}
      <div className="bg-surface border border-border rounded-3xl overflow-hidden">
        <div className="p-8 border-b border-border">
          <h3 className="font-bold text-lg tracking-tight">Agent Modules</h3>
          <p className="text-xs text-text-muted mt-1">Turn individual capabilities on or off</p>
        </div>
        <div className="divide-y divide-border">
          {[
            { label: 'Inbox Monitor',   desc: 'Reads and triages every brand email and DM in real time.',      value: inboxMonitor,  set: setInboxMonitor },
            { label: 'Brand Researcher',desc: 'Auto-researches every brand before a reply is drafted.',        value: brandResearch, set: setBrandResearch },
            { label: 'Auto-drafter',    desc: 'Prepares negotiation replies — always waits for your approval.',value: autoDrafter,   set: setAutoDrafter },
            { label: 'Follow-up Alerts',desc: 'Pings you when a brand has not replied in 48 hours.',           value: followUp,      set: setFollowUp },
          ].map((module, i) => (
            <div key={i} className="p-8 flex items-center justify-between group hover:bg-black/[0.01] transition-all">
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${module.value ? 'bg-pink/10 border border-pink/20' : 'bg-black/[0.03] border border-border'}`}>
                  <Zap className={`w-6 h-6 transition-colors ${module.value ? 'text-pink' : 'text-text-dim'}`} />
                </div>
                <div>
                  <div className="text-base font-bold">{module.label}</div>
                  <div className="text-sm text-text-muted font-medium mt-0.5">{module.desc}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${module.value ? 'text-green' : 'text-text-dim'}`}>{module.value ? 'Live' : 'Off'}</span>
                <button 
                  onClick={() => module.set(!module.value)}
                  className={`w-11 h-6 rounded-full relative transition-all duration-500 ${module.value ? 'bg-pink shadow-[0_0_10px_rgba(244,114,182,0.4)]' : 'bg-surface-3'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-500 ${module.value ? 'left-6' : 'left-1'}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety note */}
      <div className="bg-surface border border-border rounded-3xl p-8 flex items-start gap-6">
        <div className="w-14 h-14 bg-green/5 border border-green/10 rounded-2xl flex items-center justify-center shrink-0">
          <Shield className="w-7 h-7 text-green" />
        </div>
        <div>
          <div className="text-base font-bold mb-1">Your agent never sends without approval</div>
          <div className="text-sm text-text-muted leading-relaxed">Every draft reply is placed in your approval queue first. You review it, edit if needed, then confirm. The agent handles research and writing — you control every outgoing message.</div>
        </div>
      </div>
    </div>
  );
}

// ─── EARNINGS PAGE ────────────────────────────────────────────────────────────

function EarningsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Earnings</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Total deal value negotiated by your agent</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-gradient-to-br from-surface-3 to-surface border border-border rounded-3xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(159,18,57,0.05),transparent_70%)]" />
            <div className="text-xs text-text-dim uppercase tracking-[0.2em] font-bold mb-4">Total Earned This Month</div>
            <div className="text-6xl font-display italic mb-10 tracking-tighter">$4,280.00</div>
            <button className="bg-text text-bg px-10 py-4 rounded-full font-bold text-sm hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:-translate-y-1">
              Download Report
            </button>
          </div>
          <div className="bg-surface border border-border rounded-3xl overflow-hidden">
            <div className="p-8 border-b border-border font-bold text-lg tracking-tight">Closed Deal History</div>
            <div className="p-20 text-center text-text-dim italic font-display">No prior deals found this cycle.</div>
          </div>
        </div>
        <div className="bg-surface border border-border rounded-3xl p-8 h-fit sticky top-24">
          <h3 className="font-bold text-lg tracking-tight mb-8">Earnings Breakdown</h3>
          <div className="space-y-5">
            <div className="p-5 bg-surface-2 border border-border rounded-2xl flex items-center gap-5 group hover:border-border-bright transition-all">
              <div className="w-14 h-10 bg-black/[0.03] border border-border rounded-lg flex items-center justify-center text-[10px] font-bold text-text-dim">YT</div>
              <div className="flex-1">
                <div className="text-sm font-bold">YouTube Deals</div>
                <div className="text-[10px] uppercase tracking-widest text-green font-bold mt-0.5">$2,800.00</div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-green" />
            </div>
            <div className="p-5 bg-surface-2 border border-border rounded-2xl flex items-center gap-5 group hover:border-border-bright transition-all">
              <div className="w-14 h-10 bg-black/[0.03] border border-border rounded-lg flex items-center justify-center text-[10px] font-bold text-text-dim">IG</div>
              <div className="flex-1">
                <div className="text-sm font-bold">Instagram Deals</div>
                <div className="text-[10px] uppercase tracking-widest text-green font-bold mt-0.5">$1,480.00</div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-green" />
            </div>
          </div>
          <button className="w-full mt-6 py-3 border border-border rounded-xl text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-text hover:bg-black/[0.02] transition-all">
            Connect Payout Method
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── ANALYTICS PAGE ───────────────────────────────────────────────────────────

function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Analytics</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Agent performance & deal intelligence</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard label="Inquiries Received"  value="48"    change="+22%"  trend="up" />
        <StatCard label="Deals Negotiated"    value="18"    change="+6"    trend="up" />
        <StatCard label="Avg. Response Time"  value="14m"   change="-8m"   trend="up" />
        <StatCard label="Spam Blocked"        value="31"    change="+11"   trend="up" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-surface border border-border rounded-3xl p-8">
          <h3 className="font-bold text-lg tracking-tight mb-2">Deals by Platform</h3>
          <p className="text-xs text-text-muted mb-10">Where your brand deals are originating</p>
          <div className="space-y-5">
            {[
              { platform: 'YouTube',   pct: 62, color: 'bg-red/40' },
              { platform: 'Instagram', pct: 24, color: 'bg-pink/40' },
              { platform: 'LinkedIn',  pct: 9,  color: 'bg-blue/40' },
              { platform: 'Newsletter',pct: 5,  color: 'bg-green/40' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-text-muted uppercase tracking-widest">{item.platform}</span>
                  <span className="font-mono">{item.pct}%</span>
                </div>
                <div className="h-2 bg-black/[0.04] rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-surface border border-border rounded-3xl p-8">
          <h3 className="font-bold text-lg tracking-tight mb-2">Top Brand Categories</h3>
          <p className="text-xs text-text-muted mb-10">Which industries are reaching out to you</p>
          <div className="space-y-5">
            {[
              { category: 'SaaS & Software', count: 14 },
              { category: 'Finance & Crypto', count: 9  },
              { category: 'Health & Wellness',count: 7  },
              { category: 'E-commerce',       count: 5  },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-surface-2 border border-border rounded-2xl group hover:border-border-bright transition-all">
                <span className="text-sm font-bold group-hover:text-maroon-bright transition-colors">{item.category}</span>
                <span className="text-[10px] font-bold font-mono text-text-dim">{item.count} inquiries</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MEDIA KIT PAGE ───────────────────────────────────────────────────────────

function MediaKitPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display italic tracking-tight">Media Kit</h1>
          <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Your AI-generated brand pitch document</p>
        </div>
        <button className="bg-maroon-bright text-white px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-[0_4px_20px_rgba(159,18,57,0.2)] hover:scale-105 transition-all">
          <Download className="w-4 h-4" /> Download PDF
        </button>
      </div>
      <div className="bg-surface border border-border rounded-3xl p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(159,18,57,0.03),transparent_70%)]" />
        <div className="w-20 h-20 bg-black/[0.02] border border-border rounded-2xl flex items-center justify-center mb-6 relative z-10">
          <FileText className="w-10 h-10 text-text-dim" />
        </div>
        <h3 className="text-2xl font-display italic mb-3 relative z-10">Your media kit is auto-generated</h3>
        <p className="text-text-muted max-w-md mb-10 leading-relaxed relative z-10">Audience stats, platform reach, niche overview, and past brand deals — all formatted into a shareable PDF brands can open at any time.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl relative z-10">
          {['Audience Stats', 'Platform Reach', 'Past Deals'].map((label, i) => (
            <div key={i} className="bg-surface-2 border border-border p-6 rounded-2xl text-left group hover:border-border-bright transition-all duration-500">
              <div className="w-10 h-10 bg-black/[0.03] rounded-xl mb-4 group-hover:bg-maroon/10 transition-all" />
              <div className="text-sm font-bold mb-2">{label}</div>
              <div className="h-3 bg-black/[0.02] rounded-full w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PAYOUTS PAGE ─────────────────────────────────────────────────────────────

function PayoutsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Payouts</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Your sponsorship earnings settlement</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-gradient-to-br from-surface-3 to-surface border border-border rounded-3xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(159,18,57,0.05),transparent_70%)]" />
            <div className="text-xs text-text-dim uppercase tracking-[0.2em] font-bold mb-4">Available for Withdrawal</div>
            <div className="text-6xl font-display italic mb-10 tracking-tighter">$4,280.00</div>
            <button className="bg-text text-bg px-10 py-4 rounded-full font-bold text-sm hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:-translate-y-1">
              Initiate Withdrawal
            </button>
          </div>
          <div className="bg-surface border border-border rounded-3xl overflow-hidden">
            <div className="p-8 border-b border-border font-bold text-lg tracking-tight">Payout History</div>
            <div className="p-20 text-center text-text-dim italic font-display">No prior payouts found in this cycle.</div>
          </div>
        </div>
        <div className="bg-surface border border-border rounded-3xl p-8 h-fit sticky top-24">
          <h3 className="font-bold text-lg tracking-tight mb-8">Payout Method</h3>
          <div className="p-5 bg-surface-2 border border-border rounded-2xl flex items-center gap-5 mb-8 group hover:border-border-bright transition-all">
            <div className="w-14 h-10 bg-black/[0.03] border border-border rounded-lg flex items-center justify-center text-[10px] font-bold text-text-dim group-hover:text-text transition-colors">BANK</div>
            <div className="flex-1">
              <div className="text-sm font-bold">•••• 4242</div>
              <div className="text-[10px] uppercase tracking-widest text-green font-bold mt-0.5">Primary Channel</div>
            </div>
            <CheckCircle2 className="w-5 h-5 text-green" />
          </div>
          <button className="w-full py-3 border border-border rounded-xl text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-text hover:bg-black/[0.02] transition-all">
            Configure Channels
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── NOTIFICATIONS PAGE ───────────────────────────────────────────────────────

function NotificationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display italic tracking-tight">Alerts</h1>
          <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Real-time agent activity stream</p>
        </div>
        <button className="text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-text transition-all">Dismiss All</button>
      </div>
      <div className="bg-surface border border-border rounded-3xl overflow-hidden">
        <div className="divide-y divide-border">
          {[
            { title: 'New brand inquiry: NordVPN',       desc: 'Fit Score 9/10 — agent has drafted a reply for your approval.',     time: '2 mins ago',  unread: true  },
            { title: 'Deal closed: Notion',              desc: 'Your agent finalised a $1,200 sponsorship deal with Notion.',        time: '1 hour ago',  unread: true  },
            { title: 'Spam blocked: Casino Royale',      desc: 'Inquiry auto-archived. Does not match your brand blacklist rules.',  time: '3 hours ago', unread: true  },
            { title: 'Follow-up reminder: Squarespace',  desc: 'No reply in 48 hours. Agent suggests a follow-up message.',         time: '1 day ago',   unread: false },
          ].map((n, i) => (
            <div key={i} className={`p-8 flex items-start gap-6 hover:bg-black/[0.01] transition-all cursor-pointer group ${n.unread ? 'bg-black/[0.01]' : ''}`}>
              <div className={`w-2.5 h-2.5 mt-2 rounded-full shrink-0 transition-transform group-hover:scale-125 ${n.unread ? 'bg-maroon-bright shadow-[0_0_10px_rgba(159,18,57,0.5)]' : 'bg-transparent border border-border'}`} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-base group-hover:text-maroon-bright transition-colors">{n.title}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-text-dim font-bold">{n.time}</span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SETTINGS PAGE ────────────────────────────────────────────────────────────

function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Settings</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Account & agent configuration</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1 space-y-2">
          {['General', 'Creator Profile', 'Agent Rules', 'Notifications', 'Integrations', 'Security'].map((item, i) => (
            <button key={i} className={`w-full text-left px-6 py-3 rounded-2xl text-[10px] uppercase tracking-widest font-bold transition-all ${i === 0 ? 'bg-black/[0.05] text-maroon-bright border border-maroon-bright/20' : 'text-text-dim hover:text-text-muted hover:bg-black/[0.02]'}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="lg:col-span-3 bg-surface border border-border rounded-3xl p-10 space-y-12">
          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h3 className="font-bold text-lg tracking-tight">Creator Identity</h3>
              <span className="text-[10px] uppercase tracking-widest text-text-dim font-bold">Last updated 2d ago</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-text-dim font-bold uppercase tracking-widest">Creator Name</label>
                <input type="text" className="w-full bg-surface-2 border border-border rounded-xl px-5 py-3 text-sm outline-none focus:border-maroon-bright/30 transition-all font-medium" defaultValue="Jane Doe" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-text-dim font-bold uppercase tracking-widest">Contact Email</label>
                <input type="email" className="w-full bg-surface-2 border border-border rounded-xl px-5 py-3 text-sm outline-none focus:border-maroon-bright/30 transition-all font-medium" defaultValue="jane@sponsorai.co" />
              </div>
            </div>
          </section>
          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h3 className="font-bold text-lg tracking-tight">Agent Defaults</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-text-dim font-bold uppercase tracking-widest">Minimum Deal Rate</label>
                <select className="w-full bg-surface-2 border border-border rounded-xl px-5 py-3 text-sm outline-none appearance-none cursor-pointer hover:border-border-bright transition-all font-medium">
                  <option>$500 minimum</option>
                  <option>$1,000 minimum</option>
                  <option>$2,000 minimum</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-text-dim font-bold uppercase tracking-widest">Negotiation Style</label>
                <select className="w-full bg-surface-2 border border-border rounded-xl px-5 py-3 text-sm outline-none appearance-none cursor-pointer hover:border-border-bright transition-all font-medium">
                  <option>Firm — never discount</option>
                  <option>Flexible on price</option>
                  <option>Value fit over money</option>
                </select>
              </div>
            </div>
          </section>
          <div className="flex justify-end pt-4 gap-4">
            <button className="px-8 py-3 text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-text transition-all">Discard</button>
            <button className="bg-maroon-bright text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:scale-105 transition-all shadow-[0_4px_20px_rgba(159,18,57,0.2)]">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── HELP PAGE ────────────────────────────────────────────────────────────────

function HelpPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Support</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Knowledge base & assistance</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: HelpCircle, title: 'Documentation',  desc: 'Step-by-step guides on setting up your agent, connecting your inbox, and configuring negotiation rules.', color: 'text-blue',          bg: 'bg-blue/5'    },
          { icon: Mail,       title: 'Direct Support', desc: 'Our team is available 24/7 for any urgent issues with your agent or inbox integrations.',                  color: 'text-green',         bg: 'bg-green/5'   },
          { icon: Globe,      title: 'Community',      desc: 'Join other creators using SponsorAI to share strategies, deal templates, and negotiation tips.',            color: 'text-maroon-bright', bg: 'bg-maroon/5'  },
        ].map((item, i) => (
          <div key={i} className="bg-surface border border-border p-8 rounded-3xl space-y-6 group hover:border-border-bright transition-all duration-500">
            <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <item.icon className={`w-7 h-7 ${item.color}`} />
            </div>
            <div>
              <h3 className="font-bold text-lg tracking-tight mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
            </div>
            <button className="text-[10px] uppercase tracking-widest font-bold text-maroon-bright flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              Access Portal <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── PROFILE PAGE ─────────────────────────────────────────────────────────────

function ProfilePage() {
  return (
    <div className="space-y-12">
      <div className="relative h-64 bg-surface-3 rounded-[2rem] overflow-hidden border border-border group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(159,18,57,0.08),transparent_70%)]" />
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000 bg-[url('https://picsum.photos/seed/abstract/1920/1080')] bg-cover bg-center grayscale" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg to-transparent" />
      </div>
      
      <div className="px-12 -mt-24 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 text-center lg:text-left">
          <div className="w-40 h-40 rounded-full border-[6px] border-bg bg-gradient-to-tr from-surface-3 to-surface-2 flex items-center justify-center text-5xl font-display italic text-maroon-bright shadow-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-maroon/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            JD
          </div>
          <div className="pb-4">
            <div className="flex items-center gap-3 mb-2 justify-center lg:justify-start">
              <h1 className="text-5xl font-display italic tracking-tight">Jane Doe</h1>
              <div className="px-3 py-1 bg-maroon/10 border border-maroon-bright/20 rounded-full text-[10px] uppercase tracking-widest font-bold text-maroon-bright">Pro Creator</div>
            </div>
            <p className="text-text-muted flex items-center gap-2 justify-center lg:justify-start font-medium">
              <Globe className="w-4 h-4" /> sponsorai.co/janedoe
            </p>
          </div>
        </div>
        <div className="flex gap-4 pb-4 justify-center lg:justify-end">
          <button className="px-8 py-3 bg-black/[0.03] border border-border rounded-full text-xs font-bold hover:bg-black/[0.06] transition-all">Edit Profile</button>
          <button className="px-8 py-3 bg-text text-bg rounded-full text-xs font-bold hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]">Share Media Kit</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
        <div className="lg:col-span-1 space-y-10">
          <div className="bg-surface border border-border rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/5 blur-[60px] -mr-16 -mt-16" />
            <h3 className="font-bold text-lg tracking-tight mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-maroon-bright" /> Creator Bio
            </h3>
            <p className="text-text-muted leading-relaxed font-medium">
              Tech & finance creator with 120K subscribers. Focused on SaaS reviews, investing for Gen-Z, and building in public. Open to long-term brand partnerships that align with my audience.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-3xl p-10">
            <h3 className="font-bold text-lg tracking-tight mb-8">Connected Channels</h3>
            <div className="space-y-6">
              {[
                { label: 'YouTube',    value: '@janedoe_tech',  icon: Youtube    },
                { label: 'Instagram',  value: '@janedoe.ig',    icon: Instagram  },
                { label: 'Twitter / X',value: '@janedoe_x',     icon: Twitter    },
              ].map((social, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-11 h-11 bg-black/[0.03] border border-border rounded-xl flex items-center justify-center group-hover:bg-black/[0.06] transition-all">
                    <social.icon className="w-5 h-5 text-text-dim group-hover:text-maroon-bright transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-text-dim font-bold mb-0.5">{social.label}</div>
                    <div className="text-sm font-bold group-hover:text-text transition-colors">{social.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-surface border border-border rounded-3xl p-10">
            <h3 className="font-bold text-lg tracking-tight mb-10 border-b border-border pb-4">Security Protocol</h3>
            <div className="space-y-10">
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-green/5 border border-green/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-7 h-7 text-green" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Two-Factor Authentication</div>
                    <div className="text-sm text-text-muted font-medium">Authenticator app enabled and active</div>
                  </div>
                </div>
                <button className="px-6 py-2 border border-border rounded-xl text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-text transition-all">Manage</button>
              </div>
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-black/[0.03] border border-border rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Smartphone className="w-7 h-7 text-text-dim" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Login Alerts</div>
                    <div className="text-sm text-text-muted font-medium">Get notified of new device sign-ins</div>
                  </div>
                </div>
                <button className="px-6 py-2 bg-maroon-bright text-white rounded-xl text-[10px] uppercase tracking-widest font-bold hover:scale-105 transition-all">Enable</button>
              </div>
            </div>
          </div>
          <div className="bg-red-dim border border-red/10 rounded-3xl p-10">
            <h3 className="font-bold text-red mb-4 text-lg tracking-tight">Danger Zone</h3>
            <p className="text-sm text-text-muted mb-8 leading-relaxed">Deleting your account is permanent. All deal history, brand relationships, and agent data will be erased immediately.</p>
            <button className="flex items-center gap-2 text-red text-[10px] uppercase tracking-widest font-bold hover:underline">
              <LogOut className="w-4 h-4" /> Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
