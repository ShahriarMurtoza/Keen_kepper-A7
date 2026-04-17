import React from "react";
import HeroBanner from "../components/herobanner";
import FriendCard from "../components/friendcard";
import friends from "../data/friends";
import { LoaderCircle } from "lucide-react";

function LoadingState() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="animate-pulse">
            <div className="flex items-start justify-between">
              <div className="h-16 w-16 rounded-full bg-slate-200" />
              <div className="h-6 w-24 rounded-full bg-slate-200" />
            </div>
            <div className="mt-5 h-6 w-40 rounded bg-slate-200" />
            <div className="mt-3 h-4 w-32 rounded bg-slate-200" />
            <div className="mt-5 flex gap-2">
              <div className="h-7 w-20 rounded-full bg-slate-200" />
              <div className="h-7 w-24 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      ))}
      <div className="col-span-full flex items-center justify-center gap-3 pt-2 text-slate-500">
        <LoaderCircle className="h-5 w-5 animate-spin" />
        <span className="text-sm font-medium">Loading friends...</span>
      </div>
    </div>
  );
}

export default function HomePage({ timeline }) {
  const [loadedFriends, setLoadedFriends] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoadedFriends(friends);
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  const summary = React.useMemo(() => {
    return {
      totalFriends: loadedFriends.length,
      overdue: loadedFriends.filter((friend) => friend.status === "overdue").length,
      almostDue: loadedFriends.filter((friend) => friend.status === "almost due").length,
      onTrack: loadedFriends.filter((friend) => friend.status === "on-track").length,
      interactions: timeline.length,
    };
  }, [loadedFriends, timeline]);

  return (
    <div className="space-y-8">
      <HeroBanner summary={summary} />

      <section>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Your Friends</h2>
            <p className="mt-1 text-sm text-slate-500">
              Click any card to open the detail page and log a check-in.
            </p>
          </div>
          <div className="hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 text-right shadow-sm md:block">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Logged Interactions</p>
            <p className="text-xl font-bold text-[#184f43]">{summary.interactions}</p>
          </div>
        </div>

        {loading ? (
          <LoadingState />
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {loadedFriends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
