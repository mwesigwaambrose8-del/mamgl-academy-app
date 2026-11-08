
import React, { useState } from "react";
import "./App.css";
import Register from "./Register";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <header className="header">
        <h2>MA MAMGL</h2>
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
            Quality mathematics education for learners
            in Uganda and across the world.
          </p>
          <button onClick={() => setPage("register")}>
            Join MAMGL Today
          </button>
        </main>
      )}

      {page === "courses" && (
        <section className="content">
          <h1>Our Courses</h1>
          {["S1", "S2", "S3", "S4", "A-Level"].map(c => (
            <article key={c}>
              <h3>{c} Mathematics</h3>
              <p>Lessons, exercises and assessments.</p>
            </article>
          ))}
        </section>
      )}

      {page === "register" && <Register />}

      {page === "login" && (
        <section className="content">
          <h1>Student / Admin Login</h1>
          <p>Login system will be activated next.</p>
        </section>
      )}

      <footer>
        <p>© 2026 MA Mathematics Global Learning</p>
        <p>Excellence in Mathematics Education</p>
      </footer>
    </div>
  );
}
