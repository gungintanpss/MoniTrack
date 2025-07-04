import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import Badge from "../badge/Badge";
import { Dropdown } from "./Dropdown";

interface StatusDropdownProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export const StatusDropdown: React.FC<StatusDropdownProps> = ({
  value,
  options,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  // ✅ Mapping warna badge berdasarkan status
  const getStatusColor = (status: string): "success" | "error" | "warning" | "info" => {
    switch (status.toLowerCase()) {
      case "aktif":
        return "success";
      case "nonaktif":
        return "error";
      case "ditangguhkan":
        return "warning";
      default:
        return "info";
    }
  };

  return (
    <div className="relative inline-block">
      <button
        className="dropdown-toggle flex items-center gap-1 focus:outline-none"
        onClick={toggleDropdown}
      >
        <Badge
          size="sm"
          variant="light"
          color={getStatusColor(value)}
        >
          {value}
        </Badge>
        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
      </button>

      <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)} className="min-w-[120px]">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-100">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </Dropdown>
    </div>
  );
};
