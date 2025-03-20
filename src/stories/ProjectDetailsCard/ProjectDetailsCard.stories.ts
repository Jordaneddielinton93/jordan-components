import type { Meta, StoryObj } from "@storybook/react";

import ProjectDetailsCard from "./index.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ProjectDetailsCard",
  component: ProjectDetailsCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    details: { control: "text" },
    setDetails: { action: "setDetails" },
    onAddDetails: { action: "onAddDetails" },
    onViewDetails: { action: "onViewDetails" },
    hasAddEditPermission: { control: "boolean" },
    hasViewPermission: { control: "boolean" },
    shadow: { control: "select", options: ["sm", "md", "lg"] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    title: "Who we are & what we do",
    subtitle: "What your product is/does & who you are",
    details: "Details",
    setDetails: () => {},
    onAddDetails: () => {},
    onViewDetails: () => {},
    hasAddEditPermission: true,
    hasViewPermission: true,
    shadow: "lg",
  },
} satisfies Meta<typeof ProjectDetailsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Who we are & what we do",
    subtitle: "What your product is/does & who you are",
    details: "Details",
    setDetails: () => {},
    onAddDetails: () => {},
    onViewDetails: () => {},
    shadow: "lg",
  },
};
