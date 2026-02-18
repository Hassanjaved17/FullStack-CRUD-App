import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchUsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getuser");
      setUsers(response.data.users);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  const filtered = users.filter(
    (u) =>
      u.username?.toLowerCase().includes(search.toLowerCase()) ||
      u.message?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen px-4 py-16" style={{ background: "#0a0a14" }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2
              className="text-2xl font-black tracking-tight"
              style={{
                fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
                background: "linear-gradient(135deg, #fff 30%, #a5b4fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              All Users
            </h2>
            <p className="text-white/30 text-sm mt-0.5">
              {users.length} total user{users.length !== 1 ? "s" : ""} registered
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl text-sm text-white/80 placeholder-white/25 outline-none focus:ring-1 focus:ring-indigo-500/50 w-56 transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </div>
        </div>

        {/* Table Card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Loading state */}
          {loading ? (
            <div className="flex items-center justify-center py-20 gap-3">
              <span className="loading loading-spinner loading-sm text-indigo-400" />
              <span className="text-white/30 text-sm">Fetching users...</span>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-2">
              <svg className="w-10 h-10 text-white/15" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-white/25 text-sm">No users found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                {/* Head */}
                <thead>
                  <tr
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    {["#", "Username", "Message", "Actions"].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest"
                        style={{ color: "rgba(165,180,252,0.6)" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Body */}
                <tbody>
                  {filtered.map((user, index) => (
                    <tr
                      key={user._id || index}
                      className="group transition-colors duration-150"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(99,102,241,0.06)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                    >
                      {/* Index */}
                      <td className="px-5 py-4">
                        <span
                          className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
                          style={{
                            background: "rgba(99,102,241,0.15)",
                            color: "#a5b4fc",
                          }}
                        >
                          {index + 1}
                        </span>
                      </td>

                      {/* Username */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, hsl(${(index * 67) % 360}, 70%, 55%), hsl(${(index * 67 + 40) % 360}, 70%, 45%))`,
                            }}
                          >
                            {user.username?.[0]?.toUpperCase() ?? "?"}
                          </div>
                          <span className="text-white/80 font-medium">
                            {user.username}
                          </span>
                        </div>
                      </td>

                      {/* Message */}
                      <td className="px-5 py-4 max-w-xs">
                        <span className="text-white/45 truncate block">
                          {user.message || "—"}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                            style={{
                              background: "rgba(99,102,241,0.12)",
                              border: "1px solid rgba(99,102,241,0.25)",
                              color: "#a5b4fc",
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = "rgba(99,102,241,0.25)";
                              e.currentTarget.style.boxShadow = "0 0 16px rgba(99,102,241,0.2)";
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = "rgba(99,102,241,0.12)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit
                          </button>

                          <button
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                            style={{
                              background: "rgba(239,68,68,0.1)",
                              border: "1px solid rgba(239,68,68,0.25)",
                              color: "#fca5a5",
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = "rgba(239,68,68,0.22)";
                              e.currentTarget.style.boxShadow = "0 0 16px rgba(239,68,68,0.15)";
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = "rgba(239,68,68,0.1)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Footer row */}
          {!loading && filtered.length > 0 && (
            <div
              className="px-5 py-3 flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="text-white/25 text-xs">
                Showing {filtered.length} of {users.length} users
              </span>
              <button
                onClick={fetchUsers}
                className="flex items-center gap-1.5 text-xs text-white/30 hover:text-indigo-300 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FetchUsersTable;