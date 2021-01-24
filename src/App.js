import React from "react";
import './App.css';
import DataTable from './components/DataTable';
import data from './assets/data.json';
import { User } from './models/user';

const users = data['users'].map(user => new User({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
}));

const fields = users[0].fields;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Tracker</h1>
      </header>
      <div>
        <div style={{ textAlign: "left" }}>
          <h2>Personnel</h2>
          <p>Search and select organization personnel, and manage roles.</p>
        </div>
        <DataTable
          data={users}
          fields={fields}
          enableSearch={true}
        />
      </div>
    </div>
  );
}

export default App;
