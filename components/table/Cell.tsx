'use client';

import _ from 'lodash';
import { TD } from './Content';
import { Column, Row } from '../../types/table';

interface CellProps {
  row: Row;
  column: Column;
}

const Cell = ({ row, column }: CellProps) => {
  const value = _.get(row, column.dataIndex);
  if (column.render) {
    const renderer = column.dataIndex ? column.render(value, row) : column.render(row);
    return (
      <TD align={column.align} overflow={column.overflow}>
        {renderer}
      </TD>
    );
  }
  return (
    <TD align={column.align} overflow={column.overflow}>
      {_.isNull(value) || value.length === 0 ? '-' : value}
    </TD>
  );
};

export default Cell;
