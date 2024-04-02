import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TagButton from "../components/Tag/TagButton";

const meta = {
  title: "Button/Tag",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "태그 버튼 내부 컨텐츠",
      defaultValue: "Tag",
    },
    isSelected: {
      control: "boolean",
      description: "태그 버튼 선택 여부",
      defaultValue: false,
    },
    onClick: { action: "clicked", description: "태그 버튼 클릭 이벤트" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Tag",
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    children: "Selected",
    isSelected: true,
  },
};
