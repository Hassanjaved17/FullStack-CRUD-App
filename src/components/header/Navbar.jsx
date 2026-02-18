import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="navbar sticky top-0 z-50 px-6 py-3 border-b border-white/10"
      style={{
        background: "rgba(15, 15, 25, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* LEFT — Logo */}
      <div className="navbar-start gap-3">
        {/* Mobile Hamburger */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl rounded-2xl w-48 border border-white/10"
            style={{
              background: "rgba(20, 20, 35, 0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-xl font-medium transition-all ${isActive
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/adduser"
                className={({ isActive }) =>
                  `rounded-xl font-medium transition-all ${isActive
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Add User
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
            }}
          >
            M
          </div>
          <span
            className="text-lg font-black tracking-tight"
            style={{
              fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
              background: "linear-gradient(135deg, #fff 30%, #a5b4fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MERN<span style={{ WebkitTextFillColor: "#6366f1" }}>CRUD</span>
          </span>
        </div>
      </div>

      {/* CENTER — Desktop Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                  ? "bg-indigo-500/20 text-indigo-300 shadow-lg shadow-indigo-500/10"
                  : "text-white/60 hover:text-white hover:bg-white/8"
                }`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adduser"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                  ? "bg-indigo-500/20 text-indigo-300 shadow-lg shadow-indigo-500/10"
                  : "text-white/60 hover:text-white hover:bg-white/8"
                }`
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Add User
            </NavLink>
          </li>
        </ul>
      </div>

      {/* RIGHT — Actions */}
      <div className="navbar-end gap-3">
        {/* Avatar / User indicator */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
          >
            A
          </div>
          <span className="text-white/70 text-xs font-medium">Admin</span>
        </div>

        {/* Logout */}
        <button
          className="btn btn-sm rounded-xl border-0 text-xs font-semibold text-white/80 hover:text-white transition-all duration-200"
          style={{
            background: "rgba(239, 68, 68, 0.15)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(239, 68, 68, 0.28)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(239,68,68,0.2)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(239, 68, 68, 0.15)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;