import each from 'jest-each';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import DataTable from './DataTable';
import data from '../assets/data';
import { User } from '../models/user';
import { Animal } from '../test/models/animal';
import { Game } from '../test/models/game';
import { sortByField } from '../helpers/sortByField';

const users = data['users'].map(user => new User({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
}));

const animals = data['animals'].map(animal => new Animal({
  id: animal.id,
  species: animal.species,
  country: animal.country,
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

beforeEach(() => {
  document.body.innerHTML = "";
});

describe('renders table data', () => {
  each([
    ['user', users, fields],
    ['animal', animals, animalFields],
    ['game', games, gameFields],
  ]).describe('renders table headers', (dataType, propsData, propsFields) => {
    test(`renders ${propsFields.length} headers for ${dataType} data`, () => {
      render(<DataTable data={propsData} fields={propsFields} enableSort={true} />);
      const tableHeaders = screen.getAllByTestId("table-header");
      expect(tableHeaders.length).toBe(propsFields.length);
      propsFields.forEach(field => expect(screen.getByText(field)).toBeInTheDocument());
      tableHeaders.forEach((header, idx) => expect(header.textContent).toContain(propsFields[idx]));
    });
  });

  each([
    ['user', users, fields],
    ['animal', animals, animalFields],
    ['game', games, gameFields],
  ]).describe('renders table rows', (dataType, propsData, propsFields) => {
    test(`renders ${propsData.length} rows of ${dataType} data`, () => {
      render(<DataTable data={propsData} fields={propsFields} enableSort={true} />);
      const tableRows = screen.getAllByTestId("table-row");
      expect(tableRows.length).toBe(propsData.length);
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

describe('can sort data', () => {
  each([
    ['user', users, fields, 6],
    ['animal', animals, animalFields, 4],
    ['game', games, gameFields, 3],
  ]).describe('can sort data two ways by field', (dataType, propsData, propsFields) => {
    each(
      propsFields.map((field, idx) => [field, idx === 0 ? true : false])
    ).test(`can sort ${dataType} by '%s'`, (sortField, shouldDescend) => {
      render(<DataTable data={propsData} fields={propsFields} enableSort={true} />);
      const field = screen.getByText(sortField);

      act(() => {
        field.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });

      let tableRows = screen.getAllByTestId("table-row");

      tableRows.forEach((row, rowIdx) => {
        const tableCells = row.childNodes;
        tableCells.forEach((cell, cellIdx) => {
          const sortedData = sortByField(propsData, sortField, shouldDescend);
          const expectedCellValue = sortedData[rowIdx][propsFields[cellIdx]];
          expect(cell.textContent).toContain(expectedCellValue);
        });
      });

      act(() => {
        field.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });

      tableRows = screen.getAllByTestId("table-row");

      tableRows.forEach((row, rowIdx) => {
        const tableCells = row.childNodes;
        tableCells.forEach((cell, cellIdx) => {
          const sortedData = sortByField(propsData, sortField, !shouldDescend);
          const expectedCellValue = sortedData[rowIdx][propsFields[cellIdx]];
          expect(cell.textContent).toContain(expectedCellValue);
        });
      });
    });
  });

  test('cannot sort if disabled', () => {
    render(<DataTable data={users} fields={fields} />);
    const field = screen.getByText(fields[0]);

    act(() => {
      field.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const tableRows = screen.getAllByTestId("table-row");
    tableRows.forEach((row, rowIdx) => {
      const tableCells = row.childNodes;
      tableCells.forEach((cell, cellIdx) => {
        const expectedCellValue = users[rowIdx][fields[cellIdx]];
        expect(cell.textContent).toContain(expectedCellValue);
      });
    });
  });
});

describe('can filter data by search', () => {
  each([
    ['users', users, fields],
    ['animals', animals, animalFields],
    ['games', games, gameFields],
  ]).describe('can search data across all fields', (dataType, propsData, propsFields) => {
    each(
      [].concat.apply([],
        propsFields.map(field =>
          propsData.map(item => [
            item[field].toString(), // searchTerm
            propsData.filter(obj => // expectedNumRows matching searchTerm
              Object.values(obj).map(i => i.toString()).join().includes(item[field].toString())
            ).length
          ])
        )
      )
    ).test(`can filter ${dataType} by '%s'`, (searchTerm, expectedNumRows) => {
      render(<DataTable data={propsData} fields={propsFields} enableSearch={true} />);
      const searchBar = screen.queryByTestId("search-bar").querySelector("input");
      fireEvent.change(searchBar, { target: { value: searchTerm } })
      const tableRows = screen.getAllByTestId("table-row");
      expect(tableRows.length).toBe(expectedNumRows);
    });
  });

  test('cannot search if disabled', () => {
    render(<DataTable data={users} fields={fields} />);
    const searchBar = screen.queryByTestId("search-bar");
    expect(searchBar).toBe(null);      
  });
});