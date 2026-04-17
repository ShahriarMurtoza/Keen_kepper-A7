import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#184f43] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight">KeenKeeper</h2>
        <p className="mt-2 text-sm text-white/80">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 px-4 py-6">
        <p className="text-center">Social Links</p>
        <img src="/Social Links.png" alt="" />
      </div>
      <hr />
      <div className="flex justify-between items-center px-6 py-4  text-gray-300 text-sm">
        <p className="ml-10">© 2026 KeenKeeper. All rights reserved.</p>
      
        <div className="flex gap-6 mr-10">
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer">Terms of Service</p>
          <p className="hover:text-white cursor-pointer">Cookies</p>
        </div>
      </div>
    </footer>
  );
}
