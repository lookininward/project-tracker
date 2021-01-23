import React from "react";
import './App.css';
import DataTable from './components/DataTable';
import data from './assets/data.json';

class User {
  constructor({ id, email, name, role }) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.role = role;
  }
}

const users = data['users'].map(user => new User({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
}));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Manager</h1>
      </header>
      <div>
        <div style={{ textAlign: "left" }}>
          <h2>Personnel</h2>
          <p>Search and select organization personnel, and manage roles.</p>
        </div>
        <DataTable data={users} fields={Object.keys(users[0])} />
      </div>
    </div>
  );
}

export default App;
