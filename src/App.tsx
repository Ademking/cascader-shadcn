"use client";

import type React from "react";

import { useState } from "react";
import { Cascader, type CascaderOption } from "@/components/ui/cascader";
import {
  MapPin,
  Building2,
  Waves,
  Cookie,
  Phone,
  ToolCase,
  PersonStanding,
  Footprints,
  Laptop,
  TruckElectricIcon,
  Venus,
  Shirt,
  Smartphone,
  Github,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeProvider } from "./components/theme-provider";
import { CodeBlock } from "./components/ui/code-block";

const options: CascaderOption[] = [
  {
    value: "usa",
    label: "USA",
    children: [
      {
        value: "new_york",
        label: "New York",
        children: [{ value: "statue_of_liberty", label: "Statue of Liberty" }],
      },
      {
        value: "san_francisco",
        label: "San Francisco",
        children: [{ value: "golden_gate", label: "Golden Gate Bridge" }],
      },
    ],
  },
  {
    value: "france",
    label: "France",
    children: [
      {
        value: "paris",
        label: "Paris",
        children: [{ value: "eiffel_tower", label: "Eiffel Tower" }],
      },
      {
        value: "lyon",
        label: "Lyon",
        children: [
          { value: "basilica_of_fourviere", label: "Basilica of Fourvière" },
        ],
      },
    ],
  },
];

const disabledOptions: CascaderOption[] = [
  {
    value: "usa",
    label: "USA",
    children: [
      {
        value: "new_york",
        label: "New York",
        disabled: true,
        children: [{ value: "statue_of_liberty", label: "Statue of Liberty" }],
      },
      {
        value: "san_francisco",
        label: "San Francisco",
        children: [{ value: "golden_gate", label: "Golden Gate Bridge" }],
      },
    ],
  },
  {
    value: "france",
    label: "France",
    disabled: true,
    children: [
      {
        value: "paris",
        label: "Paris",
        children: [{ value: "eiffel_tower", label: "Eiffel Tower" }],
      },
    ],
  },
];

const optionsWithIcons: CascaderOption[] = [
  {
    value: "usa",
    label: (
      <span className="flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        USA
      </span>
    ),
    textLabel: "USA",
    children: [
      {
        value: "new_york",
        label: (
          <span className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            New York
          </span>
        ),
        textLabel: "New York",
        children: [
          {
            value: "statue_of_liberty",
            label: (
              <span className="flex items-center gap-2">
                <Waves className="h-4 w-4" />
                Statue of Liberty
              </span>
            ),
            textLabel: "Statue of Liberty",
          },
        ],
      },
    ],
  },
  {
    value: "france",
    label: (
      <span className="flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        France
      </span>
    ),
    textLabel: "France",
    children: [
      {
        value: "paris",
        label: (
          <span className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Paris
          </span>
        ),
        textLabel: "Paris",
        children: [
          {
            value: "eiffel_tower",
            label: (
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Eiffel Tower
              </span>
            ),
            textLabel: "Eiffel Tower",
          },
        ],
      },
    ],
  },
];

const demoOptions: CascaderOption[] = [
  {
    value: "electronics",
    label: (
      <span className="flex items-center gap-2">
        <TruckElectricIcon className="h-4 w-4" /> Electronics
      </span>
    ),
    textLabel: "Electronics",
    children: [
      {
        value: "computers",
        label: (
          <span className="flex items-center gap-2">
            <Laptop className="h-4 w-4" /> Computers
          </span>
        ),
        textLabel: "Computers",
        children: [
          {
            value: "laptops",
            label: "Laptops",
            children: [
              { value: "gaming_laptops", label: "Gaming Laptops" },
              { value: "ultrabooks", label: "Ultrabooks" },
              { value: "2in1", label: "2-in-1 Laptops" },
            ],
          },
          {
            value: "desktops",
            label: "Desktops",
            children: [
              { value: "all_in_one", label: "All-in-One" },
              { value: "gaming_desktops", label: "Gaming Desktops" },
              { value: "workstations", label: "Workstations" },
            ],
          },
        ],
      },
      {
        value: "phones",
        label: (
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4" /> Phones
          </span>
        ),
        textLabel: "Phones",
        children: [
          {
            value: "smartphones",
            label: (
              <span className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" /> Smartphones
              </span>
            ),
            textLabel: "Smartphones",
            children: [
              { value: "android", label: "Android" },
              { value: "ios", label: "iOS" },
            ],
          },
          {
            value: "accessories",
            label: (
              <span className="flex items-center gap-2">
                <ToolCase className="h-4 w-4" /> Accessories
              </span>
            ),
            textLabel: "Accessories",
            children: [
              { value: "chargers", label: "Chargers" },
              { value: "cases", label: "Cases" },
              { value: "headphones", label: "Headphones" },
            ],
          },
        ],
      },
    ],
  },
  {
    value: "fashion",
    label: (
      <span className="flex items-center gap-2">
        <Shirt className="h-4 w-4" /> Fashion
      </span>
    ),
    textLabel: "Fashion",
    children: [
      {
        value: "men",
        label: (
          <span className="flex items-center gap-2">
            <PersonStanding className="h-4 w-4" /> Men
          </span>
        ),
        textLabel: "Men",
        children: [
          {
            value: "clothing",
            label: "Clothing",
            children: [
              { value: "shirts", label: "Shirts" },
              { value: "pants", label: "Pants" },
              { value: "jackets", label: "Jackets" },
            ],
          },
          {
            value: "shoes",
            label: (
              <span className="flex items-center gap-2">
                <Footprints className="h-4 w-4" /> Shoes
              </span>
            ),
            textLabel: "Shoes",
            children: [
              { value: "sneakers", label: "Sneakers" },
              { value: "boots", label: "Boots" },
              { value: "formal", label: "Formal Shoes" },
            ],
          },
        ],
      },
      {
        value: "women",
        label: (
          <span className="flex items-center gap-2">
            <Venus className="h-4 w-4" /> Women
          </span>
        ),
        textLabel: "Women",
        children: [
          {
            value: "clothing",
            label: "Clothing",
            children: [
              { value: "dresses", label: "Dresses" },
              { value: "skirts", label: "Skirts" },
              { value: "blouses", label: "Blouses" },
            ],
          },
          {
            value: "shoes",
            label: (
              <span className="flex items-center gap-2">
                <Footprints className="h-4 w-4" /> Shoes
              </span>
            ),
            textLabel: "Shoes",
            children: [
              { value: "heels", label: "Heels" },
              { value: "flats", label: "Flats" },
              { value: "sandals", label: "Sandals" },
            ],
          },
        ],
      },
    ],
  },
];

function ExampleCard({
  title,
  description,
  children,
  code,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="p-0 h-auto bg-background gap-1">
          <TabsTrigger
            value="preview"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="rounded-lg border p-6 mt-2">
          {children}
        </TabsContent>
        <TabsContent value="code" className="mt-2">
          <CodeBlock language="tsx" filename="Example.tsx" code={code} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function DocsPage() {
  const [controlledValue, setControlledValue] = useState<string[]>([]);

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto py-12 px-6">
          {/* Header */}
          <div className="space-y-4 pb-8 border-b">
            <h1 className="flex items-center text-4xl font-bold tracking-tight gap-4">
              Cascader-Shadcn
              <a
                href="https://github.com/Ademking/cascader-shadcn"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium 
               text-gray-700 dark:text-gray-200 
               hover:bg-gray-100 dark:hover:bg-gray-700 
               hover:text-gray-900 dark:hover:text-white 
               transition-colors duration-150 
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Github className="h-5 w-5" />
                <span>Ademking/cascader-shadcn</span>
              </a>
            </h1>

            <p className="text-xl text-muted-foreground">
              A cascading dropdown menu component for selecting hierarchical
              data like locations, categories, or organizational structures.
            </p>

            <p className="text-xs text-muted-foreground italic">
              Inspired by the Cascader components from{" "}
              <a
                href="https://ant.design/components/cascader/"
                className="hover:underline text-gray-300"
              >
                Ant Design
              </a>{" "}
              and{" "}
              <a
                href="https://rsuitejs.com/components/cascader/"
                className="hover:underline text-gray-300"
              >
                React Suite
              </a>
            </p>
          </div>

          <section className="py-8 border-b space-y-4">
            <Cascader
              options={demoOptions}
              expandTrigger="hover"
              placeholder="Select category"
              className="w-full"
            />
          </section>

          {/* Installation */}
          <section className="py-8 border-b space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Installation
            </h2>

            <Tabs defaultValue="cli" className="w-full">
              <TabsList className="p-0 h-auto bg-background gap-1">
                <TabsTrigger
                  value="cli"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  CLI
                </TabsTrigger>
                <TabsTrigger
                  value="manual"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Manual
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cli">
                <CodeBlock
                  code={`npx shadcn@latest add https://cascader-shadcn.surge.sh/r/cascader.json`}
                  language="bash"
                  filename="bash"
                />
              </TabsContent>

              <TabsContent value="manual">
                <p className="mb-2 text-sm text-muted-foreground">
                  Copy/paste a new component at components/ui/cascader.tsx
                </p>
                <CodeBlock
                  language="tsx"
                  filename="cascader.tsx"
                  code={`"use client";

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
`}
                />
              </TabsContent>
            </Tabs>
          </section>

          {/* Usage */}
          <section className="py-8 border-b space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
            <CodeBlock
              language="tsx"
              filename="Example.jsx"
              code={`import { Cascader } from "@/components/ui/cascader"

const options = [
  {
    value: "usa",
    label: "USA",
    children: [
      {
        value: "new_york",
        label: "New York",
        children: [
          { value: "statue_of_liberty", label: "Statue of Liberty" },
        ],
      },
    ],
  },
]

export function MyComponent() {
  return (
    <Cascader
      options={options}
      onChange={(value, selectedOptions) => {
        console.log(value, selectedOptions)
      }}
      placeholder="Select location"
    />
  )
}`}
            />
          </section>

          {/* Examples */}
          <section className="py-8 space-y-10">
            <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>

            <ExampleCard
              title="Basic"
              description="A simple cascader with default settings."
              code={`<Cascader
  options={options}
  onChange={(value, selectedOptions) => {
    console.log(value, selectedOptions)
  }}
  placeholder="Please select"
/>`}
            >
              <Cascader
                options={options}
                onChange={(val, opts) => console.log("Selected:", val, opts)}
                placeholder="Please select"
              />
            </ExampleCard>

            <ExampleCard
              title="Default Value"
              description="Set an initial value with defaultValue prop."
              code={`<Cascader
  options={options}
  defaultValue={["usa", "new_york", "statue_of_liberty"]}
  placeholder="Please select"
/>`}
            >
              <Cascader
                options={options}
                defaultValue={["usa", "new_york", "statue_of_liberty"]}
                placeholder="Please select"
              />
            </ExampleCard>

            <ExampleCard
              title="Controlled"
              description="Control the selected value externally with value and onChange props."
              code={`const [value, setValue] = useState<string[]>([])

<Cascader
  options={options}
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Please select"
/>
<p>Selected: {value.join(" / ") || "None"}</p>`}
            >
              <div className="space-y-3">
                <Cascader
                  options={options}
                  value={controlledValue}
                  onChange={(val) => setControlledValue(val)}
                  placeholder="Please select"
                />
                <p className="text-sm text-muted-foreground">
                  Selected:{" "}
                  {controlledValue.length > 0
                    ? controlledValue.join(" / ")
                    : "None"}
                </p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Hover to Expand"
              description="Expand child options on hover instead of click."
              code={`<Cascader
  options={options}
  expandTrigger="hover"
  placeholder="Hover to expand"
/>`}
            >
              <Cascader
                options={options}
                expandTrigger="hover"
                placeholder="Hover to expand"
              />
            </ExampleCard>

            <ExampleCard
              title="Custom Labels with Icons"
              description="Use React components as labels with icons. Use textLabel for the display value."
              code={`import { MapPin, Building2, Waves } from 'lucide-react'

const options = [
  {
    value: "usa",
    label: (
      <span className="flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        USA
      </span>
    ),
    textLabel: "USA", // Used for display
    children: [
      {
        value: "new_york",
        label: (
          <span className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            New York
          </span>
        ),
        textLabel: "New York",
        children: [
          {
            value: "statue_of_liberty",
            label: (
              <span className="flex items-center gap-2">
                <Waves className="h-4 w-4" />
                Statue of Liberty
              </span>
            ),
            textLabel: "Statue of Liberty",
          },
        ],
      },
    ],
  },
]

<Cascader
  options={options}
  placeholder="Select with icons"
/>`}
            >
              <Cascader
                options={optionsWithIcons}
                placeholder="Select with icons"
              />
            </ExampleCard>

            <ExampleCard
              title="Custom Display"
              description="Customize how the selected value is displayed using displayRender."
              code={`<Cascader
  options={options}
  displayRender={(labels) => labels.join(" > ")}
  placeholder="Custom display"
/>`}
            >
              <Cascader
                options={options}
                displayRender={(labels) => labels.join(" > ")}
                placeholder="Custom display"
              />
            </ExampleCard>

            <ExampleCard
              title="Disabled Options"
              description="Disable specific options in the cascader."
              code={`const options = [
  {
    value: "usa",
    label: "USA",
    children: [
      {
        value: "new_york",
        label: "New York",
        disabled: true, // This option is disabled
        children: [...],
      },
    ],
  },
  {
    value: "california",
    label: "California",
    disabled: true, // This option is disabled
    children: [...],
  },
]

<Cascader options={options} placeholder="Some options disabled" />`}
            >
              <Cascader
                options={disabledOptions}
                placeholder="Some options disabled"
              />
            </ExampleCard>

            <ExampleCard
              title="Disabled"
              description="Disable the entire cascader component."
              code={`<Cascader
  options={options}
  disabled
  defaultValue={["usa", "new_york", "statue_of_liberty"]}
  placeholder="Disabled cascader"
/>`}
            >
              <Cascader
                options={options}
                disabled
                defaultValue={["usa", "new_york", "statue_of_liberty"]}
                placeholder="Disabled cascader"
              />
            </ExampleCard>

            <ExampleCard
              title="Without Clear Button"
              description="Hide the clear button by setting allowClear to false."
              code={`<Cascader
  options={options}
  allowClear={false}
  placeholder="No clear button"
/>`}
            >
              <Cascader
                options={options}
                allowClear={false}
                placeholder="No clear button"
              />
            </ExampleCard>
          </section>

          {/* API Reference */}
          <section className="py-8 border-t space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              API Reference
            </h2>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">CascaderOption</h3>
              <div className="rounded-lg border overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-medium">Property</th>
                      <th className="text-left p-3 font-medium">Type</th>
                      <th className="text-left p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-mono text-xs">value</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        string
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Unique identifier for the option
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">label</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        React.ReactNode
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Display content for the option (string or component)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">textLabel</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        string
                      </td>
                      <td className="p-3 text-muted-foreground">
                        String label for display rendering. Falls back to value
                        if not provided.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">disabled</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        boolean
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Whether the option is disabled
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">children</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        CascaderOption[]
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Nested child options
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Cascader Props</h3>
              <div className="rounded-lg border overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-medium">Prop</th>
                      <th className="text-left p-3 font-medium">Type</th>
                      <th className="text-left p-3 font-medium">Default</th>
                      <th className="text-left p-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-mono text-xs">options</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        CascaderOption[]
                      </td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        -
                      </td>
                      <td className="p-3 text-muted-foreground">
                        The data options for the cascader
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">value</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        string[]
                      </td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        -
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Controlled selected value
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">defaultValue</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        string[]
                      </td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        -
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Initial selected value
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">onChange</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        (value, options) =&gt; void
                      </td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        -
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Callback when selection changes
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">placeholder</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        string
                      </td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        "Please select"
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Placeholder text
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">disabled</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        boolean
                      </td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        false
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Disable the cascader
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">allowClear</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        boolean
                      </td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        true
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Show clear button
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">expandTrigger</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        "click" | "hover"
                      </td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        "click"
                      </td>
                      <td className="p-3 text-muted-foreground">
                        How to expand child options
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">displayRender</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        (labels, options) =&gt; ReactNode
                      </td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        -
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Custom render for display
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">className</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        string
                      </td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        -
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Custom class for trigger
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">popupClassName</td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        string
                      </td>
                      <td className="p-3 font-mono text-xs text-muted-foreground">
                        -
                      </td>
                      <td className="p-3 text-muted-foreground">
                        Custom class for dropdown
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              Built with <Cookie className="size-5" /> by{" "}
              <a
                className="hover:underline text-gray-300"
                href="https://github.com/Ademking"
              >
                Adem Kouki
              </a>
            </p>
          </footer>
        </div>
      </main>
    </ThemeProvider>
  );
}
