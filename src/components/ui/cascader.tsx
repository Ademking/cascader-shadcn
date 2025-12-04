"use client";

import * as React from "react";
import { ChevronRight, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface CascaderOption {
  value: string;
  label: React.ReactNode;
  textLabel?: string; // Optional string label for display rendering, falls back to value if not provided
  disabled?: boolean;
  children?: CascaderOption[];
}

export interface CascaderProps {
  options: CascaderOption[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[], selectedOptions: CascaderOption[]) => void;
  placeholder?: string;
  disabled?: boolean;
  allowClear?: boolean;
  className?: string;
  popupClassName?: string;
  expandTrigger?: "click" | "hover";
  displayRender?: (
    labels: string[],
    selectedOptions: CascaderOption[]
  ) => React.ReactNode;
}

function getStringLabel(option: CascaderOption): string {
  if (option.textLabel) return option.textLabel;
  if (typeof option.label === "string") return option.label;
  return option.value;
}

export function Cascader({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = "Please select",
  disabled = false,
  allowClear = true,
  className,
  popupClassName,
  expandTrigger = "click",
  displayRender,
}: CascaderProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState<string[]>(
    defaultValue || []
  );
  const [expandedPath, setExpandedPath] = React.useState<string[]>([]);

  const selectedValue = value !== undefined ? value : internalValue;

  // Get the columns to display based on expanded path
  const getColumns = React.useCallback(() => {
    const columns: CascaderOption[][] = [options];
    let currentOptions = options;

    for (const val of expandedPath) {
      const found = currentOptions.find((opt) => opt.value === val);
      if (found?.children) {
        columns.push(found.children);
        currentOptions = found.children;
      } else {
        break;
      }
    }

    return columns;
  }, [options, expandedPath]);

  // Get selected options chain from value
  const getSelectedOptions = React.useCallback(
    (vals: string[]): CascaderOption[] => {
      const result: CascaderOption[] = [];
      let currentOptions = options;

      for (const val of vals) {
        const found = currentOptions.find((opt) => opt.value === val);
        if (found) {
          result.push(found);
          currentOptions = found.children || [];
        } else {
          break;
        }
      }

      return result;
    },
    [options]
  );

  const selectedOptions = getSelectedOptions(selectedValue);
  const displayLabels = selectedOptions.map((opt) => getStringLabel(opt));

  const handleSelect = (option: CascaderOption, columnIndex: number) => {
    if (option.disabled) return;

    const newPath = [...expandedPath.slice(0, columnIndex), option.value];

    if (option.children && option.children.length > 0) {
      // Has children, expand to show next column
      setExpandedPath(newPath);
    } else {
      // Leaf node, complete selection
      const newSelectedOptions = getSelectedOptions(newPath);
      if (value === undefined) {
        setInternalValue(newPath);
      }
      onChange?.(newPath, newSelectedOptions);
      setOpen(false);
      setExpandedPath([]);
    }
  };

  const handleExpand = (option: CascaderOption, columnIndex: number) => {
    if (option.disabled) return;
    const newPath = [...expandedPath.slice(0, columnIndex), option.value];
    setExpandedPath(newPath);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (value === undefined) {
      setInternalValue([]);
    }
    onChange?.([], []);
    setExpandedPath([]);
    setOpen(false);
  };

  const columns = getColumns();

  // Reset expanded path when opening
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
      // Initialize expanded path based on current selected value
      setExpandedPath(
        selectedValue.slice(0, -1).length > 0
          ? selectedValue.slice(0, -1)
          : selectedValue
      );
    } else {
      setExpandedPath([]);
    }
  };

  const displayValue =
    displayLabels.length > 0
      ? displayRender
        ? displayRender(displayLabels, selectedOptions)
        : displayLabels.join(" / ")
      : null;

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild disabled={disabled}>
        <div
          role="combobox"
          aria-expanded={open}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={cn(
            "inline-flex items-center justify-between gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            "h-10 px-4 py-2 w-[200px] cursor-pointer",
            !displayValue && "text-muted-foreground",
            disabled && "pointer-events-none opacity-50",
            className
          )}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (!disabled) setOpen(!open);
            }
          }}
        >
          <span className="truncate flex-1 text-left font-normal">
            {displayValue || placeholder}
          </span>
          <div className="flex items-center gap-1 shrink-0">
            {allowClear && displayValue && !disabled && (
              <X
                className="h-4 w-4 opacity-50 hover:opacity-100 cursor-pointer"
                onClick={handleClear}
              />
            )}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className={cn("w-auto p-0", popupClassName)}
        align="start"
      >
        <div className="flex">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={cn(
                "min-w-[120px] max-h-[300px] overflow-auto py-1",
                columnIndex !== columns.length - 1 && "border-r border-border"
              )}
            >
              {column.map((option) => {
                const isExpanded = expandedPath[columnIndex] === option.value;
                const isSelected = selectedValue[columnIndex] === option.value;
                const hasChildren =
                  option.children && option.children.length > 0;

                return (
                  <div
                    key={option.value}
                    className={cn(
                      "flex items-center justify-between px-3 py-1.5 cursor-pointer text-sm",
                      "hover:bg-accent hover:text-accent-foreground",
                      isSelected && "bg-accent text-accent-foreground",
                      isExpanded && "bg-accent/50",
                      option.disabled && "opacity-50 cursor-not-allowed"
                    )}
                    onClick={() => handleSelect(option, columnIndex)}
                    onMouseEnter={() => {
                      if (expandTrigger === "hover" && hasChildren) {
                        handleExpand(option, columnIndex);
                      }
                    }}
                  >
                    <span className="truncate">{option.label}</span>
                    {hasChildren && (
                      <ChevronRight className="h-4 w-4 ml-2 shrink-0 opacity-50" />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
