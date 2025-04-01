import * as React from 'react';

import { cn } from '@/shared/lib';

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {React.TableHTMLAttributes<HTMLTableElement>} [props.rest]
 */
const Table = ({ className, ...rest }) => (
  <div data-slot='table-container' className='relative w-full overflow-x-auto'>
    <table
      data-slot='table'
      className={cn('w-full caption-bottom text-sm', className)}
      {...rest}
    />
  </div>
);

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} [props.rest]
 */
const TableHeader = ({ className, ...rest }) => (
  <thead
    data-slot='table-header'
    className={cn('[&_tr]:border-b', className)}
    {...rest}
  />
);

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} [props.rest]
 */
const TableBody = ({ className, ...rest }) => (
  <tbody
    data-slot='table-body'
    className={cn('[&_tr:last-child]:border-0', className)}
    {...rest}
  />
);

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} [props.rest]
 */
const TableFooter = ({ className, ...rest }) => (
  <tfoot
    data-slot='table-footer'
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...rest}
  />
);

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {React.HTMLAttributes<HTMLTableRowElement>} [props.rest]
 */
const TableRow = ({ className, ...rest }) => (
  <tr
    data-slot='table-row'
    className={cn(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      className
    )}
    {...rest}
  />
);

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {React.ThHTMLAttributes<HTMLTableCellElement>} [props.rest]
 */
const TableHead = ({ className, ...rest }) => (
  <th
    data-slot='table-head'
    className={cn(
      'h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
      className
    )}
    {...rest}
  />
);

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {React.TdHTMLAttributes<HTMLTableCellElement>} [props.rest]
 */
const TableCell = ({ className, ...rest }) => (
  <td
    data-slot='table-cell'
    className={cn(
      'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
      className
    )}
    {...rest}
  />
);

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {React.HTMLAttributes<HTMLTableCaptionElement>} [props.rest]
 */
const TableCaption = ({ className, ...rest }) => (
  <caption
    data-slot='table-caption'
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...rest}
  />
);

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
