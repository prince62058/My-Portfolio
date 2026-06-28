import { useEffect, useState } from "react";
import {
  Home as HomeIcon,
  Users,
  Smartphone,
  User,
  Bell,
  Search,
  ChevronRight,
  Lock,
  Unlock,
  CreditCard,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Wallet,
  FileText,
  LogOut,
  Settings,
  Edit3,
  Building2,
  KeyRound,
  History,
  HelpCircle,
  MessageSquare,
  Video,
  QrCode,
  ShieldCheck,
  Signal,
  Wifi,
  BatteryFull,
  Plus,
  Phone,
  MapPin,
} from "lucide-react";

// V-Locker brand
const C = {
  primary: "#3930D7",
  primary300: "#7872E4",
  primary400: "#5951DD",
  bg: "#F4F5FB",
  card: "#FFFFFF",
  text: "#0E1138",
  sub: "#6B6F8F",
  border: "#E6E8F2",
  blue: "#1C4C9C",
  blueLight: "#3B82F6",
  yellow: "#A06706",
  yellowLight: "#F59E0B",
  red: "#A52424",
  redLight: "#EF4444",
  purple: "#5C38AD",
  purpleLight: "#8B5CF6",
  teal: "#14B8A6",
  green: "#22C55E",
  orange: "#F97316",
  gray: "#6B7280",
};

type Tab = "home" | "customers" | "devices" | "profile";

function StatusBar() {
  const [time, setTime] = useState(() => {
    const d = new Date();
    return `${d.getHours().toString().padStart(2, "0")}:${d
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  });
  useEffect(() => {
    const t = setInterval(() => {
      const d = new Date();
      setTime(
        `${d.getHours().toString().padStart(2, "0")}:${d
          .getMinutes()
          .toString()
          .padStart(2, "0")}`,
      );
    }, 30000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex items-center justify-between px-6 pt-2 pb-1 text-[11px] font-semibold text-white relative z-30">
      <span>{time}</span>
      <div className="flex items-center gap-1">
        <Signal className="w-3 h-3" />
        <Wifi className="w-3 h-3" />
        <BatteryFull className="w-4 h-4" />
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  count,
  text,
  from,
  to,
}: {
  icon: any;
  count: number;
  text: string;
  from: string;
  to: string;
}) {
  return (
    <div
      className="flex-1 rounded-2xl p-3 text-white relative overflow-hidden shadow-sm"
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
      }}
    >
      <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-white/10" />
      <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center mb-2">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-2xl font-extrabold leading-none">{count}</div>
      <div className="text-[10px] font-medium mt-1 opacity-95">{text}</div>
    </div>
  );
}

function LoanRow({
  icon: Icon,
  text,
  from,
  to,
}: {
  icon: any;
  text: string;
  from: string;
  to: string;
}) {
  return (
    <button
      className="w-full rounded-2xl p-3 text-white flex items-center gap-3 shadow-sm active:scale-[0.99] transition"
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
      }}
    >
      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 text-left text-[13px] font-semibold">{text}</div>
      <ChevronRight className="w-4 h-4 opacity-80" />
    </button>
  );
}

function HomeScreen() {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-hide pb-24">
      {/* Header */}
      <div
        className="px-4 pt-3 pb-6 rounded-b-3xl"
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, ${C.primary400} 60%, ${C.primary300} 100%)`,
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" style={{ color: C.primary }} />
            </div>
            <div className="text-white">
              <div className="text-[10px] opacity-80 font-medium">Welcome</div>
              <div className="text-sm font-bold">V-Locker</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bell className="w-4 h-4 text-white" />
            </button>
            <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white text-xs font-bold">
              P
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-white/10 backdrop-blur p-3 border border-white/20">
          <div className="flex items-center justify-between text-white">
            <div>
              <div className="text-[10px] opacity-80">Total Portfolio</div>
              <div className="text-xl font-extrabold">₹ 14,82,500</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] opacity-80">Active EMIs</div>
              <div className="text-base font-bold">42</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-3 space-y-3">
        <div className="flex gap-3">
          <StatCard
            icon={CheckCircle2}
            count={128}
            text="Enrolled Devices"
            from={C.blueLight}
            to={C.blue}
          />
          <StatCard
            icon={AlertCircle}
            count={12}
            text="Not Active Devices"
            from={C.yellowLight}
            to={C.yellow}
          />
        </div>
        <div className="flex gap-3">
          <StatCard
            icon={XCircle}
            count={6}
            text="Deactivated Devices"
            from={C.redLight}
            to={C.red}
          />
          <StatCard
            icon={Lock}
            count={18}
            text="Locked Devices"
            from={C.purpleLight}
            to={C.purple}
          />
        </div>

        <div className="pt-2 space-y-2">
          <LoanRow icon={CreditCard} text="All Loans" from="#14B8A6" to="#002C27" />
          <LoanRow icon={TrendingUp} text="Loans (Running Device)" from="#04453E" to="#001D1A" />
          <LoanRow icon={Plus} text="Loans (New Device)" from="#4ADE80" to="#042410" />
          <LoanRow icon={Users} text="All Customers" from="#6366F1" to="#0D0E3F" />
          <LoanRow icon={AlertCircle} text="Due Installments" from="#F97316" to="#733306" />
          <LoanRow icon={Unlock} text="Bulk Lock / Unlock" from="#6B7280" to="#16171A" />
        </div>
      </div>
    </div>
  );
}

function CustomersScreen() {
  const customers = [
    { name: "Rajesh Sharma", phone: "+91 98765 43210", loc: "Bhopal, MP", loans: 2, verified: true },
    { name: "Amit Verma", phone: "+91 91234 56789", loc: "Indore, MP", loans: 1, verified: true },
    { name: "Neha Singh", phone: "+91 99887 76655", loc: "Jaipur, RJ", loans: 1, verified: false },
    { name: "Vikas Kumar", phone: "+91 88990 11223", loc: "Pune, MH", loans: 3, verified: true },
    { name: "Priya Patel", phone: "+91 97778 22334", loc: "Surat, GJ", loans: 1, verified: true },
    { name: "Sunil Yadav", phone: "+91 90909 80808", loc: "Lucknow, UP", loans: 2, verified: false },
  ];
  return (
    <div className="flex-1 overflow-y-auto scrollbar-hide pb-24">
      <div
        className="px-4 pt-3 pb-4"
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, ${C.primary400} 100%)`,
        }}
      >
        <div className="text-white text-base font-bold mb-3">Customers</div>
        <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            placeholder="Search by name or mobile"
            className="flex-1 outline-none text-xs bg-transparent"
          />
        </div>
      </div>
      <div className="px-4 pt-3 space-y-2">
        {customers.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-3 flex items-center gap-3 border"
            style={{ borderColor: C.border }}
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: C.primary }}
            >
              {c.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <div className="text-[13px] font-bold truncate" style={{ color: C.text }}>
                  {c.name}
                </div>
                {c.verified && (
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: C.green }} />
                )}
              </div>
              <div className="flex items-center gap-1 text-[10px]" style={{ color: C.sub }}>
                <Phone className="w-2.5 h-2.5" />
                {c.phone}
              </div>
              <div className="flex items-center gap-1 text-[10px]" style={{ color: C.sub }}>
                <MapPin className="w-2.5 h-2.5" />
                {c.loc}
              </div>
            </div>
            <div
              className="text-[10px] font-bold px-2 py-1 rounded-full"
              style={{ background: `${C.primary}15`, color: C.primary }}
            >
              {c.loans} Loans
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute bottom-20 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
        style={{ background: C.primary }}
      >
        <Plus className="w-5 h-5" />
      </button>
    </div>
  );
}

function DevicesScreen() {
  const tabs = ["All", "Active", "Locked", "Due"];
  const [active, setActive] = useState(0);
  const devices = [
    { model: "Redmi Note 13", imei: "8654...1209", customer: "Rajesh Sharma", emi: "₹ 2,850", status: "active" as const, due: "5 Dec" },
    { model: "Realme C55", imei: "3514...7821", customer: "Amit Verma", emi: "₹ 1,990", status: "locked" as const, due: "Overdue" },
    { model: "Vivo Y28", imei: "9921...5103", customer: "Neha Singh", emi: "₹ 2,200", status: "active" as const, due: "12 Dec" },
    { model: "Samsung M14", imei: "7765...0934", customer: "Vikas Kumar", emi: "₹ 3,100", status: "due" as const, due: "Today" },
    { model: "Poco M6", imei: "4432...8866", customer: "Priya Patel", emi: "₹ 1,750", status: "active" as const, due: "20 Dec" },
  ];
  const statusStyle = (s: "active" | "locked" | "due") => {
    if (s === "active") return { bg: "#DCFCE7", fg: C.green, label: "Active", icon: CheckCircle2 };
    if (s === "locked") return { bg: "#FEE2E2", fg: C.redLight, label: "Locked", icon: Lock };
    return { bg: "#FEF3C7", fg: C.yellowLight, label: "Due", icon: AlertCircle };
  };
  return (
    <div className="flex-1 overflow-y-auto scrollbar-hide pb-24">
      <div
        className="px-4 pt-3 pb-4"
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, ${C.primary400} 100%)`,
        }}
      >
        <div className="text-white text-base font-bold mb-3">Devices</div>
        <div className="flex gap-1.5 bg-white/15 rounded-xl p-1">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className="flex-1 py-1.5 rounded-lg text-[11px] font-bold transition"
              style={{
                background: active === i ? "#fff" : "transparent",
                color: active === i ? C.primary : "#fff",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="px-4 pt-3 space-y-2">
        {devices.map((d, i) => {
          const s = statusStyle(d.status);
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-3 border"
              style={{ borderColor: C.border }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${C.primary}10` }}
                >
                  <Smartphone className="w-5 h-5" style={{ color: C.primary }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-[13px] font-bold" style={{ color: C.text }}>
                      {d.model}
                    </div>
                    <div
                      className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold"
                      style={{ background: s.bg, color: s.fg }}
                    >
                      <Icon className="w-2.5 h-2.5" />
                      {s.label}
                    </div>
                  </div>
                  <div className="text-[10px]" style={{ color: C.sub }}>
                    IMEI: {d.imei}
                  </div>
                  <div className="text-[11px] font-medium mt-0.5" style={{ color: C.text }}>
                    {d.customer}
                  </div>
                  <div
                    className="flex items-center justify-between mt-2 pt-2 border-t"
                    style={{ borderColor: C.border }}
                  >
                    <div>
                      <div className="text-[9px]" style={{ color: C.sub }}>
                        Next EMI
                      </div>
                      <div className="text-[12px] font-bold" style={{ color: C.primary }}>
                        {d.emi}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px]" style={{ color: C.sub }}>
                        Due Date
                      </div>
                      <div className="text-[11px] font-bold" style={{ color: C.text }}>
                        {d.due}
                      </div>
                    </div>
                    <button
                      className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-white"
                      style={{
                        background: d.status === "locked" ? C.green : C.primary,
                      }}
                    >
                      {d.status === "locked" ? "Unlock" : "Lock"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProfileScreen() {
  const items = [
    { icon: Edit3, title: "Edit Profile", sub: "Edit your Profile." },
    { icon: ShieldCheck, title: "App Lock", sub: "Keep your app access safe." },
    { icon: Building2, title: "Bank Details", sub: "Edit your bank info." },
    { icon: QrCode, title: "Customer App QR", sub: "Install Customer App." },
    { icon: Settings, title: "Extra Features", sub: "Manage advanced settings." },
    { icon: Video, title: "Installation Videos", sub: "Watch setup & usage." },
    { icon: HelpCircle, title: "Support", sub: "Get help & support." },
    { icon: MessageSquare, title: "Feedback", sub: "Share your feedback." },
    { icon: KeyRound, title: "Request Keys", sub: "Ask for new keys." },
    { icon: History, title: "Keys History", sub: "View key activity." },
  ];
  return (
    <div className="flex-1 overflow-y-auto scrollbar-hide pb-24">
      <div
        className="px-4 pt-3 pb-12 rounded-b-3xl"
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, ${C.primary400} 100%)`,
        }}
      >
        <div className="text-white text-base font-bold mb-3">Profile</div>
      </div>
      <div className="px-4 -mt-8">
        <div
          className="rounded-2xl bg-white p-4 flex items-center gap-3 border shadow-sm"
          style={{ borderColor: C.border }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold"
            style={{ background: C.primary }}
          >
            PK
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold" style={{ color: C.text }}>
              Prince Kumar
            </div>
            <div className="text-[11px]" style={{ color: C.sub }}>
              +91 98765 43210
            </div>
            <div className="text-[11px]" style={{ color: C.sub }}>
              prince@v-locker.app
            </div>
          </div>
          <div
            className="px-2 py-1 rounded-full text-[9px] font-bold"
            style={{ background: `${C.green}20`, color: C.green }}
          >
            DEALER
          </div>
        </div>

        <div className="mt-4 mb-2 text-[11px] font-bold uppercase tracking-wider" style={{ color: C.sub }}>
          Manage Account
        </div>
        <div className="space-y-1.5">
          {items.map((it, i) => (
            <button
              key={i}
              className="w-full bg-white rounded-xl p-2.5 flex items-center gap-3 border active:bg-gray-50 transition"
              style={{ borderColor: C.border }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: `${C.primary}12` }}
              >
                <it.icon className="w-4 h-4" style={{ color: C.primary }} />
              </div>
              <div className="flex-1 text-left">
                <div className="text-[12px] font-bold" style={{ color: C.text }}>
                  {it.title}
                </div>
                <div className="text-[10px]" style={{ color: C.sub }}>
                  {it.sub}
                </div>
              </div>
              <ChevronRight className="w-4 h-4" style={{ color: C.sub }} />
            </button>
          ))}
          <button
            className="w-full bg-white rounded-xl p-2.5 flex items-center gap-3 border active:bg-gray-50 transition"
            style={{ borderColor: C.border }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: `${C.redLight}15` }}
            >
              <LogOut className="w-4 h-4" style={{ color: C.redLight }} />
            </div>
            <div className="flex-1 text-left">
              <div className="text-[12px] font-bold" style={{ color: C.redLight }}>
                Logout
              </div>
              <div className="text-[10px]" style={{ color: C.sub }}>
                Sign out from your account.
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export function VLockerApp() {
  const [tab, setTab] = useState<Tab>("home");
  const tabs: { id: Tab; label: string; icon: any }[] = [
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "customers", label: "Customers", icon: Users },
    { id: "devices", label: "Devices", icon: Smartphone },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: C.bg }}>
      {/* Top status-bar background */}
      <div
        className="absolute top-0 left-0 right-0 h-8 z-20"
        style={{ background: C.primary }}
      />
      <div className="relative z-30">
        <StatusBar />
      </div>

      <div className="flex-1 relative overflow-hidden">
        {tab === "home" && <HomeScreen />}
        {tab === "customers" && <CustomersScreen />}
        {tab === "devices" && <DevicesScreen />}
        {tab === "profile" && <ProfileScreen />}
      </div>

      {/* Bottom tab bar */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-white border-t flex items-center justify-around px-2 pt-1.5 pb-3 z-40"
        style={{ borderColor: C.border }}
      >
        {tabs.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="flex-1 flex flex-col items-center gap-0.5 py-1"
            >
              <div
                className="w-10 h-7 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: active ? `${C.primary}15` : "transparent",
                }}
              >
                <t.icon
                  className="w-4 h-4"
                  style={{ color: active ? C.primary : C.sub }}
                />
              </div>
              <span
                className="text-[9px] font-bold"
                style={{ color: active ? C.primary : C.sub }}
              >
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
