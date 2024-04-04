import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "../components/TextField/ErrorMessage";

const meta = {
  title: "Text/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "`ErrorMessage`의 텍스트" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "잘못된 형식의 이메일입니다.",
  },
};
