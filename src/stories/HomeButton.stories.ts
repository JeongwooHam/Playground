import type { Meta, StoryObj } from "@storybook/react";
import HomeButton from "../components/Button/HomeButton";

const meta = {
  title: "Button/HomeButton",
  component: HomeButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    buttonTheme: { control: "select", defaultValue: "ghost" },
    onClick: { action: "clicked", description: "버튼 onClick 이벤트" },
  },
} satisfies Meta<typeof HomeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonTheme: "ghost",
    onClick: () => console.log("button clicked"),
  },
};

export const Line: Story = {
  args: {
    buttonTheme: "mono",
    onClick: () => console.log("button clicked"),
  },
};

export const Mono: Story = {
  args: {
    buttonTheme: "line",
    onClick: () => console.log("button clicked"),
  },
};
