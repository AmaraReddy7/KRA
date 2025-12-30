import { useEffect, useState } from "react";
import "./App.css";

const BASE_URL = "http://localhost:3100";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", address: "" });
  const [updateForm, setUpdateForm] = useState({
    id: "",
    name: "",
    address: "",
  });
  const [fetchId, setFetchId] = useState("");
  const [singleUser, setSingleUser] = useState(null);

  /* CREATE */
  const createUser = async () => {
    await fetch(`${BASE_URL}/postData`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    fetchUsers();
    setForm({ id: "", name: "", address: "" });
  };

  /* READ ALL */
  const fetchUsers = async () => {
    const res = await fetch(`${BASE_URL}/fetchData`);
    const data = await res.json();
    setUsers(data);
  };

  /* READ BY ID */
  const fetchById = async () => {
    const res = await fetch(`${BASE_URL}/fetchbyId/${fetchId}`);
    const data = await res.json();
    setSingleUser(data[0]);
  };

  /* UPDATE */
  const updateUser = async () => {
    await fetch(`${BASE_URL}/update/${updateForm.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: updateForm.name,
        address: updateForm.address,
      }),
    });
    fetchUsers();
  };

  /* DELETE */
  const deleteUser = async (id) => {
    await fetch(`${BASE_URL}/delete/${id}`, { method: "DELETE" });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>Users CRUD App (React + Node + PostgreSQL)</h1>

      {/* CREATE */}
      <div className="card">
        <h3>Create User</h3>
        <input
          placeholder="ID"
          value={form.id}
          onChange={(e) => setForm({ ...form, id: e.target.value })}
        />
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <button onClick={createUser}>Create</button>
      </div>

      {/* FETCH ALL */}
      <div className="card">
        <h3>All Users</h3>
        {users.map((u) => (
          <div key={u.id} className="user">
            <span>
              {u.id} - {u.name} - {u.address}
            </span>
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* FETCH BY ID */}
      <div className="card">
        <h3>Fetch By ID</h3>
        <input
          placeholder="User ID"
          value={fetchId}
          onChange={(e) => setFetchId(e.target.value)}
        />
        <button onClick={fetchById}>Fetch</button>

        {singleUser && (
          <p>
            {singleUser.id} - {singleUser.name} - {singleUser.address}
          </p>
        )}
      </div>

      {/* UPDATE */}
      <div className="card">
        <h3>Update User</h3>
        <input
          placeholder="User ID"
          value={updateForm.id}
          onChange={(e) => setUpdateForm({ ...updateForm, id: e.target.value })}
        />
        <input
          placeholder="New Name"
          value={updateForm.name}
          onChange={(e) =>
            setUpdateForm({ ...updateForm, name: e.target.value })
          }
        />
        <input
          placeholder="New Address"
          value={updateForm.address}
          onChange={(e) =>
            setUpdateForm({ ...updateForm, address: e.target.value })
          }
        />
        <button onClick={updateUser}>Update</button>
      </div>
    </div>
  );
}

export default App;
