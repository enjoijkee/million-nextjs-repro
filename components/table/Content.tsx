'use client';

import { For } from 'million/react';
import RowBlock from './Row';
import { Column, Row } from '../../types/table';
import { styled } from '../../stitches.config';

interface Props {
  data: Row[];
  columns: Column[];
  onRowClick?: (row: Row) => void;
  sorting: string | null;
  sortingOrder: 'asc' | 'desc';
  onChangeSorting: (column: Column, groupName?: string) => void;
  groupName?: string;
  folded?: boolean;
  onFoldGroup?: (groupName: string) => void;
}

const Content = ({
  data,
  columns,
  onRowClick,
  sorting,
  sortingOrder,
  onChangeSorting,
  groupName,
  folded,
  onFoldGroup,
}: Props) => {
  if (data.length === 0) return null;

  return (
    <>
      <thead>
        {!folded && (
          <tr>
            {columns.map((column) => (
              <TH
                key={`th-${column.title}`}
                align={column.align}
                sortable={column.sortable}
                sorted={sorting === column.dataIndex}
                afterGroupName={!!groupName}
              >
                <span onClick={() => onChangeSorting(column, groupName)}>{column.title}</span>
              </TH>
            ))}
          </tr>
        )}
      </thead>
      {!folded && (
        <tbody>
          <For each={data} ssr={false}>
            {(row, index) => (
              <RowBlock key={`tr-${index}`} row={row} columns={columns} onRowClick={onRowClick} />
            )}
          </For>
        </tbody>
      )}
    </>
  );
};

export default Content;

export const TD = styled('td', {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '$sm $md',
  fz: '$sm',
  color: '$textMain',
  borderBottom: '1px solid $borderSubtle',
  lineHeight: 1.3,
  transition: '$default',
  '&:first-of-type': {
    pl: 0,
  },
  '&:last-of-type': {
    pr: 0,
  },
  variants: {
    align: {
      left: {
        justifyContent: 'flex-start',
        textAlign: 'left',
      },
      center: {
        justifyContent: 'center',
        textAlign: 'center',
      },
      right: {
        justifyContent: 'flex-end',
        textAlign: 'right',
      },
    },
    overflow: {
      visible: {
        overflow: 'visible',
      },
      hidden: {
        overflow: 'hidden',
      },
    },
  },
  defaultVariants: {
    align: 'left',
    overflow: 'visible',
  },
});

export const TH = styled('th', {
  display: 'inline-flex',
  alignItems: 'flex-end',
  padding: '$sm $md',
  fz: '$xs',
  fw: 500,
  borderBottom: '2px solid $border',
  color: '$textSubtle',
  bgc: '$mainBg',
  overflow: 'visible',
  position: 'sticky',
  zIndex: 3,
  whiteSpace: 'nowrap',
  '&:first-of-type': {
    pl: 0,
  },
  '&:last-of-type': {
    pr: 0,
  },
  variants: {
    align: {
      left: {
        justifyContent: 'flex-start',
        textAlign: 'left',
      },
      center: {
        justifyContent: 'center',
        textAlign: 'center',
      },
      right: {
        justifyContent: 'flex-end',
        textAlign: 'right',
      },
    },
    sortable: {
      true: {
        span: {
          borderBottom: '1px dashed $textSubtle',
          cursor: 'pointer',
          transition: '$default',
          '&:hover': {
            color: '$textMain',
            borderColor: '$textMain',
          },
        },
      },
    },
    sorted: {
      true: {
        span: {
          color: '$primary',
          borderColor: '$primary',
        },
      },
    },
    afterGroupName: {
      true: {
        top: 51,
      },
      false: {
        top: 0,
      },
    },
  },
  defaultVariants: {
    align: 'left',
    sortable: false,
    sorted: false,
    afterGroupName: false,
  },
});

export const GroupName = styled(TH, {
  gridColumnStart: 1,
  '&&&': {
    pt: '$xl',
    pb: 0,
    borderBottom: 'none',
  },
});

export const FoldTrigger = styled('div', {
  display: 'inline-flex',
  alignItems: 'flx-start',
  gap: '$sm',
  color: '$textMain',
  fz: '$md',
  fw: 500,
  letterSpacing: 0.25,
  transition: '$default',
  cursor: 'pointer',
  '&:hover': {
    color: '$primary',
  },
});
