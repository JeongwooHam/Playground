import type { Meta, StoryObj } from "@storybook/react";
import TextField from "../components/TextField";

const meta = {
  title: "UI/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "input 아이디 값",
      defaultValue: "",
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
      defaultValue: "",
    },
    errorMessage: { control: "text", description: "에러 메세지" },
    placeholder: {
      control: "text",
      description: "텍스트 필드의 placeholder",
      defaultValue: "텍스트를 입력해주세요",
    },
    iconAlt: { control: "text", description: "버튼 내부 이미지 alt 속성" },
    iconPath: {
      control: "text",
      description: "버튼 내부 이미지 경로",
      defaultValue: "",
    },
    onIconClick: { action: "clicked", description: "버튼 onClick 이벤트" },
    onChange: { action: "changed", description: "텍스트 필드 값 변경 이벤트" },
    isError: { control: "boolean", description: "에러 메세지 노출 여부" },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "email",
    iconAlt: "icon",
    iconPath: "/icons/close_button.svg",
    onIconClick: () => console.log("button clicked"),
    errorMessage: "잘못된 입력값입니다.",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    onChange: () => {},
    isError: false,
  },
};
