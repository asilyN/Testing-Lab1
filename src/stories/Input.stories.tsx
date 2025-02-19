import type { Meta, StoryObj } from "@storybook/react";
import {Input} from "../components/Input"
const meta: Meta<typeof Input> = {
    title: "Components/Input", // Title displayed in the Storybook navigation
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
  
  // Define stories for different use cases of the component
  export const Default: Story = {
    args: {
      placeholder: "Enter text",
      variant: "default",
    },
  };
  
  export const Email: Story = {
    args: {
      placeholder: "Enter your email",
      variant: "email",
    },
  };
  
  export const Password: Story = {
    args: {
      placeholder: "Enter your password",
      variant: "password",
    },
  };