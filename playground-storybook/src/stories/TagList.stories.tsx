import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TagList from "../components/Tag/TagList";

const meta = {
  title: "UI/TagList",
  component: TagList,
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
    tagList: {
      control: "array",
      description: "태그 목록",
      defaultValue: ["tag1", "tag2", "tag3"],
    },
    onTagClick: {
      action: "clicked",
      description: "태그 클릭 이벤트",
    },
  },
  args: { onTagClick: fn() },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["tag1", "tag2", "tag3"],
  },
};
