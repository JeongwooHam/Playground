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
    iconPath: {
      control: "text",
      description: "버튼 아이콘 키 값",
      defaultValue: "",
    },
    onClick: { action: "clicked", description: "버튼 onClick 이벤트" },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: "CLOSE",
    iconStyle: "",
    onClick: () => console.log("button clicked"),
  },
};
