import React from "react";
import { AnimatePresence  } from "framer-motion";
import { motion } from "framer-motion";

export default function ToastStack({ toasts }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.95 }}
            className="rounded-2xl border border-emerald-200 bg-white px-4 py-3 shadow-lg"
          >
            <p className="text-sm font-medium text-slate-800">{toast.message}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
