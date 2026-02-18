import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const AddUserForm = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmission = async (e) => {
    e.preventDefault();
    if (!username.trim()) return toast.error("Username is required.");
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/adduser", {
        username,
        message,
      });
      toast.success(response.data.message || "User added!");
      setUsername("");
      setMessage("");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#0a0a14" }}>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "rgba(20,20,35,0.95)",
            color: "#e0e0ff",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: "12px",
            fontSize: "13px",
            backdropFilter: "blur(20px)",
          },
          success: { iconTheme: { primary: "#6366f1", secondary: "#0a0a14" } },
          error: { iconTheme: { primary: "#ef4444", secondary: "#0a0a14" } },
        }}
      />

      <div className="w-full max-w-sm">

        {/* Top label */}
        <div className="mb-6 text-center">
          <div
            className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow: "0 0 32px rgba(99,102,241,0.35)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h2
            className="text-2xl font-black tracking-tight"
            style={{
              fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
              background: "linear-gradient(135deg, #fff 30%, #a5b4fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Add New User
          </h2>
          <p className="text-white/30 text-sm mt-1">Fill in the details below</p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
          }}
        >
          <form onSubmit={handleSubmission} className="flex flex-col gap-5">

            {/* Username */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(165,180,252,0.6)" }}>
                Username
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input
                  type="text"
                  placeholder="e.g. john_doe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={e => {
                    e.target.style.border = "1px solid rgba(99,102,241,0.5)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)";
                  }}
                  onBlur={e => {
                    e.target.style.border = "1px solid rgba(255,255,255,0.1)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(165,180,252,0.6)" }}>
                Message
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-3 w-4 h-4"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <textarea
                  placeholder="Write a short message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={e => {
                    e.target.style.border = "1px solid rgba(99,102,241,0.5)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)";
                  }}
                  onBlur={e => {
                    e.target.style.border = "1px solid rgba(255,255,255,0.1)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-all duration-200"
              style={{
                background: loading
                  ? "rgba(99,102,241,0.3)"
                  : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: loading ? "none" : "0 0 24px rgba(99,102,241,0.35)",
                cursor: loading ? "not-allowed" : "pointer",
              }}
              onMouseEnter={e => {
                if (!loading) e.currentTarget.style.boxShadow = "0 0 36px rgba(99,102,241,0.55)";
              }}
              onMouseLeave={e => {
                if (!loading) e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.35)";
              }}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-xs" />
                  Adding...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add User
                </>
              )}
            </button>

          </form>
        </div>

        {/* Bottom hint */}
        <p className="text-center text-white/20 text-xs mt-4">
          User will appear in the{" "}
          <a href="/" className="text-indigo-400/60 hover:text-indigo-300 transition-colors">
            Users table
          </a>{" "}
          after submission.
        </p>
      </div>
    </div>
  );
};

export default AddUserForm;