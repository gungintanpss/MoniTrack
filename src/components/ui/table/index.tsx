import { ReactNode } from "react";

// Props interfaces
interface TableProps {
  children: ReactNode;
  className?: string;
}

interface TableSectionProps {
  children: ReactNode;
  className?: string;
}

interface TableCellProps {
  children: ReactNode;
  isHeader?: boolean;
  className?: string;
}

const Table: React.FC<TableProps> = ({ children, className }) => {
  return (
    <table className={`min-w-full text-sm text-gray-700 ${className ?? ""}`}>
      {children}
    </table>
  );
};

const TableHeader: React.FC<TableSectionProps> = ({ children, className }) => {
  return (
    <thead className={`bg-gray-50 border-b text-[#3A3F63] ${className ?? ""}`}>
      {children}
    </thead>
  );
};

const TableBody: React.FC<TableSectionProps> = ({ children, className }) => {
  return (
    <tbody className={`divide-y divide-gray-100 ${className ?? ""}`}>
      {children}
    </tbody>
  );
};

const TableRow: React.FC<TableSectionProps> = ({ children, className }) => {
  return (
    <tr className={`hover:bg-gray-50 ${className ?? ""}`}>{children}</tr>
  );
};

const TableCell: React.FC<TableCellProps> = ({
  children,
  isHeader = false,
  className = "",
}) => {
  const baseClass =
    "px-4 py-3 text-left align-middle whitespace-nowrap";

  if (isHeader) {
    return (
      <th
        className={`${baseClass} font-semibold text-xs uppercase tracking-wide text-[#3A3F63] ${className}`}
      >
        {children}
      </th>
    );
  }

  return (
    <td className={`${baseClass} text-gray-600 ${className}`}>
      {children}
    </td>
  );
};

export { Table, TableHeader, TableBody, TableRow, TableCell };
