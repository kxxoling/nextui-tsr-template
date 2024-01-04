import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import { columns, users } from './data';
import { RenderCell } from './render-cell';

// More examples: https://nextui.org/docs/components/table
export const TableWrapper = () => {
  return (
    <div className=' w-full flex flex-col gap-4'>
      <Table aria-label='Example table with custom cells'>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === 'actions'}
              align={column.uid === 'actions' ? 'center' : 'start'}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow>
              {(columnKey: unknown) => (
                <TableCell>
                  {RenderCell({
                    user: item,
                    columnKey: columnKey as keyof typeof item,
                  })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
