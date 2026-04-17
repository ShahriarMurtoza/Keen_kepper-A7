import React from "react";
import { useParams } from "react-router-dom";
import { Phone, MessageSquare, Video, BellOff, Archive, Trash2 } from "lucide-react";
import friends from "../data/friends";
import NotFoundPage from "./notfoundpage";

const statusStyles = {
  overdue: "bg-red-100 text-red-600 border-red-200",
  "almost due": "bg-amber-100 text-amber-700 border-amber-200",
  "on-track": "bg-emerald-100 text-emerald-700 border-emerald-200",
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function ActionButton({ icon: Icon, label, danger = false }) {
  return (
    <button
      className={`flex w-full items-center justify-center gap-3 rounded-2xl border bg-white px-5 py-4 text-lg font-medium shadow-sm transition hover:shadow-md ${
        danger ? "border-red-200 text-red-500" : "border-slate-200 text-slate-800"
      }`}
    >
      <Icon className="h-5 w-5" />
      {label}
    </button>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-6 text-center shadow-sm">
      <p className="text-4xl font-bold tracking-tight text-[#184f43]">{value}</p>
      <p className="mt-2 text-xl text-slate-500">{label}</p>
    </div>
  );
}

export default function FriendDetails({ onAddTimelineEntry }) {
  const { id } = useParams();
  const friend = friends.find((item) => item.id === Number(id));

  if (!friend) {
    return <NotFoundPage />;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-1">
          <div className="rounded-[22px] border border-slate-200 bg-white p-6 text-center shadow-sm">
            <img src={friend.picture} alt={friend.name} className="mx-auto h-20 w-20 rounded-full object-cover" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{friend.name}</h2>
            <div className="mt-3 flex justify-center">
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize ${statusStyles[friend.status]}`}>
                {friend.status}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#dff0e7] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2e7d54]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-5 text-lg italic text-slate-500">“{friend.bio}”</p>
            <p className="mt-2 text-sm text-slate-500">Preferred: {friend.email}</p>
          </div>

          <ActionButton icon={BellOff} label="Snooze 2 Weeks" />
          <ActionButton icon={Archive} label="Archive" />
          <ActionButton icon={Trash2} label="Delete" danger />
        </div>

        <div className="space-y-5 lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <StatCard value={friend.days_since_contact} label="Days Since Contact" />
            <StatCard value={friend.goal} label="Goal (Days)" />
            <StatCard value={formatDate(friend.next_due_date)} label="Next Due" />
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#184f43]">Relationship Goal</h3>
                <p className="mt-4 text-2xl text-slate-600">
                  Connect every <span className="font-bold text-slate-900">{friend.goal} days</span>
                </p>
              </div>
              <button className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                Edit
              </button>
            </div>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold tracking-tight text-[#184f43]">Quick Check-In</h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { type: "call", icon: Phone, label: "Call" },
                { type: "text", icon: MessageSquare, label: "Text" },
                { type: "video", icon: Video, label: "Video" },
              ].map(({ type, icon: Icon, label }) => (
                <button
                  key={type}
                  onClick={() => onAddTimelineEntry(friend, type)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-7 text-center transition hover:border-[#184f43]/20 hover:bg-white"
                >
                  <Icon className="mx-auto h-8 w-8 text-slate-700" />
                  <p className="mt-3 text-2xl font-medium text-slate-800">{label}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
