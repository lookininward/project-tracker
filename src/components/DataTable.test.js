import each from 'jest-each';
import { render, screen } from '@testing-library/react';
import DataTable from './DataTable';
import data from '../assets/data.json';
import { User } from '../models/user';
import { Animal } from '../test/models/animal';
import { Game } from '../test/models/game';

const users = data['users'].map(user => new User({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
}));

const animals = data['animals'].map(animal => new Animal({
  id: animal.id,
  name: animal.name,
}));

const games = data['games'].map(game => new Game({
  id: game.id,
  title: game.title,
  price: game.price,
  sku: game.sku,
  releaseDate: game.releaseDate,
}));

const fields = Object.keys(users[0]);
const animalFields = Object.keys(animals[0]);
const gameFields = Object.keys(games[0]);

describe('renders table data', () => {
  each([
    ['user', users, fields, 4],
    ['animal', animals, animalFields, 2],
    ['game', games, gameFields, 5],
  ]).describe('renders table headers', (dataType, propsData, propsFields, expectedFields) => {
    test(`renders ${expectedFields} headers for ${dataType} data`, () => {
      render(<DataTable data={propsData} fields={propsFields} />);
      const tableHeaders = screen.getAllByTestId("table-header");
      expect(tableHeaders.length).toBe(expectedFields);
      propsFields.forEach(field => expect(screen.getByText(field)).toBeInTheDocument());
      tableHeaders.forEach((header, idx) => expect(header.textContent).toContain(propsFields[idx]));
    });
  });

  each([
    ['user', users, fields, 6],
    ['animal', animals, animalFields, 4],
    ['game', games, gameFields, 3],
  ]).describe('renders table rows', (dataType, propsData, propsFields, expectedRows) => {
    test(`renders ${expectedRows} rows of ${dataType} data`, () => {
      render(<DataTable data={propsData} fields={propsFields} />);
      const tableRows = screen.getAllByTestId("table-row");
      expect(tableRows.length).toBe(expectedRows);
      propsData.forEach(function (item) {
        expect(screen.getByText(item.id)).toBeInTheDocument();
      });

      tableRows.forEach((row, rowIdx) => {
        const tableCells = row.childNodes;
        tableCells.forEach((cell, cellIdx) => {
          const expectedCellValue = propsData[rowIdx][propsFields[cellIdx]];
          expect(cell.textContent).toContain(expectedCellValue);
        });
      });
    });
  });
});

test('renders search bar if enabled', () => {
  render(<DataTable data={users} fields={fields} enableSearch={true} />);
  const searchBar = screen.getByTestId("search-bar");
  expect(searchBar).toBeInTheDocument();
});

test('hides search bar if disabled', () => {
  render(<DataTable data={users} fields={fields} enableSearch={false} />);
  const searchBar = screen.queryByTestId("search-bar");
  expect(searchBar).not.toBeInTheDocument();
});

// can filter data by search 