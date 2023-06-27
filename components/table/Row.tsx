import { block } from 'million/react';
import { Column, Row } from '../../types/table';
import Cell from './Cell';
import { TD } from './Content';
import { styled } from '../../stitches.config';

type Props = {
  row: Row;
  columns: Column[];
  onRowClick?: (row: Row) => void;
};

const RowBlock = block(
  ({ row, columns, onRowClick }: Props) => {
    return (
      <TR clickable={!!onRowClick} onClick={() => (onRowClick ? onRowClick(row) : undefined)}>
        {columns.map((column) => (
          <Cell key={`td-${column.title}`} row={row} column={column} />
        ))}
      </TR>
    );
  },
  { ssr: false }
);

export default RowBlock;

const TR = styled('tr', {
  variants: {
    clickable: {
      true: {
        cursor: 'pointer',
        transition: '$default',
        [`&:hover ${TD}`]: {
          bgc: '$componentHoverBg',
        },
      },
    },
  },
});
