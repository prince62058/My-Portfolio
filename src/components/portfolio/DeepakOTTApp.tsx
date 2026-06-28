import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Home as HomeIcon,
  Search,
  Grid3x3,
  User,
  Play,
  Plus,
  Bell,
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  Wallet,
  Pencil,
  Clock,
  Landmark,
  Gift,
  HelpCircle,
  FileText,
  Globe,
  LogOut,
  Wifi,
  BatteryFull,
  Signal,
  Crown,
} from "lucide-react";

/**
 * Faithful UI replica of the real Deepak OTT React Native app
 * (github.com/prince62058/DeepakOTTMobileApp).
 *
 * Matches the actual app's:
 *  - Light theme, white background
 *  - Brand: primary #FF3C00 + red→amber linear gradient (#FC0000 → #F6960E)
 *  - 4-tab bottom nav: Home / Categories / Wishlist / Profile
 *  - HomeHeader (logo + greeting + bell + avatar)
 *  - Hero Slider → Continue Watching → Trending Now → Recommended
 *  - Profile: avatar + crown badge + "My Content & Rewards" list rows
 *
 * Pure React + Tailwind — no native deps, runs inside the portfolio phone frame.
 */

type Movie = {
  id: string;
  title: string;
  genre: string;
  year: number;
  rating: number;
  gradient: string;
  emoji: string;
};

const MOVIES: Movie[] = [
  { id: "1", title: "Mirzapur", genre: "Crime · Drama", year: 2024, rating: 9.1, gradient: "from-red-700 via-orange-600 to-yellow-500", emoji: "🔫" },
  { id: "2", title: "Pathaan", genre: "Action", year: 2023, rating: 8.4, gradient: "from-slate-900 via-blue-800 to-cyan-500", emoji: "🕶️" },
  { id: "3", title: "Animal", genre: "Thriller", year: 2023, rating: 8.7, gradient: "from-red-900 via-rose-700 to-orange-500", emoji: "🐺" },
  { id: "4", title: "Jawan", genre: "Action", year: 2023, rating: 8.9, gradient: "from-amber-700 via-red-600 to-rose-700", emoji: "⚡" },
  { id: "5", title: "Sacred Games", genre: "Crime", year: 2022, rating: 8.6, gradient: "from-emerald-900 via-teal-700 to-cyan-600", emoji: "🎭" },
  { id: "6", title: "Dunki", genre: "Drama", year: 2024, rating: 7.8, gradient: "from-blue-800 via-indigo-700 to-purple-600", emoji: "✈️" },
  { id: "7", title: "Tiger 3", genre: "Action", year: 2023, rating: 8.2, gradient: "from-orange-700 via-red-700 to-rose-800", emoji: "🐅" },
  { id: "8", title: "Salaar", genre: "Action", year: 2023, rating: 8.5, gradient: "from-zinc-900 via-stone-700 to-amber-700", emoji: "⚔️" },
  { id: "9", title: "12th Fail", genre: "Biopic", year: 2023, rating: 9.2, gradient: "from-yellow-700 via-amber-600 to-orange-500", emoji: "📚" },
  { id: "10", title: "Leo", genre: "Action", year: 2023, rating: 8.1, gradient: "from-violet-900 via-fuchsia-700 to-pink-600", emoji: "🦁" },
];

const HERO = [MOVIES[3], MOVIES[0], MOVIES[2]];

const CATEGORIES = [
  { name: "Movies", icon: "🎬", count: 248 },
  { name: "Web Series", icon: "📺", count: 86 },
  { name: "Action", icon: "💥", count: 124 },
  { name: "Drama", icon: "🎭", count: 92 },
  { name: "Comedy", icon: "😂", count: 67 },
  { name: "Thriller", icon: "🔪", count: 54 },
  { name: "Romance", icon: "💕", count: 41 },
  { name: "Devotional", icon: "🕉️", count: 28 },
];

// Brand gradient used throughout the real app (LinearGradient #FC0000 → #F6960E)
const BRAND_GRADIENT = "linear-gradient(135deg, #FC0000 0%, #F6960E 100%)";

type Tab = "home" | "categories" | "wishlist" | "profile";
type Screen = { tab: Tab; movie?: Movie };

function StatusBar() {
  const [time, setTime] = useState("9:41");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(`${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`);
    };
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-6 pt-2 pb-1 text-[10px] font-semibold text-gray-900">
      <span className="ml-1">{time}</span>
      <div className="flex items-center gap-1">
        <Signal className="w-2.5 h-2.5" />
        <Wifi className="w-2.5 h-2.5" />
        <BatteryFull className="w-3 h-3" />
      </div>
    </div>
  );
}

function HomeHeader() {
  return (
    <div className="flex items-center justify-between px-3 pt-8 pb-2 bg-white">
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black text-white shadow"
          style={{ background: BRAND_GRADIENT }}
        >
          D
        </div>
        <div className="leading-tight">
          <div className="text-[8px] text-gray-500">Welcome back</div>
          <div className="text-[11px] font-bold text-gray-900">Prince Kumar</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Bell className="w-4 h-4 text-gray-700" />
          <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#FF3C00]" />
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 ring-2 ring-orange-200" />
      </div>
    </div>
  );
}

function Slider({ onOpen }: { onOpen: (m: Movie) => void }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO.length), 3500);
    return () => clearInterval(t);
  }, []);
  const hero = HERO[idx];
  return (
    <div className="relative h-52 mx-3 mt-1 rounded-2xl overflow-hidden shadow-md">
      <AnimatePresence mode="wait">
        <motion.div
          key={hero.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={`absolute inset-0 bg-gradient-to-br ${hero.gradient}`}
        >
          <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-30">
            {hero.emoji}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="inline-block px-1.5 py-0.5 rounded text-[8px] font-bold text-white mb-1" style={{ background: BRAND_GRADIENT }}>
              #1 TRENDING
            </div>
            <h2 className="text-white text-xl font-black mb-0.5">{hero.title}</h2>
            <p className="text-[9px] text-white/80 mb-2">{hero.genre} · {hero.year}</p>
            <div className="flex gap-1.5">
              <button
                onClick={() => onOpen(hero)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md text-white text-[10px] font-bold shadow"
                style={{ background: BRAND_GRADIENT }}
              >
                <Play className="w-3 h-3 fill-white" /> Play
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/20 backdrop-blur text-white text-[10px] font-bold border border-white/30">
                <Plus className="w-3 h-3" /> My List
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-2 right-3 flex gap-1 z-10">
        {HERO.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all ${i === idx ? "w-4" : "w-1 bg-white/50"}`}
            style={i === idx ? { background: BRAND_GRADIENT } : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function Poster({ m, size = "md", onClick }: { m: Movie; size?: "sm" | "md" | "lg"; onClick?: () => void }) {
  const dims = size === "sm" ? "w-20 h-28" : size === "lg" ? "w-32 h-44" : "w-24 h-36";
  return (
    <button onClick={onClick} className={`${dims} flex-shrink-0 rounded-xl overflow-hidden relative bg-gradient-to-br ${m.gradient} shadow-sm`}>
      <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50">{m.emoji}</div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-1.5 text-left">
        <div className="text-[10px] font-bold text-white truncate">{m.title}</div>
        <div className="flex items-center gap-0.5 text-[8px] text-white/80">
          <Star className="w-2 h-2 fill-yellow-400 text-yellow-400" />
          {m.rating}
        </div>
      </div>
    </button>
  );
}

function ContinueCard({ m, onClick }: { m: Movie; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="w-44 flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
      <div className={`relative h-24 bg-gradient-to-br ${m.gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-40">{m.emoji}</div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
            <Play className="w-3.5 h-3.5 fill-[#FF3C00] text-[#FF3C00]" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
          <div className="h-full w-2/3" style={{ background: BRAND_GRADIENT }} />
        </div>
      </div>
      <div className="p-1.5 text-left">
        <div className="text-[10px] font-bold text-gray-900 truncate">{m.title}</div>
        <div className="text-[8px] text-gray-500">E{Math.ceil(m.rating)} · 24 min left</div>
      </div>
    </button>
  );
}

function Rail({ title, movies, onOpen, onSeeAll }: { title: string; movies: Movie[]; onOpen: (m: Movie) => void; onSeeAll?: () => void }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between px-3 mb-2">
        <h3 className="text-gray-900 text-xs font-bold">{title}</h3>
        <button onClick={onSeeAll} className="text-[9px] font-semibold" style={{ color: "#FF3C00" }}>See all</button>
      </div>
      <div className="flex gap-2 px-3 overflow-x-auto scrollbar-hide pb-1">
        {movies.map((m) => <Poster key={m.id} m={m} onClick={() => onOpen(m)} />)}
      </div>
    </div>
  );
}

function HomeScreen({ onOpen }: { onOpen: (m: Movie) => void }) {
  return (
    <div className="absolute inset-0 overflow-y-auto scrollbar-hide bg-white pb-20">
      <StatusBar />
      <HomeHeader />
      <Slider onOpen={onOpen} />

      {/* Continue Watching */}
      <div className="mt-3 mb-4">
        <div className="flex items-center justify-between px-3 mb-2">
          <h3 className="text-gray-900 text-xs font-bold">Continue Watching</h3>
          <button className="text-[9px] font-semibold" style={{ color: "#FF3C00" }}>See all</button>
        </div>
        <div className="flex gap-2 px-3 overflow-x-auto scrollbar-hide pb-1">
          {MOVIES.slice(0, 4).map((m) => <ContinueCard key={m.id} m={m} onClick={() => onOpen(m)} />)}
        </div>
      </div>

      <Rail title="Trending Now" movies={MOVIES.slice(0, 6)} onOpen={onOpen} />
      <Rail title="Recommended for You" movies={[...MOVIES].reverse().slice(0, 6)} onOpen={onOpen} />
      <Rail title="New Releases" movies={MOVIES.slice(4, 10)} onOpen={onOpen} />
    </div>
  );
}

function CategoriesScreen({ onOpen }: { onOpen: (m: Movie) => void }) {
  const [tab, setTab] = useState<"MOVIE" | "SERIES">("MOVIE");
  const [q, setQ] = useState("");
  const filtered = q ? MOVIES.filter((m) => m.title.toLowerCase().includes(q.toLowerCase())) : MOVIES;
  return (
    <div className="absolute inset-0 overflow-y-auto scrollbar-hide bg-white pb-20">
      <StatusBar />
      <div className="px-3 pt-8 pb-2 sticky top-0 bg-white z-20">
        <h2 className="text-gray-900 text-base font-black mb-2">Categories</h2>
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2 mb-2">
          <Search className="w-3.5 h-3.5 text-gray-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search movies, web series..."
            className="bg-transparent text-gray-900 text-[11px] outline-none flex-1 placeholder:text-gray-400"
          />
        </div>
        {/* Tabs */}
        <div className="flex gap-2">
          {(["MOVIE", "SERIES"] as const).map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-1.5 rounded-full text-[10px] font-bold transition ${active ? "text-white shadow" : "bg-gray-100 text-gray-600"}`}
                style={active ? { background: BRAND_GRADIENT } : undefined}
              >
                {t === "MOVIE" ? "Movies" : "Web Series"}
              </button>
            );
          })}
        </div>
      </div>

      {/* Genre chips */}
      <div className="flex gap-1.5 overflow-x-auto scrollbar-hide px-3 py-2">
        {["All", "Action", "Drama", "Thriller", "Comedy", "Romance", "Devotional"].map((g, i) => (
          <button
            key={g}
            className={`px-2.5 py-1 rounded-full text-[9px] font-semibold whitespace-nowrap ${i === 0 ? "text-white" : "bg-gray-100 text-gray-700"}`}
            style={i === 0 ? { background: BRAND_GRADIENT } : undefined}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Quick categories */}
      <div className="grid grid-cols-4 gap-2 px-3 mb-3">
        {CATEGORIES.slice(0, 4).map((c) => (
          <button key={c.name} className="flex flex-col items-center gap-1 p-2 rounded-xl bg-gray-50">
            <div className="text-xl">{c.icon}</div>
            <div className="text-[8px] font-semibold text-gray-700 truncate w-full text-center">{c.name}</div>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="px-3 grid grid-cols-3 gap-2">
        {filtered.map((m) => <Poster key={m.id} m={m} size="sm" onClick={() => onOpen(m)} />)}
        {filtered.length === 0 && (
          <div className="col-span-3 text-center text-gray-400 text-xs py-12">No results for "{q}"</div>
        )}
      </div>
    </div>
  );
}

function WishlistScreen({ onOpen }: { onOpen: (m: Movie) => void }) {
  const list = MOVIES.slice(2, 8);
  return (
    <div className="absolute inset-0 overflow-y-auto scrollbar-hide bg-white pb-20">
      <StatusBar />
      <div className="px-3 pt-8 pb-2 flex items-center justify-between">
        <h2 className="text-gray-900 text-base font-black">My Wishlist</h2>
        <span className="text-[10px] text-gray-500">{list.length} items</span>
      </div>
      <div className="px-3 space-y-2">
        {list.map((m) => (
          <button
            key={m.id}
            onClick={() => onOpen(m)}
            className="w-full flex gap-2 p-2 rounded-xl bg-gray-50 active:bg-gray-100"
          >
            <div className={`w-16 h-20 rounded-lg bg-gradient-to-br ${m.gradient} flex-shrink-0 flex items-center justify-center text-2xl`}>
              {m.emoji}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="text-[12px] font-bold text-gray-900 truncate">{m.title}</div>
              <div className="text-[9px] text-gray-500">{m.genre} · {m.year}</div>
              <div className="flex items-center gap-0.5 mt-1 text-[9px] text-gray-700">
                <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                {m.rating}
                <span className="ml-2 px-1.5 py-0.5 rounded text-[7px] font-bold text-white" style={{ background: BRAND_GRADIENT }}>HD</span>
              </div>
            </div>
            <Heart className="w-4 h-4 fill-[#FF3C00] text-[#FF3C00] self-center" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProfileRow({ icon: Icon, label, danger }: { icon: typeof HomeIcon; label: string; danger?: boolean }) {
  return (
    <button className="w-full flex items-center justify-between px-3 py-2.5 active:bg-gray-50">
      <div className="flex items-center gap-2.5">
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${danger ? "bg-red-50" : "bg-orange-50"}`}>
          <Icon className={`w-3.5 h-3.5 ${danger ? "text-red-500" : "text-[#FF3C00]"}`} />
        </div>
        <span className={`text-[11px] font-medium ${danger ? "text-red-500" : "text-gray-800"}`}>{label}</span>
      </div>
      {!danger && <ChevronRight className="w-3.5 h-3.5 text-gray-400" />}
    </button>
  );
}

function ProfileScreen() {
  return (
    <div className="absolute inset-0 overflow-y-auto scrollbar-hide bg-gray-50 pb-20">
      <StatusBar />
      <div className="px-3 pt-8 pb-3 bg-white">
        <h2 className="text-gray-900 text-base font-black">Profile</h2>
      </div>

      {/* Profile card */}
      <div className="px-3 py-3 bg-white flex items-center gap-3 border-b border-gray-100">
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-orange-500 flex items-center justify-center text-xl font-black text-white">
            P
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow">
            <Pencil className="w-2.5 h-2.5 text-[#FF3C00]" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-bold text-gray-900">Prince Kumar</div>
          <div className="flex items-center gap-1 mt-0.5">
            <Crown className="w-3 h-3 text-amber-500 fill-amber-400" />
            <span className="text-[9px] font-semibold text-amber-600">Premium Plan · Active</span>
          </div>
          <div className="text-[9px] text-gray-500 mt-0.5">+91 98765 43210</div>
        </div>
      </div>

      {/* My Content & Rewards */}
      <div className="mt-2">
        <h3 className="px-3 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider">My Content & Rewards</h3>
        <div className="bg-white divide-y divide-gray-100">
          <ProfileRow icon={Pencil} label="Edit Profile" />
          <ProfileRow icon={Clock} label="Watch History" />
          <ProfileRow icon={Wallet} label="Wallet" />
          <ProfileRow icon={Landmark} label="Add Payment Method" />
          <ProfileRow icon={Gift} label="Rewards & Referral" />
        </div>
      </div>

      {/* Account Settings */}
      <div className="mt-2">
        <h3 className="px-3 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Account Settings</h3>
        <div className="bg-white divide-y divide-gray-100">
          <ProfileRow icon={HelpCircle} label="FAQs" />
          <ProfileRow icon={FileText} label="Terms & Conditions" />
          <ProfileRow icon={Globe} label="Language" />
          <ProfileRow icon={LogOut} label="Log Out" danger />
        </div>
      </div>

      <div className="text-center text-[8px] text-gray-400 mt-3">Deepak OTT v2.4.1</div>
    </div>
  );
}

function DetailScreen({ m, onBack }: { m: Movie; onBack: () => void }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 bg-white overflow-y-auto scrollbar-hide"
    >
      <div className={`relative h-60 bg-gradient-to-br ${m.gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-40">{m.emoji}</div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />
        <button onClick={onBack} className="absolute top-9 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow">
          <ChevronLeft className="w-4 h-4 text-gray-900" />
        </button>
        <button className="absolute top-9 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow">
          <Heart className="w-4 h-4 text-[#FF3C00]" />
        </button>
        <div className="absolute bottom-3 left-3 right-3">
          <h1 className="text-white text-2xl font-black mb-1 drop-shadow">{m.title}</h1>
          <div className="flex items-center gap-2 text-[10px] text-white/95">
            <span className="flex items-center gap-0.5">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {m.rating}
            </span>
            <span>·</span><span>{m.year}</span><span>·</span><span>{m.genre}</span>
            <span className="ml-auto px-1.5 py-0.5 rounded text-[8px] font-bold text-white" style={{ background: BRAND_GRADIENT }}>HD</span>
          </div>
        </div>
      </div>

      <div className="px-3 py-3">
        <div className="flex gap-2 mb-3">
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-white text-xs font-bold shadow" style={{ background: BRAND_GRADIENT }}>
            <Play className="w-3.5 h-3.5 fill-white" /> Watch Now
          </button>
          <button className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
            <Plus className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        <p className="text-gray-700 text-[11px] leading-relaxed mb-3">
          A gripping {m.genre.toLowerCase()} that takes you on an unforgettable journey. Critically acclaimed and loved by millions. Now streaming exclusively on Deepak OTT.
        </p>

        <h3 className="text-gray-900 text-xs font-bold mb-2">Episodes</h3>
        <div className="space-y-1.5">
          {[1, 2, 3, 4].map((e) => (
            <div key={e} className="flex gap-2 p-2 rounded-xl bg-gray-50">
              <div className={`w-20 h-12 rounded-lg bg-gradient-to-br ${m.gradient} flex-shrink-0 flex items-center justify-center`}>
                <Play className="w-4 h-4 fill-white text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-gray-900 text-[10px] font-bold">E{e}. Episode {e}</div>
                <div className="text-gray-500 text-[9px] line-clamp-2">An intense chapter unfolds as our hero faces new challenges.</div>
                <div className="text-gray-400 text-[8px] mt-0.5">42 min</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function BottomTabs({ tab, onChange }: { tab: Tab; onChange: (t: Tab) => void }) {
  const tabs: { id: Tab; icon: typeof HomeIcon; label: string }[] = [
    { id: "home", icon: HomeIcon, label: "Home" },
    { id: "categories", icon: Grid3x3, label: "Categories" },
    { id: "wishlist", icon: Heart, label: "Wishlist" },
    { id: "profile", icon: User, label: "Profile" },
  ];
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-xl border-t border-gray-100 pb-2 pt-1.5 shadow-[0_-4px_12px_rgba(0,0,0,0.04)]">
      <div className="flex justify-around">
        {tabs.map((t) => {
          const active = tab === t.id;
          return (
            <button key={t.id} onClick={() => onChange(t.id)} className="flex flex-col items-center gap-0.5 py-1 px-3">
              <t.icon
                className="w-4 h-4 transition-colors"
                style={{ color: active ? "#FF3C00" : "#9CA3AF" }}
                strokeWidth={active ? 2.5 : 2}
                fill={active && t.id === "wishlist" ? "#FF3C00" : "none"}
              />
              <span className="text-[8px] font-semibold" style={{ color: active ? "#FF3C00" : "#9CA3AF" }}>
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function DeepakOTTApp() {
  const [screen, setScreen] = useState<Screen>({ tab: "home" });
  const open = (m: Movie) => setScreen((s) => ({ ...s, movie: m }));
  const back = () => setScreen((s) => ({ ...s, movie: undefined }));

  return (
    <div className="absolute inset-0 bg-white select-none">
      <AnimatePresence mode="wait">
        {screen.tab === "home" && !screen.movie && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
            <HomeScreen onOpen={open} />
          </motion.div>
        )}
        {screen.tab === "categories" && !screen.movie && (
          <motion.div key="cat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
            <CategoriesScreen onOpen={open} />
          </motion.div>
        )}
        {screen.tab === "wishlist" && !screen.movie && (
          <motion.div key="wish" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
            <WishlistScreen onOpen={open} />
          </motion.div>
        )}
        {screen.tab === "profile" && !screen.movie && (
          <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
            <ProfileScreen />
          </motion.div>
        )}
        {screen.movie && <DetailScreen key="detail" m={screen.movie} onBack={back} />}
      </AnimatePresence>
      {!screen.movie && <BottomTabs tab={screen.tab} onChange={(t) => setScreen({ tab: t })} />}
    </div>
  );
}
