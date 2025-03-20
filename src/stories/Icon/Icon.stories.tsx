import type { Meta, StoryObj } from "@storybook/react";
import { Icons } from "./index";

const meta: Meta<typeof Icons> = {
  title: "Example/Icons",
  component: Icons,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    color: "primary",
  },
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Icons color="primary" />,
};
