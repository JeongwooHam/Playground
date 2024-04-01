import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/Button";

const meta = {
  title: "Button/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    primary: { control: "boolean", description: "버튼 타입" },
    label: { control: "text", description: "버튼 텍스트" },
    size: { control: "radio", description: "버튼 사이즈" },
    backgroundColor: { control: "color", description: "버튼 배경 색상" },
  },
  // 이벤트 핸들러가 필요한 스토리일 경우
  // version 8로 업그레이드 되면서 필수 속성이 되었음
  // 컴포넌트 내부에서 optional로 설정해줄 수 있지만
  // 이벤트 핸들링을 위해 존재하는 컴포넌트이므로 이벤트 핸들러를 optional로 받기 보다는 args를 추가하는 것이 적절해보인다.
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
