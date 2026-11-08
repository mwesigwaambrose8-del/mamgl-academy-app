
import React, { useState } from "react";
import { supabase } from "./supabase";

export default function Register() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    country: "",
    class_level: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Registering...");

    const { error } = await supabase
      .from("students")
      .insert([form]);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Registration successful!");
      setForm({
        full_name: "",
        email: "",
        phone: "",
        country: "",
        class_level: ""
      });
    }
  };

  return (
    <section className="content">
      <h1>Join MAMGL</h1>
      <form onSubmit={handleSubmit}>
        <input name="full_name" placeholder="Full Name"
          value={form.full_name} onChange={handleChange} required />

        <input name="email" type="email" placeholder="Email"
          value={form.email} onChange={handleChange} required />

        <input name="phone" placeholder="Phone Number"
          value={form.phone} onChange={handleChange} required />

        <input name="country" placeholder="Country"
          value={form.country} onChange={handleChange} required />

        <select name="class_level" value={form.class_level}
          onChange={handleChange} required>
          <option value="">Select Class</option>
          <option>S1</option>
          <option>S2</option>
          <option>S3</option>
          <option>S4</option>
          <option>A-Level</option>
        </select>

        <button type="submit">Register Now</button>
      </form>
      <p>{message}</p>
    </section>
  );
}
