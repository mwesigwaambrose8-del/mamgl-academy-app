
import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <header className="header">
        <h2>MA <span>MAMGL</span></h2>
        <p>Mathematics Global Learning</p>
        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("courses")}>Courses</button>
          <button onClick={() => setPage("register")}>Register</button>
          <button onClick={() => setPage("login")}>Login</button>
        </nav>
      </header>

      {page === "home" && (
        <main className="hero">
          <h1>Welcome to MAMGL</h1>
          <h2>Mathematics Without Borders</h2>
          <p>
            Quality mathematics education for secondary
            students in Uganda and across the world.
          </p>
          <button onClick={() => setPage("register")}>
            Join MAMGL Today
          </button>
        </main>
      )}

      {page === "courses" && (
        <section className="content">
          <h1>Our Mathematics Courses</h1>
          {["Senior One", "Senior Two", "Senior Three",
            "Senior Four", "A-Level"].map(course => (
            <article key={course}>
              <h3>{course}</h3>
              <p>Mathematics lessons, exercises and assessments.</p>
            </article>
          ))}
        </section>
      )}

      {page === "register" && (
        <section className="content">
          <h1>Student Registration</h1>
          <form>
            <input placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input placeholder="Country" required />
            <input placeholder="Class (S1-S4 or A-Level)" required />
            <input type="tel" placeholder="Phone Number" required />
            <button type="button"
              onClick={() => alert("Registration database connection is next.")}>
              Register
            </button>
          </form>
        </section>
      )}

      {page === "login" && (
        <section className="content">
          <h1>Student / Admin Login</h1>
          <form>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button type="button"
              onClick={() => alert("Supabase authentication connection is next.")}>
              Login
            </button>
          </form>
        </section>
      )}

      <footer>
        <p>© 2026 MA Mathematics Global Learning</p>
        <p>Excellence in Mathematics Education</p>
      </footer>
    </div>
  );
}
