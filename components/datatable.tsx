import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type THeader = {
  key: string;
  name: string;
  className?: string;
  custom?: (item: string | number) => ReactNode;
};

type DataTableProps<T> = {
  list: T[];
  headers: THeader[];
  rowId: (item: T) => string;
  footer?: ReactNode;
};

const DataTable = <R,>({ list, rowId, headers, footer }: DataTableProps<R>) => {
  return (
    <Table>
      {/*<TableCaption>Details de la facture</TableCaption>*/}
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead
              key={header?.key}
              className={cn("text-yellow-500", header?.className)}
            >
              {header?.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map((item) => (
          <TableRow key={rowId(item)}>
            {headers?.map((header, index) => {
              return (
                <TableCell
                  key={`cell-${index}`}
                  className="font-medium text-black"
                >
                  {header?.custom
                    ? header?.custom(
                        (item as Record<string, unknown>)?.[
                          header.key
                        ] as string,
                      )
                    : ((item as Record<string, unknown>)?.[
                        header.key
                      ] as string)}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
      {footer}
    </Table>
  );
};

export default DataTable;
