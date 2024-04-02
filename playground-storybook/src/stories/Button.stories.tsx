import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/Button";

const meta = {
  title: "Button/Button",
  component: Button,
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
    theme: {
      control: "select",
      options: ["primary", "secondary", "social", "text", "disabled"],
    },
    children: { control: "text", description: "버튼 내부 컨텐츠" },
    isDisabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
      defaultValue: false,
    },
  },
  // 이벤트 핸들러가 필요한 스토리일 경우
  // version 8로 업그레이드 되면서 필수 속성이 되었음
  // 컴포넌트 내부에서 optional로 설정해줄 수 있지만
  // 이벤트 핸들링을 위해 존재하는 컴포넌트이므로 이벤트 핸들러를 optional로 받기 보다는 args를 추가하는 것이 적절해보인다.
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: "primary",
    children: "Button",
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    theme: "primary",
    children: "Button",
    isDisabled: true,
  },
};
