import type { Meta, StoryObj } from "@storybook/react";
import Nav from "../components/Nav";

const meta = {
  title: "UI/Nav",
  component: Nav,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "480px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isBackBtnShown: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
      defaultValue: true,
    },
    handleClickBackBtn: {
      action: "clicked",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
    isCloseBtnShown: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      defaultValue: true,
    },
    handleClickCloseBtn: {
      action: "clicked",
      description: "닫기 버튼 클릭 이벤트",
    },
    isTitleShown: {
      control: "boolean",
      description: "페이지 타이틀 표시 여부",
      defaultValue: true,
    },
    title: {
      control: "text",
      description: "페이지 타이틀",
      defaultValue: "title",
    },
    isDark: {
      control: "boolean",
      description: "다크모드 적용 여부",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isBackBtnShown: true,
    isCloseBtnShown: true,
    isTitleShown: true,
    handleClickBackBtn: () => {},
    handleClickCloseBtn: () => {},
    title: "타이틀",
    isDark: false,
  },
};
