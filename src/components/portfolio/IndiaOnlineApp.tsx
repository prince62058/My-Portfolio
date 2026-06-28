import { useState } from "react";
import {
  Home,
  Calendar,
  ShoppingCart,
  User,
  Bell,
  Search,
  Star,
  MapPin,
  ChevronRight,
  Wrench,
  Settings as Cog,
  Dumbbell,
  Activity,
  Heart,
  Truck,
} from "lucide-react";

const BRAND = "#EC2F07";
const BRAND_SOFT = "#FFE9E3";

const categories = [
  { icon: Dumbbell, label: "Treadmill" },
  { icon: Activity, label: "Cycle" },
  { icon: Heart, label: "Cross Trainer" },
  { icon: Cog, label: "Multi Gym" },
  { icon: Wrench, label: "AMC" },
  { icon: Truck, label: "Installation" },
];

const services = [
  {
    title: "Treadmill Repair & AMC",
    price: 799,
    rating: 4.6,
    reviews: 202,
    tag: "Bestseller",
  },
  {
    title: "Gym Equipment Installation",
    price: 999,
    rating: 4.8,
    reviews: 154,
    tag: "Pro",
  },
  {
    title: "Cycle Servicing at Home",
    price: 499,
    rating: 4.4,
    reviews: 318,
    tag: "Quick",
  },
  {
    title: "Multi Gym Deep Clean & Lube",
    price: 1299,
    rating: 4.9,
    reviews: 88,
    tag: "Premium",
  },
];

const bookings = [
  {
    status: "Upcoming",
    color: "#1080E9",
    title: "Treadmill AMC Service",
    pro: "Rahul Sharma",
    date: "Tue, 02 Jul",
    time: "10:30 AM",
  },
  {
    status: "Complete",
    color: "#389218",
    title: "Cycle Repair",
    pro: "Anil Verma",
    date: "Sat, 22 Jun",
    time: "12:00 PM",
  },
  {
    status: "Cancelled",
    color: "#EC2F07",
    title: "Cross Trainer Installation",
    pro: "Mohit Yadav",
    date: "Wed, 12 Jun",
    time: "04:00 PM",
  },
];

function StatusBar() {
  return (
    <div className="h-10 flex items-end justify-between px-6 pb-1 text-[11px] font-semibold text-black">
      <span>9:41</span>
      <span className="opacity-80">●●● 5G ▮</span>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="flex-1 overflow-y-auto bg-white" style={{ height: "100%" }}>
      <StatusBar />
      {/* Header */}
      <div className="px-4 pt-2 pb-3 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
          style={{ background: BRAND }}
        >
          P
        </div>
        <div className="flex-1 leading-tight">
          <div className="text-[13px] font-bold text-black">
            Easy Solutions Service
          </div>
          <div className="text-[10px] text-gray-500">Hi, Prince Kumar</div>
        </div>
        <button className="w-9 h-9 rounded-full grid place-items-center bg-gray-100">
          <Bell className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Search */}
      <div className="px-4">
        <div className="flex items-center gap-2 px-3 h-10 rounded-xl bg-gray-100">
          <Search className="w-4 h-4 text-gray-500" />
          <span className="text-[12px] text-gray-500">
            Search for treadmill, cycle, AMC…
          </span>
        </div>
      </div>

      {/* Hero banner */}
      <div className="px-4 mt-4">
        <div
          className="rounded-2xl p-4 text-white relative overflow-hidden"
          style={{
            background: `linear-gradient(120deg, ${BRAND} 0%, #FF6A3D 100%)`,
          }}
        >
          <div className="text-[10px] font-mono uppercase tracking-wider opacity-90">
            Monsoon Offer
          </div>
          <div className="text-[18px] font-extrabold leading-tight mt-1">
            Flat 30% Off on Gym Equipment AMC
          </div>
          <div className="text-[11px] mt-1 opacity-90">
            Use code <b>EASY30</b> · Valid till 31 Jul
          </div>
          <button className="mt-3 text-[11px] font-bold bg-white/95 text-black px-3 py-1.5 rounded-full">
            Book Now
          </button>
          <Dumbbell className="absolute -right-3 -bottom-3 w-24 h-24 opacity-20" />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-5">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[13px] font-bold text-black">Categories</div>
          <div
            className="text-[11px] font-semibold flex items-center"
            style={{ color: BRAND }}
          >
            See all <ChevronRight className="w-3 h-3" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {categories.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div
                className="w-14 h-14 rounded-2xl grid place-items-center"
                style={{ background: BRAND_SOFT }}
              >
                <Icon className="w-6 h-6" style={{ color: BRAND }} />
              </div>
              <div className="text-[9px] text-center text-gray-700 leading-tight">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular services */}
      <div className="px-4 mt-5 pb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[13px] font-bold text-black">
            Popular Services
          </div>
          <div
            className="text-[11px] font-semibold flex items-center"
            style={{ color: BRAND }}
          >
            View all <ChevronRight className="w-3 h-3" />
          </div>
        </div>
        <div className="space-y-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex gap-3 rounded-2xl p-2 border border-gray-100 shadow-sm bg-white"
            >
              <div
                className="w-20 h-20 rounded-xl grid place-items-center flex-shrink-0"
                style={{ background: BRAND_SOFT }}
              >
                <Wrench className="w-8 h-8" style={{ color: BRAND }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span
                    className="text-[8px] font-bold px-1.5 py-0.5 rounded-md text-white"
                    style={{ background: BRAND }}
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="text-[12px] font-semibold text-black mt-1 line-clamp-2 leading-snug">
                  {s.title}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Star
                    className="w-3 h-3 fill-current"
                    style={{ color: "#FFB400" }}
                  />
                  <span className="text-[10px] font-semibold text-gray-700">
                    {s.rating}
                  </span>
                  <span className="text-[9px] text-gray-400">
                    ({s.reviews})
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="text-[13px] font-extrabold text-black">
                    ₹{s.price}
                  </div>
                  <button
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                    style={{ borderColor: BRAND, color: BRAND }}
                  >
                    ADD +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BookingScreen() {
  const [tab, setTab] = useState<"Upcoming" | "Complete" | "Cancelled">(
    "Upcoming"
  );
  return (
    <div className="flex-1 overflow-y-auto bg-white" style={{ height: "100%" }}>
      <StatusBar />
      <div className="px-4 pb-3">
        <div className="text-[18px] font-extrabold text-black">My Bookings</div>
      </div>
      <div className="px-4 flex gap-2">
        {(["Upcoming", "Complete", "Cancelled"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="flex-1 h-9 rounded-full text-[11px] font-bold transition-all"
            style={{
              background: tab === t ? BRAND : BRAND_SOFT,
              color: tab === t ? "white" : BRAND,
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="px-4 mt-4 space-y-3 pb-6">
        {bookings
          .filter((b) => b.status === tab)
          .concat(bookings.filter((b) => b.status === tab))
          .map((b, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 shadow-sm p-3 bg-white"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full text-white"
                  style={{ background: b.color }}
                >
                  {b.status.toUpperCase()}
                </span>
                <span className="text-[10px] text-gray-400">#EZ{1024 + i}</span>
              </div>
              <div className="text-[13px] font-bold text-black mt-2">
                {b.title}
              </div>
              <div className="text-[10px] text-gray-500 mt-0.5">
                Pro: {b.pro}
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1 text-[10px] text-gray-600">
                  <Calendar className="w-3 h-3" /> {b.date} · {b.time}
                </div>
                <ChevronRight className="w-4 h-4" style={{ color: BRAND }} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function CartScreen() {
  const items = [
    { title: "Treadmill Repair & AMC", qty: 1, price: 799 },
    { title: "Cycle Servicing at Home", qty: 2, price: 499 },
  ];
  const sub = items.reduce((s, i) => s + i.qty * i.price, 0);
  return (
    <div className="flex-1 overflow-y-auto bg-white" style={{ height: "100%" }}>
      <StatusBar />
      <div className="px-4 pb-3">
        <div className="text-[18px] font-extrabold text-black">
          Service Cart
        </div>
        <div className="text-[10px] text-gray-500">{items.length} services</div>
      </div>
      <div className="px-4 space-y-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex gap-3 rounded-2xl p-2 border border-gray-100 bg-white"
          >
            <div
              className="w-16 h-16 rounded-xl grid place-items-center"
              style={{ background: BRAND_SOFT }}
            >
              <Wrench className="w-7 h-7" style={{ color: BRAND }} />
            </div>
            <div className="flex-1">
              <div className="text-[12px] font-semibold text-black leading-snug">
                {it.title}
              </div>
              <div className="text-[13px] font-extrabold mt-1 text-black">
                ₹{it.price}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <button
                  className="w-6 h-6 rounded-md text-white font-bold"
                  style={{ background: BRAND }}
                >
                  −
                </button>
                <span className="text-[11px] font-bold">{it.qty}</span>
                <button
                  className="w-6 h-6 rounded-md text-white font-bold"
                  style={{ background: BRAND }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-4 mt-4 rounded-2xl p-3 bg-gray-50">
        <div className="flex justify-between text-[11px] text-gray-600">
          <span>Subtotal</span>
          <span>₹{sub}</span>
        </div>
        <div className="flex justify-between text-[11px] text-gray-600 mt-1">
          <span>Visit charges</span>
          <span>₹49</span>
        </div>
        <div className="flex justify-between text-[13px] font-extrabold text-black mt-2 pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>₹{sub + 49}</span>
        </div>
      </div>
      <div className="px-4 mt-4 pb-6">
        <button
          className="w-full h-11 rounded-2xl font-bold text-white text-[13px]"
          style={{ background: BRAND }}
        >
          Proceed to Pay · ₹{sub + 49}
        </button>
      </div>
    </div>
  );
}

function ProfileScreen() {
  const items = [
    "My Addresses",
    "Wallet & Coupons",
    "Refer & Earn",
    "Help Center",
    "Privacy Policy",
    "FAQ",
  ];
  return (
    <div className="flex-1 overflow-y-auto bg-white" style={{ height: "100%" }}>
      <StatusBar />
      <div
        className="px-4 pt-4 pb-6 text-white relative"
        style={{
          background: `linear-gradient(135deg, ${BRAND} 0%, #FF6A3D 100%)`,
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-white/20 grid place-items-center text-xl font-extrabold ring-2 ring-white/40">
            PK
          </div>
          <div>
            <div className="text-[14px] font-bold">Prince Kumar</div>
            <div className="text-[10px] opacity-90">+91 ••••• •2058</div>
            <div className="flex items-center gap-1 text-[10px] mt-0.5 opacity-95">
              <MapPin className="w-3 h-3" /> Bhopal, India
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
          {[
            ["12", "Bookings"],
            ["₹540", "Wallet"],
            ["4.9", "Rating"],
          ].map(([v, l]) => (
            <div key={l} className="bg-white/15 rounded-xl py-2">
              <div className="text-[13px] font-extrabold">{v}</div>
              <div className="text-[9px] opacity-90">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 pt-3 pb-6">
        {items.map((label) => (
          <div
            key={label}
            className="flex items-center justify-between py-3 border-b border-gray-100"
          >
            <div className="text-[12px] text-black font-medium">{label}</div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        ))}
        <button
          className="w-full mt-4 h-10 rounded-2xl text-[12px] font-bold border"
          style={{ borderColor: BRAND, color: BRAND }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export function IndiaOnlineApp() {
  const [tab, setTab] = useState<"home" | "bookings" | "cart" | "profile">(
    "home"
  );
  const tabs = [
    { key: "home" as const, icon: Home, label: "Home" },
    { key: "bookings" as const, icon: Calendar, label: "Bookings" },
    { key: "cart" as const, icon: ShoppingCart, label: "Cart" },
    { key: "profile" as const, icon: User, label: "Profile" },
  ];
  return (
    <div className="w-full h-full flex flex-col bg-white text-black font-sans">
      <div className="flex-1 overflow-hidden">
        {tab === "home" && <HomeScreen />}
        {tab === "bookings" && <BookingScreen />}
        {tab === "cart" && <CartScreen />}
        {tab === "profile" && <ProfileScreen />}
      </div>
      {/* Bottom tab bar */}
      <div className="border-t border-gray-100 bg-white pb-4 pt-2 px-2 flex justify-around">
        {tabs.map(({ key, icon: Icon, label }) => {
          const active = tab === key;
          return (
            <button
              key={key}
              onClick={() => setTab(key)}
              className="flex flex-col items-center justify-center gap-0.5 flex-1"
            >
              <Icon
                className="w-5 h-5"
                style={{ color: active ? BRAND : "#9ca3af" }}
              />
              <span
                className="text-[9px] font-semibold"
                style={{ color: active ? BRAND : "#9ca3af" }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
