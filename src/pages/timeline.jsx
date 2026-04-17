import React from "react";
import { Phone, MessageSquare, Video, Handshake, ChevronDown } from "lucide-react";

const actionMeta = {
  call: { icon: Phone, label: "Call" },
  text: { icon: MessageSquare, label: "Text" },
  video: { icon: Video, label: "Video" },
  meetup: { icon: Handshake, label: "Meetup" },
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function TimelineEntry({ entry }) {
  const meta = actionMeta[entry.type];
  const Icon = meta.icon;

  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm text-slate-800">
          <span className="font-semibold text-[#184f43]">{meta.label}</span>
          <span className="text-slate-500"> {entry.title.replace(`${meta.label} `, "")}</span>
        </p>
        <p className="mt-1 text-xs font-medium text-slate-500">{formatDate(entry.date)}</p>
      </div>
    </div>
  );
}

export default function Timeline({ timeline }) {
  const [filter, setFilter] = React.useState("all");

  const sortedTimeline = React.useMemo(() => {
    return [...timeline].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [timeline]);

  const filteredTimeline = React.useMemo(() => {
    if (filter === "all") return sortedTimeline;
    return sortedTimeline.filter((entry) => entry.type === filter);
  }, [filter, sortedTimeline]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Timeline</h1>
      </div>

      <div className="relative max-w-xs">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-500 shadow-sm outline-none transition focus:border-[#184f43]"
        >
          <option value="all">Filter timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>

      <div className="space-y-3">
        {filteredTimeline.map((entry) => (
          <TimelineEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
