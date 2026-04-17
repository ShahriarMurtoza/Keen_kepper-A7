import React from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays } from "lucide-react";

const statusStyles = {
  overdue: "bg-red-100 text-red-600 border-red-200",
  "almost due": "bg-amber-100 text-amber-700 border-amber-200",
  "on-track": "bg-emerald-100 text-emerald-700 border-emerald-200",
};

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="group rounded-[24px] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#184f43]/20 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <img src={friend.picture} alt={friend.name} className="h-16 w-16 rounded-full object-cover" />
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize ${statusStyles[friend.status]}`}>
          {friend.status}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-slate-900">{friend.name}</h3>
      <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
        <CalendarDays className="h-4 w-4" />
        {friend.days_since_contact} days since contact
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {friend.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-[#e8f1ee] px-3 py-1 text-xs font-semibold text-[#184f43]">
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}
