import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="max-w-xl rounded-[28px] border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#184f43]">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600">
          The page you are looking for does not exist. Go back to the home page and continue exploring your friendship dashboard.
        </p>
        <NavLink to="/" className="mt-6 inline-flex rounded-2xl bg-[#184f43] px-5 py-3 text-sm font-semibold text-white">
          Back to Home
        </NavLink>
      </div>
    </div>
  );
}
