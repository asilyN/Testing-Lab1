import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { Input } from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "email", "password"],
    },
    placeholder: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
    variant: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText("Enter text");

    await userEvent.type(input, "Welcome to Carmine's Cave");
  },
};

export const Email: Story = {
  args: {
    placeholder: "Enter your email",
    variant: "email",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText("Enter your email");

    await userEvent.type(input, "mamamo@gmail.com");
    await userEvent.type(input, "nelissa@carmine.com");
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter your password",
    variant: "password",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText("Enter your password");

    await userEvent.type(input, "mamamo");
    await userEvent.type(input, "longlivekweencarmine");
  },
};
