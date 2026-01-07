"use client";

import { useEffect, useState } from "react";

// Backend base URL (NestJS Controller: @Controller('hospital'))
const API_URL = "http://localhost:3000/hospital";

interface Patient {
  id?: number;
  name: string;
  role: "Doctor" | "Patient" | "Receptionist";
}

export default function HospitalPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState<Patient["role"]>("Patient");
  const [editId, setEditId] = useState<number | null>(null);

  // ---------------- READ ----------------
  const fetchPatients = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setPatients(data);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // ---------------- CREATE / UPDATE ----------------
  const handleSubmit = async () => {
    if (!name) return;

    if (editId) {
      // PATCH update
      await fetch(`${API_URL}/${editId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role }),
      });
      setEditId(null);
    } else {
      // POST create
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role }),
      });
    }

    setName("");
    setRole("Patient");
    fetchPatients();
  };

  // ---------------- DELETE ----------------
  const deletePatient = async (id?: number) => {
    if (!id) return;
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchPatients();
  };

  // ---------------- EDIT ----------------
  const editPatient = (patient: Patient) => {
    setEditId(patient.id || null);
    setName(patient.name);
    setRole(patient.role);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Hospital Patient CRUD</h1>

      {/* Form */}
      <div className="flex gap-2 mb-6">
        <input
          className="border p-2 flex-1"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="border p-2"
          value={role}
          onChange={(e) => setRole(e.target.value as Patient["role"])}
        >
          <option value="Doctor">Doctor</option>
          <option value="Patient">Patient</option>
          <option value="Receptionist">Receptionist</option>
        </select>

        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4">
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* List */}
      <ul className="space-y-2">
        {patients.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center border p-3"
          >
            <span>
              <b>{p.name}</b> — {p.role}
            </span>
            <div className="space-x-3">
              <button onClick={() => editPatient(p)} className="text-blue-600">
                Edit
              </button>
              <button
                onClick={() => deletePatient(p.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
