import React from "react";
import { UserPlus, Users, AlertTriangle, Clock3, CheckCircle2 } from "lucide-react";

export default function HeroBanner({ summary }) {
  const items = [
    { label: "Total Friends", value: summary.totalFriends, icon: Users },
    { label: "Overdue", value: summary.overdue, icon: AlertTriangle },
    { label: "Almost Due", value: summary.almostDue, icon: Clock3 },
    { label: "On-Track", value: summary.onTrack, icon: CheckCircle2 },
  ];

  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="bg-gradient-to-b from-white via-white to-[#eef3f1] px-6 py-12 sm:px-10 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Friends to keep close in your life
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#184f43] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px]">
            <UserPlus className="h-4 w-4" />
            Add a Friend
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-slate-100 px-6 py-6 sm:grid-cols-4 sm:px-10">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#184f43] shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-2xl font-bold text-slate-900">{item.value}</p>
              <p className="mt-1 text-sm text-slate-500">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
