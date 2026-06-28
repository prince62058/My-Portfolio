import { useEffect, useState } from "react";
import {
  Home,
  Megaphone,
  Users,
  Wallet,
  Briefcase,
  Bell,
  Search,
  TrendingUp,
  Phone,
  MessageCircle,
  Plus,
  ChevronRight,
  Star,
  IndianRupee,
  ArrowUpRight,
  ArrowDownLeft,
  Facebook,
  Instagram,
  Eye,
  MousePointerClick,
  Target,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

const BRAND = "#3F51B5";
const BRAND2 = "#5C6BC0";
const ORANGE = "#FA4A0C";

function StatusBar() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const u = () => {
      const d = new Date();
      setTime(
        `${d.getHours().toString().padStart(2, "0")}:${d
          .getMinutes()
          .toString()
          .padStart(2, "0")}`
      );
    };
    u();
    const i = setInterval(u, 30000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="absolute top-0 left-0 right-0 h-9 flex items-center justify-between px-7 text-[11px] font-semibold text-white z-30 pointer-events-none">
      <span>{time}</span>
      <div className="flex items-center gap-1">
        <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
          <rect x="0" y="6" width="2" height="4" rx="0.5" />
          <rect x="3" y="4" width="2" height="6" rx="0.5" />
          <rect x="6" y="2" width="2" height="8" rx="0.5" />
          <rect x="9" y="0" width="2" height="10" rx="0.5" />
        </svg>
        <span className="text-[10px]">5G</span>
        <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
          <rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="white" />
          <rect x="2" y="2" width="15" height="7" rx="1" fill="white" />
          <rect x="19.5" y="3.5" width="1.5" height="4" rx="0.5" fill="white" />
        </svg>
      </div>
    </div>
  );
}

const businesses = [
  { name: "Bright Dental Care", cat: "Healthcare", verified: true },
  { name: "Spice Route Restaurant", cat: "Food & Beverage", verified: true },
  { name: "Glow Beauty Salon", cat: "Beauty", verified: false },
];

const leads = [
  { name: "Rahul Sharma", phone: "+91 98765 43210", time: "2m ago", source: "Facebook", status: "new" },
  { name: "Priya Verma", phone: "+91 91234 56789", time: "12m ago", source: "Instagram", status: "called" },
  { name: "Amit Patel", phone: "+91 99887 76655", time: "1h ago", source: "Google", status: "new" },
  { name: "Sneha Reddy", phone: "+91 90909 80808", time: "3h ago", source: "Facebook", status: "won" },
  { name: "Vikram Singh", phone: "+91 88112 23344", time: "5h ago", source: "Instagram", status: "called" },
  { name: "Ananya Iyer", phone: "+91 77665 54433", time: "8h ago", source: "Google", status: "new" },
];

const ads = [
  { title: "Summer Sale - 40% off", platform: "Facebook", spent: 1240, leads: 32, status: "Active" },
  { title: "New Menu Launch", platform: "Instagram", spent: 890, leads: 18, status: "Active" },
  { title: "Free Consultation", platform: "Facebook", spent: 540, leads: 9, status: "Paused" },
];

const txns = [
  { t: "Ad Spend - Facebook", amt: -1240, time: "Today" },
  { t: "Wallet Recharge", amt: 5000, time: "Yesterday" },
  { t: "Ad Spend - Instagram", amt: -890, time: "2d ago" },
  { t: "Refund", amt: 320, time: "5d ago" },
];

function HomeScreen() {
  return (
    <div className="absolute inset-0 overflow-y-auto scrollbar-hide bg-[#F4F5FB] pb-24">
      {/* Header */}
      <div
        className="pt-10 pb-20 px-4 text-white relative"
        style={{
          background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND2} 100%)`,
        }}
      >
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur grid place-items-center font-bold">
              P
            </div>
            <div>
              <div className="text-[10px] opacity-80">Welcome back</div>
              <div className="text-xs font-bold">Prince Kumar</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FA4A0C] text-[8px] grid place-items-center font-bold">
                3
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-lg font-extrabold tracking-tight">
          LeadKart
          <span className="ml-1 text-[10px] font-mono bg-white/20 px-1.5 py-0.5 rounded">AI</span>
        </div>
        <p className="text-[11px] opacity-80 mt-0.5">Grow your business with AI ads</p>
      </div>

      {/* Wallet card */}
      <div className="px-4 -mt-14 relative z-10">
        <div className="rounded-2xl bg-white shadow-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                Wallet Balance
              </div>
              <div className="text-2xl font-extrabold text-gray-900 flex items-center mt-1">
                <IndianRupee className="w-5 h-5" />
                12,480
              </div>
            </div>
            <button
              className="text-[11px] font-bold text-white px-3 py-1.5 rounded-lg flex items-center gap-1"
              style={{ background: ORANGE }}
            >
              <Plus className="w-3 h-3" /> Recharge
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-gray-100">
            {[
              { l: "Active Ads", v: "2", c: BRAND },
              { l: "Leads Today", v: "14", c: ORANGE },
              { l: "Conv. Rate", v: "23%", c: "#22c55e" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-base font-extrabold" style={{ color: s.c }}>
                  {s.v}
                </div>
                <div className="text-[9px] text-gray-500 font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="px-4 mt-5">
        <div className="grid grid-cols-4 gap-2">
          {[
            { i: Megaphone, l: "Create Ad", c: BRAND },
            { i: Users, l: "Leads", c: "#EC4899" },
            { i: Target, l: "Target", c: "#10B981" },
            { i: Sparkles, l: "AI Boost", c: ORANGE },
          ].map((q) => (
            <button key={q.l} className="bg-white rounded-xl p-2.5 flex flex-col items-center gap-1 shadow-sm">
              <div
                className="w-9 h-9 rounded-lg grid place-items-center"
                style={{ background: `${q.c}1A` }}
              >
                <q.i className="w-4 h-4" style={{ color: q.c }} />
              </div>
              <div className="text-[9px] font-bold text-gray-700">{q.l}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Performance */}
      <div className="px-4 mt-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-gray-900">Ad Performance</h3>
          <button className="text-[10px] font-semibold" style={{ color: BRAND }}>
            View all
          </button>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[10px] text-gray-500">This week</div>
              <div className="text-xl font-extrabold text-gray-900 flex items-center">
                <Eye className="w-4 h-4 mr-1" style={{ color: BRAND }} />
                24.8K
              </div>
            </div>
            <div className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +18%
            </div>
          </div>
          {/* Mini bar chart */}
          <div className="flex items-end gap-1.5 h-16">
            {[40, 65, 35, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t"
                  style={{
                    height: `${h}%`,
                    background: `linear-gradient(180deg, ${BRAND} 0%, ${BRAND2} 100%)`,
                  }}
                />
                <span className="text-[8px] text-gray-400">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Your Business */}
      <div className="px-4 mt-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-gray-900">Your Business</h3>
          <button className="text-[10px] font-semibold" style={{ color: BRAND }}>
            + Add
          </button>
        </div>
        <div className="space-y-2">
          {businesses.slice(0, 2).map((b) => (
            <div key={b.name} className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div
                className="w-10 h-10 rounded-lg grid place-items-center text-white font-bold"
                style={{ background: BRAND }}
              >
                {b.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <div className="text-xs font-bold text-gray-900 truncate">{b.name}</div>
                  {b.verified && <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0" />}
                </div>
                <div className="text-[10px] text-gray-500">{b.cat}</div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdsScreen() {
  return (
    <div className="absolute inset-0 overflow-y-auto scrollbar-hide bg-[#F4F5FB] pb-24">
      <div
        className="pt-10 pb-4 px-4 text-white"
        style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND2} 100%)` }}
      >
        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-lg font-extrabold">My Ads</h2>
          <button
            className="px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1"
            style={{ background: ORANGE }}
          >
            <Plus className="w-3 h-3" /> New Ad
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="bg-white/15 backdrop-blur rounded-xl p-2.5">
            <div className="text-[9px] opacity-80">Total Spent</div>
            <div className="text-base font-extrabold flex items-center">
              <IndianRupee className="w-3.5 h-3.5" />
              2,670
            </div>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-xl p-2.5">
            <div className="text-[9px] opacity-80">Leads Generated</div>
            <div className="text-base font-extrabold">59</div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 space-y-2">
        {ads.map((a) => (
          <div key={a.title} className="bg-white rounded-xl p-3 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <div
                  className="w-9 h-9 rounded-lg grid place-items-center"
                  style={{
                    background:
                      a.platform === "Facebook" ? "#1877F21A" : "#E1306C1A",
                  }}
                >
                  {a.platform === "Facebook" ? (
                    <Facebook className="w-4 h-4" style={{ color: "#1877F2" }} />
                  ) : (
                    <Instagram className="w-4 h-4" style={{ color: "#E1306C" }} />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-gray-900 truncate">{a.title}</div>
                  <div className="text-[10px] text-gray-500">{a.platform}</div>
                </div>
              </div>
              <span
                className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                  a.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {a.status}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-gray-100">
              <div>
                <div className="text-[9px] text-gray-500">Spent</div>
                <div className="text-xs font-bold text-gray-900 flex items-center">
                  <IndianRupee className="w-2.5 h-2.5" />
                  {a.spent}
                </div>
              </div>
              <div>
                <div className="text-[9px] text-gray-500">Leads</div>
                <div className="text-xs font-bold text-gray-900">{a.leads}</div>
              </div>
              <div>
                <div className="text-[9px] text-gray-500">CPL</div>
                <div className="text-xs font-bold text-gray-900 flex items-center">
                  <IndianRupee className="w-2.5 h-2.5" />
                  {Math.round(a.spent / a.leads)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadsScreen() {
  const [filter, setFilter] = useState<"all" | "new" | "called" | "won">("all");
  const filtered = filter === "all" ? leads : leads.filter((l) => l.status === filter);
  return (
    <div className="absolute inset-0 overflow-y-auto scrollbar-hide bg-[#F4F5FB] pb-24">
      <div
        className="pt-10 pb-4 px-4 text-white"
        style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND2} 100%)` }}
      >
        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-lg font-extrabold">Leads</h2>
          <Search className="w-5 h-5" />
        </div>
        <div className="flex gap-1.5 mt-3 overflow-x-auto scrollbar-hide">
          {(["all", "new", "called", "won"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap capitalize transition-all"
              style={{
                background: filter === f ? "white" : "rgba(255,255,255,0.15)",
                color: filter === f ? BRAND : "white",
              }}
            >
              {f} {f === "all" && `(${leads.length})`}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 mt-4 space-y-2">
        {filtered.map((l, i) => (
          <div key={i} className="bg-white rounded-xl p-3 shadow-sm flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full grid place-items-center text-white font-bold text-sm"
              style={{
                background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND2} 100%)`,
              }}
            >
              {l.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <div className="text-xs font-bold text-gray-900 truncate">{l.name}</div>
                <span
                  className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${
                    l.status === "new"
                      ? "bg-blue-100 text-blue-700"
                      : l.status === "called"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {l.status.toUpperCase()}
                </span>
              </div>
              <div className="text-[10px] text-gray-500">{l.phone}</div>
              <div className="text-[9px] text-gray-400 flex items-center gap-1 mt-0.5">
                <Clock className="w-2.5 h-2.5" /> {l.time} · {l.source}
              </div>
            </div>
            <div className="flex gap-1.5">
              <button
                className="w-8 h-8 rounded-full grid place-items-center"
                style={{ background: "#22c55e1A" }}
              >
                <Phone className="w-3.5 h-3.5 text-green-600" />
              </button>
              <button
                className="w-8 h-8 rounded-full grid place-items-center"
                style={{ background: "#25D3661A" }}
              >
                <MessageCircle className="w-3.5 h-3.5 text-green-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WalletScreen() {
  return (
    <div className="absolute inset-0 overflow-y-auto scrollbar-hide bg-[#F4F5FB] pb-24">
      <div
        className="pt-10 pb-8 px-4 text-white"
        style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND2} 100%)` }}
      >
        <h2 className="text-lg font-extrabold mt-2">Wallet</h2>
        <div className="mt-4 text-center">
          <div className="text-[10px] opacity-80 uppercase tracking-wider">
            Available Balance
          </div>
          <div className="text-4xl font-black mt-1 flex items-center justify-center">
            <IndianRupee className="w-7 h-7" />
            12,480
          </div>
          <div className="text-[10px] opacity-70 mt-1">Last recharged: Yesterday</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-5">
          {[
            { l: "Add Money", i: Plus },
            { l: "Withdraw", i: ArrowUpRight },
            { l: "History", i: Clock },
          ].map((a) => (
            <button
              key={a.l}
              className="bg-white/15 backdrop-blur rounded-xl py-2.5 flex flex-col items-center gap-1"
            >
              <a.i className="w-4 h-4" />
              <span className="text-[10px] font-bold">{a.l}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick recharge */}
      <div className="px-4 mt-4">
        <h3 className="text-xs font-bold text-gray-900 mb-2">Quick Recharge</h3>
        <div className="grid grid-cols-4 gap-2">
          {[500, 1000, 2000, 5000].map((v) => (
            <button
              key={v}
              className="bg-white rounded-lg py-2.5 text-xs font-bold shadow-sm flex items-center justify-center"
              style={{ color: BRAND }}
            >
              <IndianRupee className="w-3 h-3" />
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Transactions */}
      <div className="px-4 mt-5">
        <h3 className="text-xs font-bold text-gray-900 mb-2">Recent Transactions</h3>
        <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
          {txns.map((t, i) => (
            <div key={i} className="p-3 flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full grid place-items-center ${
                  t.amt > 0 ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {t.amt > 0 ? (
                  <ArrowDownLeft className="w-4 h-4 text-green-600" />
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-red-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-gray-900 truncate">{t.t}</div>
                <div className="text-[10px] text-gray-500">{t.time}</div>
              </div>
              <div
                className={`text-xs font-extrabold flex items-center ${
                  t.amt > 0 ? "text-green-600" : "text-gray-900"
                }`}
              >
                {t.amt > 0 ? "+" : "-"}
                <IndianRupee className="w-3 h-3" />
                {Math.abs(t.amt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BusinessScreen() {
  return (
    <div className="absolute inset-0 overflow-y-auto scrollbar-hide bg-[#F4F5FB] pb-24">
      <div
        className="pt-10 pb-4 px-4 text-white"
        style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND2} 100%)` }}
      >
        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-lg font-extrabold">My Business</h2>
          <button
            className="px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1"
            style={{ background: ORANGE }}
          >
            <Plus className="w-3 h-3" /> Add
          </button>
        </div>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {businesses.map((b) => (
          <div key={b.name} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div
              className="h-16 relative"
              style={{
                background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND2} 100%)`,
              }}
            >
              <div className="absolute -bottom-6 left-3 w-12 h-12 rounded-xl bg-white grid place-items-center shadow-md">
                <div
                  className="w-10 h-10 rounded-lg grid place-items-center text-white font-extrabold"
                  style={{ background: ORANGE }}
                >
                  {b.name[0]}
                </div>
              </div>
            </div>
            <div className="pt-7 px-3 pb-3">
              <div className="flex items-center gap-1.5">
                <div className="text-sm font-extrabold text-gray-900">{b.name}</div>
                {b.verified && <CheckCircle2 className="w-4 h-4 text-blue-500" />}
              </div>
              <div className="text-[10px] text-gray-500 mt-0.5 flex items-center gap-1">
                <Briefcase className="w-3 h-3" /> {b.cat}
                <Star className="w-3 h-3 ml-2 text-amber-500 fill-current" /> 4.{Math.floor(Math.random() * 5) + 4}
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-gray-100">
                {[
                  { l: "Ads", v: "4", i: Megaphone },
                  { l: "Leads", v: "24", i: Users },
                  { l: "Clicks", v: "1.2K", i: MousePointerClick },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <s.i className="w-3.5 h-3.5 mx-auto" style={{ color: BRAND }} />
                    <div className="text-xs font-bold text-gray-900 mt-0.5">{s.v}</div>
                    <div className="text-[9px] text-gray-500">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const tabs = [
  { id: "home", label: "Home", icon: Home, C: HomeScreen },
  { id: "ads", label: "Ads", icon: Megaphone, C: AdsScreen },
  { id: "leads", label: "Leads", icon: Users, C: LeadsScreen },
  { id: "wallet", label: "Wallet", icon: Wallet, C: WalletScreen },
  { id: "business", label: "Business", icon: Briefcase, C: BusinessScreen },
] as const;

export function LeadkartApp() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("home");
  const Active = tabs.find((t) => t.id === tab)!.C;

  return (
    <div className="absolute inset-0 bg-white overflow-hidden">
      <StatusBar />
      <Active />

      {/* Bottom tab bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-4 pt-1.5 z-20">
        <div className="flex justify-around items-center px-2">
          {tabs.map((t) => {
            const active = tab === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className="flex flex-col items-center gap-0.5 py-1 px-2 transition-all"
              >
                <div
                  className="w-10 h-7 rounded-full grid place-items-center transition-all"
                  style={{
                    background: active ? BRAND : "transparent",
                  }}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: active ? "white" : "#9CA3AF" }}
                  />
                </div>
                <span
                  className="text-[9px] font-bold"
                  style={{ color: active ? BRAND : "#9CA3AF" }}
                >
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
