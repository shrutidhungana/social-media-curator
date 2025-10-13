"use client";

import React from "react";
import * as Select from "@radix-ui/react-select";
import { FaChevronDown } from "react-icons/fa";

export type FilterOption = {
  label: string;
  value: string;
};

type FilterProps = {
  options: FilterOption[];
  selectedValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const Filter: React.FC<FilterProps> = ({
  options,
  selectedValue,
  onChange,
  placeholder = "Select",
}) => {
  return (
    <Select.Root value={selectedValue} onValueChange={onChange}>
      <Select.Trigger className="inline-flex items-center justify-between w-full px-4 py-2 rounded-full bg-white/90 text-gray-900 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <FaChevronDown className="text-gray-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content className="mt-1 rounded-lg bg-white/95 shadow-lg border border-gray-200 overflow-hidden">
        <Select.Viewport className="p-1">
          {options?.map((option) => (
            <Select.Item
              key={option.value}
              value={option.value}
              className="px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-100 focus:bg-indigo-200 data-[highlighted]:bg-indigo-200"
            >
              <Select.ItemText>{option.label}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default Filter;
