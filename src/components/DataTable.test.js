import { render, screen } from '@testing-library/react';
import DataTable from './DataTable';
import data from '../assets/data.json';
import { User } from '../models/user';

const users = data['users'].map(user => new User({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
}));

const fields = Object.keys(users[0]);

test('renders correct table headers', () => {
  render(<DataTable data={users} fields={fields}/>);
  const tableHeaders = screen.getAllByTestId("table-header");
  expect(tableHeaders.length).toBe(fields.length);
  fields.forEach(function(field) {
    expect(screen.getByText(field)).toBeInTheDocument();
  });
});

test('renders correct table rows', () => {
  render(<DataTable data={users} fields={fields}/>);
  const tableRows = screen.getAllByTestId("table-row");
  expect(tableRows.length).toBe(users.length);
  users.forEach(function(user) {
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});

test('renders search bar if enabled', () => {
  render(<DataTable data={users} fields={fields} enableSearch={true}/>);
  const searchBar = screen.getByTestId("search-bar");
  expect(searchBar).toBeInTheDocument();
});

test('hides search bar if disabled', () => {
  render(<DataTable data={users} fields={fields} enableSearch={false}/>);
  const searchBar = screen.queryByTestId("search-bar");
  expect(searchBar).not.toBeInTheDocument();
});

