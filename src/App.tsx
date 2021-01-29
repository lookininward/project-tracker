import React from "react";
import './App.scss';
import DataTable from './components/DataTable';
import data from './assets/data';
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
      <header className="App-header p-2 navbar sticky-top">
        <h1>Project Tracker</h1>
      </header>
      <div className="p-4">
        <div className="card p-4">
          <div className="card-title text-start">
            <h2 className="display-6">Personnel</h2>
            <p className="lead text-muted">Search and select organization personnel, and manage roles.</p>
          </div>
          <DataTable
            data={users}
            fields={fields}
            enableSearch={true}
            enableSort={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
