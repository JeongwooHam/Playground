import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "../components/TextField/IconButton";

const meta = {
  title: "Button/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: { control: "text", description: "버튼 내부 이미지 alt 속성" },
    iconPath: {
      control: "text",
      description: "버튼 내부 이미지 경로",
      defaultValue: "",
    },
    onClick: { action: "clicked", description: "버튼 onClick 이벤트" },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "icon",
    iconPath: "/icons/close_button.svg",
    onClick: () => console.log("button clicked"),
  },
};
