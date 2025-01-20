"use client";

import {
  IconChevronCompactDown,
  IconChevronCompactUp,
} from "@tabler/icons-react";
import { useState } from "react";

interface PersonalInfoDropdownProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

export default function PersonalInfoDropdown({
  children,
  icon,
  title,
  description,
}: PersonalInfoDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between w-full p-4 bg-white border border-gray-200 rounded-md shadow-sm">
        {icon}
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900">{title}</span>
          <span className="text-xs text-gray-500">{description}</span>
        </div>
        {isOpen ? (
          <IconChevronCompactUp size={24} onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <IconChevronCompactDown
            size={24}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      {isOpen && (
        <div className="w-full p-4 bg-white border border-gray-200 rounded-md shadow-sm">
          {children}
        </div>
      )}
    </>
  );
}
