import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";
import FriendDetails from "./pages/frienddetails";
import Timeline from "./pages/timeline";
import Stats from "./pages/stats";
import NotFoundPage from "./pages/notfoundpage";
import { defaultTimeline } from "./data/timeline";
import ToastStack from "./components/toaststack";

function usePersistentState(key, initialValue) {
  const [state, setState] = React.useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default function App() {
  const [timeline, setTimeline] = usePersistentState("kinkeeper-timeline", defaultTimeline);
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2500);
  };

  const addTimelineEntry = (friend, type) => {
    const labelMap = {
      call: "Call",
      text: "Text",
      video: "Video",
    };

    const entry = {
      id: Date.now(),
      friendId: friend.id,
      type,
      title: `${labelMap[type]} with ${friend.name}`,
      date: new Date().toISOString().split("T")[0],
    };

    setTimeline((prev) => [entry, ...prev]);
    showToast(`${labelMap[type]} logged for ${friend.name}`);
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-[#f4f6f8] text-slate-800">
         <Navbar />

        <main className="mx-auto min-h-[calc(100vh-208px)] max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage timeline={timeline} />} />
            <Route path="/friend/:id" element={<FriendDetails onAddTimelineEntry={addTimelineEntry} />} />
            <Route path="/timeline" element={<Timeline timeline={timeline} />} />
            <Route path="/stats" element={<Stats timeline={timeline} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <ToastStack toasts={toasts} />
      </div>
    </HashRouter>
  );
}
