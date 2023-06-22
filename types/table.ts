export type Row = any;

export type Column = {
  dataIndex: string;
  title: string;
  sortable?: boolean;
  gradeSorting?: boolean;
  customSorting?: string[];
  width?: string | 'minimal';
  minWidth?: string;
  maxWidth?: string;
  align?: 'left' | 'center' | 'right';
  overflow?: 'visible' | 'hidden';
  render?: (value?: any, row?: any) => JSX.Element | string | number;
};

export type TableGroup = {
  title: string;
  data: Row[];
};

type Table = {
  columns: Column[];
  onRowClick?: (row: Row) => void;
  defaultSorting?: string;
  extraSorting?: {
    sortBy: string[];
    order: 'asc' | 'desc';
  };
};

export interface TableProps extends Table {
  data: Row[];
}

export interface TableGroupedProps extends Table {
  data: TableGroup[];
}
