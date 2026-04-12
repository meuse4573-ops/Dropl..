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

function ActivityItem({ icon: Icon, title, time, amount, color }: { icon: any, 
