'use client';

import { Table } from '../components/table';

const IndexPage = () => {
  return (
    <div>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default IndexPage;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

const data = [
  {
    name: 'John',
    age: 32,
  },
  {
    name: 'Jane',
    age: 42,
  },
  {
    name: 'Joe',
    age: 28,
  },
];
