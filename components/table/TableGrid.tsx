import { Column } from '../../types/table';
import { styled } from '../../stitches.config';

interface Props {
  columns: Column[];
  children: React.ReactNode;
}

const TableGrid = ({ columns, children }: Props) => {
  const gridTemplate = () => {
    return columns
      .map((column) => {
        const { width, minWidth, maxWidth } = column;
        if (width) return width === 'minimal' ? 'min-content' : width;
        return `minmax(${minWidth ? minWidth : 'min-content'}, ${maxWidth ? maxWidth : '1fr'})`;
      })
      .join(' ');
  };

  return <TableGridWrapper css={{ gridTemplateColumns: gridTemplate() }}>{children}</TableGridWrapper>;
};

export default TableGrid;

const TableGridWrapper = styled('table', {
  display: 'grid',
  width: '100%',
  borderCollapse: 'collapse',
  'thead, tbody, tr': {
    display: 'contents',
  },
});
