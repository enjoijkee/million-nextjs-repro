import { useState } from 'react';
import _ from 'lodash';
import TableGrid from './TableGrid';
import TableContent from './Content';
import { Column, Row, TableProps } from '../../types/table';

const Table = ({ data, columns, onRowClick, defaultSorting, extraSorting }: TableProps) => {
  const sortableColumns = _.filter(columns, 'sortable');
  const sortingByDefault =
    defaultSorting || (sortableColumns.length > 0 && sortableColumns[0].dataIndex) || null;

  const [sorting, setSorting] = useState<string | null>(sortingByDefault);
  const [sortingOrder, setSortingOrder] = useState<'asc' | 'desc'>('desc');

  const sortedData = (data: Row[]) => {
    if (!sorting) return data;

    const extraSortBy = (extraSorting && extraSorting.sortBy) || [];

    // Sort rows with missing data to the bottom
    const sortedWithoutData = _.filter(data, (row) =>
      _.every([sorting, ...extraSortBy], (sorting) => _.includes(['-', '?', null], row[sorting]))
    );
    const sortedWithData = _.difference(data, sortedWithoutData);

    const sortBy = (row: Row) => {
      const currentSorting = _.find(sortableColumns, (col) => col.dataIndex === sorting);
      if (currentSorting?.customSorting) {
        return currentSorting.customSorting.indexOf(row[currentSorting.dataIndex]) * -1;
      }
      return row[sorting];
    };

    return [
      ..._.orderBy(sortedWithData, [(row) => sortBy(row), ...extraSortBy], [sortingOrder]),
      ...sortedWithoutData,
    ];
  };

  const onChangeSorting = (column: Column) => {
    if (!column.sortable) return null;
    if (column.dataIndex === sorting) {
      if (sortingOrder === 'desc') return setSortingOrder('asc');
      return setSortingOrder('desc');
    }
    setSorting(column.dataIndex);
    setSortingOrder('desc');
  };

  return (
    <TableGrid columns={columns}>
      <TableContent
        data={sortedData(data)}
        columns={columns}
        onRowClick={onRowClick}
        sorting={sorting}
        sortingOrder={sortingOrder}
        onChangeSorting={onChangeSorting}
      />
    </TableGrid>
  );
};

export default Table;
