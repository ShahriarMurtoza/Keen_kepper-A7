import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Clock3, BarChart3, Users } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { to: "/", label: "Home", icon: Home, end: true },
    { to: "/timeline", label: "Timeline", icon: Clock3 },
    { to: "/stats", label: "Stats", icon: BarChart3 },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#184f43] text-white shadow-sm">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900"><span className=" font-bolder">Keen</span>Keeper</p>
            <p className="text-xs font-medium text-slate-500">Keep every friendship warm</p>
          </div>
        </NavLink>

        <nav className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#184f43] text-white shadow-sm"
                    : "text-slate-600 hover:bg-white hover:text-slate-900"
                }`
              }
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
