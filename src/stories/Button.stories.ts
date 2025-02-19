import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: {
        type: "select",
        options: ["default", "login", "icon"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
  },
};

export const Login: Story = {
  args: {
    children: "Login",
    variant: "login",
  },
};

export const Icon: Story = {
  args: {
    children: "Icon",
    variant: "icons",
  },
};