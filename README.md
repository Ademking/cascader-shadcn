<div align="center">
<img src="https://github.com/user-attachments/assets/00bec932-da03-4ca7-a4de-7431bbc3f562">
</div>

# Cascader-Shadcn

A cascading dropdown component for selecting hierarchical data such as locations, categories, or organizational structures.

**Inspired by:** Cascader components from [**Ant Design**](https://ant.design/components/cascader/) and [**React Suite**](https://ant.design/components/cascader/)

---

## Features

* Hierarchical cascading menu
* Click or hover expansion
* Supports icons and custom labels
* Custom display rendering
* Disable per option or entire component
* Shadcn-compatible + Tailwind-friendly

---

## Installation

### **Using Shadcn CLI**

```bash
npx shadcn@latest add https://cascader-shadcn.surge.sh/r/cascader.json
```

### **Manual Installation**

Copy the [Cascader.tsx](src/components/ui/cascader.tsx) component from the repository into your Shadcn components directory.

---

## Usage

### **Example.jsx**

```jsx
import { Cascader } from "@/components/ui/cascader"

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
}
```

## API Reference

### **CascaderOption**

| Property    | Type             | Description                                 |
| ----------- | ---------------- | ------------------------------------------- |
| `value`     | string           | Unique option identifier                    |
| `label`     | React.ReactNode  | Display label (text or component)           |
| `textLabel` | string           | Text label for display; fallback to `value` |
| `disabled`  | boolean          | Whether this option is disabled             |
| `children`  | CascaderOption[] | Nested options                              |

---

### **Cascader Props**

| Prop             | Type                           | Default           | Description                      |
| ---------------- | ------------------------------ | ----------------- | -------------------------------- |
| `options`        | CascaderOption[]               | —                 | Cascader data options            |
| `value`          | string[]                       | —                 | Controlled selected value        |
| `defaultValue`   | string[]                       | —                 | Initial selected value           |
| `onChange`       | (value, options) => void       | —                 | Triggered when selection changes |
| `placeholder`    | string                         | `"Please select"` | Placeholder text                 |
| `disabled`       | boolean                        | `false`           | Disable the component            |
| `allowClear`     | boolean                        | `true`            | Show clear button                |
| `expandTrigger`  | `"click" \| "hover"`           | `"click"`         | How nested options expand        |
| `displayRender`  | (labels, options) => ReactNode | —                 | Custom display function          |
| `className`      | string                         | —                 | Trigger className                |
| `popupClassName` | string                         | —                 | Dropdown className               |

---

## Author

Built With 🍪 by [**Adem Kouki**](https://github.com/Ademking)

## Licence

MIT
