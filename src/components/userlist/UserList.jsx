import { useState } from "react";

export default function UserList() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const addUser = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setUsers((prev) => [...prev, trimmed]);
    setName("");
  };
    
    const removeUser = (index) => {
    setUsers((prev) => prev.filter((user, i) => i !== index));
    };

  return (
    <div>
      <h1>Användarlista</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Skriv ett namn..."
        onKeyDown={(e) => e.key === "Enter" && addUser()}
      />
      <button onClick={addUser}>Lägg till</button>

      <p>Klicka på ett namn för att ta bort det.</p>
      <ul>
        {users.map((u, i) => (
          <li
            key={i}
            onClick={() => removeUser(i)} 
            title="Klicka för att ta bort">
            {u}
          </li>
        ))}
      </ul>
    </div>
  );
}
