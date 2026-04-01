import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  CreditCard, 
  BarChart3, 
  Tag, 
  Store, 
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
  Zap,
  Globe,
  Mail,
  Smartphone,
  Shield,
  LogOut,
  Download,
  Twitter,
  Github
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Page = 'overview' | 'products' | 'collaborators' | 'checkout' | 'emails' | 'workflows' | 'sales' | 'analytics' | 'affiliates' | 'payouts' | 'discover' | 'library' | 'settings' | 'help' | 'notifications' | 'profile';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPro, setIsPro] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(3);

  // Close sidebar on mobile by default
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
    { id: 'overview', label: 'Home', icon: LayoutDashboard },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'collaborators', label: 'Collaborators', icon: Users },
    { id: 'checkout', label: 'Checkout', icon: ShoppingCart },
    { id: 'emails', label: 'Emails', icon: Mail },
    { id: 'workflows', label: 'Workflows', icon: Zap },
    { id: 'sales', label: 'Sales', icon: CreditCard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'affiliates', label: 'Affiliates', icon: Tag },
    { id: 'payouts', label: 'Payouts', icon: CreditCard },
  ];

  const bottomNavItems = [
    { id: 'discover', label: 'Discover', icon: Search },
    { id: 'library', label: 'Library', icon: Package },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'overview': return <OverviewPage />;
      case 'products': return <ProductsPage />;
      case 'collaborators': return <CustomersPage />;
      case 'checkout': return <OrdersPage />;
      case 'emails': return <StorefrontPage />;
      case 'workflows': return <OverviewPage />; // Placeholder
      case 'sales': return <PayoutsPage />; // Placeholder
      case 'analytics': return <AnalyticsPage />;
      case 'affiliates': return <DiscountsPage />;
      case 'payouts': return <PayoutsPage />;
      case 'discover': return <OverviewPage />; // Placeholder
      case 'library': return <ProductsPage />; // Placeholder
      case 'settings': return <SettingsPage />;
      case 'help': return <HelpPage />;
      case 'notifications': return <NotificationsPage />;
      case 'profile': return <ProfilePage />;
      default: return <OverviewPage />;
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
        className={`fixed lg:relative z-50 h-full bg-black border-r border-white/10 flex flex-col overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="h-16 flex items-center px-4 border-b border-white/10">
          <div className="w-8 h-8 bg-pink rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
            G
          </div>
          <span className="flex-1 text-center text-white font-medium text-sm">Dashboard</span>
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
              <div className="text-[10px] text-white/50 truncate">jane@dropl.com</div>
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
                placeholder="Search products, orders..." 
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-text-dim"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="text-[10px] text-text-dim font-mono border border-border px-1.5 rounded bg-black/[0.02]">⌘K</span>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <div className="hidden sm:flex items-center gap-3 mr-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-dim">Pro Mode</span>
              <button 
                onClick={() => setIsPro(!isPro)}
                className={`w-9 h-5 rounded-full relative transition-all duration-500 ${isPro ? 'bg-pink shadow-[0_0_10px_rgba(244,114,182,0.4)]' : 'bg-surface-3'}`}
              >
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-500 ${isPro ? 'left-5' : 'left-1'}`} />
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
            
            <button className="flex items-center gap-2 bg-pink hover:bg-pink/80 text-white px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(244,114,182,0.4)] hover:shadow-[0_4px_25px_rgba(244,114,182,0.5)] hover:-translate-y-0.5">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Product</span>
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

// --- Page Components ---

function OverviewPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl lg:text-5xl font-display italic mb-3 tracking-tight">Good morning, Jane.</h1>
          <p className="text-text-muted text-sm lg:text-base max-w-md leading-relaxed">Your digital terminal is optimized and ready. Here's your performance snapshot.</p>
        </div>
        <div className="flex items-center gap-1 bg-surface border border-border p-1 rounded-xl">
          <button className="px-5 py-2 bg-black/[0.04] rounded-lg text-[10px] font-bold uppercase tracking-widest">Today</button>
          <button className="px-5 py-2 hover:bg-black/[0.02] rounded-lg text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-text-muted transition-all">7D</button>
          <button className="px-5 py-2 hover:bg-black/[0.02] rounded-lg text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-text-muted transition-all">30D</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard label="Total Revenue" value="$12,482.00" change="+12.5%" trend="up" />
        <StatCard label="Total Sales" value="842" change="+8.2%" trend="up" />
        <StatCard label="Avg. Order Value" value="$14.82" change="-2.4%" trend="down" />
        <StatCard label="Conversion Rate" value="3.24%" change="+0.4%" trend="up" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 bg-surface border border-border rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink/10 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
          <div className="flex items-center justify-between mb-10 relative z-10">
            <div>
              <h3 className="font-bold text-lg tracking-tight">Revenue Overview</h3>
              <p className="text-xs text-text-muted mt-1">Monthly performance breakdown</p>
            </div>
            <button className="text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-pink flex items-center gap-1.5 transition-all">
              View Full Report <ChevronRight className="w-3.5 h-3.5" />
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

        {/* Recent Activity */}
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
              icon={ShoppingCart} 
              title="New order #8422" 
              time="2 mins ago" 
              amount="+$24.00" 
              color="text-green" 
            />
            <ActivityItem 
              icon={Users} 
              title="New customer: Alex M." 
              time="14 mins ago" 
              amount="New" 
              color="text-blue" 
            />
            <ActivityItem 
              icon={CreditCard} 
              title="Payout successful" 
              time="1 hour ago" 
              amount="-$1,240.00" 
              color="text-text-muted" 
            />
            <ActivityItem 
              icon={Tag} 
              title="Discount 'SUMMER' used" 
              time="3 hours ago" 
              amount="12 used" 
              color="text-pink" 
            />
          </div>
          <button className="w-full mt-10 py-3 text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-text border-t border-border pt-6 transition-all duration-300">
            View All Activity
          </button>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-surface border border-border rounded-3xl overflow-hidden">
        <div className="p-8 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg tracking-tight">Top Performing Assets</h3>
            <p className="text-xs text-text-muted mt-1">Based on sales volume and customer feedback</p>
          </div>
          <button className="text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-text transition-all">View Inventory</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.2em] text-text-dim border-b border-border">
                <th className="px-8 py-5 font-bold">Product</th>
                <th className="px-8 py-5 font-bold">Sales</th>
                <th className="px-8 py-5 font-bold">Revenue</th>
                <th className="px-8 py-5 font-bold">Status</th>
                <th className="px-8 py-5 font-bold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <ProductRow name="Minimal UI Kit" sales="242" revenue="$4,840.00" status="Active" />
              <ProductRow name="SaaS Template Pro" sales="184" revenue="$3,680.00" status="Active" />
              <ProductRow name="Icon Pack v2" sales="122" revenue="$1,220.00" status="Active" />
              <ProductRow name="Design System Guide" sales="94" revenue="$940.00" status="Draft" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

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

function ProductRow({ name, sales, revenue, status }: { name: string, sales: string, revenue: string, status: string }) {
  return (
    <tr className="group hover:bg-black/[0.01] transition-all duration-300 cursor-pointer">
      <td className="px-8 py-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black/[0.03] border border-border rounded-xl flex items-center justify-center text-[10px] font-bold text-text-dim group-hover:border-border-bright transition-all">IMG</div>
          <span className="text-sm font-bold group-hover:text-maroon-bright transition-colors">{name}</span>
        </div>
      </td>
      <td className="px-8 py-5 text-sm text-text-muted font-medium">{sales}</td>
      <td className="px-8 py-5 text-sm font-bold font-mono">{revenue}</td>
      <td className="px-8 py-5">
        <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
          status === 'Active' ? 'bg-green-dim text-green' : 'bg-black/[0.03] text-text-dim'
        }`}>
          {status}
        </span>
      </td>
      <td className="px-8 py-5 text-right">
        <button className="p-2 hover:bg-black/[0.05] rounded-lg text-text-dim hover:text-text transition-all">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}

// --- Placeholder Pages ---

function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display italic tracking-tight">Inventory</h1>
          <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Manage your digital catalog</p>
        </div>
        <button className="bg-maroon-bright text-white px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-[0_4px_20px_rgba(159,18,57,0.2)] hover:scale-105 transition-all">
          <Plus className="w-4 h-4" /> Add New Asset
        </button>
      </div>
      <div className="bg-surface border border-border rounded-3xl p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(159,18,57,0.03),transparent_70%)]" />
        <div className="w-20 h-20 bg-black/[0.02] border border-border rounded-2xl flex items-center justify-center mb-6 relative z-10">
          <Package className="w-10 h-10 text-text-dim" />
        </div>
        <h3 className="text-2xl font-display italic mb-3 relative z-10">Curate your collection</h3>
        <p className="text-text-muted max-w-md mb-10 leading-relaxed relative z-10">Upload high-fidelity assets, set dynamic pricing, and reach a global audience of creators and developers.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl relative z-10">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-surface-2 border border-border p-6 rounded-2xl text-left group hover:border-border-bright transition-all duration-500">
              <div className="w-10 h-10 bg-black/[0.03] rounded-xl mb-4 group-hover:bg-maroon/10 transition-all" />
              <div className="h-4 bg-black/[0.03] rounded-full w-3/4 mb-3" />
              <div className="h-3 bg-black/[0.02] rounded-full w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrdersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Orders</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Track your global transactions</p>
      </div>
      <div className="bg-surface border border-border rounded-3xl overflow-hidden">
        <div className="p-5 border-b border-border flex gap-2 bg-black/[0.01]">
          <button className="px-5 py-2 bg-black/[0.04] rounded-full text-[10px] font-bold uppercase tracking-widest">All Transactions</button>
          <button className="px-5 py-2 hover:bg-black/[0.02] rounded-full text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-text-muted transition-all">Processing</button>
          <button className="px-5 py-2 hover:bg-black/[0.02] rounded-full text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-text-muted transition-all">Completed</button>
        </div>
        <div className="p-20 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-black/[0.02] border border-border rounded-2xl flex items-center justify-center mb-6">
            <ShoppingCart className="w-10 h-10 text-text-dim" />
          </div>
          <h3 className="text-2xl font-display italic mb-3">No transactions recorded</h3>
          <p className="text-text-muted max-w-md leading-relaxed">Your sales activity will manifest here as soon as customers begin acquiring your digital goods.</p>
        </div>
      </div>
    </div>
  );
}

function CustomersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Customers</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Your global audience</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface border border-border rounded-3xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg tracking-tight">Directory</h3>
            <div className="flex items-center gap-2">
              <button className="p-2.5 hover:bg-black/[0.03] rounded-xl border border-border transition-all"><Search className="w-4 h-4 text-text-dim" /></button>
              <button className="p-2.5 hover:bg-black/[0.03] rounded-xl border border-border transition-all"><Users className="w-4 h-4 text-text-dim" /></button>
            </div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex items-center justify-between p-5 bg-surface-2 border border-border rounded-2xl group hover:border-border-bright transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-black/[0.03] border border-border flex items-center justify-center text-[10px] font-bold text-text-dim group-hover:bg-maroon/5 group-hover:text-maroon-bright transition-all">USER</div>
                  <div>
                    <div className="text-sm font-bold group-hover:text-maroon-bright transition-colors">Customer Name {i}</div>
                    <div className="text-xs text-text-dim font-mono">customer{i}@example.com</div>
                  </div>
                </div>
                <button className="text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-maroon-bright transition-all">View Dossier</button>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-surface border border-border rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue/5 blur-[60px] -mr-16 -mt-16" />
            <h3 className="font-bold text-lg tracking-tight mb-6">Audience Insights</h3>
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-muted uppercase tracking-wider font-bold">New this month</span>
                <span className="text-lg font-display italic text-green">+24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-muted uppercase tracking-wider font-bold">Retention rate</span>
                <span className="text-lg font-display italic text-blue">12.4%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-muted uppercase tracking-wider font-bold">Avg. LTV</span>
                <span className="text-lg font-display italic text-maroon-bright">$142.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PayoutsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Payouts</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Financial settlement terminal</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-gradient-to-br from-surface-3 to-surface border border-border rounded-3xl p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(159,18,57,0.05),transparent_70%)]" />
            <div className="text-xs text-text-dim uppercase tracking-[0.2em] font-bold mb-4">Available for Settlement</div>
            <div className="text-6xl font-display italic mb-10 tracking-tighter">$4,280.42</div>
            <button className="bg-text text-bg px-10 py-4 rounded-full font-bold text-sm hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:-translate-y-1">
              Initiate Withdrawal
            </button>
          </div>
          <div className="bg-surface border border-border rounded-3xl overflow-hidden">
            <div className="p-8 border-b border-border font-bold text-lg tracking-tight">Settlement History</div>
            <div className="p-20 text-center text-text-dim italic font-display">No prior settlements found in this cycle.</div>
          </div>
        </div>
        <div className="bg-surface border border-border rounded-3xl p-8 h-fit sticky top-24">
          <h3 className="font-bold text-lg tracking-tight mb-8">Settlement Method</h3>
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

function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display italic tracking-tight">Intelligence</h1>
          <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Deep performance metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-surface border border-border rounded-xl text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-text transition-all">Last 30 Days</button>
          <button className="p-2.5 bg-surface border border-border rounded-xl text-text-dim hover:text-text transition-all"><Download className="w-4 h-4" /></button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {[
          { label: 'Conversion Rate', value: '3.2%', change: '+0.4%', trend: 'up' },
          { label: 'Avg. Order Value', value: '$42.50', change: '-2.1%', trend: 'down' },
          { label: 'Active Sessions', value: '1,284', change: '+12%', trend: 'up' },
          { label: 'Bounce Rate', value: '42.1%', change: '-5.2%', trend: 'up' },
        ].map((stat, i) => (
          <div key={i} className="bg-surface border border-border p-8 rounded-3xl group hover:border-border-bright transition-all">
            <div className="text-[10px] uppercase tracking-widest text-text-dim mb-4 font-bold">{stat.label}</div>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-display italic">{stat.value}</div>
              <div className={`text-[10px] font-bold ${stat.trend === 'up' ? 'text-green' : 'text-red'}`}>{stat.change}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-surface border border-border rounded-3xl p-10 h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.01))]" />
        <div className="w-full h-full flex items-end justify-between gap-4 px-10 relative z-10">
          {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
            <div key={i} className="flex-1 bg-black/[0.03] border-t border-x border-border rounded-t-lg relative group transition-all duration-500 hover:bg-maroon/10 hover:border-maroon-bright/30" style={{ height: `${h}%` }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono font-bold text-maroon-bright">${h * 10}</div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 w-full px-10 flex justify-between text-[10px] uppercase tracking-widest text-text-dim font-bold">
          <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
        </div>
      </div>
    </div>
  );
}

function DiscountsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display italic tracking-tight">Promotions</h1>
          <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Incentivize your audience</p>
        </div>
        <button className="bg-text text-bg px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-white transition-all">
          <Plus className="w-4 h-4" /> Create Campaign
        </button>
      </div>
      <div className="bg-surface border border-border rounded-3xl p-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(159,18,57,0.03),transparent_70%)]" />
        <div className="w-20 h-20 bg-black/[0.02] border border-border rounded-2xl flex items-center justify-center mb-6 relative z-10">
          <Tag className="w-10 h-10 text-text-dim" />
        </div>
        <h3 className="text-2xl font-display italic mb-3 relative z-10">No active campaigns</h3>
        <p className="text-text-muted max-w-md mb-10 leading-relaxed relative z-10">Create discount codes to boost your sales and reward your loyal customers with exclusive offers.</p>
        <button className="px-8 py-3 border border-border rounded-xl text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-text hover:bg-black/[0.02] transition-all relative z-10">
          Launch First Campaign
        </button>
      </div>
    </div>
  );
}

function StorefrontPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Storefront</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Your digital presence</p>
      </div>
      <div className="bg-surface border border-border rounded-3xl p-12 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(159,18,57,0.03),transparent_70%)]" />
        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          <div className="w-full lg:w-80 aspect-[4/5] bg-surface-2 border border-border rounded-3xl flex items-center justify-center relative overflow-hidden group-hover:border-maroon-bright/20 transition-all duration-500">
            <Store className="w-16 h-16 text-text-dim group-hover:scale-110 group-hover:text-maroon-bright transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <button className="w-full py-3 bg-white text-black rounded-xl text-[10px] uppercase tracking-widest font-bold">Change Cover</button>
            </div>
          </div>
          <div className="flex-1 space-y-10">
            <div>
              <h3 className="text-4xl font-display italic mb-4 tracking-tight">Jane's Digital Assets</h3>
              <p className="text-text-muted text-lg leading-relaxed max-w-2xl">Curating high-fidelity UI kits, motion templates, and bespoke icon sets for the next generation of digital experiences.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="px-6 py-3 bg-black/[0.02] border border-border rounded-2xl">
                <div className="text-[10px] text-text-dim uppercase tracking-widest font-bold mb-1">Public URL</div>
                <div className="text-sm font-mono text-maroon-bright">dropl.com/janes-assets</div>
              </div>
              <div className="px-6 py-3 bg-black/[0.02] border border-border rounded-2xl">
                <div className="text-[10px] text-text-dim uppercase tracking-widest font-bold mb-1">Active Theme</div>
                <div className="text-sm font-bold">Editorial Dark Luxury</div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="bg-text text-bg px-8 py-3 rounded-full text-xs font-bold hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                Customize Interface
              </button>
              <button className="px-8 py-3 border border-border rounded-full text-xs font-bold hover:bg-black/[0.03] transition-all flex items-center gap-2">
                <ExternalLink className="w-4 h-4" /> Preview Live
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Settings</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">System configuration</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1 space-y-2">
          {['General', 'Account', 'Billing', 'Notifications', 'API & Webhooks', 'Security'].map((item, i) => (
            <button key={i} className={`w-full text-left px-6 py-3 rounded-2xl text-[10px] uppercase tracking-widest font-bold transition-all ${i === 0 ? 'bg-black/[0.05] text-maroon-bright border border-maroon-bright/20' : 'text-text-dim hover:text-text-muted hover:bg-black/[0.02]'}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="lg:col-span-3 bg-surface border border-border rounded-3xl p-10 space-y-12">
          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h3 className="font-bold text-lg tracking-tight">Store Identity</h3>
              <span className="text-[10px] uppercase tracking-widest text-text-dim font-bold">Last updated 2d ago</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-text-dim font-bold uppercase tracking-widest">Legal Store Name</label>
                <input type="text" className="w-full bg-surface-2 border border-border rounded-xl px-5 py-3 text-sm outline-none focus:border-maroon-bright/30 transition-all font-medium" defaultValue="Jane's Digital Assets" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-text-dim font-bold uppercase tracking-widest">Support Correspondence</label>
                <input type="email" className="w-full bg-surface-2 border border-border rounded-xl px-5 py-3 text-sm outline-none focus:border-maroon-bright/30 transition-all font-medium" defaultValue="support@janes.com" />
              </div>
            </div>
          </section>
          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h3 className="font-bold text-lg tracking-tight">Localization</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-text-dim font-bold uppercase tracking-widest">Base Currency</label>
                <select className="w-full bg-surface-2 border border-border rounded-xl px-5 py-3 text-sm outline-none appearance-none cursor-pointer hover:border-border-bright transition-all font-medium">
                  <option>USD — United States Dollar</option>
                  <option>EUR — Euro</option>
                  <option>GBP — British Pound</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-text-dim font-bold uppercase tracking-widest">System Timezone</label>
                <select className="w-full bg-surface-2 border border-border rounded-xl px-5 py-3 text-sm outline-none appearance-none cursor-pointer hover:border-border-bright transition-all font-medium">
                  <option>UTC (GMT+0)</option>
                  <option>EST (GMT-5)</option>
                  <option>PST (GMT-8)</option>
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

function HelpPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display italic tracking-tight">Support</h1>
        <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Knowledge base & assistance</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: HelpCircle, title: 'Documentation', desc: 'Comprehensive guides on store configuration, asset management, and scaling strategies.', color: 'text-blue', bg: 'bg-blue/5' },
          { icon: Mail, title: 'Direct Support', desc: 'Our concierge team is available 24/7 for high-priority technical assistance.', color: 'text-green', bg: 'bg-green/5' },
          { icon: Globe, title: 'Community', desc: 'Join an exclusive circle of digital creators to share insights and collaborate.', color: 'text-maroon-bright', bg: 'bg-maroon/5' },
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

function NotificationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display italic tracking-tight">Alerts</h1>
          <p className="text-xs text-text-muted mt-1 uppercase tracking-widest font-bold">Real-time activity stream</p>
        </div>
        <button className="text-[10px] uppercase tracking-widest font-bold text-text-dim hover:text-text transition-all">Dismiss All</button>
      </div>
      <div className="bg-surface border border-border rounded-3xl overflow-hidden">
        <div className="divide-y divide-border">
          {[
            { title: 'New sale recorded', desc: 'You sold "Minimal UI Kit" to Alex M.', time: '2 mins ago', unread: true },
            { title: 'Payout successful', desc: 'Your payout of $1,240.00 has been processed.', time: '1 hour ago', unread: true },
            { title: 'New customer joined', desc: 'Sarah K. just followed your store.', time: '3 hours ago', unread: true },
            { title: 'System update', desc: 'Dropl v2.4 is now live with new analytics features.', time: '1 day ago', unread: false },
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
              <Globe className="w-4 h-4" /> dropl.com/janes-assets
            </p>
          </div>
        </div>
        <div className="flex gap-4 pb-4 justify-center lg:justify-end">
          <button className="px-8 py-3 bg-black/[0.03] border border-border rounded-full text-xs font-bold hover:bg-black/[0.06] transition-all">Edit Identity</button>
          <button className="px-8 py-3 bg-text text-bg rounded-full text-xs font-bold hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]">Share Portfolio</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
        <div className="lg:col-span-1 space-y-10">
          <div className="bg-surface border border-border rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/5 blur-[60px] -mr-16 -mt-16" />
            <h3 className="font-bold text-lg tracking-tight mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-maroon-bright" /> Biography
            </h3>
            <p className="text-text-muted leading-relaxed font-medium">
              Digital product architect based in San Francisco. Curating high-fidelity UI systems, motion libraries, and bespoke digital assets for discerning creators worldwide.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-3xl p-10">
            <h3 className="font-bold text-lg tracking-tight mb-8">Connected Nodes</h3>
            <div className="space-y-6">
              {[
                { label: 'Twitter / X', value: '@janedoe_design', icon: Twitter },
                { label: 'Dribbble', value: 'jane_doe', icon: Globe },
                { label: 'GitHub', value: 'jdoe-dev', icon: Github },
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
                    <div className="text-lg font-bold">Multi-Factor Authentication</div>
                    <div className="text-sm text-text-muted font-medium">Hardware security key & Authenticator app enabled</div>
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
                    <div className="text-lg font-bold">Session Monitoring</div>
                    <div className="text-sm text-text-muted font-medium">Receive alerts for new device authorizations</div>
                  </div>
                </div>
                <button className="px-6 py-2 bg-maroon-bright text-white rounded-xl text-[10px] uppercase tracking-widest font-bold hover:scale-105 transition-all">Enable</button>
              </div>
            </div>
          </div>
          <div className="bg-red-dim border border-red/10 rounded-3xl p-10">
            <h3 className="font-bold text-red mb-4 text-lg tracking-tight">Danger Zone</h3>
            <p className="text-sm text-text-muted mb-8 leading-relaxed">Once you delete your account, there is no going back. All digital assets and transaction history will be permanently purged.</p>
            <button className="flex items-center gap-2 text-red text-[10px] uppercase tracking-widest font-bold hover:underline">
              <LogOut className="w-4 h-4" /> Purge Account Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
